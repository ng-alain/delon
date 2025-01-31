import { Tree, Rule } from '@angular-devkit/schematics';
import { updateWorkspace } from '@schematics/angular/utility/workspace';

import { VERSION } from './lib-versions';
import { addPackage } from './package';
import { BUILD_TARGET_LINT, getProjectFromWorkspace } from './workspace';

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
      `angular-eslint@DEP-0.0.0-PLACEHOLDER`,
      `@typescript-eslint/eslint-plugin@DEP-0.0.0-PLACEHOLDER`,
      `@typescript-eslint/parser@DEP-0.0.0-PLACEHOLDER`,
      `@typescript-eslint/utils@DEP-0.0.0-PLACEHOLDER`,
      `eslint@DEP-0.0.0-PLACEHOLDER`,
      `eslint-config-prettier@DEP-0.0.0-PLACEHOLDER`,
      `eslint-plugin-import@DEP-0.0.0-PLACEHOLDER`,
      `eslint-plugin-jsdoc@DEP-0.0.0-PLACEHOLDER`,
      `eslint-plugin-prefer-arrow@DEP-0.0.0-PLACEHOLDER`,
      `eslint-plugin-prettier@DEP-0.0.0-PLACEHOLDER`,
      `eslint-plugin-unused-imports@DEP-0.0.0-PLACEHOLDER`,
      `typescript-eslint@DEP-0.0.0-PLACEHOLDER`,
      `prettier@DEP-0.0.0-PLACEHOLDER`,
      `husky@DEP-0.0.0-PLACEHOLDER`,
      `ng-alain@${version}`,
      `ng-alain-plugin-theme@DEP-0.0.0-PLACEHOLDER`,
      `source-map-explorer@DEP-0.0.0-PLACEHOLDER`,
      `@angular/language-service@DEP-0.0.0-PLACEHOLDER`,
      `ngx-tinymce@DEP-0.0.0-PLACEHOLDER`,
      `@ng-util/monaco-editor@DEP-0.0.0-PLACEHOLDER`,
      `@delon/testing@${version}`
    ],
    'devDependencies'
  );
  addPackage(tree, [`rxjs@DEP-0.0.0-PLACEHOLDER`, `ng-zorro-antd@DEP-0.0.0-PLACEHOLDER`]);
}

export function addESLintRule(projectName: string): Rule {
  return updateWorkspace(async workspace => {
    const project = getProjectFromWorkspace(workspace, projectName);
    if (project == null) return;

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
}
