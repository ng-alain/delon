import { ProjectDefinition } from '@angular-devkit/core/src/workspace';
import { SchematicsException, Tree } from '@angular-devkit/schematics';
import { getProjectTargetOptions } from '@angular/cdk/schematics';
import { InsertChange } from '@schematics/angular/utility/change';
import * as parse5 from 'parse5';

/** Gets the app index.html file */
export function getIndexHtmlPath(_host: Tree, project: ProjectDefinition): string {
  const targetOptions = getProjectTargetOptions(project, 'build');

  if (typeof targetOptions.index === 'string' && targetOptions.index.endsWith('index.html')) {
    return targetOptions.index;
  }

  throw new SchematicsException('No index.html file was found.');
}

/**
 * Parses the index.html file to get the HEAD tag position.
 */
export function getTag(host: Tree, src: string, tagName: string): { startOffset: any; endOffset: any } {
  if ((parse5 as any).treeAdapters) {
    return getTagInV4(host, src, tagName);
  }
  const document = parse5.parse(src, {
    sourceCodeLocationInfo: true,
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
    endOffset: resNode.sourceCodeLocation.endTag.startOffset,
  };
}

export function getTagInV4(_host: Tree, src: string, tagName: string): { startOffset: any; endOffset: any } {
  const document: any = parse5.parse(src, {
    locationInfo: true,
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
    endOffset: resNode.__location.endTag.startOffset,
  };
}

/**
 * Get index.html content
 */
export function getIndexHtmlContent(host: Tree, project: ProjectDefinition): { indexPath: string; src: string } {
  const indexPath = getIndexHtmlPath(host, project);
  const buffer = host.read(indexPath);
  if (!buffer) {
    throw new SchematicsException(`Could not find file for path '${indexPath}'`);
  }

  return {
    indexPath,
    src: buffer.toString(),
  };
}

/**
 * Adds a link to the index.html head tag
 */
export function addHeadLink(host: Tree, project: ProjectDefinition, link: string): void {
  const { indexPath, src } = getIndexHtmlContent(host, project);

  if (src.indexOf(link) === -1) {
    const node = getTag(host, src, 'head');
    const insertion = new InsertChange(indexPath, node.startOffset, link);
    const recorder = host.beginUpdate(indexPath);
    recorder.insertLeft(insertion.pos, insertion.toAdd);
    host.commitUpdate(recorder);
  }
}

/**
 * Adds a style to the index.html head end tag
 */
export function addHeadStyle(host: Tree, project: ProjectDefinition, style: string): void {
  const { indexPath, src } = getIndexHtmlContent(host, project);

  if (src.indexOf(style) === -1) {
    const node = getTag(host, src, 'head');
    const insertion = new InsertChange(indexPath, node.endOffset, style);
    const recorder = host.beginUpdate(indexPath);
    recorder.insertLeft(insertion.pos, insertion.toAdd);
    host.commitUpdate(recorder);
  }
}

/**
 * Adds a html to the index.html body end tag
 */
export function addHtmlToBody(host: Tree, project: ProjectDefinition, html: string): void {
  const { indexPath, src } = getIndexHtmlContent(host, project);

  if (src.indexOf(html) === -1) {
    const node = getTag(host, src, 'body');
    const insertion = new InsertChange(indexPath, node.endOffset, html);
    const recorder = host.beginUpdate(indexPath);
    recorder.insertLeft(insertion.pos, insertion.toAdd);
    host.commitUpdate(recorder);
  }
}
