import { Tree, SchematicsException } from '@angular-devkit/schematics';
import * as parse5 from 'parse5';
import { getIndexHtmlPath } from './ast';
import { InsertChange } from './devkit-utils/change';
import { Project } from './devkit-utils/config';

/**
 * Parses the index.html file to get the HEAD tag position.
 */
export function getTag(host: Tree, src: string, tagName: string) {
  const document = parse5.parse(src, {
    locationInfo: true,
  }) as parse5.AST.Default.Document;

  let resNode;
  const visit = (nodes: parse5.AST.Default.Node[]) => {
    nodes.forEach(node => {
      const element = <parse5.AST.Default.Element>node;
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
export function getIndexHtmlContent(host: Tree, project: Project) {
  const indexPath = getIndexHtmlPath(host, project);
  const buffer = host.read(indexPath);
  if (!buffer) {
    throw new SchematicsException(`Could not find file for path: ${indexPath}`);
  }

  return {
    indexPath,
    src: buffer.toString()
  };
}

/**
 * Adds a link to the index.html head tag
 */
export function addHeadLink(host: Tree, project: Project, link: string) {
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
export function addHeadStyle(host: Tree, project: Project, style: string) {
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
export function addHtmlToBody(host: Tree, project: Project, html: string) {
  const { indexPath, src } = getIndexHtmlContent(host, project);

  if (src.indexOf(html) === -1) {
    const node = getTag(host, src, 'body');
    const insertion = new InsertChange(indexPath, node.endOffset, html);
    const recorder = host.beginUpdate(indexPath);
    recorder.insertLeft(insertion.pos, insertion.toAdd);
    host.commitUpdate(recorder);
  }
}
