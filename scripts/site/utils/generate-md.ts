import { escapeHTML, genAttr, isStandalone, isHeading, generateSluggedId } from './utils';
import { highlight } from '../converters/highlight';
const JsonML = require('jsonml.js/lib/utils');

const converters = [
    highlight()
].concat([
    [
        (node: any) => typeof node === 'string',
        (node: any) => node
    ],
    [
        (node: any) => JsonML.isElement(node) && isHeading(node),
        (node: any, index: number) => {
            const tagName = JsonML.getTagName(node);
            const children = JsonML.getChildren(node);
            const sluggedId = generateSluggedId(children).id;
            // <a href="#${sluggedId}" class="anchor">#</a>
            return `<${tagName} id="${sluggedId}">${children.map(toHtml).join('')}<a onclick="window.location.hash = '${sluggedId}'" class="anchor">#</a></${tagName}>`;
        }
    ],
    [
        (node: any) => JsonML.isElement(node) && JsonML.getTagName(node) === 'img',
        (node: any, index: number) => {
            const attrs = JsonML.getAttributes(node);
            const ret: any[] = [];
            if (attrs) {
                // tslint:disable-next-line:forin
                for (const key in attrs) {
                    let value = attrs[key];
                    if (key === 'src' && ~value.indexOf(' | ')) {
                        const imgWH = value.split(' | ')[1].trim().split('=');
                        for (let i = 0; i < imgWH.length; i += 2) {
                            ret.push(`${imgWH[i]}=${imgWH[i + 1]}`);
                        }
                        value = value.split(' | ')[0];
                    }
                    if (value) ret.push(`${key}="${value}"`);
                }
            }
            return `<img ${ret.join(' ')} />`;
        }
    ],
    [
        (node: any) => JsonML.isElement(node) && JsonML.getTagName(node) === 'a',
        (node: any, index: number) => {
            const attrs = Object.assign({ }, JsonML.getAttributes(node));
            let target = attrs.href.startsWith('//') || attrs.href.startsWith('http') ? ' target="_blank"' : '';
            if (~attrs.href.indexOf('ng-alain.com')) target = '';
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
