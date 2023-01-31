---
order: 1000
type: Basic
title: 升级到 15.0 版本
hot: true
---

> 本指南适用于当前版本 ng-alain >= `14` ;
> 如果在升级过程中遇到问题，欢迎提出。提问前请阅读 [如何向开源社区提问题](https://github.com/seajs/seajs/issues/545)
> 如果发现本指南存在遗漏/错误，请指出!
> 或者你遇到了新的问题并解决了，欢迎补充!

## 开始之前

1. 首先确保你 `Node.js` >= `16.10.0`
2. 创建新的分支，或者使用其他方式备份当前项目
3. 删除项目下 `package-lock.json` 或 `yarn.lock` 文件

## 升级步骤

### 升级相关依赖

- 将项目升级到 Angular 14 运行 `ng update @angular/core@15 @angular/cli@15 @angular-eslint/schematics@15 ng-zorro-antd@15 ng-alain@15`。
- _如果你有单独使用 `@angular/cdk` 请执行 `ng update @angular/cdk@15`_
- **如果控制台出现警告消息请按提示修改对应代码**

### QA

以下为可选升级：

**移除 `.browserslistrc`**

若需要保持对一些旧 Chrome 版本的支持，例如 360 浏览器，则需要手动恢复，细节参考  [#2310](https://github.com/ng-alain/ng-alain/issues/2310#issuecomment-1299460266)。

**移除 `polyfills.ts`, `test.ts`**
 
Angular15 简化了 `ng new` 的输出，将更多的配置项转移至  `angular.json` 中，好处是可以更好的针对不同环境进行配置，细节请参考 [#2351](https://github.com/ng-alain/ng-alain/pull/2351)。
