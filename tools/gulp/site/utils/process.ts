// tslint:disable
import chalk from 'chalk';
import * as path from 'path';
import * as fs from 'fs';
import { highlight, site } from '../converters';
import { toc } from '../plugins';
import { isStandalone, getCode, escapeHTML, genAttr } from '../utils/utils';
const mkdirp = require('mkdirp');
const through = require('through2');
const MT = require('mark-twain');
const mustache = require('mustache');
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

function toHtml(markdownData: any, codeEscape: boolean = true) {
    const pair:any = converters.filter((converter: any) => {
        return converter[0](markdownData);
    })[0];
    let ret: string = pair[1](markdownData);
    if (codeEscape) {
        return ret.replace(/<pre class="hljs language-([html|ts|typescript]+)"><code>([\s\S]*)<\/code><\/pre>/g, (fullWord: any, lang: any, code: any) => {
            return `<pre class="hljs language-$1"><code>${escapeHTML(code)}</code></pre>`;
        });
    }
    return ret;
}

export function gen(config: any) {
    const files: any[] = [];
    const results: any[] = [];
    if (!config.ignores)
        config.ignores = [];
    else {
        const newIgnores = [];
        for (const ignorePath of config.ignores) {
            newIgnores.push(path.join(process.cwd(), ignorePath));
        }
        config.ignores = newIgnores;
    }

    function bufferContents(file: any, enc: any, cb: any) {
        // ignore empty files
        if (file.isNull()) {
            cb();
            return;
        }

        // ignore streams
        if (file.isStream()) {
            this.emit('error', new Error('Streaming not supported'));
            cb();
            return;
        }

        if (~config.ignores.indexOf(file.path)) {
            cb();
            return;
        }

        let mt: any = null;
        try {
            mt = MT(file.contents);
        } catch (err) {
            console.log(chalk.red(`markdown解析失败：${file.relative}`, err));
            this.emit('error', new Error(`markdown解析失败：${file.relative}`));
            cb();
            return;
        }

        // todo: test
        // if (file.path.indexOf('getting-started') === -1) {
        //     cb();
        //     return;
        // }

        // 同一目录下，不同语言文件解析至同一个对象中
        const arr = file.relative.split(path.sep);
        const nameArr = arr[0].split('.');
        const name = nameArr[0] === `index` ? path.dirname(file.relative) : nameArr[0];
        let item = files.find(w => w.path === file.base && w.name === name);
        if (!item) {
            item = {
                data: {},
                cwd: file.cwd,
                path: file.base,
                name: name,
                i18n: nameArr.length === 3,
                demos: []
            };
            files.push(item);
        }
        if (arr.indexOf('demo') === -1)
            item.data[item.i18n ? nameArr[1] : config.theme.defaultLang] = mt;
        else {
            mt.name = arr[arr.length - 1].split('.')[0];
            mt.source = path.relative(file.cwd, file.path).replace(new RegExp('\\' + path.sep, 'g'), '/');
            item.demos.push(mt);
        }

        cb();
    }

    function convert() {
        files.forEach((i: any) => {

            for (const lang in i.data) {
                const item = i.data[lang];
                i.data[lang].toc = toc(item, config);
            }

        });

        genMeta();
        genPage();
    }

    function genMeta() {
        const tpl = {
            begin: `export const META: any = `,
            end: `;`
        };
        config.theme.meta = `${config.theme.dist}/meta.ts`;
        mkdirp.sync(path.dirname(config.theme.meta));
        let metaContent = fs.readFileSync(config.theme.meta, { flag: 'a+' }).toString().trim();
        if (metaContent.startsWith(tpl.begin))
            metaContent = metaContent.substr(tpl.begin.length);
        if (metaContent.endsWith(tpl.end))
            metaContent = metaContent.substr(0, metaContent.length - tpl.end.length);
        let json: any;
        try {
            json = JSON.parse(metaContent) || {};
        } catch (err) {
            json = {};
        }
        json.github = config.theme.github;
        if (!json.types || !Array.isArray(json.types))
            json.types = [];

        let group = (<any[]>json.types).find(w => w.name === config.name);
        if (!group) {
            group = {
                name: config.name,
                module: config.module,
                types: config.types
            };
            json.types.push(group);
        }
        // clear all data
        group.list = [];

        files.forEach((i: any) => {
            const langItem = i.data[config.theme.defaultLang];
            if (!langItem) return;

            const defLangMeta = langItem.meta || {};
            const groupItem: any = {
                name: i.name,
                i18n: i.i18n,
                module: config.module,
                order: defLangMeta.order || 0,
                cols: defLangMeta.cols || 1,
                meta: {}
            };

            for (const lang in i.data) {
                groupItem.meta[lang] = i.data[lang].meta;
                const metaItem = Object.assign({}, i.data[lang].meta);
                if (typeof metaItem.title === 'object') {
                    groupItem.meta[lang].title = '' + metaItem.title[lang];
                    if (!groupItem.i18n) {
                        for (const metaLang in metaItem.title) {
                            if (metaLang === lang) continue;
                            groupItem.meta[metaLang] = Object.assign({}, groupItem.meta[lang], {
                                title: metaItem.title[metaLang]
                            });
                        }
                    }
                }
            }

            group.list.push(groupItem);
        });

        fs.writeFileSync(config.theme.meta, tpl.begin + JSON.stringify(json) + tpl.end);
    }

    function genUpperName(name: string) {
        return name.split('-').map(v => v.charAt(0).toUpperCase() + v.slice(1)).join('');
    }

    function parseContent(markdownData: any, item: any) {
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
            ret.content = toHtml(ret.content);

        if (ret.api)
            ret.api = toHtml(ret.api);

        return ret;
    }

    function genContentObject(i: any): any {
        const ret: any = {
            cols: i.data[config.theme.defaultLang].meta.cols,
            source: {},
            content: {},
            toc: {}
        };
        const relPath = path.relative(i.cwd, i.path).replace(new RegExp('\\' + path.sep, 'g'), '/');

        // i18n
        if (i.i18n) {
            for (const lang in i.data) {
                ret.source[lang] = `${relPath}/${i.name}.${lang}.md`;
                ret.content[lang] = parseContent(i.data[lang], i);
                ret.toc[lang] = i.data[lang].toc;
            }
        } else {
            ret.source = `${relPath}/${i.name}${config.name === 'components' ? '/index' : ''}.md`;
            ret.content[config.theme.defaultLang] = parseContent(i.data[config.theme.defaultLang], i);
            ret.toc = i.data[config.theme.defaultLang].toc;
        }

        return ret;
    }

    function genDocFile(i: any) {
        const content = mustache.render(config.tpl.doc, i);
        const filePath = path.join(config.theme.dist, i.directoryName, i.name, `index.ts`);
        mkdirp.sync(path.dirname(filePath));
        fs.writeFileSync(filePath, content, { flag: 'w+' });
    }

    const modules: any = {
        imports: [],
        components: [],
        routes: []
    };

    function appendToModule(componentName: string, name: string, filename: string = 'index', needRouter: boolean = true) {
        modules.imports.push(`import { ${componentName} } from './${name}/${filename}';`);
        modules.components.push(componentName);
        if (needRouter) {
            if (modules.routes.length <= 0 && config.defaultRoute) {
                modules.routes.push(`{ path: '', redirectTo: '${config.defaultRoute}', pathMatch: 'full' }`);
            }
            modules.routes.push(`{ path: '${name}', component: ${componentName} }`);
        }
    }

    function genModule(i: any) {
        const content = mustache.render(config.tpl.module, i);
        const filePath = path.join(config.theme.dist, i.name, `${i.name}.module.ts`);
        mkdirp.sync(path.dirname(filePath));
        fs.writeFileSync(filePath, content, { flag: 'w+' });
    }

    function genPage() {

        const moduleName = genUpperName(config.name);

        files.forEach((i: any) => {

            // gen demo
            const demos = genDemo(i);

            const fileDataObj = genContentObject(i);
            fileDataObj.demo = demos.tpl.left.length > 0 || demos.tpl.right.length > 0;
            const demoHTML: string[] = [  ];
            if (fileDataObj.demo) {
                demoHTML.push(`<div nz-row [nzGutter]="16">`);
                if (demos.tpl.left.length > 0 && demos.tpl.right.length > 0) {
                    demoHTML.push(`<div nz-col nzSpan="12">${demos.tpl.left.join('')}</div>`);
                    demoHTML.push(`<div nz-col nzSpan="12">${demos.tpl.right.join('')}</div>`);
                } else {
                    demoHTML.push(`<div nz-col nzSpan="24">${demos.tpl.left.join('')}${demos.tpl.right.join('')}</div>`);
                }

                demoHTML.push('</div>');
            }

            const fileObj = {
                name: i.name,
                directoryName: config.name,
                componentName: `${moduleName}${genUpperName(i.name)}Component`,
                data: JSON.stringify(fileDataObj),
                demos: demoHTML.join(''),
                codes: JSON.stringify(demos.data)
            };
            // gen file
            genDocFile(fileObj);
            // append module
            appendToModule(fileObj.componentName, fileObj.name);
        });

        const moduleObj = {
            name: config.name,
            moduleName: moduleName,
            imports: modules.imports.join('\r\n'),
            components: modules.components.join(',\r\n'),
            routes: modules.routes.join(',\r\n')
        };
        genModule(moduleObj);
    }

    function genDemo(data: any): { tpl: { left: string[], right: string[] }, data: any[] } {
        const ret: { tpl: { left: string[], right: string[] }, data: any[] } = {
            tpl: {
                left: [],
                right: []
            },
            data: []
        };
        if (data.demos.length <= 0) return ret;
        const isTwo = data.data[config.theme.defaultLang].meta.cols > 1;
        let point = 0;
        data.demos.sort((a: any, b: any) => a.meta.order - b.meta.order).forEach((markdownData: any, index: number) => {
            const item: any = {
                id: `${config.name}-${data.name}-${markdownData.name}`,
                meta: markdownData.meta,
                source: markdownData.source,
                lang: 'ts',
                summary: ``,
                code: ``
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
            let summaryLangIdx = summaryChildren.findIndex((node: any) => JsonML.getTagName(node) === 'h2');
            if (summaryLangIdx !== -1) {
                let summaryRet: any = {};
                for (let i = 0; i < summaryChildren.length; i++) {
                    const summaryNode = summaryChildren[i];
                    const summaryLang = '' + summaryNode[1];
                    if (JsonML.getTagName(summaryNode) === 'h2' && ~config.theme.langs.indexOf(summaryLang)) {
                        const nextLangPos = summaryChildren.slice(i + 1).findIndex((node: any) => JsonML.getTagName(node) === 'h2');
                        summaryRet[summaryLang] = [''].concat(nextLangPos === -1 ? summaryChildren.slice(i + 1) : summaryChildren.slice(i + 1, nextLangPos + 1));
                        if (nextLangPos === -1) break;
                        i = nextLangPos;
                    }
                }
                item.summary = summaryRet;
                for (const lang in item.summary) {
                    item.summary[lang] = toHtml(item.summary[lang]);
                }
            } else {
                item.summary = toHtml(item.summary);
            }

            ret.data.push(item);
            // replace component name
            const componentName = `${genUpperName(item.id)}Component`;
            const code = ('' + item.code)
                            .replace(/selector:[ ]?(['|"|`])([^'"`]+)/g, `selector: $1${item.id}`)
                            .replace(/export class ([^ {]+)/g, `export class ${componentName}`);
            // save demo component
            const filePath = path.join(config.theme.dist, config.name, data.name, `${markdownData.name}.ts`);
            mkdirp.sync(path.dirname(filePath));
            fs.writeFileSync(filePath, code, { flag: 'w+' });
            // generate doc component template
            const pos = isTwo ? index % 2 === 0 ? 'left' : 'right' : 'left';
            ret.tpl[pos].push(`
                <code-box [item]="codes[${point}]" [attr.id]="codes[${point}].id">
                    <${item.id}></${item.id}>
                </code-box>
            `);
            // import component
            appendToModule(componentName, data.name, markdownData.name, false);

            point++;
        });
        return ret;
    }

    function end(cb: any) {
        convert();
        this.push(...results);
        cb();
    }

    return through.obj(bufferContents, end);
}
