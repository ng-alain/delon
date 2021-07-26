import { colors } from '@angular/cli/utilities/color';

import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { updateWorkspace } from '@schematics/angular/utility/workspace';

import {
  addPackage,
  BUILD_TARGET_BUILD,
  BUILD_TARGET_SERVE,
  getFileContentInApplicationFiles,
  logInfo,
  logStart,
  overwriteFile,
  OverWriteFileOptions,
  readContent,
  readJSON,
  readPackage,
  removePackage,
  tryDelFile,
  writeFile,
  writeJSON,
  writePackage
} from '../../../utils';
import { LINT_STAGED, LINT_STAGED_CONFIG } from '../../../utils/code-style';
import { addESLintRule, UpgradeMainVersions } from '../../../utils/versions';
import { Schema } from './schema';

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
    removePackage(tree, [`ngx-countdown`], 'dependencies');
    removePackage(tree, ['nz-tslint-rules', 'ng-alain-codelyzer'], 'devDependencies');
    logStart(context, `Remove redundant dependencies: ngx-countdown, ng-alain-codelyzer, nz-tslint-rules`);
  };
}

function migrateESLint(tree: Tree, context: SchematicContext): Rule {
  return updateWorkspace(_ => {
    logStart(context, `Migrate to ESLint`);
    // 新增 .eslintignore, .eslintrc.js
    ['.eslintignore', '.eslintrc.js'].forEach(f => {
      overwriteFile({
        tree,
        filePath: f,
        content: getFileContentInApplicationFiles(`root/${f}`),
        overwrite: true,
        contentIsString: true
      } as OverWriteFileOptions);
    });
    logInfo(context, `Add .eslintignore, .eslintrc.js`);
    // 重命名 .prettierr -> .prettierr.js 并修正内容
    tryDelFile(tree, '.prettierrc');
    overwriteFile({
      tree,
      filePath: '.prettierrc.js',
      content: getFileContentInApplicationFiles(`root/.prettierrc.js`),
      overwrite: true,
      contentIsString: true
    } as OverWriteFileOptions);
    logInfo(context, `Rename .prettierrc -> .prettierrc.js`);
    // 更新 .vscode/settings 的 source.fixAll.tslint 为 source.fixAll.eslint
    const vscodeSettingFilePath = `.vscode/settings.json`;
    if (tree.exists(vscodeSettingFilePath)) {
      const vscodeSettingContent = readContent(tree, vscodeSettingFilePath).replace(
        `source.fixAll.tslint`,
        `source.fixAll.eslint`
      );
      writeFile(tree, vscodeSettingFilePath, vscodeSettingContent);
      logInfo(context, `Update .vscode/settings`);
    }
    // 移除 tslint.json
    tryDelFile(tree, 'tslint.json');
    logInfo(context, `Remove tslint.json`);
  });
}

function upgradeHusky(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    logStart(context, `Upgrade husky to 6.0`);
    const packageJson = readPackage(tree);
    delete packageJson.scripts['pretty-quick'];
    delete packageJson.scripts['tslint-check'];
    packageJson.scripts['prepare'] = 'husky install';
    delete packageJson.devDependencies['pretty-quick'];
    delete packageJson['husky'];
    packageJson[LINT_STAGED] = LINT_STAGED_CONFIG;
    ['.husky/.gitignore', '.husky/pre-commit'].forEach(f => {
      overwriteFile({
        tree,
        filePath: f,
        content: getFileContentInApplicationFiles(`root/${f}`),
        overwrite: true,
        contentIsString: true
      } as OverWriteFileOptions);
    });
    writePackage(tree, packageJson);
  };
}

function formatJson(): Rule {
  return (tree: Tree) => {
    const angularJson = `angular.json`;
    const json = readJSON(tree, angularJson);
    writeJSON(tree, angularJson, json);
  };
}

function finished(): Rule {
  return (_tree: Tree, context: SchematicContext) => {
    context.logger.warn(
      colors.yellow(
        `  ✓  After the upgrade is complete, you still need to execute \`ng lint --fix\` to fix the code format, Abort more detail please refer to upgrade guide https://ng-alain.com/docs/style-guide`
      )
    );
    context.logger.info(
      colors.green(
        `  ✓  Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/2027`
      )
    );
  };
}

export function v12Rule(options: Schema): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    logStart(context, `Upgrade @delon/* version number ${JSON.stringify(options)}`);
    UpgradeMainVersions(tree);
    const rules = [
      migrateESLint(tree, context),
      addESLintRule(context),
      upgradeThirdVersion(),
      removeThird(),
      upgradeHusky(),
      formatJson(),
      finished()
    ];
    if (options.fixAngularJson !== false) {
      rules.splice(0, 0, fixAngularJson(context));
    }
    return chain(rules);
  };
}
