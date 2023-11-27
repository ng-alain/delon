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

## <small>17.0.2 (2023-11-27)</small>

* fix(cli): fix cannot find module `@angular/cdk/schematics` (#1721) ([49a84a1](https://github.com/ng-alain/delon/commit/49a84a1)), closes [#1721](https://github.com/ng-alain/delon/issues/1721)

## <small>17.0.1 (2023-11-26)</small>

* fix(cli): fix node 20 version (#1719) ([df40bb3](https://github.com/ng-alain/delon/commit/df40bb3)), closes [#1719](https://github.com/ng-alain/delon/issues/1719)

## 17.0.0 (2023-11-26)

### Breaking Changes

* refactor(form): refining low-frequency widgets (#1668) ([8ab0e82](https://github.com/ng-alain/delon/commit/8ab0e82)), closes [#1668](https://github.com/ng-alain/delon/issues/1668)
* build: remove `networkEnv` plugin instead of [nnrm](https://github.com/YunYouJun/nnrm/blob/main/README.md) (#1680) ([b7dbc68](https://github.com/ng-alain/delon/commit/b7dbc68)), closes [#1680](https://github.com/ng-alain/delon/issues/1680)
* feat(acl): remove `forRoot` (#1690) ([4472d48](https://github.com/ng-alain/delon/commit/4472d48)), closes [#1690](https://github.com/ng-alain/delon/issues/1690)

### Features

* feat(cli): support use `ng add ng-alain` in multiple projects (#1664) ([e5476e2](https://github.com/ng-alain/delon/commit/e5476e2)), closes [#1664](https://github.com/ng-alain/delon/issues/1664)
* feat(theme): add `provideAlain` (#1697) ([4311426](https://github.com/ng-alain/delon/commit/4311426)), closes [#1697](https://github.com/ng-alain/delon/issues/1697)
* feat(abc:cell): add `provideCellWidgets` (#1700) ([7ea0daf](https://github.com/ng-alain/delon/commit/7ea0daf)), closes [#1700](https://github.com/ng-alain/delon/issues/1700)
* feat(abc:reuse-tab): add `provideReuseTabConfig` (#1707) ([2f85357](https://github.com/ng-alain/delon/commit/2f85357)), closes [#1707](https://github.com/ng-alain/delon/issues/1707)
* feat(abc:st): add `provideSTWidgets` (#1701) ([065316a](https://github.com/ng-alain/delon/commit/065316a)), closes [#1701](https://github.com/ng-alain/delon/issues/1701)
* feat(theme:_httpclient): add `timestampSecond` (#1670) ([051b087](https://github.com/ng-alain/delon/commit/051b087)), closes [#1670](https://github.com/ng-alain/delon/issues/1670)
* feat(theme:pipe:date): add global config (#1711) ([b3b93fa](https://github.com/ng-alain/delon/commit/b3b93fa)), closes [#1711](https://github.com/ng-alain/delon/issues/1711)
* feat: add `provideAlainConfig` (#1689) ([b9e0fad](https://github.com/ng-alain/delon/commit/b9e0fad)), closes [#1689](https://github.com/ng-alain/delon/issues/1689)
* feat(auth): add `provideAuth` (#1704) ([c0c731b](https://github.com/ng-alain/delon/commit/c0c731b)), closes [#1704](https://github.com/ng-alain/delon/issues/1704)
* feat(form): add `provideSFConfig` (#1702) ([2404802](https://github.com/ng-alain/delon/commit/2404802)), closes [#1702](https://github.com/ng-alain/delon/issues/1702)
* feat(mock): add `mockInterceptor` (#1698) ([da051b2](https://github.com/ng-alain/delon/commit/da051b2)), closes [#1698](https://github.com/ng-alain/delon/issues/1698)
* feat(mock): support asynchronous (`Promise`, `Observable`) of response (#1686) ([d7980db](https://github.com/ng-alain/delon/commit/d7980db)), closes [#1686](https://github.com/ng-alain/delon/issues/1686)
* feat(mock): add `provideDelonMockConfig` (#1695) ([683ab23](https://github.com/ng-alain/delon/commit/683ab23)), closes [#1695](https://github.com/ng-alain/delon/issues/1695)
* feat(testing): add `delay` function (#1682) ([f83ea57](https://github.com/ng-alain/delon/commit/f83ea57)), closes [#1682](https://github.com/ng-alain/delon/issues/1682)
* build: support pnpm and update yarn to `4` (#1678) ([b904b9a](https://github.com/ng-alain/delon/commit/b904b9a)), closes [#1678](https://github.com/ng-alain/delon/issues/1678)

### Bug Fixes

* fix(theme:preloader): fix loading order issues (#1691) ([f09c324](https://github.com/ng-alain/delon/commit/f09c324)), closes [#1691](https://github.com/ng-alain/delon/issues/1691)
* fix(cli:update): automatically add @_mock path (#1675) ([d014b54](https://github.com/ng-alain/delon/commit/d014b54)), closes [#1675](https://github.com/ng-alain/delon/issues/1675)

## Old Versions

All releases notes can be found [here](https://github.com/ng-alain/ng-alain/releases).
