---
order: 1000
type: Basic
title: Upgrade to version 14.0
hot: true
---

> This guide applies to the current version ng-alain >= `13`;
> If you encounter problems during the upgrade process, feel free to comment here.
> If you find any errors in this guide, please point out
> Or you have encountered a new problem and solved it, welcome to comment here.


## Before upgrade

1. Make sure `Node.js` >= `14.15` <= `16.10.0`.
2. Create a new branch, or use other methods to back up the current project.
3. Delete the `package-lock.json` or `yarn.lock` file.

### 1.Upgrade dependencies

- Upgrade Angular to 14.x version, Run `ng update @angular/core@14 @angular/cli@14 @angular-eslint/schematics@14`.
- Run `ng update @angular/cdk@14`, if you have used `@angular/cdk`.

### 2.Upgrade NG-ZORRO

- Run `ng update ng-zorro-antd@14`.
- If any warning messages appear in the console, follow the prompts to modify the corresponding code.

### 3.Upgrade NG-ALAIN

- Run `ng update ng-alain@14`
