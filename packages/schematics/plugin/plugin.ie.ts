import { ProjectDefinition } from '@angular-devkit/core/src/workspace';
import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { updateWorkspace } from '@schematics/angular/utility/workspace';
import * as colors from 'ansi-colors';
import { debug } from 'console';
import {
  addPackage,
  BUILD_TARGET_BUILD,
  BUILD_TARGET_E2E,
  BUILD_TARGET_SERVE,
  BUILD_TARGET_TEST,
  getProject,
  overwriteFile,
  readContent,
  removePackage,
} from '../utils';
import tsConfigEs5App from './files/ie/tsconfig-es5.app';
import tsConfigEs5Spec from './files/ie/tsconfig-es5.spec';
import { PluginOptions } from './interface';

let project: ProjectDefinition;

function setAngularJson(options: PluginOptions): Rule {
  return updateWorkspace(async workspace => {
    const p = workspace.projects.get(options.project);
    if (options.type === 'add') {
      p.targets.get(BUILD_TARGET_BUILD).configurations.es5 = { tsConfig: './tsconfig-es5.app.json' };
      p.targets.get(BUILD_TARGET_SERVE).configurations.es5 = { browserTarget: `${options.project}:build:es5` };
      p.targets.get(BUILD_TARGET_TEST).configurations = {
        es5: { tsConfig: './tsconfig-es5.app.json' },
      };
      p.targets.get(BUILD_TARGET_E2E).configurations.es5 = { browserTarget: `${options.project}:build:es5` };
    } else {
      [BUILD_TARGET_BUILD, BUILD_TARGET_SERVE, BUILD_TARGET_TEST, BUILD_TARGET_E2E]
        .map(key => p.targets.get(key))
        .filter(item => !!item)
        .forEach(item => {
          delete item.configurations.es5;
        });
    }
  });
}

function setBrowserslist(options: PluginOptions): Rule {
  return (tree: Tree) => {
    const filePath = `${options.root}/.browserslistrc`;
    let content = readContent(tree, filePath);
    if (options.type === 'add') {
      content = content.replace(`not IE 11`, `IE 11`);
    } else {
      content = content.replace(`IE 11`, `not IE 11`);
    }
    overwriteFile({ tree, filePath, content, overwrite: true, contentIsString: true });
  };
}

function setPackage(options: PluginOptions): Rule {
  return (tree: Tree) => {
    // libs
    (options.type === 'add' ? addPackage : removePackage)(tree, ['classlist.js@^1.1.0', 'web-animations-js@^2.3.2'], 'dependencies');
    // scripts
    (options.type === 'add' ? addPackage : removePackage)(
      tree,
      ['ie:start@ng serve -o --configuration es5', 'ie:hmr@ng serve --hmr --configuration es5'],
      'scripts',
    );
  };
}

function setPolyfills(options: PluginOptions): Rule {
  return (tree: Tree) => {
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
  };
}

function setTsConfig(options: PluginOptions): Rule {
  return (tree: Tree) => {
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
  };
}

function finished(): Rule {
  return (_: Tree, context: SchematicContext) => {
    context.logger.info(
      colors.yellow(
        `  ⚠  If you encounter [No provider for AlainConfigService], please refer to https://github.com/ng-alain/ng-alain/issues/1624#issuecomment-623071468`,
      ),
    );
  };
}

export function pluginIE(options: PluginOptions): Rule {
  return async (tree: Tree) => {
    project = (await getProject(tree, options.project)).project;

    return chain([
      setAngularJson(options),
      setBrowserslist(options),
      setPackage(options),
      setPolyfills(options),
      setTsConfig(options),
      finished(),
    ]);
  };
}
