---
order: 10
title: ng add
subtitle: 创建脚手架
type: Documents
---

## 命令格式

```bash
ng add ng-alain@next <project name>
```

## 额外参数

| 参数名        | 默认值  | 描述                           |
| ------------- | ------- | ------------------------------ |
| `--form`      | `true`  | 是否需要动态表单               |
| `--mock`      | `true`  | 是否需要 mock 功能             |
| `--hmr`       | `true`  | 是否需要 hmr 热替换            |
| `--codeStyle` | `false` | 是否需要代码风格               |
| `--i18n`      | `false` | 是否需要国际化支持             |
| `--g2`        | `false` | 是否需要 G2 图表               |
| `--npm`       | `false` | 是否需要 npm 淘宝镜像配置文件  |
| `--yarn`      | `false` | 是否需要 yarn 淘宝镜像配置文件 |

例如生成一个带有国际化项目：

```bash
ng add ng-alain@next demo --i18n --hmr
```

查看更多[插件](/cli/plugin)。
