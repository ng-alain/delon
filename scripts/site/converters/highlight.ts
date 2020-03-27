const JsonML = require('jsonml.js/lib/utils');
import { getCode } from '../utils/utils';

export function highlight() {
  return [
    (node: any) => JsonML.isElement(node) && JsonML.getTagName(node) === 'pre',
    (node: any, index: number) => {
      const attr = JsonML.getAttributes(node);
      return `<pre class="hljs language-${attr.lang}"><code>${getCode(node)}</code></pre>`;
    },
  ];
}
