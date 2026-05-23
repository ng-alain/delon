import { join, resolve } from 'path';

import { saveToFile } from './ast/util';
import { ModuleDoc } from './types';

const rootDir = resolve(__dirname, '../../');

interface DocItem {
  title: string;
  url: string;
  mdUrl: string; // URL for individual .md file
  type: 'doc' | 'component';
  componentName?: string; // For components, the component folder name
  content?: string;
}

interface ProcessResult {
  docs: DocItem[];
  components: DocItem[];
}

const ignoreDocs = ['changelog'];

function processDocs(docs: ModuleDoc[], lang: 'en' | 'zh'): ProcessResult {
  const result: ProcessResult = {
    docs: [],
    components: []
  };

  const matchSuffix = lang === 'en' ? '.en-US.md' : '.zh-CN.md';
  const langSuffix = lang === 'en' ? 'en' : 'cn';
  console.log(`Processing ${matchSuffix}, ${langSuffix}...`);
  for (const doc of docs) {
    for (const docItem of doc.docs) {
      if (ignoreDocs.includes(docItem.id)) {
        continue;
      }
      // const content = docItem.content[lang === 'en' ? 'en-US' : 'zh-CN']?.__content || '';
    }
  }

  return result;
}

export function generateLLMs(docs: ModuleDoc[]): void {
  const englishResult = processDocs(docs, 'en');
  const chineseResult = processDocs(docs, 'zh');
  console.log('English Docs:', englishResult);
  console.log('Chinese Docs:', chineseResult);

  // 5. Generate llms.txt
  const llmsNavContent = [
    '# NG-ALAIN',
    '',
    '- Out-of-box UI solution for enterprise applications, Let developers focus on business.',
    '',
    '## Navigation',
    '',
    '- [Full Documentation (EN)](./llms-full.txt)',
    '- [Full Documentation (CN)](./llms-full-cn.txt)'
    // '- [Semantic Documentation (EN)](./llms-semantic.md)',
    // '- [Semantic Documentation (CN)](./llms-semantic-cn.md)',
    // ''
    // '## Docs (EN)',
    // '',
    // // - [Animations Switch](https://ng.ant.design/docs/animations/en) | [.md](https://ng.ant.design/docs/animations.en.md)
    // ...englishResult.docs.map(({ title, url, mdUrl }) => `- [${title}](${url}) | [.md](${mdUrl})`),
    // '',
    // '## Docs (CN)',
    // '',
    // ...chineseResult.docs.map(({ title, url, mdUrl }) => `- [${title}](${url}) | [.md](${mdUrl})`),
    // '',
    // '## Component Docs (EN)',
    // '',
    // ...components.map(({ title, url }) => `- [${title}](${url})`),
    // '',
    // '## Component Docs (CN)',
    // '',
    // ...componentsCn.map(({ title, url }) => `- [${title}](${url})`),
    // '',
    // '## Semantic (EN)',
    // '',
    // ...semantics.map(({ title, url }) => `- [${title}](${url})`),
    // '',
    // '## Semantic (CN)',
    // '',
    // ...semanticsCn.map(({ title, url }) => `- [${title}](${url})`),
    // ''
  ].join('\n');

  const siteDir = join(rootDir, 'src');
  // saveToFile(join(siteDir, 'llms-semantic.md'), semanticContent);
  // saveToFile(join(siteDir, 'llms-semantic-cn.md'), semanticContentCn);
  // saveToFile(join(siteDir, 'llms-full.txt'), fullContent);
  // saveToFile(join(siteDir, 'llms-full-cn.txt'), fullContentCn);
  saveToFile(join(siteDir, 'llms.txt'), llmsNavContent);
}
