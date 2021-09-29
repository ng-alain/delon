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
      "routing": true,
      "spec": false
    },
    "ng-alain:list": {
      "spec": false
    },
    "ng-alain:edit": {
      "spec": false,
      "modal": true
    },
    "ng-alain:view": {
      "spec": false,
      "modal": true
    },
    "ng-alain:curd": {
      "spec": false
    },
    "@schematics/angular:module": {
      "routing": true,
      "spec": false
    },
    "@schematics/angular:component": {
      "spec": false,
      "flat": false,
      "inlineStyle": true,
      "inlineTemplate": false
    },
    "@schematics/angular:directive": {
      "spec": false
    },
    "@schematics/angular:service": {
      "spec": false
    }
  }
}
```

You can execute the following command to get the parameter description:

```bash
ng g ng-alain:list --help
```
