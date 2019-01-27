import { Tree } from '@angular-devkit/schematics';
import * as fs from 'fs';
import { join } from 'path';

/**
 * Overwrite files to the project
 *
 * @param [overwrite=false] `true` is force, default: `false`
 */
export function overwriteFile(
  host: Tree,
  filePath: string,
  sourcePath?: string,
  overwrite = false,
): Tree {
  const isExists = host.exists(filePath);
  if (overwrite || isExists) {
    try {
      const buffer = fs.readFileSync(sourcePath);
      const content = buffer ? buffer.toString('utf-8') : '';
      if (overwrite) {
        if (isExists) {
          host.delete(filePath);
        }
        host.create(filePath, content);
      } else {
        host.overwrite(filePath, content);
      }
    } catch {}
  }
  return host;
}

/**
 * Overwrite files to the project
 *
 * @param [overwrite=false] `true` is force, default: `false`
 */
export function overwriteFiles(
  host: Tree,
  files: string[],
  _filePath: string,
  overwrite = false,
): Tree {
  files.forEach(p => overwriteFile(host, p, join(_filePath, p), overwrite));
  return host;
}

/**
 * Add files to the project
 *
 * @param [overwrite=false] `true` is force, default: `false`
 */
export function addFiles(host: Tree, files: string[], _filePath: string, overwrite = false): Tree {
  files
    .filter(p => overwrite || !host.exists(p))
    .forEach(p => overwriteFile(host, p, join(_filePath, p), true));
  return host;
}
