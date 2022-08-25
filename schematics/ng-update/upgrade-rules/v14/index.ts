import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { updateWorkspace } from '@schematics/angular/utility/workspace';
import * as colors from 'ansi-colors';

import { addPackage, addSchematicCollections, logStart } from '../../../utils';
import { UpgradeMainVersions } from '../../../utils/versions';

function fixSchematicCollections(context: SchematicContext): Rule {
  return updateWorkspace(async workspace => {
    addSchematicCollections(workspace);
    logStart(context, `Add schematicCollections you can use 'ng g list' is equivalent to 'ng generate ng-alain:list'`);
  });
}

function addEslintPluginDeprecation(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const path = '.eslintrc.js';
    if (!tree.exists(path)) return;

    let content = tree.readText(path);
    if (content.includes(`['@typescript-eslint', 'jsdoc', 'import']`)) {
      content = content.replace(
        `['@typescript-eslint', 'jsdoc', 'import']`,
        `['@typescript-eslint', 'jsdoc', 'import', 'deprecation']`
      );
    }
    if (content.includes(`'prefer-const': 'off',`)) {
      content = content.replace(`'prefer-const': 'off',`, `'prefer-const': 'off',\n'deprecation/deprecation': 'warn',`);
    }

    tree.overwrite(path, content);
    // add deprecation
    addPackage(tree, `eslint-plugin-prettier@DEP-0.0.0-PLACEHOLDER`, 'devDependencies');
    logStart(context, `Add deprecation warn of eslint`);
  };
}

function finished(): Rule {
  return (_tree: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());

    context.logger.info(
      colors.green(
        `  ✓ Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/2285`
      )
    );
  };
}

export function v14Rule(): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    logStart(context, `Upgrade @delon/* version number`);
    UpgradeMainVersions(tree);
    return chain([fixSchematicCollections(context), addEslintPluginDeprecation(), finished()]);
  };
}
