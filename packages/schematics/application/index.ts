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
  MergeStrategy,
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import * as path from 'path';

import { Schema as ApplicationOptions } from './schema';
import {
  addPackageToPackageJson,
  getPackage,
  overwritePackage,
  getJSON,
  overwriteJSON,
  scriptsToAngularJson,
} from '../utils/json';
import { VERSION, ZORROVERSION } from '../utils/lib-versions';
import { addFiles } from '../utils/file';
import { Project, getProject } from '../utils/project';
import { addHeadStyle, addHtmlToBody } from '../utils/html';
import { tryAddFile } from '../utils/alain';
import { HMR_CONTENT } from '../utils/contents';

const overwriteDataFileRoot = path.join(__dirname, 'overwrites');
let project: Project;

/** Remove files to be overwrite */
function removeOrginalFiles() {
  return (host: Tree) => {
    [
      `${project.root}/README.md`,
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
    tryAddFile(
      host,
      `${project.sourceRoot}/main.ts`,
      HMR_CONTENT.NO_HMR_MAIN_DOT_TS,
    );
  };
}

function addDependenciesToPackageJson(options: ApplicationOptions) {
  return (host: Tree, context: SchematicContext) => {
    // 3rd
    addPackageToPackageJson(host, [
      // allow ignore ng-zorro-antd becauce of @delon/theme dependency
      `ng-zorro-antd@${ZORROVERSION}`,
      // ng-zorro-antd need
      'screenfull@^3.3.1',
      'ajv@^6.4.0',
    ]);
    // add ajv
    scriptsToAngularJson(host, ['node_modules/ajv/dist/ajv.bundle.js'], 'add', [
      'build',
      'test',
    ]);
    // @delon/*
    addPackageToPackageJson(
      host,
      [
        'abc',
        'acl',
        'auth',
        'cache',
        'form',
        'mock',
        'theme',
        'util',
        'chart',
      ].map(pkg => `@delon/${pkg}@${VERSION}`),
    );
    // ng-alain
    addPackageToPackageJson(
      host,
      [
        `ng-alain@${VERSION}`,
        // color-less
        `less-bundle-promise@^1.0.7`,
      ],
      'devDependencies',
    );
    // i18n
    if (options.i18n) {
      addPackageToPackageJson(host, [
        `@ngx-translate/core@^10.0.1`,
        `@ngx-translate/http-loader@^3.0.1`,
      ]);
    }
    return host;
  };
}

function addRunScriptToPackageJson() {
  return (host: Tree, context: SchematicContext) => {
    const json = getPackage(host, 'scripts');
    if (json == null) return host;
    json.scripts['start'] = `npm run color-less && ng serve -o`;
    json.scripts['build'] = `npm run color-less && ng build --prod --build-optimizer`;
    json.scripts['analyze'] = `npm run color-less && ng build --prod --build-optimizer --stats-json`;
    json.scripts['test-coverage'] = `ng test --code-coverage --watch=false`;
    json.scripts['color-less'] = `node scripts/color-less.js`;
    overwritePackage(host, json);
    return host;
  };
}

function addPathsToTsConfig() {
  return (host: Tree, context: SchematicContext) => {
    [
      {
        path: 'tsconfig.json',
        baseUrl: `${project.sourceRoot}/`,
      },
      {
        path: `${project.sourceRoot}/tsconfig.app.json`,
        baseUrl: './',
      },
      {
        path: `${project.sourceRoot}/tsconfig.spec.json`,
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
    json.scripts['lint'] = `npm run lint:ts && npm run lint:style`;
    json.scripts[
      'lint:ts'
    ] = `tslint -p src/tsconfig.app.json -c tslint.json 'src/**/*.ts'`;
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
      ignore: ['src/assets/*'],
    };
    overwritePackage(host, json);
    // tslint
    const tsLint = getJSON(host, 'tslint.json', 'rules');
    tsLint.rules['curly'] = false;
    tsLint.rules['use-host-property-decorator'] = false;
    tsLint.rules['directive-selector'] = [
      true,
      'attribute',
      [project.prefix, 'passport', 'exception', 'layout', 'header'],
      'camelCase',
    ];
    tsLint.rules['component-selector'] = [
      true,
      'element',
      [project.prefix, 'passport', 'exception', 'layout', 'header'],
      'kebab-case',
    ];
    overwriteJSON(host, 'tslint.json', tsLint);
    // app tslint
    const sourceTslint = `${project.sourceRoot}/tslint.json`;
    if (host.exists(sourceTslint)) {
      const appTsLint = getJSON(host, sourceTslint, 'rules');
      appTsLint.rules['directive-selector'] = [
        true,
        'attribute',
        [project.prefix, 'passport', 'exception', 'layout', 'header'],
        'camelCase',
      ];
      appTsLint.rules['component-selector'] = [
        true,
        'element',
        [project.prefix, 'passport', 'exception', 'layout', 'header'],
        'kebab-case',
      ];
      overwriteJSON(host, sourceTslint, appTsLint);
    }
    // dependencies
    addPackageToPackageJson(host, [
      `tslint-config-prettier@^1.12.0`,
      `tslint-language-service@^0.9.9`,
      `editorconfig-tools@^0.1.1`,
      `lint-staged@^7.1.2`,
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
  return (host: Tree, context: SchematicContext) => {
    scriptsToAngularJson(
      host,
      ['src/styles.less'],
      'add',
      ['build'],
      null,
      true,
    );
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
      [
        `${project.sourceRoot}/styles/index.less`,
        `${project.sourceRoot}/styles/theme.less`,
      ],
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

function addCliTpl(options: ApplicationOptions) {
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
  `
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

function installPackages() {
  return (host: Tree, context: SchematicContext) => {
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
      addCliTpl(options),
      fixMain(),
      forceLess(),
      addStyle(options),
      installPackages(),
    ])(host, context);
  };
}
