import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

import { autoRegisterFormWidgets } from './autoRegisterFormWidgets';
import { removeForRoot } from './removeForRoot';
import { replaceProvideConfig } from './replaceProvideConfig';
import { logFinished, logInfo, logWarn } from '../../../utils';
import { UpgradeMainVersions } from '../../../utils/versions';

function qr(): Rule {
  return (_: Tree, context: SchematicContext) => {
    logWarn(
      context,
      `[qr] Will be removed in 18.0.0, please use [nz-qrcode](https://ng.ant.design/components/qr-code) instead.`
    );
  };
}

function finished(): Rule {
  return (_tree: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());

    logFinished(
      context,
      `Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/2390`
    );
  };
}

export function v17Rule(): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    UpgradeMainVersions(tree);
    logInfo(context, `Upgrade dependency version number`);
    return chain([removeForRoot(), autoRegisterFormWidgets(), replaceProvideConfig(), qr(), finished()]);
  };
}
