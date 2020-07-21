import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import * as colors from 'ansi-colors';
import { overwriteFile } from '../../../utils/file';
import { addAllowedCommonJsDependencies, addPackageToPackageJson } from '../../../utils/json';
import { VERSION } from '../../../utils/lib-versions';
import { getProjectFromWorkspace, getWorkspace, Project } from '../../../utils/project';
import browserslistrcContent from './files-tpl/browserslistrc';

let project: Project;

function fixVersion(tree: Tree, context: SchematicContext) {
  addPackageToPackageJson(
    tree,
    ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(name => `@delon/${name}@${VERSION}`),
  );
  context.logger.info(`  ✓  Upgrade @delon/* version number`);
}

function fixThirdVersion(tree: Tree, context: SchematicContext) {
  // dependencies
  addPackageToPackageJson(
    tree,
    [
      `ng-zorro-antd@^10.0.0-beta.0`,
      `@ngx-translate/core@^13.0.0`,
      `@ngx-translate/http-loader@^6.0.0`,
      `ajv@^6.12.3`,
      `ngx-tinymce@^10.0.0`,
      `ngx-ueditor@^10.0.0`,
      `screenfull@^5.0.2`,
    ],
    'dependencies',
  );
  // dependencies
  addPackageToPackageJson(
    tree,
    [
      `@types/jszip@^3.1.7`,
      `husky@^4.2.3`,
      `pretty-quick@^2.0.1`,
      `prettier@^2.0.5`,
      `stylelint@^13.3.1`,
      `stylelint-config-prettier@^8.0.1`,
      `stylelint-config-standard@^20.0.0`,
      `stylelint-declaration-block-no-ignored-properties@^2.3.0`,
      `stylelint-order@^4.0.0`,
      `webpack-bundle-analyzer@^3.6.1`,
      `antd-theme-generator@1.2.2`,
      `xlsx@^0.16.1`,
    ],
    'devDependencies',
  );
  context.logger.info(`  ✓  Upgrade third libs version number`);
}

function updateBrowserslistrc(tree: Tree, context: SchematicContext) {
  overwriteFile(tree, '/.browserslistrc', browserslistrcContent, true);
  context.logger.info(
    `  ✓  Upgrade browserslistrc, (NOTICE: If you are using the ie plugin, please make sure to manually modify 'not IE 11' to 'IE11' in '.browserslistrc')`,
  );
}

export function v10Rule(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    project = getProjectFromWorkspace(getWorkspace(tree));

    fixVersion(tree, context);
    fixThirdVersion(tree, context);
    updateBrowserslistrc(tree, context);
    addAllowedCommonJsDependencies(tree);

    context.logger.info(
      colors.green(
        `  ✓  Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/1783`,
      ),
    );
  };
}
