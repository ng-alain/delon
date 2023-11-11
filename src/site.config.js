module.exports = {
  defaultLang: 'zh-CN',
  langs: ['zh-CN', 'en-US'],
  tocMaxDepth: 3, // toc max depth
  template: {
    examples: './src/templates/examples.ts',
    examples_index: './src/templates/examples_index.ts'
  },
  modules: [
    {
      name: 'docs',
      github: 'https://github.com/ng-alain/delon',
      dist: './src/app/routes/gen/docs',
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
      defaultRoute: 'getting-started',
      metaIncludeAttributes: ['name', 'types', 'github'],
      dir: [
        {
          src: ['./docs'],
          hasSubDir: false
        }
      ],
      standalone: true
    },
    {
      name: 'components',
      github: 'https://github.com/ng-alain/delon',
      dist: './src/app/routes/gen/components',
      types: [
        {
          'zh-CN': 'CURD',
          'en-US': 'CURD'
        },
        {
          'zh-CN': '基础',
          'en-US': 'Basic'
        },
        {
          'zh-CN': '表单',
          'en-US': 'Form'
        },
        {
          'zh-CN': '布局',
          'en-US': 'Layout'
        },
        {
          'zh-CN': '业务',
          'en-US': 'Business'
        },
        {
          'zh-CN': '其它',
          'en-US': 'Other'
        }
      ],
      extraRouteMeta: [
        {
          name: 'form',
          route: '/form/getting-started',
          order: 10,
          i18n: true,
          lib: true,
          meta: {
            'zh-CN': {
              type: 'CURD',
              title: 'sf',
              subtitle: '动态表单'
            },
            'en-US': {
              type: 'CURD',
              title: 'sf',
              subtitle: 'Dynamic Form'
            }
          }
        },
        {
          name: 'chart',
          route: '/chart/getting-started',
          order: 100,
          i18n: true,
          lib: true,
          meta: {
            'zh-CN': {
              type: 'Basic',
              title: '图表',
              subtitle: 'G2'
            },
            'en-US': {
              type: 'Basic',
              title: 'Chart',
              subtitle: 'G2'
            }
          }
        },
        {
          name: 'auth',
          route: '/auth/getting-started',
          order: 100,
          i18n: true,
          lib: true,
          meta: {
            'zh-CN': {
              type: 'Business',
              title: '用户认证'
            },
            'en-US': {
              type: 'Business',
              title: 'Authentication'
            }
          }
        },
        {
          name: 'acl',
          route: '/acl/getting-started',
          order: 110,
          i18n: true,
          lib: true,
          meta: {
            'zh-CN': {
              type: 'Business',
              title: '访问控制列表'
            },
            'en-US': {
              type: 'Business',
              title: 'Access Control List'
            }
          }
        },
        {
          name: 'cache',
          route: '/cache/getting-started',
          order: 120,
          i18n: true,
          lib: true,
          meta: {
            'zh-CN': {
              type: 'Business',
              title: '缓存'
            },
            'en-US': {
              type: 'Business',
              title: 'Cache'
            }
          }
        },
        {
          name: 'mock',
          route: '/mock/getting-started',
          order: 130,
          i18n: true,
          lib: true,
          meta: {
            'zh-CN': {
              type: 'Business',
              title: 'Mock模拟数据'
            },
            'en-US': {
              type: 'Business',
              title: 'Mock'
            }
          }
        },
        {
          name: 'util',
          route: '/util/getting-started',
          order: 120,
          i18n: true,
          lib: true,
          meta: {
            'zh-CN': {
              type: 'Basic',
              title: '工具集'
            },
            'en-US': {
              type: 'Basic',
              title: 'Utils'
            }
          }
        },
        {
          name: 'theme',
          route: '/theme/getting-started',
          order: 110,
          i18n: true,
          lib: true,
          meta: {
            'zh-CN': {
              type: 'Basic',
              title: '主题系统'
            },
            'en-US': {
              type: 'Basic',
              title: 'Theme System'
            }
          }
        }
      ],
      module: '@delon/abc',
      defaultRoute: 'sv',
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],

      dir: [
        {
          src: ['./packages/abc'],
          ignores: ['README.md'],

          hasSubDir: true
        }
      ]
    },
    {
      name: 'auth',
      github: 'https://github.com/ng-alain/delon',
      dist: './src/app/routes/gen/auth',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents'
        }
      ],
      module: '@delon/auth',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      dir: [
        {
          src: ['./packages/auth/docs'],
          hasSubDir: false
        }
      ],
      standalone: true
    },
    {
      name: 'acl',
      github: 'https://github.com/ng-alain/delon',
      dist: './src/app/routes/gen/acl',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents'
        }
      ],
      module: '@delon/acl',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],

      dir: [
        {
          src: ['./packages/acl/docs'],
          hasSubDir: false
        }
      ],
      standalone: true
    },
    {
      name: 'cache',
      github: 'https://github.com/ng-alain/delon',
      dist: './src/app/routes/gen/cache',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents'
        }
      ],
      module: '@delon/cache',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      dir: [
        {
          src: ['./packages/cache/docs'],
          hasSubDir: false
        }
      ]
    },
    {
      name: 'mock',
      github: 'https://github.com/ng-alain/delon',
      dist: './src/app/routes/gen/mock',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents'
        }
      ],
      module: '@delon/mock',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      dir: [
        {
          src: ['./packages/mock/docs'],
          hasSubDir: false
        }
      ],
      standalone: true
    },
    {
      name: 'util',
      github: 'https://github.com/ng-alain/delon',
      dist: './src/app/routes/gen/util',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents'
        },
        {
          'zh-CN': '工具类',
          'en-US': 'Tools'
        },
        {
          'zh-CN': '管道',
          'en-US': 'Pipes'
        }
      ],
      module: '@delon/util',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      dir: [
        {
          src: ['./packages/util/docs'],
          hasSubDir: false
        },
        {
          src: ['./packages/util'],
          ignores: ['docs'],
          hasSubDir: true
        }
      ]
    },
    {
      name: 'form',
      github: 'https://github.com/ng-alain/delon',
      dist: './src/app/routes/gen/form',
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
          'zh-CN': '非内置小部件',
          'en-US': 'Non-built-in widgets'
        },
        {
          'zh-CN': '第三方小部件',
          'en-US': 'Third Widgets'
        }
      ],
      module: '@delon/form',
      defaultRoute: 'getting-started',
      extraRouteMeta: [
        {
          name: 'validator',
          route: '/form-pages/validator',
          i18n: false,
          meta: { 'zh-CN': { type: 'Examples', title: '在线校验器' } }
        }
      ],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      dir: [
        {
          src: ['./packages/form/docs'],

          hasSubDir: false
        },
        {
          src: ['./packages/form/examples'],

          hasSubDir: true
        },
        {
          src: ['./packages/form/src/widgets'],

          hasSubDir: true
        },
        {
          src: ['./packages/form/widgets'],

          hasSubDir: true
        },
        {
          src: ['./packages/form/widgets-third'],

          hasSubDir: true
        }
      ]
    },
    {
      name: 'chart',
      github: 'https://github.com/ng-alain/delon',
      dist: './src/app/routes/gen/chart',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents'
        },
        {
          'zh-CN': 'G2',
          'en-US': 'G2'
        },
        {
          'zh-CN': 'ECharts',
          'en-US': 'ECharts'
        }
      ],
      module: '@delon/chart',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      dir: [
        {
          src: ['./packages/chart/docs'],
          hasSubDir: false
        },
        {
          src: ['./packages/chart'],
          ignores: ['docs'],
          hasSubDir: true
        }
      ]
    },
    {
      name: 'cli',
      github: 'https://github.com/ng-alain/delon',
      dist: './src/app/routes/gen/cli',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents'
        }
      ],
      module: 'ng-alain',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      standalone: true,
      dir: [
        {
          src: ['./schematics/docs'],
          hasSubDir: false
        }
      ]
    },
    {
      name: 'theme',
      github: 'https://github.com/ng-alain/delon',
      dist: './src/app/routes/gen/theme',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents'
        },
        {
          'zh-CN': '主题',
          'en-US': 'Theme'
        },
        {
          'zh-CN': '服务',
          'en-US': 'Service'
        },
        {
          'zh-CN': '路由',
          'en-US': 'Router'
        },
        {
          'zh-CN': '管道',
          'en-US': 'Pipe'
        }
      ],
      module: 'ng-alain',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      dir: [
        {
          src: ['./packages/theme/docs'],
          hasSubDir: false
        },
        {
          src: ['./packages/theme/layout-default'],
          reName: 'layout-default',
          hasSubDir: false
        },
        {
          src: ['./packages/theme/layout-blank'],
          reName: 'layout-blank',
          hasSubDir: false
        },
        {
          src: ['./packages/theme/theme-btn'],
          reName: 'theme-btn',
          hasSubDir: false
        },
        {
          src: ['./packages/theme/src/router'],
          hasSubDir: false
        },
        {
          src: ['./packages/theme/src/pipes'],
          hasSubDir: true
        },
        {
          src: ['./packages/theme/src/services'],
          hasSubDir: true
        }
      ]
    }
  ]
};
