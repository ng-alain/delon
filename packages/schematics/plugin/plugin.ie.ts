import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import * as colors from 'ansi-colors';
import { overwriteFile, readContent } from '../utils';
import { addPackageToPackageJson, getAngular, overwriteAngular, removePackageFromPackageJson } from '../utils/json';
import { getProject, getProjectFromWorkspace, Project } from '../utils/project';
import tsConfigEs5App from './files/ie/tsconfig-es5.app';
import tsConfigEs5Spec from './files/ie/tsconfig-es5.spec';
import { PluginOptions } from './interface';

let project: Project;

function setAngularJson(host: Tree, options: PluginOptions): void {
  const json = getAngular(host);
  const p = getProjectFromWorkspace(json, options.project);
  if (options.type === 'add') {
    p.architect.build.configurations.es5 = { tsConfig: './tsconfig-es5.app.json' };
    p.architect.serve.configurations.es5 = { browserTarget: `${p.name}:build:es5` };
    p.architect.test.configurations = {
      es5: { tsConfig: './tsconfig-es5.app.json' },
    };
    p.architect.e2e.configurations.es5 = { browserTarget: `${p.name}:build:es5` };
  } else {
    delete p.architect.build.configurations.es5;
    delete p.architect.serve.configurations.es5;
    delete p.architect.test.configurations;
    delete p.architect.e2e.configurations.es5;
  }
  overwriteAngular(host, json);
}

function setBrowserslist(tree: Tree, options: PluginOptions): void {
  const filePath = `${options.root}/.browserslistrc`;
  let content = readContent(tree, filePath);
  if (options.type === 'add') {
    content = content.replace(`not IE 11`, `IE 11`);
  } else {
    content = content.replace(`IE 11`, `not IE 11`);
  }
  overwriteFile({ tree, filePath, content, overwrite: true, contentIsString: true });
}

function setPackage(host: Tree, options: PluginOptions): void {
  // libs
  (options.type === 'add' ? addPackageToPackageJson : removePackageFromPackageJson)(
    host,
    ['classlist.js@^1.1.0', 'web-animations-js@^2.3.2'],
    'dependencies',
  );
  // scripts
  (options.type === 'add' ? addPackageToPackageJson : removePackageFromPackageJson)(
    host,
    ['ie:start@ng serve -o --configuration es5', 'ie:hmr@ng serve --hmr --configuration es5'],
    'scripts',
  );
}

function setPolyfills(tree: Tree, options: PluginOptions): void {
  const filePath = `${project.sourceRoot}/polyfills.ts`;
  let content = '';
  if (options.type === 'add') {
    content = `import 'core-js/modules/es.array.includes';
import 'classlist.js';
import 'web-animations-js';
import 'zone.js/dist/zone';`;
  } else {
    content = `import 'zone.js/dist/zone';`;
  }
  overwriteFile({ tree, filePath, content, overwrite: true, contentIsString: true });
}

function setTsConfig(tree: Tree, options: PluginOptions): void {
  // build
  const buildFilePath = `${options.root}/tsconfig-es5.app.json`;
  if (tree.exists(buildFilePath)) tree.delete(buildFilePath);
  if (options.type === 'add') {
    overwriteFile({
      tree,
      filePath: buildFilePath,
      content: JSON.stringify(tsConfigEs5App, null, 2),
      overwrite: true,
      contentIsString: true,
    });
  }
  // spec
  const specFilePath = `${options.root}/tsconfig-es5.spec.json`;
  if (tree.exists(specFilePath)) tree.delete(specFilePath);
  if (options.type === 'add') {
    overwriteFile({
      tree,
      filePath: specFilePath,
      content: JSON.stringify(tsConfigEs5Spec, null, 2),
      overwrite: true,
      contentIsString: true,
    });
  }
}

export function pluginIE(options: PluginOptions): Rule {
  return (host: Tree, context: SchematicContext) => {
    project = getProject(host, options.project);

    setAngularJson(host, options);
    setBrowserslist(host, options);
    setPackage(host, options);
    setPolyfills(host, options);
    setTsConfig(host, options);

    context.logger.info(
      colors.yellow(
        `  ⚠  If you encounter [No provider for AlainConfigService], please refer to https://github.com/ng-alain/ng-alain/issues/1624#issuecomment-623071468`,
      ),
    );
  };
}
