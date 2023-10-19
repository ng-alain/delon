---
order: 90
title: Default parameter
type: Documents
---

ng-alain provides a number of build modules, page templates, which have same option parameters, such as: `spec` for generating test pages, `flat` for flat directories, `inline-template` for inline template, etc.

However, parameters can be preset via `angular.json`.

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

You can execute the following command to get the parameter description:

```bash
ng g ng-alain:list --help
```
