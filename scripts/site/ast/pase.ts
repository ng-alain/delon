import { Root, RootContent } from 'mdast';
import { remark } from 'remark';
import { loadFront } from 'yaml-front-matter';

import { getMeta } from './get-meta';
import md from './md';
import { angularNonBindAble, idSlug } from './util';
import { ModuleDocContent, ModuleDocDemoItem, ModuleDocToc } from '../types';

function stringifyInlineCode(node: RootContent): string {
  return remark.stringify(node as unknown as Root);
}

export function parseDoc(lang: string, file: string): ModuleDocContent {
  const meta = getMeta(file);
  if (typeof meta.title === 'object') {
    meta.title = meta.title[lang];
  }
  meta.title = String(meta.title).trim() ?? '';
  if (typeof meta.type === 'string' && meta.type.length > 0) {
    meta.group = meta.type;
    delete meta.type;
  }
  meta.order = meta.order ?? 0;

  const content = meta.__content;
  delete meta.__content;

  const ast = remark.parse(content);
  // 分离前后两部分
  let isAfterAPIHeading = false;
  let firstPart = '';
  let secondPart = '';
  const toc: ModuleDocToc[] = [];
  let lastDepth2: ModuleDocToc | undefined;

  ast.children.forEach(child => {
    if (child.type === 'heading') {
      const firstChild = child.children[0];
      const title = firstChild.type === 'text' ? firstChild.value : '';
      const id = idSlug(title);
      if (child.depth === 2) {
        if (title === 'API') {
          isAfterAPIHeading = true;
        }
        lastDepth2 = { id, title };
        toc.push(lastDepth2);
      }
      if (child.depth === 3 && lastDepth2) {
        lastDepth2.children = lastDepth2.children ?? [];
        lastDepth2.children.push({ id, title });
      }
    }
    const stringified = stringifyInlineCode(child);
    const render = md.parse(stringified);
    if (!isAfterAPIHeading) {
      firstPart += render;
    } else {
      secondPart += render;
    }
  });

  return {
    meta: meta,
    text: angularNonBindAble(firstPart),
    api: angularNonBindAble(secondPart),
    toc
  };
}

export function parseDemo(
  file: string,
  defaultLang: string
): Pick<ModuleDocDemoItem, 'code' | 'summary' | 'title' | 'order' | 'type'> {
  const meta = loadFront(file) as Partial<ModuleDocDemoItem> & { __content?: string };
  const content = meta.__content;
  delete meta.__content;

  const ast = remark.parse(content);
  // 分离中英文
  let isAfterENHeading = false;
  let zhSummaryPart = '';
  let enSummaryPart = '';
  let code = '';

  ast.children.forEach(child => {
    if (child.type === 'heading' && child.depth === 2) {
      const firstChild = child.children[0];
      if (firstChild.type === 'text' && firstChild.value === 'en-US') {
        isAfterENHeading = true;
      }
    } else if (child.type === 'code') {
      code = child.value;
    } else if (!isAfterENHeading) {
      zhSummaryPart += md.parse(stringifyInlineCode(child));
    } else {
      enSummaryPart += md.parse(stringifyInlineCode(child));
    }
  });
  const title = (typeof meta.title === 'object' ? meta.title : { [defaultLang]: meta.title }) as Record<string, string>;
  Object.keys(title).forEach(key => {
    title[key] = String(title[key]).trim() ?? '';
  });
  return {
    title,
    code,
    order: meta.order ?? 0,
    type: meta.type === 'example' ? 'example' : 'demo',
    summary: {
      'en-US': angularNonBindAble(enSummaryPart),
      'zh-CN': angularNonBindAble(zhSummaryPart)
    }
  };
}
