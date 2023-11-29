---
order: 1000
type: Basic
title: Upgrade to version 17.0
hot: true
---

> This guide applies to the current version ng-alain >= `16`;
> If you encounter problems during the upgrade process, feel free to comment here.
> If you find any errors in this guide, please point out
> Or you have encountered a new problem and solved it, welcome to comment here.


## Before upgrade

1. Make sure `Node.js` >= `18.13.0`.
2. Create a new branch, or use other methods to back up the current project.
3. Delete the `package-lock.json` or `yarn.lock` file.

### 1.Upgrade dependencies

- Upgrade Angular to 16.x version, Run `ng update @angular/core@17 @angular/cli@17 @angular-eslint/schematics@17 ng-zorro-antd@17 ng-alain@17`.
- _Run `ng update @angular/cdk@17`, if you have used `@angular/cdk`._
- **If any warning messages appear in the console, follow the prompts to modify the corresponding code.**

> NG-ALAIN scaffolding upgrade all change files, please refer to: [#2394](https://github.com/ng-alain/ng-alain/pull/2394/files).

## Optional

The optional part of the work is centered around Standalone. Currently, NG-ALAIN will reserve some DEMO pages using the NgModule writing method. [#2442](https://github.com/ng-alain/ng-alain/pull/2442/files) contains all changes in this PR.

### Upgrade to Standalone

- Use `bootstrapApplication` instead of `platformBrowserDynamic`
- Use `app.config.ts` instead of `global-config.module.ts`, `app.module.ts`

The `layout`, `dashboard`, `passport` have been rewritten using standalone and can be modified according to [#2442](https://github.com/ng-alain/ng-alain/pull/2442/files) changes.

### DI configuration

- NG-ALAIN removes all DI configuration modes such as `Module. forRoot`. Of course, for compatibility, the `NgModule` writing method is still retained.
- All DI configurations are maintained by `provide*`, see `app.config.ts` for more details
- If you use a third party but does not provide a similar `provide` writing method, you need to transition through `importProvidersFrom`

### HTTP interceptor

- Angular 17 has strict requirements for the order of interceptors to be visible. This upgrade has all been modified to the `HttpInterceptorFn` writing method (see `provideHttpClient` for details)
- If you upgrade from NG-ALAIN 16, `withInterceptorsFromDi()` will be imported by default to be compatible with the `HTTP_INTERCEPTORS` writing method, but it is recommended to upgrade to the new writing method as much as possible, please refer to [#2442](https://github.com/ng-alain/ng-alain/pull/2442/files)

### About `@delon/form`

- Convert all widgets with low frequency into optional imports. All widgets will be automatically imported during this upgrade to ensure compatibility.
