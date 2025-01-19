---
order: 1000
type: Basic
title: 升级到 19.0 版本
hot: true
---

> 本指南适用于当前版本 ng-alain >= `18` ;
> 如果在升级过程中遇到问题，欢迎提出。提问前请阅读 [如何向开源社区提问题](https://github.com/seajs/seajs/issues/545)
> 如果发现本指南存在遗漏/错误，请指出!
> 或者你遇到了新的问题并解决了，欢迎补充!

## 开始之前

1. 首先确保你 `Node.js` >= `18.19.1`
2. 创建新的分支，或者使用其他方式备份当前项目
3. 删除项目下 `package-lock.json` 或 `yarn.lock` 文件

## 升级步骤

### 升级相关依赖

- 将项目升级到 Angular 19 运行 `ng update @angular/core@19 @angular/cli@19 @angular-eslint/schematics@19 ng-zorro-antd@19 ng-alain@19`。
- _如果你有单独使用 `@angular/cdk` 请执行 `ng update @angular/cdk@19`_

> NG-ALAIN脚手架升级全部变更文件，请参考：[#2548](https://github.com/ng-alain/ng-alain/pull/2548/files)。虽然文件变更许多，除 `ng update` 时自动完成，绝大多数是将 DEMO 全部切换成 Standalone 模式。
