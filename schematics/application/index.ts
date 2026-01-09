import { strings } from '@angular-devkit/core';
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
  url
} from '@angular-devkit/schematics';
import { updateWorkspace } from '@schematics/angular/utility/workspace';

import { getLangData } from '../core/lang.config';
import {
  addAllowedCommonJsDependencies,
  addAllowSyntheticDefaultImports,
  addAssetsToTarget,
  addFileReplacements,
  addHeadStyle,
  addHtmlToBody,
  addPackage,
  addSchematicCollections,
  addStylePreprocessorOptions,
  addStyleResources,
  BUILD_TARGET_BUILD,
  BUILD_TARGET_SERVE,
  DEFAULT_WORKSPACE_PATH,
  getNgAlainJson,
  getProject,
  getProjectFromWorkspace,
  isMulitProject,
  modifyJSON,
  readContent,
  readJSON,
  readPackage,
  VERSION,
  writeFile,
  writeJSON,
  writeNgAlainJson,
  writePackage,
  ZORROVERSION
} from '../utils';
import { Schema as ApplicationOptions } from './schema';
import { addESLintRule, UpgradeMainVersions } from '../utils/versions';

let project: ProjectDefinition;
let projectName: string;
let mulitProject = false;

/** Remove files to be overwrite */
function removeOrginalFiles(): Rule {
  return (tree: Tree) => {
    [
      `${project.root}/README.md`,
      `${project.sourceRoot}/main.ts`,
      `${project.sourceRoot}/styles.less`,
      `${project.sourceRoot}/public/favicon.ico`,
      `${project.sourceRoot}/app/app.component.spec.ts`,
      `${project.sourceRoot}/app/app.component.ts`,
      `${project.sourceRoot}/app/app.component.html`,
      `${project.sourceRoot}/app/app.component.less`,
      `${project.sourceRoot}/app/app.config.ts`,
      `${project.sourceRoot}/app/app.routes.ts`
    ]
      .filter(p => tree.exists(p))
      .forEach(p => tree.delete(p));
  };
}

function fixAngularJson(): Rule {
  return updateWorkspace(async workspace => {
    const p = getProjectFromWorkspace(workspace, projectName);
    // Add proxy.conf.js
    const serveTarget = p.targets?.get(BUILD_TARGET_SERVE);
    if (serveTarget.options == null) serveTarget.options = {};
    serveTarget.options.proxyConfig = 'proxy.conf.js';

    addStyleResources(workspace, projectName);
    addStylePreprocessorOptions(workspace, projectName);
    addSchematicCollections(workspace);
    addFileReplacements(workspace, projectName);
  });
}

/**
 * Fix https://github.com/ng-alain/ng-alain/issues/2359
 */
function fixBrowserBuilderBudgets(): Rule {
  return async (tree: Tree) => {
    const json = readJSON(tree, DEFAULT_WORKSPACE_PATH);
    const budgets = json.projects[projectName].architect.build.configurations.production.budgets as Array<{
      type: string;
      maximumWarning: string;
      maximumError: string;
    }>;
    if (budgets && budgets.length > 0) {
      const initial = budgets.find(w => w.type === 'initial');
      if (initial) {
        initial.maximumWarning = '2mb';
        initial.maximumError = '3mb';
        writeJSON(tree, DEFAULT_WORKSPACE_PATH, json);
      }
    }
  };
}

function addDependenciesToPackageJson(): Rule {
  return (tree: Tree) => {
    UpgradeMainVersions(tree);
    // 3rd
    addPackage(tree, ['screenfull@DEP-0.0.0-PLACEHOLDER']);
    return tree;
  };
}

