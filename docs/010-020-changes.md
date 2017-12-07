---
order: 21
title: 0.2 升级指引
type: Advance
---

`0.2` 最大的改变是将部分原本在 ng-alain 项目中文件进行独立拆分，这样对 ng-alain 在复用、更友好的升级问题上得到很好的解决。

本次的变化对项目的改动其实不是很大，在开始阅读指引之前我建议先阅读入门指南序列文章（至少阅读 [关于 Delon](/docs/delon) 文章），这样会更好的理解为何我要这么做。

当前 `0.2` 是以[独立分支](//github.com/cipchk/ng-alain/tree/0.2.0)在存在，而 [ng-alain](//cipchk.github.io/ng-alain/) github预览已经是 `0.2` 版本了。

## 一、主题系统、服务、业务组件的变化

将这些公共性质转变成：`@delon/theme`、`@delon/abc`、`@delon/acl` 三个独立类库，这三个类库将保存同步版本号的更新（不管类库是否实际发生改变）。

### 1、@delon/theme

为核心主题系统，除了 ng-alain 所有需要的 less 文件外，还包括部分 Pipe、通用服务具体如下：

+ alain 目录
+ pipes: currency、date、keys、yn
+ services: colors、http、i18n、menu、preloader、scroll、settings、themes、title
+ helpers: modal

因此整个 `src/app/shared` 将只剩下一个 `shared.module.ts` 文件而已。

### ２、关于alain样式目录

在 alain 样式文件的引入有两处变化：

**src/styles.less**

```less
@import "./styles/alain/app";
```

变成

```less
@import '~@delon/theme/styles/index';
@import "./styles/_alain-custom-variables";
```

**src/styles/_alain-custom-variables.less**

在末尾增加注册：

```less
// 注册alain主题样式
.alain();
// 注册alain颜色样式或自定义颜色样式
.alain-theme-a();
.alain-theme-b();
.alain-theme-c();
.alain-theme-d();
.alain-theme-e();
.alain-theme-f();
.alain-theme-g();
.alain-theme-h();
.alain-theme-i();
.alain-theme-j();
```

最后你可以移除 `src/styles/alain` 目录。

### ３、如何正确导入@delon/theme

`@delon/theme` 是 ng-alain 的核心模块，并且**只能导入一次**。原因是由于这里涉及到 Service，我们知道服务并不适合在 `shared.module.ts` 当中导入。因此，首先需要通过 `core.modules.ts` 注册这些服务，这样子可以确保这些服务生命周期存在根模块当中，在懒加载过程中也能共享这些服务。

```ts
@NgModule({
    imports: [ AlainThemeModule.forRoot() ]
})
export class CoreModule { }
```

当然 `shared.module.ts` 依然也需要导入和导出它们，但这个时候不需要再 `forRoot`。

**forChild**

而实际项目中并不排除一些特殊情况，若可能需要在子模块中使用 `@delon/theme`，则使用 `forChild()` 防止服务重置实例。

## 二、@delon/abc

### 1、业务组件

来自 `src/app/shared/components`、 `src/app/shared/directives` 两个文件夹的内容。但在此基础中包括了变更：

| 原组件名 | 新组件名 | 描述 |
| ------- | ------ | ---- |
| `fixed-btns` | `footer-toolbar` | [api](/components/footer-toolbar) |

**g2升级至3.0**

+ 移除 `g2`、`g2-angular` 包体
+ 移除 `./libs` 目录
+ 增加 `@antv/g2`、`@antv/data-set`、`@antv/g2-plugin-slider` 包体
+ 变更 `.angular-cli.json` 的 g2 包体引用路径
+ 变更所有图表组件属性名 `margin` 为 `padding`

**app-layout-nav**

侧边栏菜单组件，原 `nav.component.ts` 组件，现变更为新组件 `sidebar-nav`，用法完全不变，只需要替换组件名即可。

## 三、@delon/acl

原 `src/app/core/acl`。

## 四、其它

**不再依赖类库**

+ `angular-web-storage`

**新依赖类库**

+ `@delon/theme`
+ `@delon/abc`
+ `@delon/acl`
