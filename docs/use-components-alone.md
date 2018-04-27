---
order: 100
title:
  en-US: Use ABC Components Alone
  zh-CN: 独立使用 ABC 组件
type: Advance
---

ng-alain 脚手架内提供了一套默认业务组件，这些组件抽象了控制台业务中的一些常见区块。我们将持续维护和迭代这些组件，为中后台业务提供比 Ant Design 基础组件更高级别的抽象。

## 如何使用

ng-alain 脚手架内用到的组件分为：

- [ng-zorro-antd](//ng-zorro.github.io) 组件
- [@delon/abc](/components) 组件

这些组件都是独立发布在 Npm 上面，因此你都可以单独去使用它们：

```ts
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AlainABCModule } from '@delon/abc';
```

默认情况下 ng-alain 这三种组件都全部导入进来，你可以根据你所需要按需导入相应的模块。

### 如何删除呢？

透过 [delon.module.ts](https://github.com/cipchk/ng-alain/blob/master/src/app/delon.module.ts) 查找相应模块名称，并将其移除即可。

> `reuse-tab` 组件除了模块导入、导出以外，还在 [default.component.html](https://github.com/cipchk/ng-alain/blob/master/src/app/layout/default/default.component.html) 也有相应组件点位符。

## 文档和反馈

你可以在 [组件页面](/components) 找到所有的业务组件，以及相关的演示和 API 文档。

组件会随着脚手架的更新而不断迭代，有任何问题和需求可以反馈到 [这里](//github.com/cipchk/ng-alain/issues)。

- 最新版本：[![@delon/abc](//img.shields.io/npm/v/@delon/abc.svg?style=flat-square)](//www.npmjs.com/package/@delon/abc)
- [更新日志](/docs/changelog)
