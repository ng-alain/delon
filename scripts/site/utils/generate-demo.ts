/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from 'fs';
import * as fse from 'fs-extra';
import * as path from 'path';

import { toHtml } from './generate-md';
import { getCode, genUpperName, genUrl, generateDoc } from './utils';
import { ContentTemplateData, DemoData, DemoDataItem, MTData, ModuleConfig, SiteConfig } from '../interfaces';

const JsonML = require('jsonml.js/lib/utils');
const MT = require('mark-twain');

let exampleIndexTpl: string | null = null;

function fixExample(item: any, filePath: string, config: ModuleConfig): void {
  item.componentIndexName = `${genUpperName(`${config.name}-${item.name}-index`)}Component`;
  const obj: ContentTemplateData = {
    selector: `${item.id}-index`,
    demos: `
    <code-box [item]="item" type="simple">
      <${item.id}></${item.id}>
    </code-box>`,
    componentName: item.componentIndexName,
    item: JSON.stringify(item)
  } as unknown as ContentTemplateData;
  const exampleComponentName = `${genUpperName(`${config.name}-${item.name}`)}Component`;
  obj.imports = `import { NzGridModule } from 'ng-zorro-antd/grid';\nimport { ${exampleComponentName} } from './${item.name}';`;
  obj.standaloneImports = `,NzGridModule,${exampleComponentName}`;
  generateDoc(obj, exampleIndexTpl!!, filePath);
}

export function generateDemo(
  rootDir: string,
  key: string,
  dir: string,
  cols: number,
  config: ModuleConfig,
  siteConfig: SiteConfig
): DemoData {
  if (!exampleIndexTpl) {
    exampleIndexTpl = fs.readFileSync(path.join(rootDir, siteConfig.template.examples_index)).toString('utf8');
  }
  const ret: DemoData = {
    tpl: {
      left: [],
      right: []
    },
    data: []
  };

  if (!fse.pathExistsSync(dir)) return ret;

  const demos: MTData[] = fse.readdirSync(dir).map(name => {
    const filePath = path.join(dir, name);
    let mt: any = null;
    try {
      mt = MT(fse.readFileSync(filePath, { encoding: 'utf-8' }));
    } catch (err) {
      console.error(`invalid ${filePath}`, err);
      return;
    }
    mt!!.name = name.replace('.md', '');
    mt!!.filePath = filePath;
    return mt;
  });

  if (demos.length <= 0) return ret;
  const isTwo = cols > 1;
  let point = 0;
  demos
    .sort((a: any, b: any) => a.meta.order - b.meta.order)
    .forEach((markdownData: any, index: number) => {
      const item: DemoDataItem = {
        id: `${config.name}-${key}-${markdownData.name}`,
        meta: markdownData.meta,
        summary: ``,
        code: ``,
        lang: '',
        componentName: '',
        point: 0,
        name: markdownData.name,
        urls: genUrl(rootDir, markdownData.filePath),
        type: markdownData.meta.type || 'demo'
      };

      const contentChildren = JsonML.getChildren(markdownData.content);
      const codeStartIndex = contentChildren.findIndex((node: any) => JsonML.getTagName(node) === 'pre');

      if (codeStartIndex > -1) {
        item.summary = [''].concat(contentChildren.slice(0, codeStartIndex));

        const codeNodes = contentChildren.slice(codeStartIndex);
        if (codeNodes.length > 0) {
          const attr = JsonML.getAttributes(codeNodes[0]);
          item.code = getCode(codeNodes[0]);
          item.lang = attr.lang;
        }
      } else {
        item.summary = markdownData.content;
      }
      // parse languages
      const summaryChildren = JsonML.getChildren(item.summary);
      const summaryLangIdx = summaryChildren.findIndex((node: any) => JsonML.getTagName(node) === 'h2');
      if (summaryLangIdx !== -1) {
        const summaryRet: any = {};
        for (let i = 0; i < summaryChildren.length; i++) {
          const summaryNode = summaryChildren[i];
          const summaryLang = `${summaryNode[1]}`;
          if (JsonML.getTagName(summaryNode) === 'h2' && ~siteConfig.langs.indexOf(summaryLang)) {
            const nextLangPos = summaryChildren.slice(i + 1).findIndex((node: any) => JsonML.getTagName(node) === 'h2');
            summaryRet[summaryLang] = [''].concat(
              nextLangPos === -1 ? summaryChildren.slice(i + 1) : summaryChildren.slice(i + 1, nextLangPos + 1)
            );
            if (nextLangPos === -1) break;
            i = nextLangPos;
          }
        }
        item.summary = summaryRet;
        for (const lang in item.summary) {
          item.summary[lang] = toHtml(item.summary[lang]);
        }
      } else {
        item.summary = toHtml(item.summary);
      }

      // replace component name
      if (item.type === 'example') {
        item.componentName = `${genUpperName(`${config.name}-${markdownData.name}`)}Component`;
      } else {
        item.componentName = `${genUpperName(item.id)}Component`;
      }
      item.code = `${item.code}`
        .replace(/selector:[ ]?(['|"|`])([^'"`]+)/g, `selector: $1${item.id}`)
        .replace(/export class ([^ {]+)/g, `export class ${item.componentName}`);
      // save demo component
      let filePath = path.join(rootDir, config.dist, key, `${markdownData.name}.ts`);
      if (item.type === 'example') {
        filePath = path.join(rootDir, `./src/app/routes/gen/examples`, `${markdownData.name}.ts`);
        fse.ensureDirSync(path.dirname(filePath));

        // generate container component
        const containerFilePath = path.join(rootDir, `./src/app/routes/gen/examples`, `${markdownData.name}_index.ts`);
        fixExample(item, containerFilePath, config);
      } else {
        fse.ensureDirSync(path.dirname(filePath));
      }
      fs.writeFileSync(filePath, item.code, { flag: 'w+' });
      // generate doc component template
      const pos = isTwo ? (index % 2 === 0 ? 'left' : 'right') : 'left';
      ret.tpl[pos].push(`
        <code-box [item]="codes[${point}]" [attr.id]="codes[${point}].id">
          <${item.id} />
        </code-box>
      `);
      item.point = point;
      ret.data.push(item);

      point++;
    });
  return ret;
}
