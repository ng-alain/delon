import { readFileSync, mkdirSync, writeFileSync } from 'fs';
import { dirname, join, resolve } from 'path';

import { ast } from './ast';
import type { SiteConfig } from './interfaces';
import type { ModuleDoc, ModuleDocItem, ModuleResMeta, ModuleResMetaItem } from './types';
import { genComponentName, handleExploreStr } from './utils/utils';

const target = process.argv[2] ?? 'init';
const rootDir = resolve(__dirname, '../../');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const siteConfig = require(join(rootDir, 'src/site.config.js')) as SiteConfig;
const templateDir = './src/templates-v2/';
const templateCache = {
  content: readFileSync(join(rootDir, templateDir, 'content.ts'), { encoding: 'utf-8' }),
  routes: readFileSync(join(rootDir, templateDir, 'routes.ts'), { encoding: 'utf-8' }),
  meta: readFileSync(join(rootDir, templateDir, 'meta.ts'), { encoding: 'utf-8' }),
  examples: readFileSync(join(rootDir, templateDir, 'examples.ts'), { encoding: 'utf-8' }),
  examples_index: readFileSync(join(rootDir, templateDir, 'examples_index.ts'), { encoding: 'utf-8' })
};
const defaultLang = siteConfig.defaultLang;

function saveToFile(path: string, template: string, data?: unknown): void {
  const dirPath = dirname(path);
  mkdirSync(dirPath, { recursive: true });
  const res = data
    ? template.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, key) => {
        return String((data as Record<string, unknown>)[key] ?? '');
      })
    : template;
  // console.log(res);
  writeFileSync(path, res, { flag: 'w+' });
}

function getOrFirst<T>(record: Record<string, T>, key: string): T | undefined {
  if (key in record) return record[key];
  const firstKey = Object.keys(record)[0];
  return firstKey ? record[firstKey] : undefined;
}

function generateDemoCode(item: ModuleDocItem): string {
  if (item.demos == null || item.demos.length <= 0) return '';
  const isTwo = (getOrFirst(item.content, defaultLang)?.meta.cols ?? 1) > 1;
  const left: string[] = [];
  const right: string[] = [];
  for (const [index, i] of item.demos.filter(w => w.type !== 'example').entries()) {
    const code = `<code-box [item]="codes[${index}]" [attr.id]="codes[${index}].id"><${i.id} /></code-box>`;
    (isTwo ? (index % 2 === 0 ? left : right) : left).push(code);
  }
  if (left.length <= 0 && right.length <= 0) return '';

  const html: string[] = [`<div nz-row [nzGutter]="16">`];
  if (left.length > 0 && right.length > 0) {
    html.push(`<div nz-col nzSpan="12">${left.join('')}</div>`);
    html.push(`<div nz-col nzSpan="12">${right.join('')}</div>`);
  } else {
    html.push(`<div nz-col nzSpan="24">${left.join('')}${right.join('')}</div>`);
  }
  html.push('</div>');
  return html.join('');
}

function generateComponent(doc: ModuleDoc): void {
  for (const item of doc.docs) {
    const { id, name, demos, content, langs } = item;
    const distPath = join(siteConfig.dist, doc.name);
    const demoList = demos.filter(w => w.type !== 'example');
    const ngContent = generateDemoCode(item);
    const imports = demoList.map(v => `import { ${genComponentName(v.id)} } from './${v.name}';`);
    const standaloneImports = demoList.map(v => genComponentName(v.id));
    if (demoList.length > 0) {
      imports.push(
        `import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';`,
        `import { CodeBoxComponent } from '@shared';`
      );
      standaloneImports.push('NzColDirective', 'NzRowDirective', `CodeBoxComponent`);
    }
    // 生成 document 文件
    saveToFile(join(distPath, name, 'index.ts'), templateCache.content, {
      componentName: genComponentName(id),
      selector: id,
      ngContent,
      imports: imports.join('\n'),
      standaloneImports: `,${standaloneImports.join(', ')}`,
      item: JSON.stringify({ name, langs, content }),
      codes: JSON.stringify(demoList)
    });
    // 生成 demo 文件
    for (const i of demoList) {
      saveToFile(join(distPath, name, `${i.name}.ts`), i.code);
    }
    // 生成 example 文件
    const examples = demos.filter(w => w.type === 'example');
    if (examples.length > 0) {
      for (const example of examples) {
        // 示例组件
        saveToFile(join(siteConfig.dist, 'examples', `${example.name}.ts`), example.code);
        // 示例调用组件
        const exampleComponentName = genComponentName(example.id);
        const exampleCallData = {
          componentName: genComponentName(example.id, 'index'),
          selector: `${example.id}-index`,
          ngContent: `<code-box [item]="item" type="simple"><${example.id} /></code-box>`,
          imports: `import { ${exampleComponentName} } from './${example.name}';`,
          standaloneImports: `,${exampleComponentName}`,
          item: JSON.stringify(example)
        };
        saveToFile(
          join(siteConfig.dist, 'examples', `${example.name}_index.ts`),
          templateCache.examples_index,
          exampleCallData
        );
      }
    }
  }
}

