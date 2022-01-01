import { colors } from '@angular/cli/utilities/color';

import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { addPackage, logStart, readPackage } from '../../../utils';
import { UpgradeMainVersions } from '../../../utils/versions';

function removeIE(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const pkg = readPackage(tree);
    if (!pkg.scripts['ie:start']) return;

    context.logger.warn(colors.yellow(`TIPS: Starting from NG-ALAIN 13 will no longer support IE`));
  };
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
    return chain([removeIE(), upgradeThirdVersion(), finished()]);
  };
}
