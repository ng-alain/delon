---
order: 1000
type: Basic
title: Upgrade to version 22.0
---

> This guide applies to the current version of NG-ALAIN >= `21`;
> If you encounter any problems during the upgrade, feel free to ask. Before asking questions, please read [How to Ask Questions in the Open Source Community](https://github.com/seajs/seajs/issues/545)
> If you find any omissions or errors in this guide, please point them out!
> Or, if you encounter a new problem and have found a solution, feel free to contribute!

## Before You Start

1. First, make sure your `Node.js` version is compatible with the [Angular version compatibility](https://angular.dev/reference/versions)
2. Create a new branch, or back up your current project in another way
3. Delete the `package-lock.json`, `yarn.lock`, or `pnpm-lock.yaml` file from the project

## Upgrade Steps

### Upgrade Related Dependencies

- To upgrade the project to Angular 22, run `ng update @angular/core@22 @angular/cli@22 angular-eslint@22 ng-zorro-antd@22 ng-alain@22`.
- _If you are using `@angular/cdk` separately, run `ng update @angular/cdk@22`_

> > For all changed files related to the NG-ALAIN starter project upgrade, please refer to [#2593](https://github.com/ng-alain/ng-alain/pull/2593/files).

### 2. NG-ZORRO BREAKING CHANGES

Please note that NG-ZORRO contains BREAKING CHANGES; for details, please refer to [22.0.0](
https://github.com/NG-ZORRO/ng-zorro-antd/releases/tag/22.0.0).

### 3. Optional

- Set `pnpm` as the project's `packageManager`
- Remove the `baseUrl` configuration from `tsconfig.json`

### 4. References

- Code style configuration changes [#2636](https://github.com/ng-alain/ng-alain/pull/2636/files)