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

## [19.0.1](https://github.com/ng-alain/delon/compare/19.0.0...19.0.1) (2025-01-21)

### Bug Fixes

* **cli:** fix Unknown argument: `--swaggerPath` ([#1884](https://github.com/ng-alain/delon/issues/1884)) ([a2d214d](https://github.com/ng-alain/delon/commit/a2d214dea3ecdb04265cbc78b92d5e1e6def2279))
* **util:config:** support signal of `attach` ([#1882](https://github.com/ng-alain/delon/issues/1882)) ([a1c4fb1](https://github.com/ng-alain/delon/commit/a1c4fb113455bc1468e3ab0f600625d7b1cc1547))


## 19.0.0 (2025-01-19)

### Features

* feat(*): migrate `[nz-icon]` to `nz-icon` tag (#1866) ([cb038a3](https://github.com/ng-alain/delon/commit/cb038a3)), closes [#1866](https://github.com/ng-alain/delon/issues/1866)
* feat(cli): add declaration-property-value-no-unknown via ng update (#1879) ([50dba0a](https://github.com/ng-alain/delon/commit/50dba0a)), closes [#1879](https://github.com/ng-alain/delon/issues/1879)
* feat(form): bump ng-zorro 19 (#1864) ([327dd47](https://github.com/ng-alain/delon/commit/327dd47)), closes [#1864](https://github.com/ng-alain/delon/issues/1864)
* feat(abc:st): add `arrayProcessMethod` in `setRow` (#1853) ([f057dd6](https://github.com/ng-alain/delon/commit/f057dd6)), closes [#1853](https://github.com/ng-alain/delon/issues/1853)
* feat(abc:st): add `drag` property (#1876) ([26e93cc](https://github.com/ng-alain/delon/commit/26e93cc)), closes [#1876](https://github.com/ng-alain/delon/issues/1876)
* feat(abc:st): add i18n in `pop` (#1874) ([f752c24](https://github.com/ng-alain/delon/commit/f752c24)), closes [#1874](https://github.com/ng-alain/delon/issues/1874)
* feat(abc:st): type `cell` support `click` (#1873) ([704badc](https://github.com/ng-alain/delon/commit/704badc)), closes [#1873](https://github.com/ng-alain/delon/issues/1873)
* feat(theme:layout-default): collapsed aside when screen is small (#1868) ([983cedb](https://github.com/ng-alain/delon/commit/983cedb)), closes [#1868](https://github.com/ng-alain/delon/issues/1868)
* feat(theme:menu): add `getDefaultRedirect` method (#1850) ([0323a37](https://github.com/ng-alain/delon/commit/0323a37)), closes [#1850](https://github.com/ng-alain/delon/issues/1850)

### Bug Fixes

* fix(abc:notice-icon): incorrect show list when `popoverVisible` control (#1869) ([9f2482d](https://github.com/ng-alain/delon/commit/9f2482d)), closes [#1869](https://github.com/ng-alain/delon/issues/1869)
* fix(abc:reuse-tab): fix can't be restored in cache (#1870) ([ae863b5](https://github.com/ng-alain/delon/commit/ae863b5)), closes [#1870](https://github.com/ng-alain/delon/issues/1870)
* fix(abc:st): fix can't `addRow` in group columns (#1871) ([409169a](https://github.com/ng-alain/delon/commit/409169a)), closes [#1871](https://github.com/ng-alain/delon/issues/1871)
* fix(abc:st): fixed columns not aligned (#1877) ([4ea94be](https://github.com/ng-alain/delon/commit/4ea94be)), closes [#1877](https://github.com/ng-alain/delon/issues/1877)
* fix(abc:st): misalignment when fixed and expand is set (#1872) ([afb1287](https://github.com/ng-alain/delon/commit/afb1287)), closes [#1872](https://github.com/ng-alain/delon/issues/1872)
* fix(form:color): fix duplicate export (#1867) ([1e1a837](https://github.com/ng-alain/delon/commit/1e1a837)), closes [#1867](https://github.com/ng-alain/delon/issues/1867)

### Code Refactoring

* refactor(module:*): remove `ngClass` and `ngStyle` (#1852) ([2547da9](https://github.com/ng-alain/delon/commit/2547da9)), closes [#1852](https://github.com/ng-alain/delon/issues/1852)
* refactor: enable `isolatedModules` compiler option (#1863) ([5d5b290](https://github.com/ng-alain/delon/commit/5d5b290)), closes [#1863](https://github.com/ng-alain/delon/issues/1863)
* build: enable `strictStandalone` flag (#1862) ([be8606e](https://github.com/ng-alain/delon/commit/be8606e)), closes [#1862](https://github.com/ng-alain/delon/issues/1862)
* perf: optimizing `@let` (#1849) ([d28a8ad](https://github.com/ng-alain/delon/commit/d28a8ad)), closes [#1849](https://github.com/ng-alain/delon/issues/1849)

### BREAKING CHANGES

* Remove `let` component (#1856) ([df6658f](https://github.com/ng-alain/delon/commit/df6658f)), closes [#1856](https://github.com/ng-alain/delon/issues/1856)

## Old Versions

All releases notes can be found [here](https://github.com/ng-alain/ng-alain/releases).
