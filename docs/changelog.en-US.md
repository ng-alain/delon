---
order: 100
title: Change Log
type: Other
---

NG-ALAIN strictly follows [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/).

#### Release Schedule

* Weekly release: patch version at the end of every week for routine bugfix (anytime for urgent bugfix).
* Monthly release: minor version at the end of every month for new features.
* Major version release is not included in this schedule for breaking change and new features.

---

# [12.4.0](https://github.com/ng-alain/delon/compare/12.3.0...12.4.0) (2021-11-19)

### Scaffold

* **i18n:** Flattened data source ([#2130](https://github.com/ng-alain/ng-alain/pull/2130))
* Fix use default language when the browser language is not in the list ([#2141](https://github.com/ng-alain/ng-alain/pull/2141))
* Use auth login url in 401 ([#2124](https://github.com/ng-alain/ng-alain/pull/2124))
* Use `proxy.conf.js` instead of `proxy.conf.json` ([#2125](https://github.com/ng-alain/ng-alain/pull/2125))
* Lazy loading module error handling ([#2126](https://github.com/ng-alain/ng-alain/pull/2126))
* Optimize error handling and navigate to the exception page ([#2135](https://github.com/ng-alain/ng-alain/pull/2135))

### Bug Fixes

* **abc:exception:** fix observe content ([#1390](https://github.com/ng-alain/delon/issues/1390)) ([4b27d6b](https://github.com/ng-alain/delon/commit/4b27d6b5264194d898493c326941b1db2f3bdf40))
* **abc:reuse-tab:** fix disabled refresh when non-active tab ([#1373](https://github.com/ng-alain/delon/issues/1373)) ([2bee11f](https://github.com/ng-alain/delon/commit/2bee11fe0b7ffe677186eec66ced37c39b47dac3))
* **abc:sv:** fix vertical align of detail ([#1387](https://github.com/ng-alain/delon/issues/1387)) ([a26f4e5](https://github.com/ng-alain/delon/commit/a26f4e5ad9929ab06a252b2fba4dd12ce9615cbd))
* **chart:mini-area:** remove color in data ([#1379](https://github.com/ng-alain/delon/issues/1379)) ([8c649d9](https://github.com/ng-alain/delon/commit/8c649d94914b0a604d72940b18707ff3b1aadad1))
* **form:widget:upload:** fix invalid return type ([#1382](https://github.com/ng-alain/delon/issues/1382)) ([40cd255](https://github.com/ng-alain/delon/commit/40cd255868d629bdf7f982d8249d28c2b2b7b6cc))
* **theme:layout-default:** fix can't render badge ([#1377](https://github.com/ng-alain/delon/issues/1377)) ([c6e702d](https://github.com/ng-alain/delon/commit/c6e702d0e1e4d7a74c21c2b303c4079fb16dd7dc))
* **theme:st:** fix causes misalignment when set `width` in small screens ([#1386](https://github.com/ng-alain/delon/issues/1386)) ([d73f047](https://github.com/ng-alain/delon/commit/d73f04703e93b0cd8a072dc0131d343e86911abf))
* **abc:st:** fix misalignment of checkbox and selection ([#1389](https://github.com/ng-alain/delon/issues/1389)) ([00d4f08](https://github.com/ng-alain/delon/commit/00d4f0878bf47e43e007457f23f9a8c9a16fa1d3))

### Features

* **abc:st:** support enter trigger filter ([#1389](https://github.com/ng-alain/delon/issues/1389)) ([00d4f08](https://github.com/ng-alain/delon/commit/00d4f0878bf47e43e007457f23f9a8c9a16fa1d3))
* **abc:st:** support custom of filter ([#1389](https://github.com/ng-alain/delon/issues/1389)) ([00d4f08](https://github.com/ng-alain/delon/commit/00d4f0878bf47e43e007457f23f9a8c9a16fa1d3))
* **abc:st:** add `className` of `STDate` ([#1389](https://github.com/ng-alain/delon/issues/1389)) ([00d4f08](https://github.com/ng-alain/delon/commit/00d4f0878bf47e43e007457f23f9a8c9a16fa1d3))
* **abc:st:** add `date`, `number` type of `filter` ([#1389](https://github.com/ng-alain/delon/issues/1389)) ([00d4f08](https://github.com/ng-alain/delon/commit/00d4f0878bf47e43e007457f23f9a8c9a16fa1d3))
* **abc:st:** add `filterChange` type of `change` event ([#1389](https://github.com/ng-alain/delon/issues/1389)) ([00d4f08](https://github.com/ng-alain/delon/commit/00d4f0878bf47e43e007457f23f9a8c9a16fa1d3))
* **abc:st:** remove `rowClickTime` property ([#1394](https://github.com/ng-alain/delon/issues/1394)) ([7fba158](https://github.com/ng-alain/delon/commit/7fba15856750206c94f8f981d712a9f0b54bf6e0))
* **cli:** add `ng g ng-alain:sta` command ([#1359](https://github.com/ng-alain/delon/issues/1359)) ([7c5c70b](https://github.com/ng-alain/delon/commit/7c5c70b8e03b44cfbcd37619f0c4413b400594e6))
* **cli:** add `withoutModulePrefixInComponentName` ([#1395](https://github.com/ng-alain/delon/issues/1395)) ([d8871e9](https://github.com/ng-alain/delon/commit/d8871e96ed20c3ceb9408df8f87b2302ebf5d1df))
* **cli:** support specify routesRoot via `ng-alain.json` ([#1388](https://github.com/ng-alain/delon/issues/1388)) ([a8b4902](https://github.com/ng-alain/delon/commit/a8b4902e257dc0dc2d379b3b64e5aae79dd15311))
* **form:widget:number:** add `change` event ([#1370](https://github.com/ng-alain/delon/issues/1370)) ([7227c12](https://github.com/ng-alain/delon/commit/7227c1250adae8e5f8490ab84e401c884dabb904))
* **theme:default:** add `customError` property ([#1376](https://github.com/ng-alain/delon/issues/1376)) ([9e35ef3](https://github.com/ng-alain/delon/commit/9e35ef3adece03a05cfafa02c7ad0cb82c43a08b))
* **theme:i18n:** add `flatData` in `AlainI18nBaseService` ([#1384](https://github.com/ng-alain/delon/issues/1384)) ([b2cf89e](https://github.com/ng-alain/delon/commit/b2cf89e864a7456a301439bfef13dd2f8574ff53))

### Performance Improvements

* optimize error handling and navigate to the exception page ([#1391](https://github.com/ng-alain/delon/issues/1391)) ([dae6e9d](https://github.com/ng-alain/delon/commit/dae6e9d854a3a33341036f494821871263c120f5))


# [12.3.0](https://github.com/ng-alain/delon/compare/12.2.3...12.3.0) (2021-10-30)

### Bug Fixes

* **abc:st:** fix `iif` of group columns ([#1363](https://github.com/ng-alain/delon/issues/1363)) ([14eb035](https://github.com/ng-alain/delon/commit/14eb0351d62ec57d64010a910f8054350e9c9734))
* **form:number:** fix exclusive range when step be set ([#1366](https://github.com/ng-alain/delon/issues/1366)) ([68b5c5b](https://github.com/ng-alain/delon/commit/68b5c5b726e6cdf7d55bf4ba271d4e5f299d8cbb))

### Features

* **abc:xlsx:** add support `csv` file ([#1354](https://github.com/ng-alain/delon/issues/1354)) ([826b93f](https://github.com/ng-alain/delon/commit/826b93f1c41247fd9385ebf4f11b99e10a5449a3))
* **acl:** support function of `guard` ([#1365](https://github.com/ng-alain/delon/issues/1365)) ([bf2ff5d](https://github.com/ng-alain/delon/commit/bf2ff5d5be9d0f94ff949a0574b35cba3648aa77))
* adding Italian locale ([#1357](https://github.com/ng-alain/delon/issues/1357)) ([52b237a](https://github.com/ng-alain/delon/commit/52b237ade8f9c13f95cc0cc84eba17f8cbda51f1))
* **chart:echarts:** add `on` property ([#1337](https://github.com/ng-alain/delon/issues/1337)) ([442abcc](https://github.com/ng-alain/delon/commit/442abcc89d63aaab9664330ce0ecc6034d6d3888))
* **form:widget:text:** add `html`property ([#1367](https://github.com/ng-alain/delon/issues/1367)) ([d07bcdd](https://github.com/ng-alain/delon/commit/d07bcdd55f0d749a2d66c8b3fcdde651ad947cf5))
* **theme:menu:** support `svg` type ([#1364](https://github.com/ng-alain/delon/issues/1364)) ([36c43e2](https://github.com/ng-alain/delon/commit/36c43e2efee9564a6c7f41ff8247858b7d248aca))
* **util:format:** add token mode in format mask ([#1349](https://github.com/ng-alain/delon/issues/1349)) ([152cc50](https://github.com/ng-alain/delon/commit/152cc504e0dc83d65ae571fdf0919bcfbd6e1cdb))


## [12.2.3](https://github.com/ng-alain/delon/compare/12.2.2...12.2.3) (2021-09-24)

### Bug Fixes

* **cli:** fix export json-schema when not choose form ([#1352](https://github.com/ng-alain/delon/issues/1352)) ([e71ea04](https://github.com/ng-alain/delon/commit/e71ea04dba044a29919b36b436d855164eeebc63))
* **form:widget:autocomplete:** fix invalid typing when async data ([#1351](https://github.com/ng-alain/delon/issues/1351)) ([aca195a](https://github.com/ng-alain/delon/commit/aca195a10fc46dda51c8eefc8b9b28ced30da812))
* **form:** fix `ui` value cross pollute ([#1355](https://github.com/ng-alain/delon/issues/1355)) ([65ac839](https://github.com/ng-alain/delon/commit/65ac839fedb34d4e18e959071e0b8c31e0aa6e96))


## [12.2.2](https://github.com/ng-alain/delon/compare/12.2.1...12.2.2) (2021-09-10)

### Scaffold

* fix `navigator.languages` return lowercase string in WebKit ([#2088](https://github.com/ng-alain/ng-alain/pull/2069))

### Bug Fixes

* **abc:reuse-tab:** fix adding new tab should be after the current ([#1345](https://github.com/ng-alain/delon/issues/1345)) ([d6438cf](https://github.com/ng-alain/delon/commit/d6438cf40cb6857ca4459278ec3b6e95fbbba738))
* **abc:st:** fix `#NULL!` value when empty value and `type` is `date` ([#1338](https://github.com/ng-alain/delon/issues/1338)) ([52bac24](https://github.com/ng-alain/delon/commit/52bac241ab537eb829542bf6290b43cb0440d67c))
* **abc:st:** fix between sorts space of resizable handle ([#1341](https://github.com/ng-alain/delon/issues/1341)) ([519adbe](https://github.com/ng-alain/delon/commit/519adbe9c5f86068d2b97acf3a3921b491470521))
* **auth:** fix ensure `change` event and `get()` have consistent results ([#1339](https://github.com/ng-alain/delon/issues/1339)) ([fddb094](https://github.com/ng-alain/delon/commit/fddb0942d4e297f62d227e06230573ad314e9b65))
* **cli:tpl:** fix incorrect arguments index of schema.json ([#1336](https://github.com/ng-alain/delon/issues/1336)) ([af62081](https://github.com/ng-alain/delon/commit/af620810ecdd93c8844755b303c995fe54dbe2b0))
* **cli:tpl:** fix lose `tplName` property of `schema.json` ([#1335](https://github.com/ng-alain/delon/issues/1335)) ([0e7b4f4](https://github.com/ng-alain/delon/commit/0e7b4f471bf28257a19c130e78df26542b1d5d0f))
* **form:** add `widget` index sign ([#1334](https://github.com/ng-alain/delon/issues/1334)) ([b192990](https://github.com/ng-alain/delon/commit/b192990cf9f7ecfe84aa7f252ab4d3cc33151885))
* **util:format:** fix invalid mobile number starting with 198 ([#1331](https://github.com/ng-alain/delon/issues/1331)) ([a6faccd](https://github.com/ng-alain/delon/commit/a6faccd197857a08f07add7031975e56312d0424))


## [12.2.1](https://github.com/ng-alain/delon/compare/12.2.0...12.2.1) (2021-08-22)

### Bug Fixes

* fix `.antTableEvenBG` in less complite ([#1329](https://github.com/ng-alain/delon/issues/1329)) ([f0fa5d5](https://github.com/ng-alain/delon/commit/f0fa5d526ac7789f4a4746829a6c682fc6579cf7))


# [12.2.0](https://github.com/ng-alain/delon/compare/12.1.1...12.2.0) (2021-08-22)

### Scaffold

* add `PreloadOptionalModules` ([#2055](https://github.com/ng-alain/ng-alain/issues/2055))
* add `interpolation` in global config ([#2062](https://github.com/ng-alain/ng-alain/issues/2062))
* fix language key name case sensitivity ([#2069](https://github.com/ng-alain/ng-alain/issues/2069))
* use `MatchControl` instead of custom equal values ([#2061](https://github.com/ng-alain/ng-alain/issues/2061))

### Bug Fixes

* **abc:st:** fix render `undefined` when `safeType` is `text` ([#1322](https://github.com/ng-alain/delon/issues/1322)) ([c337d75](https://github.com/ng-alain/delon/commit/c337d75a7f2aa0d374c88db4e97dd51da8b604ce))
* **form:widget:select:** fix invalid `orgData` of `change` event ([#1312](https://github.com/ng-alain/delon/issues/1312)) ([#1320](https://github.com/ng-alain/delon/issues/1320)) ([8c12822](https://github.com/ng-alain/delon/commit/8c12822a7d65cdcda7c34d9554d13c5a1ef981d9))
* **sf:** fix unknown keyword: "_description" in strict mode ([#1327](https://github.com/ng-alain/delon/issues/1327)) ([554abd4](https://github.com/ng-alain/delon/commit/554abd469fa588548a1ec79d603201eeeafd1250))
* **util:convert:** fix invalid `defaultValue` parament in `InputBoolean` ([#1323](https://github.com/ng-alain/delon/issues/1323)) ([386690c](https://github.com/ng-alain/delon/commit/386690cb1e194dc50c22450e71d0e0995a8b24bc))
* **util:other:deep:** fix can't merge function in `deepMergeKey` ([#1321](https://github.com/ng-alain/delon/issues/1321)) ([f2f181b](https://github.com/ng-alain/delon/commit/f2f181b8ba44eade220eececa546a5c84fa6f776))

### Features

* **abc:se,sv:** add `noColon` property ([#1324](https://github.com/ng-alain/delon/issues/1324)) ([9f2a031](https://github.com/ng-alain/delon/commit/9f2a0313310fbbcd610a26a33c77742734a3fe2e))
* **form:string:** add `changeDebounceTime`, `changeMap` property ([#1315](https://github.com/ng-alain/delon/issues/1315)) ([3a8a26d](https://github.com/ng-alain/delon/commit/3a8a26d5a36513b2cdb6d51fb474c4eb7eaceb60))
* **theme:i18n:** add `interpolation` in global config ([#1318](https://github.com/ng-alain/delon/issues/1318)) ([e711865](https://github.com/ng-alain/delon/commit/e7118657fbb24c9f62c422e1b1029bfbe2cee541))
* **theme:** add `@nz-table-even-background` ([#1325](https://github.com/ng-alain/delon/issues/1325)) ([71d3ef6](https://github.com/ng-alain/delon/commit/71d3ef6be7097d083af3967283d27c420c35e0e9))
* **theme:** add `PreloadOptionalModules` ([#1310](https://github.com/ng-alain/delon/issues/1310)) ([6df8fd0](https://github.com/ng-alain/delon/commit/6df8fd029be8f877292d384e962d4c26161a8011))


## [12.1.1](https://github.com/ng-alain/delon/compare/12.1.0...12.1.1) (2021-08-13)

### Bug Fixes

* **abc:st:** fix invalid `toTop` when only `scroll.x` is set ([#1311](https://github.com/ng-alain/delon/issues/1311)) ([c07e1fa](https://github.com/ng-alain/delon/commit/c07e1fa688d7dbf4cbf593c08886b6346e5de46c))
* **auth:** fix invalid write token value in cookie type ([#1316](https://github.com/ng-alain/delon/issues/1316)) ([fd97e51](https://github.com/ng-alain/delon/commit/fd97e51fd37d4e011940e3ae518a0fa24badf819))
* **form:widget:select:** fix invalid `orgData` of `change`event ([#1312](https://github.com/ng-alain/delon/issues/1312)) ([527c212](https://github.com/ng-alain/delon/commit/527c212ae4ded1ba7c3b36ea039d8d72cb22fd59))
* **form:** fix invlid type in `button` ([#1314](https://github.com/ng-alain/delon/issues/1314)) ([d289411](https://github.com/ng-alain/delon/commit/d2894115b1ef9e898303952307e4f5ead6f64bc5))


# [12.1.0](https://github.com/ng-alain/delon/compare/12.0.3...12.1.0) (2021-08-07)

### Bug Fixes

* **abc:page-header:** fix can't slider for a lot of tabs ([#1304](https://github.com/ng-alain/delon/issues/1304)) ([90677bb](https://github.com/ng-alain/delon/commit/90677bb3341a8b5286f65e55e3d5183a69f7e4a3))
* **abc:reuse-tab:** fix re-trigger the `_onReuseInit` event ([#1308](https://github.com/ng-alain/delon/issues/1308)) ([4282fc2](https://github.com/ng-alain/delon/commit/4282fc2ea1556a0b4e0459e9c9385edf7fb0f670))
* **cli:** remove deprecated async of test case ([#1305](https://github.com/ng-alain/delon/issues/1305)) ([259a1c2](https://github.com/ng-alain/delon/commit/259a1c2a90f5473081807b3af2895d68b9375e07))

### Features

* **abc:exception:** add `backRouterLink` property ([#1299](https://github.com/ng-alain/delon/issues/1299)) ([6a94dbd](https://github.com/ng-alain/delon/commit/6a94dbd6ae80ce5ae4176d28731e373e0c26ee55))
* **abc:st:** add `clickRowClassName` property ([#1307](https://github.com/ng-alain/delon/issues/1307)) ([5e5978d](https://github.com/ng-alain/delon/commit/5e5978d1fbd5eaf96f252871cbcc766bad8f2381))
* **form:** add `hideStep` of `number` widget ([#1303](https://github.com/ng-alain/delon/issues/1303)) ([f895bf0](https://github.com/ng-alain/delon/commit/f895bf0abbfc88dc4154bd57ef65b8321dae6fb9))


## [12.0.3](https://github.com/ng-alain/delon/compare/12.0.2...12.0.3) (2021-08-01)

### Bug Fixes

* **abc:page-header:** fix `should be run in update mode` error ([#1297](https://github.com/ng-alain/delon/issues/1297)) ([1e4ea43](https://github.com/ng-alain/delon/commit/1e4ea439adf3eb0f9cb3419a9d6b8b5ea84714d9))
* **abc:st:** fix excel column width ([#1296](https://github.com/ng-alain/delon/issues/1296)) ([b0a9a96](https://github.com/ng-alain/delon/commit/b0a9a964085f951efe2ff58c8c853e0c178a8bd9))
* **form:** fix index signature is missing in type of `formData` ([#1296](https://github.com/ng-alain/delon/issues/1300))


## [12.0.2](https://github.com/ng-alain/delon/compare/12.0.1...12.0.2) (2021-07-26)

### Bug Fixes

* **cli:** add `fixAngularJson` option ([#1294](https://github.com/ng-alain/delon/issues/1294)) ([dbe0642](https://github.com/ng-alain/delon/commit/dbe06424c59fa005f86c0f196bb5ad053ac4665f))


## [12.0.1](https://github.com/ng-alain/delon/compare/12.0.0...12.0.1) (2021-07-24)

### Bug Fixes

* **abc:st:** fix optimize when specified new data in call `export` ([#1288](https://github.com/ng-alain/delon/issues/1288)) ([9416fe1](https://github.com/ng-alain/delon/commit/9416fe16360e7e9def0a6b9150bd5e8bbc166386))
* **cli:** fix `UserLoginComponent` is declared by more than on NgModule ([#1289](https://github.com/ng-alain/delon/issues/1289)) ([1042aea](https://github.com/ng-alain/delon/commit/1042aeae16b6f06022bf6cc0a52727a5458b8bc1))
* **cli:** fix duplicate alias of `t` ([#1291](https://github.com/ng-alain/delon/issues/1291)) ([c4e1943](https://github.com/ng-alain/delon/commit/c4e1943475d46f94683345cc94fc8c5eb83e1267))
* **theme:http:** fix missing `HttpContext` ([#1292](https://github.com/ng-alain/delon/issues/1292)) ([a394400](https://github.com/ng-alain/delon/commit/a394400c003e1e73c42789aa43baadbc590af080))


# [12.0.0](https://github.com/ng-alain/delon/compare/11.10.4...12.0.0) (2021-07-16)

### Features

* **abc:st:** add intellisense for `index` ([#1284](https://github.com/ng-alain/delon/issues/1284)) ([5d8c017](https://github.com/ng-alain/delon/commit/5d8c01788e6f23853d83a67593b87ffee86bd2d4))
* **abc:notice-icon:** add `emptyText`, `title`, `description` support TemplateRef ([#1256](https://github.com/ng-alain/delon/issues/1256)) ([596ca40](https://github.com/ng-alain/delon/commit/596ca40c254e619dc868deced7d4f105fac2d797))
* **abc:se,sv:** add `nz-divider` support ([#1283](https://github.com/ng-alain/delon/issues/1283)) ([46d6e3d](https://github.com/ng-alain/delon/commit/46d6e3d60a8903c4a71fc64efc5e8b2d596c3742))
* **cache:** add custom request ([#1253](https://github.com/ng-alain/delon/issues/1253)) ([084037e](https://github.com/ng-alain/delon/commit/084037e73c094636eb510565863e403259f264d1))
* **chart:bar,mini-area,mini-bar:** add `color` in data ([#1279](https://github.com/ng-alain/delon/issues/1279)) ([1ea098d](https://github.com/ng-alain/delon/commit/1ea098daaeca6eedfb07f5f342052b1c3e3ffb6a))
* **chart:echarts:** support resize ([#1263](https://github.com/ng-alain/delon/issues/1263)) ([9ac3a99](https://github.com/ng-alain/delon/commit/9ac3a99c85f773e63232b2723201b8888fbe5cf0))
* **form:** add `property` property of `visibleIf` function ([#1281](https://github.com/ng-alain/delon/issues/1281)) ([980b8a5](https://github.com/ng-alain/delon/commit/980b8a528bbf59f474984994f6a7271a89cf70b6))
* **theme:theme-btn:** add `deployUrl` property ([#1264](https://github.com/ng-alain/delon/issues/1264)) ([05ce8f2](https://github.com/ng-alain/delon/commit/05ce8f20f7c4b62d75c23e3b1013c8e9951034ff))
* **theme:** add enabled of util classes ([#1280](https://github.com/ng-alain/delon/issues/1280)) ([273aeed](https://github.com/ng-alain/delon/commit/273aeedeb748f97163cd0282288a9947dc93d605))
* **util:** add mobile number format starting with `16` ([#1282](https://github.com/ng-alain/delon/issues/1282)) ([cd98359](https://github.com/ng-alain/delon/commit/cd983593e05fbdcdb83cb155d6b5f7fbba435702))

### Performance Improvements

* use build-in `i18n` instead of `@ngx-translate/core` ([#1276](https://github.com/ng-alain/delon/issues/1276)) ([ba48cc3](https://github.com/ng-alain/delon/commit/ba48cc3f574837064940f720323351172dd4e3df))

### BREAKING CHANGES

**DelonChartModule**
- Removed

**WINDOW**
- Used `import { WINDOW } from '@delon/util/token';` instead

**_currency**
- Used [price](https://ng-alain.com/util/pipes-currency/en?#price) pipe instead

**_HttpClient.end**
- Used `cleanLoading` instead

**ModalHelper.open, static**
- `open` used `create` instead
- `static` used `createStatic` instead

**ScrollService**
- Used `import { ScrollService } from '{AT}delon/util/browser';` instead

**Badges Class**
- Used `nz-tag` instead

**AlainMockConfig.data**
- Used `DelonMockModule.forRoot({ data: {} })` instead

## Old Versions

All releases notes can be found [here](https://github.com/ng-alain/ng-alain/releases).
