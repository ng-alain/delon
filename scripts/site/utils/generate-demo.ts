import * as path from 'path';
import * as fs from 'fs';
import * as fse from 'fs-extra';
import { parseMd } from './parse-md';
import { getCode, genUpperName, genUrl } from './utils';
import { toHtml } from './generate-md';
const MT = require('mark-twain');
const JsonML = require('jsonml.js/lib/utils');

export function generateDemo(rootDir: string, key: string, dir: string, cols: number, config: any, siteConfig: any) {
    const ret: { tpl: { left: string[], right: string[] }, data: any[] } = {
        tpl: {
            left: [],
            right: []
        },
        data: []
    };

    if (!fse.pathExistsSync(dir)) return ret;

    const demos: any[] = fse.readdirSync(dir).map(name => {
        const filePath = path.join(dir, name);
        let mt = null;
        try {
            mt = MT(fse.readFileSync(filePath, { encoding: 'utf-8' }));
        } catch (err) {
            console.error(`invalid ${filePath}`, err);
            return;
        }
        mt.name = name.replace('.md', '');
        mt.filePath = filePath;
        return mt;
    });

    if (demos.length <= 0) return ret;
    const isTwo = cols > 1;
    let point = 0;
    demos.sort((a: any, b: any) => a.meta.order - b.meta.order).forEach((markdownData: any, index: number) => {
        const item: any = {
            id: `${config.name}-${key}-${markdownData.name}`,
            meta: markdownData.meta,
            summary: ``,
            code: ``,
            name: markdownData.name,
            urls: genUrl(rootDir, markdownData.filePath)
        };

        const contentChildren = JsonML.getChildren(markdownData.content);
        const codeStartIndex = contentChildren.findIndex((node: any) => JsonML.getTagName(node) === 'pre');

        if (codeStartIndex > -1) {
            item.summary = [''].concat(contentChildren.slice(0, codeStartIndex));

            const codeNodes = contentChildren.slice(codeStartIndex);
            if (codeNodes.length > 0) {
                const attr = JsonML.getAttributes(codeNodes[0]);
                item.code = getCode(codeNodes[0]);
                item.lang = attr.lang;
            }
        } else {
            item.summary = markdownData.content;
        }
        // parse languages
        const summaryChildren = JsonML.getChildren(item.summary);
        const summaryLangIdx = summaryChildren.findIndex((node: any) => JsonML.getTagName(node) === 'h2');
        if (summaryLangIdx !== -1) {
            const summaryRet: any = {};
            for (let i = 0; i < summaryChildren.length; i++) {
                const summaryNode = summaryChildren[i];
                const summaryLang = '' + summaryNode[1];
                if (JsonML.getTagName(summaryNode) === 'h2' && ~siteConfig.theme.langs.indexOf(summaryLang)) {
                    const nextLangPos = summaryChildren.slice(i + 1).findIndex((node: any) => JsonML.getTagName(node) === 'h2');
                    summaryRet[summaryLang] = [''].concat(nextLangPos === -1 ? summaryChildren.slice(i + 1) : summaryChildren.slice(i + 1, nextLangPos + 1));
                    if (nextLangPos === -1) break;
                    i = nextLangPos;
                }
            }
            item.summary = summaryRet;
            // tslint:disable-next-line:forin
            for (const lang in item.summary) {
                item.summary[lang] = toHtml(item.summary[lang]);
            }
        } else {
            item.summary = toHtml(item.summary);
        }

        // replace component name
        item.componentName = `${genUpperName(item.id)}Component`;
        item.code = ('' + item.code)
                        .replace(/selector:[ ]?(['|"|`])([^'"`]+)/g, `selector: $1${item.id}`)
                        .replace(/export class ([^ {]+)/g, `export class ${item.componentName}`);
        // save demo component
        const filePath = path.join(rootDir, config.dist, key, `${markdownData.name}.ts`);
        fse.ensureDirSync(path.dirname(filePath));
        fs.writeFileSync(filePath, item.code, { flag: 'w+' });
        // generate doc component template
        const pos = isTwo ? index % 2 === 0 ? 'left' : 'right' : 'left';
        ret.tpl[pos].push(`
            <code-box [item]="codes[${point}]" [attr.id]="codes[${point}].id">
                <${item.id}></${item.id}>
            </code-box>
        `);
        item.point = point;
        ret.data.push(item);

        point++;
    });
    return ret;
}
