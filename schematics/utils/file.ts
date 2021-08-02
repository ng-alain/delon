import { forEach, Rule, Tree } from '@angular-devkit/schematics';
import * as fs from 'fs';
import { join } from 'path';

export function tryDelFile(tree: Tree, filePath: string): void {
  if (tree.exists(filePath)) {
    tree.delete(filePath);
  }
}

export function tryAddFile(tree: Tree, filePath: string, content: string): void {
  tryDelFile(tree, filePath);
  tree.create(filePath, content);
}

export function readContent(tree: Tree, filePath: string): string {
  if (!tree.exists(filePath)) return '';
  return tree.read(filePath).toString('utf-8');
}

export interface OverWriteFileOptions {
  tree: Tree;
  filePath: string;
  content?: string;
  /** `true` is force, default: `false` */
  overwrite?: boolean;
  /** default: `false` */
  contentIsString?: boolean;
}

export function getFileContentInApplicationFiles(fileName: string): string {
  const filePath = join(__dirname, `../application/files/${fileName}`);
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath).toString('utf-8');
  } else {
    console.warn(`Not found file: ${filePath}`);
    return '';
  }
}

/**
 * Overwrite files to the project
 */
export function overwriteFile(options: OverWriteFileOptions): Tree {
  options = { overwrite: false, contentIsString: false, ...options };
  const isExists = options.tree.exists(options.filePath);
  if (options.overwrite || isExists) {
    try {
      let content = '';
      if (options.contentIsString) {
        content = options.content;
      } else {
        const buffer = fs.readFileSync(options.content);
        content = buffer ? buffer.toString('utf-8') : '';
      }
      if (options.overwrite) {
        if (isExists) {
          options.tree.delete(options.filePath);
        }
        options.tree.create(options.filePath, content);
      } else {
        options.tree.overwrite(options.filePath, content);
      }
    } catch (ex) {
      console.warn(`Overwrite file error: ${ex}`);
    }
  }
  return options.tree;
}

export function overwriteIfExists(tree: Tree): Rule {
  return forEach(fileEntry => {
    if (tree.exists(fileEntry.path)) {
      tree.overwrite(fileEntry.path, fileEntry.content);
      return null;
    }
    return fileEntry;
  });
}

export function writeFile(tree: Tree, filePath: string, content: string): void {
  if (tree.exists(filePath)) {
    tree.overwrite(filePath, content);
  } else {
    tree.create(filePath, content);
  }
}
