---
order: 1000
type: Basic
title: 升级到 21.0 版本
hot: true
---

> 本指南适用于当前版本 ng-alain >= `20` ;
> 如果在升级过程中遇到问题，欢迎提出。提问前请阅读 [如何向开源社区提问题](https://github.com/seajs/seajs/issues/545)
> 如果发现本指南存在遗漏/错误，请指出!
> 或者你遇到了新的问题并解决了，欢迎补充!

## 开始之前

1. 首先确保你 `Node.js` >= `22.21.1`
2. 创建新的分支，或者使用其他方式备份当前项目
3. 删除项目下 `package-lock.json` 或 `yarn.lock` 文件

## 升级步骤

### 升级相关依赖

- 将项目升级到 Angular 21 运行 `ng update @angular/core@21 @angular/cli@21 angular-eslint@21 ng-zorro-antd@21 ng-alain@21`。
- _如果你有单独使用 `@angular/cdk` 请执行 `ng update @angular/cdk@21`_

> > NG-ALAIN脚手架升级全部变更文件，请参考：[#2593](https://github.com/ng-alain/ng-alain/pull/2593/files)。

### 2. ng-zorro-antd BREAKING CHANGES

需要注意 NG-ZORRO 有存在 BREAKING CHANGES；细节请参考
https://github.com/NG-ZORRO/ng-zorro-antd/releases/tag/21.0.0

### 3. 参考

- 代码风格配置变更 [#2594](https://github.com/ng-alain/ng-alain/pull/2594/files)
