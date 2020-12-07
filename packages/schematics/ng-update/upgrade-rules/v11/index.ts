import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { colors } from '@angular/cli/utilities/color';
import { addPackageToPackageJson } from '../../../utils/json';
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
      // TODO: Wating ng-zorro-antd upgrade to 11
      // `ng-zorro-antd@^10.0.0-beta.4`,
      `ngx-ueditor@^11.0.0`,
      `ngx-tinymce@^11.0.0`,
      `ngx-ueditor@^11.0.0`,
    ],
    'dependencies',
  );
  // dependencies
  addPackageToPackageJson(tree, [`webpack-bundle-analyzer@^4.1.0`], 'devDependencies');
  logStart(context, `Upgrade third libs version number`);
}

export function v11Rule(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    project = getProjectFromWorkspace(getWorkspace(tree));

    fixVersion(tree, context);
    fixThirdVersion(tree, context);
    fixHmr(project.sourceRoot, tree, context);
    fixLayout(project, tree, context);

    context.logger.info(
      colors.green(
        `  ✓  Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/1863`,
      ),
    );
  };
}
