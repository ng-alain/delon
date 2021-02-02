import { Tree } from '@angular-devkit/schematics';
import { readJSON, writeJSON } from './json';

export const PACCKAGE_PATH = 'package.json';

export function readPackage(tree: Tree, type?: string): any {
  return readJSON(tree, PACCKAGE_PATH, type);
}

export function writePackage(tree: Tree, json: any): any {
  return writeJSON(tree, PACCKAGE_PATH, json);
}

/**
 * Adds a package to the package.json
 *
 * ```
 * addPackage(host, [ '＠delon/abc＠^1.0.0' ])
 * addPackage(host, [ '＠delon/abc＠^1.0.0' ], 'devDependencies')
 * ```
 */
export function addPackage(
  tree: Tree,
  pkg: string | string[],
  type: 'dependencies' | 'devDependencies' | 'scripts' = 'dependencies',
): Tree {
  const json = readPackage(tree, type);
  if (json == null) return tree;

  if (!Array.isArray(pkg)) pkg = [pkg];
  pkg.forEach(p => {
    if (!json[type][p]) {
      const pos = p.lastIndexOf('@');
      json[type][p.substr(0, pos)] = p.substr(pos + 1);
    }
  });

  writePackage(tree, json);
  return tree;
}

/**
 * Removes a package to the package.json
 *
 * ```
 * removePackage(host, [ '＠delon/abc' ])
 * removePackage(host, [ '＠delon/abc' ], 'devDependencies')
 * ```
 */
export function removePackage(
  tree: Tree,
  pkg: string | string[],
  type: 'dependencies' | 'devDependencies' | 'scripts' = 'dependencies',
): Tree {
  const json = readPackage(tree, type);
  if (json == null) return tree;

  if (!Array.isArray(pkg)) pkg = [pkg];
  pkg.forEach(p => delete json[type][p.indexOf('@') !== -1 ? p.substr(0, p.lastIndexOf('@')) : p]);

  writePackage(tree, json);
  return tree;
}
