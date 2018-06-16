import { Tree, SchematicContext } from '@angular-devkit/schematics';
import { PluginOptions } from './interface';
import { tryAddFile, addValueToVariable } from '../utils/alain';
import {
  addPackageToPackageJson,
  removePackageFromPackageJson,
  getAngular,
  overwriteAngular,
  getJSON,
  overwritePackage,
  overwriteJSON,
} from '../utils/json';
import { getProjectFromWorkspace } from '../utils/devkit-utils/config';

// region: files content

const HMR = `import { NgModuleRef, ApplicationRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';
import { NzModalService } from 'ng-zorro-antd';

export const hmrBootstrap = (
  module: any,
  bootstrap: () => Promise<NgModuleRef<any>>,
) => {
  let ngModule: NgModuleRef<any>;
  module.hot.accept();
  bootstrap().then(mod => (ngModule = mod));
  module.hot.dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const modalService = ngModule.injector.get(NzModalService, null) as NzModalService;
    if (modalService) modalService.closeAll();
    const elements = appRef.components.map(c => c.location.nativeElement);
    const makeVisible = createNewHosts(elements);
    ngModule.destroy();
    makeVisible();
  });
};`;

const MAINTS = `import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { preloaderFinished } from '@delon/theme';
preloaderFinished();

import { hmrBootstrap } from './hmr';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => {
  return platformBrowserDynamic().bootstrapModule(AppModule, {
    defaultEncapsulation: ViewEncapsulation.Emulated,
    preserveWhitespaces: false,
  }).then((res) => {
    if ((<any>window).appBootstrap) {
      (<any>window).appBootstrap();
    }
    return res;
  });
};

if (environment.hmr) {
  if (module[ 'hot' ]) {
    hmrBootstrap(module, bootstrap);
  } else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
  }
} else {
  bootstrap();
}`;

// endregion

function configToAngularJson(host: Tree, options: PluginOptions) {
  const json = getAngular(host);
  const project = getProjectFromWorkspace(json, options.project);
  // add build config
  project.architect!.build!.configurations['hmr'] = {
    fileReplacements: [
      {
        replace: `${options.sourceRoot}/environments/environment.ts`,
        with: `${options.sourceRoot}/environments/environment.hmr.ts`,
      },
    ],
  };
  // add serve config
  project.architect!.serve!.configurations['hmr'] = {
    browserTarget: `${project.name}:build:hmr`,
    hmr: true,
  };

  overwriteAngular(host, json);
}

function envConfig(host: Tree, options: PluginOptions) {
  const defEnvPath = `${options.sourceRoot}/environments/environment.ts`;
  const defContent = host.get(defEnvPath).content;
  if (!host.exists(defEnvPath)) return ;
  // 1. update default env file
  addValueToVariable(host, defEnvPath, 'environment', 'hmr: false');
  // 2. update prod env file
  addValueToVariable(host, `${options.sourceRoot}/environments/environment.prod.ts`, 'environment', 'hmr: false');
  // 3. copy default env file to hmr file
  const hmrEnvPath = `${options.sourceRoot}/environments/environment.hmr.ts`;
  host.create(hmrEnvPath, defContent);
  addValueToVariable(host, hmrEnvPath, 'environment', 'hmr: true');
}

function addNodeTypeToTsconfig(host: Tree, options: PluginOptions) {
  const tsConfigPath = `${options.sourceRoot}/tsconfig.app.json`;
  if (!host.exists(tsConfigPath)) return ;
  const json = getJSON(host, tsConfigPath);
  json.compilerOptions.types = [ 'node' ];
  overwriteJSON(host, tsConfigPath, json);
}

export function pluginHmr(options: PluginOptions): any {
  return (host: Tree, context: SchematicContext) => {
    // 1. add package
    (options.type === 'add'
      ? addPackageToPackageJson
      : removePackageFromPackageJson)(host, ['@angularclass/hmr@^2.1.3'], 'devDependencies');
    // 2. add run scripts
    (options.type === 'add'
      ? addPackageToPackageJson
      : removePackageFromPackageJson)(
      host,
      ['hmr@ng serve -c=hmr'],
      'scripts',
    );
    if (options.type !== 'add') return;

    // 3. add angular.json
    configToAngularJson(host, options);
    // 4. create a hmr.ts file
    tryAddFile(host, `${options.sourceRoot}/hmr.ts`, HMR);
    // 5. create a environment.hmr.ts file
    // envConfig(host, options);
    // 6. update main.ts
    tryAddFile(host, `${options.sourceRoot}/main.ts`, MAINTS);
    // 7. fix not found types
    addNodeTypeToTsconfig(host, options);
  };
}
