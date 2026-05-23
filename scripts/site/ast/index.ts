import { existsSync, readdirSync, readFileSync } from 'fs';
import { dirname, join, relative, resolve, sep } from 'path';

import type { ModuleConfig, ModuleDirConfig, SiteConfig, ModuleDoc, ModuleDocDemoItem, ModuleDocItem } from '../types';
import { parseDemo, parseDoc } from './pase';
import { genComponentName, handleExploreStr } from './util';

const rootDir = resolve(__dirname, '../../../');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const siteConfig = require(join(rootDir, 'src/site.config.js')) as SiteConfig;
const defaultLang = siteConfig.defaultLang;
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
  const langRe = new RegExp(`.(${siteConfig.langs.join('|')}){1}`, 'i');
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
      item.data[langMatch ? langMatch[1] : siteConfig.defaultLang] = fullPath;
    }
  }
  return ret;
}

function generatePackage(target: string, config: ModuleConfig): ModuleDoc {
  const ret: ModuleDoc = {
    name: config.name,
    github: config.github,
    defaultRoute: config.defaultRoute,
    groups: config.types ?? [],
    docs: []
  };
  for (const dirConfig of config.dir) {
    const files = getFiles(target, dirConfig);

    for (const item of files) {
      const name = handleExploreStr(item.key, '-');
      const docItem: ModuleDocItem = {
        id: [config.name, name].join('-'),
        name,
        langs: Object.keys(item.data),
        content: {},
        demos: []
      };
      docItem.demos = generateDemo(config, item.basePath, docItem);
      for (const lang of docItem.langs) {
        const path = item.data[lang];
        const mdContent = readFileSync(path, { encoding: 'utf-8' });
        const content = (docItem.content[lang] = parseDoc(lang, mdContent));
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
  for (const m of siteConfig.modules) {
    const item = generatePackage(target, m);
    if (item == null) continue;

    ret.push(item);
  }
  return ret;
}
