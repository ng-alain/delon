---
order: 1000
type: Basic
title: Upgrade to version 16.0
hot: true
---

> This guide applies to the current version ng-alain >= `15`;
> If you encounter problems during the upgrade process, feel free to comment here.
> If you find any errors in this guide, please point out
> Or you have encountered a new problem and solved it, welcome to comment here.

## Before upgrade

1. Make sure `Node.js` >= `16.10.0`.
2. Create a new branch, or use other methods to back up the current project.
3. Delete the `package-lock.json` or `yarn.lock` file.

### 1.Upgrade dependencies

- Upgrade Angular to 15.x version, Run `ng update @angular/core@16 @angular/cli@16 @angular-eslint/schematics@16 ng-zorro-antd@16 ng-alain@16`.
- _Run `ng update @angular/cdk@16`, if you have used `@angular/cdk`._
- **If any warning messages appear in the console, follow the prompts to modify the corresponding code.**
