import { Rule, Tree, SchematicContext } from '@angular-devkit/schematics';
import * as ts from 'typescript';

import { DomService } from '../../dom/dom.service';
import { updateComponentMetadata } from '../../../utils/ast';
import { InsertChange } from '../../../utils/devkit-utils/change';
import { addPackageToPackageJson } from '../../../utils/json';
import { VERSION } from '../../../utils/lib-versions';

const DOM = new DomService();

function fixClass(host: Tree, src: string, classes: Object) {
  if (!host.exists(src)) {
    console.log(`Not found in [${src}]`);
    return;
  }
  let content = host.read(src).toString();
  Object.keys(classes).forEach(key => {
    content = content.replace(key, classes[key]);
  });
  host.overwrite(src, content);
}

function fixVersion(host: Tree, context: SchematicContext) {
  addPackageToPackageJson(
    host,
    [
      'abc',
      'acl',
      'auth',
      'cache',
      'form',
      'mock',
      'theme',
      'util',
      'chart',
    ].map(pkg => `@delon/${pkg}@${VERSION}`),
  );
}

function fixStyles(host: Tree, context: SchematicContext) {
  const filePath = 'src/styles.less';
  if (!host.exists(filePath)) {
    console.log(`Not found in [${filePath}]`);
    return;
  }
  let content = host.read(filePath).toString();

  [
    {
      key: `theme/styles/index';`,
      insert: `
@import '~@delon/theme/styles/layout/default/index';
@import '~@delon/theme/styles/layout/fullscreen/index';`,
    },
    {
      key: `abc/index';`,
      insert: `
@import '~@delon/chart/index';`,
    },
  ].forEach(item => {
    const pos = content.indexOf(item.key);
    if (pos === -1) return;
    content = content.replace(item.key, item.key + item.insert);
  });

  host.overwrite(filePath, content);
}

function fixDefaultHtml(host: Tree, context: SchematicContext) {
  const filePath = 'src/app/layout/default/default.component.html';
  if (!host.exists(filePath)) {
    console.log(`Default layout not found in [${filePath}]`);
    return;
  }

  DOM.replace(
    host.read(filePath).toString(),
    [
      {
        type: 'attr',
        name: 'class',
        rules: [
          {
            type: 'class-name',
            value: 'router-progress-bar',
            newValue: 'alain-default__progress-bar',
          },
          {
            type: 'class-name',
            value: 'header',
            newValue: 'alain-default__header',
          },
          {
            type: 'class-name',
            value: 'aside',
            newValue: 'alain-default__aside',
          },
          {
            type: 'class-name',
            value: 'content',
            newValue: 'alain-default__content',
          },
          {
            type: 'remove-wrap-element-by-class',
            value: 'wrapper',
          },
        ],
      },
    ],
    dom => {
      host.overwrite(filePath, DOM.prettify(dom));
    },
  );
}

function fixDefaultTs(host: Tree, context: SchematicContext) {
  const filePath = 'src/app/layout/default/default.component.ts';
  if (!host.exists(filePath)) {
    console.log(`Default layout not found in [${filePath}]`);
    return;
  }

  updateComponentMetadata(host, filePath, (node: ts.ObjectLiteralExpression) => {
    const end = node.properties[node.properties.length - 1].end;
    const toInsert = `,
  host: {
    '[class.alain-default]': 'true',
  }`;
    return [new InsertChange(filePath, end, toInsert)];
  });
}

function fixFullScreenTs(host: Tree, context: SchematicContext) {
  const filePath = 'src/app/layout/fullscreen/fullscreen.component.ts';
  if (!host.exists(filePath)) {
    console.log(`FullScreen layout not found in [${filePath}]`);
    return;
  }

  updateComponentMetadata(host, filePath, (node: ts.ObjectLiteralExpression) => {
    const end = node.properties[node.properties.length - 1].end;
    const toInsert = `,
  host: {
    '[class.alain-fullscreen]': 'true',
  }`;
    return [new InsertChange(filePath, end, toInsert)];
  });
}

function fixHeaderHtml(host: Tree, context: SchematicContext) {
  const filePath = 'src/app/layout/default/header/header.component.html';
  if (!host.exists(filePath)) {
    console.log(`Default layout not found in [${filePath}]`);
    return;
  }

  DOM.replace(
    host.read(filePath).toString(),
    [
      {
        type: 'attr',
        name: 'class',
        rules: [
          {
            type: 'class-name',
            value: 'logo',
            newValue: 'alain-default__header-logo',
          },
          {
            type: 'class-name',
            value: 'expanded',
            newValue: 'alain-default__header-logo-expanded',
          },
          {
            type: 'class-name',
            value: 'collapsed',
            newValue: 'alain-default__header-logo-collapsed',
          },
          {
            type: 'class-name',
            value: 'top-nav-wrap',
            newValue: 'alain-default__nav-wrap',
          },
          {
            type: 'class-name',
            value: 'top-nav',
            newValue: 'alain-default__nav',
          },
          {
            type: 'class-name',
            value: 'item',
            newValue: 'alain-default__nav-item',
          },
          {
            type: 'class-name',
            value: 'hidden-xs',
            newValue: 'hidden-mobile',
          },
          {
            type: 'class-name',
            value: 'header-search',
            newValue: 'alain-default__search',
          },
        ],
      },
      {
        type: 'tag',
        name: 'a',
        custom: dom => {
          if (
            dom.parent != null &&
            dom.parent.attribs &&
            (dom.parent.attribs['class'] || '').includes(
              'alain-default__header-logo',
            )
          ) {
            const classes = (dom.attribs['class'] || '').split(' ');
            classes.push('alain-default__header-logo-link');
            dom.attribs['class'] = classes.join(' ');
          }
        },
      },
    ],
    dom => {
      host.overwrite(filePath, DOM.prettify(dom));
    },
  );
}

function fixSidebarHtml(host: Tree, context: SchematicContext) {
  const filePath = 'src/app/layout/default/sidebar/sidebar.component.html';
  if (!host.exists(filePath)) {
    console.log(`Default layout not found in [${filePath}]`);
    return;
  }

  DOM.replace(
    host.read(filePath).toString(),
    [
      {
        type: 'attr',
        name: 'class',
        rules: [
          {
            type: 'class-name',
            value: 'aside-inner',
            newValue: 'alain-default__aside-inner',
          },
          {
            type: 'class-name',
            value: 'user-block',
            newValue: 'alain-default__aside-user',
          },
          {
            type: 'class-name',
            value: 'avatar',
            newValue: 'alain-default__aside-user-avatar',
          },
          {
            type: 'class-name',
            value: 'user-block-dropdown',
            newValue: '',
          },
          {
            type: 'class-name',
            value: 'info',
            newValue: 'alain-default__aside-user-info',
          },
        ],
      },
    ],
    dom => {
      host.overwrite(filePath, DOM.prettify(dom));
    },
  );
}

export function v2LayoutRule(): Rule {
  return (host: Tree, context: SchematicContext) => {
    fixVersion(host, context);

    fixStyles(host, context);
    fixDefaultHtml(host, context);
    fixDefaultTs(host, context);
    fixHeaderHtml(host, context);
    fixClass(
      host,
      `src/app/layout/default/header/components/search.component.ts`,
      {
        'header-search__focus': 'alain-default__search-focus',
        'header-search__toggled': 'alain-default__search-toggled',
      },
    );
    fixSidebarHtml(host, context);

    fixFullScreenTs(host, context);
  };
}
