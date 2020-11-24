export const HMR_CONTENT = {
  NO_HMR_MAIN_DOT_TS: `import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { preloaderFinished } from '@delon/theme';
preloaderFinished();

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => {
  return platformBrowserDynamic().bootstrapModule(AppModule, {
    defaultEncapsulation: ViewEncapsulation.Emulated,
  });
};

bootstrap().then(() => {
  if ((window as any).appBootstrap) {
    (window as any).appBootstrap();
  }
});`,
};

export const DOCKER_CONTENT = {
  ignore: `node_modules
npm-debug.log
Dockerfile*
docker-compose*
.dockerignore
.git
.gitignore
README.md
LICENSE
.vscode`,
  compose: `version: '2.1'

services:
  ng-alain:
    image: ng-alain
    build: .
    environment:
      NODE_ENV: production
    ports:
      - 80:80
`,
};
