import { SchematicsException, Tree } from '@angular-devkit/schematics';
import { getDecoratorMetadata } from '@schematics/angular/utility/ast-utils';
import { Change, InsertChange, RemoveChange, ReplaceChange } from '@schematics/angular/utility/change';
import * as ts from 'typescript';

/** Reads file given path and returns TypeScript source file. */
export function getSourceFile(host: Tree, path: string) {
  const buffer = host.read(path);
  if (!buffer) {
    throw new SchematicsException(`Could not find file for path: ${path}`);
  }
  const content = buffer.toString();
  return ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);
}

export function commitChanges(host: Tree, src: string, changes: Change[]) {
  if (!changes || changes.length <= 0) return;

  const recorder = host.beginUpdate(src);

  changes.forEach(change => {
    if (change instanceof InsertChange) {
      recorder.insertLeft(change.pos, change.toAdd);
    }
    if (change instanceof RemoveChange) {
      // TODO: the change properties is private
      const c = change as any;
      const pos = c.pos as number;
      const toRemove = c.toRemove as string;
      recorder.remove(pos, toRemove.length);
    }
    if (change instanceof ReplaceChange) {
      // TODO: the change properties is private
      const c = change as any;
      const pos = c.pos as number;
      const oldText = c.oldText as string;
      const newText = c.newText as string;

      recorder.remove(pos, oldText.length);
      recorder.insertLeft(pos, newText);
    }
  });

  host.commitUpdate(recorder);
}

export function updateComponentMetadata(
  host: Tree,
  src: string,
  callback: (node: ts.Node) => Change[],
  propertyName?: string,
) {
  const source = getSourceFile(host, src);

  const nodes = getDecoratorMetadata(source, 'Component', '@angular/core');
  if (nodes.length === 0) return;

  const directiveMetadata = nodes[0] as ts.ObjectLiteralExpression;

  let changes: Change[] = [];
  if (propertyName) {
    const property = directiveMetadata.properties.find(p => p.name!.getText() === propertyName);
    if (property) changes = callback(property as ts.Node);
  } else {
    changes = callback(directiveMetadata);
  }

  if (changes && changes.length > 0) {
    commitChanges(host, src, changes);
  }
}
