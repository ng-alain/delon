import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { colors } from '@angular/cli/utilities/color';
import { addPackageToPackageJson, getPackage } from '../../../utils/json';
import { VERSION } from '../../../utils/lib-versions';
import { logStart } from '../../../utils/log';
import { getProjectFromWorkspace, getWorkspace, Project } from '../../../utils/project';
import { fixHmr } from './hmr';
import { fixLayout } from './layout';

let project: Project;

function fixVersion(tree: Tree, context: SchematicContext): void {
  addPackageToPackageJson(
    tree,
    ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(name => `@delon/${name}@${VERSION}`),
  );
  logStart(context, `Upgrade @delon/* version number`);
}

function fixThirdVersion(tree: Tree, context: SchematicContext): void {
  // dependencies
  addPackageToPackageJson(
    tree,
    [
      `ng-zorro-antd@DEP-0.0.0-PLACEHOLDER`,
      `ngx-ueditor@DEP-0.0.0-PLACEHOLDER`,
      `ngx-tinymce@DEP-0.0.0-PLACEHOLDER`,
      `ngx-countdown@DEP-0.0.0-PLACEHOLDER`,
      'ajv@DEP-0.0.0-PLACEHOLDER',
    ],
    'dependencies',
  );
  // dependencies
  addPackageToPackageJson(tree, [`ng-alain-plugin-theme@DEP-0.0.0-PLACEHOLDER`], 'devDependencies');
  logStart(context, `Upgrade third libs version number`);
}

function fixAnalyze(tree: Tree, context: SchematicContext): void {
  const packageJson = getPackage(tree);
  delete packageJson.devDependencies['webpack-bundle-analyzer'];
  packageJson.devDependencies['source-map-explorer'] = '^2.5.1';
  if (packageJson.scripts.analyze) {
    packageJson.scripts.analyze = (packageJson.scripts.analyze as string).replace(`--stats-json`, `--source-map`);
    packageJson.scripts['analyze:view'] = `source-map-explorer dist/**/*.js`;
  }
  logStart(context, `Usd source-map-explorer instead of webpack-bundle-analyzer`);
}

export function v11Rule(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    project = getProjectFromWorkspace(getWorkspace(tree));

    fixVersion(tree, context);
    fixThirdVersion(tree, context);
    fixAnalyze(tree, context);
    fixHmr(project.sourceRoot, tree, context);
    fixLayout(project, tree, context);

    context.logger.info(
      colors.green(
        `  ✓  Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/1863`,
      ),
    );
  };
}
