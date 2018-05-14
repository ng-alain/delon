import {
  Rule,
  Tree,
  SchematicContext,
  chain,
  noop,
  mergeWith,
  apply,
  url,
  template,
  move,
  filter,
  SchematicsException,
} from '@angular-devkit/schematics';
import { strings, join } from '@angular-devkit/core';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import * as path from 'path';

import { Schema as ApplicationOptions } from './schema';
import {
  addPackageToPackageJson,
  getPackage,
  overwritePackage,
  getJSON,
  overwriteJSON,
} from '../utils/json';
import { VERSION, ZORROVERSION } from '../utils/lib-versions';
import { overwriteFiles, addFiles } from '../utils/file';
import {
  getWorkspace,
  getProjectFromWorkspace,
  Project,
} from '../utils/devkit-utils/config';
import { addHeadStyle, addHtmlToBody } from '../utils/html';

const overwriteDataFileRoot = path.join(__dirname, 'overwrites');
let project: Project;
let projectPrefix = 'app';
let sourceRoot = 'src';

/** Remove files to be overwrite */
function removeOrginalFiles() {
  return (host: Tree) => {
    [
      'README.md',
      `${sourceRoot}/main.ts`,
      `${sourceRoot}/environments/environment.prod.ts`,
      `${sourceRoot}/environments/environment.ts`,
      `${sourceRoot}/styles.less`,
      `${sourceRoot}/app/app.module.ts`,
      `${sourceRoot}/app/app.component.spec.ts`,
      `${sourceRoot}/app/app.component.ts`,
      `${sourceRoot}/app/app.component.html`,
      `${sourceRoot}/app/app.component.less`,
    ].filter(p => host.exists(p)).forEach(p => host.delete(p));
  };
}

function addDependenciesToPackageJson(options: ApplicationOptions) {
  return (host: Tree, context: SchematicContext) => {
    // 3rd
    addPackageToPackageJson(host, [
      // allow ignore ng-zorro-antd becauce of @delon/theme dependency
      `ng-zorro-antd@${ZORROVERSION}`,
      // ng-zorro-antd need
      `rxjs-compat@^6.1.0`,
      'screenfull@^3.3.1',
      'ajv@^6.4.0'
    ]);
    // @delon/*
    addPackageToPackageJson(
      host,
      ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util'].map(
        pkg => `@delon/${pkg}@${VERSION}`,
      ),
    );
    // i18n
    if (options.i18n) {
      addPackageToPackageJson(host, [
        `@ngx-translate/core@^10.0.1`,
        `@ngx-translate/http-loader@^3.0.1`,
      ]);
    }
    const devs = [
      `ng-alain@^1.0.1`,
      // ISSUES: [#10430](https://github.com/angular/angular-cli/issues/10430)
      `less@~2.7.0`,
    ];
    if (devs.length) {
      addPackageToPackageJson(host, devs, 'devDependencies');
    }
    return host;
  };
}

function addRunScriptToPackageJson() {
  return (host: Tree, context: SchematicContext) => {
    const json = getPackage(host, 'scripts');
    if (json == null) return host;
    json.scripts['start'] = `ng serve -o`;
    json.scripts['build'] = `ng build --prod --build-optimizer`;
    json.scripts['analyze'] = `ng build --prod --build-optimizer --stats-json`;
    json.scripts['test-coverage'] = `ng test --code-coverage --watch=false`;
    overwritePackage(host, json);
    return host;
  };
}

function addPathsToTsConfig() {
  return (host: Tree, context: SchematicContext) => {
    [
      {
        path: 'tsconfig.json',
        baseUrl: `${sourceRoot}/`,
      },
      {
        path: `${sourceRoot}/tsconfig.app.json`,
        baseUrl: './',
      },
      {
        path: `${sourceRoot}/tsconfig.spec.json`,
        baseUrl: './',
      },
    ].forEach(item => {
      const json = getJSON(host, item.path, 'compilerOptions');
      if (json == null) return host;
      if (!json.compilerOptions) json.compilerOptions = {};
      if (!json.compilerOptions.paths) json.compilerOptions.paths = {};
      json.compilerOptions.baseUrl = item.baseUrl;
      const paths = json.compilerOptions.paths;
      paths['@shared'] = ['app/shared'];
      paths['@shared/*'] = ['app/shared/*'];
      paths['@core'] = ['app/core'];
      paths['@core/*'] = ['app/core/*'];
      paths['@testing'] = ['testing'];
      paths['@testing/*'] = ['testing/*'];
      paths['@env'] = ['environments'];
      paths['@env/*'] = ['environments/*'];
      overwriteJSON(host, item.path, json);
    });
    return host;
  };
}

