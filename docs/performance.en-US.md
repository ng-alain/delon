---
order: 80
title:
  en-US: Performance
  zh-CN: 优化
type: Advance
---

## Envelope size optimization

Divided into JavaScript script files and CSS files. The following only describes the script part. For the CSS file, please refer to [Optimize Theme System](/theme/performance).

**Note:** It is recommended to always prioritize **business, optimize to the post-** criteria, and have some understanding of NG-ALAIN before starting to optimize. The optimization scheme in this chapter will change with the change of the version. Please pay attention to the details.

### Structure description

In general, there are two files that are larger after the build: `scripts.js` and `main.js`, and our optimization is mainly for these two items.

**scripts.js**

It comes from a collection of `scripts` nodes of `angular.json`, so the size of this file depends on the size of the third-party component referenced by the `scripts` node.

In general, you should put it under `scripts` when you are using non-Angular third-party components.

**main.js**

Using `ng build` by default will package all `@angular/*`, `ng-zorro-antd`, `@delon/*` and some third-party Angular components. Unless you use the `--vendor-chunk` parameter to separate these classes library.

### Optimization object

We know that the resource file packaged by Angular Cli will contain the hashing value of the file. Which is like the unique identifier of the file. If the module is not modified, no new hashing value will be generated. This ensures that after the user downloads the resource for the first time. No matter how we build the user again, there is no need to download it again.

> In fact, Angular Cli defaults to `--vendor-chunk`. The main factor is that these `@angular/*` are very fast relative to iteration.

According to NG-ALAIN's [module registration guidelines](/docs/module), generate two `shared-delon.module.ts` and` shared-zorro.module.ts` produced are the summary of the import of secondary modules shared by @Delon and NG-ZORRO.

`@delon/abc`,`@delon/chart`, `ng-zorro-antd` The three main libraries all support secondary imports. Only selecting the modules required by the project will effectively solve the problem of package size.

### Conclusion

After NG-ZORRO provides better optimization support, we will release [#684](https://github.com/ng-alain/ng-alain/pull/684) and hope to have a better package size. Expected results.
