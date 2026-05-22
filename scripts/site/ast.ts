import { existsSync, readdirSync, readFileSync } from 'fs';
import type { Heading, Link, Literal, Parent } from 'mdast';
import { dirname, join, relative, resolve, sep } from 'path';
import { remark } from 'remark';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGFM from 'remark-gfm';
import remarkHtml from 'remark-html';
import { visit } from 'unist-util-visit';
import { parse as yamlParse } from 'yaml';

import type { ModuleConfig, ModuleDirConfig, SiteConfig } from './interfaces';
import type {
  ModuleDoc,
  ModuleDocContent,
  ModuleDocDemoItem,
  ModuleDocItem,
  ModuleDocMeta,
  ModuleDocToc
} from './types';
import { genComponentName, handleExploreStr } from './utils/utils';

const rootDir = resolve(__dirname, '../../');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const siteConfig = require(join(rootDir, 'src/site.config.js')) as SiteConfig;
const defaultLang = siteConfig.defaultLang;
const processedExampleNames: string[] = [];

function getDemos(config: ModuleConfig, dir: string, docItem: ModuleDocItem): ModuleDocDemoItem[] {
  const fullDir = `${dir}/demo`;
  const res: ModuleDocDemoItem[] = [];
  if (!existsSync(fullDir)) return res;
  const files = readdirSync(fullDir).filter(w => w.endsWith('.md'));
  for (const name of files) {
    const item = {} as unknown as ModuleDocDemoItem;
    item.name = name.replace('.md', '');
    if (processedExampleNames.includes(item.name)) {
      continue;
    }
    processedExampleNames.push(item.name);
    item.id = [config.name, docItem.name, item.name].join('-');
    const fullPath = join(fullDir, name);
    const content = readFileSync(fullPath, { encoding: 'utf-8' });
    const data = extractDemoParts(content);
    if (typeof data.yaml === 'string' && data.yaml.length > 0) {
      const res = yamlParse(data.yaml);
      item.title = typeof res.title === 'object' ? res.title : { [defaultLang]: res.title };
      item.order = res.order ?? 0;
      item.type = res.type ?? 'demo';
      Object.keys(item.title).forEach(lang => {
        item.title[lang] = String(item.title[lang]).trim();
      });
    }
    if (typeof data.summary === 'object') {
      item.summary = data.summary;
    }
    item.code = data.code ?? '';
    // 修正 selector & component name
    item.code = item.code
      .replace(/selector:[ ]?(['|"|`])([^'"`]+)/g, `selector: $1${item.id}`)
      .replace(/export class ([^ {]+)/g, `export class ${genComponentName(item.id)}`);
    res.push(item);
  }
  return res.sort((a, b) => a.order - b.order);
}

/**
 * 提取 markdown 中的 YAML front matter、summary、首个代码块 code
 * - yaml: 仅识别文档开头的 --- ... ---
 * - code: 提取第一个 fenced code block（```...```）
 * - summary:
 *   - 若存在 `## 标题`，按每个 `##` 分段，返回 { 标题: 内容 }
 *   - 若不存在 `##`，返回 { "defaultLang": 全部内容 }
 */
function extractDemoParts(markdown: string): {
  yaml: string;
  summary: Record<string, string>;
  code: string;
} {
  const content = markdown.replace(/\r\n/g, '\n');

  let yaml = '';
  let body = content;

  // 1) 提取开头 YAML front matter
  const yamlMatch = body.match(/^---\n([\s\S]*?)\n---\n?/);
  if (yamlMatch) {
    yaml = yamlMatch[1].trim();
    body = body.slice(yamlMatch[0].length);
  }

  // 2) 提取第一个代码块，并从正文中移除
  let code = '';
  const codeBlockRegex = /(^|\n)```[^\n]*\n([\s\S]*?)\n```(?=\n|$)/m;
  const codeMatch = body.match(codeBlockRegex);

  if (codeMatch) {
    code = codeMatch[2].trim();
    const fullBlock = codeMatch[0].startsWith('\n') ? codeMatch[0].slice(1) : codeMatch[0];
    const idx = body.indexOf(fullBlock);
    if (idx >= 0) {
      body = (body.slice(0, idx) + body.slice(idx + fullBlock.length)).trim();
    } else {
      body = body.trim();
    }
  } else {
    body = body.trim();
  }

  // 3) 按 `##` 分段提取 summary
  const summary: Record<string, string> = {};
  const headingRegex = /^##\s+(.+?)\s*$/gm;
  const headings: Array<{ key: string; start: number; lineEnd: number }> = [];

  let m: RegExpExecArray | null;
  while ((m = headingRegex.exec(body)) !== null) {
    const headingStart = m.index;
    const lineEnd = headingRegex.lastIndex; // 到标题行末尾（不含换行）
    headings.push({
      key: m[1].trim(),
      start: headingStart,
      lineEnd
    });
  }

  if (headings.length === 0) {
    summary[defaultLang] = remark().use(remarkHtml).processSync(body.trim()).toString();
  } else {
    for (let i = 0; i < headings.length; i++) {
      const cur = headings[i];
      const next = headings[i + 1];

      let sectionStart = cur.lineEnd;
      if (body[sectionStart] === '\n') sectionStart += 1; // 跳过标题行后的首个换行
      const sectionEnd = next ? next.start : body.length;

      const sectionText = body.slice(sectionStart, sectionEnd).trim();
      if (cur.key in summary) {
        summary[cur.key] = remark()
          .use(remarkHtml)
          .processSync(summary[cur.key] ? `${summary[cur.key]}\n\n${sectionText}` : sectionText)
          .toString();
      } else {
        summary[cur.key] = remark().use(remarkHtml).processSync(sectionText).toString();
      }
    }
  }

  return { yaml, summary, code };
}

function headingToDocToc(headings: Array<Heading & { value: string }>): ModuleDocToc[] {
  const toc: ModuleDocToc[] = [];
  let lastDepth2: ModuleDocToc | undefined;

  for (const heading of headings.filter(w => w.children && w.children.length > 0)) {
    const firstChild = heading.children[0] as Literal;
    const title = firstChild?.value ?? ((firstChild as unknown as Link)?.children?.[0] as Literal)?.value;
    if (title == null || title.length === 0) continue;

    if (heading.depth === 2) {
      lastDepth2 = { title };
      toc.push(lastDepth2);
      continue;
    }

    if (heading.depth === 3 && lastDepth2) {
      lastDepth2.children = lastDepth2.children ?? [];
      lastDepth2.children.push({ title });
    }
  }

  return toc;
}

function yamlToMeta(content: string): ModuleDocMeta {
  let res = yamlParse(content) as any;
  if (res == null) res = {};
  if (typeof res.type === 'string' && res.type.length > 0) {
    res.group = res.type;
    delete res.type;
  }
  if (typeof res.order !== 'number' || isNaN(res.order)) {
    res.order = 100;
  }
  return res as ModuleDocMeta;
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

function remarkExample() {
  return (tree: Parent) => {
    visit(tree, 'definition', (node, index, parent) => {
      // [comment]: <demo(cookie)>
      if (node.identifier !== 'comment') {
        return;
      }

      const match = node.url.match(/^demo\((.+?)\)$/);
      if (!match) {
        return;
      }

      const name = match[1];
      parent!.children[index!] = {
        type: 'html',

        value: `<example-${name}-index />`
      };
    });
  };
}

function generateModule(target: string, config: ModuleConfig): ModuleDoc {
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
      docItem.demos = getDemos(config, item.basePath, docItem);
      for (const lang of docItem.langs) {
        const contentItem = {} as unknown as ModuleDocContent;
        docItem.content[lang] = contentItem;
        const filePath = item.data[lang];
        const mdContent = readFileSync(filePath, { encoding: 'utf-8' });
        const md = remark()
          .use(remarkFrontmatter, ['yaml'])
          .use(remarkGFM)
          .use(remarkHtml, { sanitize: false })
          .use(remarkExample)
          .use(() => {
            return (tree: Parent) => {
              // meta
              const yaml = (tree.children.find(w => w.type === 'yaml') as Literal)?.value;
              contentItem.meta = yamlToMeta(typeof yaml === 'string' && yaml.length > 0 ? yaml : '');
              // toc
              const headings = tree.children.filter(
                (w): w is Heading => w.type === 'heading' && (w.depth === 2 || w.depth === 3)
              );
              contentItem.toc = headingToDocToc(headings as Array<Heading & { value: string }>);
            };
          })
          .processSync(mdContent);

        contentItem.text = String(md);
        if (typeof contentItem.meta.title === 'object') {
          contentItem.meta.title = contentItem.meta.title[lang];
        }
        contentItem.meta.title = String(contentItem.meta.title).trim() ?? '';
      }
      ret.docs.push(docItem);
    }
  }
  return ret;
}

export function ast(target: string): ModuleDoc[] {
  const ret: ModuleDoc[] = [];
  for (const m of siteConfig.modules) {
    const item = generateModule(target, m);
    if (item == null) continue;

    ret.push(item);
  }
  return ret;
}
