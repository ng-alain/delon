---
order: 80
title:
  en-US: Performance
  zh-CN: 优化
type: Advance
---

## IE 优化

NG-ALAIN 默认开启了对 IE 的支持，这给包体及样式增加了一定大小，倘若你很在意并且不需要 `IE10` 及以下的版本支持的话，可以调整两项配置：

一：在 `package.json` 加上 `browserslist` 节点减少 `flexbox` 前缀样式从而减少包体大小：

```json
"browserslist": [
  "last 2 versions",
  "not ie <= 10",
  "not ie_mob <= 10"
]
```

二：关闭 `src/polyfills.ts` 下 ` IE9, IE10 and IE11 requires all of the following polyfills. ` 节点的内容，可以减少 `polyfills.js` 的包体大小。

## 包体大小优化

分为JavaScript脚本文件和CSS文件，以下只描述脚本部分，有关CSS文件请参考[优化主题系统](/theme/performance)。

**注意：** 建议始终以**业务优先，优化为后**的准则，且在开始前对 NG-ALAIN 有一定了解后再进行优化。本章节的优化方案会随着版本的更迭有所变动，有关细节请持续关注。

### 结构说明

一般来说，构建后有两个文件会比较大：`scripts.js` 和 `main.js`，而我们优化也主要针对这两项。

**scripts.js**

它来自是 `angular.json` 的 `scripts` 节点的集合，因此，这个文件的大小取决于 `scripts` 节点所引用的第三方组件的大小。像 `@delon/chart` 是依赖于 G2，本身 G2 也是包体大小比较大，所以默认情况下把 G2 所需要依赖的脚本都当作第三方组件都依附在 `scripts` 下。

一般来说，当你在使用非 Angular 第三方组件时都应该放在 `scripts` 下。

**main.js**

默认使用 `ng build` 会将所有 `@angular/*`、`ng-zorro-antd`、`@delon/*` 以及一些第三方 Angular 组件都会被打包进来，除非你使用 `--vendor-chunk` 参数来分离这些类库。

### 优化对象

我们知道，Angular Cli 打包出来的资源文件会包含该文件 hashing 值，它像是文件的唯一标识码，若未对该文件进行模块修改都不会产生新的 hashing 值，这确保用户首次下载资源后不管我们如何再次构建用户都无须再一次下载。

> 事实上，Angular Cli 默认将 `--vendor-chunk` 主要因素是这些 @angular/* 相对于迭代很快。

根据 NG-ALAIN 的[模块注册指导原则](/docs/module)，我们产生的两个决定 `main.js` 包体大小的核心入口：`delon.module.ts` 和 `shared.module.ts`。

而唯一能让我们减少体积的办法就是只导入我们所需要的模块，默认情况下我们并没有这么做，主要因素是它会增加很多额外的代码，以及受限于 ng-zorro-antd 目前还未支持次级模块的导入，因此这种优化并不是很明显。

#### ng-zorro-antd

不支持次级模块导入，所以细节略过。

#### @delon

@delon 类库包含各个层面，每个层面都包含可能还包含二级模块（例如 `abc` 类库，包含数十种不同组件模块），所有这一切都在 `delon.module.ts` 及 `shared.module.ts`。

例如，当你明确只需要 `@delon/abc` 若干个组件时，你只需要导入这些模块。

```ts
// 在 delon.module.ts 注册需要的模块
import { STModule } from '@delon/abc/table';

const ABC_ROOT_MODULES = [ STModule.forRoot() ];

// 在 share.module.ts 导入与导出确保所有懒模块有效
const ABC_MODULES = [ STModule ];
@NgModule({
  imports: ...ABC_MODULES,
  exports: ...ABC_MODULES,
})
export class SharedModule {}
```

### 结论

待 NG-ALAIN 提供更好的优化支持后，我们会发布 [#684](https://github.com/ng-alain/ng-alain/pull/684) 希望对包体大小有更好的期望结果。
