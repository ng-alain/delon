import { Tree, Rule, SchematicContext } from '@angular-devkit/schematics';
import { updateWorkspace } from '@schematics/angular/utility/workspace';

import { VERSION } from './lib-versions';
import { logInfo } from './log';
import { addPackage } from './package';
import { BUILD_TARGET_LINT } from './workspace';

/**
 * 修复主要依赖的版本号
 */
export function UpgradeMainVersions(tree: Tree, version: string = VERSION): void {
  addPackage(
    tree,
    ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(name => `@delon/${name}@${version}`)
  );
  addPackage(
    tree,
    [
      `@angular-eslint/builder@DEP-0.0.0-PLACEHOLDER`,
      `@angular-eslint/eslint-plugin@DEP-0.0.0-PLACEHOLDER`,
      `@angular-eslint/eslint-plugin-template@DEP-0.0.0-PLACEHOLDER`,
      `@angular-eslint/schematics@DEP-0.0.0-PLACEHOLDER`,
      `@angular-eslint/template-parser@DEP-0.0.0-PLACEHOLDER`,
      `@typescript-eslint/eslint-plugin@DEP-0.0.0-PLACEHOLDER`,
      `@typescript-eslint/parser@DEP-0.0.0-PLACEHOLDER`,
      `eslint@DEP-0.0.0-PLACEHOLDER`,
      `eslint-config-prettier@DEP-0.0.0-PLACEHOLDER`,
      `eslint-plugin-import@DEP-0.0.0-PLACEHOLDER`,
      `eslint-plugin-jsdoc@DEP-0.0.0-PLACEHOLDER`,
      `eslint-plugin-prefer-arrow@DEP-0.0.0-PLACEHOLDER`,
      `eslint-plugin-prettier@DEP-0.0.0-PLACEHOLDER`,
      `prettier@DEP-0.0.0-PLACEHOLDER`,
      `husky@DEP-0.0.0-PLACEHOLDER`,
      `ng-alain@${version}`,
      `ng-alain-plugin-theme@DEP-0.0.0-PLACEHOLDER`,
      `source-map-explorer@DEP-0.0.0-PLACEHOLDER`,
      `@angular/language-service@DEP-0.0.0-PLACEHOLDER`,
      `@delon/testing@${version}`
    ],
    'devDependencies'
  );
  addPackage(tree, ['ajv@DEP-0.0.0-PLACEHOLDER', 'ajv-formats@DEP-0.0.0-PLACEHOLDER']);
}

export function addESLintRule(context: SchematicContext, showLog: Boolean = true): Rule {
  return updateWorkspace(async workspace => {
    workspace.projects.forEach(project => {
      if (project.targets.has(BUILD_TARGET_LINT)) {
        project.targets.delete(BUILD_TARGET_LINT);
      }
      project.targets.set(BUILD_TARGET_LINT, {
        builder: '@angular-eslint/builder:lint',
        options: {
          lintFilePatterns: ['src/**/*.ts', 'src/**/*.html']
        }
      });
    });
    if (showLog) {
      logInfo(context, `Update 'lint' node in angular.json`);
    }
  });
}
