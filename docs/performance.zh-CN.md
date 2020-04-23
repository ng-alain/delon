---
order: 80
title:
  en-US: Performance
  zh-CN: 优化
type: Advance
---

## IE 优化

NG-ALAIN 默认开启了对 IE 的支持，这给包体及样式增加了一定大小，倘若你很在意并且不需要 `IE10` 及以下的版本支持的话：

```
// browserslist
> 0.5%
last 2 versions
Firefox ESR
not dead
# IE 9-11
not ie <= 10
not ie_mob <= 10
```

## 包体大小优化

分为JavaScript脚本文件和CSS文件，以下只描述脚本部分，有关CSS文件请参考[优化主题系统](/theme/performance)。

**注意：** 建议始终以**业务优先，优化为后**的准则，且在开始前对 NG-ALAIN 有一定了解后再进行优化。本章节的优化方案会随着版本的更迭有所变动，有关细节请持续关注。

### 结构说明

一般来说，构建后有两个文件会比较大：`scripts.js` 和 `main.js`，而我们优化也主要针对这两项。

**scripts.js**

它来自是 `angular.json` 的 `scripts` 节点的集合，因此，这个文件的大小取决于 `scripts` 节点所引用的第三方组件的大小。

一般来说，当你在使用非 Angular 第三方组件时都应该放在 `scripts` 下。

**main.js**

默认使用 `ng build` 会将所有 `@angular/*`、`ng-zorro-antd`、`@delon/*` 以及一些第三方 Angular 组件都会被打包进来，除非你使用 `--vendor-chunk` 参数来分离这些类库。

### 优化对象

我们知道，Angular Cli 打包出来的资源文件会包含该文件 hashing 值，它像是文件的唯一标识码，若未对该文件进行模块修改都不会产生新的 hashing 值，这确保用户首次下载资源后不管我们如何再次构建用户都无须再一次下载。

> 事实上，Angular Cli 默认将 `--vendor-chunk` 主要因素是这些 @angular/* 相对于迭代很快。

根据 NG-ALAIN 的[模块注册指导原则](/docs/module)，产生的两个 `shared-delon.module.ts`、`shared-zorro.module.ts` 两个专门针对 @Delon 与 NG-ZORRO 共享次级模块导入的汇总。

`@delon/abc`、`@delon/chart`、`ng-zorro-antd` 三个主要类库都支持次级导入，只选择项目所需要的模块将有效的解决包体大小的问题。

### 结论

待 NG-ALAIN 提供更好的优化支持后，我们会发布 [#684](https://github.com/ng-alain/ng-alain/pull/684) 希望对包体大小有更好的期望结果。
