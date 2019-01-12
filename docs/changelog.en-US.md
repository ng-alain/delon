---
order: 100
title: Change Log
type: Other
---

# [7.0.0-rc.4](https://github.com/ng-alain/delon/compare/7.0.0-rc.3...7.0.0-rc.4) (2019-01-12)

### Scaffold

* feat: remove `editor.snippetSuggestions` config, since the latest version [ng-zorro-vscode](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode) is not recommended ([#861](https://github.com/ng-alain/ng-alain/pull/861))

### Bug Fixes

* **module:*:** fix losing global config ([#378](https://github.com/ng-alain/delon/issues/378)) ([b58334f](https://github.com/ng-alain/delon/commit/b58334f))
* **module:reuse-tab:** fix overflow when route changed ([#369](https://github.com/ng-alain/delon/issues/369)) ([83d7831](https://github.com/ng-alain/delon/commit/83d7831)), closes [#361](https://github.com/ng-alain/delon/issues/361)
* **module:se:** fix error message style ([#371](https://github.com/ng-alain/delon/issues/371)) ([c5431f8](https://github.com/ng-alain/delon/commit/c5431f8)), closes [#370](https://github.com/ng-alain/delon/issues/370)
* **module:sf:autocomplete:**  fix invalid value when item is SFSchemaEnum ([#362](https://github.com/ng-alain/delon/issues/362)) ([9cd179e](https://github.com/ng-alain/delon/commit/9cd179e))
* **module:st:** fix disabled check all when  all data is disabled ([#367](https://github.com/ng-alain/delon/issues/367)) ([20b654e](https://github.com/ng-alain/delon/commit/20b654e)), closes [#363](https://github.com/ng-alain/delon/issues/363)

### Features

* **module:reuse-tab:** support custom context menu ([#368](https://github.com/ng-alain/delon/issues/368)) ([2c0eb89](https://github.com/ng-alain/delon/commit/2c0eb89)), closes [#364](https://github.com/ng-alain/delon/issues/364)
* **module:sidebar-nav:** add recursivePath property ([#374](https://github.com/ng-alain/delon/issues/374)) ([e24ee4f](https://github.com/ng-alain/delon/commit/e24ee4f)), closes [#373](https://github.com/ng-alain/delon/issues/373) [#365](https://github.com/ng-alain/delon/issues/365)


# [7.0.0-rc.3](https://github.com/ng-alain/delon/compare/7.0.0-rc.2...7.0.0-rc.3) (2018-12-29)

### Bug Fixes

* **module:theme:** fix not found `window` value ([#355](https://github.com/ng-alain/delon/issues/355)) ([3be639a](https://github.com/ng-alain/delon/commit/3be639a))


# [7.0.0-rc.2](https://github.com/ng-alain/delon/compare/7.0.0-rc.1...7.0.0-rc.2) (2018-12-28)

### Scaffold

* Route wildcards point to `/exception/404` ([db3055b](https://github.com/ng-alain/ng-alain/commit/db3055b))
* Use `scrollPositionRestoration` instead of `ScrollService` ([135327b](https://github.com/ng-alain/ng-alain/commit/135327b))
* Optimization `default.interceptor.ts`

### Bug Fixes

* **module:cache:** fix specified storage type parameters in `get` ([#343](https://github.com/ng-alain/delon/issues/343)) ([fd005e5](https://github.com/ng-alain/delon/commit/fd005e5))
* **module:reuse-tab:** fix skip not closable in store ([#344](https://github.com/ng-alain/delon/issues/344)) ([fa08c07](https://github.com/ng-alain/delon/commit/fa08c07))
* **module:se:** fix ingore error visual when is disabled ([#339](https://github.com/ng-alain/delon/issues/339)) ([7223e85](https://github.com/ng-alain/delon/commit/7223e85))
* **module:sf:** fix invalid trigger submit via add button ([#349](https://github.com/ng-alain/delon/issues/349)) ([8e11729](https://github.com/ng-alain/delon/commit/8e11729)), closes [#348](https://github.com/ng-alain/delon/issues/348)
* **module:sf:** should based on item unsubscription ([#345](https://github.com/ng-alain/delon/issues/345)) ([2520f11](https://github.com/ng-alain/delon/commit/2520f11))

### Features

* **module:reuse-tab:** add keeping scroll property ([#347](https://github.com/ng-alain/delon/issues/347)) ([862d8f4](https://github.com/ng-alain/delon/commit/862d8f4))


# [7.0.0-rc.1](https://github.com/ng-alain/delon/compare/7.0.0-rc.0...7.0.0-rc.1) (2018-12-24)

### Scaffold

* add exception trigger
* adding Polish locale
* optimized path configuration ([#825](https://github.com/ng-alain/ng-alain/pull/825))

### Bug Fixes

* **module:auth:** fix unrecognized full URL anonymous key ([#328](https://github.com/ng-alain/delon/issues/328)) ([e223ccb](https://github.com/ng-alain/delon/commit/e223ccb))
* **module:sf:** shoule trigger detect change when reset value ([#332](https://github.com/ng-alain/delon/issues/332)) ([ffd365b](https://github.com/ng-alain/delon/commit/ffd365b))
* **module:sf:cascader:** fix invalid search when labelProperty or valueProperty is empty ([#325](https://github.com/ng-alain/delon/issues/325)) ([4d4e53f](https://github.com/ng-alain/delon/commit/4d4e53f))
* **module:st:** should recalculate no value when call removeRow method ([#331](https://github.com/ng-alain/delon/issues/331)) ([6c8c2d1](https://github.com/ng-alain/delon/commit/6c8c2d1)), closes [#330](https://github.com/ng-alain/delon/issues/330)
* **module:theme:** fix keeping show scroll bar in firefox ([#336](https://github.com/ng-alain/delon/issues/336)) ([727d0d7](https://github.com/ng-alain/delon/commit/727d0d7))
* **module:theme:menu:** tag deprecated `linkExact` ([#337](https://github.com/ng-alain/delon/issues/337)) ([ebbeed3](https://github.com/ng-alain/delon/commit/ebbeed3))

### Features

* **module:testing:** add @delon/testing lib ([#329](https://github.com/ng-alain/delon/issues/329)) ([9d533cf](https://github.com/ng-alain/delon/commit/9d533cf))
* **module:auth:** add `referrer` property ([#334](https://github.com/ng-alain/delon/issues/334)) ([0510864](https://github.com/ng-alain/delon/commit/0510864))
* **module:mock:** add `executeOtherInterceptors` config ([#321](https://github.com/ng-alain/delon/issues/321)) ([d77e8e9](https://github.com/ng-alain/delon/commit/d77e8e9))
* **module:sidebar-nav:** add `disabledAcl` property ([#337](https://github.com/ng-alain/delon/issues/337)) ([ebbeed3](https://github.com/ng-alain/delon/commit/ebbeed3))
* **module:st:** add `expandRowByClick` property ([#326](https://github.com/ng-alain/delon/issues/326)) ([a8a6695](https://github.com/ng-alain/delon/commit/a8a6695))
* **module:st:** support response body is an array type ([#327](https://github.com/ng-alain/delon/issues/327)) ([4e681dc](https://github.com/ng-alain/delon/commit/4e681dc))
* **module:util:** export `stringTemplateOutlet` ([#324](https://github.com/ng-alain/delon/issues/324)) ([e8d9ed1](https://github.com/ng-alain/delon/commit/e8d9ed1))
* **module:theme:** adding Polish locale ([#308](https://github.com/ng-alain/delon/issues/308)) ([025282c](https://github.com/ng-alain/delon/commit/025282c))

### BREAKING CHANGES

* **module:chart:timeline:** remove tickCount, sync antd 3.4 ([#323](https://github.com/ng-alain/delon/issues/323)) ([20920fc](https://github.com/ng-alain/delon/commit/20920fc))

# [7.0.0-rc.0](https://github.com/ng-alain/delon/compare/2.0.1...7.0.0-rc.0) (2018-12-14)

`ng-alain` will track the major version of `@angular/core` from `7.0.0-rc.0` like other angular libraries.

- Support Angular 7.0
- Refactor `@delon/*` libraries, pls refer to the two changes:
  - Remove `.forRoot()`, [commit](https://github.com/ng-alain/ng-alain/pull/764/files#diff-e6d91e942371baa2d86bc42c2fa9ede8L85)
  - `notify-icon` component need to be added `btnClass`、`btnIconClass` property, [commit](https://github.com/ng-alain/ng-alain/pull/764/files#diff-b526c13479119e1a38465bdaa867009bR16)
- Refactor default theme and sample pages using OnPush mode, pls refer to [#764](https://github.com/ng-alain/ng-alain/pull/764)

### Bug Fixes

* **module:st:** should clean filter style when not filter ([#303](https://github.com/ng-alain/delon/issues/303)) ([96430d1](https://github.com/ng-alain/delon/commit/96430d1))
* **module:st:** fix missing body in table
* **module:st:** fix missing merge config in modal or drawer, [#815](https://github.com/ng-alain/ng-alain/issues/815)
* **module:se:** fix ingore error visual when is disabled, [#312](https://github.com/ng-alain/delon/issues/312)
* **schematics:** fix template in list command ([#302](https://github.com/ng-alain/delon/issues/302)) ([839147e](https://github.com/ng-alain/delon/commit/839147e))

### Features

* **module:theme:title:** add setTitleByI18n method ([#299](https://github.com/ng-alain/delon/issues/299)) ([80a9636](https://github.com/ng-alain/delon/commit/80a9636))
* **module:utils:** add `isUrl` validate
* **module:mock:** support `HttpResponse`, [#813](https://github.com/ng-alain/ng-alain/issues/813)
* **module:theme:** add `@forced-turn-off-nz-modal-animation-enabled`
* **module:utils:** add `deepMerge` function

### BREAKING CHANGES

* **module:utils:** remove `yuan`


## 2.0.1

`2018-11-25`

### Bug Fixes

* **module:page-header:** should be clean old breadcrumb data when changes ([#296](https://github.com/ng-alain/delon/issues/296)) ([862aa9d](https://github.com/ng-alain/delon/commit/862aa9d)), closes [#293](https://github.com/ng-alain/delon/issues/293)
* **module:sf:autocomplete:** fix missing value ([#291](https://github.com/ng-alain/delon/issues/291)) ([ac17fb3](https://github.com/ng-alain/delon/commit/ac17fb3)), closes [#290](https://github.com/ng-alain/delon/issues/290)
* **module:sf:button:** fix invalid button size ([#294](https://github.com/ng-alain/delon/issues/294)) ([96f8adc](https://github.com/ng-alain/delon/commit/96f8adc))
* **module:theme:style:** fix dropdown + button spacing when closed preserve ([#292](https://github.com/ng-alain/delon/issues/292)) ([d330e5e](https://github.com/ng-alain/delon/commit/d330e5e))
* **module:theme:title:** fix default property should  be not read-only ([#295](https://github.com/ng-alain/delon/issues/295)) ([a882507](https://github.com/ng-alain/delon/commit/a882507))

### Features

* **module:theme:** add tr-TR locale ([#289](https://github.com/ng-alain/delon/issues/289)) ([9df6f0e](https://github.com/ng-alain/delon/commit/9df6f0e)), closes [#288](https://github.com/ng-alain/delon/issues/288)


## 2.0.0

`2018-11-20`

### **Support for upgrading 1.x to 2.x using tools, please refer to [Upgrade Guide](https://ng-alain.com/docs/upgrade-v2/en)**

### Scaffold

* **all:** `OnPush` mode priority ([#772](https://github.com/ng-alain/ng-alain/pull/772))
* **router:** add SimpleGuard of root router ([#774](https://github.com/ng-alain/ng-alain/pull/774))
* **i18n:** add passport pages ([#777](https://github.com/ng-alain/ng-alain/pull/777))

### Bug Fixes

* **module:mock:** fix loading status of _HttClient ([#270](https://github.com/ng-alain/delon/pull/270))
* **module:sf:upload:** fix missing size property of upload widget ([#274](https://github.com/ng-alain/delon/pull/274))
* **module:sf:checkbox:** fix delayed rendering when onpush strategy ([#278](https://github.com/ng-alain/delon/pull/278))
* **module:st:** fix render null when is value is null in edge or ie ([#275](https://github.com/ng-alain/delon/pull/275))
* **module:page-header:** should be refresh breadcrumb when router changed ([#276](https://github.com/ng-alain/delon/pull/276))

### Features

* **schematics:** Support for dynamic build ng-alain of specified language versions ([#286](https://github.com/ng-alain/delon/issues/286)) ([f0bff6d](https://github.com/ng-alain/delon/commit/f0bff6d))
* **module:st:** add clear & clearStatus methods ([#282](https://github.com/ng-alain/delon/pull/282))
* **module:st:** add single sort config [#775](https://github.com/ng-alain/ng-alain/issues/775) ([#283](https://github.com/ng-alain/delon/pull/283))
* **module:http:** support decorator `@GET`, `@POST` etc, [Document](https://ng-alain.com/theme/http/en#Decorators) ([#284](https://github.com/ng-alain/delon/pull/284))
* **schematics:** Support for dynamic build ng-alain of specified language versions ([#286](https://github.com/ng-alain/delon/pull/286))

### BREAKING CHANGES

* **module:st:** remove deprecated events: `checkboxChange`, `radioChange`, `sortChange` etc ([#281](https://github.com/ng-alain/delon/pull/281))


## 2.0.0-rc.3

`2018-11-09`

### Scaffold

* fix misspelled word, `GLOBAL_THIRD_MDOULES` changed to `GLOBAL_THIRD_MODULES` ([#762](https://github.com/ng-alain/ng-alain/pull/762))

### Bug Fixes

* **module:sf:checkbox:** fix missing title ([#259](https://github.com/ng-alain/delon/issues/259)) ([b78f38a](https://github.com/ng-alain/delon/commit/b78f38a)), closes [#258](https://github.com/ng-alain/delon/issues/258)
* **module:sf:tree-select:** fix children repeat data when expand changes ([#260](https://github.com/ng-alain/delon/issues/260)) ([2bfd75f](https://github.com/ng-alain/delon/commit/2bfd75f))
* **module:st:** fix invalid trigger when used icon & pop ([#256](https://github.com/ng-alain/delon/issues/256)) ([598f9ab](https://github.com/ng-alain/delon/commit/598f9ab))
* **module:theme:menu:** fix shortcut children polluted ([#265](https://github.com/ng-alain/delon/issues/265)) ([a255fe0](https://github.com/ng-alain/delon/commit/a255fe0))

### Features

* **module:sidebar-nav:** add icon more properties ([#263](https://github.com/ng-alain/delon/issues/263)) ([5b696f5](https://github.com/ng-alain/delon/commit/5b696f5))
* **module:st:** add `no` of type ([#261](https://github.com/ng-alain/delon/issues/261)) ([8fc29ce](https://github.com/ng-alain/delon/commit/8fc29ce))
* **module:st:** add `removeRow` method ([#255](https://github.com/ng-alain/delon/issues/255)) ([13a3a21](https://github.com/ng-alain/delon/commit/13a3a21))
* **module:st:** add `rowClassName` property ([#268](https://github.com/ng-alain/delon/issues/268)) ([0af1484](https://github.com/ng-alain/delon/commit/0af1484))
* **module:st:** add icon & text coexist ([#256](https://github.com/ng-alain/delon/issues/256)) ([598f9ab](https://github.com/ng-alain/delon/commit/598f9ab))
* **module:theme:** add `.scrollbar` style service of div ([#267](https://github.com/ng-alain/delon/issues/267)) ([161d328](https://github.com/ng-alain/delon/commit/161d328))
* **module:theme:** add safe url pipe ([#254](https://github.com/ng-alain/delon/issues/254)) ([62724a0](https://github.com/ng-alain/delon/commit/62724a0))
* **schematics:** add color less when running `ng` commend ([#253](https://github.com/ng-alain/delon/issues/253)) ([145e4a9](https://github.com/ng-alain/delon/commit/145e4a9))


## 2.0.0-rc.2

`2018-11-01`

### Bug Fixes

* **module:sf:** fix attempt to use a destroyed error ([#248](https://github.com/ng-alain/delon/issues/248)) ([3e470e7](https://github.com/ng-alain/delon/commit/3e470e7))
* **module:sf:** fix button spanLabelFixed is zero value ([#242](https://github.com/ng-alain/delon/issues/242)) ([1f601e2](https://github.com/ng-alain/delon/commit/1f601e2))
* **module:theme:** fix grey color values ([#249](https://github.com/ng-alain/delon/issues/249)) ([6234538](https://github.com/ng-alain/delon/commit/6234538))
* **module:theme:** fix ng-invalid style ([#243](https://github.com/ng-alain/delon/issues/243)) ([fe6d104](https://github.com/ng-alain/delon/commit/fe6d104))
* **schematics:** fix repeat alias name ([#247](https://github.com/ng-alain/delon/issues/247)) ([4f744fa](https://github.com/ng-alain/delon/commit/4f744fa))

### Features

* **module:mock:** support array params of queryString ([#246](https://github.com/ng-alain/delon/issues/246)) ([f0135ce](https://github.com/ng-alain/delon/commit/f0135ce))
* **module:st:** add icon of button ([#240](https://github.com/ng-alain/delon/issues/240)) ([1145d47](https://github.com/ng-alain/delon/commit/1145d47))
* **module:theme:MenuService:** add recursive upward find in menu service ([#244](https://github.com/ng-alain/delon/issues/244)) ([c391d3a](https://github.com/ng-alain/delon/commit/c391d3a))
* **module:theme:html:** safe html, add `| html` pipe ([#239](https://github.com/ng-alain/delon/issues/239)) ([0298665](https://github.com/ng-alain/delon/commit/0298665))
* **module:theme:i18n:** add i18n pipe ([#238](https://github.com/ng-alain/delon/issues/238)) ([423c9c3](https://github.com/ng-alain/delon/commit/423c9c3))

## 2.0.0-rc.1

`2018-10-25`

### Bug Fixes

* **form:** fix repeated trigger change detection ([#224](https://github.com/ng-alain/delon/issues/224)) ([a9f2db6](https://github.com/ng-alain/delon/commit/a9f2db6))
* **form:checkbox:** fix misplaced layout of checkbox widget ([#226](https://github.com/ng-alain/delon/issues/226)) ([d75600e](https://github.com/ng-alain/delon/commit/d75600e))
* **form:date:** fix missing nzShowTime in date widgets ([#223](https://github.com/ng-alain/delon/issues/223)) ([a40bc13](https://github.com/ng-alain/delon/commit/a40bc13))
* **st:** fix filter table header in ant design 3.10 ([#229](https://github.com/ng-alain/delon/issues/229)) ([0d70d26](https://github.com/ng-alain/delon/commit/0d70d26))
* **schematics:** fix duplcated alias `t` in tpl command ([#231](https://github.com/ng-alain/delon/issues/231)) ([829f11e](https://github.com/ng-alain/delon/commit/829f11e))
* **schematics:** fix invalid msgSrv property in edit page ([#225](https://github.com/ng-alain/delon/issues/225)) ([e3270e4](https://github.com/ng-alain/delon/commit/e3270e4))
* **schematics:** fix used translate when not i18n ([#230](https://github.com/ng-alain/delon/issues/230)) ([93163a9](https://github.com/ng-alain/delon/commit/93163a9))

### Features

* **schematics:** optimization `-t`, could be set like `bus/list` ([#231](https://github.com/ng-alain/delon/issues/231)) ([829f11e](https://github.com/ng-alain/delon/commit/829f11e))
* **schematics:** support 1.x to 2.0 via `ng update` [Document](https://ng-alain.com/docs/upgrade-v2#ng-update)
* **schematics:plugin:** add `icon` plugin [Document](https://ng-alain.com/cli/plugin#icon)
* sync ng-zorro-antd 1.7.1 ([#228](https://github.com/ng-alain/delon/issues/228)) ([9a62ea3](https://github.com/ng-alain/delon/commit/9a62ea3))

### BREAKING CHANGES

* **module:theme:** used `NzDropdownService` instead of `ContextMenuService` ([#234](https://github.com/ng-alain/delon/pull/234))


## 2.0.0-beta.5

`2018-10-15`

### Bug Fixes

* **form:** fix invalid disabled status when is readOnly ([#212](https://github.com/ng-alain/delon/issues/212)) ([6a68def](https://github.com/ng-alain/delon/commit/6a68def))
* **scaffold:** use zh instead of zh-Hans ([6972e58](https://github.com/ng-alain/ng-alain/commit/6972e58))

### Features

* **code-style:** upgrade husky ([#208](https://github.com/ng-alain/delon/issues/208)) ([61c6214](https://github.com/ng-alain/delon/commit/61c6214))
  - Scaffold Change ([dd1cc90](https://github.com/ng-alain/ng-alain/commit/dd1cc90))
* **abc.st:** add total i18n ([#203](https://github.com/ng-alain/delon/issues/203)) ([ec0b0df](https://github.com/ng-alain/delon/commit/ec0b0df))
* **theme:** add page loading styles ([#207](https://github.com/ng-alain/delon/issues/207)) ([ad43622](https://github.com/ng-alain/delon/commit/ad43622))
  - Scaffold Change: Optimize i18n switching style ([8b6f318](https://github.com/ng-alain/ng-alain/commit/8b6f318))

### BREAKING CHANGES

* **theme:** ([6b8168f](https://github.com/ng-alain/ng-alain/commit/6b8168f))
  + `layout-fixed` was changed to `alain-default__fixed`
  + `layout-boxed` was changed to `alain-default__boxed`
  + `aside-collapsed` was changed to `alain-default__collapsed`

## 2.0.0-beta.4

`2018-10-07`

### Bug Fixes

* **form:date:** fix invalid default value in flat mode ([#187](https://github.com/ng-alain/delon/issues/187)) ([d2c89ca](https://github.com/ng-alain/delon/commit/d2c89ca))
* **theme:styles** fix duplicate white spaces ([#193](https://github.com/ng-alain/delon/issues/193)) ([1545178](https://github.com/ng-alain/delon/commit/1545178))
* **theme:drawer** should be import in forChild ([1545178](https://github.com/ng-alain/delon/commit/09516ea))


### Features

* **abc:page-header:** add loading & wide properies ([#194](https://github.com/ng-alain/delon/issues/194)) ([299e877](https://github.com/ng-alain/delon/commit/299e877))
* **form:number:** add prefix & unit properties ([#189](https://github.com/ng-alain/delon/issues/189)) ([4121b90](https://github.com/ng-alain/delon/commit/4121b90))
* **schematice:** add generate color less ([#196](https://github.com/ng-alain/delon/issues/196)) ([d7f7da6](https://github.com/ng-alain/delon/commit/d7f7da6))
* **theme:context-menu:** add context menu service ([#191](https://github.com/ng-alain/delon/issues/191)) ([f0e96f6](https://github.com/ng-alain/delon/commit/f0e96f6))

### BREAKING CHANGES

* **abc:** use input instead of ContentChild ([cfd0497](https://github.com/ng-alain/delon/commit/cfd0497))


## 2.0.0-beta.3

`2018-9-29`

- @delon/theme
  - 新增 [DrawerHelper](https://ng-alain.com/theme/drawer/zh) 辅助类
  - 修复 `_HttpClient` 对象 `param` 参数解析不标准，[#694](https://github.com/ng-alain/ng-alain/issues/694)
  - 移除一些已过期样式，[#commit](https://github.com/ng-alain/ng-alain/pull/691)
    - 使用 `nzBlock` 替代 `.ant-btn__block`
    - 使用 `nzCover` 替代 `.ant-card__img`
    - 移除多余 `.ant-card__title-img`，antd 已修复
    - 移除 `.nz-carousel__dot-{color}` 由手工自定义
    - 移除 `.box-placeholder` 由手工自定义
- @delon/abc
  - 新增 `st` 按钮类型 `drawer` 打开一个抽屉目标组件
  - 修复 `_HttpClient` 对象 `param` 参数解析不标准，[#694](https://github.com/ng-alain/ng-alain/issues/694)
- @delon/form
  - 修复 `cascader` 小部件不支持 `showSearch` 参数，[#695](https://github.com/ng-alain/ng-alain/issues/695)
  - 修复 `g2-custom` 默认应该块模型
- @delon/util
  - 修复 `getTimeDistance` 参数 `-today` 应是昨天至今天，[#696](https://github.com/ng-alain/ng-alain/issues/696)
- cli
  - 增加[自定义业务页模板](https://ng-alain.com/cli/generate/zh#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A1%B5)功能

## 2.0.0-beta.2

`2018-9-22`

- 同步 `ng-zorro-antd` 至 `1.6.0`
  - 新增 skeleton 组件
- @delon/abc
  - 重构 `st` 组件Http请求使用 `_HttpClient`，[#685](https://github.com/ng-alain/ng-alain/issues/685)
  - 新增 `global-footer` 支持自定义组件
- @delon/form
  - 修复固定标签宽度时布局被挤兑
  - 修复文本框在 Safari 浏览器下会重复录入，[#651](https://github.com/ng-alain/ng-alain/issues/651)
  - 修复单多选框组 `readOnly` 无效问题，[#167](https://github.com/ng-alain/delon/issues/167)
- @delon/theme
  - 增加 `setLayout` 支持对象替换

## 2.0.0-beta.1

`2018-9-16`

- 重构使用 ng-packagr 打包，支持 `@delon/abc`、`@delon/chart` 次级导入
- 增加 `DelonLocaleModule` 支持所有 `@delon/*` 模块的[国际化](https://ng-alain.com/theme/locale)
- 脚手架
  - 增加[默认语言](https://ng-alain.com/docs/i18n#默认语言)示例代码，[commit](https://github.com/ng-alain/ng-alain/pull/683)
  - 增加个人中心、设置示例页，[commit](https://github.com/ng-alain/ng-alain/pull/682)
- @delon/chart
  - **BREAKING CHANGES** 重命名 `g2-chart` 为 `g2-custom`
  - 修复部分未导出模块，[#162](https://github.com/ng-alain/delon/issues/162)
- @delon/theme
  - 增加 `.ant-tag__plus` 样式
- @delon/form
  - 修复 select 小部件在 Search 模式下不支持 `width` 问题
  - 修复 select 小部件若存在初始值则无法清空，[#674](https://github.com/ng-alain/ng-alain/issues/674)
  - 修复 number 类型若存在初始值则无法清空，[#675](https://github.com/ng-alain/ng-alain/issues/675)
- cli
  - 修复 `view` 插件使用过期组件

## 2.0.0-beta.0

`2018-9-9`

[升级指南](/docs/upgrade-v2)

### 1.x

1.x 历史变更日志请至[1.x-doc站](https://ng-alain.github.io/1.x-doc/docs/changelog)。