---
order: 1000
type: Basic
title: 升级到 13.0 版本
hot: true
---

> 本指南适用于当前版本 ng-alain >= `12`;
> 如果在升级过程中遇到问题，欢迎提出。提问前请阅读 [如何向开源社区提问题](https://github.com/seajs/seajs/issues/545)
> 如果发现本指南存在遗漏/错误，请指出!
> 或者你遇到了新的问题并解决了，欢迎补充!
> 如果升级中遇到问题请前往 [NG-ALAIN V13 Upgrade Guide](https://github.com/ng-alain/ng-alain/issues/2174) 反馈。

## 开始之前

1. 首先确保你 `Node.js` >= `12.20`
2. 创建新的分支，或者使用其他方式备份当前项目
3. 删除项目下 `yarn.lock` 或 `package-lock.json` 文件

## 升级步骤

### 1. 升级相关依赖

- 前往 [update.angular.io](https://update.angular.io/?v=12.0-13.0) 将项目升级到 Angular 13。
- 如果你有单独使用 `@angular/cdk` 请执行 `ng update @angular/cdk@13`

### 2.升级 NG-ZORRO

- 运行 `ng update ng-zorro-antd@13`
- 如果控制台出现警告消息请按提示修改对应代码

### 3.升级 NG-ALAIN

- 运行 `ng update ng-alain@13`

## 常见问题

**Git无法提交**

升级步骤是逐步运行，每一步都需要 `git commit`，若遇到：

```
Must use import to load ES Module: /Users/cipchk/Desktop/work/ng-alain/node_modules/@angular/compiler/fesm2015/compiler.mjs
```

可以注释掉 `.husky/pre-commit` 中的 `npx` 开头的行，在升级完成后再次打开。

**关于tsconfig.json的升级**

Angular13 增加两个配置，使代码更加安全，`ng update` 并不会自动修复，建议按需求手动处理：

- `noImplicitOverride`: 显示的使用 `override` 标记是否覆盖基类（可能涉及页面 `i18n.service.ts`）
- `noPropertyAccessFromIndexSignature`：不允许通过索引签名访问，例如：`this.form.controls.name` 需要变更为 `this.form.controls['name']`（或 `this.form.get('name')!`）
