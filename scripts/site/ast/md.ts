import { Marked, Renderer, RendererObject } from 'marked';
import { parseFragment, serialize } from 'parse5';

import { idSlug } from './util';

const DIRECTIVE_REGEX = /^\[[a-zA-Z-]+]/;
const SERVICE_REGEX = /^[a-zA-Z]+Service$/;

function createLabel(label: 'component' | 'directive' | 'service'): string {
  return `<label class="api-type-label ${label}">${label}</label>`;
}

function getRenderer(marked: Marked): RendererObject {
  const originLinkHandler = new Renderer()?.link;
  return {
    link(params) {
      const { href } = params;
      const str = originLinkHandler?.call(this, params) ?? '';
      const a = parseFragment(str, {});
      /**
       * @description If the link is an anchor tag and the href is not an absolute path, open it in a new window
       */
      if (a && a.childNodes[0] && a.childNodes[0].nodeName === 'a') {
        if (!/^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/).*/.test(href)) {
          // Open absolute path in new window
          a.childNodes[0].attrs.push({
            name: 'target',
            value: '_blank'
          });
          a.childNodes[0].attrs.push({
            name: 'rel',
            value: 'noopener'
          });
        }
        return serialize(a);
      }

      return str;
    },
    heading({ text, depth }) {
      const title = marked.parseInline(text, { async: false });
      const id = idSlug(title);
      const isMarkedLabel = depth === 3 && title.indexOf('nz-') === 0;
      const isDirective = DIRECTIVE_REGEX.test(title);
      const isComponent = isMarkedLabel && !isDirective;
      const isService = SERVICE_REGEX.test(title);

      let head = `<h${depth} id="${id}"><a class="lake-link"><i data-anchor="${id}"></i></a>${title}`;
      // <h3 id="创建NG-ALAIN项目"><a class="lake-link"><i data-anchor="创建NG-ALAIN项目"></i></a>创建NG-ALAIN项目</h3>
      const anchor = `</h${depth}>`;

      if (isComponent) {
        head += createLabel('component');
      } else if (isDirective) {
        head += createLabel('directive');
      } else if (isService) {
        head += createLabel('service');
      }

      return head + anchor;
    },
    def({ href }) {
      const match = href.match(/^demo\((.+?)\)$/);
      if (!match) {
        return '';
      }
      return `<example-${match[1]}-index />`;
    }
  };
}

const marked = new Marked();

marked.use({ renderer: getRenderer(marked) });

export default marked;
