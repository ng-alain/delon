import * as htmlparser2 from 'htmlparser2';
const DOMHandler = require('domhandler');
import { VDom, ConvertRule, ConvertAction } from './interfaces';

export class DomService {
  private dom: VDom[];
  private rules: ConvertAction[] = [];
  private ingoreClosedTag = ['input', 'img', 'br', 'hr', 'col'];

  replace(
    html: string,
    rules: ConvertAction[],
    callback: (dom: VDom[]) => void,
  ) {
    this.rules = rules;
    const handler = new DOMHandler((error, dom) => {
      if (error) {
        callback(null);
        return;
      }

      this.dom = dom;
      this.parseRule();

      callback(dom);
    });

    const parser = new htmlparser2.Parser(handler, <htmlparser2.Options>{
      lowerCaseTags: false,
      lowerCaseAttributeNames: false,
    });

    parser.write(html.replace(/\n|\s\s/g, ' ').trim());
    parser.done();
  }

  private parseRule() {
    const inFn = (list: VDom[]) => {
      for (const item of list) {
        if (
          item.type === 'text' &&
          (!item.next || item.data.trim().length === 0)
        ) {
          continue;
        }

        this.resolveTagName(item);

        if (item && item.children && item.children.length > 0) {
          inFn(item.children);
        }
      }
    };

    inFn(this.dom);
  }

  private resolveTagName(dom: VDom) {
    if (!dom.name) return;
    const action = this.rules.find(w => w.name === dom.name);
    if (!action) return;
    for (const rule of action.rules) {
      this.resolveRule(dom, rule, action);
    }
    if (action.custom) action.custom(dom);
  }

  private resolveRule(dom: VDom, rule: ConvertRule, action: ConvertAction) {
    switch (rule.type) {
      case 'name':
        this.resolveName(dom, rule);
        break;
      case 'attr-name':
        this.resolveAttrName(dom, rule);
        break;
      case 'remove-child':
        this.resolveRemoveChild(dom, rule.value);
        break;
      case 'remove-child-template-attr':
        this.resolveRemoveChildTemplateAttr(dom, rule.value);
        break;
      case 'change-tag-to-text':
        this.resolveChangeTagToText(dom, rule.value);
        break;
      case 'name-to-attr':
        this.resolveNameToAttr(dom, rule.value, rule);
        break;
      case 'attr-to-name':
        this.resolveAttrToName(dom, action.name, rule);
        break;
      case 'add-template-atrr':
        this.resolveAddTemplateAtrr(dom, action.name, rule);
        break;
      case 'add-content-to-template':
        this.resolveAddContentToTemplate(dom, action.name, rule);
        break;
      case 'add-prefix-name-template':
        this.resolveAddPrefixToTemplate(dom, action.name, rule);
        break;
      case 'extra':
        this.resolveExtra(dom, rule);
        break;
    }
  }

  private resolveName(dom: VDom, rule: ConvertRule) {
    dom.name = rule.value;
    this.resolveExtra(dom, rule);
  }

  private resolveAttrName(el: VDom, rule: ConvertRule) {
    Object.keys(el.attribs)
      .filter(w => w === rule.value)
      .forEach(key => {
        el.attribs[rule.newValue] = el.attribs[key];
        delete el.attribs[key];
      });
    Object.keys(el.attribs)
      .filter(w => w === `[${rule.value}]`)
      .forEach(key => {
        el.attribs[`[${rule.newValue}]`] = el.attribs[key];
        delete el.attribs[key];
      });
    this.resolveExtra(el, rule);
  }

  private resolveRemoveChild(dom: VDom, name: string) {
    if (!dom.children || dom.children.length === 0) return;
    const has = dom.children.find(w => w.name === name);
    if (has) dom.children = has.children;
  }

  private resolveRemoveChildTemplateAttr(dom: VDom, attrName: string) {
    if (!dom.children || dom.children.length === 0) return;
    const idx = dom.children.findIndex(
      w =>
        w.name === 'ng-template' && typeof w.attribs[attrName] !== 'undefined',
    );
    if (idx !== -1) {
      dom.children.push(...dom.children[idx].children);
      dom.children.splice(idx, 1);
    }
  }

  private resolveChangeTagToText(dom: VDom, clearTagName: string) {
    if (!dom.children || dom.children.length === 0) return;
    const has = dom.children.find(w => w.name === clearTagName);
    if (has) {
      has.data = has.children[0].data;
      has.type = 'text';
    }
  }

  private resolveNameToAttr(dom: VDom, tagName: string, rule: ConvertRule) {
    dom.attribs[dom.name] = '';
    dom.name = tagName;
    this.resolveExtra(dom, rule);
  }

  /** 将属性转化为元素 */
  private resolveAttrToName(dom: VDom, tagName: string, rule: ConvertRule) {
    dom.name = tagName;
    delete dom.attribs[tagName];
    this.resolveExtra(dom, rule);
  }