function addRunScriptToPackageJson(): Rule {
  return (tree: Tree) => {
    const json = readPackage(tree, 'scripts');
    if (json == null) return tree;

    const commandPrefix = mulitProject ? `${projectName}:` : '';
    const commandFragment = mulitProject ? ` ${projectName}` : '';
    json.scripts['ng-high-memory'] = `node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng`;
    json.scripts[commandFragment ? commandFragment.trim() : 'start'] = `ng s${commandFragment} -o`;
    json.scripts[`${commandPrefix}hmr`] = `ng s${commandFragment} -o --hmr`;
    json.scripts[`${commandPrefix}build`] = `npm run ng-high-memory build${commandFragment}`;
    json.scripts[`${commandPrefix}analyze`] = `npm run ng-high-memory build${commandFragment} -- --source-map`;
    json.scripts[`${commandPrefix}analyze:view`] = `source-map-explorer dist/${mulitProject ? `${projectName}/` : ''}**/*.js`;
    json.scripts[`${commandPrefix}test-coverage`] = `ng test${commandFragment} --code-coverage --watch=false`;
    const themeCommand = mulitProject ? ` -n=${projectName}` : '';
    json.scripts[`${commandPrefix}color-less`] = `ng-alain-plugin-theme -t=colorLess${themeCommand}`;
    json.scripts[`${commandPrefix}theme`] = `ng-alain-plugin-theme -t=themeCss${themeCommand}`;
    json.scripts[`${commandPrefix}icon`] = `ng g ng-alain:plugin icon${mulitProject ? ` --project ${projectName}` : ''}`;
    json.scripts.prepare = `husky install`;
    writePackage(tree, json);
    return tree;
  };
}

function addPathsToTsConfig(): Rule {
  return (tree: Tree) => {
    const tsconfigPath = project.targets?.get(BUILD_TARGET_BUILD)?.options?.tsConfig as string;
    if (tsconfigPath == null) {
      console.warn(`Cannot find tsconfig file in project ${projectName}`);
      return tree;
    }

    const commandPrefix = mulitProject ? `projects/${projectName}/` : '';
    const tsConfigPath = 'tsconfig.json';
    modifyJSON(tree, tsConfigPath, { path: ['compilerOptions', 'baseUrl'], value: './' });

    const basePath = ['compilerOptions', 'paths'];
    modifyJSON(tree, tsConfigPath, { path: basePath, value: {} });
    modifyJSON(tree, tsConfigPath, { path: [...basePath, `@shared`], value: [`${commandPrefix}src/app/shared/index`] });
    modifyJSON(tree, tsConfigPath, { path: [...basePath, `@core`], value: [`${commandPrefix}src/app/core/index`] });
    modifyJSON(tree, tsConfigPath, { path: [...basePath, `@env/*`], value: [`${commandPrefix}src/environments/*`] });
    modifyJSON(tree, tsConfigPath, { path: [...basePath, `@_mock`], value: [`_mock/index`] });

    return tree;
  };
}

function addCodeStylesToPackageJson(): Rule {
  return (tree: Tree) => {
    const json = readPackage(tree);
    if (json == null) return tree;
    json.scripts.lint = `npm run lint:ts && npm run lint:style`;
    json.scripts['lint:ts'] = `npx eslint --cache --fix`;
    json.scripts['lint:style'] = `npx stylelint \\"src/**/*.less\\" --fix`;
    json.scripts['prepare'] = 'husky install';
    writePackage(tree, json);
    // fix polyfills.ts
    const polyfillsPath = `${project.sourceRoot}/polyfills.ts`;
    if (tree.exists(polyfillsPath)) {
      const polyfillsContent = `/* eslint-disable import/no-unassigned-import */\n${readContent(tree, polyfillsPath)}`;
      writeFile(tree, polyfillsPath, polyfillsContent);
    }
    // dependencies
    addPackage(
      tree,
      [
        `husky@DEP-0.0.0-PLACEHOLDER`,
        `lint-staged@DEP-0.0.0-PLACEHOLDER`,
        `prettier@DEP-0.0.0-PLACEHOLDER`,
        `stylelint@DEP-0.0.0-PLACEHOLDER`,
        `stylelint-config-standard@DEP-0.0.0-PLACEHOLDER`,
        `stylelint-declaration-block-no-ignored-properties@DEP-0.0.0-PLACEHOLDER`,
        `stylelint-config-clean-order@DEP-0.0.0-PLACEHOLDER`,
        `stylelint-order@DEP-0.0.0-PLACEHOLDER`
      ],
      'devDependencies'
    );
    return tree;
  };
}

