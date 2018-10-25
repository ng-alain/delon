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


