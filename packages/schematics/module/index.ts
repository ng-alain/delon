import { basename, dirname, normalize, relative, strings } from '@angular-devkit/core';
import {
  apply,
  branchAndMerge,
  chain,
  filter,
  mergeWith,
  move,
  noop,
  Rule,
  SchematicContext,
  SchematicsException,
  template,
  Tree,
  url,
} from '@angular-devkit/schematics';
import { addImportToModule, findNode } from '@schematics/angular/utility/ast-utils';
import { InsertChange } from '@schematics/angular/utility/change';
import { findModuleFromOptions } from '@schematics/angular/utility/find-module';
import { parseName } from '@schematics/angular/utility/parse-name';
import * as ts from 'typescript';
import { getWorkspace } from '../utils/project';
import { Schema as ModuleSchema } from './schema';

function addDeclarationToNgModule(options: ModuleSchema): Rule {
  return (host: Tree) => {
    if (!options.module) {
      return host;
    }

    const modulePath = normalize('/' + options.module);

    const text = host.read(modulePath);
    if (text === null) {
      throw new SchematicsException(`File ${modulePath} does not exist.`);
    }
    const sourceText = text.toString('utf-8');
    const source = ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);

    const importModulePath = normalize(
      `/${options.path}/${options.flat ? '' : strings.dasherize(options.name) + '/'}${strings.dasherize(options.name)}.module`,
    );
    const relativeDir = relative(dirname(modulePath), dirname(importModulePath));

    const relativePath = `${relativeDir.startsWith('.') ? relativeDir : './' + relativeDir}/${basename(importModulePath)}`;
    const changes = addImportToModule(source, modulePath, strings.classify(`${options.name}Module`), relativePath);

    const recorder = host.beginUpdate(modulePath);
    for (const change of changes) {
      if (change instanceof InsertChange) {
        recorder.insertLeft(change.pos, change.toAdd);
      }
    }
    host.commitUpdate(recorder);

    return host;
  };
}

function addRoutingModuleToTop(options: ModuleSchema): Rule {
  return (host: Tree) => {
    const modulePath = normalize(`${options.path}/routes-routing.module.ts`);
    if (!host.exists(modulePath)) {
      return host;
    }
    const sourceText = host.read(modulePath).toString('utf-8');
    const source = ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);
    const routesNode = findNode(source, ts.SyntaxKind.Identifier, 'routes');
    if (routesNode == null || routesNode.parent == null) {
      return host;
    }
    const parentNode = routesNode.parent as ts.PropertyAssignment;
    if (parentNode.initializer.kind !== ts.SyntaxKind.ArrayLiteralExpression || parentNode.initializer.getChildCount() === 0) {
      return host;
    }
    const childrenNode = findNode(parentNode.initializer, ts.SyntaxKind.Identifier, 'children');
    if (childrenNode == null || childrenNode.parent == null) {
      return host;
    }
    const recorder = host.beginUpdate(modulePath);
    const moduleName = strings.classify(`${options.name}Module`);
    const code = `{ path: '${options.name}', loadChildren: () => import('./${options.name}/${options.name}.module').then((m) => m.${moduleName}) },`;
    let pos = childrenNode.parent.end;
    // Insert it just before the `]`.
    recorder.insertRight(--pos, code);
    host.commitUpdate(recorder);
    return host;
  };
}

export default function (schema: ModuleSchema): Rule {
  return (host: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(host);
    if (!schema.project) {
      throw new SchematicsException('Option (project) is required.');
    }
    const project = workspace.projects[schema.project];

    if (schema.path === undefined) {
      const projectDirName = project.projectType === 'application' ? 'app' : 'lib';
      schema.path = `/${(project as any).sourceRoot}/${projectDirName}/routes`;
    }
    if (schema.module) {
      schema.module = findModuleFromOptions(host, schema);
    }

    const parsedPath = parseName(schema.path, schema.name);
    schema.name = parsedPath.name;
    schema.path = parsedPath.path;

    schema.routing = true;
    schema.flat = false;

    const templateSource = apply(url('./files'), [
      schema.routing ? noop() : filter(path => !path.endsWith('-routing.module.ts')),
      template({
        ...strings,
        'if-flat': (s: string) => (schema.flat ? '' : s),
        ...schema,
      }),
      move(parsedPath.path),
    ]);

    return chain([branchAndMerge(chain([addDeclarationToNgModule(schema), addRoutingModuleToTop(schema), mergeWith(templateSource)]))]);
  };
}
