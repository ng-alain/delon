---
order: 1000
type: Basic
title: 升级到 17.0 版本
hot: true
---

> 本指南适用于当前版本 ng-alain >= `16` ;
> 如果在升级过程中遇到问题，欢迎提出。提问前请阅读 [如何向开源社区提问题](https://github.com/seajs/seajs/issues/545)
> 如果发现本指南存在遗漏/错误，请指出!
> 或者你遇到了新的问题并解决了，欢迎补充!

## 开始之前

1. 首先确保你 `Node.js` >= `18.13.0`
2. 创建新的分支，或者使用其他方式备份当前项目
3. 删除项目下 `package-lock.json` 或 `yarn.lock` 文件

## 升级步骤

### 升级相关依赖

- 将项目升级到 Angular 16 运行 `ng update @angular/core@17 @angular/cli@17 @angular-eslint/schematics@17 ng-zorro-antd@17 ng-alain@17`。
- _如果你有单独使用 `@angular/cdk` 请执行 `ng update @angular/cdk@17`_
- **如果控制台出现警告消息请按提示修改对应代码**

> NG-ALAIN脚手架升级全部变更文件，请参考：[#2394](https://github.com/ng-alain/ng-alain/pull/2394/files)。

## 可选部分

可选部分的主要工作都是围绕 Standalone 展开，目前 NG-ALAIN 会保留部分DEMO页使用 NgModule 写法。[#2442](https://github.com/ng-alain/ng-alain/pull/2442/files) 包含着这部分变动的所有内容。

### 升级为 Standalone

- 使用 `bootstrapApplication` 替代 `platformBrowserDynamic`
- 使用 `app.config.ts` 替代 `global-config.module.ts`, `app.module.ts`

其中 `layout`, `dashboard`, `passport` 目录采用 standalone 写法，可根据 [#2442](https://github.com/ng-alain/ng-alain/pull/2442/files) 变动自行修改。

### DI配置

- NG-ALAIN 移除掉所有 `Module. forRoot` 之类的 DI 配置模式，当然为了兼容，依然保留 `NgModule` 写法
- 所有DI配置都是 `provide*` 来维护，更多细节见 `app.config.ts`
- 如果您使用第三方但不提供类似 `provide` 写法时，只需要借助 `importProvidersFrom` 过渡

### HTTP拦截器

- Angular 17 对拦截器顺序可见有严格的要求，本次升级已经全部修改为 `HttpInterceptorFn` 写法（细节见 `provideHttpClient`）
- 若从 NG-ALAIN 16 升级默认为会导入 `withInterceptorsFromDi()` 用于兼容 `HTTP_INTERCEPTORS` 写法，但建议尽可能升级新的写法，可参考 [#2442](https://github.com/ng-alain/ng-alain/pull/2442/files)

### 关于 `@delon/form`

- 将小部件频率较低的全部转化为可选导入，本次升级时会自动导入所有小部件来保证兼容
