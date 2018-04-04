import * as path from 'path';
import * as fs from 'fs';
import * as fse from 'fs-extra';
import { parseMd } from './utils/parse-md';
import { genUpperName, genUrl, generateDoc, includeAttributes, genComponentName, genSelector } from './utils/utils';
import { groupFiles } from './utils/group-files';
import { generateDemo } from './utils/generate-demo';

const target = process.argv[2];
const isSyncSpecific = !!target && (target !== 'init');

if (!target) throw new Error(`Should specify the generation type, 'init' is all module`);

const rootDir = path.resolve(__dirname, '../../');
const siteConfig = require(path.join(rootDir, 'site/site.config.js'));
const defaultLang = siteConfig.theme.defaultLang;

const AllMetas: any = Object.assign({ types: [] }, includeAttributes(siteConfig.theme, {}));

function generateModule(config: any) {
    const srcPath = path.join(rootDir, config.src);
    const targetPath = path.join(rootDir, config.dist);
    const tpl = {
        module: fs.readFileSync(path.join(rootDir, config.template.module)).toString('utf8'),
        content: fs.readFileSync(path.join(rootDir, config.template.content)).toString('utf8')
    };

    const files = groupFiles(srcPath, config, isSyncSpecific, target, siteConfig);
    const metas: any[] = [];
    const components: any[] = [];

    const modules: any = {
        imports: [],
        components: [],
        routes: []
    };

    function appendToModule(componentName: string, name: string, filename: string, needRouter: boolean = true) {
        modules.imports.push(`import { ${componentName} } from './${name}/${filename}';`);
        modules.components.push(componentName);
        if (needRouter) {
            if (modules.routes.length <= 0 && config.defaultRoute) {
                modules.routes.push(`{ path: '', redirectTo: '${config.defaultRoute}', pathMatch: 'full' }`);
            }
            modules.routes.push(`{ path: '${name}', component: ${componentName} }`);
        }
    }

    files.forEach(item => {
        // region: generate document file

        const content = {};
        const urls = {};
        const contentMetas = {};
        const i18n = Object.keys(item.data).length > 1;
        // const titleBuffer = {};
        Object.keys(item.data).forEach(lang => {
            const filePath = item.data[lang];
            content[lang] = parseMd(filePath, siteConfig);
            urls[lang] = genUrl(rootDir, filePath);
            // // split langs in meta
            // if (typeof content[lang].meta.title === 'object') {
            //     Object.keys(content[lang].meta.title).forEach(titleLang => {
            //         if (!titleBuffer[titleLang]) {
            //             titleBuffer[titleLang] = content[lang].meta.title[titleLang];
            //         }
            //     });
            // }
            // content[lang].meta.title = typeof content[lang].meta.title === 'string' ?
            //                                 content[lang].meta.title : titleBuffer[lang];
            contentMetas[lang] = content[lang].meta;
        });
        const meta = {
            name: item.key,
            i18n,
            order: content[defaultLang].meta.order || 100,
            cols: content[defaultLang].meta.cols || 1,
            meta: contentMetas
        };
        metas.push(meta);

        // endregion

        // region: generate demo files
        const demos = generateDemo(
            rootDir,
            item.key,
            path.join(path.dirname(item.data[defaultLang]), 'demo'),
            meta.cols,
            config,
            siteConfig
        );
        // endregion

        // region: generate document file
        const fileObject: any = {
            componentName: genComponentName(config.name, meta.name),
            selector: genSelector(config.name, meta.name),
            item: JSON.stringify({
                cols: meta.cols,
                urls,
                content,
                demo: demos.data.length > 0
            }),
            demo: demos.tpl.left.length > 0 || demos.tpl.right.length > 0
        };
        const demoHTML: string[] = [  ];
        if (fileObject.demo) {
            demoHTML.push(`<nz-row [nzGutter]="16">`);
            if (demos.tpl.left.length > 0 && demos.tpl.right.length > 0) {
                demoHTML.push(`<nz-col nzSpan="12">${demos.tpl.left.join('')}</nz-col>`);
                demoHTML.push(`<nz-col nzSpan="12">${demos.tpl.right.join('')}</nz-col>`);
            } else {
                demoHTML.push(`<nz-col nzSpan="24">${demos.tpl.left.join('')}${demos.tpl.right.join('')}</nz-col>`);
            }

            demoHTML.push('</nz-row>');
        }
        fileObject.demos = demoHTML.join('');
        fileObject.codes = JSON.stringify(demos.data);
        generateDoc(
            fileObject,
            fs.readFileSync(path.join(rootDir, config.template.content)).toString('utf8'),
            path.join(rootDir, config.dist, item.key, `index.ts`)
        );
        // endregion

        // region: register module
        appendToModule(fileObject.componentName, item.key, 'index');
        // demo
        demos.data.forEach(demo => {
            appendToModule(demo.componentName, item.key, demo.name, false);
        });
        // endregion
    });

    AllMetas.types.push(Object.assign({ list: metas }, includeAttributes(config, {})));

    // region: generate module file
    const moduleObj = {
        name: config.name,
        moduleName: genUpperName(config.name),
        imports: modules.imports.join('\r\n'),
        components: modules.components.join(',\r\n'),
        routes: modules.routes.join(',\r\n')
    };
    generateDoc(
        moduleObj,
        fs.readFileSync(path.join(rootDir, config.template.module)).toString('utf8'),
        path.join(rootDir, config.dist, `${config.name}.module.ts`)
    );
    // endregion
}

for (const m of siteConfig.modules) {
    generateModule(m);
}

// generate meta file
generateDoc(
    { data: JSON.stringify(AllMetas) },
    fs.readFileSync(path.join(rootDir, siteConfig.theme.meta.template)).toString('utf8'),
    path.join(rootDir, siteConfig.theme.meta.dist, `meta.ts`)
);
