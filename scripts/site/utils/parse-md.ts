import * as fse from 'fs-extra';

import { SiteConfig } from '../interfaces';
import { generateMd } from './generate-md';
import { toc } from '../plugins/toc';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const MT = require('mark-twain');

export function parseMd(file: string, siteConfig: SiteConfig): any {
  let mt: any = null;
  try {
    mt = MT(fse.readFileSync(file, { encoding: 'utf-8' }));
  } catch (err) {
    console.error(`invalid ${file}`, err);
    return;
  }

  const result = generateMd(mt);
  result.meta = mt!.meta;
  result.toc = toc(mt, siteConfig);

  return result;
}
