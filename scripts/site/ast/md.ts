import { Marked, Renderer, RendererObject, TokenizerAndRendererExtension, Tokens } from 'marked';
import { parseFragment, serialize } from 'parse5';

import { idSlug } from './util';

const DIRECTIVE_REGEX = /^\[[a-zA-Z-]+]/;
const SERVICE_REGEX = /^[a-zA-Z]+Service$/;
const IMAGE_WITH_WIDTH_REGEX = /^!\\?\[([^\]]*)]\s*\\?\((.+?)\s*\|\s*width=(\d+)\s*\\?\)/;

type ImageWithWidthToken = Tokens.Generic & {
  type: 'imageWithWidth';
  text: string;
  href: string;
  width: string;
};

function escapeHtmlAttr(value: string): string {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function unescapeMarkdown(value: string): string {
  return value.replace(/\\([\\`*_{}\\[\]()#+\-.!|])/g, '$1');
}

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

function getExtensions(): TokenizerAndRendererExtension[] {
  return [
    {
      name: 'imageWithWidth',
      level: 'inline',
      start(src) {
        const plainIndex = src.indexOf('![');
        const escapedIndex = src.indexOf('!\\[');
        if (plainIndex === -1) {
          return escapedIndex > -1 ? escapedIndex : undefined;
        }
        if (escapedIndex === -1) {
          return plainIndex;
        }
        return Math.min(plainIndex, escapedIndex);
      },
      tokenizer(src) {
        const match = IMAGE_WITH_WIDTH_REGEX.exec(src);
        if (!match) {
          return undefined;
        }
        const [, text, href, width] = match;
        const token: ImageWithWidthToken = {
          type: 'imageWithWidth',
          raw: match[0],
          text: unescapeMarkdown(text),
          href: unescapeMarkdown(href),
          width
        };
        return token;
      },
      renderer(token) {
        const imageToken = token as ImageWithWidthToken;
        return `<img src="${escapeHtmlAttr(imageToken.href)}" alt="${escapeHtmlAttr(imageToken.text)}" width="${imageToken.width}" loading="lazy">`;
      }
    }
  ];
}

const marked = new Marked();

marked.use({
  extensions: getExtensions(),
  renderer: getRenderer(marked)
});

export default marked;
