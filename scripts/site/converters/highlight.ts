/* eslint-disable @typescript-eslint/no-explicit-any */
import { getCode } from '../utils/utils';

const JsonML = require('jsonml.js/lib/utils');

export function highlight(): any {
  return [
    (node: any) => JsonML.isElement(node) && JsonML.getTagName(node) === 'pre',
    (node: any, index: number) => {
      const attr = JsonML.getAttributes(node);
      return `<pre class="hljs language-${attr.lang}"><code>${getCode(node)}</code></pre>`;
    }
  ];
}
