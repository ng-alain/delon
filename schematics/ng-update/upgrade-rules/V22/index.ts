import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

import {
  getFileContentInApplicationFiles,
  logFinished,
  logInfo,
  modifyJSON,
  readJSON,
  removePackage,
  writeFile
} from '../../../utils';
import { UpgradeMainVersions } from '../../../utils/versions';

/** The node version of https://github.com/ng-alain/ng-alain/pull/2636 */
const NODE_VERSION = '24.20.0';

/**
 * Overwrite the eslint flat config with the same template shipped to `ng-add`
 * (`application/files/root/eslint.config.mjs`), keeping a single source of truth.
 */
function updateEslintConfig(): Rule {
  return (tree: Tree) => {
    const content = getFileContentInApplicationFiles('root/eslint.config.mjs');
    if (!content) {
      // e.g. running from source without the build step; keep the user's config instead of wiping it
      return tree;
    }
    // Remove `eslint.config.js` to avoid duplicate configs, ng-alain only uses `eslint.config.mjs`
    if (tree.exists('eslint.config.js')) {
      tree.delete('eslint.config.js');
    }
    writeFile(tree, 'eslint.config.mjs', content);
    return tree;
  };
}

function updateNvmrc(): Rule {
  return (tree: Tree) => {
    writeFile(tree, '.nvmrc', NODE_VERSION);
    return tree;
  };
}

/**
 * Fix tsconfig paths after removing `baseUrl` (Angular 22):
 * - add `./` prefix to `@shared`, `@core`, `@env/*`, `@_mock`
 * - remove `baseUrl` if exists
 *
 * https://github.com/ng-alain/ng-alain/pull/2636
 */
function fixTsConfigPaths(tree: Tree): Tree {
  const tsConfigPath = 'tsconfig.json';
  if (!tree.exists(tsConfigPath)) return tree;

  const tsconfig = readJSON(tree, tsConfigPath);
  const paths = (tsconfig?.compilerOptions?.paths ?? {}) as Record<string, string[]>;
  // Prefix every relative alias (ng-alain's and user's own), so paths keep
  // resolving after `baseUrl` is gone. Absolute values are left untouched.
  const modifies = Object.entries(paths)
    .filter(([, value]) => Array.isArray(value))
    .map(([key, value]) => ({
      path: ['compilerOptions', 'paths', key],
      value: value.map(v => (v.startsWith('./') || v.startsWith('/') ? v : `./${v}`))
    }));
  if (modifies.length > 0) {
    modifyJSON(tree, tsConfigPath, modifies);
  }
  // Remove `baseUrl` only when it's the scaffold default (`./`): the `./`-prefixed
  // aliases then resolve against the tsconfig dir identically. A custom `baseUrl`
  // (e.g. `src`) is preserved so imports keep resolving.
  const baseUrl = tsconfig?.compilerOptions?.baseUrl;
  if (baseUrl == null || baseUrl === './') {
    // Delete `baseUrl` in its own pass (no-op when absent): jsonc-parser extends a
    // deletion edit to the whole line, which would overlap the path edits on a
    // single-line tsconfig.
    modifyJSON(tree, tsConfigPath, { path: ['compilerOptions', 'baseUrl'], value: undefined });
  }
  return tree;
}

function finished(): Rule {
  return (_tree: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());

    logFinished(
      context,
      `Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/2635`
    );
  };
}

export function v22Rule(): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    UpgradeMainVersions(tree);
    // Remove eslint plugins no longer used by the v22 config
    // https://github.com/ng-alain/ng-alain/pull/2636
    removePackage(
      tree,
      ['eslint-config-prettier', 'eslint-plugin-import', 'eslint-plugin-prefer-arrow'],
      'devDependencies'
    );
    logInfo(context, `Upgrade dependency version number`);
    return chain([updateEslintConfig(), updateNvmrc(), fixTsConfigPaths, finished()]);
  };
}
