import { colors } from '@angular/cli/utilities/color';

import { ProjectDefinition } from '@angular-devkit/core/src/workspace';
import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { addPackage, getProject, logStart, readPackage, VERSION } from '../../../utils';
import { UpgradeMainVersions } from '../../../utils/versions';
import { fixHmr } from './hmr';
import { fixLayout } from './layout';

let project: ProjectDefinition;

function fixVersion(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    UpgradeMainVersions(tree);
    logStart(context, `Upgrade @delon/* version number`);
  };
}

function fixThirdVersion(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    // dependencies
    addPackage(
      tree,
      [
        `ng-zorro-antd@DEP-0.0.0-PLACEHOLDER`,
        `ngx-ueditor@DEP-0.0.0-PLACEHOLDER`,
        `ngx-tinymce@DEP-0.0.0-PLACEHOLDER`,
        `ngx-countdown@DEP-0.0.0-PLACEHOLDER`,
        'ajv@DEP-0.0.0-PLACEHOLDER'
      ],
      'dependencies'
    );
    // dependencies
    addPackage(
      tree,
      [`ng-alain-plugin-theme@DEP-0.0.0-PLACEHOLDER`, `ng-alain-sts@DEP-0.0.0-PLACEHOLDER`],
      'devDependencies'
    );
    logStart(context, `Upgrade third libs version number`);
  };
}

function fixAnalyze(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const packageJson = readPackage(tree);
    delete packageJson.devDependencies['webpack-bundle-analyzer'];
    packageJson.devDependencies['source-map-explorer'] = '^2.5.1';
    if (packageJson.scripts.analyze) {
      packageJson.scripts.analyze = (packageJson.scripts.analyze as string).replace(`--stats-json`, `--source-map`);
      packageJson.scripts['analyze:view'] = `source-map-explorer dist/**/*.js`;
    }
    logStart(context, `Usd source-map-explorer instead of webpack-bundle-analyzer`);
  };
}

function finished(): Rule {
  return (_tree: Tree, context: SchematicContext) => {
    context.logger.info(
      colors.green(
        `  ✓  Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/1863`
      )
    );
  };
}

export function v11Rule(): Rule {
  return async (tree: Tree) => {
    project = (await getProject(tree)).project;

    return chain([
      fixVersion(),
      fixThirdVersion(),
      fixAnalyze(),
      fixHmr(project.sourceRoot),
      fixLayout(project),
      finished()
    ]);
  };
}
