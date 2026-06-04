import type { SiteConfig } from './types';

export const CONFIG: SiteConfig = {
  github: 'https://github.com/ng-alain/delon',
  defaultLang: 'zh-CN',
  langs: ['zh-CN', 'en-US'],
  dist: './src/app/routes/gen',
  modules: [
    {
      name: 'docs',
      groups: [
        {
          'zh-CN': '入门',
          'en-US': 'Basic'
        },
        {
          'zh-CN': 'AI',
          'en-US': 'AI'
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
      dir: [
        {
          src: ['./docs'],
          hasSubDir: false
        }
      ]
    },
    {
      name: 'components',
      groups: [
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
      extraDocs: [
        {
          id: 'components-form',
          name: 'form',
          langs: ['zh-CN', 'en-US'],
          content: {
            'zh-CN': {
              meta: {
                group: 'CURD',
                title: 'sf',
                subtitle: '动态表单',
                redirect: '/form/getting-started',
                order: 10,
                lib: true
              },
              text: '',
              toc: []
            },
            'en-US': {
              meta: {
                group: 'CURD',
                title: 'sf',
                subtitle: 'Dynamic Form',
                redirect: '/form/getting-started',
                order: 10,
                lib: true
              },
              text: '',
              toc: []
            }
          },
          demos: []
        },
        {
          id: 'components-chart',
          name: 'chart',
          langs: ['zh-CN', 'en-US'],
          content: {
            'zh-CN': {
              meta: {
                group: '基础',
                title: '图表',
                subtitle: 'G2',
                redirect: '/chart/getting-started',
                order: 100,
                lib: true
              },
              text: '',
              toc: []
            },
            'en-US': {
              meta: {
                group: 'Basic',
                title: 'Chart',
                subtitle: 'G2',
                redirect: '/chart/getting-started',
                order: 100,
                lib: true
              },
              text: '',
              toc: []
            }
          },
          demos: []
        },
        {
          id: 'components-auth',
          name: 'auth',
          langs: ['zh-CN', 'en-US'],
          content: {
            'zh-CN': {
              meta: {
                group: '业务',
                title: '用户认证',
                redirect: '/auth/getting-started',
                order: 100,
                lib: true
              },
              text: '',
              toc: []
            },
            'en-US': {
              meta: {
                group: 'Business',
                title: 'Authentication',
                redirect: '/auth/getting-started',
                order: 100,
                lib: true
              },
              text: '',
              toc: []
            }
          },
          demos: []
        },
        {
          id: 'components-acl',
          name: 'acl',
          langs: ['zh-CN', 'en-US'],
          content: {
            'zh-CN': {
              meta: {
                group: '业务',
                title: '访问控制列表',
                redirect: '/acl/getting-started',
                order: 110,
                lib: true
              },
              text: '',
              toc: []
            },
            'en-US': {
              meta: {
                group: 'Business',
                title: 'Access Control List',
                redirect: '/acl/getting-started',
                order: 110,
                lib: true
              },
              text: '',
              toc: []
            }
          },
          demos: []
        },
        {
          id: 'components-cache',
          name: 'cache',
          langs: ['zh-CN', 'en-US'],
          content: {
            'zh-CN': {
              meta: {
                group: '业务',
                title: '缓存',
                redirect: '/cache/getting-started',
                order: 120,
                lib: true
              },
              text: '',
              toc: []
            },
            'en-US': {
              meta: {
                group: 'Business',
                title: 'Cache',
                redirect: '/cache/getting-started',
                order: 120,
                lib: true
              },
              text: '',
              toc: []
            }
          },
          demos: []
        },
        {
          id: 'components-mock',
          name: 'mock',
          langs: ['zh-CN', 'en-US'],
          content: {
            'zh-CN': {
              meta: {
                group: '业务',
                title: 'Mock模拟数据',
                redirect: '/mock/getting-started',
                order: 130,
                lib: true
              },
              text: '',
              toc: []
            },
            'en-US': {
              meta: {
                group: 'Business',
                title: 'Mock',
                redirect: '/mock/getting-started',
                order: 130,
                lib: true
              },
              text: '',
              toc: []
            }
          },
          demos: []
        },
        {
          id: 'components-util',
          name: 'util',
          langs: ['zh-CN', 'en-US'],
          content: {
            'zh-CN': {
              meta: {
                group: '基础',
                title: '工具集',
                redirect: '/util/getting-started',
                order: 120,
                lib: true
              },
              text: '',
              toc: []
            },
            'en-US': {
              meta: {
                group: 'Basic',
                title: 'Utils',
                redirect: '/util/getting-started',
                order: 120,
                lib: true
              },
              text: '',
              toc: []
            }
          },
          demos: []
        },
        {
          id: 'components-theme',
          name: 'theme',
          langs: ['zh-CN', 'en-US'],
          content: {
            'zh-CN': {
              meta: {
                group: '基础',
                title: '主题系统',
                redirect: '/theme/getting-started',
                order: 110,
                lib: true
              },
              text: '',
              toc: []
            },
            'en-US': {
              meta: {
                group: 'Basic',
                title: 'Theme System',
                redirect: '/theme/getting-started',
                order: 110,
                lib: true
              },
              text: '',
              toc: []
            }
          },
          demos: []
        }
      ],
      defaultRoute: 'sv',
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
      groups: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents'
        }
      ],
      defaultRoute: 'getting-started',
      dir: [
        {
          src: ['./packages/auth/docs'],
          hasSubDir: false
        }
      ]
    },
    {
      name: 'acl',
      groups: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents'
        }
      ],
      defaultRoute: 'getting-started',
      dir: [
        {
          src: ['./packages/acl/docs'],
          hasSubDir: false
        }
      ]
    },
    {
      name: 'cache',
      groups: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents'
        }
      ],
      defaultRoute: 'getting-started',
      dir: [
        {
          src: ['./packages/cache/docs'],
          hasSubDir: false
        }
      ]
    },
    {
      name: 'mock',
      groups: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents'
        }
      ],
      defaultRoute: 'getting-started',
      dir: [
        {
          src: ['./packages/mock/docs'],
          hasSubDir: false
        }
      ]
    },
    {
      name: 'util',
      groups: [
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
      defaultRoute: 'getting-started',
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
      groups: [
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
      defaultRoute: 'getting-started',
      extraDocs: [
        {
          id: 'validator',
          name: 'validator',
          langs: ['zh-CN', 'en-US'],
          content: {
            'zh-CN': {
              meta: {
                title: '在线校验器',
                group: 'Examples',
                redirect: '/form-pages/validator/zh'
              },
              text: '',
              toc: []
            },
            'en-US': {
              meta: {
                title: 'Online Validator',
                group: 'Examples',
                redirect: '/form-pages/validator/en'
              },
              text: '',
              toc: []
            }
          },
          demos: []
        }
      ],
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
      groups: [
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
      defaultRoute: 'getting-started',
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
      groups: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents'
        }
      ],
      defaultRoute: 'getting-started',
      dir: [
        {
          src: ['./schematics/docs'],
          hasSubDir: false
        }
      ]
    },
    {
      name: 'theme',
      groups: [
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
      defaultRoute: 'getting-started',
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
