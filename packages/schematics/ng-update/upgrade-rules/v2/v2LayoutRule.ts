import { Rule, Tree, SchematicContext } from '@angular-devkit/schematics';
import { DomService } from '../../dom/dom.service';
import { updateComponentMetadata } from '../../../utils/ast';
import { InsertChange } from '../../../utils/devkit-utils/change';

const DOM = new DomService();

function fixDefaultHtml(tree: Tree, context: SchematicContext) {
  const filePath = 'src/app/layout/default/default.component.html';
  if (!tree.exists(filePath)) {
    console.log(`Default layout not found in [${filePath}]`);
    return;
  }

  DOM.replace(
    tree.read(filePath).toString(),
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
      tree.overwrite(filePath, DOM.prettify(dom));
    },
  );
}

function fixDefaultTs(tree: Tree, context: SchematicContext) {
  const filePath = 'src/app/layout/default/default.component.ts';
  if (!tree.exists(filePath)) {
    console.log(`Default layout not found in [${filePath}]`);
    return;
  }

  updateComponentMetadata(tree, filePath, nodes => {
    let children = (nodes[0] as any)!.properties;
    const end = children[children.length - 1].end;
    const toInsert = `,
  preserveWhitespaces: false,
  host: {
    '[class.alain-default]': 'true',
  }`;
    return [new InsertChange(filePath, end, toInsert)];
  });
}

function fixFullScreenTs(tree: Tree, context: SchematicContext) {
  const filePath = 'src/app/layout/fullscreen/fullscreen.component.ts';
  if (!tree.exists(filePath)) {
    console.log(`FullScreen layout not found in [${filePath}]`);
    return;
  }

  updateComponentMetadata(tree, filePath, nodes => {
    let children = (nodes[0] as any)!.properties;
    const end = children[children.length - 1].end;
    const toInsert = `,
  host: {
    '[class.alain-fullscreen]': 'true',
  }`;
    return [new InsertChange(filePath, end, toInsert)];
  });
}

function fixHeaderHtml(tree: Tree, context: SchematicContext) {
  const filePath = 'src/app/layout/default/header/header.component.html';
  if (!tree.exists(filePath)) {
    console.log(`Default layout not found in [${filePath}]`);
    return;
  }

  DOM.replace(
    tree.read(filePath).toString(),
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
      tree.overwrite(filePath, DOM.prettify(dom));
    },
  );
}

function fixSidebarHtml(tree: Tree, context: SchematicContext) {
  const filePath = 'src/app/layout/default/sidebar/sidebar.component.html';
  if (!tree.exists(filePath)) {
    console.log(`Default layout not found in [${filePath}]`);
    return;
  }

  DOM.replace(
    tree.read(filePath).toString(),
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
      tree.overwrite(filePath, DOM.prettify(dom));
    },
  );
}

export function v2LayoutRule(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    fixDefaultHtml(tree, context);
    fixDefaultTs(tree, context);
    fixHeaderHtml(tree, context);
    fixSidebarHtml(tree, context);

    fixFullScreenTs(tree, context);
  };
}
