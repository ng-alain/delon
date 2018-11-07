/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {
  basename,
  dirname,
  normalize,
  relative,
  strings,
} from '@angular-devkit/core';
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
import { Schema as ModuleSchema } from './schema';
import { addImportToModule } from '../utils/devkit-utils/ast-utils';
import { InsertChange } from '../utils/devkit-utils/change';
import { getWorkspace } from '../utils/devkit-utils/config';
import { findModuleFromOptions } from '../utils/devkit-utils/find-module';
import { parseName } from '../utils/devkit-utils/parse-name';

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
    const source = ts.createSourceFile(
      modulePath,
      sourceText,
      ts.ScriptTarget.Latest,
      true,
    );

    const importModulePath = normalize(
      `/${options.path}/` +
        (options.flat ? '' : strings.dasherize(options.name) + '/') +
        strings.dasherize(options.name) +
        '.module',
    );
    const relativeDir = relative(
      dirname(modulePath),
      dirname(importModulePath),
    );
    const relativePath =
      (relativeDir.startsWith('.') ? relativeDir : './' + relativeDir) +
      '/' +
      basename(importModulePath);
    const changes = addImportToModule(
      source,
      modulePath,
      strings.classify(`${options.name}Module`),
      relativePath,
    );

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

export default function(schema: ModuleSchema): Rule {
  return (host: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(host);
    if (!schema.project) {
      throw new SchematicsException('Option (project) is required.');
    }
    const project = workspace.projects[schema.project];

    if (schema.path === undefined) {
      const projectDirName =
        project.projectType === 'application' ? 'app' : 'lib';
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
      schema.routing
        ? noop()
        : filter(path => !path.endsWith('-routing.module.ts')),
      template({
        ...strings,
        'if-flat': (s: string) => (schema.flat ? '' : s),
        ...schema,
      }),
      move(parsedPath.path),
    ]);

    return chain([
      branchAndMerge(
        chain([addDeclarationToNgModule(schema), mergeWith(templateSource)]),
      ),
    ])(host, context);
  };
}
