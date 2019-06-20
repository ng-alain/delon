import { strings } from '@angular-devkit/core';
import {
  apply,
  chain,
  filter,
  mergeWith,
  move,
  noop,
  template,
  url,
  MergeStrategy,
  Rule,
  SchematicContext,
  Tree,
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import * as path from 'path';

import { getLangData } from '../core/lang.config';
import { tryAddFile } from '../utils/alain';
import { HMR_CONTENT } from '../utils/contents';
import { addFiles } from '../utils/file';
import { addHeadStyle, addHtmlToBody } from '../utils/html';
import {
  addPackageToPackageJson,
  getJSON,
  getPackage,
  overwriteJSON,
  overwritePackage,
  scriptsToAngularJson,
} from '../utils/json';
import { VERSION, ZORROVERSION } from '../utils/lib-versions';
import { getProject, Project } from '../utils/project';
import { Schema as ApplicationOptions } from './schema';

const overwriteDataFileRoot = path.join(__dirname, 'overwrites');
let project: Project;

/** Remove files to be overwrite */
function removeOrginalFiles() {
  return (host: Tree) => {
    [
      `${project.root}/README.md`,
      `${project.root}/tslint.json`,
      `${project.sourceRoot}/main.ts`,
      `${project.sourceRoot}/environments/environment.prod.ts`,
      `${project.sourceRoot}/environments/environment.ts`,
      `${project.sourceRoot}/styles.less`,
      `${project.sourceRoot}/app/app.module.ts`,
      `${project.sourceRoot}/app/app.component.spec.ts`,
      `${project.sourceRoot}/app/app.component.ts`,
      `${project.sourceRoot}/app/app.component.html`,
      `${project.sourceRoot}/app/app.component.less`,
    ]
      .filter(p => host.exists(p))
      .forEach(p => host.delete(p));
  };
}

function fixMain() {
  return (host: Tree) => {
    // fix: main.ts using no hmr file
    tryAddFile(host, `${project.sourceRoot}/main.ts`, HMR_CONTENT.NO_HMR_MAIN_DOT_TS);
  };
}

function addDependenciesToPackageJson(options: ApplicationOptions) {
  return (host: Tree) => {
    // 3rd
    addPackageToPackageJson(host, [
      // allow ignore ng-zorro-antd becauce of @delon/theme dependency
      `ng-zorro-antd@${ZORROVERSION}`,
      // ng-zorro-antd need
      'screenfull@DEP-0.0.0-PLACEHOLDER',
      'ajv@DEP-0.0.0-PLACEHOLDER',
    ]);
    // add ajv
    scriptsToAngularJson(host, ['node_modules/ajv/dist/ajv.bundle.js'], 'add', ['build', 'test']);
    // @delon/*
    addPackageToPackageJson(
      host,
      ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(
        pkg => `@delon/${pkg}@${VERSION}`,
      ),
    );
    // ng-alain
    addPackageToPackageJson(
      host,
      [
        `ng-alain@${VERSION}`,
        `ng-alain-codelyzer@DEP-0.0.0-PLACEHOLDER`,
        `@delon/testing@${VERSION}`,
        // color-less
        `antd-theme-generator@DEP-0.0.0-PLACEHOLDER`,
        `less-bundle-promise@DEP-0.0.0-PLACEHOLDER`,
      ],
      'devDependencies',
    );
    // i18n
    if (options.i18n) {
      addPackageToPackageJson(host, [
        `@ngx-translate/core@DEP-0.0.0-PLACEHOLDER`,
        `@ngx-translate/http-loader@DEP-0.0.0-PLACEHOLDER`,
      ]);
    }
    return host;
  };
}

function addRunScriptToPackageJson() {
  return (host: Tree) => {
    const json = getPackage(host, 'scripts');
    if (json == null) return host;
    json.scripts.start = `npm run color-less && ng s -o`;
    json.scripts.build = `npm run color-less && node --max_old_space_size=5120 ./node_modules/@angular/cli/bin/ng build --prod`;
    json.scripts.analyze = `npm run color-less && node --max_old_space_size=5120 ./node_modules/@angular/cli/bin/ng build --prod --stats-json`;
    json.scripts['test-coverage'] = `ng test --code-coverage --watch=false`;
    json.scripts['color-less'] = `node scripts/color-less.js`;
    json.scripts.icon = `ng g ng-alain:plugin icon`;
    overwritePackage(host, json);
    return host;
  };
}

function addPathsToTsConfig() {
  return (host: Tree) => {
    const json = getJSON(host, 'tsconfig.json', 'compilerOptions');
    if (json == null) return host;
    if (!json.compilerOptions) json.compilerOptions = {};
    if (!json.compilerOptions.paths) json.compilerOptions.paths = {};
    const paths = json.compilerOptions.paths;
    paths['@shared'] = ['src/app/shared/index'];
    paths['@shared/*'] = ['src/app/shared/*'];
    paths['@core'] = ['src/app/core/index'];
    paths['@core/*'] = ['src/app/core/*'];
    paths['@env/*'] = ['src/environments/*'];
    overwriteJSON(host, 'tsconfig.json', json);
    return host;
  };
}

function addCodeStylesToPackageJson() {
  return (host: Tree) => {
    const json = getPackage(host);
    if (json == null) return host;
    json.scripts.lint = `npm run lint:ts && npm run lint:style`;
    json.scripts['lint:ts'] = `tslint -p tsconfig.app.json -c tslint.json \"src/**/*.ts\" --fix`;
    json.scripts['lint:style'] = `stylelint \"src/**/*.less\" --syntax less --fix`;
    json.scripts['lint-staged'] = `lint-staged`;
    json.scripts['tslint-check'] = `tslint-config-prettier-check ./tslint.json`;
    json['lint-staged'] = {
      '*.ts': ['npm run lint:ts', 'git add'],
      '*.less': ['npm run lint:style', 'git add'],
      ignore: ['src/assets/*'],
    };
    overwritePackage(host, json);
    // dependencies
    addPackageToPackageJson(host, [
      `tslint-config-prettier@DEP-0.0.0-PLACEHOLDER`,
      `tslint-language-service@DEP-0.0.0-PLACEHOLDER`,
      `lint-staged@DEP-0.0.0-PLACEHOLDER`,
      `husky@DEP-0.0.0-PLACEHOLDER`,
      `prettier@DEP-0.0.0-PLACEHOLDER`,
      `prettier-stylelint@DEP-0.0.0-PLACEHOLDER`,
      `stylelint@DEP-0.0.0-PLACEHOLDER`,
      `stylelint-config-standard@DEP-0.0.0-PLACEHOLDER`,
    ]);
    return host;
  };
}

function addSchematics() {
  return (host: Tree) => {
    const angularJsonFile = 'angular.json';
    const json = getJSON(host, angularJsonFile, 'schematics');
    if (json == null) return host;
    json.schematics['ng-alain:module'] = {
      routing: true,
      spec: false,
    };
    json.schematics['ng-alain:list'] = {
      spec: false,
    };
    json.schematics['ng-alain:edit'] = {
      spec: false,
      modal: true,
    };
    json.schematics['ng-alain:view'] = {
      spec: false,
      modal: true,
    };
    json.schematics['ng-alain:curd'] = {
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
      inlineTemplate: false,
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

function forceLess() {
  return (host: Tree) => {
    scriptsToAngularJson(host, ['src/styles.less'], 'add', ['build'], null!, true);
  };
}

function addStyle() {
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
      [`${project.sourceRoot}/styles/index.less`, `${project.sourceRoot}/styles/theme.less`],
      overwriteDataFileRoot,
    );

    return host;
  };
}

function mergeFiles(options: ApplicationOptions, from: string, to: string) {
  return mergeWith(
    apply(url(from), [
      options.i18n ? noop() : filter(p => p.indexOf('i18n') === -1),
      options.form ? noop() : filter(p => p.indexOf('json-schema') === -1),
      template({
        utils: strings,
        ...options,
        dot: '.',
        VERSION,
        ZORROVERSION,
      }),
      move(to),
    ]),
  );
}

function addCliTpl() {
  const TPLS = {
    '__name@dasherize__.component.html': `<page-header></page-header>`,
    '__name@dasherize__.component.ts': `import { Component, OnInit<% if(!!viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection !== 'Default') { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: '<%= selector %>',
  templateUrl: './<%= dasherize(name) %>.component.html',<% if(!inlineStyle) { %><% } else { %>
  styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %><% if(!!viewEncapsulation) { %>,
  encapsulation: ViewEncapsulation.<%= viewEncapsulation %><% } if (changeDetection !== 'Default') { %>,
  changeDetection: ChangeDetectionStrategy.<%= changeDetection %><% } %>
})
export class <%= componentName %> implements OnInit {

  constructor(private http: _HttpClient, private msg: NzMessageService) { }

  ngOnInit() { }

}
`,
    '__name@dasherize__.component.spec.ts': `import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  import { <%= componentName %> } from './<%= dasherize(name) %>.component';

  describe('<%= componentName %>', () => {
    let component: <%= componentName %>;
    let fixture: ComponentFixture<<%= componentName %>>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ <%= componentName %> ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(<%= componentName %>);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  `,
  };
  return (host: Tree) => {
    const prefix = `${project.root}/_cli-tpl/test/__path__/__name@dasherize@if-flat__/`;
    Object.keys(TPLS).forEach(name => {
      const realPath = prefix + name;
      if (host.exists(realPath)) {
        host.overwrite(realPath, TPLS[name]);
      } else {
        host.create(realPath, TPLS[name]);
      }
    });
  };
}

function addFilesToRoot(options: ApplicationOptions) {
  return chain([
    mergeWith(
      apply(url('./files/src'), [
        options.i18n ? noop() : filter(p => p.indexOf('i18n') === -1),
        options.form ? noop() : filter(p => p.indexOf('json-schema') === -1),
        template({
          utils: strings,
          ...options,
          dot: '.',
          VERSION,
          ZORROVERSION,
        }),
        move(project.sourceRoot),
      ]),
    ),
    mergeWith(
      apply(url('./files/root'), [
        options.i18n ? noop() : filter(p => p.indexOf('i18n') === -1),
        options.form ? noop() : filter(p => p.indexOf('json-schema') === -1),
        template({
          utils: strings,
          ...options,
          dot: '.',
          VERSION,
          ZORROVERSION,
        }),
        // move('/')
      ]),
      MergeStrategy.Overwrite,
    ),
  ]);
}

function fixLang(options: ApplicationOptions) {
  return (host: Tree) => {
    if (options.i18n) return;
    const langs = getLangData(options.defaultLanguage!);
    if (!langs) return;

    console.log(`Translating, please wait...`);

    host.visit(p => {
      if (~p.indexOf(`/node_modules/`)) return;

      fixLangInHtml(host, p, langs);
    });
  };
}

function fixLangInHtml(host: Tree, p: string, langs: {}) {
  let html = host.get(p)!.content.toString('utf8');
  let matchCount = 0;
  // {{(status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | translate }}
  // {{ (status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | translate }}
  html = html.replace(
    /\{\{[ ]?\(status \? '([^']+)' : '([^']+)'\) \| translate \}\}/g,
    (_word, key1, key2) => {
      ++matchCount;
      return `{{ status ? '${langs[key1] || key1}' : '${langs[key2] || key2}' }}`;
    },
  );
  // {{ 'app.register-result.msg' | translate: params }}
  html = html.replace(/\{\{[ ]?'([^']+)'[ ]? \| translate: [^ ]+ \}\}/g, (_word, key) => {
    ++matchCount;
    return langs[key] || key;
  });
  // {{ 'Please enter mobile number!' | translate }}
  html = html.replace(/\{\{[ ]?'([^']+)' \| translate[ ]?\}\}/g, (_word, key) => {
    ++matchCount;
    return langs[key] || key;
  });
  // [nzTitle]="'app.login.tab-login-credentials' | translate"
  html = html.replace(/'([^']+)' \| translate[ ]?/g, (_word, key) => {
    ++matchCount;
    const value = langs[key] || key;
    return `'${value}'`;
  });
  // 'app.register.get-verification-code' | translate
  html = html.replace(/'([^']+)' \| translate/g, (_word, key) => {
    ++matchCount;
    return langs[key] || key;
  });
  // removed `header-i18n`
  if (~html.indexOf(`<header-i18n [showLang]="false" class="langs"></header-i18n>`)) {
    ++matchCount;
    html = html.replace(`<header-i18n [showLang]="false" class="langs"></header-i18n>`, ``);
  }
  if (matchCount > 0) {
    host.overwrite(p, html);
  }
}

function fixVsCode() {
  return (host: Tree) => {
    const filePath = '.vscode/extensions.json';
    let json = getJSON(host, filePath);
    if (json == null) {
      host.create(filePath, '');
      json = {};
    }
    json.recommendations = ['cipchk.ng-alain-extension-pack'];
    overwriteJSON(host, filePath, json);
  };
}

function installPackages() {
  return (_host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

export default function(options: ApplicationOptions): Rule {
  return (host: Tree, context: SchematicContext) => {
    project = getProject(host, options.project);

    return chain([
      // @delon/* dependencies
      addDependenciesToPackageJson(options),
      // ci
      addRunScriptToPackageJson(),
      addPathsToTsConfig(),
      // code style
      addCodeStylesToPackageJson(),
      addSchematics(),
      // files
      removeOrginalFiles(),
      addFilesToRoot(options),
      addCliTpl(),
      fixMain(),
      forceLess(),
      addStyle(),
      fixLang(options),
      fixVsCode(),
      installPackages(),
    ])(host, context);
  };
}
