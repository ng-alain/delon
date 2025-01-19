---
order: 1000
type: Basic
title: Upgrade to version 19.0
hot: true
---

> This guide applies to the current version ng-alain >= `18`;
> If you encounter problems during the upgrade process, feel free to comment here.
> If you find any errors in this guide, please point out
> Or you have encountered a new problem and solved it, welcome to comment here.

## Before upgrade

1. Make sure `Node.js` >= `18.19.1`.
2. Create a new branch, or use other methods to back up the current project.
3. Delete the `package-lock.json` or `yarn.lock` file.

### 1.Upgrade dependencies

- Upgrade Angular to 18.x version, Run `ng update @angular/core@19 @angular/cli@19 @angular-eslint/schematics@19 ng-zorro-antd@19 ng-alain@19`.
- _Run `ng update @angular/cdk@19`, if you have used `@angular/cdk`._

> NG-ALAIN scaffolding upgrade all change files, please refer to: [#2548](https://github.com/ng-alain/ng-alain/pull/2548/files). Although there were many changes to the files, aside from those automatically handled during `ng update`, most of the adjustments involved switching all the DEMOs to Standalone mode.
