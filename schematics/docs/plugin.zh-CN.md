---
order: 30
title: 插件
type: Documents
---

## 写在前面

插件主要是针对项目一些额外 **可选** 行为的添加或移除，例如当你觉得代码风格对你来说意义不大（虽然我不这么看），只需要：

```bash
ng g ng-alain:plugin codeStyle -t=remove
```

又或者希望项目应该有一个统一风格时：

```bash
ng g ng-alain:plugin codeStyle
```

## 命令格式

```bash
ng g ng-alain:plugin [plugin name] -t=[add | remove]
```

其中 `[plugin name]` 插件名称，从插件列表中获取，`-t` 支持两种值 `add`（默认） 和 `remove`。

## 插件列表

### codeStyle

代码风格，有几个规则：

- 使用 [tslint](https://github.com/palantir/tslint) 校验 typescript 部分
- 使用 [stylelint](https://github.com/stylelint/stylelint) 校验 less 部分
- 使用 [prettier](https://github.com/prettier/prettier) 代码格式化
- 使用 [husky](https://github.com/typicode/husky) 和 [pretty-quick](https://github.com/azz/pretty-quick) 在你提交代码时进行代码校验和格式化

ng-alain 默认提供了一部分的代码风格配置方案，你可以在项目的根目录下找到这些配置信息，依照你自己的风格进行修饰。

```bash
# add
ng g ng-alain:plugin codeStyle
# remove
ng g ng-alain:plugin codeStyle -t=remove
```

### ie

IE 浏览器只能在 ES5 下使用，有关更多细节请参考[支持IE11](/docs/ie11)。

```bash
# add
ng g ng-alain:plugin ie
# remove
ng g ng-alain:plugin ie -t=remove
```

安装后可使用 `npm run ie:start` 进入IE11的开发环境。

### docker

支持 Docker 部署。

```bash
# add
ng g ng-alain:plugin docker
# remove
ng g ng-alain:plugin docker -t=remove
```

### defaultLanguage

变更当前默认语言，参考：[国际化-默认语言](/docs/i18n#默认语言)

```bash
# change to [en]
ng g ng-alain:plugin defaultLanguage --defaultLanguage=en
# change to [zh]
ng g ng-alain:plugin defaultLanguage --defaultLanguage=zh
# change to [zh-tw]
ng g ng-alain:plugin defaultLanguage --defaultLanguage=zh-tw
```

#### 支持语言列表

| 名称 | 语言包名称 | 对应 [Angular](https://github.com/angular/angular/tree/master/packages/common/locales) 语言包 | 对应 [Zorro](http://ng.ant.design/docs/i18n/zh#%E6%94%AF%E6%8C%81%E8%AF%AD%E8%A8%80) 语言包 | 对应 [Delon](/theme/locale) 语言包 |
|----|-------|------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|-------------------------------|
| 简体中文 | zh-Hans,zh-cn,zh-Hans-CN,zh | zh-Hans,zh-cn,zh-Hans-CN,zh | zh_CN | zh_CN |
| 繁体中文 | zh-Hant,zh-tw,zh-Hant-TW | zh-Hant,zh-tw,zh-Hant-TW | zh_TW | zh_TW |
| 英语（美式） | en | en | en_US | en_US |
| 土耳其语 | tr | tr | tr_TR | tr_TR |
| 波兰语 | pl | pl | pl_PL | pl_PL |
| 希腊语 | el | el | el_GR | el_GR |
| 朝鲜语 | ko | ko | ko_KR | ko_KR |
| 克罗地亚 | hr | hr | hr_HR | hr_HR |
| 斯洛文尼亚文 | sl | sl | sl_SI | sl_SI |
| 法文 | fr | fr | fr_FR | fr_FR |
| 西班牙语 | es | es | es_ES | es_ES |

### networkEnv

在国内使用 npm 或 yarn 始终是一个“痛”，因此你可以增加一个使用淘宝镜像配置文件 `.npmrc` 或 `.yarnrc`，来解决网络问题。

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

### sts

[ng-alain-sts](https://github.com/ng-alain/sts) 插件，构建 Swagger API 转换为列表、编辑页，更多有趣的玩法请自行想象。

```bash
# add
ng g ng-alain:plugin sts
# remove
ng g ng-alain:plugin sts -t=remove
```

### icon

**尽可能**从项目中分析并生成静态 Icon，插件会自动在 `src` 目录下生成两个文件：

- `src/style-icons.ts` 自定义部分无法解析（例如：远程菜单图标）
- `src/style-icons-auto.ts` 命令自动生成文件

> 自动排除 [ng-zorro-antd](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/icon/nz-icon.service.ts#L6) 和 [@delon](https://github.com/ng-alain/delon/blob/master/packages/theme/src/theme.module.ts#L33) 已经加载的图标。

```bash
ng g ng-alain:plugin icon
```

同时，需要手动在 `startup.service.ts` 中导入：

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

**有效语法**

```html
<i class="anticon anticon-user"></i>
<i class="anticon anticon-question-circle-o"></i>
<i class="anticon anticon-spin anticon-loading"></i>
<i nz-icon class="anticon anticon-user"></i>
<i nz-icon nzType="align-{{type ? 'left' : 'right'}}"></i>
<i nz-icon [type]="type ? 'menu-fold' : 'menu-unfold'" [theme]="theme ? 'outline' : 'fill'"></i>
<i nz-icon [type]="type ? 'fullscreen' : 'fullscreen-exit'"></i>
<i nz-icon [nzType]="d.status === 'NORMAL' ? 'close1' : 'close2'"></i>
<i nz-icon nzType="{{ type ? 'arrow-left' : 'arrow-right' }}"></i>
<i nz-icon nzType="filter" theme="outline"></i>
<nz-input-group [nzAddOnBeforeIcon]="focus ? 'anticon anticon-arrow-down' : 'anticon anticon-search'"></nz-input-group>
```

### rtl

支持 RTL 插件，即文本方向设置为“从右向左”。

```bash
ng g ng-alain:plugin rtl
```

> 该插件不支持移除功能，需要自行手动移除相关代码。
