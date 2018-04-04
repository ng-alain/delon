module.exports = {
    theme: {
        templates: './site/templates',
        github: 'https://github.com/cipchk/delon',
        defaultLang: 'zh-CN',
        langs: [ 'zh-CN', 'en-US' ],
        tocMaxDepth: 3, // toc max depth
        meta: {
            dist: './site/app/routes/gen',
            template: './site/templates/meta.ts',
            includeAttributes: [ 'github', 'langs', 'defaultLang', 'tocMaxDepth' ]
        }
    },
    modules: [
        {
            name: 'docs',
            src: './docs',
            dist: './site/app/routes/gen/docs',
            defaultRoute: 'architecture',
            template: {
                content: './site/templates/content.ts',
                module: './site/templates/module.ts'
            },
            meta: {
                includeAttributes: [ 'name', 'types' ]
            },
            hasSubDir: false,
            types: [
                {
                    'zh-CN': '入门',
                    'en-US': 'Basic'
                },
                {
                    'zh-CN': '开发',
                    'en-US': 'Dev'
                },
                {
                    'zh-CN': '进阶',
                    'en-US': 'Advance'
                },
                {
                    'zh-CN': '其他',
                    'en-US': 'Other'
                }
            ]
        },
        {
            name: 'components',
            src: './packages/abc',
            dist: './site/app/routes/gen/components',
            ignores: [ 'README.md' ],
            template: {
                content: './site/templates/content.ts',
                module: './site/templates/module.ts'
            },
            meta: {
                includeAttributes: [ 'name', 'types', 'module' ]
            },
            module: '@delon/abc',
            hasSubDir: true,
            defaultRoute: 'avatar-list',
            types: [
                {
                    'zh-CN': '组件',
                    'en-US': 'Components'
                },
                {
                    'zh-CN': '指令',
                    'en-US': 'Directive'
                }
            ]
        }
    ]
};
