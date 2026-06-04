import { existsSync, readdirSync, readFileSync } from 'fs';
import { dirname, join, relative, sep } from 'path';

import type { ModuleConfig, ModuleDirConfig, ModuleDoc, ModuleDocDemoItem, ModuleDocItem } from '../types';
import { parseDemo, parseDoc } from './pase';
import { genComponentName, getOrFirst, handleExploreStr } from './util';
import { CONFIG } from '../config';

const defaultLang = CONFIG.defaultLang;
const processedExampleNames: string[] = [];

function generateDemo(config: ModuleConfig, dir: string, docItem: ModuleDocItem): ModuleDocDemoItem[] {
  const fullDir = `${dir}/demo`;
  const res: ModuleDocDemoItem[] = [];
  if (!existsSync(fullDir)) return res;
  const files = readdirSync(fullDir).filter(w => w.endsWith('.md'));
  for (const fileName of files) {
    const name = fileName.replace('.md', '');
    const fullPath = join(fullDir, fileName);
    const content = readFileSync(fullPath, { encoding: 'utf-8' });
    const meta = parseDemo(content, defaultLang);
    if (meta.type === 'example' && processedExampleNames.includes(name)) {
      // console.warn(`demo name ${name} has been processed, please check it in ${fullDir}`);
      continue;
    }
    processedExampleNames.push(name);
    const id = [config.name, docItem.name, name].join('-');
    // 修正 selector & component name
    meta.code = meta.code
      .replace(/selector:[ ]?(['|"|`])([^'"`]+)/g, `selector: $1${id}`)
      .replace(/export class ([^ {]+)/g, `export class ${genComponentName(id)}`);

    res.push({
      id,
      name,
      ...meta,
      path: fullPath
    });
  }
  return res.sort((a, b) => a.order - b.order);
}

function getFiles(
  target: string,
  dirCfg: ModuleDirConfig
): Array<{ key: string; basePath: string; data: Record<string, string> }> {
  const ret: Array<{ key: string; basePath: string; data: Record<string, string> }> = [];
  const langRe = new RegExp(`.(${CONFIG.langs.join('|')}){1}`, 'i');
  for (const dir of dirCfg.src) {
    const files = readdirSync(dir, {
      recursive: true,
      withFileTypes: true
    }).filter(w => w.name.endsWith('.md'));

    for (const entry of files) {
      const fullPath = join((entry as { parentPath?: string }).parentPath ?? dir, entry.name);
      if (target !== 'init' && !fullPath.includes(target)) continue;
      // 过滤所有 demo
      if (fullPath.includes(`${sep}demo${sep}`)) continue;

      const key = dirCfg.reName
        ? dirCfg.reName
        : relative(dir, dirCfg.hasSubDir ? dirname(fullPath) : fullPath.split('.')[0])
            .split('/')
            .join('-')
            .trim();
      if (key.length <= 0) continue;
      if (dirCfg.ignores && ~dirCfg.ignores.indexOf(key)) continue;

      let item = ret.find(w => w.key === key);
      if (!item) {
        item = {
          key,
          basePath: dirname(fullPath),
          data: {}
        };
        ret.push(item);
      }
      const langMatch = fullPath.match(langRe);
      item.data[langMatch ? langMatch[1] : defaultLang] = fullPath;
    }
  }
  return ret;
}

function generatePackage(target: string, config: ModuleConfig): ModuleDoc {
  const ret: ModuleDoc = {
    name: config.name,
    github: CONFIG.github,
    defaultRoute: config.defaultRoute,
    groups: config.groups ?? [],
    docs: [...(config.extraDocs ?? [])]
  };
  for (const dirConfig of config.dir) {
    const files = getFiles(target, dirConfig);

    for (const item of files) {
      const name = handleExploreStr(item.key, '-');
      const langs = Object.keys(item.data);
      const firstPath = getOrFirst(item.data, 'zh-CN', defaultLang) ?? '';
      const docItem: ModuleDocItem = {
        id: [config.name, name].join('-'),
        type:
          firstPath.endsWith('/index.en-US.md') ||
          firstPath.endsWith('/index.zh-CN.md') ||
          firstPath.endsWith('/index.md')
            ? 'component'
            : 'doc',
        name,
        langs,
        content: {},
        demos: []
      };
      docItem.demos = generateDemo(config, item.basePath, docItem);
      for (const lang of langs) {
        const path = item.data[lang];
        const mdContent = readFileSync(path, { encoding: 'utf-8' }).trim();
        const content = (docItem.content[lang] = parseDoc(lang, mdContent));
        if (typeof content.meta.lib !== 'boolean') delete content.meta.lib;
        content.raw = mdContent;
        content.meta.path = path;
        content.meta.url = `/${config.name.toLowerCase()}/${name}/${lang === 'zh-CN' ? 'zh' : 'en'}`;
      }
      ret.docs.push(docItem);
    }
  }
  return ret;
}

export function ast(target: string): ModuleDoc[] {
  const ret: ModuleDoc[] = [];
  for (const m of CONFIG.modules) {
    const item = generatePackage(target, m);
    if (item == null) continue;

    ret.push(item);
  }
  return ret;
}
