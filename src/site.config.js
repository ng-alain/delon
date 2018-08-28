module.exports = {
  defaultLang: 'zh-CN',
  langs: ['zh-CN', 'en-US'],
  tocMaxDepth: 3, // toc max depth
  modules: [
    {
      name: 'docs',
      github: 'https://github.com/cipchk/delon',
      dist: './src/app/routes/gen/docs',
      types: [
        {
          'zh-CN': '入门',
          'en-US': 'Basic',
        },
        {
          'zh-CN': '开发',
          'en-US': 'Dev',
        },
        {
          'zh-CN': '进阶',
          'en-US': 'Advance',
        },
        {
          'zh-CN': '其他',
          'en-US': 'Other',
        },
      ],
      defaultRoute: 'getting-started',
      metaIncludeAttributes: ['name', 'types', 'github'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
      ],
    },
    {
      name: 'components',
      github: 'https://github.com/cipchk/delon',
      dist: './src/app/routes/gen/components',
      types: [
        {
          'zh-CN': 'CURD',
          'en-US': 'CURD',
        },
        {
          'zh-CN': '其他',
          'en-US': 'Other',
        },
        {
          'zh-CN': '已过期',
          'en-US': 'Deprecated',
        },
      ],
      extraRouteMeta: [
        {
          name: 'form',
          route: '/form/getting-started',
          order: 4,
          i18n: true,
          meta: {
            'zh-CN': {
              type: 'CURD',
              title: 'form',
              subtitle: '动态表单',
            },
            'en-US': {
              type: 'CURD',
              title: 'form',
              subtitle: 'Dynamic Form',
            },
          },
        },
      ],
      module: '@delon/abc',
      defaultRoute: 'view',
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/abc'],
          ignores: ['README.md'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: true,
        },
      ],
    },
    {
      name: 'auth',
      github: 'https://github.com/cipchk/delon',
      dist: './src/app/routes/gen/auth',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
      ],
      module: '@delon/auth',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/auth/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
      ],
    },
    {
      name: 'acl',
      github: 'https://github.com/cipchk/delon',
      dist: './src/app/routes/gen/acl',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
      ],
      module: '@delon/acl',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/acl/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
      ],
    },
    {
      name: 'cache',
      github: 'https://github.com/cipchk/delon',
      dist: './src/app/routes/gen/cache',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
      ],
      module: '@delon/cache',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/cache/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
      ],
    },
    {
      name: 'mock',
      github: 'https://github.com/cipchk/delon',
      dist: './src/app/routes/gen/mock',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
      ],
      module: '@delon/mock',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/mock/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
      ],
    },
    {
      name: 'util',
      github: 'https://github.com/cipchk/delon',
      dist: './src/app/routes/gen/util',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
        {
          'zh-CN': '类型',
          'en-US': 'Type',
        },
      ],
      module: '@delon/util',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/util/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
        {
          src: ['./packages/util/src'],
          // ignores: [ 'README.md' ],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: true,
        },
      ],
    },
    {
      name: 'form',
      github: 'https://github.com/cipchk/delon',
      dist: './src/app/routes/gen/form',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
        {
          'zh-CN': 'Examples',
          'en-US': 'Examples',
        },
        {
          'zh-CN': '小部件',
          'en-US': 'Widgets',
        },
        {
          'zh-CN': '第三方小部件',
          'en-US': 'Third Widgets',
        },
      ],
      module: '@delon/form',
      defaultRoute: 'getting-started',
      extraRouteMeta: [
        {
          name: 'validator',
          route: '/form-pages/validator',
          i18n: false,
          meta: { 'zh-CN': { type: 'Examples', title: '在线校验器' } },
        },
      ],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/form/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
        {
          src: ['./packages/form/examples'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: true,
        },
        {
          src: ['./packages/form/src/widgets'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: true,
        },
        {
          src: ['./packages/form/widgets-third'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: true,
        },
      ],
    },
    {
      name: 'chart',
      github: 'https://github.com/cipchk/delon',
      dist: './src/app/routes/gen/chart',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
        {
          'zh-CN': '组件',
          'en-US': 'Components',
        },
      ],
      module: '@delon/chart',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/chart/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
        {
          src: ['./packages/chart/src'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: true,
        },
      ],
    },
    {
      name: 'cli',
      github: 'https://github.com/cipchk/delon',
      dist: './src/app/routes/gen/cli',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
      ],
      module: 'ng-alain',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/schematics/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
      ],
    },
    {
      name: 'theme',
      github: 'https://github.com/cipchk/delon',
      dist: './src/app/routes/gen/theme',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
        {
          'zh-CN': '主题',
          'en-US': 'Theme',
        },
        {
          'zh-CN': '服务',
          'en-US': 'Service',
        },
        {
          'zh-CN': '管道',
          'en-US': 'Pipe',
        },
      ],
      module: 'ng-alain',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/theme/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
      ],
    },
  ],
};
