import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { VERSION } from './lib-versions';
import { logStart } from './log';
import { addPackage } from './package';

/**
 * 修复所有 DELON 版本号
 */
export function UpgradeDelonVersions(version: string = VERSION): Rule {
  return (tree: Tree, context: SchematicContext) => {
    addPackage(
      tree,
      ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(name => `@delon/${name}@${version}`),
    );
    logStart(context, `Upgrade @delon/* version number`);
  };
}