function generateMeta(doc: ModuleDoc): void {
  const { name, groups, docs, github } = doc;
  // groups = [{"zh-CN":"CURD","en-US":"CURD"},{"zh-CN":"基础","en-US":"Basic"},{"zh-CN":"表单","en-US":"Form"},{"zh-CN":"布局","en-US":"Layout"},{"zh-CN":"业务","en-US":"Business"},{"zh-CN":"其它","en-US":"Other"}]
  const data: ModuleResMeta = {
    name,
    github,
    groups,
    list: docs.map(i => {
      const meta = getOrFirst(i.content, defaultLang)?.meta;
      const data: ModuleResMetaItem = {
        groupIndex: groups.findIndex(w => w['zh-CN'] == meta?.group || w['en-US'] == meta?.group),
        name: i.name,
        order: meta?.order ?? 0,
        redirect: meta?.url,
        meta: {}
      };
      Object.keys(i.content).forEach(lang => {
        const { title, subtitle, tag, deprecated } = i.content[lang].meta;
        (data.meta as Record<string, unknown>)[lang] = {
          title,
          subtitle,
          tag,
          deprecated
        };
      });
      return data;
    })
  };
  saveToFile(join(siteConfig.dist, name, 'meta.ts'), templateCache.meta, {
    data: JSON.stringify(data)
  });
}

function generateRouters(doc: ModuleDoc): void {
  const { docs } = doc;
  const imports: string[] = [];
  const routes: string[] = [];
  const routerPaths: string[] = ['/'];
  for (const item of docs) {
    const componentName = genComponentName(item.id);
    imports.push(`import { ${componentName} } from './${item.name}';`);

    const path_name = handleExploreStr(item.name, '-');
    routes.push(`{ path: '${path_name}', redirectTo: '${path_name}/zh', pathMatch: 'full' }`);
    routes.push(`{ path: '${path_name}/:lang', component: ${componentName} }`);

    routerPaths.push(`/${doc.name.toLowerCase()}/${path_name}/en`);
    routerPaths.push(`/${doc.name.toLowerCase()}/${path_name}/zh`);
  }
  saveToFile(join(siteConfig.dist, doc.name, 'routes.ts'), templateCache.routes, {
    imports: imports.join('\n'),
    routes: routes.join(',\n')
  });
}

function generateExamplesIndex(docs: ModuleDoc[]): void {
  const imports: string[] = [];
  const metadata: string[] = [];
  for (const doc of docs) {
    for (const ei of doc.docs) {
      const examples = ei.demos.filter(w => w.type === 'example');
      if (examples.length <= 0) continue;

      for (const example of examples) {
        const componentName = genComponentName(example.id, 'index');
        imports.push(`import { ${componentName} } from './${example.name}_index';`);
        metadata.push(
          `'example-${example.name}-index': { title: ${JSON.stringify(example.title)}, component: ${componentName} }`
        );
      }
    }
  }
  saveToFile(join(siteConfig.dist, 'examples', `index.ts`), templateCache.examples, {
    imports: imports.join('\n'),
    metadata: metadata.join(',\n')
  });
}

function main(): void {
  const docs = ast(target);
  for (const item of docs) {
    generateComponent(item);
    // 生成 meta
    generateMeta(item);
    // 生成 router
    generateRouters(item);
  }

  // 生成 Example index.ts
  generateExamplesIndex(docs);

  const length = docs.reduce((pre, cur) => pre + cur.docs.length, 0);
  console.log(`✅ Site generated ${length} successfully`);
}

main();
