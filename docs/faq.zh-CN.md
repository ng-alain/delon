---
order: 20
title:
  en-US: FAQ
  zh-CN: 常见问题
type: Other
---

提问之前，请先查阅下面的常见问题。

## 基础

### Can't Bind to since it isn't a known property of

当你有多个懒模块时，希望每个子模块都需要使用组件库时（例如：`NgZorroAntdModule`、`NgxTinymceModule`）应在 `ShareModule` 中 export，请参考[模块注册指导原则](/docs/module)。

### Expression Changed After It Has Been Checked Error 错误

Angular 下常见错误，[这篇文章](https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4) 会帮助你理解原因。

### Can't bind to 'formGroup' since it isn't a known property of 'form'

Angular 下常见错误，使用 Reactive Forms 需要额外引入 `ReactiveFormsModule`，可以参考[官方文档](https://angular.io/guide/reactive-forms)。

### 数据修改后页面为什么没有更新

NG-ZORRO 及 @delon/* 组件默认在 OnPush 模式下工作，mutate 对象或者数组不会触发 Angular 的变更检测，请使用 immutable 方式。

## 安装

### 为什么找不到 ng-zorro-antd/src/*.less 样式？

两种情况：

- 使用 `cnpm` 安装依赖包，会遇到无法找到样式文件。这是由于 `cnpm` 采用的是软链接路径形式，导致 `ng-zorro-antd` 文件夹名有所变动，因此建议改用 `npm` 安装依赖包。
- `ng-zorro-antd` 版本过旧导致部分组件无法加载到相应样式

### 如何正确使用淘宝源？

最简单是使用 [networkEnv](/cli/plugin#networkEnv) 插件。

或手动修复：

**yarn**

```bash
yarn config set registry https://registry.npm.taobao.org
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass
# 恢复
yarn config delete registry
yarn config delete sass_binary_site
```

**npm**

```bash
npm config set registry https://registry.npm.taobao.org
npm config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass
# 恢复
npm config delete registry
npm config delete sass_binary_site
```

### no such file or directory

这个问题很难解释，npm 有一个长楼 [#17444](https://github.com/npm/npm/issues/17444#issuecomment-393761515)，并且最后给出一种勉强答案：

1. 确保安装最新 npm 版本：`npm i -g npm`
2. 删除 `node_modules` 和 `package-lock.json`
3. `npm i`

最后，依然不行就再重复以上步骤！

## 配置

### 如何覆盖 @delon/* 的配置

```ts
// delon.module.ts
import { DelonAuthConfig } from '@delon/auth';
export function delonAuthConfig(): DelonAuthConfig {
  return Object.assign(new DelonAuthConfig(), <DelonAuthConfig>{
    login_url: '/passport/login'
  });
}

@NgModule({})
export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        { provide: DelonAuthConfig, useFactory: delonAuthConfig}
      ]
    };
  }
}
```

### 如何本地部署 antd 图标？

首先，最新的 iconfont 文件可以到 [此链接](https://ant.design/docs/spec/download-cn)（[镜像](http://ant-design.gitee.io/docs/spec/download-cn)） 下载。

最后，在 `src/styles/theme.less` 重新定义新的路径：

```less
@icon-url: "/assets/iconfont";
```

> 使用绝对路径或CDN地址。

### Missing locale data for the locale "zh-cn"

缺少语言导入，参考[app.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/app.module.ts#L6-L25)。
