import { Tree } from '@angular-devkit/schematics';
import { getProjectFromWorkspace } from './project';

export function getJSON(host: Tree, jsonFile: string, type?: string): any {
  if (!host.exists(jsonFile)) return null;

  const sourceText = host.read(jsonFile)!.toString('utf-8');
  try {
    const json = JSON.parse(sourceText);
    if (type && !json[type]) {
      json[type] = {};
    }
    return json;
  } catch (ex) {
    console.log(
      `Can't parse json file (${jsonFile}), pls check for comments or trailing commas, or validate json via https://jsonlint.com/`,
    );
    throw ex;
  }
}

export function overwriteJSON(host: Tree, jsonFile: string, json: any) {
  host.overwrite(jsonFile, JSON.stringify(json, null, 2));
}

export function getPackage(host: Tree, type?: string) {
  return getJSON(host, 'package.json', type);
}

export function overwritePackage(host: Tree, json: any) {
  return overwriteJSON(host, 'package.json', json);
}

/**
 * Adds a package to the package.json
 *
 * ```
 * addPackageToPackageJson(host, [ '＠delon/abc＠^1.0.0' ])
 * addPackageToPackageJson(host, [ '＠delon/abc＠^1.0.0' ], 'devDependencies')
 * ```
 */
export function addPackageToPackageJson(
  host: Tree,
  pkg: string | string[],
  type: 'dependencies' | 'devDependencies' | 'scripts' = 'dependencies',
): Tree {
  const json = getJSON(host, 'package.json', type);
  if (json == null) return host;

  if (!Array.isArray(pkg)) pkg = [pkg];
  pkg.forEach(p => {
    if (!json[type][p]) {
      const pos = p.lastIndexOf('@');
      json[type][p.substr(0, pos)] = p.substr(pos + 1);
    }
  });

  overwritePackage(host, json);
  return host;
}

/**
 * Removes a package to the package.json
 *
 * ```
 * addPackageToPackageJson(host, [ '＠delon/abc' ])
 * addPackageToPackageJson(host, [ '＠delon/abc' ], 'devDependencies')
 * ```
 */
export function removePackageFromPackageJson(
  host: Tree,
  pkg: string | string[],
  type: 'dependencies' | 'devDependencies' | 'scripts' = 'dependencies',
): Tree {
  const json = getJSON(host, 'package.json', type);
  if (json == null) return host;

  if (!Array.isArray(pkg)) pkg = [pkg];
  pkg.forEach(p => delete json[type][p.substr(0, p.lastIndexOf('@'))]);

  overwritePackage(host, json);
  return host;
}

export function getAngular(host: Tree, type?: string) {
  return getJSON(host, 'angular.json', type);
}

export function overwriteAngular(host: Tree, json: any) {
  return overwriteJSON(host, 'angular.json', json);
}

export function scriptsToAngularJson(
  host: Tree,
  resources: string | string[],
  behavior: string,
  types: string[] = ['build', 'test'],
  projectName?: string,
  clean = false,
): Tree {
  const json = getAngular(host);
  const project = getProjectFromWorkspace(json, projectName);
  types.forEach(type => {
    const scriptsNode = (project.targets || project.architect)![type]!.options!.scripts as string[];
    const stylesNode = (project.targets || project.architect)![type]!.options!.styles as string[];
    for (const path of resources) {
      const list = path.endsWith('.js') ? scriptsNode : stylesNode;
      if (clean === true) list.length = 0;
      if (behavior === 'add') {
        list.push(path);
      } else {
        const idx = list.indexOf(path);
        if (idx !== -1) {
          list.splice(idx, 1);
        }
      }
    }
  });
  overwriteAngular(host, json);
  return host;
}
