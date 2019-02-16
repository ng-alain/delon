import { strings } from '@angular-devkit/core';
import {
  apply,
  branchAndMerge,
  chain,
  filter,
  mergeWith,
  move,
  noop,
  template,
  url,
  Rule,
  SchematicsException,
  SchematicContext,
  Tree,
} from '@angular-devkit/schematics';
import { findNode, insertImport } from '@schematics/angular/utility/ast-utils';
import { InsertChange } from '@schematics/angular/utility/change';
import { buildRelativePath, findModuleFromOptions } from '@schematics/angular/utility/find-module';
import { parseName } from '@schematics/angular/utility/parse-name';
import { validateHtmlSelector, validateName } from '@schematics/angular/utility/validation';
import * as ts from 'typescript';
import { getSourceFile } from './ast';
import { getProject, Project } from './project';

export interface CommonSchema {
  [key: string]: any;
  _filesPath?: string;
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
}

function buildSelector(schema: CommonSchema, projectPrefix: string) {
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
  ret.push(strings.dasherize(schema.name));
  return ret.join('-');
}

function buildComponentName(schema: CommonSchema, projectPrefix: string) {
  const ret: string[] = [schema.module];
  if (schema.target && schema.target.length > 0) {
    ret.push(...schema.target.split('/'));
  }
  ret.push(schema.name);
  ret.push(`Component`);
  return strings.classify(ret.join('-'));
}

function resolveSchema(host: Tree, project: Project, schema: CommonSchema) {
  if (!schema._filesPath) {
    schema._filesPath = './files';
  }
  // module name
  if (!schema.module) {
    throw new SchematicsException(
      `Must specify module name. (e.g: ng g ng-alain:list <list name> -m=<module name>)`,
    );
  }
  // path
  if (schema.path === undefined) {
    const projectDirName = project.projectType === 'application' ? 'app' : 'lib';
    schema.path = `/${(project as any).sourceRoot}/${projectDirName}/routes`;
  }

  schema.path += `/${schema.module}`;

  const parsedPath = parseName(schema.path, schema.name);
  schema.name = parsedPath.name;
  schema.path = parsedPath.path;
  schema.importModulePath = findModuleFromOptions(host, schema as any);
  // fill target
  if (schema.target) {
    schema.path += '/' + schema.target;
  }

  schema.routerModulePath = schema.importModulePath.replace('.module.ts', '-routing.module.ts');

  // html selector
  schema.selector =
    schema.selector || buildSelector(schema, (project as any).prefix);

  validateName(schema.name);
  validateHtmlSelector(schema.selector);
}

function addImportToModule(host: Tree, path: string, symbolName: string, fileName: string) {
  const source = getSourceFile(host, path);
  const change = insertImport(source, path, symbolName, fileName) as InsertChange;
  const declarationRecorder = host.beginUpdate(path);
  declarationRecorder.insertLeft(change.pos, change.toAdd);
  host.commitUpdate(declarationRecorder);
}

export function addValueToVariable(host: Tree, path: string, variableName: string, text: string) {
  const source = getSourceFile(host, path);
  const node = findNode(source, ts.SyntaxKind.Identifier, variableName);
  if (!node) {
    throw new SchematicsException(`Could not find any [${variableName}] variable.`);
  }
  const arr = (node.parent as any).initializer as ts.ArrayLiteralExpression;

  const change = new InsertChange(
    path,
    arr.end - 1,
    `${arr.elements && arr.elements.length > 0 ? ',' : ''}\n  ${text}`,
  );

  const declarationRecorder = host.beginUpdate(path);
  declarationRecorder.insertLeft(change.pos, change.toAdd);
  host.commitUpdate(declarationRecorder);
}

function getRelativePath(path: string, schema: CommonSchema) {
  const importPath = `/${schema.path}/${
    schema.flat ? '' : strings.dasherize(schema.name) + '/'
  }${strings.dasherize(schema.name)}.component`;
  return buildRelativePath(path, importPath);
}

function addDeclaration(schema: CommonSchema) {
  return (host: Tree) => {
    if (schema.skipImport || !schema.module) {
      return host;
    }

    // imports
    addImportToModule(
      host,
      schema.importModulePath,
      schema.componentName,
      getRelativePath(schema.importModulePath, schema),
    );

    // component
    if (schema.modal === true) {
      addValueToVariable(host, schema.importModulePath, 'COMPONENTS_NOROUNT', schema.componentName);
    } else {
      addValueToVariable(host, schema.importModulePath, 'COMPONENTS', schema.componentName);
      // routing
      addImportToModule(
        host,
        schema.routerModulePath,
        schema.componentName,
        getRelativePath(schema.routerModulePath, schema),
      );
      addValueToVariable(
        host,
        schema.routerModulePath,
        'routes',
        `{ path: '${schema.name}', component: ${schema.componentName} }`,
      );
    }

    return host;
  };
}

export function buildAlain(schema: CommonSchema): Rule {
  return (host: Tree, context: SchematicContext) => {
    const project = getProject(host, schema.project);

    resolveSchema(host, project, schema);

    schema.componentName = buildComponentName(schema, (project as any).prefix);

    // Don't support inline
    schema.inlineTemplate = false;

    const templateSource = apply(url(schema._filesPath), [
      filter(path => !path.endsWith('.DS_Store')),
      schema.spec ? noop() : filter(path => !path.endsWith('.spec.ts')),
      schema.inlineStyle ? filter(path => !path.endsWith('.__styleext__')) : noop(),
      schema.inlineTemplate ? filter(path => !path.endsWith('.html')) : noop(),
      template({
        ...strings,
        'if-flat': (s: string) => (schema.flat ? '' : s),
        ...schema,
      }),
      move(null, schema.path + '/'),
    ]);

    return chain([branchAndMerge(chain([addDeclaration(schema), mergeWith(templateSource)]))])(
      host,
      context,
    );
  };
}

export function tryDelFile(host: Tree, path: string) {
  if (host.exists(path)) {
    host.delete(path);
  }
}

export function tryAddFile(host: Tree, path: string, content: string) {
  tryDelFile(host, path);
  host.create(path, content);
}
