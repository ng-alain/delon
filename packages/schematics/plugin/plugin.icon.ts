import { strings } from '@angular-devkit/core';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { findNodes } from '@schematics/angular/utility/ast-utils';
import {
  parseFragment,
  Attribute,
  DefaultTreeDocument,
  DefaultTreeElement,
} from 'parse5';
import * as ts from 'typescript';

import { getSourceFile, updateComponentMetadata } from '../utils/ast';
import { PluginOptions } from './interface';

// includes ng-zorro-antd & @delon/*
// - zorro: https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/icon/nz-icon.service.ts#L6
// - @delon: https://github.com/ng-alain/delon/blob/master/packages/theme/src/theme.module.ts#L33
const WHITE_ICONS = [
  // zorro
  'BarsOutline',
  'CalendarOutline',
  'CaretDownFill',
  'CaretDownOutline',
  'CheckCircleFill',
  'CheckCircleOutline',
  'CheckOutline',
  'ClockCircleOutline',
  'CloseCircleFill',
  'CloseCircleOutline',
  'CloseOutline',
  'DoubleLeftOutline',
  'DoubleRightOutline',
  'DownOutline',
  'EllipsisOutline',
  'ExclamationCircleFill',
  'ExclamationCircleOutline',
  'EyeOutline',
  'FileFill',
  'FileOutline',
  'FilterFill',
  'InfoCircleFill',
  'InfoCircleOutline',
  'LeftOutline',
  'LoadingOutline',
  'PaperClipOutline',
  'QuestionCircleOutline',
  'RightOutline',
  'SearchOutline',
  'UploadOutline',
  'UpOutline',
  // delon
  'BellOutline',
  'FilterFill',
  'CaretUpOutline',
  'CaretDownOutline',
  'DeleteOutline',
  'PlusOutline',
  'InboxOutline',
];

const ATTRIBUTES = {
  'nz-input-group': [
    'nzAddOnBeforeIcon',
    'nzAddOnAfterIcon',
    'nzPrefixIcon',
    'nzSuffixIcon',
  ],
  'nz-avatar': ['nzIcon'],
  'quick-menu': ['icon'],
};

const ATTRIBUTE_NAMES = Object.keys(ATTRIBUTES);
// fix parse5 auto ingore lower case all properies
ATTRIBUTE_NAMES.forEach(key => {
  const res: string[] = [];
  (ATTRIBUTES[key] as string[]).forEach(prop => {
    res.push(prop.toLowerCase());
    res.push(`[${prop.toLowerCase()}]`);
  });
  ATTRIBUTES[key] = res;
});

function findIcons(html: string): string[] {
  const res: string[] = [];
  const doc = parseFragment(html) as DefaultTreeDocument;
  const visitNodes = nodes => {
    nodes.forEach(node => {
      if (node.attrs) {
        const classIcon = genByClass(node);
        if (classIcon) res.push(classIcon);
        const compIcon = genByComp(node);
        if (compIcon) res.push(...compIcon);
        const attrIcon = genByAttribute(node);
        if (attrIcon) res.push(...attrIcon);
      }

      if (node.childNodes) {
        visitNodes(node.childNodes);
      }
    });
  };

  visitNodes(doc.childNodes);
  return res;
}

function genByClass(node: DefaultTreeElement): string {
  const attr = node.attrs.find(a => a.name === 'class');
  if (!attr || !attr.value) return null;
  const match = (attr.value as string).match(/anticon(-\w+)+/g);
  if (!match || match.length === 0) return null;
  return match[0];
}

function genByComp(node: DefaultTreeElement): string[] {
  if (!node.attrs.find(attr => attr.name === 'nz-icon')) return null;

  const type = node.attrs.find(
    attr => attr.name === 'type' || attr.name === '[type]',
  );
  if (!type) return null;

  const types = getNgValue(type);
  if (types == null) return null;

  const theme = node.attrs.find(
    attr => attr.name === 'theme' || attr.name === '[theme]',
  );
  const themes = getNgValue(theme);
  if (themes == null || themes.length === 0) return types;

  const res = [].concat(...types.map(a => themes.map(b => `${a}#${b}`)));

  return res;
}

function genByAttribute(node: DefaultTreeElement): string[] {
  if (!ATTRIBUTE_NAMES.includes(node.nodeName)) return null;

  const attributes = ATTRIBUTES[node.nodeName];
  const type = node.attrs.find(attr => attributes.includes(attr.name));
  if (!type) return null;

  const types = getNgValue(type);
  if (types == null) return null;

  return types;
}

