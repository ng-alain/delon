import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import * as colors from 'ansi-colors';

import { logStart, readPackage, writePackage } from '../../../utils';
import { addImportNotation } from '../../../utils/less';
import { UpgradeMainVersions } from '../../../utils/versions';

function removeDuplicateDependencies(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const pkg = readPackage(tree);
    if (!pkg.devDependencies) return;
    delete pkg.devDependencies['ng-alain-sts'];
    delete pkg.devDependencies['ng-alain-plugin-theme'];
    writePackage(tree, pkg);
    logStart(context, `Remove duplicate dev-dependencies: 'ng-alain-sts', 'ng-alain-plugin-theme'`);
  };
}

function finished(): Rule {
  return (_tree: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());

    context.logger.info(
      colors.green(
        `  ✓ Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/2347`
      )
    );
  };
}

export function v15Rule(): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    logStart(context, `Upgrade @delon/* version number`);
    UpgradeMainVersions(tree);
    return chain([addImportNotation(), removeDuplicateDependencies(), finished()]);
  };
}
