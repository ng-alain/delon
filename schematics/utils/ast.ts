import { tags, normalize } from '@angular-devkit/core';
import { SchematicsException, Tree } from '@angular-devkit/schematics';
import {
  getSourceNodes,
  getMetadataField,
  addProviderToModule as _addProviderToModule
} from '@schematics/angular/utility/ast-utils';
import { Change, InsertChange } from '@schematics/angular/utility/change';
import * as ts from 'typescript';

import { addImportToModule } from './alain';

export const ROUTINS_FILENAME = 'routes.ts';

/** Reads file given path and returns TypeScript source file. */
export function getSourceFile(tree: Tree, path: string): ts.SourceFile {
  const buffer = tree.read(path);
  if (!buffer) {
    throw new SchematicsException(`Could not find file for path: ${path}`);
  }
  const content = buffer.toString();
  return ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);
}

export function applyChanges(tree: Tree, path: string, changes: Change[]): void {
  const exportRecorder = tree.beginUpdate(path);
  for (const change of changes) {
    if (change instanceof InsertChange) {
      exportRecorder.insertLeft(change.pos, change.toAdd);
    }
  }
  tree.commitUpdate(exportRecorder);
}

function getComponentMetadata(source: ts.SourceFile): ts.Node[] {
  const allNodes = getSourceNodes(source);
  const identifier = 'Component';
  return allNodes
    .filter(node => {
      return (
        node.kind == ts.SyntaxKind.Decorator && (node as ts.Decorator).expression.kind == ts.SyntaxKind.CallExpression
      );
    })
    .map(node => (node as ts.Decorator).expression as ts.CallExpression)
    .filter(expr => {
      if (expr.expression.kind == ts.SyntaxKind.Identifier) {
        const id = expr.expression as ts.Identifier;

        return id.text == identifier;
      }

      return false;
    })
    .filter(expr => expr.arguments[0] && expr.arguments[0].kind == ts.SyntaxKind.ObjectLiteralExpression)
    .map(expr => expr.arguments[0] as ts.ObjectLiteralExpression);
}

function addSymbolToComponentMetadata(
  source: ts.SourceFile,
  filePath: string,
  symbolName: string,
  metadataField = 'imports'
): Change[] {
  const nodes = getComponentMetadata(source);
  if (nodes.length <= 0) return [];

  const node = nodes[0];
  if (!node || !ts.isObjectLiteralExpression(node)) {
    return [];
  }

  // Get all the children property assignment of object literals.
  const matchingProperties = getMetadataField(node, metadataField);
  if (matchingProperties.length == 0) {
    // We haven't found the field in the metadata declaration. Insert a new field.
    let position: number;
    let toInsert: string;
    if (node.properties.length == 0) {
      position = node.getEnd() - 1;
      toInsert = `\n  ${metadataField}: [\n${tags.indentBy(4)`${symbolName}`}\n  ]\n`;
    } else {
      const childNode = node.properties[node.properties.length - 1];
      position = childNode.getEnd();
      // Get the indentation of the last element, if any.
      const text = childNode.getFullText(source);
      const matches = text.match(/^(\r?\n)(\s*)/);
      if (matches) {
        toInsert =
          `,${matches[0]}${metadataField}: [${matches[1]}` +
          `${tags.indentBy(matches[2].length + 2)`${symbolName}`}${matches[0]}]`;
      } else {
        toInsert = `, ${metadataField}: [${symbolName}]`;
      }
    }
    return [new InsertChange(filePath, position, toInsert)];
  }
  const assignment = matchingProperties[0];

  // If it's not an array, nothing we can do really.
  if (!ts.isPropertyAssignment(assignment) || !ts.isArrayLiteralExpression(assignment.initializer)) {
    return [];
  }

  let expresssion: ts.Expression | ts.ArrayLiteralExpression;
  const assignmentInit = assignment.initializer;
  const elements = assignmentInit.elements;

  if (elements.length) {
    const symbolsArray = elements.map(node => tags.oneLine`${node.getText()}`);
    if (symbolsArray.includes(tags.oneLine`${symbolName}`)) {
      return [];
    }

    expresssion = elements[elements.length - 1];
  } else {
    expresssion = assignmentInit;
  }

  let toInsert: string;
  let position = expresssion.getEnd();
  if (ts.isArrayLiteralExpression(expresssion)) {
    // We found the field but it's empty. Insert it just before the `]`.
    position--;
    toInsert = `\n${tags.indentBy(4)`${symbolName}`}\n  `;
  } else {
    // Get the indentation of the last element, if any.
    const text = expresssion.getFullText(source);
    const matches = text.match(/^(\r?\n)(\s*)/);
    if (matches) {
      toInsert = `,${matches[1]}${tags.indentBy(matches[2].length)`${symbolName}`}`;
    } else {
      toInsert = `, ${symbolName}`;
    }
  }

  return [new InsertChange(filePath, position, toInsert)];
}

export function findRoutesPath(tree: Tree, path: string): string {
  let dir = tree.getDir(path);
  while (dir) {
    const found = dir.subfiles.filter(p => p.endsWith(ROUTINS_FILENAME));
    if (found.length > 0) {
      return normalize(`${dir.path}/${ROUTINS_FILENAME}`);
    }
    dir = dir.parent;
  }
  return '';
}

export function importInStandalone(
  tree: Tree,
  filePath: string,
  componentName: string,
  componentPath: string,
  metadataField = 'imports'
): void {
  // imports
  addImportToModule(tree, filePath, componentName, componentPath);
  // import in component
  const source = getSourceFile(tree, filePath);
  const changes = addSymbolToComponentMetadata(source, filePath, componentName, metadataField);
  applyChanges(tree, filePath, changes);
}

export function addServiceToModuleOrStandalone(
  tree: Tree,
  standalone: boolean,
  filePath: string,
  serviceName: string,
  importPath: string
): void {
  const source = getSourceFile(tree, filePath);
  if (standalone) {
    importInStandalone(tree, filePath, serviceName, importPath, 'providers');
  } else {
    const changes = _addProviderToModule(source, filePath, serviceName, importPath);
    applyChanges(tree, filePath, changes);
  }
}

export function consoleTree(tree: Tree): void {
  tree.visit(filePath => {
    console.log(filePath);
  });
}
