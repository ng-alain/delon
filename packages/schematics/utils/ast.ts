import { SchematicsException, Tree } from '@angular-devkit/schematics';
import * as ts from 'typescript';

/** Reads file given path and returns TypeScript source file. */
export function getSourceFile(tree: Tree, path: string): ts.SourceFile {
  const buffer = tree.read(path);
  if (!buffer) {
    throw new SchematicsException(`Could not find file for path: ${path}`);
  }
  const content = buffer.toString();
  return ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);
}
