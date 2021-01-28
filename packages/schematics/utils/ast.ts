import { SchematicsException, Tree } from '@angular-devkit/schematics';
import { getDecoratorMetadata } from '@schematics/angular/utility/ast-utils';
import { Change, InsertChange, RemoveChange, ReplaceChange } from '@schematics/angular/utility/change';
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

export function commitChanges(tree: Tree, src: string, changes: Change[]): void {
  if (!changes || changes.length <= 0) return;

  const recorder = tree.beginUpdate(src);

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

  tree.commitUpdate(recorder);
}

export function updateComponentMetadata(tree: Tree, src: string, callback: (node: ts.Node) => Change[], propertyName?: string): void {
  const source = getSourceFile(tree, src);

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
    commitChanges(tree, src, changes);
  }
}
