import * as path from 'path';
import * as fs from 'fs';
import * as fse from 'fs-extra';
const klawSync = require('klaw-sync');

export function groupFiles(
    srcPath: string, config: any, isSyncSpecific: boolean, target: string, siteConfig: any
) {
    const files: { key: string, data: { [ key: string ]: string } }[] = [];
    const langRe = new RegExp(`.(${siteConfig.theme.langs.join('|')}){1}`, 'i');
    klawSync(srcPath, {
        nodir: true,
        filter: (item) => path.extname(item.path) === '.md' && item.stats.size > 1 && !item.path.includes(`${path.sep}demo${path.sep}`)
    }).forEach(item => {
        const key = path.relative(srcPath, config.hasSubDir ? path.dirname(item.path) : item.path.split('.')[0]).trim();
        if (key.length === 0) return;
        if (isSyncSpecific && key !== target) return;
        if (config.ignores && ~config.ignores.indexOf(key)) return;

        let sourceItem = files.find(w => w.key === key);
        if (!sourceItem) {
            sourceItem = {
                key,
                data: {}
            };
            files.push(sourceItem);
        }
        const langMatch = item.path.match(langRe);
        sourceItem.data[langMatch ? langMatch[1] : siteConfig.theme.defaultLang] = item.path;
    });
    return files;
}
