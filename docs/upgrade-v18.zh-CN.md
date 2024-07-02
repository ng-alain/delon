---
order: 1000
type: Basic
title: 升级到 18.0 版本
hot: true
---

> 本指南适用于当前版本 ng-alain >= `17` ;
> 如果在升级过程中遇到问题，欢迎提出。提问前请阅读 [如何向开源社区提问题](https://github.com/seajs/seajs/issues/545)
> 如果发现本指南存在遗漏/错误，请指出!
> 或者你遇到了新的问题并解决了，欢迎补充!

## 开始之前

1. 首先确保你 `Node.js` >= `18.19.1`
2. 创建新的分支，或者使用其他方式备份当前项目
3. 删除项目下 `package-lock.json` 或 `yarn.lock` 文件
4. 移除 `package.json` 中的 `"postinstall": "ng-less-javascript-enabled-patch"`

## 升级步骤

### 升级相关依赖

- 将项目升级到 Angular 17 运行 `ng update @angular/core@18 @angular/cli@18 @angular-eslint/schematics@18 ng-zorro-antd@18 ng-alain@18`。
- _如果你有单独使用 `@angular/cdk` 请执行 `ng update @angular/cdk@18`_

> NG-ALAIN脚手架升级全部变更文件，请参考：[#2394](https://github.com/ng-alain/ng-alain/pull/2504/files)。

### QA

**throw new Error(`Not found ${lessLangPath}`);**

请先移除 `"postinstall": "ng-less-javascript-enabled-patch"` 保存后再进行升级，`ng-less-javascript-enabled-patch` 会在升级中自动删除。
