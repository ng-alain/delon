import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import * as colors from 'ansi-colors';

import { logStart, readJSON, readPackage, writeJSON, writePackage } from '../../../utils';
import { UpgradeMainVersions } from '../../../utils/versions';

function removeStylelintConfigPrettier(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const key = `stylelint-config-prettier`;
    context.logger.info(colors.yellow(` ${key} have been deprecated`));
    // remove package.json
    const packageJson = readPackage(tree);
    if (packageJson != null) {
      delete packageJson.devDependencies[key];
      writePackage(tree, packageJson);
    }

    // remote .stylelintrc
    const stylelintrcFilePath = '.stylelintrc';
    const stylelintrcjson = readJSON(tree, stylelintrcFilePath);
    if (stylelintrcjson != null) {
      if (!Array.isArray(stylelintrcjson.extends)) stylelintrcjson.extends = [];
      const arr: string[] = stylelintrcjson.extends;
      const idx = arr.indexOf(key);
      if (idx !== -1) {
        arr.splice(idx, 1);
        writeJSON(tree, stylelintrcFilePath, stylelintrcjson);
      }
    }
  };
}

function finished(): Rule {
  return (_tree: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());

    context.logger.info(
      colors.green(
        `  ✓ Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/2390`
      )
    );
  };
}

export function v16Rule(): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    logStart(context, `Upgrade @delon/* version number`);
    UpgradeMainVersions(tree);
    return chain([removeStylelintConfigPrettier(), finished()]);
  };
}
