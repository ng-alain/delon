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

## [21.0.5](https://github.com/ng-alain/delon/compare/21.0.4...21.0.5) (2026-02-01)

### Bug Fixes

* **abc:se,sg,sv:** fix global config not working ([#1983](https://github.com/ng-alain/delon/issues/1983)) ([1e28fdf](https://github.com/ng-alain/delon/commit/1e28fdf562b9ad810554f8c6c3680f499a2c6e43))
* **theme:ModalHelper:** fix `focus` can't working when `nzNoAnimation… ([#1984](https://github.com/ng-alain/delon/issues/1984)) ([55731fd](https://github.com/ng-alain/delon/commit/55731fdc831b2326a5684543ae515609bbe1a661))


## <small>21.0.4 (2026-01-28)</small>

* fix(abc:se,sg,sv): fix global config not working (#1980) ([be765b4](https://github.com/ng-alain/delon/commit/be765b4)), closes [#1980](https://github.com/ng-alain/delon/issues/1980)

## <small>21.0.3 (2026-01-25)</small>

* fix(cli): fix missing dependencies version (#1978) ([e5b5e02](https://github.com/ng-alain/delon/commit/e5b5e02)), closes [#1978](https://github.com/ng-alain/delon/issues/1978)

## <small>21.0.2 (2026-01-18)</small>

* fix(acl:if): fix NG0950 (#1974) ([2cdef54](https://github.com/ng-alain/delon/commit/2cdef54)), closes [#1974](https://github.com/ng-alain/delon/issues/1974)
* fix(cli): fix missing vitest config in `ng add ng-alain` (#1973) ([f708066](https://github.com/ng-alain/delon/commit/f708066)), closes [#1973](https://github.com/ng-alain/delon/issues/1973)


## <small>21.0.1 (2026-01-17)</small>

* fix(cli): fix missing import `ReuseTabComponent` (#1970) ([3fbafb1](https://github.com/ng-alain/delon/commit/3fbafb1)), closes [#1970](https://github.com/ng-alain/delon/issues/1970)
* fix(cli): remove `provideAnimations` (#1971) ([4c92bca](https://github.com/ng-alain/delon/commit/4c92bca)), closes [#1971](https://github.com/ng-alain/delon/issues/1971)


## 21.0.0 (2026-01-17)

### Code Refactoring

* refactor(*): use `nzVariant` instead of `nzBorderless` (#1944) ([6e61fec](https://github.com/ng-alain/delon/commit/6e61fec)), closes [#1944](https://github.com/ng-alain/delon/issues/1944)

### Features

* feat(abc:date-picker): supports using string identifiers (#1954) ([4cbac18](https://github.com/ng-alain/delon/commit/4cbac18)), closes [#1954](https://github.com/ng-alain/delon/issues/1954)
* feat(abc:loading): add locale of `text` (#1959) ([31fac3f](https://github.com/ng-alain/delon/commit/31fac3f)), closes [#1959](https://github.com/ng-alain/delon/issues/1959)
* feat(abc:reuse-tab): `routeParamMatchMode` support custom function (#1952) ([f3505e2](https://github.com/ng-alain/delon/commit/f3505e2)), closes [#1952](https://github.com/ng-alain/delon/issues/1952)
* feat(abc:st): `filter` is null when call reset in `change` event (#1950) ([891ff48](https://github.com/ng-alain/delon/commit/891ff48)), closes [#1950](https://github.com/ng-alain/delon/issues/1950)
* feat(abc:st): add `page.checkboxIdMap` cache check data (#1951) ([4144847](https://github.com/ng-alain/delon/commit/4144847)), closes [#1951](https://github.com/ng-alain/delon/issues/1951)
* feat(module:i18n): add missing translations (#1955) ([3cb28c5](https://github.com/ng-alain/delon/commit/3cb28c5)), closes [#1955](https://github.com/ng-alain/delon/issues/1955)
* feat(theme:i18n): add `mergeData` method (#1945) ([4f1a351](https://github.com/ng-alain/delon/commit/4f1a351)), closes [#1945](https://github.com/ng-alain/delon/issues/1945)
* feat(cli): add `reuseTab` option in ng-add (#1961) ([478f009](https://github.com/ng-alain/delon/commit/478f009)), closes [#1961](https://github.com/ng-alain/delon/issues/1961)

### Bug Fixes

* fix(abc:st): can't render button when `children` is empty array (#1947) ([a4be8d1](https://github.com/ng-alain/delon/commit/a4be8d1)), closes [#1947](https://github.com/ng-alain/delon/issues/1947)
* fix(form): fix `path` invalid value in `formValueChange` (#1953) ([86a9b4e](https://github.com/ng-alain/delon/commit/86a9b4e)), closes [#1953](https://github.com/ng-alain/delon/issues/1953)
* fix(theme:setting-drawer): fix style (#1968) ([f82dc34](https://github.com/ng-alain/delon/commit/f82dc34)), closes [#1968](https://github.com/ng-alain/delon/issues/1968)


## Old Versions

All releases notes can be found [here](https://github.com/ng-alain/ng-alain/releases).
