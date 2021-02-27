import { Tree } from '@angular-devkit/schematics';
import { VERSION } from './lib-versions';
import { addPackage } from './package';

/**
 * 修复所有 DELON 版本号
 */
export function UpgradeDelonVersions(tree: Tree, version: string = VERSION): void {
  addPackage(
    tree,
    ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(name => `@delon/${name}@${version}`),
  );
}
