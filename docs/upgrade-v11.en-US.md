---
order: 1000
type: Basic
title: Upgrade to version 11.0
hot: true
---

> This guide applies to the current version ng-alain >= 10;
> If you encounter problems during the upgrade process, feel free to comment here.
> If you find any errors in this guide, please point out
> Or you have encountered a new problem and solved it, welcome to comment here.
> If you encounter problems please go to [NG-ALAIN V11 Upgrade Guide](https://github.com/ng-alain/ng-alain/issues/1863) for feedback.


## Before upgrade

1. Make sure `Node.js` >= `10.13`.
2. Create a new branch, or use other methods to back up the current project.
3. Delete the `package-lock.json` or `yarn.lock` file.

### 1.Upgrade dependencies

- Upgrade Angular to 11.x version, ref https://update.angular.io/ .
- Run `ng update @angular/cdk`, if you have used `@angular/cdk`.

### 2.Upgrade NG-ZORRO

- Run `ng update ng-zorro-antd`.
- If any warning messages appear in the console, follow the prompts to modify the corresponding code.

### 3.Upgrade NG-ALAIN

- Run `ng update ng-alain`

**Theme upgrade (optional)**

We have further refined the default theme to `@delon/theme`, which is further streamlined compared to the previous version of the `layout` directory. This part of the upgrade needs to be done manually. For details, please refer to [Basic Layout](https://github.com /ng-alain/ng-alain/tree/master/src/app/layout/basic), [blank layout](https://github.com/ng-alain/ng-alain/tree/master/src/app /layout/blank) new way of writing. For the documentation of the new components, please refer to [Document](https://ng-alain.com/theme/layout-default/en).

### Common Problems

`...`