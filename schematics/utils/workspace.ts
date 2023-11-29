import { JsonValue } from '@angular-devkit/core';
import { ProjectDefinition, WorkspaceDefinition } from '@angular-devkit/core/src/workspace';
import { Rule, SchematicsException, Tree } from '@angular-devkit/schematics';
import { getWorkspace, updateWorkspace } from '@schematics/angular/utility/workspace';

import { modifyJSON, readJSON, writeJSON } from './json';

export const BUILD_TARGET_BUILD = 'build';
export const BUILD_TARGET_TEST = 'test';
export const BUILD_TARGET_SERVE = 'serve';
export const BUILD_TARGET_LINT = 'lint';
export const NG_ALAIN_JSON = `ng-alain.json`;
export const DEFAULT_WORKSPACE_PATH = `/angular.json`;

export interface NgAlainDefinition {
  projects?: { [key: string]: NgAlainProjectDefinition };
}

export interface NgAlainProjectDefinition {
  routesRoot?: string;
}

export function getProjectName(workspace: WorkspaceDefinition, name?: string): string | null {
  if (name && workspace.projects.has(name)) {
    return name;
  }

  return Array.from(workspace.projects.keys()).pop() ?? null;
}

export function getNgAlainJson(tree: Tree): NgAlainDefinition | undefined {
  if (!tree.exists(NG_ALAIN_JSON)) return undefined;

  return readJSON(tree, NG_ALAIN_JSON);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function writeNgAlainJson(tree: Tree, json: any): any {
  return writeJSON(tree, NG_ALAIN_JSON, json);
}

export function isMulitProject(tree: Tree): boolean {
  return !tree.exists('src/main.ts');
}

export async function getProject(
  tree: Tree,
  projectName?: string
): Promise<{ project: ProjectDefinition; name: string; alainProject: NgAlainProjectDefinition }> {
  const workspace = await getWorkspace(tree);
  projectName = getProjectName(workspace, projectName);
  if (!projectName || !workspace.projects.has(projectName)) {
    throw new SchematicsException(`No project named "${projectName}" exists.`);
  }
  const project = getProjectFromWorkspace(workspace, projectName);
  const alainProject = (getNgAlainJson(tree)?.projects ?? {})[projectName] ?? {};
  return { project, name: projectName, alainProject };
}

export function addAssetsToTarget(
  resources: Array<{ type: 'style' | 'script'; value: string }>,
  behavior: 'add' | 'delete',
  types: string[] = [BUILD_TARGET_BUILD, BUILD_TARGET_TEST],
  projectName?: string,
  clean: boolean = false
): Rule {
  return updateWorkspace(async workspace => {
    const project = getProjectFromWorkspace(workspace, projectName);
    types.forEach(buildTarget => {
      const targetOptions = getProjectTarget(project, buildTarget);
      const styles = targetOptions.styles as Array<string | { input: string }>;
      const scripts = targetOptions.scripts as Array<string | { input: string }>;
      for (const item of resources) {
        const list = item.type === 'script' ? scripts : styles;
        if (clean === true) {
          list.length = 0;
        }
        if (behavior === 'add') {
          if (!list.includes(item.value)) {
            list.push(item.value);
          }
        } else {
          const idx = list.indexOf(item.value);
          if (idx !== -1) {
            list.splice(idx, 1);
          }
        }
      }
    });
  });
}

export function addAllowedCommonJsDependencies(items: string[], projectName?: string): Rule {
  return updateWorkspace(async workspace => {
    const project = getProjectFromWorkspace(workspace, projectName);
    const targetOptions = getProjectTarget(project, BUILD_TARGET_BUILD);
    let list = targetOptions.allowedCommonJsDependencies as string[];
    if (!Array.isArray(list)) {
      list = [];
    }
    if (Array.isArray(items)) {
      list = [...list, ...items];
    }

    const result = new Set<string>(list);
    ['ajv', 'ajv-formats', 'mockjs', 'file-saver', 'extend'].forEach(key => result.add(key));

    targetOptions.allowedCommonJsDependencies = Array.from(result).sort();
  });
}

export function removeAllowedCommonJsDependencies(key: string, projectName?: string): Rule {
  return updateWorkspace(async workspace => {
    const project = getProjectFromWorkspace(workspace, projectName);
    const targetOptions = getProjectTarget(project, BUILD_TARGET_BUILD);
    const list = targetOptions.allowedCommonJsDependencies as string[];
    if (!Array.isArray(list)) {
      return;
    }

    const pos = list.indexOf(key);
    if (pos === -1) return;

    list.splice(pos, 1);

    targetOptions.allowedCommonJsDependencies = list.sort();
  });
}

export function addAllowSyntheticDefaultImports(value: boolean = true): Rule {
  return (tree: Tree) => {
    modifyJSON(tree, 'tsconfig.json', { path: ['compilerOptions', 'allowSyntheticDefaultImports'], value });
    return tree;
  };
}

export function getProjectFromWorkspace(workspace: WorkspaceDefinition, projectName: string): ProjectDefinition {
  if (!projectName) {
    projectName = Array.from(workspace.projects.keys()).pop() ?? null;
  }
  const project = workspace.projects.get(projectName);

  if (!project) {
    throw new SchematicsException(`Could not find project in workspace: ${projectName}`);
  }

  return project;
}

export function getProjectTarget(
  project: ProjectDefinition,
  buildTarget: string,
  type: 'options' | 'configurations' = 'options'
): Record<string, JsonValue | undefined> {
  const options = project.targets?.get(buildTarget)?.[type];

  if (!options) {
    throw new SchematicsException(`Cannot determine project target configuration for: ${buildTarget}.${type}.`);
  }

  return options;
}

export function addStylePreprocessorOptions(workspace: WorkspaceDefinition, projectName: string): void {
  const project = getProjectFromWorkspace(workspace, projectName);
  if (project == null) return;

  const build = project.targets.get(BUILD_TARGET_BUILD);
  if (build == null || build.options == null) return;
  if (build.options.stylePreprocessorOptions == null) {
    build.options.stylePreprocessorOptions = {};
  }
  let includePaths: string[] = build.options.stylePreprocessorOptions['includePaths'] ?? [];
  if (!Array.isArray(includePaths)) includePaths = [];
  if (includePaths.includes(`node_modules/`)) return;
  includePaths.push(`node_modules/`);
  build.options.stylePreprocessorOptions['includePaths'] = includePaths;
}

export function addSchematicCollections(workspace: WorkspaceDefinition): void {
  const cli = workspace.extensions.cli as Record<string, unknown>;
  if (cli && cli.schematicCollections) return;
  if (cli == null) workspace.extensions.cli = {};
  let schematicCollections = workspace.extensions.cli['schematicCollections'] as string[];
  if (!Array.isArray(schematicCollections)) schematicCollections = [];
  if (!schematicCollections.includes(`@schematics/angular`)) schematicCollections.push(`@schematics/angular`);
  if (!schematicCollections.includes(`ng-alain`)) schematicCollections.push(`ng-alain`);
  workspace.extensions.cli['schematicCollections'] = schematicCollections;
}

export function addFileReplacements(workspace: WorkspaceDefinition, projectName: string): void {
  const project = getProjectFromWorkspace(workspace, projectName);
  if (project == null) return;
  const build = project.targets.get(BUILD_TARGET_BUILD);
  if (build == null || build.options == null) return;
  if (build.configurations == null) build.configurations = {};
  if (build.configurations.production == null) build.configurations.production = {};
  if (!Array.isArray(build.configurations.production.fileReplacements))
    build.configurations.production.fileReplacements = [];
  build.configurations.production.fileReplacements.push({
    replace: 'src/environments/environment.ts',
    with: 'src/environments/environment.prod.ts'
  });
}
