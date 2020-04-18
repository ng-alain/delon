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

# [9.0.0-rc.1](https://github.com/ng-alain/delon/compare/8.9.2...9.0.0-rc.1) (2020-04-18)

Welcome to the `9.0.0-rc.1` version of `ng-alain`. The direct release of `rc` because of `ng-alain` itself has no serious breaking changes, but `ng-alain` is depends on `ng-zorro`, so this upgrade focuses on the upgrade of` ng-zorro`. For details, please refer to [Upgrade Guide](https://github.com/ng-alain/ng-alain/issues/1569).

### Features

* **abc:se:** add `TemplateRef<void>` in `label`, `error`, `extr… ([#803](https://github.com/ng-alain/delon/issues/803)) ([eb13170](https://github.com/ng-alain/delon/commit/eb131704a374a9ea84803c20dde9836ec78549ee))
* **abc:se:** add auto `required` based on the control element ([#799](https://github.com/ng-alain/delon/issues/799)) ([1d4dad5](https://github.com/ng-alain/delon/commit/1d4dad559743091be1f85ed43757c2c0e20ba3ee))
* **abc:sidebar-nav:** can be set 3 levels icon ([#801](https://github.com/ng-alain/delon/issues/801)) ([087b8e9](https://github.com/ng-alain/delon/commit/087b8e9a94e1ae08a88461faecf2ef606dfa0dd1))
* **abc:st:** add enforce control to top via `reset`, `load` met… ([#800](https://github.com/ng-alain/delon/issues/800)) ([4a8bfb0](https://github.com/ng-alain/delon/commit/4a8bfb0ee34cfac5bbc71c3b9ce6c56f2bcb2c70))
* **theme:** add Japanese language files ([#730](https://github.com/ng-alain/delon/issues/730)) ([5efbe5b](https://github.com/ng-alain/delon/commit/5efbe5b52917fc3981009d76b53536924a6bb680))


## 8.9.2 (2020-04-07)

### Bug Fixes

* **abc:page-header:** fix missing import of `@angular/cdk/observ… ([#789](https://github.com/ng-alain/delon/issues/789)) ([d4566d7](https://github.com/ng-alain/delon/commit/d4566d71e31a3a8a3ce59627709ed86db2d2e5b1))
* **abc:st:** fix unabled to render `yn` type ([#786](https://github.com/ng-alain/delon/issues/786)) ([e16e02f](https://github.com/ng-alain/delon/commit/e16e02f0175ac89c9a70a51a728ca8ce7ecc74d7))
* **theme:title:** fix can't set comment node as title ([#793](https://github.com/ng-alain/delon/issues/793)) ([8b34f60](https://github.com/ng-alain/delon/commit/8b34f60fa5b081f37f1a5a7db5a4db8d69f48964))

### Features

* **form:string:** add `change`, `focus`, `blur`, `enter` event ([#790](https://github.com/ng-alain/delon/issues/790)) ([29373c4](https://github.com/ng-alain/delon/commit/29373c4d05d94d0ea4d07c504dbfdf28acf245cd))
* **theme:http:** add `form` method ([#787](https://github.com/ng-alain/delon/issues/787)) ([2edfd58](https://github.com/ng-alain/delon/commit/2edfd5868135750e67c195669bafc2f741e2952e))


## 8.9.1 (2020-04-03)

### Bug Fixes

* **abc:st:** fix text overflow in mobile screen ([#781](https://github.com/ng-alain/delon/issues/781)) ([a055b93](https://github.com/ng-alain/delon/commit/a055b93647d3aa7116162293947c6527643512e1))
* **form:widget:upload:** fix hide button when limit upload count ([#784](https://github.com/ng-alain/delon/issues/784)) ([acc2347](https://github.com/ng-alain/delon/commit/acc234793760163d259ceb32f48383e082b72e3f))
* **sf:widget:number:** specify widget width via `widgetWidth` property ([#782](https://github.com/ng-alain/delon/issues/782)) ([d2d3557](https://github.com/ng-alain/delon/commit/d2d3557dc8d3d226c8d1c566e272e1ddd9d47eb9))
* **theme:menu:** fix can't hited when route include queryString ([#783](https://github.com/ng-alain/delon/issues/783)) ([9c9af73](https://github.com/ng-alain/delon/commit/9c9af73258f79c42be8ced9aca35699dc95b9e7c))


# [8.9.0](https://github.com/ng-alain/delon/compare/8.8.0...8.9.0) (2020-02-19)

## `8.9` as the last minor version update for Angular 8

### Bug Fixes

* **abc:sidebar:** fix badge overflow ([#769](https://github.com/ng-alain/delon/issues/769)) ([7dc834e](https://github.com/ng-alain/delon/commit/7dc834ede2dc0d0d43d84a7c1ebbc47ddfc94209))
* **abc:st:** fix invalid default value of `date` type ([#765](https://github.com/ng-alain/delon/issues/765)) ([a971ac0](https://github.com/ng-alain/delon/commit/a971ac0f5a7729ae8da2d2e6dffbb37e790a3f1e))
* **abc:st:** fix lose `dblClick` in `STChange` ([#763](https://github.com/ng-alain/delon/issues/763)) ([153558b](https://github.com/ng-alain/delon/commit/153558b3ed74aa335bd0690f2dd238aed259f544))
* **cli:** fix unknown options ([#762](https://github.com/ng-alain/delon/issues/762)) ([4dddcb0](https://github.com/ng-alain/delon/commit/4dddcb075054e9674157578da09520766531c82f))
* **cli:** only supports angular 8.x ([#773](https://github.com/ng-alain/delon/issues/773)) ([2568480](https://github.com/ng-alain/delon/commit/25684801cdd065688a205c4595dd1c1b6f21b23b))
* **form:array:** fix invalid error when removed item ([#772](https://github.com/ng-alain/delon/issues/772)) ([ad2a3e6](https://github.com/ng-alain/delon/commit/ad2a3e663af16ffc91af590b71e18936087dfced))
* **form:date:** fix can't custom end format ([#770](https://github.com/ng-alain/delon/issues/770)) ([8d3fed1](https://github.com/ng-alain/delon/commit/8d3fed1127ff82b579d2b2a2318610ab97bfdd9e))
* **theme:_HtpClient:** fix loading status invalid when not subsc… ([#774](https://github.com/ng-alain/delon/issues/774)) ([770ec8b](https://github.com/ng-alain/delon/commit/770ec8b3b9d381cf229e8f1ffd5c8926cc18487c))

### Features

* **abc:down-file:** add `http-body` property ([#768](https://github.com/ng-alain/delon/issues/768)) ([748f7e1](https://github.com/ng-alain/delon/commit/748f7e12dfd736f579340c9e777b9fe159080741))
* **abc:st:** add `count`, `list` properites of component ([#767](https://github.com/ng-alain/delon/issues/767)) ([21eec5b](https://github.com/ng-alain/delon/commit/21eec5b1ace7dc88e5ba41e12a5d82fa0412be15))
* **theme:** fix disabled & flex css class ([#764](https://github.com/ng-alain/delon/issues/764)) ([842e9d8](https://github.com/ng-alain/delon/commit/842e9d8b42169bf6cdb9409ecea6f8e3fe2d7b0e))


# [8.8.0](https://github.com/ng-alain/delon/compare/8.7.3...8.8.0) (2019-12-30)

### Bug Fixes

* **abc:sidebar-nav:** fix keeping expand when changed route in enabled `openStrictly` ([#759](https://github.com/ng-alain/delon/issues/759)) ([a7ab84a](https://github.com/ng-alain/delon/commit/a7ab84a1b98a7e714afd6c44c5ef13c02a093d7e))
* **abc:st:** fix filter misalignment ([#754](https://github.com/ng-alain/delon/issues/754)) ([7236e70](https://github.com/ng-alain/delon/commit/7236e70ab73838cb69173ccb53ba992e54852d8e))
* **cli:plugin:docker:** fix lower version of node ([#753](https://github.com/ng-alain/delon/issues/753)) ([6ce6eb6](https://github.com/ng-alain/delon/commit/6ce6eb668af8bca0e2d591abf7b54f2e19ef6722))
* **cli:plugin:icon:** fix multi-project pollution ([#752](https://github.com/ng-alain/delon/issues/752)) ([889d75a](https://github.com/ng-alain/delon/commit/889d75af9b330a6deb6ebbe91b4873ec611f2cab))

### Features

* **abc:down-file:** support custom file name ([#757](https://github.com/ng-alain/delon/issues/757)) ([bafb44c](https://github.com/ng-alain/delon/commit/bafb44cbfdcad73eb9bfed6a155b089e7c77c3e6))
* **abc:loading:** add global loading indicator ([#755](https://github.com/ng-alain/delon/issues/755)) ([8c1a6d8](https://github.com/ng-alain/delon/commit/8c1a6d8cc3f041d82007ef4641fe5f641730df5d))


## [8.7.3](https://github.com/ng-alain/delon/compare/8.7.2...8.7.3) (2019-12-20)

### Bug Fixes

* **abc:se:** fix misplaced labels on small screens ([#744](https://github.com/ng-alain/delon/issues/744)) ([1f141a5](https://github.com/ng-alain/delon/commit/1f141a5ded2b8727a0d505057cdc17e04899036c))
* **abc:sidebar-nav:** fix can't click text in collapsed mode ([#749](https://github.com/ng-alain/delon/issues/749)) ([c502017](https://github.com/ng-alain/delon/commit/c5020175ab7e817dac41076a53e9da1cccb4995c))
* **form:** fix shoule be inherit ui properites of array property ([#747](https://github.com/ng-alain/delon/issues/747)) ([0c02bb6](https://github.com/ng-alain/delon/commit/0c02bb6846cc3f7e96c5aa30748177bfd8c5916e)), closes [#745](https://github.com/ng-alain/delon/issues/745)
* **theme:http.decorator:** fix unable to send array response body ([#746](https://github.com/ng-alain/delon/issues/746)) ([3855838](https://github.com/ng-alain/delon/commit/3855838b8e8ab2c3468d77267c5643e8ce5fa32a))


## [8.7.2](https://github.com/ng-alain/delon/compare/8.7.1...8.7.2) (2019-12-16)

### Bug Fixes

* **abc:sidebar-nav:** fix invalide tooltip render ([#736](https://github.com/ng-alain/delon/issues/736)) ([7de70b2](https://github.com/ng-alain/delon/commit/7de70b2642cc063c0d1978df770cb16057f0b07b))
* **abc:sidebar-nav:** fix not found `[@alain-default-aside](https://github.com/alain-default-aside)-*` var… ([#740](https://github.com/ng-alain/delon/issues/740)) ([8bd3729](https://github.com/ng-alain/delon/commit/8bd3729107e67c2bc0239effb302e680ed5bdca1))
* **abc:sv,se:** fix spacing between option and Icon ([#741](https://github.com/ng-alain/delon/issues/741)) ([1ab2ca5](https://github.com/ng-alain/delon/commit/1ab2ca5b38614b9f4410c0b3095e926130e1feed))


## [8.7.1](https://github.com/ng-alain/delon/compare/8.7.0...8.7.1) (2019-12-11)

### Bug Fixes

* **abc:sidebar-nav:** fix style in disabled ([#731](https://github.com/ng-alain/delon/issues/731)) ([7759299](https://github.com/ng-alain/delon/commit/7759299fa6822e98c2d1133134db74ae59dfa453))
* **abc:st:** fix duplcate title when `responsive` is `false` ([#733](https://github.com/ng-alain/delon/issues/733)) ([baab4a7](https://github.com/ng-alain/delon/commit/baab4a7a00cf737c344342e085def4e01b54a27a))
* **chart:water-wave:** fix first time unable to render ([#734](https://github.com/ng-alain/delon/issues/734)) ([cbbd573](https://github.com/ng-alain/delon/commit/cbbd573a43e404098f23c28b8ff0fb5f3beb87b3))


# [8.7.0](https://github.com/ng-alain/delon/compare/8.6.0...8.7.0) (2019-12-06)

### Scaffold

* fix: should handle exceptions more friendly in `DefaultInterceptor` ([#1411](https://github.com/ng-alain/ng-alain/pull/1411))

### Bug Fixes

* **abc:st:** fix expand width value in strict mode ([#720](https://github.com/ng-alain/delon/issues/720)) ([248c27d](https://github.com/ng-alain/delon/commit/248c27d71891323975d48bfa2010805b4bab9072))

### Features

* **abc:sidebar-nav:** support html in `text` or `i18n` property ([#723](https://github.com/ng-alain/delon/issues/723)) ([d58f5b1](https://github.com/ng-alain/delon/commit/d58f5b1edb4109d5d21a2e1d7b4c1aa6fed0dca4)), closes [#716](https://github.com/ng-alain/delon/issues/716)
* **abc:st:** add `error` supports multiple types ([#721](https://github.com/ng-alain/delon/issues/721)) ([436a4e5](https://github.com/ng-alain/delon/commit/436a4e56346784e96ad2aaa4c268d3415d46f590))
* **abc:st:** add `setRow` method in component ([#725](https://github.com/ng-alain/delon/issues/725)) ([170bab2](https://github.com/ng-alain/delon/commit/170bab2a2ac9a7bbd2b92465183d711e03be8333))
* **auth:** add `onlyToken` property in `clear` method ([#717](https://github.com/ng-alain/delon/issues/717)) ([f05ab21](https://github.com/ng-alain/delon/commit/f05ab21f9cac6d9db46af3689974be19693a8058))
* **theme:MenuService:** add `getItem`, `setItem` methods ([#722](https://github.com/ng-alain/delon/issues/722)) ([2c05493](https://github.com/ng-alain/delon/commit/2c054935b94aa465dec4ef091994087fa32c053d))


# [8.6.0](https://github.com/ng-alain/delon/compare/8.5.1...8.6.0) (2019-11-15)

### Bug Fixes

* **abc:reuse-tab:** fix duplicate render list ([#707](https://github.com/ng-alain/delon/issues/707)) ([2e697af](https://github.com/ng-alain/delon/commit/2e697afd5ecea6f24bb281d56e653f9efd71a199))
* **abc:xlsx:** fix duplicate loading xlsx.js when XLSX exists ([#705](https://github.com/ng-alain/delon/issues/705)) ([88e63a2](https://github.com/ng-alain/delon/commit/88e63a2941f5b9e6f6a26c15ed28162d90b4db4f))
* **form:array:** fix losing `optionalHelp` property ([#713](https://github.com/ng-alain/delon/issues/713)) ([8c574ef](https://github.com/ng-alain/delon/commit/8c574efd5e7f31c7d5bf82c7c861ff5bc63f945d))
* **form:checkbox:** fix losing `optionalHelp` property ([#708](https://github.com/ng-alain/delon/issues/708)) ([e3585ea](https://github.com/ng-alain/delon/commit/e3585ea9034b2b02e9160ad3dc551fe6cc8291d2))
* **abc:table:** fix invalid global `sortReName` property in mulitisort ([#714](https://github.com/ng-alain/delon/issues/714)) ([00f998d](https://github.com/ng-alain/delon/commit/00f998d8939fde2ef2a60a54417e8ae7556e1dd4))

### Features

* **abc:sv,se:** `optional`, `optionalHelp` support `TemplateRef… ([#710](https://github.com/ng-alain/delon/issues/710)) ([a456201](https://github.com/ng-alain/delon/commit/a456201ba7a4ae3df68cc4c0470aa3ee6fab86ee))
* **abc:table:** add `keepEmptyKey` of mulitisort ([#714](https://github.com/ng-alain/delon/issues/714)) ([00f998d](https://github.com/ng-alain/delon/commit/00f998d8939fde2ef2a60a54417e8ae7556e1dd4))
* **abc:table:** add `loaded` type event of `change` ([#709](https://github.com/ng-alain/delon/issues/709)) ([6d3f017](https://github.com/ng-alain/delon/commit/6d3f0171c97a7f8c45ea3c3f799079506df3ffbf))
* **cli:** add cnpm reminder ([#704](https://github.com/ng-alain/delon/issues/704)) ([9e131d7](https://github.com/ng-alain/delon/commit/9e131d76276120725a574859f33b9130aa31c6a5))
* **form:** add `cleanValue` property ([#711](https://github.com/ng-alain/delon/issues/711)) ([7e55136](https://github.com/ng-alain/delon/commit/7e55136768578df5f054948df6ad2ca4c2a942e1))
* **form:** add `noColon` property ([#698](https://github.com/ng-alain/delon/issues/698)) ([2c34460](https://github.com/ng-alain/delon/commit/2c34460226818d1bc78ad7e62790ff4a32eb2791))


## [8.5.1](https://github.com/ng-alain/delon/compare/8.5.0...8.5.1) (2019-10-28)

### Bug Fixes

* **abc:reuse-tab:** fix style in card type ([#701](https://github.com/ng-alain/delon/issues/701)) ([8eaa89d](https://github.com/ng-alain/delon/commit/8eaa89d))
* **abc:st:** shoule be auto 100% width when not specified ([#700](https://github.com/ng-alain/delon/issues/700)) ([36a95f6](https://github.com/ng-alain/delon/commit/36a95f6))


# [8.5.0](https://github.com/ng-alain/delon/compare/8.4.0...8.5.0) (2019-09-25)

### Bug Fixes

* **abc:sidebar-nav:** fix repeat render item in external link ([#688](https://github.com/ng-alain/delon/issues/688)) ([fbf52c4](https://github.com/ng-alain/delon/commit/fbf52c4))
* **abc:st:** fix ingore invalid `tag` or `badge` ([#687](https://github.com/ng-alain/delon/issues/687)) ([3752205](https://github.com/ng-alain/delon/commit/3752205))
* **abc:st:** fix render null value in export to excel ([#689](https://github.com/ng-alain/delon/issues/689)) ([2aef5a9](https://github.com/ng-alain/delon/commit/2aef5a9))
* **abc:st:** should be stop propagation in button event when `expandRowByClick` is `true` ([#692](https://github.com/ng-alain/delon/issues/692)) ([da8d99d](https://github.com/ng-alain/delon/commit/da8d99d))
* **sf:cascader:** removed `select` event, muse be use `selectionChange` ([#684](https://github.com/ng-alain/delon/issues/684)) ([1ed0ae1](https://github.com/ng-alain/delon/commit/1ed0ae1))

### Features

* **abc:reuse-tab:** add `tabMaxWidth` property ([#690](https://github.com/ng-alain/delon/issues/690)) ([19cc818](https://github.com/ng-alain/delon/commit/19cc818))
* **abc:st:** add `divider` type in button ([#683](https://github.com/ng-alain/delon/issues/683)) ([d9f6014](https://github.com/ng-alain/delon/commit/d9f6014))
* **form:autocomplete:** add `change` event ([#691](https://github.com/ng-alain/delon/issues/691)) ([f4215e4](https://github.com/ng-alain/delon/commit/f4215e4))
* **theme:http:** add `@Payload` decorator ([#686](https://github.com/ng-alain/delon/issues/686)) ([123c29e](https://github.com/ng-alain/delon/commit/123c29e))
* **theme:http:** use `::id` to indicate escaping ([#686](https://github.com/ng-alain/delon/issues/686)) ([123c29e](https://github.com/ng-alain/delon/commit/123c29e))

### BREAKING CHANGES

* **abc:count-down** Upgrade to `8.x`, its version has [breaking changes](https://github.com/cipchk/ngx-countdown/releases/tag/8.0.0)


# [8.4.0](https://github.com/ng-alain/delon/compare/8.3.0...8.4.0) (2019-09-01)

### Bug Fixes

* **abc:sidebar-nav:** fix invalid click children title in collapsed ([#673](https://github.com/ng-alain/delon/issues/673)) ([b6c1fc6](https://github.com/ng-alain/delon/commit/b6c1fc6))
* **abc:sidebar-nav:** fix style misplacement ([#677](https://github.com/ng-alain/delon/issues/677)) ([efd9bb1](https://github.com/ng-alain/delon/commit/efd9bb1))
* **abc:st:** fix ingored incomplete request when has new request ([#674](https://github.com/ng-alain/delon/issues/674)) ([c98ae19](https://github.com/ng-alain/delon/commit/c98ae19))
* **abc:st:** fix invalid title in export ([#672](https://github.com/ng-alain/delon/issues/672)) ([48ca08f](https://github.com/ng-alain/delon/commit/48ca08f))
* **abc:sv:** fix `labelWidth` type in `SVConfig` ([#668](https://github.com/ng-alain/delon/issues/668)) ([43cf770](https://github.com/ng-alain/delon/commit/43cf770))

### Features

* **abc:st:** add `pop` property ([#676](https://github.com/ng-alain/delon/issues/676)) ([a078f02](https://github.com/ng-alain/delon/commit/a078f02))
* **cache:** add `type`, `expire` in `DelonCacheConfig` ([#669](https://github.com/ng-alain/delon/issues/669)) ([9d393fb](https://github.com/ng-alain/delon/commit/9d393fb))


# [8.3.0](https://github.com/ng-alain/delon/compare/8.2.0...8.3.0) (2019-08-03)

### Bug Fixes

* **abc:reuse-tab:** should be always get title from menu data ([#661](https://github.com/ng-alain/delon/issues/661)) ([6e63418](https://github.com/ng-alain/delon/commit/6e63418))
* **abc:sidebar:** fix invalid subnode when include badge value in collapsed mode ([#665](https://github.com/ng-alain/delon/issues/665)) ([763a27e](https://github.com/ng-alain/delon/commit/763a27e))
* **abc:st:** fix ignore catch error of http request when component is destroyed ([#658](https://github.com/ng-alain/delon/issues/658)) ([6bd97eb](https://github.com/ng-alain/delon/commit/6bd97eb))
* **theme:title:** should be avoid can't get title when rendered componet in `NavigationEnd` event ([#660](https://github.com/ng-alain/delon/issues/660)) ([0db451d](https://github.com/ng-alain/delon/commit/0db451d))
* **abc:st:** fix ingore truncate of `img` column when `strictBehavior` is `truncate` ([#656](https://github.com/ng-alain/delon/issues/656)) ([4ae8f13](https://github.com/ng-alain/delon/commit/4ae8f13))

### Features

* **abc:st:** add `lazyLoad` property in `req` ([#656](https://github.com/ng-alain/delon/issues/656)) ([4ae8f13](https://github.com/ng-alain/delon/commit/4ae8f13))
* **abc:st:** add `STColumnTitle` type of `title` property` ([#657](https://github.com/ng-alain/delon/issues/657)) ([9408ccc](https://github.com/ng-alain/delon/commit/9408ccc))
* **acl:** support specify guard fail url in router data ([#666](https://github.com/ng-alain/delon/issues/666)) ([bee66fd](https://github.com/ng-alain/delon/commit/bee66fd))
* **form:*:** support date-fns format in `date`, `time` widgets ([#663](https://github.com/ng-alain/delon/issues/663)) ([ba91193](https://github.com/ng-alain/delon/commit/ba91193))


# [8.2.0](https://github.com/ng-alain/delon/compare/8.1.0...8.2.0) (2019-07-20)

### Scaffold

* fix: fix `alain-default.less` file write always append mode ([#1248](https://github.com/ng-alain/ng-alain/pull/1248))

### Bug Fixes

* **abc:*:** fix element as a block element in `sv-title`, `se-title` components ([#651](https://github.com/ng-alain/delon/issues/651)) ([d92a21d](https://github.com/ng-alain/delon/commit/d92a21d))
* **auth:** fix `referrer.url` should be always latest router url ([#654](https://github.com/ng-alain/delon/issues/654)) ([89098e1](https://github.com/ng-alain/delon/commit/89098e1))

### Features

* **abc:reuse-tab:** add `tabType` property, support `card` style ([#652](https://github.com/ng-alain/delon/issues/652)) ([9da990f](https://github.com/ng-alain/delon/commit/9da990f))
* **abc:*:** add ellipsis of long label text in `sv` and `se` components ([#651](https://github.com/ng-alain/delon/issues/651)) ([d92a21d](https://github.com/ng-alain/delon/commit/d92a21d))


# [8.1.0](https://github.com/ng-alain/delon/compare/8.0.0...8.1.0) (2019-07-12)

### Scaffold

* feat: add proxying to a backend server ([#1237](https://github.com/ng-alain/ng-alain/pull/1237))

### Bug Fixes

* **abc:st:** fix losing default `page` config ([#649](https://github.com/ng-alain/delon/issues/649)) ([8f59ea2](https://github.com/ng-alain/delon/commit/8f59ea2))
* **form:** fix losing inherit of `ui` property value ([#647](https://github.com/ng-alain/delon/issues/647)) ([f2df673](https://github.com/ng-alain/delon/commit/f2df673))
* **form:** fix missing style of widget item ([#646](https://github.com/ng-alain/delon/issues/646)) ([fe2f0fe](https://github.com/ng-alain/delon/commit/fe2f0fe))
* **theme:menu:** fix can be choose one of `text` or `i18n` ([#648](https://github.com/ng-alain/delon/issues/648)) ([3200998](https://github.com/ng-alain/delon/commit/3200998))

### Features

* **abc:st:** add `index` argument of `format` ([#644](https://github.com/ng-alain/delon/issues/644)) ([498d0b7](https://github.com/ng-alain/delon/commit/498d0b7))
* **cli:** add proxying to a backend server ([#645](https://github.com/ng-alain/delon/issues/645)) ([10c91d8](https://github.com/ng-alain/delon/commit/10c91d8))


# [8.0.0](https://github.com/ng-alain/delon/compare/8.0.0-rc.1...8.0.0) (2019-07-03)

**`8.0.0` version has some breaking changes. pls read more [Upgrade Guide](https://ng-alain.com/docs/upgrade-v8/en).**

### Bug Fixes

* **theme:style:** fix aside user style ([#639](https://github.com/ng-alain/delon/issues/639)) ([ede1d15](https://github.com/ng-alain/delon/commit/ede1d15))
* **abc:st:** ingore `title` required in `STColumn` ([#632](https://github.com/ng-alain/delon/issues/632)) ([69608c5](https://github.com/ng-alain/delon/commit/69608c5))
* **cli:plugin:icon:** fix unidentified `nzType` property ([#637](https://github.com/ng-alain/delon/issues/637)) ([2784a5a](https://github.com/ng-alain/delon/commit/2784a5a))
* **form:array:** fix disabled add & remove buttons when `readOnly` is `true` ([#633](https://github.com/ng-alain/delon/issues/633)) ([15194cc](https://github.com/ng-alain/delon/commit/15194cc))
* **form:array:** fix invalid value subscript of path value ([#628](https://github.com/ng-alain/delon/issues/628)) ([09807f7](https://github.com/ng-alain/delon/commit/09807f7))
* **form:upload:** fix invalid `showUploadList` property ([#634](https://github.com/ng-alain/delon/issues/634)) ([54c3b90](https://github.com/ng-alain/delon/commit/54c3b90))
* **form:*:** fix invalid render value when call `setValue` method ([#622](https://github.com/ng-alain/delon/issues/622)) ([4cea3b7](https://github.com/ng-alain/delon/commit/4cea3b7))

### Features

* **abc:st:** add `tooltip` property in button ([#640](https://github.com/ng-alain/delon/issues/640)) ([181e3a1](https://github.com/ng-alain/delon/commit/181e3a1))
* **abc:st:** add `emitReload` of `resetColumns` method ([#635](https://github.com/ng-alain/delon/issues/635)) ([a96123e](https://github.com/ng-alain/delon/commit/a96123e))
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


## Old Version

All releases notes can be found [here](https://github.com/ng-alain/ng-alain/releases)
