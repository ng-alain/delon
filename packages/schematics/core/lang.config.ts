import * as fs from 'fs';
import * as path from 'path';

export const LANGS_CONFIG = [
  {
    langs: ['zh-Hans', 'zh-cn', 'zh-Hans-CN', 'zh'],
    zorro: 'zh_CN',
    delon: 'zh_CN',
    fileName: 'zh-CN.json',
  },
  {
    langs: ['zh-Hant', 'zh-tw', 'zh-Hant-TW'],
    zorro: 'zh_TW',
    delon: 'zh_TW',
    fileName: 'zh-TW.json',
  },
  { langs: ['en'], zorro: 'en_US', delon: 'en_US', fileName: 'en-US.json' },
  { langs: ['tr'], zorro: 'tr_TR', delon: 'tr_TR', fileName: 'tr-TR.json' },
  { langs: ['pl'], zorro: 'pl_PL', delon: 'pl_PL', fileName: 'pl-PL.json' },
  { langs: ['el'], zorro: 'el_GR', delon: 'el_GR', fileName: 'el-GR.json' },
];

export function getLangConfig(lang: string): any {
  return LANGS_CONFIG.find(w => w.langs.includes(lang));
}

export function getLangData(lang: string) {
  let langCog = getLangConfig(lang);
  if (!langCog || !langCog.fileName) {
    langCog = getLangConfig('zh');
  }

  console.log(`Currently using translation files: ${langCog.fileName}`);

  const langFilePath = path.join(__dirname, `../application/files/i18n/${langCog.fileName}`);
  if (!fs.existsSync(langFilePath)) {
    console.log(`No found language files`);
    return null;
  }

  return JSON.parse(fs.readFileSync(langFilePath).toString('utf8')) || null;
}
