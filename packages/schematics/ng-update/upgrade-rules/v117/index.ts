import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { updateWorkspace } from '@schematics/angular/utility/workspace';
import { BUILD_TARGET_BUILD, BUILD_TARGET_TEST, logInfo } from '../../../utils';
import { UpgradeDelonVersions } from '../../../utils/versions';

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

export function v117Rule(): Rule {
  return async (_tree: Tree, context: SchematicContext) => {
    return chain([UpgradeDelonVersions(), removeAjvLib(context)]);
  };
}
