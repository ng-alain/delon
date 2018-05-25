---
order: 100
title: 常见问题
type: Documents
---

## 为什么不可以使用 cnpm

使用 `cnpm` 安装依赖包，会遇到无法找到样式文件。这是由于 `cnpm` 采用的是软链接路径，导致 `ng-zorro-antd` 文件夹名有所变动，因此建议改用 `npm` 安装依赖包。

## 为什么降级 Less

目前Angular6需要降级 less （[#10430](https://github.com/angular/angular-cli/issues/10430)）才能使用 ng-zorro-antd，因此当执行 `ng add ng-alain` 后务必先 **删除** `node_modules`、`package-lock.json` 并重新 `npm i`，且 **不要** 使用 `yarn` 来安装依赖包会导致 less 降级失败。

## 遇到网络问题怎么办

可以使用 [nrm](https://www.npmjs.com/package/nrm) 并切换国内NPM镜像进行加速。

或者使用使用插件：

```bash
ng g ng-alain:plugin npm
```
