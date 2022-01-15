import { basename, dirname, normalize, relative, strings } from '@angular-devkit/core';
import {
  apply,
  applyTemplates,
  branchAndMerge,
  chain,
  filter,
  mergeWith,
  move,
  noop,
  Rule,
  SchematicsException,
  Tree,
  url
} from '@angular-devkit/schematics';
import { addImportToModule, findNode } from '@schematics/angular/utility/ast-utils';
import { InsertChange } from '@schematics/angular/utility/change';
import { findModuleFromOptions, buildRelativePath } from '@schematics/angular/utility/find-module';
import { parseName } from '@schematics/angular/utility/parse-name';
import * as ts from 'typescript';

import { addProviderToModule, getProject, refreshPathRoot } from '../utils';
import { Schema as ModuleSchema } from './schema';

function addDeclarationToNgModule(options: ModuleSchema): Rule {
  return (tree: Tree) => {
    if (!options.module) {
      return tree;
    }

    const modulePath = normalize(`/${options.module}`);

    const text = tree.read(modulePath);
    if (text === null) {
      throw new SchematicsException(`File ${modulePath} does not exist.`);
    }
    const sourceText = text.toString('utf-8');
    const source = ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);

    const importModulePath = normalize(
      `/${options.path}/${options.flat ? '' : `${strings.dasherize(options.name)}/`}${strings.dasherize(
        options.name
      )}.module`
    );
    const relativeDir = relative(dirname(modulePath), dirname(importModulePath));

    const relativePath = `${relativeDir.startsWith('.') ? relativeDir : `./${relativeDir}`}/${basename(
      importModulePath
    )}`;
    const changes = addImportToModule(source, modulePath, strings.classify(`${options.name}Module`), relativePath);

    const recorder = tree.beginUpdate(modulePath);
    for (const change of changes) {
      if (change instanceof InsertChange) {
        recorder.insertLeft(change.pos, change.toAdd);
      }
    }
    tree.commitUpdate(recorder);

    return tree;
  };
}

function addRoutingModuleToTop(options: ModuleSchema): Rule {
  return (tree: Tree) => {
    const modulePath = normalize(`${options.path}/routes-routing.module.ts`);
    if (!tree.exists(modulePath)) {
      return tree;
    }
    const sourceText = tree.read(modulePath).toString('utf-8');
    const source = ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);
    const routesNode = findNode(source, ts.SyntaxKind.Identifier, 'routes');
    if (routesNode == null || routesNode.parent == null) {
      return tree;
    }
    const parentNode = routesNode.parent as ts.PropertyAssignment;
    if (
      parentNode.initializer.kind !== ts.SyntaxKind.ArrayLiteralExpression ||
      parentNode.initializer.getChildCount() === 0
    ) {
      return tree;
    }
    const childrenNode = findNode(parentNode.initializer, ts.SyntaxKind.Identifier, 'children');
    if (childrenNode == null || childrenNode.parent == null) {
      return tree;
    }
    const recorder = tree.beginUpdate(modulePath);
    const moduleName = strings.classify(`${options.name}Module`);
    let pos = childrenNode.parent.end;
    const validLines = childrenNode.parent
      .getText()
      .trim()
      .split('\n')
      .map(v => v.trim())
      .filter(v => v.length > 1 && !v.startsWith('//'));
    const comma = validLines.pop()?.endsWith(',') === false ? ', ' : '';
    const code = `${comma} { path: '${options.name}', loadChildren: () => import('./${options.name}/${options.name}.module').then((m) => m.${moduleName}) }`;
    // Insert it just before the `]`.
    recorder.insertRight(pos - 1, code);
    tree.commitUpdate(recorder);
    return tree;
  };
}

function addServiceToNgModule(options: ModuleSchema): Rule {
  return (tree: Tree) => {
    if (options.service !== 'none') return tree;

    const basePath = `/${options.path}/${options.flat ? '' : `${strings.dasherize(options.name)}/`}${strings.dasherize(
      options.name
    )}`;
    const servicePath = normalize(`${basePath}.service`);
    const importModulePath = normalize(`${basePath}.module`);
    const importServicePath = buildRelativePath(importModulePath, servicePath);
    addProviderToModule(tree, `${importModulePath}.ts`, strings.classify(`${options.name}Service`), importServicePath);
    return tree;
  };
}

export default function (schema: ModuleSchema): Rule {
  return async (tree: Tree) => {
    const proj = await getProject(tree, schema.project);

    refreshPathRoot(proj.project, schema, proj.alainProject);

    if (schema.module) {
      schema.module = findModuleFromOptions(tree, schema);
    }

    const parsedPath = parseName(schema.path, schema.name);
    schema.name = parsedPath.name;
    schema.path = parsedPath.path;

    schema.routing = true;
    schema.flat = false;

    const templateSource = apply(url('./files'), [
      schema.service === 'ignore' ? filter(filePath => !filePath.endsWith('.service.ts.template')) : noop(),
      schema.routing ? noop() : filter(path => !path.endsWith('-routing.module.ts')),
      applyTemplates({
        ...strings,
        'if-flat': (s: string) => (schema.flat ? '' : s),
        ...schema
      }),
      move(parsedPath.path)
    ]);

    return chain([
      branchAndMerge(
        chain([
          addDeclarationToNgModule(schema),
          addRoutingModuleToTop(schema),
          mergeWith(templateSource),
          addServiceToNgModule(schema)
        ])
      )
    ]);
  };
}
