---
order: 1
title: Getting Started
type: Documents
module: AlainThemeModule
config: AlainThemeConfig
---

`@delon/theme` is the only must be imported to ng-alain scaffold. It contains a lot of [style parameters](/theme/global) and several generalities [services](/theme/menu), [pipes](/theme/date).

## Style

ng-alain defaults to using less as the style language, we recommend that you learn about the features of [less](http://lesscss.org/) before using it or sometimes when you have some questions. If you want to get a basic knowledge of CSS or look for properties usage, you can refer to the [MDN doc] (https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).

## Layout

Scaffolding include two layouts: [default layout](/theme/default), [fullscreen layout](/theme/fullscreen), scaffolding does not contain these style files, it's in the `@delon/theme` library.

## Scaffold Style

You can use the toolset provided by ng-alain to adjust spacing, color, size, borders, etc. It's a set of like bootstrap style tools.

Or customize your styles with *src/styles/index.less*, which will work in global applications, in the style development process, there are two prominent problems:

- Global Pollution - CSS selectors are globally valid. Selectors with the same name in different files will be built together, and the former will be overrided by the latter.
- Complex Selector - in order to avoid the above problem, we have to be careful when writing styles. The increase in flags for range restriction will lead to a growing class name, besides that, naming style confusion in multi person development and an increasing number of selectors on an element is hard to avoid.

We should use component `styles` property to create component styles. For how use Angular styles, please refer to [About Angular Style Packaging](https://zhuanlan.zhihu.com/p/31235358).

## Style file category

In a project, style files can be divided into different categories depending on their function.

### src/styles/index.less

Global style file, where you can make some common settings.

### Tools

Please  refer to [Tools](/theme/tools)。

### Page level

Specific page-related style, such as [monitor.component.less](https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/dashboard/monitor/monitor.component.less), the content is only related to the content of this page. Under normal circumstances, if it is not particularly complex page, with the previous global style and tools style, there should be little to write.

## How to override parameters

We are using [Less](http://lesscss.org/) as the development language for styling. A set of less variables are defined for each design aspect that can be customized to your needs.

The changes parameters put into the [theme.less](https://github.com/ng-alain/ng-alain/blob/master/src/styles/theme.less) LESS file, all parameters include:

- [Global Parameters](/theme/global)
- [Default Layout](/theme/default)
- [Fullscreen Layout](/theme/fullscreen)

Please report an issue if the existing list of variables is not enough for you.
