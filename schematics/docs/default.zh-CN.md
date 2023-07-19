---
order: 90
title: 默认参数
type: Documents
---

ng-alain 提供诸多生成模块、页模板，但实际上继承了原生 Angular CLI 组件页的一些参数，例如：`spec` 表示是否生成测试页、`flat` 表示扁平目录、`inline-template` 表示内联模板内容等。

然而，对于这些参数我们没有必要每一次执行命令时都写一遍，可以通过 `angular.json` 对参数预设。

例如：

```json
// angular.json
{
  "schematics": {
    "ng-alain:module": {
      "routing": true
    },
    "ng-alain:list": {
      "skipTests": false
    },
    "ng-alain:edit": {
      "skipTests": false,
      "modal": true
    },
    "ng-alain:view": {
      "skipTests": false,
      "modal": true
    },
    "ng-alain:curd": {
      "skipTests": false
    },
    "@schematics/angular:module": {
      "routing": true
    },
    "@schematics/angular:component": {
      "skipTests": false,
      "flat": false,
      "inlineStyle": true,
      "inlineTemplate": false
    },
    "@schematics/angular:directive": {
      "skipTests": false
    },
    "@schematics/angular:service": {
      "skipTests": false
    }
  }
}
```

可以通过执行下列命令来获取所有参数描述：

```bash
ng g ng-alain:list --help
```
