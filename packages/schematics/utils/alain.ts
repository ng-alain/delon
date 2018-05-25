import {
  Rule,
  Tree,
  SchematicContext,
  SchematicsException,
  apply,
  url,
  noop,
  filter,
  template,
  move,
  chain,
  branchAndMerge,
  mergeWith,
} from '@angular-devkit/schematics';
import * as ts from 'typescript';
import { normalize, strings } from '@angular-devkit/core';
import { getWorkspace, Project } from './devkit-utils/config';
import { parseName } from './devkit-utils/parse-name';
import {
  findModuleFromOptions,
  buildRelativePath,
} from './devkit-utils/find-module';
import { validateName, validateHtmlSelector } from './devkit-utils/validation';
import { Change, InsertChange } from './devkit-utils/change';
import { findNodes, findNode } from './devkit-utils/ast-utils';
import { insertImport } from './devkit-utils/route-utils';

export interface CommonSchema {
  [key: string]: any;
  name?: string;
  path?: string;
  module?: string;
  target?: string;
  componentName?: string;
  importModulePath?: string;
  routerModulePath?: string;
  selector?: string;
  prefix?: string;
}

function buildSelector(schema: CommonSchema, projectPrefix: string) {
  const ret: string[] = [];
  if (schema.prefix) {
    ret.push(schema.prefix);
  } else if (schema.prefix === undefined && projectPrefix) {
    ret.push(projectPrefix);
  }
  // module name
  if (schema.module) {
    ret.push(schema.module);
  }
  // name
  ret.push(strings.dasherize(schema.name));
  return ret.join('-');
}

function resolveSchema(host: Tree, project: Project, schema: CommonSchema) {
  // module name
  if (!schema.module) {
    throw new SchematicsException(
      `Must specify module name. (e.g: ng g ng-alain:list <list name> -m=<module name>)`,
    );
  }
  // path
  if (schema.path === undefined) {
    const projectDirName =
      project.projectType === 'application' ? 'app' : 'lib';
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

  schema.routerModulePath = schema.importModulePath.replace(
    '.module.ts',
    '-routing.module.ts',
  );

  // html selector
  schema.selector =
    schema.selector || buildSelector(schema, (project as any).prefix);

  validateName(schema.name);
  validateHtmlSelector(schema.selector);
}

function getTsSource(host: Tree, path: string): ts.SourceFile {
  const text = host.read(path);
  if (text === null) {
    throw new SchematicsException(`File ${path} does not exist.`);
  }
  const sourceText = text.toString('utf-8');
  return ts.createSourceFile(path, sourceText, ts.ScriptTarget.Latest, true);
}

function addImportToModule(
  host: Tree,
  path: string,
  symbolName: string,
  fileName: string,
) {
  const source = getTsSource(host, path);
  const change = insertImport(
    source,
    path,
    symbolName,
    fileName,
  ) as InsertChange;
  const declarationRecorder = host.beginUpdate(path);
  declarationRecorder.insertLeft(change.pos, change.toAdd);
  host.commitUpdate(declarationRecorder);
}

function addComponentToModule(
  host: Tree,
  path: string,
  varName: string,
  value: string,
) {
  const source = getTsSource(host, path);
  const node = findNode(source, ts.SyntaxKind.Identifier, varName);
  if (!node) {
    throw new SchematicsException(`Could not find any [${varName}] variable.`);
  }
  const arr = (node.parent as any).initializer as ts.ArrayLiteralExpression;

  const change = new InsertChange(
    path,
    arr.end - 1,
    `${arr.elements.length <= 0 ? '' : ','}\n  ${value}`,
  );

  const declarationRecorder = host.beginUpdate(path);
  declarationRecorder.insertLeft(change.pos, change.toAdd);
  host.commitUpdate(declarationRecorder);
}

function getRelativePath(path: string, schema: CommonSchema) {
  const importPath =
    `/${schema.path}/` +
    (schema.flat ? '' : strings.dasherize(schema.name) + '/') +
    strings.dasherize(schema.name) +
    '.component';
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
      addComponentToModule(
        host,
        schema.importModulePath,
        'COMPONENTS_NOROUNT',
        schema.componentName,
      );
    } else {
      addComponentToModule(host, schema.importModulePath, 'COMPONENTS', schema.componentName);
      // routing
      addImportToModule(
        host,
        schema.routerModulePath,
        schema.componentName,
        getRelativePath(schema.routerModulePath, schema),
      );
      addComponentToModule(
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
    const workspace = getWorkspace(host);
    if (Object.keys(workspace.projects).length <= 0) {
      throw new SchematicsException('Could not find any project.');
    }
    if (!schema.project) {
      schema.project = Object.keys(workspace.projects)[0];
    }
    const project = workspace.projects[schema.project];

    resolveSchema(host, project, schema);

    schema.componentName = strings.classify(`${schema.module}-${schema.name}-Component`);

    const templateSource = apply(url('./files'), [
      schema.spec ? noop() : filter(path => !path.endsWith('.spec.ts')),
      schema.inlineStyle
        ? filter(path => !path.endsWith('.__styleext__'))
        : noop(),
      schema.inlineTemplate ? filter(path => !path.endsWith('.html')) : noop(),
      template({
        ...strings,
        'if-flat': (s: string) => (schema.flat ? '' : s),
        ...schema,
      }),
      move(null, schema.path + '/'),
    ]);

    return chain([
      branchAndMerge(
        chain([addDeclaration(schema), mergeWith(templateSource)]),
      ),
    ])(host, context);
  };
}
