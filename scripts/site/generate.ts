import * as path from 'path';
import * as fs from 'fs';
import * as fse from 'fs-extra';
import { parseMd } from './utils/parse-md';
import {
  genUpperName,
  genUrl,
  generateDoc,
  genComponentName,
  genSelector,
  includeAttributes,
} from './utils/utils';
import { groupFiles } from './utils/group-files';
import { generateDemo } from './utils/generate-demo';
import {
  SiteConfig,
  ModuleConfig,
  Meta,
  MetaTemplateData,
  ModuleTemplateData,
  MetaOriginal,
  ContentTemplateData,
} from './interfaces';

const target = process.argv[2];
const isSyncSpecific = !!target && target !== 'init';

if (!target)
  throw new Error(`Should specify the generation type, 'init' is all module`);

const rootDir = path.resolve(__dirname, '../../');
const siteConfig = require(path.join(
  rootDir,
  'src/site.config.js',
)) as SiteConfig;
const defaultLang = siteConfig.defaultLang;

function generateModule(config: ModuleConfig) {
  const distPath = path.join(rootDir, config.dist);

  const metas: Meta[] = Object.assign([], config.extraRouteMeta);
  const modules: any = {
    imports: [],
    components: [],
    routes: [],
  };

  function appendToModule(
    componentName: string,
    name: string,
    filename: string,
    needRouter: boolean = true,
  ) {
    modules.imports.push(
      `import { ${componentName} } from './${name}/${filename}';`,
    );
    modules.components.push(componentName);
    if (needRouter) {
      if (modules.routes.length <= 0 && config.defaultRoute) {
        modules.routes.push(
          `{ path: '', redirectTo: '${
            config.defaultRoute
          }/zh', pathMatch: 'full' }`,
        );
      }
      modules.routes.push(`{ path: '${name}', redirectTo: '${name}/zh', pathMatch: 'full' }`);
      modules.routes.push(`{ path: '${name}/:lang', component: ${componentName} }`);
    }
  }

  config.dir.forEach(dirConfig => {
    const tpl = fs
      .readFileSync(path.join(rootDir, dirConfig.template.content))
      .toString('utf8');

    const files = groupFiles(
      dirConfig.src.map(p => path.join(rootDir, p)),
      dirConfig,
      isSyncSpecific,
      target,
      siteConfig,
    );

    files.forEach(item => {
      // region: generate document file

      const content = {};
      const urls = {};
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
        name: item.key,
        i18n,
        order: content[defaultLang].meta.order || -1,
        cols: content[defaultLang].meta.cols || 1,
        meta: contentMetas,
      };
      metas.push(meta);

      // endregion

      // region: generate demo files
      const demos = generateDemo(
        rootDir,
        item.key,
        path.join(path.dirname(item.data[defaultLang]), 'demo'),
        meta.cols,
        config,
        siteConfig,
      );
      // endregion

      // region: generate document file
      const fileObject: ContentTemplateData = {
        componentName: genComponentName(config.name, meta.name),
        selector: genSelector(config.name, meta.name),
        item: JSON.stringify({
          cols: meta.cols,
          urls,
          content,
          demo: demos.data.length > 0,
        }),
        demo: demos.tpl.left.length > 0 || demos.tpl.right.length > 0,
      };
      const demoHTML: string[] = [];
      if (fileObject.demo) {
        demoHTML.push(`<nz-row [nzGutter]="16">`);
        if (demos.tpl.left.length > 0 && demos.tpl.right.length > 0) {
          demoHTML.push(
            `<nz-col nzSpan="12">${demos.tpl.left.join('')}</nz-col>`,
          );
          demoHTML.push(
            `<nz-col nzSpan="12">${demos.tpl.right.join('')}</nz-col>`,
          );
        } else {
          demoHTML.push(
            `<nz-col nzSpan="24">${demos.tpl.left.join(
              '',
            )}${demos.tpl.right.join('')}</nz-col>`,
          );
        }

        demoHTML.push('</nz-row>');
      }
      fileObject.demos = demoHTML.join('');
      fileObject.codes = JSON.stringify(demos.data);
      generateDoc(fileObject, tpl, path.join(distPath, item.key, `index.ts`));
      // endregion

      // region: register module
      appendToModule(fileObject.componentName, item.key, 'index');
      // demo
      demos.data.forEach(demo => {
        appendToModule(demo.componentName, item.key, demo.name, false);
      });
      // endregion
    });
  });

  // region: generate meta file

  const metaObj = Object.assign({ types: [] }, includeAttributes(config, {}));
  metaObj.list = metas;

  generateDoc(
    <MetaTemplateData>{ data: JSON.stringify(metaObj) },
    fs.readFileSync(path.join(rootDir, config.template.meta)).toString('utf8'),
    path.join(distPath, `meta.ts`),
  );
  // endregion

  // region: generate module file
  const moduleObj: ModuleTemplateData = {
    name: config.name,
    moduleName: genUpperName(config.name),
    imports: modules.imports.join('\r\n'),
    components: modules.components.join(',\r\n'),
    routes: modules.routes.join(',\r\n'),
  };
  generateDoc(
    moduleObj,
    fs
      .readFileSync(path.join(rootDir, config.template.module))
      .toString('utf8'),
    path.join(distPath, `${config.name}.module.ts`),
  );
  // endregion
}

for (const m of siteConfig.modules) {
  generateModule(m);
}
