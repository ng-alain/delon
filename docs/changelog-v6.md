---
order: 990
title: Angualr6升级指引
type: Other
---

## 写在前面

Angular6（后面简称：v6）受限于 Angular Cli 的 BUG，需要额外的操作才能使 zorro 在 v6 中使用；且升级的核心在于 `.angular-cli.json`、`rxjs` 两部分。

**注意：注意：注意：**

- 所有 `v6` 相关版本将统一以 `1.0.1-beta.*` 发布，以防止类库在 v5 之前由于 bug 修复导致版本混乱控制。同时，未来第一个 `1.0` 版本也将从 `1.0.1` 开始；当然 `master` 分支下将保持最新。
- 在你升级之前请先 **务必** 再三确认引用的第三方类库是否已经支持 v6，再考虑升级。
- `@delon/cli` 不支持 v6，后续会有 `ng add` 支持
- v6 相关变更分为两个 Commit，可以根据他们了解具体的变更内容
  - 主要结构：[7927d4](https://github.com/cipchk/ng-alain/commit/6713c4)
  - 示例页：[47a458](https://github.com/cipchk/ng-alain/commit/47a458)

## 移除的部分

- hmr 其实支持的并不是很友好，除了对 less 的支持，因此 v6 不再提供 hmr 相关。
- 移除 `iconfont` 示例页

## 升级Angular项目

### 1、前提

删除 `node_modules`、`package-lock.json` 文件。

### 2、package.json

修改 `package.json` 类库版本号为最新，若你不清楚如何修改，可以直接使用 [ng-alain](https://github.com/cipchk/ng-alain/blob/master/package.json) 现有的 `dependencies`、`devDependencies` 节点可直接复制，再将你可能引用额外类库加上即可。

最后，安装依赖包：

```bash
npm i
```

### 3、ng update

执行：

```bash
ng update @angular/cli
```

这个时间可能会有些长，但一般的结果为：

```
DELETE .angular-cli.json
CREATE angular.json (5008 bytes)
UPDATE karma.conf.js (1077 bytes)
UPDATE src/tsconfig.spec.json (788 bytes)
UPDATE package.json (3775 bytes)
UPDATE tslint.json (3230 bytes)
```

### 4、结构调整

v6 的文件结构有点小调整，虽然不影响，但你依然需要知道这些变化。

- `.angular-cli.json` 变成 `angular.json`
- 若干由根目录转移至 `src` 目录中
  - `./karma.js` 放入 `src`
  - `package.json` 的 `browserslist` 节点转换成 `./src/browserslist` 文件形式
- `e2e` 目录变化
  - `./protractor.conf.js` 放入 `e2e`
  - `e2e` 目录增加 `src` 目录且将文件转移至该目录中，且注意相关路径

### 5、angular.json

`angular.json` 是由 `.angular-cli.json` 转换而来的，实质的内容依然还是 `.angular-cli.json`，只是换了另一种写法，且更啰嗦，有关细节我不细说，一般通过 `ng update` 得到的是可用的。

一些细节：

- 移除 `@delon/cli` 相关的 `schematics` 节点

### 6、less 的修复

antd 的 less 文件有点反人类，而 Angular cli 目前又有一个小BUG导致，无法编译 ng-zorro-antd 样式，你可以在 `package.json` 的 `scripts` 节点增加：

```
"fix-v6": "node fix-v6"
```

并复制 [fix-v6.js](https://github.com/cipchk/ng-alain/blob/master/fix-v6.js) 到你的项目根目录下，最后执行：

```bash
npm run fix-v6.js
```

**注：** 只需要执行一次即可，在执行之前**务必**先运行 `npm i` 安装所有依赖包，若依赖包重新安装也必须再执行一次。

这些方式只是一种临时解决办法，有关细节关注 [#10430](https://github.com/angular/angular-cli/issues/10430) 进展。

**styles.less**

修改 `./src/styles.less` 的第三方类库的引用方式，应该说目录并不支持 `~@delon` 这种写法，统一采用 `node_modules/@delon`：

```less
@import '~@delon/theme/styles/index';
@import '~@delon/abc/index';
// 替换成：
@import 'node_modules/@delon/theme/styles/index';
@import 'node_modules/@delon/abc/index';
```

## 升级 rxjs6

### zorro

目前 zorro 还未升级 v6，因此，你还必须安装：

```bash
npm i --save rxjs-compat
```

### rxjs

rxjs 提供了 [MIGRATION](https://github.com/ReactiveX/rxjs/blob/master/MIGRATION.md#observable-classes)，重点还是 `rxjs/Observable` 之类的全部统一使用 `rxjs`。总结无非就是所有 `rxjs` 的导入现在只需要两种风格：

```ts
import { Observable, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
```
