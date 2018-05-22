---
order: 80
title:
  en-US: Upgrade scaffold
  zh-CN: 升级脚手架
type: Dev
---

在 [体系结构](/docs/architecture) 中我们已经描述了 ng-alain 脚手架的整体构成，我们花了大量时间去开发一些基础建设，并把这些以 `@delon/*` 系列发布至 Npm 当中，使得升级变得非常轻松。

## 发布规则

同 `@angular/*` 类似，`@delon/*` 类库的版本号在每一个迭代时，不管某类库是否有修改，都会统一个版本号 ([![NPM version](https://img.shields.io/npm/v/@delon/theme.svg)](https://www.npmjs.com/package/@delon/theme)) 。

同时按以下发布规则及更新版本号说明：

- `@delon` 作为基础建设类库，在更新频率上会略高，一般一周至少更新一次
- 带有 **BREAKING CHANGES** 至少提升一个次版本号
- [更新日志](/docs/changelog)

## 如何升级？

### 方式一：修改版本号

修改 `package.json` 所有 `@delon/` 开头的类库版本号为最新版本号：

```
"@delon/theme": "^0.7.1"
```

将 `^0.7.1` 替换成最新版本号。

最后，重新安装依赖包。

```bash
$ npm install
// 或
$ yarn
```

> 注：请勿使用 `cnpm` 安装依赖包，因为 ng-alain 脚手架需要依赖 `node_modules` 路径，而 `cnpm` 采用软链接会导致破坏文件夹名称，导致很难获取相应的样式文件。

如果网络状况不佳，可以使用 [nrm](https://www.npmjs.com/package/nrm) 并切换国内NPM镜像进行加速。

### 方式二：更新所有类库

脚手架在 `package.json` 里多数类库都是使用宽松的版本号，例如：

`^0.1.0` 带有 `^` 符号表示使用最新次版本号，因此，`0.7.0` 也是该范围之列。

要想采用这种更新方式需要按以下步骤进行：

- 移除 `node_modules` 文件夹及 `package-lock.json` 文件
- 执行 `npm install`

**注意：** 这种方式会对所有类库按比较新的版本安装，但有可能会导致由于第三方类型的破坏性变更会导致一些不必要的麻烦。
