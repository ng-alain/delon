import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import * as colors from 'ansi-colors';
import { tryAddFile } from '../../../utils/alain';
import { NG_ALAIN_JSON } from '../../../utils/contents';
import { overwriteFile, readContent } from '../../../utils/file';
import {
  addAllowedCommonJsDependencies,
  addPackageToPackageJson,
  getPackage,
  overwritePackage,
  removePackageFromPackageJson,
} from '../../../utils/json';
import { VERSION } from '../../../utils/lib-versions';
import { getProjectFromWorkspace, getWorkspace, Project } from '../../../utils/project';
import browserslistrcContent from './files-tpl/browserslistrc';

let project: Project;

function fixVersion(tree: Tree, context: SchematicContext): void {
  addPackageToPackageJson(
    tree,
    ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(name => `@delon/${name}@${VERSION}`),
  );
  context.logger.info(`  ✓  Upgrade @delon/* version number`);
}

function fixPluginTheme(tree: Tree, context: SchematicContext): void {
  // dependencies
  addPackageToPackageJson(tree, [`ng-alain-plugin-theme@^10.0.1`], 'devDependencies');
  // remove antd-theme-generator
  removePackageFromPackageJson(
    tree,
    ['antd-theme-generator', 'less-bundle-promise', 'less-plugin-clean-css', 'less-plugin-npm-import'],
    'devDependencies',
  );
  // fix scripts
  const json = getPackage(tree);
  const cleanCommand = `npm run color-less && `;
  ['start', 'hmr', 'build', 'ie:start', 'ie:hmr']
    .filter(key => (json.scripts[key] as string).includes(cleanCommand))
    .forEach(key => {
      json.scripts[key] = (json.scripts[key] as string).replace(cleanCommand, ``);
    });
  json.scripts.start = `ng serve -o`;
  json.scripts.hmr = `ng serve -c=hmr`;
  json.scripts.build = `ng serve -c=hmr`;
  json.scripts['color-less'] = `ng-alain-plugin-theme -t=colorLess`;
  json.scripts.theme = `ng-alain-plugin-theme -t=themeCss`;
  overwritePackage(tree, json);
  // add ng-alain.json
  tryAddFile(tree, `ng-alain.json`, NG_ALAIN_JSON);
  // fix .gitignore
  const gitignorePath = `.gitignore`;
  const gitignoreContent = readContent(tree, gitignorePath).replace(`/src/assets/alain-*.less`, `/src/assets/color.less`);
  overwriteFile(tree, gitignorePath, gitignoreContent, true, true);
  // fix src/app/layout/default/setting-drawer/setting-drawer.component.ts
  const drawerPath = `${project.sourceRoot}/app/layout/default/setting-drawer/setting-drawer.component.ts`;
  const drawerContent = readContent(tree, drawerPath).replace(`./assets/alain-default.less`, `./assets/color.less`);
  overwriteFile(tree, drawerPath, drawerContent, true, true);
  // fix src/styles.less
  const stylesPath = `${project.sourceRoot}/styles.less`;
  const stylesContent = readContent(tree, stylesPath)
    .replace(`// You can directly set the default theme`, ``)
    .replace('// - `dark` Import the official dark less style file', ``)
    .replace('// - `compact` Import the official compact less style file', ``)
    .replace(`// @import '~@delon/theme/theme-dark.less';`, ``)
    .trim();
  overwriteFile(tree, stylesPath, stylesContent, true, true);
  // fix src/styles/theme.less
  const themePath = `${project.sourceRoot}/styles/theme.less`;
  let themeContent = readContent(tree, themePath)
    .replace(`// 可以通过 https://ng-alain.github.io/ng-alain/ 获取主题参数代码`, ``)
    .replace('// The theme paraments can be generated at https://ng-alain.github.io/ng-alain/', ``)
    .trim();
  themeContent = `// You can directly set the default theme
// - \`default\` Default theme
// - \`dark\` Import the official dark less style file
// - \`compact\` Import the official compact less style file
@import '~@delon/theme/theme-default.less';

// ==========The following is the custom theme variable area==========
// The theme paraments can be generated at https://ng-alain.github.io/ng-alain/
// @primary-color: #f50;

${themeContent}
`;
  overwriteFile(tree, themePath, themeContent.trim() + '\n', true, true);

  context.logger.info(`  ✓  use 'ng-alain-plugin-theme' instand of 'scripts/themes.js' or 'scripts/color-less.js'`);
}

function fixThirdVersion(tree: Tree, context: SchematicContext): void {
  // dependencies
  addPackageToPackageJson(
    tree,
    [
      `ng-zorro-antd@^10.0.0-beta.4`,
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
      `xlsx@^0.16.1`,
    ],
    'devDependencies',
  );
  context.logger.info(`  ✓  Upgrade third libs version number`);
}

function updateBrowserslistrc(tree: Tree, context: SchematicContext): void {
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
    fixPluginTheme(tree, context);
    updateBrowserslistrc(tree, context);
    addAllowedCommonJsDependencies(tree);

    context.logger.info(
      colors.green(
        `  ✓  Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/1783`,
      ),
    );
  };
}
