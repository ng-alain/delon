module.exports = {
    theme: {
        templates: './site/templates',
        github: 'https://github.com/cipchk/delon',
        defaultLang: 'zh-CN',
        langs: [ 'zh-CN', 'en-US' ],
        dist: './site/app/routes/gen',
        tocMaxDepth: 3, // toc max depth
    },
    router: [
        {
            name: 'docs',
            src: './docs',
            defaultRoute: 'getting-started',
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
            src: [ './packages/abc' ],
            ignores: [ './packages/abc/README.md' ],
            module: '@delon/abc',
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
