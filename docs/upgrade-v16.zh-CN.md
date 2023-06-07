---
order: 1000
type: Basic
title: 升级到 16.0 版本
hot: true
---

> 本指南适用于当前版本 ng-alain >= `15` ;
> 如果在升级过程中遇到问题，欢迎提出。提问前请阅读 [如何向开源社区提问题](https://github.com/seajs/seajs/issues/545)
> 如果发现本指南存在遗漏/错误，请指出!
> 或者你遇到了新的问题并解决了，欢迎补充!

## 开始之前

1. 首先确保你 `Node.js` >= `16.10.0`
2. 创建新的分支，或者使用其他方式备份当前项目
3. 删除项目下 `package-lock.json` 或 `yarn.lock` 文件

## 升级步骤

### 升级相关依赖

- 将项目升级到 Angular 15 运行 `ng update @angular/core@16 @angular/cli@16 @angular-eslint/schematics@16 ng-zorro-antd@16 ng-alain@16`。
- _如果你有单独使用 `@angular/cdk` 请执行 `ng update @angular/cdk@16`_
- **如果控制台出现警告消息请按提示修改对应代码**
