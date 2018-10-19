import { Rule, Tree, SchematicContext } from '@angular-devkit/schematics';
import * as ts from 'typescript';
import { DomService } from '../../dom/dom.service';
import { updateComponentMetadata } from '../../../utils/ast';
import { ConvertAction } from '../../dom/interfaces';
import { ReplaceChange } from '../../../utils/devkit-utils/change';

const DOM = new DomService();

function bondingAttr(
  name: string,
  mapNames: {
    [key: string]: {
      value: string;
      type: 'boolean' | 'string' | 'number' | 'object' | 'fn';
    };
  },
  keys: string[],
  attribs: Object,
) {
  if (keys.length <= 0) return;
  const res: string[] = [];
  keys.forEach(key => {
    const value = attribs[key];
    let map: {
      value: string;
      type: 'boolean' | 'string' | 'number' | 'object' | 'fn';
    } = null;
    let newKey = key;
    let newValue = value || '';
    if (key.startsWith('[')) {
      newKey = key.substr(1, key.length - 2);
      map = mapNames[newKey];
    } else {
      map = mapNames[key];
      switch (map.type) {
        case 'boolean':
          newValue = !newValue || newValue !== 'false';
          break;
        case 'string':
          // fix `boolean | string`
          newValue = !newValue ? `true` : `'${value}'`;
          break;
        case 'number':
          break;
        case 'object':
          // fix `boolean | object`
          if (!newValue) newValue = `true`;
          break;
        case 'fn':
          break;
      }
    }
    res.push(`${map.value}: ${newValue}`);
    delete attribs[key];
  });
  attribs[`[${name}]`] = `{${res.join(', ')}}`;
}

const RULES: ConvertAction[] = [
  {
    type: 'tag',
    name: 'simple-table',
    rules: [
      { type: 'name', value: 'st' },
      { type: 'add-template-atrr', value: 'body' },
      { type: 'add-template-atrr', value: 'expand' },
    ],
    custom: dom => {
      // #region req
      const reqKeys = Object.keys(dom.attribs).filter(
        key =>
          ~[
            `extraParams`,
            `[extraParams]`,
            `reqReName`,
            `[reqReName]`,
            `reqMethod`,
            `[reqMethod]`,
            `reqHeader`,
            `[reqHeader]`,
            `reqBody`,
            `[reqBody]`,
          ].indexOf(key),
      );
      bondingAttr(
        'req',
        {
          extraParams: { value: 'params', type: 'object' },
          reqReName: { value: 'reName', type: 'object' },
          reqMethod: { value: 'method', type: 'string' },
          reqHeader: { value: 'header', type: 'object' },
          reqBody: { value: 'body', type: 'object' },
        },
        reqKeys,
        dom.attribs,
      );
      // #endregion

      // #region res
      const resKeys = Object.keys(dom.attribs).filter(
        key =>
          ~[
            `resReName`,
            `[resReName]`,
            `preDataChange`,
            `[preDataChange]`,
          ].indexOf(key),
      );
      bondingAttr(
        'res',
        {
          resReName: { value: 'reName', type: 'object' },
          preDataChange: { value: 'process', type: 'fn' },
        },
        resKeys,
        dom.attribs,
      );
      // #endregion

      // #region res
      const pageKeys = Object.keys(dom.attribs).filter(
        key =>
          ~[
            `frontPagination`,
            `[frontPagination]`,
            `zeroIndexedOnPage`,
            `[zeroIndexedOnPage]`,
            `pagePlacement`,
            `[pagePlacement]`,
            `showPagination`,
            `[showPagination]`,
            `showSizeChanger`,
            `[showSizeChanger]`,
            `pageSizeOptions`,
            `[pageSizeOptions]`,
            `showQuickJumper`,
            `[showQuickJumper]`,
            `showTotal`,
            `[showTotal]`,
            `isPageIndexReset`,
            `[isPageIndexReset]`,
            `toTopInChange`,
            `[toTopInChange]`,
            `toTopOffset`,
            `[toTopOffset]`,
          ].indexOf(key),
      );
      bondingAttr(
        'page',
        {
          frontPagination: { value: 'front', type: 'boolean' },
          zeroIndexedOnPage: { value: 'zeroIndexed', type: 'boolean' },
          pagePlacement: { value: 'placement', type: 'string' },
          showPagination: { value: 'show', type: 'boolean' },
          showSizeChanger: { value: 'showSize', type: 'boolean' },
          pageSizeOptions: { value: 'pageSizes', type: 'object' },
          showQuickJumper: { value: 'showQuickJumper', type: 'boolean' },
          showTotal: { value: 'showTotal', type: 'string' },
          isPageIndexReset: { value: 'indexReset', type: 'boolean' },
          toTopInChange: { value: 'toTop', type: 'boolean' },
          toTopOffset: { value: 'toTopOffset', type: 'number' },
        },
        pageKeys,
        dom.attribs,
      );
      // #endregion
    },
  },
  {
    type: 'tag',
    name: 'footer-toolbar',
    rules: [{ type: 'add-template-atrr', value: 'extra' }],
  },
  {
    type: 'tag',
    name: 'desc-list-item',
    rules: [
      { type: 'name', value: 'sv' },
      { type: 'attr-name', value: 'term', newValue: 'label' },
    ],
  },
  {
    type: 'tag',
    name: 'desc-list',
    rules: [{ type: 'name', value: 'sv-container' }],
  },
  {
    type: 'tag',
    name: 'page-header',
    rules: [
      { type: 'attr-name', value: 'home_link', newValue: 'homeLink' },
      { type: 'attr-name', value: 'home_i18n', newValue: 'homeI18n' },
      { type: 'add-template-atrr', value: 'breadcrumb' },
      { type: 'add-template-atrr', value: 'logo' },
      { type: 'add-template-atrr', value: 'action' },
      { type: 'add-template-atrr', value: 'content' },
      { type: 'add-template-atrr', value: 'tab' },
      { type: 'add-template-atrr', value: 'extra' },
      { type: 'add-prefix-name-template', value: 'ph' },
    ],
  },
  {
    type: 'attr',
    name: '',
    rules: [{ type: 'attr-name', value: 'shf-wrap', newValue: 'se-container' }],
  },
  {
    type: 'tag',
    name: 'shf-item',
    rules: [{ type: 'name', value: 'se' }],
  },
  {
    type: 'tag',
    name: 'g2-chart',
    rules: [{ type: 'name', value: 'g2-custom' }],
  },
];

function replaceHtml(html: string) {
  let newHtml = html;
  DOM.replace(html, RULES, (dom, count) => {
    if (count === 0) return;
    newHtml = DOM.prettify(dom);
  });
  return newHtml;
}

function fixHtml(host: Tree, path: string) {
  const html = host.read(path).toString();
  const newHtml = replaceHtml(html);
  if (html === newHtml) return;
  host.overwrite(path, newHtml);
}

function fixTs(host: Tree, path: string) {
  updateComponentMetadata(
    host,
    path,
    (node: ts.PropertyAssignment) => {
      if (!ts.isStringLiteralLike(node.initializer)) return;
      const html = node.initializer.getText();
      const newHtml = replaceHtml(html);
      if (html === newHtml) return;
      return [new ReplaceChange(path, node.initializer.getStart(), html, newHtml)];
    },
    `template`,
  );
}

export function v2DomRule(): Rule {
  return (host: Tree, context: SchematicContext) => {
    host.visit(path => {
      if (path.endsWith('.ts')) {
        fixTs(host, path);
      }
      if (path.endsWith('.html')) {
        fixHtml(host, path);
      }
    });
  };
}
