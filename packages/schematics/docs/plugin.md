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

G2图表。

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

支持HMR热替换。

```bash
# add
ng g ng-alain:plugin hmr
# remove
ng g ng-alain:plugin hmr -t=remove
```

安装后可使用启用HMR模式进入开发环境：

```bash
npm run hmr
```

### docker

支持Docker部署。

```bash
# add
ng g ng-alain:plugin docker
# remove
ng g ng-alain:plugin docker -t=remove
```

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