function addSchematics(options: ApplicationOptions): Rule {
  return updateWorkspace(async workspace => {
    const p = getProjectFromWorkspace(workspace, options.project);
    const schematics = p.extensions.schematics;
    schematics['ng-alain:module'] = {
      routing: true
    };
    schematics['ng-alain:list'] = {
      skipTests: false
    };
    schematics['ng-alain:edit'] = {
      skipTests: false,
      modal: true
    };
    schematics['ng-alain:view'] = {
      skipTests: false,
      modal: true
    };
    schematics['ng-alain:curd'] = {
      skipTests: false
    };
    schematics['@schematics/angular:module'] = {
      routing: true
    };
    schematics['@schematics/angular:component'] = {
      skipTests: false,
      flat: false,
      inlineStyle: true,
      inlineTemplate: false,
      ...schematics['@schematics/angular:component']
    };
    schematics['@schematics/angular:directive'] = {
      skipTests: false
    };
    schematics['@schematics/angular:service'] = {
      skipTests: false
    };
  });
}

function forceLess(): Rule {
  return addAssetsToTarget(
    [{ type: 'style', value: `${mulitProject ? `projects/${projectName}/` : ''}src/styles.less` }],
    'add',
    [BUILD_TARGET_BUILD],
    projectName,
    false
  );
}

function addStyle(): Rule {
  return (tree: Tree) => {
    addHeadStyle(
      tree,
      project,
      `  <style type="text/css">.preloader{position:fixed;top:0;left:0;width:100%;height:100%;overflow:hidden;background:#49a9ee;z-index:9999;transition:opacity .65s}.preloader-hidden-add{opacity:1;display:block}.preloader-hidden-add-active{opacity:0}.preloader-hidden{display:none}.cs-loader{position:absolute;top:0;left:0;height:100%;width:100%}.cs-loader-inner{transform:translateY(-50%);top:50%;position:absolute;width:100%;color:#fff;text-align:center}.cs-loader-inner label{font-size:20px;opacity:0;display:inline-block}@keyframes lol{0%{opacity:0;transform:translateX(-300px)}33%{opacity:1;transform:translateX(0)}66%{opacity:1;transform:translateX(0)}100%{opacity:0;transform:translateX(300px)}}.cs-loader-inner label:nth-child(6){animation:lol 3s infinite ease-in-out}.cs-loader-inner label:nth-child(5){animation:lol 3s .1s infinite ease-in-out}.cs-loader-inner label:nth-child(4){animation:lol 3s .2s infinite ease-in-out}.cs-loader-inner label:nth-child(3){animation:lol 3s .3s infinite ease-in-out}.cs-loader-inner label:nth-child(2){animation:lol 3s .4s infinite ease-in-out}.cs-loader-inner label:nth-child(1){animation:lol 3s .5s infinite ease-in-out}</style>`
    );
    addHtmlToBody(
      tree,
      project,
      `  <div class="preloader"><div class="cs-loader"><div class="cs-loader-inner"><label>	●</label><label>	●</label><label>	●</label><label>	●</label><label>	●</label><label>	●</label></div></div></div>\n`
    );
    // // add styles
    // [`${project.sourceRoot}/styles/index.less`, `${project.sourceRoot}/styles/theme.less`].forEach(p => {
    //   overwriteFile({ tree, filePath: p, content: path.join(overwriteDataFileRoot, p), overwrite: true });
    // });

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
          ZORROVERSION
        }),
        move(project.sourceRoot)
      ]),
      MergeStrategy.Overwrite
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
          ZORROVERSION
        })
        // move('/')
      ]),
      MergeStrategy.Overwrite
    )
  ]);
}

