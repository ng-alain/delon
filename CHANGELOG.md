# [8.2.0](https://github.com/ng-alain/delon/compare/8.1.0...8.2.0) (2019-07-20)


### Bug Fixes

* **abc:*:** fix `sv`, `se` title styles ([#651](https://github.com/ng-alain/delon/issues/651)) ([d92a21d](https://github.com/ng-alain/delon/commit/d92a21d))
* **auth:** fix `referrer.url` should be always latest router url ([#654](https://github.com/ng-alain/delon/issues/654)) ([89098e1](https://github.com/ng-alain/delon/commit/89098e1))


### Features

* **abc:reuse-tab:** add `tabType` property ([#652](https://github.com/ng-alain/delon/issues/652)) ([9da990f](https://github.com/ng-alain/delon/commit/9da990f))



# [8.1.0](https://github.com/ng-alain/delon/compare/8.0.0...8.1.0) (2019-07-12)


### Bug Fixes

* **abc:st:** fix losing default page config ([#649](https://github.com/ng-alain/delon/issues/649)) ([8f59ea2](https://github.com/ng-alain/delon/commit/8f59ea2))
* **form:** fix losing inherit of `ui` property value ([#647](https://github.com/ng-alain/delon/issues/647)) ([f2df673](https://github.com/ng-alain/delon/commit/f2df673))
* **form:** fix missing style of widget item ([#646](https://github.com/ng-alain/delon/issues/646)) ([fe2f0fe](https://github.com/ng-alain/delon/commit/fe2f0fe))
* **theme:menu:** fix can be choose one of `text` or `i18n` ([#648](https://github.com/ng-alain/delon/issues/648)) ([3200998](https://github.com/ng-alain/delon/commit/3200998))


### Features

* **abc:st:** add `index` argument of `format` ([#644](https://github.com/ng-alain/delon/issues/644)) ([498d0b7](https://github.com/ng-alain/delon/commit/498d0b7))
* **cli:** add proxying to a backend server ([#645](https://github.com/ng-alain/delon/issues/645)) ([10c91d8](https://github.com/ng-alain/delon/commit/10c91d8))



# [8.0.0](https://github.com/ng-alain/delon/compare/8.0.0-rc.1...8.0.0) (2019-07-03)


### Bug Fixes

* **theme:style:** fix aside user style ([#639](https://github.com/ng-alain/delon/issues/639)) ([ede1d15](https://github.com/ng-alain/delon/commit/ede1d15))


### Features

* **abc:st:** add `tooltip` property in button ([#640](https://github.com/ng-alain/delon/issues/640)) ([181e3a1](https://github.com/ng-alain/delon/commit/181e3a1))



# [8.0.0-rc.1](https://github.com/ng-alain/delon/compare/8.0.0-rc.0...8.0.0-rc.1) (2019-06-29)


### Bug Fixes

* **abc:st:** ingore `title` required in `STColumn` ([#632](https://github.com/ng-alain/delon/issues/632)) ([69608c5](https://github.com/ng-alain/delon/commit/69608c5))
* **cli:plugin:icon:** fix unidentified `nzType` property ([#637](https://github.com/ng-alain/delon/issues/637)) ([2784a5a](https://github.com/ng-alain/delon/commit/2784a5a))
* **form:array:** fix disabled add & remove buttons when `readOnly` is `true` ([#633](https://github.com/ng-alain/delon/issues/633)) ([15194cc](https://github.com/ng-alain/delon/commit/15194cc))
* **form:array:** fix invalid value subscript of path value ([#628](https://github.com/ng-alain/delon/issues/628)) ([09807f7](https://github.com/ng-alain/delon/commit/09807f7))
* **form:upload:** fix invalid `showUploadList` property ([#634](https://github.com/ng-alain/delon/issues/634)) ([54c3b90](https://github.com/ng-alain/delon/commit/54c3b90))


### Features

* **abc:st:** add `emitReload` of `resetColumns` method ([#635](https://github.com/ng-alain/delon/issues/635)) ([a96123e](https://github.com/ng-alain/delon/commit/a96123e))



# [8.0.0-rc.0](https://github.com/ng-alain/delon/compare/7.7.1...8.0.0-rc.0) (2019-06-23)


### Bug Fixes

* **form:*:** fix invalid render value when call `setValue` method ([#622](https://github.com/ng-alain/delon/issues/622)) ([4cea3b7](https://github.com/ng-alain/delon/commit/4cea3b7))


### Code Refactoring

* refactor dependencies ([#616](https://github.com/ng-alain/delon/issues/616)) ([34db1dd](https://github.com/ng-alain/delon/commit/34db1dd))


### Features

* **abc:down-file:** add `down-file_not-support` & `down-file__disabled` ([#624](https://github.com/ng-alain/delon/issues/624)) ([2369153](https://github.com/ng-alain/delon/commit/2369153))
* **abc:st:** `confirmText`, `clearText` support i18n text ([#618](https://github.com/ng-alain/delon/issues/618)) ([a8cd300](https://github.com/ng-alain/delon/commit/a8cd300))
* **abc:st:** add keyword in filter ([#612](https://github.com/ng-alain/delon/issues/612)) ([543236d](https://github.com/ng-alain/delon/commit/543236d))
* **form:** `optionalHelp` support complex attributes ([#621](https://github.com/ng-alain/delon/issues/621)) ([d45fddf](https://github.com/ng-alain/delon/commit/d45fddf))
* **form:** support i18n ([#625](https://github.com/ng-alain/delon/issues/625)) ([e1bbbdb](https://github.com/ng-alain/delon/commit/e1bbbdb))
* **util:deepMergeKey:** support `null` & `undefined` of objects parament ([#620](https://github.com/ng-alain/delon/issues/620)) ([a8ddbb8](https://github.com/ng-alain/delon/commit/a8ddbb8))


### Performance Improvements

* **cli:** optimize to provide more detailed errors ([#619](https://github.com/ng-alain/delon/issues/619)) ([7ebef13](https://github.com/ng-alain/delon/commit/7ebef13))


### BREAKING CHANGES

* `DelonACLModule` muse be using `forRoot()`



## [7.7.1](https://github.com/ng-alain/delon/compare/7.7.0...7.7.1) (2019-06-17)


### Bug Fixes

* **form:select:** fix invalid value via click clean ([#611](https://github.com/ng-alain/delon/issues/611)) ([8ab8d45](https://github.com/ng-alain/delon/commit/8ab8d45))



# [7.7.0](https://github.com/ng-alain/delon/compare/7.6.1...7.7.0) (2019-06-15)


### Bug Fixes

* **abc:_src:** fix img causing infinite loop when error image still load fail ([#607](https://github.com/ng-alain/delon/issues/607)) ([09cdff0](https://github.com/ng-alain/delon/commit/09cdff0))
* **form:select:** fix invlid render group in search mode ([#602](https://github.com/ng-alain/delon/issues/602)) ([eaa774b](https://github.com/ng-alain/delon/commit/eaa774b))
* **theme:modal&drawer:** removed automatic management of `z-index` values ([#601](https://github.com/ng-alain/delon/issues/601)) ([088d306](https://github.com/ng-alain/delon/commit/088d306))


### Features

* **abc:st:** add `iifBehavior` property ([#604](https://github.com/ng-alain/delon/issues/604)) ([0cbacc1](https://github.com/ng-alain/delon/commit/0cbacc1))
* **abc:st:** add optional parameters of `resetColumns` method ([#597](https://github.com/ng-alain/delon/issues/597)) ([2d3f51d](https://github.com/ng-alain/delon/commit/2d3f51d))
* **form:** add `disabled` property ([#603](https://github.com/ng-alain/delon/issues/603)) ([d67f5cd](https://github.com/ng-alain/delon/commit/d67f5cd))



## [7.6.1](https://github.com/ng-alain/delon/compare/7.6.0...7.6.1) (2019-06-05)


### Bug Fixes

* **cli:** fix invalid translating ([#598](https://github.com/ng-alain/delon/issues/598)) ([abc9e8e](https://github.com/ng-alain/delon/commit/abc9e8e))
* **cli:** fix losing antd-theme-generator package ([#593](https://github.com/ng-alain/delon/issues/593)) ([97f0b1a](https://github.com/ng-alain/delon/commit/97f0b1a))
* **form:** fix invalid form values when call `refreshSchema` method ([#596](https://github.com/ng-alain/delon/issues/596)) ([25f2617](https://github.com/ng-alain/delon/commit/25f2617))
* **form:radio:** fix losing `nzButtonStyle` property ([#595](https://github.com/ng-alain/delon/issues/595)) ([638cffc](https://github.com/ng-alain/delon/commit/638cffc))
* **form:select:** fix losing `compareWith` property ([#594](https://github.com/ng-alain/delon/issues/594)) ([1248716](https://github.com/ng-alain/delon/commit/1248716))



# [7.6.0](https://github.com/ng-alain/delon/compare/7.5.0...7.6.0) (2019-06-02)


### Bug Fixes

* **abc:st:** fix trigger area in sub buttons ([#585](https://github.com/ng-alain/delon/issues/585)) ([3f7f9a5](https://github.com/ng-alain/delon/commit/3f7f9a5))
* **cli:** fix lint in windows ([#586](https://github.com/ng-alain/delon/issues/586)) ([1782498](https://github.com/ng-alain/delon/commit/1782498))


### Features

* **abc:st:** add `filteredData` property in component ([#588](https://github.com/ng-alain/delon/issues/588)) ([f74e589](https://github.com/ng-alain/delon/commit/f74e589))
* **abc:st:** add virtual scroll ([#590](https://github.com/ng-alain/delon/issues/590)) ([1a88bfd](https://github.com/ng-alain/delon/commit/1a88bfd))
* **form:date:** add `year` in `mode` property ([#587](https://github.com/ng-alain/delon/issues/587)) ([935b8c2](https://github.com/ng-alain/delon/commit/935b8c2))



# [7.5.0](https://github.com/ng-alain/delon/compare/7.4.0...7.5.0) (2019-05-25)


### Bug Fixes

* **abc:se:** fix losing opttional icon ([#577](https://github.com/ng-alain/delon/issues/577)) ([d9033dd](https://github.com/ng-alain/delon/commit/d9033dd))
* **form:** fix ingore trigger formChange event when call refreshSchema ([#579](https://github.com/ng-alain/delon/issues/579)) ([4f4c4f9](https://github.com/ng-alain/delon/commit/4f4c4f9))
* **form:autocomplete:** fix verify form in typing ([#580](https://github.com/ng-alain/delon/issues/580)) ([3371168](https://github.com/ng-alain/delon/commit/3371168))


### Features

* **abc:st:** add `expandAccordion` property ([#576](https://github.com/ng-alain/delon/issues/576)) ([d3dd0e4](https://github.com/ng-alain/delon/commit/d3dd0e4))
* **abc:sv:** add `optional` `optionalHelp` properittes ([#578](https://github.com/ng-alain/delon/issues/578)) ([8968ae4](https://github.com/ng-alain/delon/commit/8968ae4))
* **form:** add `acl` property ([#574](https://github.com/ng-alain/delon/issues/574)) ([54ddae9](https://github.com/ng-alain/delon/commit/54ddae9))



# [7.4.0](https://github.com/ng-alain/delon/compare/7.3.2...7.4.0) (2019-05-16)


### Bug Fixes

* **abc:sidebar:** fix invalid iconfont icon ([#568](https://github.com/ng-alain/delon/issues/568)) ([9a8ebae](https://github.com/ng-alain/delon/commit/9a8ebae))
* **abc:st:** fix ingore pi event trigger when change size in last page ([#564](https://github.com/ng-alain/delon/issues/564)) ([375d605](https://github.com/ng-alain/delon/commit/375d605))
* **abc:st:** fix responsive styles pollution `nz-table` ([#563](https://github.com/ng-alain/delon/issues/563)) ([4a78ef2](https://github.com/ng-alain/delon/commit/4a78ef2))
* **cli:** fix invalid translate in ng add ([#561](https://github.com/ng-alain/delon/issues/561)) ([add2ec0](https://github.com/ng-alain/delon/commit/add2ec0))
* **cli:** fix repeat variable suffix in `ng g ng-alain` ([#560](https://github.com/ng-alain/delon/issues/560)) ([7b8d9eb](https://github.com/ng-alain/delon/commit/7b8d9eb))
* **form:select:** fix invlaid tag count ([#571](https://github.com/ng-alain/delon/issues/571)) ([56abb18](https://github.com/ng-alain/delon/commit/56abb18))


### Features

* **abc:st:** ingore sort procees when `compare` is `null` ([#570](https://github.com/ng-alain/delon/issues/570)) ([0b625b4](https://github.com/ng-alain/delon/commit/0b625b4))
* **acl:** add `except` property in `ACLType` ([#566](https://github.com/ng-alain/delon/issues/566)) ([3787128](https://github.com/ng-alain/delon/commit/3787128))


### Performance Improvements

* **theme:http:** removed delay because all support OnPush ([9a8f21a](https://github.com/ng-alain/delon/commit/9a8f21a))



## [7.3.2](https://github.com/ng-alain/delon/compare/7.3.1...7.3.2) (2019-05-04)


### Bug Fixes

* **abc:se:** fix ingore label width when layout is inline ([#553](https://github.com/ng-alain/delon/issues/553)) ([70322fa](https://github.com/ng-alain/delon/commit/70322fa))
* **abc:st:** add `rawData` parameter of `res.process` ([#549](https://github.com/ng-alain/delon/issues/549)) ([102f53f](https://github.com/ng-alain/delon/commit/102f53f))
* **abc:st:** fix auto hide dropdown in buttons ([#556](https://github.com/ng-alain/delon/issues/556)) ([5eb00eb](https://github.com/ng-alain/delon/commit/5eb00eb))
* **theme:http:** fix losing generic in `get` ([#551](https://github.com/ng-alain/delon/issues/551)) ([b2e1482](https://github.com/ng-alain/delon/commit/b2e1482))
* **util:deepMergeKey:** fix override array when  ingoreArray is true ([#555](https://github.com/ng-alain/delon/issues/555)) ([6d4c1cc](https://github.com/ng-alain/delon/commit/6d4c1cc))


### Performance Improvements

* use secondary entry modules in ng-zorro ([#548](https://github.com/ng-alain/delon/issues/548)) ([5d8bac1](https://github.com/ng-alain/delon/commit/5d8bac1))



## [7.3.2](https://github.com/ng-alain/delon/compare/7.3.1...7.3.2) (2019-05-04)


### Bug Fixes

* **abc:se:** fix ingore label width when layout is inline ([#553](https://github.com/ng-alain/delon/issues/553)) ([70322fa](https://github.com/ng-alain/delon/commit/70322fa))
* **abc:st:** add `rawData` parameter of `res.process` ([#549](https://github.com/ng-alain/delon/issues/549)) ([102f53f](https://github.com/ng-alain/delon/commit/102f53f))
* **abc:st:** fix auto hide dropdown in buttons ([#556](https://github.com/ng-alain/delon/issues/556)) ([5eb00eb](https://github.com/ng-alain/delon/commit/5eb00eb))
* **theme:http:** fix losing generic in `get` ([#551](https://github.com/ng-alain/delon/issues/551)) ([b2e1482](https://github.com/ng-alain/delon/commit/b2e1482))
* **util:deepMergeKey:** fix override array when  ingoreArray is true ([#555](https://github.com/ng-alain/delon/issues/555)) ([6d4c1cc](https://github.com/ng-alain/delon/commit/6d4c1cc))


### Performance Improvements

* use secondary entry modules in ng-zorro ([#548](https://github.com/ng-alain/delon/issues/548)) ([5d8bac1](https://github.com/ng-alain/delon/commit/5d8bac1))



## [7.3.1](https://github.com/ng-alain/delon/compare/7.3.0...7.3.1) (2019-04-30)


### Bug Fixes

* **abc:sv:** fix detail misalignment when content include block ([#545](https://github.com/ng-alain/delon/issues/545)) ([a3191a3](https://github.com/ng-alain/delon/commit/a3191a3))
* **cli:** fix `lint:style` invalid script ([#541](https://github.com/ng-alain/delon/issues/541)) ([1d41e82](https://github.com/ng-alain/delon/commit/1d41e82))
* **form:*:** fix `ViewDestroyedError` error ([#542](https://github.com/ng-alain/delon/issues/542)) ([5d8ffa4](https://github.com/ng-alain/delon/commit/5d8ffa4))
* **theme:http:** fix losing retrun a generic type in `get` ([#546](https://github.com/ng-alain/delon/issues/546)) ([359159c](https://github.com/ng-alain/delon/commit/359159c))



# [7.3.0](https://github.com/ng-alain/delon/compare/7.2.0...7.3.0) (2019-04-26)


### Bug Fixes

* **abc:st:** fix ingore load data when page size changed ([#539](https://github.com/ng-alain/delon/issues/539)) ([12ad96f](https://github.com/ng-alain/delon/commit/12ad96f))
* **form:*:** fix can't render when async data ([#525](https://github.com/ng-alain/delon/issues/525)) ([d4d4428](https://github.com/ng-alain/delon/commit/d4d4428))
* **form:date:** fix throw error when not include end property ([#527](https://github.com/ng-alain/delon/issues/527)) ([f06757c](https://github.com/ng-alain/delon/commit/f06757c))
* **form:select:** fix i18n of notFoundContent ([#524](https://github.com/ng-alain/delon/issues/524)) ([1df658c](https://github.com/ng-alain/delon/commit/1df658c))
* **form:upload:** fix clean value when remove file list ([#526](https://github.com/ng-alain/delon/issues/526)) ([0f4e1c5](https://github.com/ng-alain/delon/commit/0f4e1c5))
* **theme:drawer:** fix deep merge object ([#535](https://github.com/ng-alain/delon/issues/535)) ([9c588eb](https://github.com/ng-alain/delon/commit/9c588eb))
* **theme:modal:** fix losing `nzWrapClassName` when has `size` exists ([#537](https://github.com/ng-alain/delon/issues/537)) ([c64834a](https://github.com/ng-alain/delon/commit/c64834a))


### Features

* **abc:st:** add `showExpand` property ([#520](https://github.com/ng-alain/delon/issues/520)) ([d87d56f](https://github.com/ng-alain/delon/commit/d87d56f))
* **abc:st:** add `widthMode` property ([#518](https://github.com/ng-alain/delon/issues/518)) ([715d5de](https://github.com/ng-alain/delon/commit/715d5de))
* **abc:st:** support controlled `loading` property ([#533](https://github.com/ng-alain/delon/issues/533)) ([317b88c](https://github.com/ng-alain/delon/commit/317b88c))
* **acl:** add `*aclIf` structural directive ([#529](https://github.com/ng-alain/delon/issues/529)) ([cf49779](https://github.com/ng-alain/delon/commit/cf49779))
* **form:** add icon in button proprety ([#538](https://github.com/ng-alain/delon/issues/538)) ([0ef4281](https://github.com/ng-alain/delon/commit/0ef4281))
* **form:** add loading property ([#517](https://github.com/ng-alain/delon/issues/517)) ([1e9df24](https://github.com/ng-alain/delon/commit/1e9df24))
* **theme:yn:** add mode property ([#534](https://github.com/ng-alain/delon/issues/534)) ([ebd42be](https://github.com/ng-alain/delon/commit/ebd42be))



# [7.2.0](https://github.com/ng-alain/delon/compare/7.1.0...7.2.0) (2019-04-09)


### Bug Fixes

* **abc:_src:** fix invalid size ([#503](https://github.com/ng-alain/delon/issues/503)) ([76fc61b](https://github.com/ng-alain/delon/commit/76fc61b))
* **abc:reuse-tab:** fix actived select tab when close right or other ([#500](https://github.com/ng-alain/delon/issues/500)) ([ed3eef7](https://github.com/ng-alain/delon/commit/ed3eef7))
* **abc:st:** fix missing trigger expand event when click expand icon ([#501](https://github.com/ng-alain/delon/issues/501)) ([a0a9c53](https://github.com/ng-alain/delon/commit/a0a9c53))
* **cli:** fix removed header-i18n when no-include i18n ([#505](https://github.com/ng-alain/delon/issues/505)) ([9839f69](https://github.com/ng-alain/delon/commit/9839f69))
* **sf:** fix layout misplacement in inline mode ([#514](https://github.com/ng-alain/delon/issues/514)) ([9a7901a](https://github.com/ng-alain/delon/commit/9a7901a))
* **sf:radio:** fix async data invlid render ([#504](https://github.com/ng-alain/delon/issues/504)) ([18c6af5](https://github.com/ng-alain/delon/commit/18c6af5))


### Features

* **abc:reuse-tab:** add `tabBarExtraContent` `tabBarStyle` `tabBarGutter` properites ([#510](https://github.com/ng-alain/delon/issues/510)) ([5d48933](https://github.com/ng-alain/delon/commit/5d48933))
* **acl:** add `preCan` property in global config ([#511](https://github.com/ng-alain/delon/issues/511)) ([1bdbd8c](https://github.com/ng-alain/delon/commit/1bdbd8c))



# [7.1.0](https://github.com/ng-alain/delon/compare/7.0.3...7.1.0) (2019-03-30)


### Bug Fixes

* **sf:checkbox:** fix invalid trigger check-all when click input ([#493](https://github.com/ng-alain/delon/issues/493)) ([4ee3ca5](https://github.com/ng-alain/delon/commit/4ee3ca5))
* **sf:select:** fix invalid clear value ([#496](https://github.com/ng-alain/delon/issues/496)) ([28e3915](https://github.com/ng-alain/delon/commit/28e3915))


### Features

* **abc:qr:** add support unicode value ([#495](https://github.com/ng-alain/delon/issues/495)) ([9082319](https://github.com/ng-alain/delon/commit/9082319))
* **abc:sv:** add unit property ([#497](https://github.com/ng-alain/delon/issues/497)) ([5a84e1b](https://github.com/ng-alain/delon/commit/5a84e1b))
* **cli:plugin:sts:** add sts plugin ([#494](https://github.com/ng-alain/delon/issues/494)) ([5f735db](https://github.com/ng-alain/delon/commit/5f735db))
* **module:theme:** adding Korean locale ([#486](https://github.com/ng-alain/delon/issues/486)) ([5e3ad9c](https://github.com/ng-alain/delon/commit/5e3ad9c))



## [7.0.3](https://github.com/ng-alain/delon/compare/7.0.2...7.0.3) (2019-03-20)


### Bug Fixes

* **abc:result:** use nztype instead of class anticon ([#483](https://github.com/ng-alain/delon/issues/483)) ([7553860](https://github.com/ng-alain/delon/commit/7553860))
* **abc:se:** should be keeping placeholder when content is empty ([#480](https://github.com/ng-alain/delon/issues/480)) ([e35c2e0](https://github.com/ng-alain/delon/commit/e35c2e0))
* **abc:st:** fix invalid number type of width ([#481](https://github.com/ng-alain/delon/issues/481)) ([7cdbe6e](https://github.com/ng-alain/delon/commit/7cdbe6e))
* **abc:st:** fix losing global config in modal or drawer ([#482](https://github.com/ng-alain/delon/issues/482)) ([ab34a44](https://github.com/ng-alain/delon/commit/ab34a44))
* **abc:st:** fix styles of filter button ([#474](https://github.com/ng-alain/delon/issues/474)) ([f491b4d](https://github.com/ng-alain/delon/commit/f491b4d))
* **sf:number:** fix show undefined or null when use prefix or unit an… ([#473](https://github.com/ng-alain/delon/issues/473)) ([4d2cede](https://github.com/ng-alain/delon/commit/4d2cede))
* **util:deepGet:** fix losing 0 value ([#479](https://github.com/ng-alain/delon/issues/479)) ([bf37459](https://github.com/ng-alain/delon/commit/bf37459))


### Features

* **abc:st:** add raw data in custom  type of statistical ([#478](https://github.com/ng-alain/delon/issues/478)) ([431c461](https://github.com/ng-alain/delon/commit/431c461))



## [7.0.2](https://github.com/ng-alain/delon/compare/7.0.1...7.0.2) (2019-03-05)


### Bug Fixes

* **abc:sidebar-nav:** fix warnning 'Navigation triggered outside Angu… ([#466](https://github.com/ng-alain/delon/issues/466)) ([b565b3f](https://github.com/ng-alain/delon/commit/b565b3f))
* **abc:st:** fix losing req config ([#467](https://github.com/ng-alain/delon/issues/467)) ([697f33e](https://github.com/ng-alain/delon/commit/697f33e))
* **theme:drawer:** fix body scroll when placement is top or bottom ([#469](https://github.com/ng-alain/delon/issues/469)) ([873d0de](https://github.com/ng-alain/delon/commit/873d0de))


### Features

* **sf:upload:** add urlReName property ([#464](https://github.com/ng-alain/delon/issues/464)) ([5540631](https://github.com/ng-alain/delon/commit/5540631))



## [7.0.1](https://github.com/ng-alain/delon/compare/7.0.0...7.0.1) (2019-03-01)


### Bug Fixes

* **cli:** fix ignores files and folders named "core" by default ([#461](https://github.com/ng-alain/delon/issues/461)) ([bd5696a](https://github.com/ng-alain/delon/commit/bd5696a))



# [7.0.0](https://github.com/ng-alain/delon/compare/7.0.0-rc.10...7.0.0) (2019-02-28)


### Features

* add el_GR locale ([#423](https://github.com/ng-alain/delon/issues/423)) ([17a03d6](https://github.com/ng-alain/delon/commit/17a03d6))



# [7.0.0-rc.10](https://github.com/ng-alain/delon/compare/7.0.0-rc.9...7.0.0-rc.10) (2019-02-22)



# [7.0.0-rc.9](https://github.com/ng-alain/delon/compare/7.0.0-rc.8...7.0.0-rc.9) (2019-02-22)

[deprecated]

### Bug Fixes

* **abc:sidebar:** fix invalid menu item ellipsis when text overflow ([#447](https://github.com/ng-alain/delon/issues/447)) ([5d3c7ea](https://github.com/ng-alain/delon/commit/5d3c7ea))
* **module:sf:autocomplete:** fix invalid custom email suffix by enum ([#439](https://github.com/ng-alain/delon/issues/439)) ([f072fe0](https://github.com/ng-alain/delon/commit/f072fe0)), closes [#438](https://github.com/ng-alain/delon/issues/438)
* **module:st:** fix sort order data should be in user click order ([#445](https://github.com/ng-alain/delon/issues/445)) ([0dc95c2](https://github.com/ng-alain/delon/commit/0dc95c2))


### Features

* **abc:se:** add labelWidth property ([#451](https://github.com/ng-alain/delon/issues/451)) ([94ebfbe](https://github.com/ng-alain/delon/commit/94ebfbe))
* **abc:sidebar-nav:** add  openStrictly property ([#452](https://github.com/ng-alain/delon/issues/452)) ([ffeccdd](https://github.com/ng-alain/delon/commit/ffeccdd))
* **abc:st:** support custom function of noIndex ([#453](https://github.com/ng-alain/delon/issues/453)) ([87bad16](https://github.com/ng-alain/delon/commit/87bad16))
* **module:range-picker:** add shortcut property ([#441](https://github.com/ng-alain/delon/issues/441)) ([6598271](https://github.com/ng-alain/delon/commit/6598271))
* **schematics:** add VsCode extension recommendations in ng add ([#443](https://github.com/ng-alain/delon/issues/443)) ([7df5ed2](https://github.com/ng-alain/delon/commit/7df5ed2))


### Performance Improvements

* **abc:sidebar:** optimize dom rendering ([#448](https://github.com/ng-alain/delon/issues/448)) ([e35118a](https://github.com/ng-alain/delon/commit/e35118a))



# [7.0.0-rc.8](https://github.com/ng-alain/delon/compare/7.0.0-rc.7...7.0.0-rc.8) (2019-02-15)


### Bug Fixes

* **module:se:** fix error status in first visual ([#434](https://github.com/ng-alain/delon/issues/434)) ([f0f6622](https://github.com/ng-alain/delon/commit/f0f6622))
* **module:sf:** fix invalid request in $ref property ([#431](https://github.com/ng-alain/delon/issues/431)) ([2f83a4b](https://github.com/ng-alain/delon/commit/2f83a4b)), closes [#428](https://github.com/ng-alain/delon/issues/428)
* **module:sf:checkbox:** fix invalid indeterminate status ([#433](https://github.com/ng-alain/delon/issues/433)) ([2b07901](https://github.com/ng-alain/delon/commit/2b07901))
* **module:sf:object:** fix default hide all title in object widget ([#429](https://github.com/ng-alain/delon/issues/429)) ([9c51e26](https://github.com/ng-alain/delon/commit/9c51e26)), closes [#430](https://github.com/ng-alain/delon/issues/430)
* **module:theme:** fix button + button spacing of transfer options when enabled preserveWhitespaces ([#435](https://github.com/ng-alain/delon/issues/435)) ([3a6d900](https://github.com/ng-alain/delon/commit/3a6d900))



# [7.0.0-rc.7](https://github.com/ng-alain/delon/compare/7.0.0-rc.6...7.0.0-rc.7) (2019-02-14)


### Bug Fixes

* **module:edit:** fix should contain dirty check ([#421](https://github.com/ng-alain/delon/issues/421)) ([908bd8d](https://github.com/ng-alain/delon/commit/908bd8d))
* **module:sf:autocomplete:** fix losing defualt value ([#417](https://github.com/ng-alain/delon/issues/417)) ([126e99d](https://github.com/ng-alain/delon/commit/126e99d)), closes [#387](https://github.com/ng-alain/delon/issues/387)
* **module:sf:date:** fix ui config error of end property when in a nested object ([#405](https://github.com/ng-alain/delon/issues/405)) ([#407](https://github.com/ng-alain/delon/issues/407)) ([033713a](https://github.com/ng-alain/delon/commit/033713a))


### Features

* **module:sf:** add onlyVisual property in sf component ([#411](https://github.com/ng-alain/delon/issues/411)) ([f3a5e1a](https://github.com/ng-alain/delon/commit/f3a5e1a))
* **module:sf:object:** support view title text ([#425](https://github.com/ng-alain/delon/issues/425)) ([087c979](https://github.com/ng-alain/delon/commit/087c979))
* **module:st:** add process in STReq ([#422](https://github.com/ng-alain/delon/issues/422)) ([62a5749](https://github.com/ng-alain/delon/commit/62a5749)), closes [#419](https://github.com/ng-alain/delon/issues/419)
* **module:st:** add skip & limit pagination type ([#404](https://github.com/ng-alain/delon/issues/404)) ([9c6be6c](https://github.com/ng-alain/delon/commit/9c6be6c))
* **module:st:** add statistical ([#413](https://github.com/ng-alain/delon/issues/413)) ([80c55d0](https://github.com/ng-alain/delon/commit/80c55d0))
* **schematics:** add external fix function in tpl command ([#410](https://github.com/ng-alain/delon/issues/410)) ([88def47](https://github.com/ng-alain/delon/commit/88def47)), closes [#409](https://github.com/ng-alain/delon/issues/409)



# [7.0.0-rc.6](https://github.com/ng-alain/delon/compare/7.0.0-rc.5...7.0.0-rc.6) (2019-01-22)


### Bug Fixes

* **module:schematics:** fix missing version of ng-alain-codelyzer ([#401](https://github.com/ng-alain/delon/issues/401)) ([e217940](https://github.com/ng-alain/delon/commit/e217940))



# [7.0.0-rc.5](https://github.com/ng-alain/delon/compare/7.0.0-rc.4...7.0.0-rc.5) (2019-01-22)


### Bug Fixes

* **module:mock:** fix `/:id` does not match `user/1` ([#384](https://github.com/ng-alain/delon/issues/384)) ([246934b](https://github.com/ng-alain/delon/commit/246934b))
* **module:sf:number:** fix missing integer type ([#385](https://github.com/ng-alain/delon/issues/385)) ([1f0226c](https://github.com/ng-alain/delon/commit/1f0226c)), closes [#381](https://github.com/ng-alain/delon/issues/381)
* **module:theme:title:** fix i18n will auto call setTitle ([#397](https://github.com/ng-alain/delon/issues/397)) ([4411a19](https://github.com/ng-alain/delon/commit/4411a19))


### Features

* **module:sf:radio:** add change event ([#383](https://github.com/ng-alain/delon/issues/383)) ([7ebb484](https://github.com/ng-alain/delon/commit/7ebb484))
* **module:sf:upload:** add extra properties ([#395](https://github.com/ng-alain/delon/issues/395)) ([29c66b5](https://github.com/ng-alain/delon/commit/29c66b5)), closes [#389](https://github.com/ng-alain/delon/issues/389)
* **module:sf:upload:** add fileList property ([#386](https://github.com/ng-alain/delon/issues/386)) ([06adf96](https://github.com/ng-alain/delon/commit/06adf96))
* **module:st:** add `iif` in column ([#396](https://github.com/ng-alain/delon/issues/396)) ([066030d](https://github.com/ng-alain/delon/commit/066030d)), closes [#393](https://github.com/ng-alain/delon/issues/393)
* **module:st:** add expand event in change property ([#394](https://github.com/ng-alain/delon/issues/394)) ([84ff628](https://github.com/ng-alain/delon/commit/84ff628))
* **module:st:** route state includes pi, ps, total data ([#391](https://github.com/ng-alain/delon/issues/391)) ([567eadd](https://github.com/ng-alain/delon/commit/567eadd))
* **module:theme:** add text, icon, width more sizes ([#392](https://github.com/ng-alain/delon/issues/392)) ([5bd9d7e](https://github.com/ng-alain/delon/commit/5bd9d7e))


### Performance Improvements

* **module:chart:** optimize g2 performance ([#388](https://github.com/ng-alain/delon/issues/388)) ([94ef1fe](https://github.com/ng-alain/delon/commit/94ef1fe)), closes [#377](https://github.com/ng-alain/delon/issues/377)



# [7.0.0-rc.4](https://github.com/ng-alain/delon/compare/7.0.0-rc.3...7.0.0-rc.4) (2019-01-12)


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

* **module:theme:** fix not found window value ([#355](https://github.com/ng-alain/delon/issues/355)) ([3be639a](https://github.com/ng-alain/delon/commit/3be639a))



# [7.0.0-rc.2](https://github.com/ng-alain/delon/compare/7.0.0-rc.1...7.0.0-rc.2) (2018-12-28)


### Bug Fixes

* **module:cache:** fix specified storage type parameters ([#343](https://github.com/ng-alain/delon/issues/343)) ([fd005e5](https://github.com/ng-alain/delon/commit/fd005e5))
* **module:reuse-tab:** fix skip not closable in store ([#344](https://github.com/ng-alain/delon/issues/344)) ([fa08c07](https://github.com/ng-alain/delon/commit/fa08c07))
* **module:se:** fix ingore error visual when is disabled ([#339](https://github.com/ng-alain/delon/issues/339)) ([7223e85](https://github.com/ng-alain/delon/commit/7223e85))
* **module:sf:** fix invalid trigger submit via add button ([#349](https://github.com/ng-alain/delon/issues/349)) ([8e11729](https://github.com/ng-alain/delon/commit/8e11729)), closes [#348](https://github.com/ng-alain/delon/issues/348)
* **module:sf:** should based on item unsubscription ([#345](https://github.com/ng-alain/delon/issues/345)) ([2520f11](https://github.com/ng-alain/delon/commit/2520f11))


### Features

* **module:reuse-tab:** add keeping scroll property ([#347](https://github.com/ng-alain/delon/issues/347)) ([862d8f4](https://github.com/ng-alain/delon/commit/862d8f4))



# [7.0.0-rc.1](https://github.com/ng-alain/delon/compare/7.0.0-rc.0...7.0.0-rc.1) (2018-12-24)


### Bug Fixes

* **module:auth:** fix unrecognized full URL anonymous key ([#328](https://github.com/ng-alain/delon/issues/328)) ([e223ccb](https://github.com/ng-alain/delon/commit/e223ccb))
* **module:chart:timeline:** remove tickCount ([#323](https://github.com/ng-alain/delon/issues/323)) ([20920fc](https://github.com/ng-alain/delon/commit/20920fc))
* **module:sf:** shoule trigger detect change when reset value ([#332](https://github.com/ng-alain/delon/issues/332)) ([ffd365b](https://github.com/ng-alain/delon/commit/ffd365b))
* **module:sf:cascader:** fix invalid search when labelProperty or valueProperty is empty ([#325](https://github.com/ng-alain/delon/issues/325)) ([4d4e53f](https://github.com/ng-alain/delon/commit/4d4e53f))
* **module:st:** should recalculate no value when call removeRow method ([#331](https://github.com/ng-alain/delon/issues/331)) ([6c8c2d1](https://github.com/ng-alain/delon/commit/6c8c2d1)), closes [#330](https://github.com/ng-alain/delon/issues/330)
* **module:theme:** fix keeping show scroll bar in firefox ([#336](https://github.com/ng-alain/delon/issues/336)) ([727d0d7](https://github.com/ng-alain/delon/commit/727d0d7))


### Features

* **module:auth:** add referrer property ([#334](https://github.com/ng-alain/delon/issues/334)) ([0510864](https://github.com/ng-alain/delon/commit/0510864))
* **module:mock:** add executeOtherInterceptors config ([#321](https://github.com/ng-alain/delon/issues/321)) ([d77e8e9](https://github.com/ng-alain/delon/commit/d77e8e9))
* **module:sidebar-nav:** add disabledAcl property ([#337](https://github.com/ng-alain/delon/issues/337)) ([ebbeed3](https://github.com/ng-alain/delon/commit/ebbeed3))
* **module:st:** add expandRowByClick property ([#326](https://github.com/ng-alain/delon/issues/326)) ([a8a6695](https://github.com/ng-alain/delon/commit/a8a6695))
* **module:st:** support response body is an array type ([#327](https://github.com/ng-alain/delon/issues/327)) ([4e681dc](https://github.com/ng-alain/delon/commit/4e681dc))
* **module:testing:** add [@delon](https://github.com/delon)/testing lib ([#329](https://github.com/ng-alain/delon/issues/329)) ([9d533cf](https://github.com/ng-alain/delon/commit/9d533cf))
* **module:theme:** adding Polish locale ([#308](https://github.com/ng-alain/delon/issues/308)) ([025282c](https://github.com/ng-alain/delon/commit/025282c))
* **module:util:** export stringTemplateOutlet ([#324](https://github.com/ng-alain/delon/issues/324)) ([e8d9ed1](https://github.com/ng-alain/delon/commit/e8d9ed1))



# [7.0.0-rc.0](https://github.com/ng-alain/delon/compare/2.0.1...7.0.0-rc.0) (2018-12-14)


### Bug Fixes

* **module:notice-icon:** fix missing class ([#317](https://github.com/ng-alain/delon/issues/317)) ([8cb86b5](https://github.com/ng-alain/delon/commit/8cb86b5))
* **module:st:** should clean filter style when not filter ([#303](https://github.com/ng-alain/delon/issues/303)) ([96430d1](https://github.com/ng-alain/delon/commit/96430d1))
* **schematics:** fix template in list command ([#302](https://github.com/ng-alain/delon/issues/302)) ([839147e](https://github.com/ng-alain/delon/commit/839147e))


### Features

* **module:theme:title:** add setTitleByI18n method ([#299](https://github.com/ng-alain/delon/issues/299)) ([80a9636](https://github.com/ng-alain/delon/commit/80a9636))



## [2.0.1](https://github.com/ng-alain/delon/compare/2.0.0...2.0.1) (2018-11-25)


### Bug Fixes

* **module:page-header:** should be clean old breadcrumb data when changes ([#296](https://github.com/ng-alain/delon/issues/296)) ([862aa9d](https://github.com/ng-alain/delon/commit/862aa9d)), closes [#293](https://github.com/ng-alain/delon/issues/293)
* **module:sf:autocomplete:** fix missing value ([#291](https://github.com/ng-alain/delon/issues/291)) ([ac17fb3](https://github.com/ng-alain/delon/commit/ac17fb3)), closes [#290](https://github.com/ng-alain/delon/issues/290)
* **module:sf:button:** fix invalid button size ([#294](https://github.com/ng-alain/delon/issues/294)) ([96f8adc](https://github.com/ng-alain/delon/commit/96f8adc))
* **module:theme:style:** fix dropdown + button spacing when closed preserve ([#292](https://github.com/ng-alain/delon/issues/292)) ([d330e5e](https://github.com/ng-alain/delon/commit/d330e5e))
* **module:theme:title:** fix default property should  be not read-only ([#295](https://github.com/ng-alain/delon/issues/295)) ([a882507](https://github.com/ng-alain/delon/commit/a882507))


### Features

* **module:theme:** add tr-TR locale ([#289](https://github.com/ng-alain/delon/issues/289)) ([9df6f0e](https://github.com/ng-alain/delon/commit/9df6f0e)), closes [#288](https://github.com/ng-alain/delon/issues/288)



# [2.0.0](https://github.com/ng-alain/delon/compare/1.5.2...2.0.0) (2018-11-20)


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


# [2.0.0-rc.3](https://github.com/ng-alain/delon/compare/2.0.0-rc.2...2.0.0-rc.3) (2018-11-09)


### Bug Fixes

* **module:sf:** fix missing title ([#259](https://github.com/ng-alain/delon/issues/259)) ([b78f38a](https://github.com/ng-alain/delon/commit/b78f38a)), closes [#258](https://github.com/ng-alain/delon/issues/258)
* **module:sf:tree-select:** fix children repeat data when expand changes ([#260](https://github.com/ng-alain/delon/issues/260)) ([2bfd75f](https://github.com/ng-alain/delon/commit/2bfd75f))
* **module:st:** fix invalid trigger when used icon & pop ([#256](https://github.com/ng-alain/delon/issues/256)) ([598f9ab](https://github.com/ng-alain/delon/commit/598f9ab))
* GLOBAL_THIRD_MDOULES changed to GLOBAL_THIRD_MODULES ([#262](https://github.com/ng-alain/delon/issues/262)) ([d001642](https://github.com/ng-alain/delon/commit/d001642))
* **module:theme:menu:** fix shortcut children polluted ([#265](https://github.com/ng-alain/delon/issues/265)) ([a255fe0](https://github.com/ng-alain/delon/commit/a255fe0))


### Features

* **module:sidebar-nav:** add icon more properties ([#263](https://github.com/ng-alain/delon/issues/263)) ([5b696f5](https://github.com/ng-alain/delon/commit/5b696f5))
* **module:st:** add no type ([#261](https://github.com/ng-alain/delon/issues/261)) ([8fc29ce](https://github.com/ng-alain/delon/commit/8fc29ce))
* **module:st:** add remove method ([#255](https://github.com/ng-alain/delon/issues/255)) ([13a3a21](https://github.com/ng-alain/delon/commit/13a3a21))
* **module:st:** add rowClassName property ([#268](https://github.com/ng-alain/delon/issues/268)) ([0af1484](https://github.com/ng-alain/delon/commit/0af1484))
* **module:theme:** add scrollbar style service of div ([#267](https://github.com/ng-alain/delon/issues/267)) ([161d328](https://github.com/ng-alain/delon/commit/161d328))
* **module:theme:** add url pipe ([#254](https://github.com/ng-alain/delon/issues/254)) ([62724a0](https://github.com/ng-alain/delon/commit/62724a0))
* **schematics:** add color less when running ng commend ([#253](https://github.com/ng-alain/delon/issues/253)) ([145e4a9](https://github.com/ng-alain/delon/commit/145e4a9))



<a name="2.0.0-rc.2"></a>
# [2.0.0-rc.2](https://github.com/ng-alain/delon/compare/2.0.0-rc.1...2.0.0-rc.2) (2018-11-01)


### Bug Fixes

* **module:*:** safe html ([#239](https://github.com/ng-alain/delon/issues/239)) ([0298665](https://github.com/ng-alain/delon/commit/0298665))
* **module:form:** fix attempt to use a destroyed error ([#248](https://github.com/ng-alain/delon/issues/248)) ([3e470e7](https://github.com/ng-alain/delon/commit/3e470e7))
* **module:sf:** fix button spanLabelFixed is zero value ([#242](https://github.com/ng-alain/delon/issues/242)) ([1f601e2](https://github.com/ng-alain/delon/commit/1f601e2))
* **module:theme:** fix grey color values ([#249](https://github.com/ng-alain/delon/issues/249)) ([6234538](https://github.com/ng-alain/delon/commit/6234538))
* **module:theme:** fix ng-invalid style ([#243](https://github.com/ng-alain/delon/issues/243)) ([fe6d104](https://github.com/ng-alain/delon/commit/fe6d104))
* **schematics:** fix repeat alias name ([#247](https://github.com/ng-alain/delon/issues/247)) ([4f744fa](https://github.com/ng-alain/delon/commit/4f744fa))


### Features

* **module:mock:** support array params of queryString ([#246](https://github.com/ng-alain/delon/issues/246)) ([f0135ce](https://github.com/ng-alain/delon/commit/f0135ce))
* **module:st:** add icon of button ([#240](https://github.com/ng-alain/delon/issues/240)) ([1145d47](https://github.com/ng-alain/delon/commit/1145d47))
* **module:theme:** add recursive upward find in menu service ([#244](https://github.com/ng-alain/delon/issues/244)) ([c391d3a](https://github.com/ng-alain/delon/commit/c391d3a))
* **module:theme:i18n:** add i18n pipe ([#238](https://github.com/ng-alain/delon/issues/238)) ([423c9c3](https://github.com/ng-alain/delon/commit/423c9c3))



<a name="2.0.0-rc.1"></a>
# [2.0.0-rc.1](https://github.com/ng-alain/delon/compare/2.0.0-beta.5...2.0.0-rc.1) (2018-10-25)


### Bug Fixes

* **form:** fix repeated trigger change detection ([#224](https://github.com/ng-alain/delon/issues/224)) ([a9f2db6](https://github.com/ng-alain/delon/commit/a9f2db6))
* **form:checkbox:** fix misplaced layout of checkbox widget ([#226](https://github.com/ng-alain/delon/issues/226)) ([d75600e](https://github.com/ng-alain/delon/commit/d75600e))
* **form:date:** fix missing nzShowTime in date widgets ([#223](https://github.com/ng-alain/delon/issues/223)) ([a40bc13](https://github.com/ng-alain/delon/commit/a40bc13))
* **st:** fix filter table header in ant design 3.10 ([#229](https://github.com/ng-alain/delon/issues/229)) ([0d70d26](https://github.com/ng-alain/delon/commit/0d70d26))
* **schematics:** fix duplcated alias `t` in tpl command ([#231](https://github.com/ng-alain/delon/issues/231)) ([829f11e](https://github.com/ng-alain/delon/commit/829f11e))
* **schematics:** fix invalid msgSrv property in edit page ([#225](https://github.com/ng-alain/delon/issues/225)) ([e3270e4](https://github.com/ng-alain/delon/commit/e3270e4))
* **schematics:** fix used translate when not i18n ([#230](https://github.com/ng-alain/delon/issues/230)) ([93163a9](https://github.com/ng-alain/delon/commit/93163a9))

### Features

* **schematics:** support 1.x to 2.0 via `ng update` [Document](https://ng-alain.com/docs/upgrade-v2#ng-update)
* **schematics:plugin:** add `icon` plugin [Document](https://ng-alain.com/cli/plugin#icon)
* sync ng-zorro-antd 1.7.1 ([#228](https://github.com/ng-alain/delon/issues/228)) ([9a62ea3](https://github.com/ng-alain/delon/commit/9a62ea3))

### BREAKING CHANGES

* **module:theme:** used `NzDropdownService` instead of `ContextMenuService` ([#234](https://github.com/ng-alain/delon/pull/234))


<a name="2.0.0-beta.5"></a>
# [2.0.0-beta.5](https://github.com/ng-alain/delon/compare/2.0.0-beta.4...2.0.0-beta.5) (2018-10-15)


### Bug Fixes

* **module:code-style:** upgrade husky ([#208](https://github.com/ng-alain/delon/issues/208)) ([61c6214](https://github.com/ng-alain/delon/commit/61c6214))
* **module:form:** fix invalid disabled status when is readOnly ([#212](https://github.com/ng-alain/delon/issues/212)) ([6a68def](https://github.com/ng-alain/delon/commit/6a68def))


### Features

* **module:abc.st:** add total i18n ([#203](https://github.com/ng-alain/delon/issues/203)) ([ec0b0df](https://github.com/ng-alain/delon/commit/ec0b0df))
* **module:theme:** add page loading styles ([#207](https://github.com/ng-alain/delon/issues/207)) ([ad43622](https://github.com/ng-alain/delon/commit/ad43622))
* **module:theme:alain-default:** refactor layout component ([#201](https://github.com/ng-alain/delon/issues/201)) ([8231e65](https://github.com/ng-alain/delon/commit/8231e65))


### BREAKING CHANGES

* **module:theme:alain-default:** + `layout-fixed` was changed to `alain-default__fixed`
+ `layout-boxed` was changed to `alain-default__boxed`
+ `aside-collapsed` was changed to `alain-default__collapsed`



<a name="2.0.0-beta.4"></a>
# [2.0.0-beta.4](https://github.com/ng-alain/delon/compare/1.4.5...2.0.0-beta.4) (2018-10-07)


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


