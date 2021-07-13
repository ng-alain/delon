import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { updateWorkspace } from '@schematics/angular/utility/workspace';

import {
  addPackage,
  BUILD_TARGET_BUILD,
  BUILD_TARGET_SERVE,
  logInfo,
  logStart,
  readPackage,
  removePackage
} from '../../../utils';
import { addESLintRule, UpgradeMainVersions } from '../../../utils/versions';

// 修正 angular.json 的格式
function fixAngularJson(context: SchematicContext): Rule {
  return updateWorkspace(async workspace => {
    workspace.projects.forEach((project, name) => {
      const removeKeys = [
        'aot',
        'vendorChunk',
        'extractLicenses',
        'buildOptimizer',
        'sourceMap',
        'optimization',
        'namedChunks'
      ];
      const build = project.targets.get(BUILD_TARGET_BUILD);
      if (build == null) throw new Error(`Can't find build node in angular.json`);
      const buildOptions = build.options;
      removeKeys.forEach(key => delete buildOptions[key]);
      const prodConfigurations = build?.configurations.production;
      removeKeys.forEach(key => delete prodConfigurations[key]);
      build.configurations.development = {
        buildOptimizer: false,
        optimization: false,
        vendorChunk: true,
        extractLicenses: false,
        sourceMap: true,
        namedChunks: true
      };
      build.defaultConfiguration = 'production';

      // serve
      const serve = project.targets.get(BUILD_TARGET_SERVE);
      if (serve == null) throw new Error(`Can't find serve node in angular.json`);
      serve.configurations.development = {
        browserTarget: `${name}:build:development`
      };
      serve.defaultConfiguration = 'development';
    });
    logStart(context, `Fix angular.json`);
  });
}

function upgradeThirdVersion(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    addPackage(
      tree,
      [`tslib@^2.2.0`, `ngx-ueditor@DEP-0.0.0-PLACEHOLDER`, `ngx-tinymce@DEP-0.0.0-PLACEHOLDER`],
      'dependencies'
    );
    logStart(context, `Upgrade third libs (ngx-ueditor, ngx-tinymce) version number`);
  };
}

function removeThird(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    removePackage(tree, ['ng-alain-codelyzer', `ngx-countdown`], 'dependencies');
    logStart(context, `Remove redundant dependencies: ng-alain-codelyzer, ngx-countdown`);
  };
}

function migrateESLint(context: SchematicContext): Rule {
  return updateWorkspace(async workspace => {
    logStart(context, `Migrate to ESLint`);
    // 新增 .eslintignore, .eslintrc.js
    logInfo(context, `Add .eslintignore, .eslintrc.js`);
    // 重命名 .prettierr -> .prettierr.js 并修正内容
    logInfo(context, `Rename .prettierr -> .prettierr.js`);
    // 更新 .vscode/settings 的 source.fixAll.tslint 为 source.fixAll.eslint
    logInfo(context, `Update .vscode/settings`);
    // 移除 tslint.json
    logInfo(context, `Remove tslint.json`);
  });
}

function fixPackageJson(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const packageJson = readPackage(tree);
    delete packageJson.scripts['pretty-quick'];
    delete packageJson.scripts['tslint-check'];
    packageJson.scripts['prepare'] = 'husky install';
    delete packageJson.devDependencies['pretty-quick'];
    logStart(context, `Update package.json`);
  };
}

export function v12Rule(): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    logStart(context, `Upgrade @delon/* version number`);
    UpgradeMainVersions(tree);
    return chain([
      fixAngularJson(context),
      migrateESLint(context),
      addESLintRule(context),
      upgradeThirdVersion(),
      removeThird(),
      fixPackageJson()
    ]);
  };
}
