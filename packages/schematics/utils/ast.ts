import { Tree, SchematicsException } from '@angular-devkit/schematics';
import * as ts from 'typescript';
import { getDecoratorMetadata } from './devkit-utils/ast-utils';
import { Change, InsertChange } from './devkit-utils/change';

/** Reads file given path and returns TypeScript source file. */
export function getSourceFile(host: Tree, path: string) {
  const buffer = host.read(path);
  if (!buffer) {
    throw new SchematicsException(`Could not find file for path: ${path}`);
  }
  const content = buffer.toString();
  return ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);
}

export function updateComponentMetadata(
  host: Tree,
  src: string,
  callback: (nodes: ts.Node[]) => Change[],
) {
  const source = getSourceFile(host, src);
  if (!src) {
    throw new SchematicsException(`Component not found: ${src}`);
  }

  const nodes = getDecoratorMetadata(source, 'Component', '@angular/core');

  const changes = callback(nodes);

  const recorder = host.beginUpdate(src);

  changes.forEach(change => {
    if (change instanceof InsertChange) {
      recorder.insertLeft(change.pos, change.toAdd);
    }
  });

  host.commitUpdate(recorder);
}
