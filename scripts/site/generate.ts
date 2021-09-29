/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from 'fs';
import * as path from 'path';

import {
  ContentTemplateData,
  ExampleModules,
  Meta,
  MetaOriginal,
  MetaTemplateData,
  ModuleConfig,
  ModuleTemplateData,
  SiteConfig
} from './interfaces';
import { generateDemo } from './utils/generate-demo';
import { generateExampleModule } from './utils/generate-example';
import { groupFiles } from './utils/group-files';
import { parseMd } from './utils/parse-md';
import {
  genComponentName,
  generateDoc,
  genSelector,
  genUpperName,
  genUrl,
  handleExploreStr,
  includeAttributes
} from './utils/utils';

const target = process.argv[2];
const isSyncSpecific = !!target && target !== 'init';

if (!target) throw new Error(`Should specify the generation type, 'init' is all module`);

const rootDir = path.resolve(__dirname, '../../');
const siteConfig = require(path.join(rootDir, 'src/site.config.js')) as SiteConfig;
const defaultLang = siteConfig.defaultLang;

const exampleModules: ExampleModules = {
  list: []
};

function generateModule(config: ModuleConfig) {
  const distPath = path.join(rootDir, config.dist);

  const metas: Meta[] = Object.assign([], config.extraRouteMeta);
  const modules: any = {
    imports: [],
    components: [],
    routes: []
  };

  function appendToModule(componentName: string, name: string, filename: string, needRouter: boolean = true) {
    modules.imports.push(`import { ${componentName} } from './${handleExploreStr(name)}/${filename}';`);
    modules.components.push(componentName);
    if (needRouter) {
      if (modules.routes.length <= 0 && config.defaultRoute) {
        modules.routes.push(`{ path: '', redirectTo: '${config.defaultRoute}/zh', pathMatch: 'full' }`);
      }

      const path_name = handleExploreStr(name, '-');
      modules.routes.push(`{ path: '${path_name}', redirectTo: '${path_name}/zh', pathMatch: 'full' }`);
      modules.routes.push(`{ path: '${path_name}/:lang', component: ${componentName} }`);
    }
  }

  function fixMDClass(fileObject: any) {
    const contentObj = fileObject.item.content;
    Object.keys(contentObj).forEach(lan => {
      contentObj[lan].content = `<section class="markdown">${contentObj[lan].content}</section>`;
    });
  }

  function fixDemo(fileObject: any, demos: any) {
    const demoHTML: string[] = [];
    demoHTML.push(`<div nz-row [nzGutter]="16">`);
    if (demos.tpl.left.length > 0 && demos.tpl.right.length > 0) {
      demoHTML.push(`<div nz-col nzSpan="12">${demos.tpl.left.join('')}</div>`);
      demoHTML.push(`<div nz-col nzSpan="12">${demos.tpl.right.join('')}</div>`);
    } else {
      demoHTML.push(`<div nz-col nzSpan="24">${demos.tpl.left.join('')}${demos.tpl.right.join('')}</div>`);
    }

    demoHTML.push('</div>');
    fileObject.demos = demoHTML.join('');

    fixMDClass(fileObject);
  }

  function fixExample(fileObject: any, demos: any) {
    const contentObj = fileObject.item.content;
    Object.keys(contentObj).forEach(lan => {
      const demoArr = contentObj[lan].content.split(/(<!--demo\([^)]+\)-->)/g);
      if (demoArr.length > 1) {
        contentObj[lan].content = demoArr
          .map((html: any) => {
            if (html.startsWith('<!--')) return html;
            return `<section class="markdown">${html}</section>`;
          })
          .join('')
          .replace(/<!--demo\(([^)]+)\)-->/g, '<example-$1-index></example-$1-index>');
      } else {
        contentObj[lan].content = `<section class="markdown">${contentObj[lan].content}</section>`;
      }
    });

    const newList = demos.data.filter(
      (w: any) => w.type === 'example' && exampleModules.list.filter(ew => ew.urls === w.urls).length === 0
    );

    exampleModules.list.push(...newList);
  }

  config.dir.forEach(dirConfig => {
    const tpl = fs.readFileSync(path.join(rootDir, dirConfig.template.content)).toString('utf8');

    const files = groupFiles(
      dirConfig.src.map(p => path.join(rootDir, p)),
      dirConfig,
      isSyncSpecific,
      target,
      siteConfig
    );

    files.forEach(item => {
      // #region generate document file

      const content: any = {};
      const urls: any = {};
      const contentMetas: any = {};
      const i18n = Object.keys(item.data).length > 1;
      // const titleBuffer = {};
      Object.keys(item.data).forEach(lang => {
        const filePath = item.data[lang];
        content[lang] = parseMd(filePath, siteConfig);
        urls[lang] = genUrl(rootDir, filePath);
        contentMetas[lang] = content[lang].meta as MetaOriginal;
      });

      // push meta
      const meta: Meta = {
        name: handleExploreStr(item.key, '-'),
        i18n,
        order: content[defaultLang].meta.order || -1,
        cols: content[defaultLang].meta.cols || 1,
        meta: contentMetas
      };
      metas.push(meta);

      // #endregion

      // #region generate demo files
      const demos = generateDemo(
        rootDir,
        meta.name,
        path.join(path.dirname(item.data[defaultLang]), 'demo'),
        meta.cols,
        config,
        siteConfig
      );
      // #endregion

      // #region generate document file
      const demoList = demos.data.filter(w => w.type !== 'example');
      const isDemo = demoList.length > 0;
      const isExample = demos.data.filter(w => w.type === 'example').length > 0;
      const fileObject: ContentTemplateData = {
        componentName: genComponentName(config.name, meta.name),
        selector: genSelector(config.name, meta.name),
        item: {
          cols: meta.cols,
          urls,
          content,
          demo: isDemo
          // i18n: meta.i18n,
        } as any,
        demos: '',
        demo: isDemo
      };
      if (fileObject.demo) {
        fixDemo(fileObject, demos);
      } else if (isExample) {
        fixExample(fileObject, demos);
      } else {
        fixMDClass(fileObject);
      }
      fileObject.codes = JSON.stringify(demoList);
      fileObject.item = JSON.stringify(fileObject.item);
      generateDoc(fileObject, tpl, path.join(distPath, meta.name, `index.ts`));
      // #endregion

      // #region register module
      appendToModule(fileObject.componentName, meta.name, 'index');
      // demo
      demoList.forEach(demo => {
        appendToModule(demo.componentName, meta.name, demo.name, false);
      });
      // #endregion
    });
  });

  // #region generate meta file

  const metaObj = { types: [], ...includeAttributes(config, {}) };
  metaObj.list = metas;

  generateDoc(
    { data: JSON.stringify(metaObj) } as MetaTemplateData,
    fs.readFileSync(path.join(rootDir, config.template.meta)).toString('utf8'),
    path.join(distPath, `meta.ts`)
  );
  // #endregion

  // #region generate module file
  const moduleObj: ModuleTemplateData = {
    name: config.name,
    moduleName: genUpperName(config.name),
    imports: modules.imports.join('\r\n'),
    components: modules.components.join(',\r\n'),
    routes: modules.routes.join(',\r\n')
  };
  generateDoc(
    moduleObj,
    fs.readFileSync(path.join(rootDir, config.template.module)).toString('utf8'),
    path.join(distPath, `${config.name}.module.ts`)
  );
  // #endregion
}

for (const m of siteConfig.modules) {
  // if (m.module !== 'docs') continue;
  generateModule(m);
}

if (exampleModules.list.length > 0) {
  generateExampleModule(rootDir, siteConfig, exampleModules);
}

console.log(`✅ Site generated successfully`);
