---
order: 55
type: Other
title: 升级到 8.0 版本
---

NG-ALAIN 8.0 变更分为三大部分：

| 类库 | 支持Cli升级 | 描述 |
| --- | ---------- | ---- |
| Angular | Yes | - |
| NG-ZORRO | No | 可能正式版会提供部分支持 |
| Delon | No | 只涉及一处 ACL 类库引用 |

# 前置条件

移除未使用类库：

- `tslint-language-service`
- `core-js` 支持差异加载后 Angular 自动管理 Polyfills

# 升级

## 1、Angular

Angular 升级可以根据 [update.angular.io](https://update.angular.io/#7.0:8.0) 来检查每个步骤，执行下述命令几乎可以无缝升级破坏性变更：

```bash
ng update @angular/cli @angular/core
```

一些值得注意的变更细节：

1. 更新 `package.json` 的依赖包版本信息，但不是完全最新的，可以通过 [#diff-10](https://github.com/ng-alain/ng-alain/pull/1165/files#diff-10) 了解调整细节
2. **调整为支持差异加载** 更新 `tsconfig.json` 的 `module` 为 [esnext](https://github.com/ng-alain/ng-alain/pull/1165/files#diff-e5e546dd2eb0351f813d63d1b39dbc48R8)，并移除 `polyfills.ts` 下所有 `core-js` 的相关引入
3. 自动处理 `ViewChild` 或 `ContentChild` 的破坏性变更，有关变更后使用细节请参考[Static Query Migration Guide](https://angular.io/guide/static-query-migration)
4. 自动处理路由延迟加载模块，有关变更后使用细节请参考[loadChildren string syntax](https://angular.io/guide/deprecations#loadchildren-string-syntax)

## 2、NG-ZORRO

包含 `nz-dropdown` 和 `form` 两处破坏性变更，依然保持旧API至 `9.x` 版本，同时在开发环境下会有 warning。

NG-ZORRO 暂时没有提供 Cli 工具升级，更多细节请参考 [8.x文档站](https://ng-zorro-master.netlify.com/docs/introduce/zh)，以下是变更前后的示例：

### nz-dropdown

```html
<nz-dropdown nzPlacement="bottomRight">
  <div nz-dropdown>Button</div>
  <ul nz-menu>
    <li nz-menu-item>Item 1</li>
    <li nz-menu-item>Item 2</li>
  </ul>
</nz-dropdown>
```

变更后：

```html
<div nz-dropdown nzPlacement="bottomRight" [nzDropdownMenu]="menuTpl">Button</div>
<nz-dropdown-menu #menuTpl="nzDropdownMenu">
  <ul nz-menu>
    <li nz-menu-item>Item 1</li>
    <li nz-menu-item>Item 2</li>
  </ul>
</nz-dropdown-menu>
```

### form

```html
<form nz-form [nzLayout]="'inline'" [formGroup]="validateForm" (ngSubmit)="submitForm()">
  <nz-form-item>
    <nz-form-control>
      <nz-input-group [nzPrefix]="prefixUser">
        <input formControlName="userName" nz-input placeholder="Username" />
      </nz-input-group>
      <nz-form-explain *ngIf="validateForm.get('userName')?.dirty && validateForm.get('userName')?.errors"
      >Please input your username!</nz-form-explain
      >
    </nz-form-control>
  </nz-form-item>
</form>
```

变更后：

```html
<form nz-form [nzLayout]="'inline'" [formGroup]="validateForm" (ngSubmit)="submitForm()">
  <nz-form-item>
    <nz-form-control nzErrorTip="Please input your username!">
      <nz-input-group nzPrefixIcon="user">
        <input formControlName="userName" nz-input placeholder="Username" />
      </nz-input-group>
    </nz-form-control>
  </nz-form-item>
</form>
```

## 3、Delon

手动修改 `package.json` 里的 `@delon/*`、`ng-alain` 依赖包版本号为：`^8.0.0`，并执行：

```bash
yarn
```

### ACL

`DelonACLModule` 需要 `forRoot()` 才会生效 [delon.module.ts](https://github.com/ng-alain/ng-alain/pull/1165/files#diff-19)。

# 可选升级

## tsconfig.json

NG-ALAIN 始终以 Angular Cli 产生的基础结构为基准，因此对于文件结构有些小变化 ，但不影响现有结构：

1. 原 `src/tsconfig.app.json`、`src/tsconfig.spec.json`、`karma.conf.js` 转移至根目录，需要同步修改 `angular.json` 相对应路径
2. `tsconfig.app.json` 和 `tsconfig.spec.json` 无须再单独设定 `paths` 属性
```diff
- "paths": {	
-   "@shared": [ "app/shared/index" ],	
-   "@shared/*": [ "app/shared/*" ],	
-   "@core": [ "app/core/index" ],	
-   "@core/*": [ "app/core/*" ],	
-   "@env/*": [ "environments/*" ]	
- }
  ```
3. 修复 `lint:ts` 命令行相应路径
```diff
- "lint:ts": "tslint -p src/tsconfig.app.json -c tslint.json \"src/**/*.ts\" --fix",
+ "lint:ts": "tslint -c tslint.json \"src/**/*.ts\" --fix",
```

## 命令行

避免执行 `ng build` 时抛出 **JavaScript heap out of memory**：

```diff
- "build": "npm run color-less && ng build --prod --build-optimizer",
+ "build": "npm run color-less && node --max_old_space_size=5120 ./node_modules/@angular/cli/bin/ng build --prod",
- "analyze": "ng build --prod --build-optimizer --stats-json",
+ "analyze": "node --max_old_space_size=5120 ./node_modules/@angular/cli/bin/ng build --prod --stats-json",
```