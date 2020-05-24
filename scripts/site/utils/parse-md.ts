import * as fse from 'fs-extra';
const MT = require('mark-twain');
import { SiteConfig } from '../interfaces';
import { toc } from '../plugins/toc';
import { generateMd } from './generate-md';

export function parseMd(file: string, siteConfig: SiteConfig) {
  let mt = null;
  try {
    mt = MT(fse.readFileSync(file, { encoding: 'utf-8' }));
  } catch (err) {
    console.error(`invalid ${file}`, err);
    return;
  }

  const result = generateMd(mt);
  result.meta = mt.meta;
  result.toc = toc(mt, siteConfig);

  return result;
}
