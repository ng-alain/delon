import { Tree, SchematicsException } from '@angular-devkit/schematics';
import { Project, Workspace, getProjectFromWorkspace } from './devkit-utils/config';

export function getJSON(host: Tree, jsonFile: string, type?: string): any {
  if (!host.exists(jsonFile)) return null;

  const sourceText = host.read(jsonFile)!.toString('utf-8');
  const json = JSON.parse(sourceText);
  if (type && !json[type]) {
    json[type] = {};
  }
  return json;
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
  type = 'dependencies',
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
  type = 'dependencies',
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
  projectName?: string
): Tree {
  const json = getAngular(host);
  const project = getProjectFromWorkspace(json, projectName);
  types.forEach(type => {
    const scriptsNode = project.architect[type]!.options!.scripts as string[];
    const stylesNode = project.architect[type]!.options!.styles as string[];
    for (const path of resources) {
      const list = path.endsWith('.js') ? scriptsNode : stylesNode;
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
