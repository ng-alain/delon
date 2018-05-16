---
order: 1
title:
  en-US: Architecture
  zh-CN: 体系结构
type: Basic
---

ng-alain 脚手架是基于 Angular 和 ng-zorro-antd（Ant Design 的 Angular 版本） 基础组件库的中后台前端解决方案。脚手架包含着一套通用的功能和业务组件库，它们可以极大的减少一些基础建设开发工作。

## 结构图

![](https://github.com/cipchk/delon/raw/master/_screenshot/architecture.png | width=700)

**@delon/theme**

脚手架主题系统库，我们将主题相关发布至 Npm 当中，这极大的简化升级成本。

主题系统除了包含 ng-alain 基础框架所需要的样式（包含CSS工具集，一套类似bootstrap）以外，还包含一些通用的数据渲染（Pipe）、服务工具类（页面标题、滚动条等）的集合，这些是日常必不可少的一些组成。

**@delon/abc**

脚手架内提供了一套默认[业务组件](/components/)，这些组件抽象了控制台业务中的一些常见区块。我们将持续维护和迭代这些组件，为中后台业务提供比 Ant Design 基础组件更高级别的抽象。

**@delon/form**

[@delon/form](/form) 是一个基于 [JSON Schema](http://json-schema.org/) 标准的动态构建表单。

**@delon/auth**

[用户认证](/docs/auth)模块，用于解决如何获取、存取、使用这三个步骤的用户认证环节。

**@delon/acl**

[ACL](/docs/acl)访问控制列表，是一种非常简单的基于角色权限控制，甚至至某个按钮的粒度。

**@delon/cache**

将字典、城市数据等[缓存](/docs/cache)至内存或持久化当中，有效减少 Http 请求。

**@delon/mock**

[Mock](/docs/mock)会拦截 Angular Http 请求并返回测试数据。

**@delon/util**

[日常工具集](/util)。

## 文档和反馈

你可以在 [ng-alain.com](http://ng-alain.com) 找所有的文档。

随着脚手架的更新而不断迭代（[更新日志](/docs/changelog)），有任何问题和需求可以反馈到 [这里](//github.com/cipchk/ng-alain/issues)。

### 版本信息

| package name | version | next version |
| ------------ |:-----:|:----------:|
| ng-alain | [![NPM version](https://img.shields.io/npm/v/ng-alain.svg)](https://www.npmjs.com/package/ng-alain) | [![NPM version](https://img.shields.io/npm/v/ng-alain/next.svg)](https://www.npmjs.com/package/ng-alain) |
| @delon/theme [Document](/docs/theme) | [![NPM version](https://img.shields.io/npm/v/@delon/theme.svg)](https://www.npmjs.com/package/@delon/theme) | [![NPM version](https://img.shields.io/npm/v/@delon/theme/next.svg)](https://www.npmjs.com/package/@delon/theme) |
| @delon/abc [Document](/components) | [![NPM version](https://img.shields.io/npm/v/@delon/abc.svg)](https://www.npmjs.com/package/@delon/abc) | [![NPM version](https://img.shields.io/npm/v/@delon/abc/next.svg)](https://www.npmjs.com/package/@delon/abc) |
| @delon/form [Document](/form) | [![NPM version](https://img.shields.io/npm/v/@delon/form.svg)](https://www.npmjs.com/package/@delon/form) | [![NPM version](https://img.shields.io/npm/v/@delon/form/next.svg)](https://www.npmjs.com/package/@delon/form) |
| @delon/acl [Document](/acl) | [![NPM version](https://img.shields.io/npm/v/@delon/acl.svg)](https://www.npmjs.com/package/@delon/acl) | [![NPM version](https://img.shields.io/npm/v/@delon/acl/next.svg)](https://www.npmjs.com/package/@delon/acl) |
| @delon/auth [Document](/auch) | [![NPM version](https://img.shields.io/npm/v/@delon/auth.svg)](https://www.npmjs.com/package/@delon/auth) | [![NPM version](https://img.shields.io/npm/v/@delon/auth/next.svg)](https://www.npmjs.com/package/@delon/auth) |
| @delon/mock [Document](/mock) | [![NPM version](https://img.shields.io/npm/v/@delon/mock.svg)](https://www.npmjs.com/package/@delon/mock) | [![NPM version](https://img.shields.io/npm/v/@delon/mock/next.svg)](https://www.npmjs.com/package/@delon/mock) |
| @delon/cache [Document](/cache) | [![NPM version](https://img.shields.io/npm/v/@delon/cache.svg)](https://www.npmjs.com/package/@delon/cache) | [![NPM version](https://img.shields.io/npm/v/@delon/cache/next.svg)](https://www.npmjs.com/package/@delon/cache) |
| @delon/util [Document](/util) | [![NPM version](https://img.shields.io/npm/v/@delon/util.svg)](https://www.npmjs.com/package/@delon/util) | [![NPM version](https://img.shields.io/npm/v/@delon/util/next.svg)](https://www.npmjs.com/package/@delon/util) |
