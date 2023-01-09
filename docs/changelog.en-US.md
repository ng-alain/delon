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

# [15.0.0](https://github.com/ng-alain/delon/compare/14.3.0...15.0.0) (2023-01-09)

### Bug Fixes

* **abc:st:** fix `className` not applied to title ([#1569](https://github.com/ng-alain/delon/issues/1569)) ([d641164](https://github.com/ng-alain/delon/commit/d6411640f54bb41ebff254b2b221dc200a635a21))
* **abc:theme-default:** remove unused parameter ([#1563](https://github.com/ng-alain/delon/issues/1563)) ([656bd89](https://github.com/ng-alain/delon/commit/656bd8993d9957697992842b2f25ad66e91e1a7f))
* **cli:** fix `name` points to an invalid index ([#1568](https://github.com/ng-alain/delon/issues/1568)) ([d4ad502](https://github.com/ng-alain/delon/commit/d4ad50259e398cbbf680b1bc2f7aca1d7eb14e1e))

### Features

* **theme:layout-default:** add `layout-default-top-menu-item`, please refer to [layout.component.ts](https://github.com/ng-alain/delon/blob/master/src/dev/layout.component.ts#L65-L72)([Preview](https://ng-alain.com/dev/home)). ([#1570](https://github.com/ng-alain/delon/issues/1570)) ([f08dc46](https://github.com/ng-alain/delon/commit/f08dc46af7ad9ca5cf3e4fa5b0daef2cfbc0b4a5))
* **util:format:** support scientific notation of `isNum` ([#1567](https://github.com/ng-alain/delon/issues/1567)) ([f8c0589](https://github.com/ng-alain/delon/commit/f8c05894e0a10fb6037275103b921698ca072494))

### BREAKING CHANGE

- **auth:** removed `_allow_anonymous`, use [ALLOW_ANONYMOUS](https://github.com/ng-alain/delon/blob/master/packages/auth/src/token.ts) `HttpContext` instead
- **theme:** removed `getHit`, `openedByUrl` in `MenuService`, use `find` and `setItem` instead

## Old Versions

All releases notes can be found [here](https://github.com/ng-alain/ng-alain/releases).
