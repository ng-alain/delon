import * as fse from 'fs-extra';
const MT = require('mark-twain');
import { generateMd } from './generate-md';
import { toc } from '../plugins/toc';

export function parseMd(file: string, config: any) {
    let mt = null;
    try {
        mt = MT(fse.readFileSync(file, { encoding: 'utf-8' }));
    } catch (err) {
        console.error(`invalid ${file}`, err);
        return;
    }

    const result = generateMd(mt);
    result.meta = mt.meta;
    result.toc = toc(mt, config);

    return result;
}
