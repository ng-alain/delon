---
order: 1000
type: Basic
title: Upgrade to version 20.0
hot: true
---

> This guide applies to the current version ng-alain >= `19`;
> If you encounter problems during the upgrade process, feel free to comment here.
> If you find any errors in this guide, please point out
> Or you have encountered a new problem and solved it, welcome to comment here.

## Before upgrade

1. Make sure `Node.js` >= `20.19.0`.
2. Create a new branch, or use other methods to back up the current project.
3. Delete the `package-lock.json` or `yarn.lock` file.

### 1.Upgrade dependencies

- Upgrade Angular to 20.x version, Run `ng update @angular/core@20 @angular/cli@20 angular-eslint@20 ng-zorro-antd@20 ng-alain@20`.
- _Run `ng update @angular/cdk@20`, if you have used `@angular/cdk`._

> NG-ALAIN scaffolding upgrade all change files, please refer to: [#2565](https://github.com/ng-alain/ng-alain/pull/2565/files).

### 2. ng-zorro-antd BREAKING CHANGES

Please note that NG-ZORRO has BREAKING CHANGES; please refer to
https://github.com/NG-ZORRO/ng-zorro-antd/releases/tag/20.0.0 for details.
