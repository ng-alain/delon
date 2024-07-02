---
order: 1000
type: Basic
title: Upgrade to version 18.0
hot: true
---

> This guide applies to the current version ng-alain >= `17`;
> If you encounter problems during the upgrade process, feel free to comment here.
> If you find any errors in this guide, please point out
> Or you have encountered a new problem and solved it, welcome to comment here.


## Before upgrade

1. Make sure `Node.js` >= `18.19.1`.
2. Create a new branch, or use other methods to back up the current project.
3. Delete the `package-lock.json` or `yarn.lock` file.
4. Remove `"postinstall": "ng-less-javascript-enabled-patch"` in `package.json`.

### 1.Upgrade dependencies

- Upgrade Angular to 17.x version, Run `ng update @angular/core@18 @angular/cli@18 @angular-eslint/schematics@18 ng-zorro-antd@18 ng-alain@18`.
- _Run `ng update @angular/cdk@18`, if you have used `@angular/cdk`._

### QA

**throw new Error(`Not found ${lessLangPath}`);**

Please remove `"postinstall": "ng-less-javascript-enabled-patch"` first, save the file and then upgrade. `ng-less-javascript-enabled-patch` will be automatically deleted during the upgrade.
