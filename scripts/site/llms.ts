import { ensureDir, pathExists, readFileSync, readdirSync, writeFile } from 'fs-extra';
import { dirname, join, relative, resolve } from 'path';

import { ModuleDirConfig, SiteConfig } from './interfaces';

interface DocItem {
  title: string;
  url: string;
  mdUrl: string;
  category: 'docs' | 'components';
  moduleName: string;
  componentName?: string;
  content: string;
  sourceDir: string;
  meta: string;
}

interface ProcessResult {
  docs: DocItem[];
  components: DocItem[];
}

interface GroupedDoc {
  key: string;
  data: Record<string, string>;
}

const BASE_URL = 'https://ng-alain.com';
const OUTPUT_DIR = 'site';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const klawSync = require('klaw-sync');

/**
 * @see https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/scripts/generate-llms.ts
 */
export async function generateLLms(): Promise<void> {
  const cwd = process.cwd();
  const siteDir = resolve(cwd, OUTPUT_DIR);
  const siteConfig = loadSiteConfig(cwd);
  const ignoreDocs = new Set(['changelog', 'join', 'migration', 'recommendation']);

  await ensureDir(siteDir);

  const englishResult = await processDocs(siteConfig, ignoreDocs, cwd, 'en');
  const chineseResult = await processDocs(siteConfig, ignoreDocs, cwd, 'cn');

  englishResult.docs.sort((a, b) => a.title.localeCompare(b.title));
  englishResult.components.sort((a, b) => a.title.localeCompare(b.title));
  chineseResult.docs.sort((a, b) => a.title.localeCompare(b.title));
  chineseResult.components.sort((a, b) => a.title.localeCompare(b.title));

  await generateIndividualFiles(englishResult, siteDir, 'en');
  await generateIndividualFiles(chineseResult, siteDir, 'cn');

  const llmsNavContent = generateNavigationContent(englishResult, chineseResult);
  const englishFullContent = generateFullContent(englishResult, 'en');
  const chineseFullContent = generateFullContent(chineseResult, 'cn');

  // eslint-disable-next-line prefer-template
  await writeFile(join(siteDir, 'llms.txt'), '\ufeff' + llmsNavContent, 'utf-8');
  // eslint-disable-next-line prefer-template
  await writeFile(join(siteDir, 'llms-full.txt'), '\ufeff' + englishFullContent, 'utf-8');
  // eslint-disable-next-line prefer-template
  await writeFile(join(siteDir, 'llms-full-cn.txt'), '\ufeff' + chineseFullContent, 'utf-8');

  console.log(
    `Generated llms.txt, llms-full.txt (${englishResult.components.length} components), llms-full-cn.txt (${chineseResult.components.length} components)`
  );
}

function loadSiteConfig(cwd: string): SiteConfig {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require(join(cwd, 'src/site.config.js')) as SiteConfig;
}

async function processDocs(
  siteConfig: SiteConfig,
  ignoreDocs: Set<string>,
  cwd: string,
  lang: 'en' | 'cn'
): Promise<ProcessResult> {
  const result: ProcessResult = {
    docs: [],
    components: []
  };
  const langTag = lang === 'en' ? 'en-US' : 'zh-CN';
  const langSuffix = lang === 'en' ? 'en' : 'zh';

  for (const moduleConfig of siteConfig.modules) {
    for (const dirConfig of moduleConfig.dir) {
      const srcDocs = await collectGroupedDocs(cwd, dirConfig, siteConfig.defaultLang);

      for (const doc of srcDocs) {
        if (moduleConfig.name === 'docs' && ignoreDocs.has(doc.key)) {
          continue;
        }

        const source = doc.data[langTag];
        if (!source) {
          continue;
        }

        const fsContent = readFileSync(source, 'utf-8').trim();
        const meta = extractFrontmatter(fsContent);
        const title = getDocTitle(meta, lang);
        if (!title) {
          continue;
        }

        const normalizedKey = normalizeKey(doc.key);
        const url = `${BASE_URL}/${moduleConfig.name}/${normalizedKey}/${langSuffix}`;
        const mdPath = `${moduleConfig.name}/${normalizedKey}.${langSuffix}.md`;
        const mdUrl = `${BASE_URL}/${mdPath}`;
        const isDocsModule = moduleConfig.name === 'docs';

        const item: DocItem = {
          title,
          url,
          mdUrl,
          category: isDocsModule ? 'docs' : 'components',
          moduleName: moduleConfig.name,
          componentName: isDocsModule ? undefined : normalizedKey,
          content: fsContent,
          sourceDir: dirname(source),
          meta
        };

        if (item.category === 'docs') {
          result.docs.push(item);
        } else {
          result.components.push(item);
        }
      }
    }
  }

  return result;
}

