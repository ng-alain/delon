---
order: 1000
type: Basic
title: Upgrade to version 13.0
hot: true
---

> This guide applies to the current version ng-alain >= `12`;
> If you encounter problems during the upgrade process, feel free to comment here.
> If you find any errors in this guide, please point out
> Or you have encountered a new problem and solved it, welcome to comment here.
> If you encounter problems please go to [NG-ALAIN V13 Upgrade Guide](https://github.com/ng-alain/ng-alain/issues/2174) for feedback.


## Before upgrade

1. Make sure `Node.js` >= `12.20`.
2. Create a new branch, or use other methods to back up the current project.
3. Delete the `yarn.lock` or `package-lock.json` file.

### 1.Upgrade dependencies

- Upgrade Angular to 13.x version, ref [update.angular.io](https://update.angular.io/?v=12.0-13.0).
- Run `ng update @angular/cdk@13`, if you have used `@angular/cdk`.

### 2.Upgrade NG-ZORRO

- Run `ng update ng-zorro-antd@13`.
- If any warning messages appear in the console, follow the prompts to modify the corresponding code.

### 3.Upgrade NG-ALAIN

- Run `ng update ng-alain@13`

### Common Problems

**Git cannot submit**

The upgrade steps are run step by step, each step requires `git commit`, if you encounter:

```
Must use import to load ES Module: /Users/cipchk/Desktop/work/ng-alain/node_modules/@angular/compiler/fesm2015/compiler.mjs
```

You can comment out the line starting with `npx` in `.husky/pre-commit` and open it again after the upgrade is complete.

**About the upgrade of tsconfig.json**

Angular13 adds two configurations to make the code more secure. `ng update` will not be automatically repaired. It is recommended to handle it manually as required:

-`noImplicitOverride`: Show whether the use of `override` tag overrides the base class (may involve the page `i18n.service.ts`)
-`noPropertyAccessFromIndexSignature`: Access through index signature is not allowed, for example: `this.form.controls.name` needs to be changed to `this.form.controls['name']` (or `this.form.get('name' )!`)
