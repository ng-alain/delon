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
ng g ng-alain:plugin <plugin name> -t=[add | remove]
```

其中 `<plugin name>` 插件名称，从插件列表中获取，`-t` 支持两种值 `add`（默认） 和 `remove`。

## 插件列表

### g2

G2 图表。

```bash
# add
ng g ng-alain:plugin g2
# remove
ng g ng-alain:plugin g2 -t=remove
```

### codeStyle

代码风格，有几个规则：

- 使用 [tslint](https://github.com/palantir/tslint) 校验 typescript 部分
- 使用 [stylelint](https://github.com/stylelint/stylelint) 校验 less 部分
- 使用 [prettier](https://github.com/prettier/prettier) 代码格式化
- 使用 [husky](https://github.com/typicode/husky) 和 [lint-staged](https://github.com/okonet/lint-staged) 在你提交代码时进行代码校验和格式化

ng-alain 默认提供了一部分的代码风格配置方案，你可以在项目的根目录下找到这些配置信息，依照你自己的风格进行修饰。

```bash
# add
ng g ng-alain:plugin codeStyle
# remove
ng g ng-alain:plugin codeStyle -t=remove
```

### hmr

支持 HMR 热替换。

```bash
# add
ng g ng-alain:plugin hmr
# remove
ng g ng-alain:plugin hmr -t=remove
```

安装后可使用启用 HMR 模式进入开发环境：

```bash
npm run hmr
```

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
ng g ng-alain:plugin defaultLanguage -defaultLanguage=en
# change to [zh]
ng g ng-alain:plugin defaultLanguage -defaultLanguage=zh
# change to [zh-tw]
ng g ng-alain:plugin defaultLanguage -defaultLanguage=zh-tw
```

#### 支持语言列表

| 名称     | 语言包名称                  | 对应 [Angular](https://github.com/angular/angular/tree/master/packages/common/locales) 语言包         | 对应 [Zorro](http://ng.ant.design/docs/i18n/zh#%E6%94%AF%E6%8C%81%E8%AF%AD%E8%A8%80) 语言包 | 对应 [Delon](/theme/locale) 语言包 |
| -------- | --------------------------- | --------------------------- | ----------------- | ----------------- |
| 简体中文 | zh-Hans,zh-cn,zh-Hans-CN,zh | zh-Hans,zh-cn,zh-Hans-CN,zh | zh_CN             | zh_CN             |
| 繁体中文 | zh-Hant,zh-tw,zh-Hant-TW    | zh-Hant,zh-tw,zh-Hant-TW    | zh_TW             | zh_TW             |
| 英语（美式） | en                          | en                          | en_US             | en_US             |

### networkEnv

在国内使用 npm 或 yarn 始终是一个“痛”，因此你可以增加一个使用淘宝镜像配置文件 `.npmrc` 或 `.yarnrc`，来解决网络问题。

```bash
# add npm
ng g ng-alain:plugin networkEnv -packageManager=npm
# add yarn
ng g ng-alain:plugin networkEnv -packageManager=yarn
# remove npm
ng g ng-alain:plugin networkEnv -packageManager=npm -t=remove
# remove yarn
ng g ng-alain:plugin networkEnv -packageManager=yarn -t=remove
```

### icon

**尽可能**从项目中分析并生成静态 Icon，插件会自动在 `src` 目录下生成两个文件：

- `src/style-icons.ts` 自定义部分无法解析（例如：远程菜单图标）
- `src/style-icons-auto.ts` 命令自动生成文件

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
