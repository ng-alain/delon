import { strings } from '@angular-devkit/core';
import { ProjectDefinition } from '@angular-devkit/core/src/workspace';
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
import { Schema as ComponentSchema } from '@schematics/angular/component/schema';
import {
  findNode,
  insertImport,
  addProviderToModule as _addProviderToModule
} from '@schematics/angular/utility/ast-utils';
import { InsertChange } from '@schematics/angular/utility/change';
import { buildRelativePath, findModuleFromOptions, ModuleOptions } from '@schematics/angular/utility/find-module';
import { parseName } from '@schematics/angular/utility/parse-name';
import { validateHtmlSelector } from '@schematics/angular/utility/validation';
import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';

import { getSourceFile } from './ast';
import { getProject, NgAlainProjectDefinition } from './workspace';

const TEMPLATE_FILENAME_RE = /\.template$/;

export interface CommonSchema extends ComponentSchema {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  _filesPath?: string;
  schematicName?: string;
  target?: string;
  componentName?: string;
  serviceName?: string;
  importModulePath?: string;
  routerModulePath?: string;
  selector?: string;
  withoutPrefix?: boolean;
  withoutModulePrefixInComponentName?: boolean;
  skipTests?: boolean;
  service?: 'ignore' | 'none' | 'root';
  flat?: boolean;
  modal?: boolean;
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

function buildName(schema: CommonSchema, prefix: 'Component' | 'Service'): string {
  const ret: string[] = schema.withoutModulePrefixInComponentName === true ? [] : [schema.module!];
  if (schema.target && schema.target.length > 0) {
    ret.push(...schema.target.split('/'));
  }
  ret.push(schema.name!);
  // 服务类自动过滤 list, empty 两个页面的后缀
  if (prefix === 'Service' && ['list', 'empty'].includes(schema.name)) {
    ret.pop();
  }
  ret.push(prefix);
  return strings.classify(ret.join('-'));
}

export function refreshPathRoot(
  project: ProjectDefinition,
  schema: CommonSchema,
  alainProject: NgAlainProjectDefinition
): void {
  if (schema.path === undefined) {
    schema.path = `/${path.join(project.sourceRoot!, alainProject?.routesRoot ?? 'app/routes')}`;
  }
}

function resolveSchema(
  tree: Tree,
  project: ProjectDefinition,
  schema: CommonSchema,
  alainProject: NgAlainProjectDefinition
): void {
  // module name
  if (!schema.module) {
    throw new SchematicsException(`Must specify module name. (e.g: ng g ng-alain:list <list name> -m=<module name>)`);
  }
  // path
  refreshPathRoot(project, schema, alainProject);

  schema.path += `/${schema.module}`;

  const parsedPath = parseName(schema.path, schema.name!);
  schema.name = parsedPath.name;
  schema.path = parsedPath.path;
  const fullPath = path.join(process.cwd(), schema.path, schema.name);
  if (fs.existsSync(fullPath) && fs.readdirSync(fullPath).length > 0) {
    throw new SchematicsException(`The directory (${fullPath}) already exists`);
  }
  schema.importModulePath = findModuleFromOptions(tree, schema as unknown as ModuleOptions);

  if (!schema._filesPath) {
    // 若基础页尝试从 `_cli-tpl/_${schema.schematicName!}` 下查找该目录，若存在则优先使用
    if (['list', 'edit', 'view', 'empty'].includes(schema.schematicName!)) {
      const overrideDir = `/${[project.root, `_cli-tpl/_${schema.schematicName}`].filter(i => !!i).join('/')}`;
      const overridePath = `${overrideDir}/__path__/__name@dasherize@if-flat__/__name@dasherize__.component.ts`;
      if (tree.exists(overridePath) || tree.exists(`${overridePath}.template`)) {
        // 所在目录与命令目录同属一个目录结构，因此无须特殊处理
        schema._filesPath = path.relative(__dirname, process.cwd()) + overrideDir;
      }
    }
    schema._filesPath = schema._filesPath || './files';
  }
  // fill target
  if (schema.target) {
    schema.path += `/${schema.target}`;
  }

  schema.routerModulePath = schema.importModulePath!.replace('.module.ts', '-routing.module.ts');

  // html selector
  schema.selector = schema.selector || buildSelector(schema, project.prefix);

  validateHtmlSelector(schema.selector);
}

export function addImportToModule(tree: Tree, filePath: string, symbolName: string, fileName: string): void {
  const source = getSourceFile(tree, filePath);
  const change = insertImport(source, filePath, symbolName, fileName) as InsertChange;
  if (change.path == null) return;
  const declarationRecorder = tree.beginUpdate(filePath);
  declarationRecorder.insertLeft(change.pos, change.toAdd);
  tree.commitUpdate(declarationRecorder);
}

export function addProviderToModule(tree: Tree, filePath: string, serviceName: string, importPath: string): void {
  const source = getSourceFile(tree, filePath);
  const changes = _addProviderToModule(source, filePath, serviceName, importPath);
  const declarationRecorder = tree.beginUpdate(filePath);
  changes.forEach(change => {
    if (change.path == null) return;
    if (change instanceof InsertChange) {
      declarationRecorder.insertLeft(change.pos, change.toAdd);
    }
  });
  tree.commitUpdate(declarationRecorder);
}

export function addValueToVariable(
  tree: Tree,
  filePath: string,
  variableName: string,
  text: string,
  needWrap: boolean = true
): void {
  const source = getSourceFile(tree, filePath);
  const node = findNode(source, ts.SyntaxKind.Identifier, variableName);
  if (!node) {
    throw new SchematicsException(`Could not find any [${variableName}] variable in path '${filePath}'.`);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const arr = (node.parent as any).initializer as ts.ArrayLiteralExpression;

  const change = new InsertChange(
    filePath,
    arr.end - 1,
    `${arr.elements && arr.elements.length > 0 ? ',' : ''}${needWrap ? '\n  ' : ''}${text}`
  );

  const declarationRecorder = tree.beginUpdate(filePath);
  declarationRecorder.insertLeft(change.pos, change.toAdd);
  tree.commitUpdate(declarationRecorder);
}

function getRelativePath(filePath: string, schema: CommonSchema, prefix: 'component' | 'service'): string {
  const importPath = `/${schema.path}/${schema.flat ? '' : `${strings.dasherize(schema.name!)}/`}${strings.dasherize(
    schema.name!
  )}.${prefix}`;
  return buildRelativePath(filePath, importPath);
}

function addDeclaration(schema: CommonSchema): Rule {
  return (tree: Tree) => {
    if (schema.skipImport || !schema.module) {
      return tree;
    }

    // imports
    addImportToModule(
      tree,
      schema.importModulePath!,
      schema.componentName!,
      getRelativePath(schema.importModulePath!, schema, 'component')
    );
    addValueToVariable(tree, schema.importModulePath!, 'COMPONENTS', schema.componentName!);

    // component
    if (schema.modal !== true) {
      // routing
      addImportToModule(
        tree,
        schema.routerModulePath!,
        schema.componentName!,
        getRelativePath(schema.routerModulePath!, schema, 'component')
      );
      addValueToVariable(
        tree,
        schema.routerModulePath!,
        'routes',
        `{ path: '${schema.name}', component: ${schema.componentName} }`
      );
    }

    // service
    if (schema.service === 'none') {
      addProviderToModule(
        tree,
        schema.importModulePath!,
        schema.serviceName!,
        getRelativePath(schema.importModulePath!, schema, 'service')
      );
    }

    return tree;
  };
}

export function buildAlain(schema: CommonSchema): Rule {
  return async (tree: Tree) => {
    const res = await getProject(tree, schema.project);
    if (schema.project && res.name !== schema.project) {
      throw new SchematicsException(`The specified project does not match '${schema.project}', current: ${res.name}`);
    }
    const project = res.project;
    resolveSchema(tree, project, schema, res.alainProject);

    schema.componentName = buildName(schema, 'Component');
    schema.serviceName = buildName(schema, 'Service');

    // Don't support inline
    schema.inlineTemplate = false;

    const templateSource = apply(url(schema._filesPath!), [
      filter(filePath => !filePath.endsWith('.DS_Store')),
      schema.service === 'ignore' ? filter(filePath => !filePath.endsWith('.service.ts.template')) : noop(),
      schema.skipTests ? filter(filePath => !filePath.endsWith('.spec.ts.template')) : noop(),
      schema.inlineStyle ? filter(filePath => !filePath.endsWith('.__style__.template')) : noop(),
      schema.inlineTemplate ? filter(filePath => !filePath.endsWith('.html.template')) : noop(),
      // schema.spec ? noop() : filter(filePath => !filePath.endsWith('.spec.ts')),
      // schema.inlineStyle ? filter(filePath => !filePath.endsWith('.__styleext__')) : noop(),
      // schema.inlineTemplate ? filter(filePath => !filePath.endsWith('.html')) : noop(),
      applyTemplates({
        ...strings,
        'if-flat': (s: string) => (schema.flat ? '' : s),
        ...schema
      }),
      move(null!, `${schema.path}/`)
    ]);

    return chain([branchAndMerge(chain([addDeclaration(schema), mergeWith(templateSource)]))]);
  };
}
