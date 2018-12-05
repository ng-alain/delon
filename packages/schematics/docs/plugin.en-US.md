---
order: 30
title: Pluggable plugin
type: Documents
---

## Foreword

Plugins are the add and remove of optional features, such as when you don't need code style (although I don't think so), only need to:

```bash
ng g ng-alain:plugin codeStyle -t=remove
```

Or add code style:

```bash
ng g ng-alain:plugin codeStyle
```

## Command format

```bash
ng g ng-alain:plugin [plugin name] -t=[add | remove]
```

The `[plugin name]` is plugin name, `-t` supports two values `add` (default) and `remove`.

## List of plugins

### g2

```bash
# add
ng g ng-alain:plugin g2
# remove
ng g ng-alain:plugin g2 -t=remove
```

> For more details, please refer to G2 [Development Documentation](/chart).

### codeStyle

Code style rules:

- Verify typescript with [tslint](https://github.com/palantir/tslint)
- Verify less with [stylelint](https://github.com/stylelint/stylelint)
- Use [prettier](https://github.com/prettier/prettier) code formatting
- Use [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) to code verify and code format when git add

```bash
# add
ng g ng-alain:plugin codeStyle
# remove
ng g ng-alain:plugin codeStyle -t=remove
```

### hmr

Support HMR.

```bash
# add
ng g ng-alain:plugin hmr
# remove
ng g ng-alain:plugin hmr -t=remove
```

After installation, you can start HMR in the development environment:

```bash
npm run hmr
```

### docker

Support for Docker deployment.

```bash
# add
ng g ng-alain:plugin docker
# remove
ng g ng-alain:plugin docker -t=remove
```

### defaultLanguage

Change the current default language, refer to: [I18n - Default Language](/docs/i18n#默认语言)

```bash
# change to [en]
ng g ng-alain:plugin defaultLanguage --defaultLanguage=en
# change to [zh]
ng g ng-alain:plugin defaultLanguage --defaultLanguage=zh
# change to [zh-tw]
ng g ng-alain:plugin defaultLanguage --defaultLanguage=zh-tw
```

#### Supported language list

| Name     | Language pack name                  | [Angular](https://github.com/angular/angular/tree/master/packages/common/locales) pack         | [Zorro](http://ng.ant.design/docs/i18n/zh#%E6%94%AF%E6%8C%81%E8%AF%AD%E8%A8%80) pack | [Delon](/theme/locale) pack |
| -------- | --------------------------- | --------------------------- | ----------------- | ----------------- |
| Simplified Chinese | zh-Hans,zh-cn,zh-Hans-CN,zh | zh-Hans,zh-cn,zh-Hans-CN,zh | zh_CN   | zh_CN  |
| Traditional Chinese | zh-Hant,zh-tw,zh-Hant-TW    | zh-Hant,zh-tw,zh-Hant-TW    | zh_TW  | zh_TW  |
| English (American) | en        | en           | en_US             | en_US        |
| Turkish    | tr     | tr        | tr_TR            | tr_TR       |
| Polish    | pl     | pl        | pl_PL            | pl_PL       |

### networkEnv

Allow chinese users to add a taobao mirror configuration file `.npmrc` or `.yarnrc` to solve network problems.

```bash
# add npm
ng g ng-alain:plugin networkEnv --packageManager=npm
# add yarn
ng g ng-alain:plugin networkEnv --packageManager=yarn
# remove npm
ng g ng-alain:plugin networkEnv --packageManager=npm -t=remove
# remove yarn
ng g ng-alain:plugin networkEnv --packageManager=yarn -t=remove
```

### icon

From the project to analyze and generate static load Icon, The plugin will automatically generate two files in the `src` directory:

- `src/style-icons.ts` Custom Icon (e.g: remote menu icon)
- `src/style-icons-auto.ts` command automatically generates files

> Automatically exclude [ng-zorro-antd](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/icon/nz-icon.service.ts#L6) and [@delon](https://github.com/ng-alain/delon/blob/master/packages/theme/src/theme.module.ts#L33) already loaded icons.

```bash
ng g ng-alain:plugin icon
```

Also, you need to manually import in `startup.service.ts`:

```ts
import { ICONS_AUTO } from '../../../style-icons-auto';
import { ICONS } from '../../../style-icons';

@Injectable()
export class StartupService {
  constructor(iconSrv: NzIconService) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
  }
}
```

**Valid Grammar**

```html
<i class="anticon anticon-user"></i>
<i class="anticon anticon-question-circle-o"></i>
<i class="anticon anticon-spin anticon-loading"></i>
<i nz-icon class="anticon anticon-user"></i>
<i nz-icon type="align-{{type ? 'left' : 'right'}}"></i>
<i nz-icon [type]="type ? 'menu-fold' : 'menu-unfold'" [theme]="theme ? 'outline' : 'fill'"></i>
<i nz-icon [type]="type ? 'fullscreen' : 'fullscreen-exit'"></i>
<i nz-icon type="{{ type ? 'arrow-left' : 'arrow-right' }}"></i>
<i nz-icon type="filter" theme="outline"></i>
<nz-input-group [nzAddOnBeforeIcon]="focus ? 'anticon anticon-arrow-down' : 'anticon anticon-search'"></nz-input-group>
```
