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

## [16.2.1](https://github.com/ng-alain/delon/compare/16.2.0...16.2.1) (2023-08-06)

### Bug Fixes

* **abc:reuse-tab:** fix missing export cache ([#1633](https://github.com/ng-alain/delon/issues/1633)) ([2c7def7](https://github.com/ng-alain/delon/commit/2c7def75a5b219a58319ab129407f4058010fc44))
* **auth:cookie:** fix cookie expires ([#1636](https://github.com/ng-alain/delon/issues/1636)) ([eca7bcb](https://github.com/ng-alain/delon/commit/eca7bcb2e7ba43b3a4b3bb4ab3cd17a7d762a967))
* **theme:table:** fix table image spacing ([#1629](https://github.com/ng-alain/delon/issues/1629)) ([994e2be](https://github.com/ng-alain/delon/commit/994e2be90354a55a538ed1b55c413b8ce8cde872))
* **theme:title:** fix ignore empty title ([#1638](https://github.com/ng-alain/delon/issues/1638)) ([c7bf339](https://github.com/ng-alain/delon/commit/c7bf339ee417a3b238cdb7dc18cccd1fe99a6c88))


# [16.2.0](https://github.com/ng-alain/delon/compare/16.1.1...16.2.0) (2023-07-21)

### SCAFFOLDING

* Breaking changes router guard [#2407](https://github.com/ng-alain/ng-alain/pull/2407/files).
* Code style [#2405](https://github.com/ng-alain/ng-alain/pull/2405/files#diff-a3f38f2cae79a3819f93ff1a9d4cd281cbe8f95696e14a29864f08796d3dc568).

### Bug Fixes

* **abc:onboarding:** fix `ComponentFactoryResolver` ([#1624](https://github.com/ng-alain/delon/issues/1624)) ([ae065c2](https://github.com/ng-alain/delon/commit/ae065c21e9ba1ea0d56bae9ceb1e44b7bbb9b0fb))
* **chat:timeline:** fix `y2` to be optional ([#1622](https://github.com/ng-alain/delon/issues/1622)) ([b565ddf](https://github.com/ng-alain/delon/commit/b565ddfdd7872a43f9fd3b3a1fd33d739f08074c))
* **cli:** remove `skipTests` from generating module ([#1616](https://github.com/ng-alain/delon/issues/1616)) ([0da83f8](https://github.com/ng-alain/delon/commit/0da83f83b90ea5a367d35c6761554d7ebc07bfd0))
* fix misalignment of `col` placeholders in `se`, `sv`, `sg` ([#1617](https://github.com/ng-alain/delon/issues/1617)) ([83b08c9](https://github.com/ng-alain/delon/commit/83b08c95ba803cf29e0f10bb354ae4f9170b2295))
* **theme:modal:** removed `nzComponentParams` ([#1615](https://github.com/ng-alain/delon/issues/1615)) ([45863a1](https://github.com/ng-alain/delon/commit/45863a1d62e5751416321cb1d591faf820bb82d3))

### Features

* **abc:st:** add `onCell`, support colSpan and rowSpan merging ([#1613](https://github.com/ng-alain/delon/issues/1613)) ([9ab109e](https://github.com/ng-alain/delon/commit/9ab109e8f99fb1bd4e5b4e99b0b814bf34f0b4ac))
* **abc:st:** button support function method of `icon`, `className` ([#1618](https://github.com/ng-alain/delon/issues/1618)) ([6bf27da](https://github.com/ng-alain/delon/commit/6bf27dac696818ff78b0ee955333e308597c968b))
* **theme:layout-default:** add `fetching` property ([#1614](https://github.com/ng-alain/delon/issues/1614)) ([8446da6](https://github.com/ng-alain/delon/commit/8446da6fdd10d07f2e917d91830d95e1c81d2622))

### BREAKING CHANGE

* **acl:** refactor `ACLGuard` to `aclCanMatch`, `aclCanActivate`, `aclCanActivateChild`
* **auth:simple** refactor `SimpleGuard` to `authSimpleCanMatch`, `authSimpleCanActivate`, `authSimpleCanActivateChild`
* **auth:jtw** refactor `JWTGuard` to `authJWTCanMatch`, `authJWTCanActivate`, `authJWTCanActivateChild`
* **i18n** refactor `AlainI18NGuard` to `alainI18nCanMatch`, `alainI18nCanActivate`, `alainI18nCanActivateChild`


# [16.1.1](https://github.com/ng-alain/delon/compare/16.0.1...16.1.0) (2023-07-16)

### Bug Fixes

* **cli:** remove `stylelint-config-prettier` ([#1606](https://github.com/ng-alain/delon/issues/1606)) ([2ecc28b](https://github.com/ng-alain/delon/commit/2ecc28b53773d9b5215ebd720be4ead55d78c705))
* **theme:** fix ant-btn preserve white spaces when is link type ([#1605](https://github.com/ng-alain/delon/issues/1605)) ([0fdd15d](https://github.com/ng-alain/delon/commit/0fdd15dd0922bf6570d38fabd1afc1ca755b87a2))

### Features

* **abc:reuse-tab:** support custom cache data ([#1609](https://github.com/ng-alain/delon/issues/1609)) ([11599d9](https://github.com/ng-alain/delon/commit/11599d9566712c707146e4ac299ec6efc2d82b01))
* **theme:modal:** support drag ([#1607](https://github.com/ng-alain/delon/issues/1607)) ([3cd73f7](https://github.com/ng-alain/delon/commit/3cd73f7f86a76a7ea450f839e9ad359f6afd0da4))


## [16.0.1](https://github.com/ng-alain/delon/compare/16.0.0...16.0.1) (2023-06-08)

* fix `ng-zorro-antd` dependency

# [16.0.0](https://github.com/ng-alain/delon/compare/15.2.1...16.0.0) (2023-06-07)

### Bug Fixes

* **abc:st:** fix error row class in fixed column title cell ([#1598](https://github.com/ng-alain/delon/issues/1598)) ([d2bf211](https://github.com/ng-alain/delon/commit/d2bf211a35df8bcbee165b54bcda4b2dcf69c6f0))
* **form:** fix inheriting references to other of ui ([#1600](https://github.com/ng-alain/delon/issues/1600)) ([a0150e7](https://github.com/ng-alain/delon/commit/a0150e7520376064469cfa5ae0e3394635620022))


## Old Versions

All releases notes can be found [here](https://github.com/ng-alain/ng-alain/releases).
