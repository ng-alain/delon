---
order: 20
title:
  en-US: FAQ
  zh-CN: 常见问题
type: Other
---

Please check the FAQ below before asking questions.

## Basic

### Can't Bind to since it isn't a known property of

When you have multiple lazy modules, you want each submodule to use the component library (for example: `NgZorroAntdModule`, `NgxTinymceModule`) should be exported in `ShareModule`, please refer to [module registration guidelines](/docs/ Module).

### Expression Changed After It Has Been Checked Error

Common mistakes under Angular, [this article](https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4) will help you understand why.

### Can't bind to 'formGroup' since it isn't a known property of 'form'

Common mistakes under Angular, the use of Reactive Forms requires the introduction of `ReactiveFormsModule`, refer to [official documentation](https://angular.io/guide/reactive-forms).

### Why is the page not updated after the data is modified?

The NG-ZORRO and @delon/* components work in OnPush mode by default. Mutate objects or arrays do not trigger Angular's change detection. Use the immutable method.

## Installation

### Why can't I find the ng-zorro-antd/src/*.less style?

Two situations:

- Using `cnpm` to install dependencies, you will not be able to find style files. This is because `cnpm` is in the form of a soft link path, which causes the `ng-zorro-antd` folder name to change, so it is recommended to use the `npm` install dependency package instead.
- The `ng-zorro-antd` version is too old to cause some components to fail to load into the appropriate style

### How to use Taobao source correctly?

The simplest is to use the [networkEnv](/cli/plugin#networkEnv) plugin.

Or manually repair:

**yarn**

```bash
yarn config set registry https://registry.npm.taobao.org
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass
# restore
yarn config delete registry
yarn config delete sass_binary_site
```

**npm**

```bash
npm config set registry https://registry.npm.taobao.org
npm config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass
# restore
npm config delete registry
npm config delete sass_binary_site
```

### No such file or directory

This question is difficult to explain, npm has a long building [#17444](https://github.com/npm/npm/issues/17444#issuecomment-393761515), and finally gives a reluctant answer:

1. Make sure to install the latest npm version: `npm i -g npm`
2. Remove `node_modules` and `package-lock.json`
3. `npm i`

Finally, repeat the above steps if you still can't!

## Configuration

### How to override the @delon/* configuration

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

### How do I deploy the antd icon locally?

First, the latest iconfont file can go to [this link](https://ant.design/docs/spec/download) ([mirror](http://ant-design.gitee.io/docs/spec/download)) Download.

Finally, redefine the new path in `src/styles/theme.less`:

```less
@icon-url: "/assets/iconfont";
```

> Use an absolute path or CDN address.

### Missing locale data for the locale "zh-cn"

For missing language imports, refer to [app.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/app.module.ts#L6-L25).