  /** 添加未指定属性名的 ng-template */
  private resolveAddTemplateAtrr(
    dom: VDom,
    attrName: string,
    rule: ConvertRule,
  ) {
    const ngDom = dom.children.find(
      w =>
        w.type === 'tag' &&
        w.name === 'ng-template' &&
        typeof w.attribs[`#${rule.value}`] !== 'undefined',
    );
    if (ngDom) {
      dom.attribs[`[${rule.extra_name || rule.value}]`] = rule.value;
    }
    this.resolveExtra(dom, rule);
  }

  /** 除 ng-template 以外所有子项都应该包裹至 rule.value 下面 */
  private resolveAddContentToTemplate(
    dom: VDom,
    attrName: string,
    rule: ConvertRule,
  ) {
    if (dom.children.length === 0) return;

    const contentList = dom.children.filter(w => w.name !== 'ng-template');
    if (contentList.length === 0) return;

    const ngList = dom.children.filter(w => w.name === 'ng-template');
    if (contentList.length > 0) {
      dom.attribs[`[${rule.extra_name || rule.value}]`] = rule.value;
      dom.children = [
        ...ngList,
        {
          attribs: { [`#${rule.value}`]: '' },
          children: contentList,
          type: 'tag',
          name: 'ng-template',
        },
      ];
    }
  }

  /** 为所有 ng-template 名称增加一个前缀 */
  private resolveAddPrefixToTemplate(
    dom: VDom,
    attrName: string,
    rule: ConvertRule,
  ) {
    Object.keys(dom.attribs).forEach(k => {
      const ngDom = dom.children.find(
        s =>
          s.type === 'tag' &&
          s.name === 'ng-template' &&
          typeof s.attribs[`#${dom.attribs[k]}`] !== 'undefined',
      );
      if (!ngDom) return;
      const name = dom.attribs[k];
      const newName = `${rule.value}${name
        .substr(0, 1)
        .toUpperCase()}${name.substr(1)}`;
      // ng-template
      delete ngDom.attribs[`#${name}`];
      ngDom.attribs[`#${newName}`] = '';
      // current dom
      dom.attribs[k] = newName;
    });
  }

  private resolveExtra(dom: VDom, rule: ConvertRule) {
    if (rule.extra_insert_attrs) {
      dom.attribs = Object.assign(dom.attribs, rule.extra_insert_attrs);
    }
    if (rule.extra_replace_attrs) {
      Object.keys(dom.attribs).forEach(key => {
        if (rule.extra_replace_attrs[key]) {
          const value = dom.attribs[key] + '';
          delete dom.attribs[key];
          dom.attribs[rule.extra_replace_attrs[key]] = value;
        }
      });
    }
    if (rule.extra_remove_attrs && rule.extra_remove_attrs.length) {
      rule.extra_remove_attrs.forEach(key => delete dom.attribs[key]);
    }
    if (rule.extra_update_attrs) {
      Object.keys(dom.attribs).forEach(key => {
        if (rule.extra_update_attrs[key]) {
          dom.attribs[key] = rule.extra_update_attrs[key].replace(
            '{0}',
            dom.attribs[key],
          );
        }
      });
    }
  }

  prettify(dom: VDom[]): string {
    const result = [];

    const inFn = (list: VDom[], deep: number) => {
      for (const item of list) {
        if (item.type === 'text') {
          if (item.data.trim().length === 0) continue;
          result.push(`${this.genTab(deep)}${item.data.trim()}`);
          continue;
        }

        if (!item.children || item.children.length === 0) {
          let html = `${this.genTab(deep)}<${item.name}${this.genAttr(
            item.attribs,
          )}>`;
          if (this.ingoreClosedTag.indexOf(item.name) === -1)
            html += `</${item.name}>`;
          result.push(html);
          continue;
        }

        if (
          item.children &&
          item.children.length === 1 &&
          item.children[0].type === 'text'
        ) {
          result.push(
            `${this.genTab(deep)}<${item.name}${this.genAttr(
              item.attribs,
            )}>${item.children[0].data.trim()}</${item.name}>`,
          );
          continue;
        }

        result.push(
          `${this.genTab(deep)}<${item.name}${this.genAttr(item.attribs)}>`,
        );

        if (item && item.children && item.children.length > 0) {
          inFn(item.children, deep + 1);
        }

        if (this.ingoreClosedTag.indexOf(item.name) === -1) {
          result.push(`${this.genTab(deep)}</${item.name}>`);
        }
      }
    };

    inFn(dom, 0);

    return result.join('\n');
  }

  private genAttr(attr: Object): string {
    const keys = Object.keys(attr || {});
    if (keys.length === 0) return '';
    const result = [];
    keys.forEach(key => {
      const val = attr[key] + '';
      if (val && val.length > 0) result.push(`${key}="${attr[key]}"`);
      else result.push(key);
    });
    return ' ' + result.join(' ');
  }

  private genTab(count: number): string {
    return Array(count)
      .fill('  ')
      .join('');
  }
}
