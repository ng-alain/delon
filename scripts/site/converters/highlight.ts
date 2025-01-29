import { getCode } from '../utils/utils';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const JsonML = require('jsonml.js/lib/utils');

export function highlight(): any {
  return [
    (node: any) => JsonML.isElement(node) && JsonML.getTagName(node) === 'pre',
    (node: any) => {
      const attr = JsonML.getAttributes(node);
      return `<pre class="hljs language-${attr.lang}"><code>${getCode(node)}</code></pre>`;
    }
  ];
}
