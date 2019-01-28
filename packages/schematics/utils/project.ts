import { SchematicsException, Tree } from '@angular-devkit/schematics';

export const ANGULAR_CLI_WORKSPACE_PATH = '/angular.json';

/** An Angular CLI Workspacer config (angular.json) */
export interface Workspace {
  /** Link to schema. */
  $schema?: string;
  /** Workspace Schema version. */
  version: number;
  /** New project root. */
  newProjectRoot?: string;
  /** Tool options. */
  cli?: {
    /** Link to schema. */
    $schema?: string;
    [k: string]: any;
  };
  /** Tool options. */
  schematics?: {
    /** Link to schema. */
    $schema?: string;
    [k: string]: any;
  };
  /** Tool options. */
  architect?: {
    /** Link to schema. */
    $schema?: string;
    [k: string]: any;
  };
  /** Tool options. */
  targets?: {
    /** Link to schema. */
    $schema?: string;
    [k: string]: any;
  };
  /** A map of project names to project options. */
  projects: {
    [k: string]: Project;
  };
  /** 默认项目 */
  defaultProject: string;
}

/**
 * A project in an Angular CLI workspace (e.g. an app or a library). A single workspace
 * can house multiple projects.
 */
export interface Project {
  /** 名称 */
  name: string;
  /** 前缀名 */
  prefix: string;
  /** 项目类型 */
  projectType: 'application' | 'library';
  /** 项目根目录 */
  root: string;
  /** 项目源文件目录，例如：`src` */
  sourceRoot: string;
  /** Tool options. */
  cli?: {
    /** Link to schema. */
    $schema?: string;
    [k: string]: any;
  };
  /** Tool options. */
  schematics?: {
    /** Link to schema. */
    $schema?: string;
    [k: string]: any;
  };
  /** Tool options. */
  targets?: ProjectBuildOptions;
  /** Tool options. */
  architect?: ProjectBuildOptions;
}

/** Architect options for an Angular CLI workspace. */
export interface ProjectBuildOptions {
  /** Link to schema. */
  $schema?: string;
  [k: string]: any;
}

/** Gets the Angular CLI workspace config (angular.json) */
export function getWorkspace(host: Tree): Workspace {
  const configBuffer = host.read(ANGULAR_CLI_WORKSPACE_PATH);
  if (configBuffer === null) {
    throw new SchematicsException('Could not find angular.json');
  }

  return JSON.parse(configBuffer.toString());
}

/**
 * Gets a project from the Angular CLI workspace. If no project name is given, the first project
 * will be retrieved.
 */
export function getProjectFromWorkspace(config: Workspace, projectName?: string): Project {
  if (config.projects) {
    if (projectName) {
      const project = config.projects[projectName];
      if (!project) {
        throw new SchematicsException(`No project named "${projectName}" exists.`);
      }

      Object.defineProperty(project, 'name', { enumerable: false, value: projectName });
      return project;
    }

    // If there is exactly one non-e2e project, use that. Otherwise, require that a specific
    // project be specified.
    const allProjectNames = Object.keys(config.projects).filter(p => !p.includes('e2e'));
    if (allProjectNames.length === 1) {
      projectName = allProjectNames[0];
      const project = config.projects[projectName];
      Object.defineProperty(project, 'name', { enumerable: false, value: projectName });
      return project;
    } else {
      throw new SchematicsException('Multiple projects are defined; please specify a project name');
    }
  }

  throw new SchematicsException('No projects are defined');
}

/** 获取当前 Angular 项目 */
export function getProject(host: Tree, projectName?: string): Project {
  const workspace = getWorkspace(host);
  if (Object.keys(workspace.projects).length <= 0) {
    throw new SchematicsException('Could not find any project.');
  }
  if (!projectName) {
    projectName = workspace.defaultProject;
  }
  return getProjectFromWorkspace(workspace, projectName);
}
