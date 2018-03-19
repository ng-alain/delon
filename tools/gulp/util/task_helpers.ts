import * as fs from 'fs';
import { src, dest } from 'gulp';
import * as path from 'path';
const gulpClean = require('gulp-clean');

/** If the string passed in is a glob, returns it, otherwise append '**\/*' to it. */
function _globify(maybeGlob: string, suffix = '**/*') {
    if (maybeGlob.indexOf('*') !== -1) {
      return maybeGlob;
    }
    try {
      const stat = fs.statSync(maybeGlob);
      if (stat.isFile()) {
        return maybeGlob;
      }
    } catch (e) {}
    return path.join(maybeGlob, suffix);
}

/** Copy files from a glob to a destination. */
export function copyTask(srcGlobOrDir: string | string[], outRoot: string) {
    if (typeof srcGlobOrDir === 'string') {
      return () => src(_globify(srcGlobOrDir)).pipe(dest(outRoot));
    } else {
      return () => src(srcGlobOrDir.map(name => _globify(name))).pipe(dest(outRoot));
    }
}

/** Delete files. */
export function cleanTask(glob: string) {
    return () => src(glob, { read: false }).pipe(gulpClean(null));
}
