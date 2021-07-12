import { ProjectDefinition } from '@angular-devkit/core/src/workspace';
import { SchematicsException, Tree } from '@angular-devkit/schematics';
import { InsertChange } from '@schematics/angular/utility/change';
import * as parse5 from 'parse5';

import { BUILD_TARGET_BUILD, getProjectTarget } from './workspace';

/** Gets the app index.html file */
export function getIndexHtmlPath(_host: Tree, project: ProjectDefinition): string {
  const targetOptions = getProjectTarget(project, BUILD_TARGET_BUILD);

  if (typeof targetOptions.index === 'string' && targetOptions.index.endsWith('index.html')) {
    return targetOptions.index;
  }

  throw new SchematicsException('No index.html file was found.');
}

/**
 * Parses the index.html file to get the HEAD tag position.
 */
export function getTag(tree: Tree, src: string, tagName: string): { startOffset: any; endOffset: any } {
  if ((parse5 as any).treeAdapters) {
    return getTagInV4(tree, src, tagName);
  }
  const document = parse5.parse(src, {
    sourceCodeLocationInfo: true
  } as any) as any;

  let resNode: any;
  const visit = (nodes: any[]) => {
    nodes.forEach(node => {
      const element = node as any;
      if (element.nodeName === tagName) {
        resNode = element;
      } else {
        if (element.childNodes) {
          visit(element.childNodes);
        }
      }
    });
  };

  visit(document.childNodes);

  if (!resNode) {
    throw new SchematicsException('Head element not found!');
  }

  return {
    startOffset: resNode.sourceCodeLocation.startTag.endOffset,
    endOffset: resNode.sourceCodeLocation.endTag.startOffset
  };
}

export function getTagInV4(_host: Tree, src: string, tagName: string): { startOffset: any; endOffset: any } {
  const document: any = parse5.parse(src, {
    locationInfo: true
  } as any);

  let resNode;
  const visit = (nodes: any[]) => {
    nodes.forEach(node => {
      const element: any = node;
      if (element.tagName === tagName) {
        resNode = element;
      } else {
        if (element.childNodes) {
          visit(element.childNodes);
        }
      }
    });
  };

  visit(document.childNodes);

  if (!resNode) {
    throw new SchematicsException('Head element not found!');
  }

  return {
    startOffset: resNode.__location.startTag.endOffset,
    endOffset: resNode.__location.endTag.startOffset
  };
}

/**
 * Get index.html content
 */
export function getIndexHtmlContent(tree: Tree, project: ProjectDefinition): { indexPath: string; src: string } {
  const indexPath = getIndexHtmlPath(tree, project);
  const buffer = tree.read(indexPath);
  if (!buffer) {
    throw new SchematicsException(`Could not find file for path '${indexPath}'`);
  }

  return {
    indexPath,
    src: buffer.toString()
  };
}

/**
 * Adds a link to the index.html head tag
 */
export function addHeadLink(tree: Tree, project: ProjectDefinition, link: string): void {
  const { indexPath, src } = getIndexHtmlContent(tree, project);

  if (src.indexOf(link) === -1) {
    const node = getTag(tree, src, 'head');
    const insertion = new InsertChange(indexPath, node.startOffset, link);
    const recorder = tree.beginUpdate(indexPath);
    recorder.insertLeft(insertion.pos, insertion.toAdd);
    tree.commitUpdate(recorder);
  }
}

/**
 * Adds a style to the index.html head end tag
 */
export function addHeadStyle(tree: Tree, project: ProjectDefinition, style: string): void {
  const { indexPath, src } = getIndexHtmlContent(tree, project);

  if (src.indexOf(style) === -1) {
    const node = getTag(tree, src, 'head');
    const insertion = new InsertChange(indexPath, node.endOffset, style);
    const recorder = tree.beginUpdate(indexPath);
    recorder.insertLeft(insertion.pos, insertion.toAdd);
    tree.commitUpdate(recorder);
  }
}

/**
 * Adds a html to the index.html body end tag
 */
export function addHtmlToBody(tree: Tree, project: ProjectDefinition, html: string): void {
  const { indexPath, src } = getIndexHtmlContent(tree, project);

  if (src.indexOf(html) === -1) {
    const node = getTag(tree, src, 'body');
    const insertion = new InsertChange(indexPath, node.endOffset, html);
    const recorder = tree.beginUpdate(indexPath);
    recorder.insertLeft(insertion.pos, insertion.toAdd);
    tree.commitUpdate(recorder);
  }
}
