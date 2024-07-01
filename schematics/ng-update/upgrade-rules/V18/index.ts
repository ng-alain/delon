import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

import { logFinished, logInfo, logWarn } from '../../../utils';
import { UpgradeMainVersions } from '../../../utils/versions';
import { removeNljep } from './remove-ng-less-javascript-enabled-patch';

function finished(): Rule {
  return (_tree: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());

    logFinished(
      context,
      `Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/2502`
    );
  };
}

export function v18Rule(): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    UpgradeMainVersions(tree);
    logInfo(context, `Upgrade dependency version number`);
    return chain([removeNljep(), finished()]);
  };
}
