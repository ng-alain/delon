import * as fse from 'fs-extra';

import { SiteConfig } from '../interfaces';
import { toc } from '../plugins/toc';
import { generateMd } from './generate-md';

const MT = require('mark-twain');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseMd(file: string, siteConfig: SiteConfig): any {
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
