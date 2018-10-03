---
order: 20
title:
  en-US: FAQ
  zh-CN: 常见问题
type: Other
---

提问之前，请先查阅下面的常见问题。


## 安装

### 为什么找不到 ng-zorro-antd/src/*.less 样式？

两种情况：

- 使用 `cnpm` 安装依赖包，会遇到无法找到样式文件。这是由于 `cnpm` 采用的是软链接路径形式，导致 `ng-zorro-antd` 文件夹名有所变动，因此建议改用 `npm` 安装依赖包。
- `ng-zorro-antd` 版本过旧导致部分组件无法加载到相应样式


### Module build failed 错误
- 如果你遇到如下错误，可能是因为没有安装依赖包。
```
ERROR in ./src/styles.less (./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/less-loader/dist/cjs.js??ref--15-3!./src/styles.less)
Module build failed: 

// region: PLACEHOLDER, IMPORTANT: don't remove
@import '~@delon/theme/styles/index';
```

解决方案： 
1. 运行 npm install， 你会得到如下结果


   * WARN ng-alain@2.0.0-beta.2 requires a peer of @angular-devkit/core@^0.8.1 but none is installed. You must install peer dependencies yourself.

   * WARN ng-alain@2.0.0-beta.2 requires a peer of @angular-devkit/schematics@^0.8.1 but none is installed. You must install peer dependencies yourself.
   * WARN ng-alain@2.0.0-beta.2 requires a peer of @schematics/angular@^0.8.1 but none is installed. You must install peer dependencies yourself.
   * WARN ng-zorro-antd@1.6.0 requires a peer of typescript@~2.9.2 but none is installed. You must install peer dependencies yourself.
   * WARN @delon/abc@2.0.0-beta.2 requires a peer of qrious@^4.0.2 but none is installed. You must install peer dependencies yourself.
2. 运行 npm install @angular-devkit/core@^0.8.1 安装缺失的依赖包。 
3. 重复运行以上命令，安装所有缺失的依赖包。

### typescript 版本冲突问题

* @ng-zorro-antd@1.6.0 requires a peer of typescript@~2.9.2 but none is installed. You must install peer dependencies yourself.
* @ngtools/webpack@6.0.8 requires a peer of typescript@~2.4.0 || ~2.5.0 || ~2.6.0 || ~2.7.0 but none is installed. You must install peer dependencies yourself.

解决方案：运行ng update @angular-devkit/build-angular，@ngtools/webpack会自动升级最新版本支持typescript@~2.9.2。


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

缺少语言导入，参考[app.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/app.module.ts#L20-L22)。
