/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from 'fs';
import * as path from 'path';

import {
  ContentTemplateData,
  DemoData,
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
const routerPaths: string[] = ['/'];

function pushRouterPath(name: string, p: string): void {
  routerPaths.push(`/${name}/${p}/en`);
  routerPaths.push(`/${name}/${p}/zh`);
}

function saveRouterPath(): void {
  const filePath = path.join(rootDir, 'scripts/site/route-paths.txt');
  fs.writeFileSync(filePath, Array.from(new Set(routerPaths)).sort().join('\n'), { flag: 'w+' });
}

function generateModule(config: ModuleConfig): void {
  const distPath = path.join(rootDir, config.dist);

  const metas: Meta[] = Object.assign([], config.extraRouteMeta);
  const modules: any = {
    imports: [],
    components: [],
    routes: []
  };

  function appendToModule(componentName: string, name: string, filename: string, needRouter: boolean = true): void {
    modules.imports.push(`import { ${componentName} } from './${handleExploreStr(name)}/${filename}';`);
    modules.components.push(componentName);
    if (needRouter) {
      if (modules.routes.length <= 0 && config.defaultRoute) {
        modules.routes.push(`{ path: '', redirectTo: '${config.defaultRoute}/zh', pathMatch: 'full' }`);
      }

      const path_name = handleExploreStr(name, '-');
      modules.routes.push(`{ path: '${path_name}', redirectTo: '${path_name}/zh', pathMatch: 'full' }`);
      modules.routes.push(`{ path: '${path_name}/:lang', component: ${componentName} }`);

      pushRouterPath(config.name, path_name);
    }
  }

  function fixMDClass(fileObject: any): void {
    const contentObj = fileObject.item.content;
    Object.keys(contentObj).forEach(lan => {
      contentObj[lan].content = `<section class="markdown">${contentObj[lan].content}</section>`;
    });
  }

  function fixDemo(fileObject: any, demos: DemoData): void {
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

  function fixExample(fileObject: any, demos: any): void {
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

  const defaultContentTpl = config.standalone ? './src/templates/standalone.content.ts' : './src/templates/content.ts';
  config.dir.forEach(dirConfig => {
    const tpl = fs.readFileSync(path.join(rootDir, dirConfig.template?.content ?? defaultContentTpl)).toString('utf8');

    const files = groupFiles(
      dirConfig.src.map(p => path.join(rootDir, p)),
      dirConfig,
      isSyncSpecific,
      target,
      siteConfig
    );

    files.forEach((item: any) => {
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
        order: content[defaultLang].meta.order || 100,
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
        demo: isDemo,
        imports: '',
        standaloneImports: ''
      };
      const standaloneDemo = config.standalone && demoList.length > 0;
      if (standaloneDemo) {
        fileObject.imports = demoList
          .map(v => `import { ${v.componentName} } from './${v.name}';`)
          .concat(`import { NzGridModule } from 'ng-zorro-antd/grid';`)
          .join('\n');
        fileObject.standaloneImports = `,${demoList
          .map(v => v.componentName)
          .concat('NzGridModule')
          .join(', ')}`;
      }
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
      if (!standaloneDemo) {
        demoList.forEach((demo: { componentName: string; name: string }) => {
          appendToModule(demo.componentName, meta.name, demo.name, false);
        });
      }
      // #endregion
    });
  });

  const metaTpl = fs
    .readFileSync(path.join(rootDir, config.template?.meta ?? './src/templates/meta.ts'))
    .toString('utf8');
  const defaultModuleTpl = config.standalone ? './src/templates/standalone.routes.ts' : './src/templates/module.ts';
  const moduleTpl = fs.readFileSync(path.join(rootDir, config.template?.module ?? defaultModuleTpl)).toString('utf8');
  // #region generate meta file

  const metaObj = { types: [], ...includeAttributes(config, {}) };
  metaObj.list = metas.sort((a, b) => a.order - b.order);

  generateDoc({ data: JSON.stringify(metaObj) } as MetaTemplateData, metaTpl, path.join(distPath, `meta.ts`));
  // #endregion

  // #region generate module file
  const moduleObj: ModuleTemplateData = {
    name: config.name,
    moduleName: genUpperName(config.name),
    imports: modules.imports.join('\r\n'),
    components: modules.components.join(',\r\n'),
    routes: modules.routes.join(',\r\n')
  };
  generateDoc(moduleObj, moduleTpl, path.join(distPath, config.standalone ? `routes.ts` : `${config.name}.module.ts`));
  // #endregion
}

for (const m of siteConfig.modules) {
  // if (m.module !== 'docs') continue;
  generateModule(m);
}

if (exampleModules.list.length > 0) {
  generateExampleModule(rootDir, siteConfig, exampleModules);
}

// save routerPaths
saveRouterPath();

console.log(`✅ Site generated successfully`);
