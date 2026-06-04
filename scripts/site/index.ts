/* eslint-disable @typescript-eslint/no-require-imports */
import { readFileSync } from 'fs';
import { join, resolve } from 'path';

import { ast } from './ast/index';
import { genComponentName, getOrFirst, handleExploreStr, saveToFile } from './ast/util';
import { CONFIG } from './config';
import { generateLLMs } from './llms';
import type { ModuleDoc, ModuleDocItem, ModuleMenu, ModuleMenuGroup, ModuleMenuGroupItem, ModuleResDoc } from './types';

const target = process.argv[2] ?? 'init';
const rootDir = resolve(__dirname, '../../');
const pkg = require(join(rootDir, 'package.json')) as { version: string };
const templateDir = './src/templates/';
const fileNames = ['content', 'routes', 'menus', 'examples', 'examples_index'] as const;
const templateCache: Record<(typeof fileNames)[number], string> = fileNames.reduce(
  (pre, cur) => {
    pre[cur] = readFileSync(join(rootDir, templateDir, `${cur}.ts`), { encoding: 'utf-8' });
    return pre;
  },
  {} as Record<(typeof fileNames)[number], string>
);
const defaultLang = CONFIG.defaultLang;
const routerPaths: string[] = ['/'];

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
    const distPath = join(CONFIG.dist, doc.name);
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
    const dataItem: ModuleResDoc = {
      name,
      langs,
      content
    };
    saveToFile(join(distPath, name, 'index.ts'), templateCache.content, {
      componentName: genComponentName(id),
      selector: id,
      ngContent,
      imports: imports.join('\n'),
      standaloneImports: `,${standaloneImports.join(', ')}`,
      item: JSON.stringify(dataItem),
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
        saveToFile(join(CONFIG.dist, 'examples', `${example.name}.ts`), example.code);
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
          join(CONFIG.dist, 'examples', `${example.name}_index.ts`),
          templateCache.examples_index,
          exampleCallData
        );
      }
    }
  }
}

function generateMenus(doc: ModuleDoc[]): void {
  const data: ModuleMenu[] = [];
  const genMenu = (item: ModuleDoc, lang: string): ModuleMenuGroup[] => {
    const res = item.groups.map(g => {
      const zhGroupName = g['zh-CN'];
      const enGroupName = g['en-US'];
      const items = item.docs
        .filter(w => {
          const meta = getOrFirst(w.content, lang, defaultLang)?.meta;
          return meta?.group === zhGroupName || meta?.group === enGroupName;
        })
        .sort((a, b) => {
          const metaA = getOrFirst(a.content, lang, defaultLang)?.meta;
          const metaB = getOrFirst(b.content, lang, defaultLang)?.meta;
          return (metaA?.order ?? 0) - (metaB?.order ?? 0);
        })
        .map(v => {
          const meta = getOrFirst(v.content, lang, defaultLang)!.meta;
          return {
            title: meta.title,
            subtitle: meta.subtitle,
            tag: meta.tag?.replace('{{version}}', pkg.version) ?? '',
            deprecated: meta.deprecated,
            redirect: meta.redirect,
            lib: meta.lib,
            url: meta.url
          } as ModuleMenuGroupItem;
        });
      return { name: g[lang], items };
    });
    return res;
  };
  for (const item of doc) {
    data.push({
      name: item.name,
      github: item.github,
      menu: { zh: genMenu(item, 'zh-CN'), en: genMenu(item, 'en-US') }
    });
  }
  saveToFile(join(CONFIG.dist, 'menus.ts'), templateCache.menus, {
    data: JSON.stringify(data)
  });
}

function generateRouters(doc: ModuleDoc): void {
  const { docs } = doc;
  const imports: string[] = [];
  const routes: string[] = [];
  for (const item of docs) {
    const componentName = genComponentName(item.id);
    imports.push(`import { ${componentName} } from './${item.name}';`);

    const path_name = handleExploreStr(item.name, '-');
    routes.push(`{ path: '${path_name}', redirectTo: '${path_name}/zh', pathMatch: 'full' }`);
    routes.push(`{ path: '${path_name}/:lang', component: ${componentName} }`);

    routerPaths.push(`/${doc.name.toLowerCase()}/${path_name}/en`);
    routerPaths.push(`/${doc.name.toLowerCase()}/${path_name}/zh`);
  }
  saveToFile(join(CONFIG.dist, doc.name, 'routes.ts'), templateCache.routes, {
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
  saveToFile(join(CONFIG.dist, 'examples', `index.ts`), templateCache.examples, {
    imports: imports.join('\n'),
    metadata: metadata.join(',\n')
  });
}

async function main(): Promise<void> {
  const docs = ast(target);
  for (const item of docs) {
    generateComponent(item);
    // 生成 router
    generateRouters(item);
  }

  // 生成 menus
  generateMenus(docs);
  // 生成 Example index.ts
  generateExamplesIndex(docs);
  // 生成 route-paths.txt
  saveToFile(join(__dirname, `route-paths.txt`), Array.from(new Set(routerPaths)).sort().join('\n'));
  // 生成 LLMs 数据
  await generateLLMs(docs);

  const docLength = docs.reduce((pre, cur) => pre + cur.docs.filter(w => w.type === 'doc').length, 0);
  const componentLength = docs.reduce((pre, cur) => pre + cur.docs.filter(w => w.type === 'component').length, 0);
  console.log(`✅ Site generated doc ${docLength}, component ${componentLength} successfully`);
}

main();
