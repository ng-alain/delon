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
                    'zh-CN': '主题',
                    'en-US': 'Theme'
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
            src: [ './src/core/abc/components', './src/core/abc/directives' ],
            module: '@delon/abc',
            defaultRoute: 'avatar-list',
            types: [
                {
                    'zh-CN': '业务组件',
                    'en-US': 'Components'
                },
                {
                    'zh-CN': '指令',
                    'en-US': 'Directive'
                }
            ]
        },
        {
            name: 'acl',
            src: './src/core/acl/docs',
            module: '@delon/acl',
            types: [
                {
                    'zh-CN': 'ACL',
                    'en-US': 'ACL'
                }
            ]
        },
        {
            name: 'theme',
            src: './src/core/theme/docs',
            module: '@delon/theme',
            types: [
                {
                    'zh-CN': '主题',
                    'en-US': 'Theme'
                }
            ]
        }
    ]
};