async function collectGroupedDocs(cwd: string, dirConfig: ModuleDirConfig, defaultLang: string): Promise<GroupedDoc[]> {
  const grouped = new Map<string, GroupedDoc>();
  const ignores = new Set(dirConfig.ignores ?? []);

  for (const src of dirConfig.src) {
    const absSrc = resolve(cwd, src);
    if (!(await pathExists(absSrc))) {
      continue;
    }

    const files: string[] = klawSync(absSrc, {
      nodir: true,
      filter: (item: { path: string }) => item.path.endsWith('.md') && !item.path.includes('/demo/')
    }).map((item: { path: string }) => item.path);

    for (const file of files) {
      const key = getDocKey(absSrc, file, dirConfig);
      if (!key || ignores.has(key)) {
        continue;
      }

      const langKey = getLangTagFromFile(file) ?? defaultLang;
      const existing = grouped.get(key) ?? { key, data: {} };
      existing.data[langKey] = file;
      grouped.set(key, existing);
    }
  }

  return Array.from(grouped.values());
}

function getDocKey(absSrc: string, file: string, dirConfig: ModuleDirConfig): string {
  if (dirConfig.reName) {
    return dirConfig.reName;
  }

  const basePath = dirConfig.hasSubDir ? dirname(file) : removeKnownLangSuffix(file);
  return normalizeKey(relative(absSrc, basePath));
}

function removeKnownLangSuffix(file: string): string {
  return file.replace(/\.(en-US|zh-CN)\.md$/, '').replace(/\.md$/, '');
}

function getLangTagFromFile(file: string): 'en-US' | 'zh-CN' | undefined {
  if (file.endsWith('.en-US.md')) {
    return 'en-US';
  }
  if (file.endsWith('.zh-CN.md')) {
    return 'zh-CN';
  }
  return undefined;
}