function getNgValue(attr: Attribute): string[] {
  if (!attr) return null;

  const str = attr.value.trim();
  const templatVarIndex = str.indexOf('{{');

  // type="icon"
  // type="{{value ? 'icon' : 'icon' }}"
  // type="align-{{value ? 'icon' : 'icon' }}"
  if (!attr.name.startsWith('[')) {
    const prefix = templatVarIndex > 0 ? str.substr(0, templatVarIndex) : '';
    if (templatVarIndex !== -1) {
      return fixValue(str.substr(templatVarIndex), prefix);
    }
    return [str];
  }

  // ingore {{ }}
  if (templatVarIndex !== -1) return null;

  return fixValue(str, '');
}

function fixValue(str: string, prefix: string) {
  // value ? 'icon' : 'icon'
  // focus ? 'anticon anticon-arrow-down' : 'anticon anticon-search'
  // 'icon'
  const types =
    str.replace(/anticon anticon-/g, '').match(/['|"|`][-A-Za-z]+['|"|`]/g) ||
    [];
  if (types.length > 0) {
    return types.map(t => prefix + t.replace(/['|"|`]/g, ''));
  }
  return null;
}

function fixTs(host: Tree, path: string) {
  let res: string[] = [];
  updateComponentMetadata(
    host,
    path,
    (node: ts.PropertyAssignment) => {
      if (!ts.isStringLiteralLike(node.initializer)) return;
      res = findIcons(node.initializer.getText());
      return [];
    },
    `template`,
  );
  return res;
}

function getIconNameByClassName(value: string): string {
  let res = value.replace(/anticon anticon-/g, '').replace(/anticon-/g, '');

  if (value === 'anticon-spin' || value.indexOf('-o-') !== -1) {
    return null;
  }

  if (res.includes('verticle')) {
    res = res.replace('verticle', 'vertical');
  }
  if (res.startsWith('cross')) {
    res = res.replace('cross', 'close');
  }

  if (/(-o)$/.test(res)) {
    res = res.replace(/(-o)$/, '-outline');
  } else if (/#outline/.test(res)) {
    res = res.replace(/#outline/, '-outline');
  } else if (/#fill/.test(res)) {
    res = res.replace(/#fill/, '-fill');
  } else if (/#twotone/.test(res)) {
    res = res.replace(/#twotone/, '-TwoTone');
  } else {
    res = `${res}-outline`;
  }

  return strings.classify(res);
}

function getIcons(host: Tree): string[] {
  const iconClassList: string[] = [];

  host.visit(path => {
    if (~path.indexOf(`/node_modules/`)) return;
    let res: string[] = [];
    if (path.endsWith('.ts')) {
      res = fixTs(host, path);
    }
    if (path.endsWith('.html')) {
      res = findIcons(host.read(path).toString());
    }
    if (res.length > 0) {
      console.log(`found ${JSON.stringify(res)} icons in ${path}\n`);
      iconClassList.push(...res);
    }
  });

  const iconSet = new Set();
  iconClassList
    .map(value => getIconNameByClassName(value))
    .filter(w => w != null && !WHITE_ICONS.includes(w))
    .forEach(v => iconSet.add(v));

  return Array.from(iconSet).sort();
}

function genCustomIcons(options: PluginOptions, host: Tree) {
  const path = options.sourceRoot + `/style-icons.ts`;
  if (!host.exists(path)) {
    host.create(
      path,
      `// Custom icon static resources

import { } from '@ant-design/icons-angular/icons';

export const ICONS = [ ];
`,
    );
    return;
  }
  const source = getSourceFile(host, path);
  const allImports = findNodes(source as any, ts.SyntaxKind.ImportDeclaration);
  const iconImport = allImports.find((w: ts.ImportDeclaration) =>
    w.moduleSpecifier.getText().includes('@ant-design/icons-angular/icons'),
  ) as ts.ImportDeclaration;
  if (!iconImport) return;
  (iconImport.importClause.namedBindings as ts.NamedImports)!.elements!.forEach(
    v => WHITE_ICONS.push(v.getText().trim()),
  );
}

function genIconFile(options: PluginOptions, host: Tree, icons: string[]) {
  const content = `/*
* Automatically generated by 'ng g ng-alain:plugin icon'
* @see https://ng-alain.com/cli/plugin#icon
*/

import {
  ${icons.join(',\n  ')}
} from '@ant-design/icons-angular/icons';

export const ICONS_AUTO = [
  ${icons.join(',\n  ')}
];
`;
  const savePath = options.sourceRoot + `/style-icons-auto.ts`;
  if (host.exists(savePath)) {
    host.overwrite(savePath, content);
  } else {
    host.create(savePath, content);
  }
}

export function pluginIcon(options: PluginOptions): Rule {
  return (host: Tree, context: SchematicContext) => {
    console.log(`Analyzing files...`);
    genCustomIcons(options, host);
    const icons = getIcons(host);
    genIconFile(options, host, icons);
    console.log(`\n生成成功，如果是首次运行，需要手动引用，参考：https://ng-alain.com/theme/icon/zh`);
    console.log(`\nFinished, if it's first run, you need manually reference it, refer to: https://ng-alain.com/theme/icon/en`);
  };
}