function fixLang(options: ApplicationOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    if (options.i18n) return;
    const langs = getLangData(options.defaultLanguage!);
    if (!langs) return;

    context.logger.info(`Translating template into ${options.defaultLanguage} language, please wait...`);

    tree.visit(p => {
      if (~p.indexOf(`/node_modules/`)) return;

      fixLangInHtml(tree, p, langs);
    });
  };
}

function fixLangInHtml(tree: Tree, p: string, langs: unknown): void {
  let html = tree.get(p)!.content.toString('utf8');
  let matchCount = 0;
  // {{(status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | i18n }}
  // {{ (status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | i18n }}
  html = html.replace(/\{\{[ ]?\(status \? '([^']+)' : '([^']+)'\) \| i18n \}\}/g, (_word, key1, key2) => {
    ++matchCount;
    return `{{ status ? '${langs[key1] || key1}' : '${langs[key2] || key2}' }}`;
  });
  // {{ 'app.register-result.msg' | i18n: { email } }}
  html = html.replace(/\{\{[ ]?'([^']+)'[ ]? \| i18n: \{ [^ ]+ \} \}\}/g, (_word, key) => {
    ++matchCount;
    return langs[key] || key;
  });
  // {{ 'app.register-result.msg' | i18n: params }}
  html = html.replace(/\{\{[ ]?'([^']+)'[ ]? \| i18n: [^ ]+ \}\}/g, (_word, key) => {
    ++matchCount;
    return langs[key] || key;
  });
  // {{ 'Please enter mobile number!' | i18n }}
  html = html.replace(/\{\{[ ]?'([^']+)' \| i18n[ ]?\}\}/g, (_word, key) => {
    ++matchCount;
    return langs[key] || key;
  });
  // [nzTitle]="'app.login.tab-login-credentials' | i18n"
  html = html.replace(/'([^']+)' \| i18n[ ]?/g, (_word, key) => {
    ++matchCount;
    const value = langs[key] || key;
    return `'${value}'`;
  });
  // 'app.register.get-verification-code' | i18n
  html = html.replace(/'([^']+)' \| i18n/g, (_word, key) => {
    ++matchCount;
    return langs[key] || key;
  });
  // removed `header-i18n`
  if (~html.indexOf(`<header-i18n showLangText="false" class="langs" />`)) {
    ++matchCount;
    html = html.replace(`<header-i18n showLangText="false" class="langs" />`, ``);
  }
  if (matchCount > 0) {
    tree.overwrite(p, html);
  }
}

function fixNgAlainJson(): Rule {
  return (tree: Tree) => {
    const json = getNgAlainJson(tree);
    if (json == null) return;

    if (typeof json.projects !== 'object') json.projects = {};
    if (!json.projects[projectName]) json.projects[projectName] = {};

    writeNgAlainJson(tree, json);
  };
}

export default function (options: ApplicationOptions): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const res = await getProject(tree, options.project);
    mulitProject = isMulitProject(tree);
    project = res.project;
    projectName = res.name;
    context.logger.info(`Generating NG-ALAIN scaffold to ${projectName} project...`);
    return chain([
      // @delon/* dependencies
      addDependenciesToPackageJson(),
      // Configuring CommonJS dependencies
      // https://angular.io/guide/build#configuring-commonjs-dependencies
      addAllowedCommonJsDependencies([]),
      addAllowSyntheticDefaultImports(),
      // ci
      addRunScriptToPackageJson(),
      addPathsToTsConfig(),
      // code style
      addCodeStylesToPackageJson(),
      addSchematics(options),
      addESLintRule(res.name),
      // files
      removeOrginalFiles(),
      addFilesToRoot(options),
      forceLess(),
      addStyle(),
      fixLang(options),
      fixAngularJson(),
      fixBrowserBuilderBudgets(),
      fixNgAlainJson()
    ]);
  };
}
