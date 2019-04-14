---
order: 80
title:
  en-US: Performance
  zh-CN: 优化
type: Advance
---

## IE Performance

NG-ALAIN has IE support enabled by default. Which adds a certain size to the package and style. If you are very concerned and don't need `IE10` and below support, you can adjust the two configurations:

One: Reduce the body size by reducing the `flexbox` prefix style in `package.json` with the `browserslist` node:

```json
"browserslist": [
  "last 2 versions",
  "not ie <= 10",
  "not ie_mob <= 10"
]
```

Two: Close the `src/polyfills.ts` under `IE9, IE10 and IE11 requires all of the following polyfills. ` The contents of the node can reduce the package size of `polyfills.js`.

## Envelope size optimization

Divided into JavaScript script files and CSS files. The following only describes the script part. For the CSS file, please refer to [Optimize Theme System](/theme/performance).

**Note:** It is recommended to always prioritize **business, optimize to the post-** criteria, and have some understanding of NG-ALAIN before starting to optimize. The optimization scheme in this chapter will change with the change of the version. Please pay attention to the details.

### Structure description

In general, there are two files that are larger after the build: `scripts.js` and `main.js`, and our optimization is mainly for these two items.

**scripts.js**

It comes from a collection of `scripts` nodes of `angular.json`, so the size of this file depends on the size of the third-party component referenced by the `scripts` node. Like `@delon/chart` is dependent on G2 and its own G2 is also a large package size. So by default, the scripts that G2 depends on are treated as third-party components attached to `scripts`.

In general, you should put it under `scripts` when you are using non-Angular third-party components.

**main.js**

Using `ng build` by default will package all `@angular/*`, `ng-zorro-antd`, `@delon/*` and some third-party Angular components. Unless you use the `--vendor-chunk` parameter to separate these classes library.

### Optimization object

We know that the resource file packaged by Angular Cli will contain the hashing value of the file. Which is like the unique identifier of the file. If the module is not modified, no new hashing value will be generated. This ensures that after the user downloads the resource for the first time. No matter how we build the user again, there is no need to download it again.

> In fact, Angular Cli defaults to `--vendor-chunk`. The main factor is that these `@angular/*` are very fast relative to iteration.

According to NG-ALAIN's [module registration guidelines](/docs/module), we generate two core entries that determine the size of the `main.js` package: `delon.module.ts` and `shared.module.ts `.

The only way to reduce our size is to import only the modules we need. By default we don't do this. The main factor is that it adds a lot of extra code and it is limited by NG-ZORRO. Support for the import of secondary modules, so this optimization is not very obvious.

#### ng-zorro-antd

Sub-module import is not supported, so the details are skipped.

#### @delon

`@delon` class library contains layers, each of which contains possibly two-level modules (such as the `abc` class library, which contains dozens of different component modules), all of which are in `delon.module.ts` and ` Shared.module.ts`.

For example, when you explicitly only need `@delon/abc` several components, you only need to import these modules.

```ts
// Register the required modules in delon.module.ts
import { STModule } from '@delon/abc/table';

const ABC_ROOT_MODULES = [ STModule.forRoot() ];

// Import and export in share.module.ts to ensure all lazy modules are valid
const ABC_MODULES = [ STModule ];
@NgModule({
  imports: ...ABC_MODULES,
  exports: ...ABC_MODULES,
})
export class SharedModule {}
```

### Conclusion

After NG-ZORRO provides better optimization support, we will release [#684](https://github.com/ng-alain/ng-alain/pull/684) and hope to have a better package size. Expected results.
