import { basename, dirname, normalize, relative, strings } from '@angular-devkit/core';
import {
  Rule,
  SchematicContext,
  SchematicsException,
  Tree,
  apply,
  branchAndMerge,
  chain,
  filter,
  mergeWith,
  move,
  noop,
  template,
  url,
} from '@angular-devkit/schematics';
import * as ts from 'typescript';
import { Schema as ModuleOptions } from './schema';
import { parseName } from '../utils/devkit-utils/parse-name';
import { findModuleFromOptions } from '../utils/devkit-utils/find-module';
import { getWorkspace } from '../utils/devkit-utils/config';
import { InsertChange } from '../utils/devkit-utils/change';
import { addImportToModule } from '../utils/devkit-utils/ast-utils';

function addDeclarationToNgModule(options: ModuleOptions): Rule {
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
      `/${options.path}/`
      + (options.flat ? '' : strings.dasherize(options.name) + '/')
      + strings.dasherize(options.name)
      + '.module',
    );
    const relativeDir = relative(dirname(modulePath), dirname(importModulePath));
    const relativePath = (relativeDir.startsWith('.') ? relativeDir : './' + relativeDir)
      + '/' + basename(importModulePath);
    const changes = addImportToModule(source, modulePath,
                                      strings.classify(`${options.name}Module`),
                                      relativePath);

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

export default function (options: ModuleOptions): Rule {
  return (host: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(host);
    if (!options.project) {
      throw new SchematicsException('Option (project) is required.');
    }
    const project = workspace.projects[options.project];

    if (options.path === undefined) {
      const projectDirName = project.projectType === 'application' ? 'app' : 'lib';
      options.path = `/${project.root}/src/${projectDirName}`;
    }
    if (options.module) {
      options.module = findModuleFromOptions(host, options);
    }

    const parsedPath = parseName(options.path, options.name);
    options.name = parsedPath.name;
    options.path = parsedPath.path;

    const templateSource = apply(url('./files'), [
      options.spec ? noop() : filter(path => !path.endsWith('.spec.ts')),
      options.routing ? noop() : filter(path => !path.endsWith('-routing.module.ts')),
      template({
        ...strings,
        'if-flat': (s: string) => options.flat ? '' : s,
        ...options,
      }),
      move(parsedPath.path),
    ]);

    return chain([
      branchAndMerge(chain([
        addDeclarationToNgModule(options),
        mergeWith(templateSource),
      ])),
    ])(host, context);
  };
}
