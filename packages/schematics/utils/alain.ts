import { strings } from '@angular-devkit/core';
import { ProjectDefinition } from '@angular-devkit/core/src/workspace';
import {
  apply,
  branchAndMerge,
  chain,
  filter,
  mergeWith,
  move,
  noop,
  Rule,
  SchematicsException,
  template,
  Tree,
  url,
} from '@angular-devkit/schematics';
import { findNode, insertImport } from '@schematics/angular/utility/ast-utils';
import { InsertChange } from '@schematics/angular/utility/change';
import { buildRelativePath, findModuleFromOptions } from '@schematics/angular/utility/find-module';
import { parseName } from '@schematics/angular/utility/parse-name';
import { validateHtmlSelector, validateName } from '@schematics/angular/utility/validation';
import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';
import { getSourceFile } from './ast';
import { getProject } from './workspace';

export interface CommonSchema {
  [key: string]: any;
  _filesPath?: string;
  schematicName?: string;
  name?: string;
  path?: string;
  module?: string;
  target?: string;
  componentName?: string;
  importModulePath?: string;
  routerModulePath?: string;
  selector?: string;
  prefix?: string;
  withoutPrefix?: boolean;
  project?: string;
}

function buildSelector(schema: CommonSchema, projectPrefix: string): string {
  const ret: string[] = [];
  if (!schema.withoutPrefix) {
    if (schema.prefix) {
      ret.push(schema.prefix);
    } else if (schema.prefix === undefined && projectPrefix) {
      ret.push(projectPrefix);
    }
  }
  // module name
  if (schema.module) {
    ret.push(schema.module);
  }
  // target name
  if (schema.target) {
    ret.push(...schema.target.split('/'));
  }
  // name
  ret.push(strings.dasherize(schema.name!));
  return ret.join('-');
}

function buildComponentName(schema: CommonSchema, _projectPrefix: string): string {
  const ret: string[] = [schema.module!];
  if (schema.target && schema.target.length > 0) {
    ret.push(...schema.target.split('/'));
  }
  ret.push(schema.name!);
  ret.push(`Component`);
  return strings.classify(ret.join('-'));
}

function resolveSchema(host: Tree, project: ProjectDefinition, schema: CommonSchema): void {
  // module name
  if (!schema.module) {
    throw new SchematicsException(`Must specify module name. (e.g: ng g ng-alain:list <list name> -m=<module name>)`);
  }
  // path
  if (schema.path === undefined) {
    schema.path = `/${project.sourceRoot}/app/routes`;
  }

  schema.path += `/${schema.module}`;

  const parsedPath = parseName(schema.path, schema.name!);
  schema.name = parsedPath.name;
  schema.path = parsedPath.path;
  const fullPath = path.join(process.cwd(), schema.path, schema.name);
  if (fs.existsSync(fullPath)) {
    throw new SchematicsException(`The directory (${fullPath}) already exists`);
  }
  schema.importModulePath = findModuleFromOptions(host, schema as any);

  if (!schema._filesPath) {
    // 若基础页尝试从 `_cli-tpl/_${schema.schematicName!}` 下查找该目录，若存在则优先使用
    if (['list', 'edit', 'view', 'empty'].includes(schema.schematicName!)) {
      const overrideDir = '/' + [project.root, `_cli-tpl/_${schema.schematicName}`].filter(i => !!i).join('/');
      const overridePath = `${overrideDir}/__path__/__name@dasherize@if-flat__/__name@dasherize__.component.ts.template`;
      if (host.exists(overridePath)) {
        // 所在目录与命令目录同属一个目录结构，因此无须特殊处理
        schema._filesPath = path.relative(__dirname, process.cwd()) + overrideDir;
      }
    }
    schema._filesPath = schema._filesPath || './files';
  }
  // fill target
  if (schema.target) {
    schema.path += '/' + schema.target;
  }

  schema.routerModulePath = schema.importModulePath!.replace('.module.ts', '-routing.module.ts');

  // html selector
  schema.selector = schema.selector || buildSelector(schema, project.prefix);

  validateName(schema.name);
  validateHtmlSelector(schema.selector);
}

export function addImportToModule(host: Tree, filePath: string, symbolName: string, fileName: string): void {
  const source = getSourceFile(host, filePath);
  const change = insertImport(source, filePath, symbolName, fileName) as InsertChange;
  const declarationRecorder = host.beginUpdate(filePath);
  declarationRecorder.insertLeft(change.pos, change.toAdd);
  host.commitUpdate(declarationRecorder);
}

export function addValueToVariable(host: Tree, filePath: string, variableName: string, text: string, needWrap: boolean = true): void {
  const source = getSourceFile(host, filePath);
  const node = findNode(source, ts.SyntaxKind.Identifier, variableName);
  if (!node) {
    throw new SchematicsException(`Could not find any [${variableName}] variable in path '${filePath}'.`);
  }
  const arr = (node.parent as any).initializer as ts.ArrayLiteralExpression;

  const change = new InsertChange(
    filePath,
    arr.end - 1,
    `${arr.elements && arr.elements.length > 0 ? ',' : ''}${needWrap ? '\n  ' : ''}${text}`,
  );

  const declarationRecorder = host.beginUpdate(filePath);
  declarationRecorder.insertLeft(change.pos, change.toAdd);
  host.commitUpdate(declarationRecorder);
}

function getRelativePath(filePath: string, schema: CommonSchema): string {
  const importPath = `/${schema.path}/${schema.flat ? '' : strings.dasherize(schema.name!) + '/'}${strings.dasherize(
    schema.name!,
  )}.component`;
  return buildRelativePath(filePath, importPath);
}

function addDeclaration(schema: CommonSchema): (host: Tree) => Tree {
  return (host: Tree) => {
    if (schema.skipImport || !schema.module) {
      return host;
    }

    // imports
    addImportToModule(host, schema.importModulePath!, schema.componentName!, getRelativePath(schema.importModulePath!, schema));
    addValueToVariable(host, schema.importModulePath!, 'COMPONENTS', schema.componentName!);

    // component
    if (schema.modal !== true) {
      // routing
      addImportToModule(host, schema.routerModulePath!, schema.componentName!, getRelativePath(schema.routerModulePath!, schema));
      addValueToVariable(host, schema.routerModulePath!, 'routes', `{ path: '${schema.name}', component: ${schema.componentName} }`);
    }

    return host;
  };
}

export function buildAlain(schema: CommonSchema): Rule {
  return async (tree: Tree) => {
    const res = await getProject(tree, schema.project);
    if (schema.project && res.name !== schema.project) {
      throw new Error(`The specified project does not match '${schema.project}', current: ${res.name}`);
    }
    const project = res.project;
    resolveSchema(tree, project, schema);

    schema.componentName = buildComponentName(schema, project.prefix);

    // Don't support inline
    schema.inlineTemplate = false;

    const templateSource = apply(url(schema._filesPath!), [
      filter(filePath => !filePath.endsWith('.DS_Store')),
      schema.spec ? noop() : filter(filePath => !filePath.endsWith('.spec.ts')),
      schema.inlineStyle ? filter(filePath => !filePath.endsWith('.__styleext__')) : noop(),
      schema.inlineTemplate ? filter(filePath => !filePath.endsWith('.html')) : noop(),
      template({
        ...strings,
        'if-flat': (s: string) => (schema.flat ? '' : s),
        ...schema,
      }),
      move(null!, schema.path + '/'),
    ]);

    return chain([branchAndMerge(chain([addDeclaration(schema), mergeWith(templateSource)]))]);
  };
}
