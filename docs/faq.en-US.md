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

When you have multiple lazy modules, you want each submodule to use the component library (for example: `NgZorroAntdModule`, `NgxTinymceModule`) should be exported in `ShareModule`, please refer to [module registration guidelines](/docs/Module).

### Expression Changed After It Has Been Checked Error

Common mistakes under Angular, [this article](https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4) will help you understand why.

### Can't bind to 'formGroup' since it isn't a known property of 'form'

Common mistakes under Angular, the use of Reactive Forms requires the introduction of `ReactiveFormsModule`, refer to [official documentation](https://angular.io/guide/reactive-forms).

### Why is the page not updated after the data is modified?

The NG-ZORRO and @delon/* components work in OnPush mode by default. Mutate objects or arrays do not trigger Angular's change detection. Use the immutable method.

### How to use @delon daily build version

NG-ALAIN provides a [delon-builds](https://github.com/ng-alain/delon-builds.git) repository as a daily build version. It's not the final stable version, but contains the latest fixed BUG, To use the latest features, you can create `delon.sh` in the root directory:

```bash
#!/usr/bin/env bash
set -e
echo "Download latest @delon version"
rm -rf delon-builds
git clone --depth 1 https://github.com/ng-alain/delon-builds.git
rm -rf node_modules/@delon
rm -rf node_modules/ng-alain
rsync -am delon-builds/ node_modules/
NG_ALAIN_VERSION=$(node -p "require('./node_modules/ng-alain/package.json').version")
rm -rf delon-builds
echo "Using ng-alain version: ${NG_ALAIN_VERSION}"
```

When you need to use the daily build version of @delon, you only need to run:

```bash
bash delon.sh
```

> If in Windows environment, please use [WSL](https://docs.microsoft.com/en-us/windows/wsl/install) to execute Bash scripts.

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

Angular Cli use `npm` to install dependencies by default, if you want change to `yarn`, you can set Angular Cli to use `yarn` globally by default:

```bash
ng config -g cli.packageManager yarn
```

### No such file or directory

This question is difficult to explain, npm has a long building [#17444](https://github.com/npm/npm/issues/17444#issuecomment-393761515), and finally gives a reluctant answer:

1. Make sure to install the latest npm version: `npm i -g npm`
2. Remove `node_modules` and `package-lock.json`
3. `npm i`

Finally, repeat the above steps if you still can't!

## Configuration

### How do I deploy the antd icon locally?

First, the latest iconfont file can go to [this link](https://ant.design/docs/spec/download) ([mirror](http://ant-design.gitee.io/docs/spec/download)) Download.

Finally, redefine the new path in `src/styles/theme.less`:

```less
@icon-url: "/assets/iconfont";
```

> Use an absolute path or CDN address.

### Missing locale data for the locale "zh-cn"

For missing language imports, refer to [app.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/app.module.ts#L6-L25).

### How to deploy ng-alain.com documentation site in local

We provided an online snapshot:

```barsh
git clone --depth 1 --branch gh-pages https://github.com/ng-alain/delon.git docs
```

You can simply create a Docker container to quickly deploy the same documentation site as ng-alain.com.