function addCodeStylesToPackageJson() {
  return (host: Tree, context: SchematicContext) => {
    const json = getPackage(host);
    if (json == null) return host;
    json.scripts['precommit'] = `npm run lint-staged`;
    json.scripts['lint'] = `npm run lint:ts && npm run lint:style`;
    json.scripts['lint:ts'] = `ng lint`;
    json.scripts['lint:style'] = `stylelint \"{src}/**/*.less\" --syntax less`;
    json.scripts['lint-staged'] = `lint-staged`;
    json.scripts['tslint-check'] = `tslint-config-prettier-check ./tslint.json`;
    json['lint-staged'] = {
      '*.{cmd,html,json,md,sh,txt,xml,yml}': [
        'editorconfig-tools fix',
        'git add',
      ],
      '*.ts': ['npm run lint:ts', 'prettier --write', 'git add'],
      '*.less': ['npm run lint:style', 'prettier --write', 'git add'],
    };
    overwritePackage(host, json);
    // tslint
    const tsLint = getJSON(host, 'tslint.json', 'rules');
    tsLint.rules['curly'] = false;
    tsLint.rules['use-host-property-decorator'] = false;
    tsLint.rules['directive-selector'] = [
      true,
      'attribute',
      [projectPrefix, 'passport', 'exception', 'layout', 'header'],
      'camelCase',
    ];
    tsLint.rules['component-selector'] = [
      true,
      'element',
      [projectPrefix, 'passport', 'exception', 'layout', 'header'],
      'kebab-case',
    ];
    overwriteJSON(host, 'tslint.json', tsLint);
    // dependencies
    addPackageToPackageJson(host, [
      `tslint-config-prettier@^1.12.0`,
      `tslint-language-service@^0.9.9`,
      `editorconfig-tools@^0.1.1`,
      `husky@^0.14.3`,
      `prettier@^1.12.1`,
      `prettier-stylelint@^0.4.2`,
      `stylelint@^9.2.0`,
      `stylelint-config-standard@^18.2.0`,
    ]);
    return host;
  };
}

function addSchematics() {
  return (host: Tree, context: SchematicContext) => {
    const angularJsonFile = 'angular.json';
    const json = getJSON(host, angularJsonFile, 'schematics');
    if (json == null) return host;
    json.schematics['ng-alain:module'] = {
      routing: true,
      spec: false,
    };
    json.schematics['@schematics/angular:module'] = {
      routing: true,
      spec: false,
    };
    json.schematics['@schematics/angular:component'] = {
      spec: false,
      flat: false,
      inlineStyle: true,
      inlineTemplate: false
    };
    json.schematics['@schematics/angular:directive'] = {
      spec: false,
    };
    json.schematics['@schematics/angular:service'] = {
      spec: false,
    };
    overwriteJSON(host, angularJsonFile, json);
  };
}

function addStyle(options: ApplicationOptions) {
  return (host: Tree) => {
    addHeadStyle(
      host,
      project,
      `  <style type="text/css">.preloader{position:fixed;top:0;left:0;width:100%;height:100%;overflow:hidden;background:#49a9ee;z-index:9999;transition:opacity .65s}.preloader-hidden-add{opacity:1;display:block}.preloader-hidden-add-active{opacity:0}.preloader-hidden{display:none}.cs-loader{position:absolute;top:0;left:0;height:100%;width:100%}.cs-loader-inner{transform:translateY(-50%);top:50%;position:absolute;width:100%;color:#fff;text-align:center}.cs-loader-inner label{font-size:20px;opacity:0;display:inline-block}@keyframes lol{0%{opacity:0;transform:translateX(-300px)}33%{opacity:1;transform:translateX(0)}66%{opacity:1;transform:translateX(0)}100%{opacity:0;transform:translateX(300px)}}.cs-loader-inner label:nth-child(6){animation:lol 3s infinite ease-in-out}.cs-loader-inner label:nth-child(5){animation:lol 3s .1s infinite ease-in-out}.cs-loader-inner label:nth-child(4){animation:lol 3s .2s infinite ease-in-out}.cs-loader-inner label:nth-child(3){animation:lol 3s .3s infinite ease-in-out}.cs-loader-inner label:nth-child(2){animation:lol 3s .4s infinite ease-in-out}.cs-loader-inner label:nth-child(1){animation:lol 3s .5s infinite ease-in-out}</style>`,
    );
    addHtmlToBody(
      host,
      project,
      `  <div class="preloader"><div class="cs-loader"><div class="cs-loader-inner"><label>	●</label><label>	●</label><label>	●</label><label>	●</label><label>	●</label><label>	●</label></div></div>\n`,
    );
    // add styles
    addFiles(
      host,
      [`${sourceRoot}/styles/index.less`, `${sourceRoot}/styles/theme.less`],
      overwriteDataFileRoot,
    );

    return host;
  };
}

function addFilesToRoot(options: ApplicationOptions) {
  return mergeWith(
    apply(url('./files'), [
      options.i18n ? noop() : filter(p => p.indexOf('i18n') === -1),
      options.form ? noop() : filter(p => p.indexOf('json-schema') === -1),
      template({
        utils: strings,
        ...options,
        dot: '.',
        VERSION,
        ZORROVERSION,
      }),
    ]),
  );
}

function installPackages() {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

export default function(options: ApplicationOptions): Rule {
  return (host: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(host);
    project = getProjectFromWorkspace(workspace);
    projectPrefix = (project as any).prefix || 'app';
    sourceRoot = (project as any).sourceRoot || 'src';

    return chain([
      // @delon/* dependencies
      addDependenciesToPackageJson(options),
      // ci
      addRunScriptToPackageJson(),
      addPathsToTsConfig(),
      // code style
      options.codeStyle ? addCodeStylesToPackageJson() : noop(),
      addSchematics(),
      // files
      removeOrginalFiles(),
      addFilesToRoot(options),
      addStyle(options),
      installPackages(),
    ])(host, context);
  };
}
