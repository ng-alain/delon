import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { updateWorkspace } from '@schematics/angular/utility/workspace';
import * as colors from 'ansi-colors';

import {
  addPackage,
  addStylePreprocessorOptionsToAllProject,
  logStart,
  readContent,
  readPackage,
  writePackage
} from '../../../utils';
import { UpgradeMainVersions } from '../../../utils/versions';

function addStylePreprocessorOptions(): Rule {
  return updateWorkspace(async workspace => {
    addStylePreprocessorOptionsToAllProject(workspace);
  });
}

// Using ~ is deprecated and can be removed from your code
function fixLessResolver(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    logStart(
      context,
      `Removed deprecated ~ in less file, pls refer to https://github.com/webpack-contrib/less-loader#imports`
    );
    tree.visit(path => {
      if (!path.endsWith(`.less`)) return;
      const content = tree
        .read(path)
        .toString('utf8')
        .replace(/^(@import ['"]{1})~/gm, '$1');

      tree.overwrite(path, content);
    });
  };
}

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

function upgradeKarmaCoverage(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const karmaConfJs = 'karma.conf.js';
    const pkg = readPackage(tree);
    if (!pkg.devDependencies || !pkg.devDependencies['karma-coverage-istanbul-reporter'] || !tree.exists(karmaConfJs))
      return;
    delete pkg.devDependencies['karma-coverage-istanbul-reporter'];
    writePackage(tree, pkg);

    // update karma.conf.js
    const content = readContent(tree, karmaConfJs).replace(`karma-coverage-istanbul-reporter`, 'karma-coverage');
    tree.overwrite(karmaConfJs, content);

    logStart(context, `karma-coverage instead of karma-coverage-istanbul-reporter`);
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
    context.addTask(new NodePackageInstallTask());

    context.logger.info(
      colors.green(
        `  ✓ Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/2174`
      )
    );
  };
}

export function v13Rule(): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    logStart(context, `Upgrade @delon/* version number`);
    UpgradeMainVersions(tree);
    return chain([
      removeIE(),
      addStylePreprocessorOptions(),
      fixLessResolver(),
      upgradeKarmaCoverage(),
      upgradeThirdVersion(),
      addYarn(context),
      finished()
    ]);
  };
}
