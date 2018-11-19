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
];

export function getLangConfig(lang: string): any {
  return LANGS_CONFIG.find(w => w.langs.includes(lang));
}
