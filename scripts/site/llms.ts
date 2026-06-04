import { ensureDir, writeFile } from 'fs-extra';
import { dirname, join, resolve } from 'path';

import { ModuleDoc, ModuleDocDemoItem } from './types';

const rootDir = resolve(__dirname, '../../');

interface DocItem {
  title: string;
  urlPathName: string;
  mdUrlPathName: string;
  type: 'doc' | 'component';
  componentName?: string;
  content?: string;
  filePath?: string;
  demos?: ModuleDocDemoItem[];
}

interface ProcessResult {
  docs: DocItem[];
  components: DocItem[];
}

const ignoreDocs = ['changelog', 'upgrade'];

function processDocs(docs: ModuleDoc[], lang: 'en' | 'zh'): ProcessResult {
  const result: ProcessResult = {
    docs: [],
    components: []
  };

  const contentKey = lang === 'en' ? 'en-US' : 'zh-CN';
  for (const doc of docs) {
    for (const docItem of doc.docs) {
      if (ignoreDocs.includes(docItem.name)) {
        continue;
      }
      const content = docItem.content[contentKey];
      if (content == null || content.meta.redirect) continue;

      const item: DocItem = {
        title: content.meta.title,
        urlPathName: `${content.meta.url}`,
        mdUrlPathName: `${content.meta.url?.replace('/en', '.en').replace('/zh', '.zh')}.md`,
        type: docItem.type === 'component' ? 'component' : 'doc',
        content: content.raw,
        filePath: content.meta.path
      };

      if (docItem.type === 'component') {
        result.components.push({
          ...item,
          demos: docItem.demos,
          componentName: docItem.name
        });
      } else {
        result.docs.push({
          ...item
        });
      }
    }
  }

  return result;
}

async function generateIndividualFiles(result: ProcessResult, lang: 'en' | 'cn'): Promise<void> {
  const allItems = [...result.docs, ...result.components];
  const contentKey = lang === 'en' ? 'en-US' : 'zh-CN';
  for (const item of allItems) {
    const demoSection: string[] = [];
    if (item.demos && item.demos.length > 0) {
      demoSection.push('', '---', '', `## ${lang === 'en' ? 'Examples' : '代码示例'}`, '');
      for (const demo of item.demos) {
        demoSection.push(`### ${demo.title[contentKey]}`, '');
        const summary = demo.summary_raw?.[contentKey]?.trim() ?? '';
        if (typeof summary === 'string' && summary.trim() !== '') {
          demoSection.push(summary, '');
        }
        demoSection.push('```typescript', demo.code.trim(), '```', '');
      }
    }
    const content = [item.content, demoSection.join('\n')].filter(Boolean).join('\n');
    const outputPath = join(rootDir, 'src', 'llms', item.mdUrlPathName);
    await ensureDir(dirname(outputPath));
    await writeFile(outputPath, `\ufeff${content}`, 'utf-8');
  }
}

function generateNavigationContent(englishResult: ProcessResult, chineseResult: ProcessResult): string {
  const prefix = 'https://ng-alain.com';
  return [
    '# @delon/* Component Documentation',
    '',
    '- Out-of-box UI solution for enterprise applications, Let developers focus on business.',
    '',
    '## Navigation',
    '',
    '- [Full Documentation (EN)](./llms-full.txt)',
    '- [Full Documentation (CN)](./llms-full-cn.txt)',
    '',
    '## Docs (EN)',
    '',
    ...englishResult.docs.map(
      ({ title, urlPathName, mdUrlPathName }) =>
        `- [${title}](${prefix}${urlPathName}) | [.md](${prefix}/llms${mdUrlPathName})`
    ),
    '',
    '## Docs (CN)',
    '',
    ...chineseResult.docs.map(
      ({ title, urlPathName, mdUrlPathName }) =>
        `- [${title}](${prefix}${urlPathName}) | [.md](${prefix}/llms${mdUrlPathName})`
    ),
    '',
    '## Components (EN)',
    '',
    ...englishResult.components.map(
      ({ title, urlPathName, mdUrlPathName }) =>
        `- [${title}](${prefix}${urlPathName}) | [.md](${prefix}/llms${mdUrlPathName})`
    ),
    '',
    '## Components (CN)',
    '',
    ...chineseResult.components.map(
      ({ title, urlPathName, mdUrlPathName }) =>
        `- [${title}](${prefix}${urlPathName}) | [.md](${prefix}/llms${mdUrlPathName})`
    ),
    ''
  ].join('\n');
}

function generateFullContent(result: ProcessResult, lang: 'en' | 'cn'): string {
  const langLabel = lang === 'en' ? 'English' : '中文';

  const docsContent = result.docs.map(doc => [doc.content, '', '---', ''].join('\n')).join('\n');

  const componentsContent = result.components
    .map(component => [component.content, '', '---', ''].join('\n'))
    .join('\n');

  return [
    `# @delon/* Component Documentation (${langLabel})`,
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

export async function generateLLMs(docs: ModuleDoc[]): Promise<void> {
  const englishResult = processDocs(docs, 'en');
  const chineseResult = processDocs(docs, 'zh');

  // Sort by title
  englishResult.docs.sort((a, b) => a.title.localeCompare(b.title));
  englishResult.components.sort((a, b) => a.title.localeCompare(b.title));
  chineseResult.docs.sort((a, b) => a.title.localeCompare(b.title));
  chineseResult.components.sort((a, b) => a.title.localeCompare(b.title));

  // Generate individual .md files for each component/doc
  await generateIndividualFiles(englishResult, 'en');
  await generateIndividualFiles(chineseResult, 'cn');

  // Generate llms.txt (navigation)
  const llmsNavContent = generateNavigationContent(englishResult, chineseResult);

  // Generate llms-full.txt (English content)
  const englishFullContent = generateFullContent(englishResult, 'en');
  // Generate llms-full-cn.txt (Chinese content)
  const chineseFullContent = generateFullContent(chineseResult, 'cn');

  const siteDir = join(rootDir, 'src');

  // Add BOM to all files to help browser recognize UTF-8 encoding regardless of Content-Type header
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
