import * as fs from 'fs';
import * as path from 'path';

export interface LangConfig {
  langs: string[];
  zorro: string;
  delon: string;
  fileName?: string;
}

export const LANGS_CONFIG: LangConfig[] = [
  {
    langs: ['zh-Hans', 'zh-cn', 'zh-Hans-CN', 'zh'],
    zorro: 'zh_CN',
    delon: 'zh_CN',
    fileName: 'zh-CN.json'
  },
  {
    langs: ['zh-Hant', 'zh-tw', 'zh-Hant-TW'],
    zorro: 'zh_TW',
    delon: 'zh_TW',
    fileName: 'zh-TW.json'
  },
  { langs: ['en'], zorro: 'en_US', delon: 'en_US', fileName: 'en-US.json' },
  { langs: ['tr'], zorro: 'tr_TR', delon: 'tr_TR', fileName: 'tr-TR.json' },
  { langs: ['pl'], zorro: 'pl_PL', delon: 'pl_PL', fileName: 'pl-PL.json' },
  { langs: ['el'], zorro: 'el_GR', delon: 'el_GR', fileName: 'el-GR.json' },
  { langs: ['ko'], zorro: 'ko_KR', delon: 'ko_KR', fileName: 'ko-KR.json' },
  { langs: ['hr'], zorro: 'hr_HR', delon: 'hr_HR', fileName: 'hr-HR.json' },
  { langs: ['ja'], zorro: 'ja_JP', delon: 'ja_JP' },
  { langs: ['sl'], zorro: 'sl_SI', delon: 'sl_SI', fileName: 'sl-SI.json' },
  { langs: ['fr'], zorro: 'fr_FR', delon: 'fr_FR', fileName: 'fr-FR.json' },
  { langs: ['es'], zorro: 'es_ES', delon: 'es_ES', fileName: 'es-ES.json' },
  { langs: ['it'], zorro: 'it_IT', delon: 'it_IT', fileName: 'it-IT.json' }
];

export function getLangConfig(lang: string): LangConfig {
  return LANGS_CONFIG.find(w => w.langs.includes(lang));
}

export function getLangData(lang: string): Record<string, unknown> | null {
  let langCog = getLangConfig(lang);
  if (!langCog || !langCog.fileName) {
    langCog = getLangConfig('zh');
  }

  const langFilePath = path.join(__dirname, `../application/files/i18n/${langCog.fileName}`);
  if (!fs.existsSync(langFilePath)) {
    console.log(`No found language files`);
    return null;
  }

  return JSON.parse(fs.readFileSync(langFilePath).toString('utf8')) || null;
}
