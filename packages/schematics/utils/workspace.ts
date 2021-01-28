import { JsonValue } from '@angular-devkit/core';
import { ProjectDefinition, WorkspaceDefinition } from '@angular-devkit/core/src/workspace';
import { Rule, SchematicsException, Tree } from '@angular-devkit/schematics';
import { getWorkspace, updateWorkspace } from '@schematics/angular/utility/workspace';

export const BUILD_TARGET_BUILD = 'build';
export const BUILD_TARGET_TEST = 'test';
export const BUILD_TARGET_SERVE = 'serve';
export const BUILD_TARGET_E2E = 'e2e';

function getProjectName(workspace: WorkspaceDefinition, name?: string): string | null {
  if (name && workspace.projects.has(name)) {
    return name;
  }

  if (workspace.projects.size === 1) {
    return Array.from(workspace.projects.keys())[0];
  }

  const defaultProject = workspace.extensions.defaultProject;
  if (defaultProject && typeof defaultProject === 'string') {
    return defaultProject;
  }

  return null;
}

export async function getProject(tree: Tree, projectName?: string): Promise<{ project: ProjectDefinition; name: string }> {
  const workspace = await getWorkspace(tree);
  projectName = getProjectName(workspace, projectName);
  if (!projectName || !workspace.projects.has(projectName)) {
    throw new SchematicsException(`No project named "${projectName}" exists.`);
  }
  const project = getProjectFromWorkspace(workspace, projectName);
  return { project, name: projectName };
}

export function addAssetsToTarget(
  resources: Array<{ type: 'style' | 'script'; value: string }>,
  behavior: 'add' | 'delete',
  types: string[] = [BUILD_TARGET_BUILD, BUILD_TARGET_TEST],
  projectName?: string,
  clean: boolean = false,
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
          list.push(item.value);
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

    const result = new Set<string>(...list);
    [
      // 'codesandbox/lib/api/define',
      'hammerjs',
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

export function getProjectFromWorkspace(
  workspace: WorkspaceDefinition,
  projectName: string = workspace.extensions.defaultProject as string,
): ProjectDefinition {
  const project = workspace.projects.get(projectName);

  if (!project) {
    throw new SchematicsException(`Could not find project in workspace: ${projectName}`);
  }

  return project;
}

export function getProjectTarget(
  project: ProjectDefinition,
  buildTarget: string,
  type: 'options' | 'configurations' = 'options',
): Record<string, JsonValue | undefined> {
  const options = project.targets?.get(buildTarget)?.[type];

  if (!options) {
    throw new SchematicsException(`Cannot determine project target configuration for: ${buildTarget}.${type}.`);
  }

  return options;
}
