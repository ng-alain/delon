import { Spinner } from '@angular-devkit/build-angular/src/utils/spinner';
import { JsonObject, strings } from '@angular-devkit/core';
import { ProjectDefinition } from '@angular-devkit/core/src/workspace';
import {
  apply,
  chain,
  filter,
  MergeStrategy,
  mergeWith,
  move,
  noop,
  Rule,
  SchematicContext,
  template,
  Tree,
  url,
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { updateWorkspace } from '@schematics/angular/utility/workspace';
import * as path from 'path';
import { getLangData } from '../core/lang.config';
import {
  addAllowedCommonJsDependencies,
  addAssetsToTarget,
  addHeadStyle,
  addHtmlToBody,
  addPackage,
  BUILD_TARGET_BUILD,
  BUILD_TARGET_SERVE,
  getProject,
  getProjectFromWorkspace,
  getProjectTarget,
  overwriteFile,
  readJSON,
  readPackage,
  VERSION,
  writeJSON,
  writePackage,
  ZORROVERSION,
} from '../utils';
import { UpgradeMainVersions } from '../utils/versions';
import { Schema as ApplicationOptions } from './schema';

const overwriteDataFileRoot = path.join(__dirname, 'overwrites');
let project: ProjectDefinition;
const spinner = new Spinner();

/** Remove files to be overwrite */
function removeOrginalFiles(): Rule {
  return (tree: Tree) => {
    [
      `${project.root}/README.md`,
      `${project.root}/tslint.json`,
      `${project.sourceRoot}/main.ts`,
      `${project.sourceRoot}/test.ts`,
      `${project.sourceRoot}/environments/environment.prod.ts`,
      `${project.sourceRoot}/environments/environment.ts`,
      `${project.sourceRoot}/styles.less`,
      `${project.sourceRoot}/favicon.ico`,
      `${project.sourceRoot}/app/app.module.ts`,
      `${project.sourceRoot}/app/app.component.spec.ts`,
      `${project.sourceRoot}/app/app.component.ts`,
      `${project.sourceRoot}/app/app.component.html`,
      `${project.sourceRoot}/app/app.component.less`,
      `${project.sourceRoot}/app/app-routing.module.ts`,
    ]
      .filter(p => tree.exists(p))
      .forEach(p => tree.delete(p));
  };
}

function fixAngularJson(options: ApplicationOptions): Rule {
  return updateWorkspace(async workspace => {
    const p = getProjectFromWorkspace(workspace, options.project);
    // Add proxy.conf.json
    getProjectTarget(p, BUILD_TARGET_BUILD).proxyConfig = 'proxy.conf.json';
    // 调整budgets
    const budgets = (getProjectTarget(p, BUILD_TARGET_BUILD, 'configurations').production as JsonObject).budgets as Array<{
      type: string;
      maximumWarning: string;
      maximumError: string;
    }>;
    if (budgets && budgets.length > 0) {
      const initial = budgets.find(w => w.type === 'initial');
      if (initial) {
        initial.maximumWarning = '2mb';
        initial.maximumError = '3mb';
      }
    }
  });
}

function addDependenciesToPackageJson(options: ApplicationOptions): Rule {
  return (tree: Tree) => {
    UpgradeMainVersions(tree);
    // 3rd
    addPackage(tree, ['screenfull@DEP-0.0.0-PLACEHOLDER']);
    // i18n
    if (options.i18n) {
      addPackage(tree, [`@ngx-translate/core@DEP-0.0.0-PLACEHOLDER`, `@ngx-translate/http-loader@DEP-0.0.0-PLACEHOLDER`]);
    }
    return tree;
  };
}

function addRunScriptToPackageJson(): Rule {
  return (tree: Tree) => {
    const json = readPackage(tree, 'scripts');
    if (json == null) return tree;
    json.scripts['ng-high-memory'] = `node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng`;
    json.scripts.start = `ng s -o`;
    json.scripts.hmr = `ng s -o --hmr`;
    json.scripts.build = `npm run ng-high-memory build -- --prod`;
    json.scripts.analyze = `npm run ng-high-memory build -- --prod --source-map`;
    json.scripts['analyze:view'] = `source-map-explorer dist/**/*.js`;
    json.scripts['test-coverage'] = `ng test --code-coverage --watch=false`;
    json.scripts['color-less'] = `ng-alain-plugin-theme -t=colorLess`;
    json.scripts.theme = `ng-alain-plugin-theme -t=themeCss`;
    json.scripts.icon = `ng g ng-alain:plugin icon`;
    writePackage(tree, json);
    return tree;
  };
}

function addPathsToTsConfig(): Rule {
  return (tree: Tree) => {
    const json = readJSON(tree, 'tsconfig.json', 'compilerOptions');
    if (json == null) return tree;
    if (!json.compilerOptions) json.compilerOptions = {};
    if (!json.compilerOptions.paths) json.compilerOptions.paths = {};
    const paths = json.compilerOptions.paths;
    paths['@shared'] = ['src/app/shared/index'];
    paths['@core'] = ['src/app/core/index'];
    paths['@env/*'] = ['src/environments/*'];
    writeJSON(tree, 'tsconfig.json', json);
    return tree;
  };
}

function addCodeStylesToPackageJson(): Rule {
  return (tree: Tree) => {
    const json = readPackage(tree);
    if (json == null) return tree;
    json.scripts.lint = `npm run lint:ts && npm run lint:style`;
    json.scripts['lint:ts'] = `ng lint --fix`;
    json.scripts['lint:style'] = `stylelint \"src/**/*.less\" --syntax less --fix`;
    json.scripts['pretty-quick'] = `pretty-quick`;
    json.scripts['tslint-check'] = `tslint-config-prettier-check ./tslint.json`;
    writePackage(tree, json);
    // dependencies
    addPackage(
      tree,
      [
        `tslint-config-prettier@DEP-0.0.0-PLACEHOLDER`,
        `pretty-quick@DEP-0.0.0-PLACEHOLDER`,
        `husky@DEP-0.0.0-PLACEHOLDER`,
        `prettier@DEP-0.0.0-PLACEHOLDER`,
        `stylelint@DEP-0.0.0-PLACEHOLDER`,
        `stylelint-config-prettier@DEP-0.0.0-PLACEHOLDER`,
        `stylelint-config-rational-order@DEP-0.0.0-PLACEHOLDER`,
        `stylelint-config-standard@DEP-0.0.0-PLACEHOLDER`,
        `stylelint-declaration-block-no-ignored-properties@DEP-0.0.0-PLACEHOLDER`,
        `stylelint-order@DEP-0.0.0-PLACEHOLDER`,
      ],
      'devDependencies',
    );
    return tree;
  };
}

function addSchematics(options: ApplicationOptions): Rule {
  return updateWorkspace(async workspace => {
    const p = getProjectFromWorkspace(workspace, options.project);
    const schematics = p.extensions.schematics;
    schematics['ng-alain:module'] = {
      routing: true,
      spec: false,
    };
    schematics['ng-alain:list'] = {
      spec: false,
    };
    schematics['ng-alain:edit'] = {
      spec: false,
      modal: true,
    };
    schematics['ng-alain:view'] = {
      spec: false,
      modal: true,
    };
    schematics['ng-alain:curd'] = {
      spec: false,
    };
    schematics['@schematics/angular:module'] = {
      routing: true,
      spec: false,
    };
    schematics['@schematics/angular:component'] = {
      spec: false,
      flat: false,
      inlineStyle: true,
      inlineTemplate: false,
      ...schematics['@schematics/angular:component'],
    };
    schematics['@schematics/angular:directive'] = {
      spec: false,
    };
    schematics['@schematics/angular:service'] = {
      spec: false,
    };
  });
}

function addNzLintRules(): Rule {
  return (tree: Tree) => {
    addPackage(tree, ['nz-tslint-rules@DEP-0.0.0-PLACEHOLDER'], 'devDependencies');

    const json = readJSON(tree, 'tslint.json');
    if (json == null) return tree;

    json.rulesDirectory.push(`nz-tslint-rules`);
    json.rules['nz-secondary-entry-imports'] = true;

    writeJSON(tree, 'tslint.json', json);

    return tree;
  };
}

function forceLess(): Rule {
  return () => {
    addAssetsToTarget([{ type: 'style', value: 'src/styles.less' }], 'add', [BUILD_TARGET_BUILD], null!, true);
  };
}

function addStyle(): Rule {
  return (tree: Tree) => {
    addHeadStyle(
      tree,
      project,
      `  <style type="text/css">.preloader{position:fixed;top:0;left:0;width:100%;height:100%;overflow:hidden;background:#49a9ee;z-index:9999;transition:opacity .65s}.preloader-hidden-add{opacity:1;display:block}.preloader-hidden-add-active{opacity:0}.preloader-hidden{display:none}.cs-loader{position:absolute;top:0;left:0;height:100%;width:100%}.cs-loader-inner{transform:translateY(-50%);top:50%;position:absolute;width:100%;color:#fff;text-align:center}.cs-loader-inner label{font-size:20px;opacity:0;display:inline-block}@keyframes lol{0%{opacity:0;transform:translateX(-300px)}33%{opacity:1;transform:translateX(0)}66%{opacity:1;transform:translateX(0)}100%{opacity:0;transform:translateX(300px)}}.cs-loader-inner label:nth-child(6){animation:lol 3s infinite ease-in-out}.cs-loader-inner label:nth-child(5){animation:lol 3s .1s infinite ease-in-out}.cs-loader-inner label:nth-child(4){animation:lol 3s .2s infinite ease-in-out}.cs-loader-inner label:nth-child(3){animation:lol 3s .3s infinite ease-in-out}.cs-loader-inner label:nth-child(2){animation:lol 3s .4s infinite ease-in-out}.cs-loader-inner label:nth-child(1){animation:lol 3s .5s infinite ease-in-out}</style>`,
    );
    addHtmlToBody(
      tree,
      project,
      `  <div class="preloader"><div class="cs-loader"><div class="cs-loader-inner"><label>	●</label><label>	●</label><label>	●</label><label>	●</label><label>	●</label><label>	●</label></div></div></div>\n`,
    );
    // add styles
    [`${project.sourceRoot}/styles/index.less`, `${project.sourceRoot}/styles/theme.less`].forEach(p => {
      overwriteFile({ tree, filePath: p, content: path.join(overwriteDataFileRoot, p), overwrite: true });
    });

    return tree;
  };
}

function addFilesToRoot(options: ApplicationOptions): Rule {
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

function fixLang(options: ApplicationOptions): Rule {
  return (tree: Tree) => {
    if (options.i18n) return;
    const langs = getLangData(options.defaultLanguage!);
    if (!langs) return;

    spinner.text = `Translating template into ${options.defaultLanguage} language, please wait...`;

    tree.visit(p => {
      if (~p.indexOf(`/node_modules/`)) return;

      fixLangInHtml(tree, p, langs);
    });
  };
}

function fixLangInHtml(tree: Tree, p: string, langs: {}): void {
  let html = tree.get(p)!.content.toString('utf8');
  let matchCount = 0;
  // {{(status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | translate }}
  // {{ (status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | translate }}
  html = html.replace(/\{\{[ ]?\(status \? '([^']+)' : '([^']+)'\) \| translate \}\}/g, (_word, key1, key2) => {
    ++matchCount;
    return `{{ status ? '${langs[key1] || key1}' : '${langs[key2] || key2}' }}`;
  });
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
    tree.overwrite(p, html);
  }
}

function fixVsCode(): Rule {
  return (tree: Tree) => {
    const filePath = '.vscode/extensions.json';
    let json = readJSON(tree, filePath);
    if (json == null) {
      tree.create(filePath, '');
      json = {};
    }
    json.recommendations = ['cipchk.ng-alain-extension-pack'];
    writeJSON(tree, filePath, json);
  };
}

function install(): Rule {
  return (_host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

function finished(): Rule {
  return () => {
    spinner.succeed(`Congratulations, NG-ALAIN scaffold generation complete.`);
  };
}

export default function (options: ApplicationOptions): Rule {
  return async (tree: Tree) => {
    project = (await getProject(tree, options.project)).project;
    spinner.start(`Generating NG-ALAIN scaffold...`);
    return chain([
      // @delon/* dependencies
      addDependenciesToPackageJson(options),
      // Configuring CommonJS dependencies
      // https://angular.io/guide/build#configuring-commonjs-dependencies
      addAllowedCommonJsDependencies([]),
      // ci
      addRunScriptToPackageJson(),
      addPathsToTsConfig(),
      // code style
      addCodeStylesToPackageJson(),
      addSchematics(options),
      addNzLintRules(),
      // files
      removeOrginalFiles(),
      addFilesToRoot(options),
      forceLess(),
      addStyle(),
      fixLang(options),
      fixVsCode(),
      fixAngularJson(options),
      install(),
      finished(),
    ]);
  };
}
