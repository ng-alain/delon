import * as path from 'path';
import * as fs from 'fs';
import * as fse from 'fs-extra';
import { ModuleConfig, SiteConfig, ModuleDirConfig } from '../interfaces';
const klawSync = require('klaw-sync');

export function groupFiles(
  srcPaths: string[],
  config: ModuleDirConfig,
  isSyncSpecific: boolean,
  target: string,
  siteConfig: SiteConfig,
) {
  const files: { key: string; data: { [key: string]: string } }[] = [];
  const langRe = new RegExp(`.(${siteConfig.langs.join('|')}){1}`, 'i');
  srcPaths.forEach(srcPath => {
    klawSync(srcPath, {
      nodir: false,
      filter: item => {
        if (config.hasSubDir && item.stats.isDirectory()) return true;
        return (
          path.extname(item.path) === '.md' &&
          item.stats.size > 1 &&
          !item.path.includes(`${path.sep}demo${path.sep}`)
        );
      },
    }).filter(item => path.extname(item.path) === '.md').forEach(item => {
      const key = path
        .relative(
          srcPath,
          config.hasSubDir ? path.dirname(item.path) : item.path.split('.')[0],
        )
        .trim();
      if (key.length === 0) return;
      if (isSyncSpecific && key !== target) return;
      if (config.ignores && ~config.ignores.indexOf(key)) return;

      let sourceItem = files.find(w => w.key === key);
      if (!sourceItem) {
        sourceItem = {
          key,
          data: {},
        };
        files.push(sourceItem);
      }
      const langMatch = item.path.match(langRe);
      sourceItem.data[langMatch ? langMatch[1] : siteConfig.defaultLang] =
        item.path;
    });
  });
  return files;
}
