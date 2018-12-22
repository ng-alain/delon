---
order: 1
title: 开始使用
type: Documents
module: AlainThemeModule
config: AlainThemeConfig
---

`@delon/theme` 是 ng-alain 架手脚唯一必须引入的模块。它包含了非常多[主题样式参数](/theme/global)，通过覆盖参数数值进而定制一些特别的需求；以及若干通用性[服务](/theme/menu)、[管道](/theme/date)。

## 样式

ng-alain 默认使用 less 作为样式语言，建议在使用前或者遇到疑问时学习一下 [less](http://lesscss.org/) 的相关特性，如果想获取基础的 CSS 知识或查阅属性，可以参考 [MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)。

## 布局

脚手架提供两种布局：[默认布局](/theme/default)、[全屏布局](/theme/fullscreen)，脚手架并不包含两种布局样式文件，它位于 `@delon/theme` 类库当中。

## 脚手架样式

在开发过程中，绝大部分情况下可以利用 ng-alain 提供的工具集来调整间距、颜色、大小、边框等，它是一个套类似 bootstrap 风格的工具集。

或通过 *src/styles/index.less* 下定制你的样式，这些样式将会在全局应用中有效，且有两个问题比较突出：

- 全局污染 —— CSS 文件中的选择器是全局生效的，不同文件中的同名选择器，根据 build 后生成文件中的先后顺序，后面的样式会将前面的覆盖；
- 选择器复杂 —— 为了避免上面的问题，我们在编写样式的时候不得不小心翼翼，类名里会带上限制范围的标识，变得越来越长，多人开发时还很容易导致命名风格混乱，一个元素上使用的选择器个数也可能越来越多。

因此，除非设计师明确需求以外，我们应该尽可能使用组件 `styles` 属性创建组件样式，有关如何Angular样式请参考《[关于Angular样式封装](https://zhuanlan.zhihu.com/p/31235358)》。

## 样式文件类别

在一个项目中，样式文件根据功能不同，可以划分为不同的类别。

### src/styles/index.less

全局样式文件，在这里你可以进行一些通用设置。

### 工具集

请参考 [工具集样式](/theme/tools)。

### 页面级

具体页面相关的样式，例如 [monitor.component.less](https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/dashboard/monitor/monitor.component.less)，里面的内容仅和本页面的内容相关。一般情况下，如果不是页面内容特别复杂，有了前面全局样式、工具集样式的配合，这里要写的应该不多。

## 如何覆盖参数

ng-alain 的样式使用了 [Less](http://lesscss.org/) 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。

要改变的参数统一放在 [theme.less](https://github.com/ng-alain/ng-alain/blob/master/src/styles/theme.less) LESS文件中，所有参数包括：

- [全局参数](/theme/global)
- [默认布局](/theme/default)
- [全屏布局](/theme/fullscreen)

如果以上变量不能满足你的定制需求，可以给我们提 issue。
