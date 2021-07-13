import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { updateWorkspace } from '@schematics/angular/utility/workspace';

import { BUILD_TARGET_BUILD, BUILD_TARGET_TEST, logInfo, logStart, removePackage } from '../../../utils';
import { UpgradeMainVersions } from '../../../utils/versions';

// 修正 angular.json 的格式
function fixAngularJson(context: SchematicContext): Rule {
  return updateWorkspace(async workspace => {});
}

// 修正第三方
function fixThirdPackage(context: SchematicContext): Rule {
  return updateWorkspace(async workspace => {});
}

function migrateESLint(context: SchematicContext): Rule {
  return updateWorkspace(async workspace => {});
}

export function v12Rule(): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    logStart(context, `Upgrade @delon/* version number`);
    UpgradeMainVersions(tree);
    return chain([fixThirdPackage(context), fixAngularJson(context), migrateESLint(context)]);
  };
}
