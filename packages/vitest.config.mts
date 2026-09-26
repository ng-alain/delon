import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    {
      name: 'inject-g2-umd',
      transformIndexHtml: {
        order: 'pre',
        handler: () => [
          {
            tag: 'script',
            // @antv/g2 的 exports 未暴露 dist/g2.min.js，无法按模块导入，只能以脚本注入来预置 window.G2
            attrs: { src: '/node_modules/@antv/g2/dist/g2.min.js' },
            injectTo: 'head-prepend'
          }
        ]
      }
    }
  ],
  test: {
    isolate: true,
    restoreMocks: true, // jasmine 每个 spec 后自动还原 spy，vitest 默认不还原
    fileParallelism: false, // 多个 spec 共享 window 级 spy 与 overlay，串行求稳
    browser: {
      screenshotFailures: false,
    },
    coverage: {
      // 迁移基线由 karma-coverage(istanbul) 产出，只有同用 istanbul 才可比
      provider: 'istanbul',
      reportsDirectory: 'coverage',
      reporter: ['html', 'text-summary', 'lcovonly', 'cobertura']
    }
  }
});
