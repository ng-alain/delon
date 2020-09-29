import { JsonParseMode, parseJson } from '@angular-devkit/core/src/json';
import { Tree } from '@angular-devkit/schematics';
import { getProjectFromWorkspace } from './project';

export function getJSON(host: Tree, jsonFile: string, type?: string): any {
  if (!host.exists(jsonFile)) return null;

  const sourceText = host.read(jsonFile)!.toString('utf-8');
  try {
    const json = parseJson(sourceText, JsonParseMode.Loose);
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

export function overwriteJSON(host: Tree, jsonFile: string, json: any): void {
  host.overwrite(jsonFile, JSON.stringify(json, null, 2));
}

export function getPackage(host: Tree, type?: string): any {
  return getJSON(host, 'package.json', type);
}

export function overwritePackage(host: Tree, json: any): any {
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
  pkg.forEach(p => delete json[type][p.indexOf('@') !== -1 ? p.substr(0, p.lastIndexOf('@')) : p]);

  overwritePackage(host, json);
  return host;
}

export function getAngular(host: Tree, type?: string): any {
  return getJSON(host, 'angular.json', type);
}

export function overwriteAngular(host: Tree, json: any): void {
  return overwriteJSON(host, 'angular.json', json);
}

export function scriptsToAngularJson(
  host: Tree,
  resources: string | string[],
  behavior: 'add' | 'delete',
  types: string[] = ['build', 'test'],
  projectName?: string,
  clean: boolean = false,
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

export function addAllowedCommonJsDependencies(host: Tree): void {
  const json = getAngular(host);
  const project = getProjectFromWorkspace(json);
  let list = project.architect.build.options.allowedCommonJsDependencies as string[];
  if (!Array.isArray(list)) {
    list = [];
  }

  const result = new Set<string>(...list);
  // in angular.json
  [
    // 'codesandbox/lib/api/define',
    'hammerjs',
    '@angularclass/hmr',
    'file-saver',
    '@ant-design/colors',
    '@antv/path-util',
    '@antv/g-canvas',
    '@antv/g-base',
    '@antv/g-svg',
    '@antv/g-math',
    '@antv/attr',
    '@antv/adjust',
    '@antv/component',
    '@antv/util',
  ].forEach(key => result.add(key));

  project.architect.build.options.allowedCommonJsDependencies = Array.from(result).sort();

  overwriteAngular(host, json);
}
