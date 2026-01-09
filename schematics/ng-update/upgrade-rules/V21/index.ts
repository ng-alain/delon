import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

import { logFinished, logInfo, readPackage, writePackage } from '../../../utils';
import { UpgradeMainVersions } from '../../../utils/versions';

function addStylelintOrderLib() {
  return (tree: Tree) => {
    const json = readPackage(tree);
    if (!json.devDependencies) {
      json.devDependencies = {};
    }
    if (!json.devDependencies['stylelint-order']) {
      json.devDependencies['stylelint-order'] = '@DEP-0.0.0-PLACEHOLDER';
    }
    writePackage(tree, json);
    return tree;
  };
}

function finished(): Rule {
  return (_tree: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());

    logFinished(
      context,
      `Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/2589`
    );
  };
}

export function v21Rule(): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    UpgradeMainVersions(tree);
    logInfo(context, `Upgrade dependency version number`);
    return chain([addStylelintOrderLib(), finished()]);
  };
}
