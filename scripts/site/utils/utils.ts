/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from 'fs';
import * as fse from 'fs-extra';
import * as path from 'path';

import { ModuleConfig } from '../interfaces';

const JsonML = require('jsonml.js/lib/utils');
const mustache = require('mustache');

export function isHeading(node: any): any {
  return /h[1-6]/i.test(typeof node === 'string' ? node : JsonML.getTagName(node));
}

export function isStandalone(tagName: string): boolean {
  return tagName === 'hr' || tagName === 'br' || tagName === 'img';
}

export function escapeHTML(str: string, escapeQuotes: boolean = false): string {
  if (!str || typeof str !== 'string') {
    return '';
  }

  let escaped = str
    // .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  if (escapeQuotes) {
    return escaped.replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  }

  return escaped;
}

export function getCode(node: any): any {
  return JsonML.getChildren(JsonML.getChildren(node)[0] || '')[0] || '';
}

export function genValidId(id: string): string {
  return id.replace(/[() `?]*/g, '');
}

export function generateSluggedId(children: any): {
  id: string;
  text: string;
  directive: boolean;
  standalone: boolean;
  service: boolean;
  class: boolean;
} {
  const headingText = children
    .map((node: any) => {
      if (JsonML.isElement(node)) {
        if (JsonML.hasAttributes(node)) {
          return node[2] || '';
        }
        return node[1] || '';
      }
      return node;
    })
    .join('')
    .trim();
  return {
    id: genValidId(headingText).split(':')[0],
    text: headingText,
    directive: children.some((node: any) => JsonML.isElement(node)),
    standalone: headingText.includes(':standalone'),
    service: headingText.includes(':service'),
    class: headingText.includes(':class')
  };
}

export function genAttr(attr: any): string {
  const ret: any[] = [];
  if (attr) {
    for (const key in attr) {
      ret.push(`${key}="${attr[key]}"`);
    }
  }
  return ret.join(' ');
}

export function generateDoc(data: any, tpl: string, savePath: string): void {
  fse.ensureDirSync(path.dirname(savePath));
  const content = mustache.render(tpl, data);
  fs.writeFileSync(savePath, content, { flag: 'w+' });
}

export function genUpperName(name: string): string {
  return name
    .split(/-|\//g)
    .map(v => v.charAt(0).toUpperCase() + v.slice(1))
    .join('');
}

export function includeAttributes(config: ModuleConfig, targetMeta: any): any {
  if (!config.metaIncludeAttributes || !Array.isArray(config.metaIncludeAttributes)) return;

  targetMeta = targetMeta || {};
  for (const key of config.metaIncludeAttributes) {
    targetMeta[key] = (config as any)[key];
  }
  return targetMeta;
}

export function genUrl(rootDir: string, filePath: string): string {
  return path.relative(rootDir, filePath).replace(/\\/g, `/`);
}

export function genComponentName(...names: string[]): string {
  return `${names
    .map(key =>
      key
        .split(/-\//g)
        .map(key => genUpperName(key))
        .join('')
    )
    .join('')}Component`;
}

export function genSelector(...names: string[]): string {
  return `app-${names.map(vv => vv.replace(/-|\//g, '-')).join('-')}`;
}

export function handleExploreStr(str: string, cr: string = '/'): string {
  return str.replace(/\\/g, cr);
}
