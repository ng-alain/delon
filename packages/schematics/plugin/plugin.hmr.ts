import { Tree, SchematicContext } from '@angular-devkit/schematics';
import { PluginOptions } from './interface';
import { tryAddFile, addValueToVariable, tryDelFile } from '../utils/alain';
import {
  addPackageToPackageJson,
  removePackageFromPackageJson,
  getAngular,
  overwriteAngular,
  getJSON,
  overwriteJSON,
} from '../utils/json';
import { getProjectFromWorkspace } from '../utils/project';
import { HMR_CONTENT } from '../utils/contents';

function configToAngularJson(host: Tree, options: PluginOptions) {
  const json = getAngular(host);
  const project = getProjectFromWorkspace(json, options.project);
  // add build config
  (project.targets || project.architect)!.build!.configurations['hmr'] = {
    fileReplacements: [
      {
        replace: `${options.sourceRoot}/environments/environment.ts`,
        with: `${options.sourceRoot}/environments/environment.hmr.ts`,
      },
    ],
  };
  // add serve config
  (project.targets || project.architect)!.serve!.configurations['hmr'] = {
    browserTarget: `${project.name}:build:hmr`,
    hmr: true,
  };

  overwriteAngular(host, json);
}

function envConfig(host: Tree, options: PluginOptions) {
  const defEnvPath = `${options.sourceRoot}/environments/environment.ts`;
  const defContent = host.get(defEnvPath).content;
  if (!host.exists(defEnvPath)) return;
  // 1. update default env file
  addValueToVariable(host, defEnvPath, 'environment', 'hmr: false');
  // 2. update prod env file
  addValueToVariable(
    host,
    `${options.sourceRoot}/environments/environment.prod.ts`,
    'environment',
    'hmr: false',
  );
  // 3. copy default env file to hmr file
  const hmrEnvPath = `${options.sourceRoot}/environments/environment.hmr.ts`;
  host.create(hmrEnvPath, defContent);
  addValueToVariable(host, hmrEnvPath, 'environment', 'hmr: true');
}

function addNodeTypeToTsconfig(host: Tree, options: PluginOptions) {
  const tsConfigPath = `${options.sourceRoot}/tsconfig.app.json`;
  if (!host.exists(tsConfigPath)) return;
  const json = getJSON(host, tsConfigPath);
  const TYPENAME = 'node';
  if (options.type === 'add') {
    json.compilerOptions.types = [TYPENAME];
  } else {
    const idx = (json.compilerOptions.types as string[]).findIndex(
      w => w === TYPENAME,
    );
    if (idx !== -1) (json.compilerOptions.types as string[]).splice(idx, 1);
  }
  overwriteJSON(host, tsConfigPath, json);
}

export function pluginHmr(options: PluginOptions): any {
  return (host: Tree, context: SchematicContext) => {
    // 1. add package
    (options.type === 'add'
      ? addPackageToPackageJson
      : removePackageFromPackageJson)(
      host,
      ['@angularclass/hmr@^2.1.3'],
      'devDependencies',
    );
    // 2. add run scripts
    (options.type === 'add'
      ? addPackageToPackageJson
      : removePackageFromPackageJson)(host, ['hmr@ng serve -c=hmr'], 'scripts');
    // 3. add angular.json
    configToAngularJson(host, options);
    if (options.type === 'add') {
      // 4. create a hmr.ts file
      tryAddFile(host, `${options.sourceRoot}/hmr.ts`, HMR_CONTENT.HMR_DOT_TS);
      // 5. update main.ts
      tryAddFile(
        host,
        `${options.sourceRoot}/main.ts`,
        HMR_CONTENT.HMR_MAIN_DOT_TS,
      );
    } else {
      // 4. remove a hmr.ts file
      tryDelFile(host, `${options.sourceRoot}/hmr.ts`);
      // 5. update main.ts
      tryAddFile(
        host,
        `${options.sourceRoot}/main.ts`,
        HMR_CONTENT.NO_HMR_MAIN_DOT_TS,
      );
    }
    // 7. fix not found types
    addNodeTypeToTsconfig(host, options);
  };
}
