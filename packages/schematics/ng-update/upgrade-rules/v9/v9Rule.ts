import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import * as colors from 'ansi-colors';
import { overwriteFile } from '../../../utils/file';
import { addPackageToPackageJson, getJSON, overwritePackage, scriptsToAngularJson } from '../../../utils/json';
import { VERSION } from '../../../utils/lib-versions';
import { getProjectFromWorkspace, getWorkspace, Project } from '../../../utils/project';
import lintstagedrcTS from './files-tpl/lintstagedrc';
import stWidgetModuleTS from './files-tpl/st-widget.module';

let project: Project;

function fixVersion(tree: Tree, context: SchematicContext): void {
  addPackageToPackageJson(
    tree,
    ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(name => `@delon/${name}@${VERSION}`),
  );
  context.logger.info(`  ✓  Upgrade @delon/* version number`);
}

function fixThirdVersion(tree: Tree, context: SchematicContext): void {
  // dependencies
  addPackageToPackageJson(
    tree,
    [`@ngx-translate/core@^12.1.2`, `ajv@^6.12.0`, `ngx-tinymce@^9.0.0`, `ngx-ueditor@^9.0.0`, `screenfull@^5.0.2`],
    'dependencies',
  );
  // dependencies
  addPackageToPackageJson(
    tree,
    [
      `@types/jszip@^3.1.7`,
      `husky@^4.2.3`,
      `lint-staged@^10.1.2`,
      `prettier@^2.0.4`,
      `stylelint@^13.3.1`,
      `stylelint-config-prettier@^8.0.1`,
      `stylelint-config-standard@^20.0.0`,
      `stylelint-declaration-block-no-ignored-properties@^2.3.0`,
      `stylelint-order@^4.0.0`,
      `webpack-bundle-analyzer@^3.6.1`,
      `xlsx@^0.15.6`,
    ],
    'devDependencies',
  );
  context.logger.info(`  ✓  Upgrade third libs version number`);
}

function fixScripts(tree: Tree, context: SchematicContext): void {
  const json = getJSON(tree, 'package.json');
  json.scripts['lint:ts'] = `ng lint --fix`;
  delete json['lint-staged'];
  overwriteFile(tree, '/.lintstagedrc.js', lintstagedrcTS, true);
  overwritePackage(tree, json);
  context.logger.info(`  ✓  Upgrade [lint:ts] script`);
}

function fixG2Scripts(tree: Tree, context: SchematicContext): void {
  const typingsPath = '/src/typings.d.ts';
  if (!tree.exists(typingsPath)) {
    tree.create(typingsPath, '');
  }
  const content = tree.get(typingsPath)!.content.toString('UTF-8');
  if (content.includes('G2')) {
    tree.overwrite(
      typingsPath,
      content.replace(`declare var G2: any;`, '').replace(`declare var DataSet: any;`, '').replace(`declare var Slider: any;`, ''),
    );
  }

  scriptsToAngularJson(
    tree,
    [
      'node_modules/@antv/g2/dist/g2.min.js',
      'node_modules/@antv/data-set/dist/data-set.min.js',
      'node_modules/@antv/g2-plugin-slider/dist/g2-plugin-slider.min.js',
    ],
    'delete',
    ['build', 'test'],
  );
  context.logger.info(`  ✓  Removed g2 script in angular.json & declaration in /src/typings.d.ts`);
}

function addStWidgetModule(tree: Tree, context: SchematicContext): void {
  overwriteFile(tree, `${project.sourceRoot}/app/shared/st-widget/st-widget.module.ts`, stWidgetModuleTS, true, true);
  context.logger.info(colors.red(`  ⚠  Add [st-widget.module.ts], But you must manually import in [app.module.ts] to take effect.`));
}

function addGlobalConfigModule(tree: Tree, context: SchematicContext): void {
  overwriteFile(tree, `${project.sourceRoot}/app/global-config.module.ts`, stWidgetModuleTS, true, true);
  context.logger.info(
    colors.red(
      `  ⚠  Using [global-config.module.ts] instead of [delon.module.ts], But you must manually modify global config (please refer to https://ng-alain.com/docs/global-config) and remove [delon.module.ts]`,
    ),
  );
}

export function v9Rule(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    project = getProjectFromWorkspace(getWorkspace(tree));

    fixVersion(tree, context);
    fixThirdVersion(tree, context);
    fixScripts(tree, context);
    fixG2Scripts(tree, context);
    addStWidgetModule(tree, context);
    addGlobalConfigModule(tree, context);

    context.logger.info(
      colors.yellow(
        `  ✓  你还需要手工处理，请仔细阅读：https://github.com/ng-alain/ng-alain/issues/1569 \nYou still need to do it manually, please refer to the details: https://github.com/ng-alain/ng-alain/issues/1569`,
      ),
    );
  };
}