function normalizeKey(key: string): string {
  return key.replace(/\\/g, '/').replace(/\//g, '-').trim();
}

function extractFrontmatter(content: string): string {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return match ? match[1].trim() : '';
}

function getDocTitle(content: string, lang: 'en' | 'cn'): string | undefined {
  let title: string | undefined;
  if (lang === 'cn') {
    title = content.match(/subtitle:\s*(.*)/)?.[1]?.trim();
  }
  if (!title) {
    title = content.match(/title:\s*(.*)/)?.[1]?.trim();
  }

  if (!title) {
    return undefined;
  }

  if (/experimental:\s*true/.test(content)) {
    return lang === 'cn' ? `${title}（实验性）` : `${title} (Experimental)`;
  }

  return title;
}

function generateNavigationContent(englishResult: ProcessResult, chineseResult: ProcessResult): string {
  return [
    '# ng-alain Documentation',
    '',
    '- NG-ALAIN is an enterprise-class Angular front-end solution and component ecosystem for admin applications.',
    '',
    '## Navigation',
    '',
    '- [Full Documentation (EN)](./llms-full.txt)',
    '- [Full Documentation (CN)](./llms-full-cn.txt)',
    '',
    '## Docs (EN)',
    '',
    ...englishResult.docs.map(({ title, url, mdUrl }) => `- [${title}](${url}) | [.md](${mdUrl})`),
    '',
    '## Docs (CN)',
    '',
    ...chineseResult.docs.map(({ title, url, mdUrl }) => `- [${title}](${url}) | [.md](${mdUrl})`),
    '',
    '## Components (EN)',
    '',
    ...englishResult.components.map(({ title, url, mdUrl }) => `- [${title}](${url}) | [.md](${mdUrl})`),
    '',
    '## Components (CN)',
    '',
    ...chineseResult.components.map(({ title, url, mdUrl }) => `- [${title}](${url}) | [.md](${mdUrl})`),
    ''
  ].join('\n');
}

async function generateIndividualFiles(result: ProcessResult, siteDir: string, lang: 'en' | 'cn'): Promise<void> {
  const allItems = [...result.docs, ...result.components];

  for (const item of allItems) {
    const mdPath = item.mdUrl.replace(`${BASE_URL}/`, '');
    const demoSection = item.componentName ? getDemoCode(item.sourceDir, lang) : '';
    const content = [item.content, demoSection].filter(Boolean).join('\n');

    const outputPath = join(siteDir, mdPath);
    await ensureDir(dirname(outputPath));
    // eslint-disable-next-line prefer-template
    await writeFile(outputPath, '\ufeff' + content, 'utf-8');
  }
}

function getDemoCode(sourceDir: string, lang: 'en' | 'cn'): string {
  const demoDir = join(sourceDir, 'demo');
  const langKey = lang === 'en' ? 'en-US' : 'zh-CN';

  try {
    const demoFiles = readdirSync(demoDir)
      .filter(file => file.endsWith('.md'))
      .sort();
    const demoSections: string[] = [];

    for (const demoFile of demoFiles) {
      const demoPath = join(demoDir, demoFile);
      const mdContent = readFileSync(demoPath, 'utf-8');
      const demoTitle = extractDemoTitle(mdContent, langKey) ?? demoFile.replace(/\.md$/, '');
      const description = extractDemoDescription(mdContent, langKey);
      const codeBlocks = extractTypeScriptCodeBlocks(mdContent);

      const parts = [`### ${demoTitle}`, ''];
      if (description) {
        parts.push(description, '');
      }
      if (codeBlocks.length > 0) {
        for (const code of codeBlocks) {
          parts.push('```typescript', code, '```', '');
        }
      }

      demoSections.push(parts.join('\n').trimEnd());
    }

    if (demoSections.length > 0) {
      return ['', '---', '', `## ${lang === 'en' ? 'Examples' : '代码示例'}`, '', ...demoSections, ''].join('\n');
    }
  } catch {
    // Ignore missing demo directory or invalid demo files.
  }

  return '';
}

function extractDemoTitle(content: string, langKey: 'en-US' | 'zh-CN'): string | undefined {
  const titleRegex = new RegExp(`title:[\\s\\S]*?${langKey}:\\s*(.+?)(?:\\n|\\s*$)`, 'm');
  return content.match(titleRegex)?.[1]?.trim();
}

function extractDemoDescription(content: string, langKey: 'en-US' | 'zh-CN'): string {
  const langSectionRegex = new RegExp(`## ${langKey}\\s*\\n([\\s\\S]*?)(?=## |$)`, 'i');
  return content.match(langSectionRegex)?.[1]?.trim() ?? '';
}

function extractTypeScriptCodeBlocks(content: string): string[] {
  const regex = /```(?:ts|typescript)\n([\s\S]*?)```/gi;
  const blocks: string[] = [];

  let match = regex.exec(content);
  while (match) {
    blocks.push(match[1].trim());
    match = regex.exec(content);
  }

  return blocks;
}

function generateFullContent(result: ProcessResult, lang: 'en' | 'cn'): string {
  const langLabel = lang === 'en' ? 'English' : '中文';
  const docsContent = result.docs.map(doc => [doc.content, '', '---', ''].join('\n')).join('\n');
  const componentsContent = result.components
    .map(component => [component.content, '', '---', ''].join('\n'))
    .join('\n');

  return [
    `# ng-alain Component Documentation (${langLabel})`,
    '',
    lang === 'en'
      ? `This file contains aggregated content from all component docs. Total ${result.components.length} components.`
      : `本文件包含所有组件文档的聚合内容。总计 ${result.components.length} 个组件。`,
    '',
    '---',
    '',
    '# Documentation',
    '',
    docsContent,
    '# Components',
    '',
    componentsContent
  ].join('\n');
}

generateLLms().catch(e => {
  console.error(e);
  process.exit(1);
});
