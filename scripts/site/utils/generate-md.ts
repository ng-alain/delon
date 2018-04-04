import { escapeHTML, genAttr, isStandalone } from './utils';
import { highlight } from '../converters/highlight';
import { site } from '../converters/site';
const JsonML = require('jsonml.js/lib/utils');

const converters = [
    highlight()
].concat(site()).concat([
    [
        (node: any) => typeof node === 'string',
        (node: any) => node
    ],
    [
        (node: any) => JsonML.isElement(node) && JsonML.getTagName(node) === 'a',
        (node: any, index: number) => {
            const attrs = Object.assign({ }, JsonML.getAttributes(node));
            let target = attrs.href.startsWith('//') || attrs.href.startsWith('http') ? ' target="_blank"' : '';
            if (~attrs.href.indexOf('cipchk.github.io/ngx-weui')) target = '';
            return `<a${target} href="${attrs.href}">${JsonML.getChildren(node).map(toHtml).join('')}</a>`;
        }
    ],
    [
        () => true,
        (node: any) => {
            const tagName = JsonML.getTagName(node);
            const attrs = genAttr(Object.assign({ }, JsonML.getAttributes(node)));
            return `${tagName ? `<${tagName}${attrs ? ' ' + attrs : ''}>` : ''}${isStandalone(tagName) ? '' : JsonML.getChildren(node).map(toHtml).join('') + (tagName ? `</${tagName}>` : '')}`;
        }
    ]
]);

export function toHtml(markdownData: any, codeEscape: boolean = true) {
    const pair: any = converters.filter((converter: any) => {
        return converter[0](markdownData);
    })[0];
    const ret: string = pair[1](markdownData);
    if (codeEscape) {
        return ret.replace(/<pre class="hljs language-([html|ts|typescript]+)"><code>([\s\S]*)<\/code><\/pre>/g, (fullWord: any, lang: any, code: any) => {
            return `<pre class="hljs language-$1"><code>${escapeHTML(code)}</code></pre>`;
        });
    }
    return ret;
}

function fixAngular(html: string): string {
    return html.replace(/<code>(.*?)<\/code>/img, (fullWord: string, content: string) => {
        if (~content.indexOf('<')) {
            return `<code>${content.replace('<', '&lt;')}</code>`;
        }
        return fullWord;
    });
}

export function generateMd(markdownData: any) {
    const contentChildren = JsonML.getChildren(markdownData.content);
    const apiStartIndex = contentChildren.findIndex((node: any) =>
        JsonML.getTagName(node) === 'h2' &&
        /^API/.test(JsonML.getChildren(node)[0])
    );

    const ret: any = { };

    if (apiStartIndex > -1) {
        const content = contentChildren.slice(0, apiStartIndex);
        ret.content = [''].concat(content);

        const api = contentChildren.slice(apiStartIndex);
        ret.api = [''].concat(api);
    } else {
        ret.content = markdownData.content;
    }

    if (ret.content)
        ret.content = fixAngular(toHtml(ret.content));

    if (ret.api)
        ret.api = fixAngular(toHtml(ret.api));

    return ret;
}
