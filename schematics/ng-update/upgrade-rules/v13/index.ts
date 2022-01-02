import { colors } from '@angular/cli/utilities/color';

import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { updateWorkspace } from '@schematics/angular/utility/workspace';

import { addPackage, logStart, readPackage } from '../../../utils';
import { UpgradeMainVersions } from '../../../utils/versions';

function removeIE(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const pkg = readPackage(tree);
    if (pkg.scripts && !pkg.scripts['ie:start']) return;

    context.logger.warn(colors.yellow(`TIPS: Starting from NG-ALAIN 13 will no longer support IE`));
  };
}

function addYarn(context: SchematicContext): Rule {
  return updateWorkspace(async workspace => {
    const cli = workspace.extensions.cli as Record<string, unknown>;
    if (cli && cli.packageManager) return;
    if (cli == null) workspace.extensions.cli = {};
    workspace.extensions.cli['packageManager'] = 'yarn';
    logStart(context, `Configuration optimization using Yarn to install dependencies`);
  });
}

function upgradeThirdVersion(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    addPackage(tree, [`ngx-ueditor@DEP-0.0.0-PLACEHOLDER`, `ngx-tinymce@DEP-0.0.0-PLACEHOLDER`], 'dependencies');
    logStart(context, `Upgrade third libs (ngx-ueditor, ngx-tinymce) version number`);
  };
}

function finished(): Rule {
  return (_tree: Tree, context: SchematicContext) => {
    context.logger.info(
      colors.green(
        `  ✓  Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/2174`
      )
    );
  };
}

export function v13Rule(): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    logStart(context, `Upgrade @delon/* version number`);
    UpgradeMainVersions(tree);
    return chain([removeIE(), upgradeThirdVersion(), addYarn(context), finished()]);
  };
}
