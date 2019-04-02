---
order: 20
title:
  en-US: Architecture
  zh-CN: 体系结构
type: Basic
---

ng-alain scaffold is a front-end solution of middle and back-end application, which is based on [Angular](https://angular.io/) and [ng-zorro-antd](https://ng.ant.design/docs/introduce/en)(Angular implementation of Ant Design). The scaffold includes a set of common functionalities and business component libraries, which reduce lots of infrastructure development overwhelmingly and let you focus on business logic development.

## Architecture Diagram

![](https://github.com/ng-alain/delon/raw/master/_screenshot/architecture.png | width=700)

**@delon/theme**

Theme library of scaffold, we publish the theme library to NPM, which extremely simplifies upgrade effort.

Theme library includes not only essential styles(CSS tool like bootstrap), which is needed by `ng-alain`, but also a set of common data rendering(Pipe) and service tools(page title, scroll bar, etc.), which are needed during daily development.

**@delon/abc**

Scaffold provides a default set of [business components](/components/), which abstract commonly used block/area in console service. We will continue to maintain and iterate the components, provide more advanced abstract components than Ant Design base components to middle and back-end business.

**@delon/chart**

[@delon/chart](/chart) chart library is customised based on G2 (3.0), providing commonly used chart suite in business development, it can be used alone, or composed together to achieve more complex and fancy display effect.

**@delon/form**

[@delon/form](/form) follows standard of [JSON Schema](http://json-schema.org/) to build dynamic forms.

**@delon/auth**

[User Authentication](/docs/auth) module is used for resolving steps about obtain, save and use authentication.

**@delon/acl**

[ACL](/docs/acl) Access Control List is a very simple role based permission control, it can even reach the granularity of controlling the visibility of a button

**@delon/cache**

You can [cache](/docs/cache) _dictionary_, _city data_ into memory or persistent layer, which will reduce amount of HTTP request.

**@delon/mock**

[Mock](/docs/mock) will intercept Angular HTTP request and return testing data.

**@delon/util**

[Daily Utilities](/util)。

**@delon/testing**

Commonly used testing suite.

**CLI Schematics**

[CLI Tool](/cli)

## Document and Feedback

You can find all documents in [ng-alain.com](https://ng-alain.com).

The documents will be iteratively changed with scaffold's upgrade ([Change log](https://github.com/ng-alain/ng-alain/releases)), please feedback from [here](https://github.com/ng-alain/ng-alain/issues) if you have any questions or requirements.
