---
order: 20
title:
  en-US: FAQ
  zh-CN: 常见问题
type: Other
---

提问之前，请先查阅下面的常见问题。

## 如何覆盖 @delon/* 的配置

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

## 如何本地部署 antd 图标？

首先，最新的 iconfont 文件可以到 [此链接](https://ant.design/docs/spec/download-cn)（[镜像](http://ant-design.gitee.io/docs/spec/download-cn)） 下载。

最后，在 `src/styles/theme.less` 重新定义新的路径：

```less
@icon-url: "./assets/iconfont";
```

## 为什么找不到 ng-zorro-antd/src/*.less 样式？

两种情况：

- 使用 `cnpm` 安装依赖包，会遇到无法找到样式文件。这是由于 `cnpm` 采用的是软链接路径形式，导致 `ng-zorro-antd` 文件夹名有所变动，因此建议改用 `npm` 安装依赖包。
- `ng-zorro-antd` 版本过旧导致部分组件无法加载到相应样式

## 如何正确使用淘宝源？

**yarn**

```bash
yarn config set registry https://registry.npm.taobao.org
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass
```

**npm**

```bash
npm config set registry https://registry.npm.taobao.org
npm config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass
```
