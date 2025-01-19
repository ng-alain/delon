import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

import { logFinished, logInfo } from '../../../utils';
import { UpgradeMainVersions } from '../../../utils/versions';

function addDPVNU() {
  return (tree: Tree) => {
    const filePath = '.stylelintrc.js';
    const content = tree.read(filePath);
    if (!content) {
      return;
    }
    let contentStr = content.toString('utf-8');
    if (contentStr.includes('declaration-property-value-no-unknown')) {
      return;
    }
    // 在 'order/order' 之前插入 'declaration-property-value-no-unknown': null,
    const findContent = `    'order/order'`;
    const idx = contentStr.indexOf(findContent.trim());
    if (idx === -1) {
      return;
    }
    const insertContent = `    'declaration-property-value-no-unknown': null,\n`;
    contentStr = contentStr.replace(findContent, `${insertContent}${findContent}`);
    tree.overwrite(filePath, contentStr);
  };
}

function finished(): Rule {
  return (_tree: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());

    logFinished(
      context,
      `Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/2547`
    );
  };
}

export function v19Rule(): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    UpgradeMainVersions(tree);
    logInfo(context, `Upgrade dependency version number`);
    return chain([addDPVNU(), finished()]);
  };
}
