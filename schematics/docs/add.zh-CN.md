---
order: 10
title: ng add
subtitle: 创建脚手架
type: Documents
---

## 命令格式

```bash
ng add ng-alain
# 如果你想创建一个英文版本，则：
ng add ng-alain --defaultLanguage=en
```

## 额外参数

| 参数名              | 默认值  | 描述                                                  |
| ------------------- | ------- | ----------------------------------------------------- |
| `--form`            | `true`  | 是否需要动态表单                                      |
| `--mock`            | `true`  | 是否需要 mock 功能                                    |
| `--defaultLanguage` | `zh`    | 默认语言，[支持语言列表](/cli/plugin/zh#支持语言列表) |
| `--codeStyle`       | `false` | 是否需要代码风格                                      |
| `--i18n`            | `false` | 是否需要国际化支持                                    |

例如生成一个带有国际化项目：

```bash
ng add ng-alain --i18n --defaultLanguage=en
```

查看更多[插件](/cli/plugin)。
