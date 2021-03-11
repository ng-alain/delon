import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { updateWorkspace } from '@schematics/angular/utility/workspace';
import { BUILD_TARGET_BUILD, BUILD_TARGET_TEST, logInfo, logStart, removePackage } from '../../../utils';
import { UpgradeMainVersions } from '../../../utils/versions';

function removeAjvLib(context: SchematicContext): Rule {
  return updateWorkspace(async workspace => {
    workspace.projects.forEach(project => {
      [BUILD_TARGET_BUILD, BUILD_TARGET_TEST].forEach(targetName => {
        const targetOptions = project.targets?.get(targetName)?.options;
        if (!targetOptions) {
          return;
        }
        // options
        const scripts = targetOptions.scripts as Array<string | { input: string }>;
        const ajvJsPath = `node_modules/ajv/dist/ajv.bundle.js`;
        if (Array.isArray(scripts)) {
          const idx = scripts.findIndex(w => w === ajvJsPath);
          if (idx !== -1) {
            scripts.splice(idx, 1);
          }
        }

        // add allowedCommonJsDependencies
        if (targetName === BUILD_TARGET_BUILD) {
          let allowedCommonJsDependencies = targetOptions.allowedCommonJsDependencies as string[];
          if (!Array.isArray(allowedCommonJsDependencies)) {
            allowedCommonJsDependencies = [];
          }
          allowedCommonJsDependencies.push(`ajv`);
          targetOptions.allowedCommonJsDependencies = allowedCommonJsDependencies;
        }
      });
    });
    logInfo(context, `Remove ajv lib`);
  });
}

function removeQriousLib(context: SchematicContext): Rule {
  return updateWorkspace(async workspace => {
    workspace.projects.forEach(project => {
      [BUILD_TARGET_BUILD, BUILD_TARGET_TEST].forEach(targetName => {
        const targetOptions = project.targets?.get(targetName)?.options;
        if (!targetOptions) {
          return;
        }
        // options
        const scripts = targetOptions.scripts as Array<string | { input: string }>;
        const removePath = `node_modules/qrious/dist/qrious.min.js`;
        if (Array.isArray(scripts)) {
          const idx = scripts.findIndex(w => w === removePath);
          if (idx !== -1) {
            scripts.splice(idx, 1);
          }
        }
      });
    });
    logInfo(context, `Remove qrious lib`);
  });
}

export function v117Rule(): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    UpgradeMainVersions(tree);
    logStart(context, `Upgrade @delon/* version number`);
    removePackage(tree, ['qrious', 'ajv'], 'dependencies');
    return chain([removeAjvLib(context), removeQriousLib(context)]);
  };
}
