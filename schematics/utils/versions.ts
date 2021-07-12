import { Tree } from '@angular-devkit/schematics';
import { VERSION } from './lib-versions';
import { addPackage } from './package';

/**
 * 修复主要依赖的版本号
 */
export function UpgradeMainVersions(tree: Tree, version: string = VERSION): void {
  addPackage(
    tree,
    ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(name => `@delon/${name}@${version}`),
  );
  addPackage(
    tree,
    [
      `ng-alain@${version}`,
      `ng-alain-codelyzer@DEP-0.0.0-PLACEHOLDER`,
      `ng-alain-plugin-theme@DEP-0.0.0-PLACEHOLDER`,
      `source-map-explorer@DEP-0.0.0-PLACEHOLDER`,
      `@delon/testing@${version}`,
    ],
    'devDependencies',
  );
  // TODO: fix angular depends on 6.x
  addPackage(tree, ['ajv@DEP-0.0.0-PLACEHOLDER', 'ajv-formats@DEP-0.0.0-PLACEHOLDER']);
}
