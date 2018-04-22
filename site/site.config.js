module.exports = {
    defaultLang: 'zh-CN',
    langs: [ 'zh-CN', 'en-US' ],
    tocMaxDepth: 3, // toc max depth
    modules: [
        {
            name: 'docs',
            github: 'https://github.com/cipchk/delon',
            dist: './site/app/routes/gen/docs',
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
            ],
            defaultRoute: 'architecture',
            metaIncludeAttributes: [ 'name', 'types', 'github' ],
            template: {
                meta: './site/templates/meta.ts',
                module: './site/templates/module.ts'
            },
            dir: [
                {
                    src: ['./docs'],
                    template: {
                        content: './site/templates/content.ts',
                    },
                    hasSubDir: false
                }
            ]
        },
        {
            name: 'components',
            github: 'https://github.com/cipchk/delon',
            dist: './site/app/routes/gen/components',
            types: [
                {
                    'zh-CN': '组件',
                    'en-US': 'Components'
                },
                {
                    'zh-CN': '指令',
                    'en-US': 'Directive'
                }
            ],
            module: '@delon/abc',
            defaultRoute: 'avatar-list',
            metaIncludeAttributes: [ 'name', 'types', 'github', 'module' ],
            template: {
                meta: './site/templates/meta.ts',
                module: './site/templates/module.ts'
            },
            dir: [
                {
                    src: ['./packages/abc'],
                    ignores: [ 'README.md' ],
                    template: {
                        content: './site/templates/content.ts',
                    },
                    hasSubDir: true
                }
            ]
        },
        {
            name: 'form',
            github: 'https://github.com/cipchk/delon',
            dist: './site/app/routes/gen/form',
            types: [
                {
                    'zh-CN': '文档',
                    'en-US': 'Documents'
                },
                {
                    'zh-CN': 'Examples',
                    'en-US': 'Examples'
                },
                {
                    'zh-CN': '小部件',
                    'en-US': 'Widgets'
                },
                {
                    'zh-CN': '第三方小部件',
                    'en-US': 'Third Widgets'
                }
            ],
            module: '@delon/form',
            defaultRoute: 'getting-started',
            extraRouteMeta: [
                { name: 'validator', route: '/form-pages/validator', i18n: false, meta: { 'zh-CN': { type: 'Examples', title: '在线校验器' } } }
            ],
            metaIncludeAttributes: [ 'name', 'types', 'github', 'module' ],
            template: {
                meta: './site/templates/meta.ts',
                module: './site/templates/module.ts'
            },
            dir: [
                {
                    src: ['./packages/form/docs'],
                    template: {
                        content: './site/templates/content.ts',
                    },
                    hasSubDir: false
                },
                {
                    src: ['./packages/form/src/widgets'],
                    // ignores: [ 'README.md' ],
                    template: {
                        content: './site/templates/content.ts',
                    },
                    hasSubDir: true
                },
                {
                    src: ['./packages/form/widgets-third'],
                    // ignores: [ 'README.md' ],
                    template: {
                        content: './site/templates/content.ts',
                    },
                    hasSubDir: true
                }
            ]
        }
    ]
};
