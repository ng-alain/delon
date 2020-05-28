---
type: Documents
order: 15
title: 组件样式
---

当你在使用 `ng g ng-alain:list` 来生成页面时，会发现并不会产生 Less 文件，主要是 NG-ALAIN 有自己的一套主题系统，NG-ALAIN 希望利用这套主题系统来构建组件，让 CSS 变成编程化。然而它并不能满足所有需求，本文会针对这方面做一个全面描述。

## 如何开始

手动创建组件样式文件，下面以 `img.component.less` 为示例：

```less
// 导入 Less 变量参数
@import '~@delon/theme/index';

:host {
  // 组件宿主样式
  display: block;
  font-size: 16px;

  ::ng-deep {
    // 组件内其他样式
    .title {
      color: @text-color;
    }
  }
}
```

这个 `img.component.less` 样式文件包含了许多信息：

**~@delon/theme/index**

它包容了 NG-ZORRO、@delon/theme、@delon/abc、@delon/chart 主题系统所有的 Less 变量名，只有这样导入才能使我们在下面引用 `@text-color` 这类 Less 变量，它表示默认的颜色值。

> 如果你正在使用商业主题，例如 PRO 会使用其他路径：`@import 'src/styles/theme.less';`。

**特殊选择器**

`:host`、`::ng-deep` 它们是 Angular 特殊选择器：

- `:host` 表示组件宿主，假设我们当前的组件名为 `img`，那最终 `:host` 会被解析成 `img` 的样式
- `::ng-deep` 表示禁止对视图包装，这有助于减少生成一些额外的标识符，它会影响子组件的的使用，例如：`.title` 会在 `<img></img>` 组件内所有包含 `class="title"` 都将有效

## 主题

NG-ALAIN 至从 `9.3.x` 开始内置暗黑与紧凑两种主题，对于全局只需要修改 [styles.less](https://github.com/ng-alain/ng-alain/blob/master/src/styles.less) 一个参数，例如切换为暗黑主题：

```diff
- // @import '~@delon/theme/theme-dark.less';
+ @import '~@delon/theme/theme-dark.less';
```

> 若是紧凑，只需要换成 `@import '~@delon/theme/theme-compact.less';`。

同时，对于组件样式的引入也全部替换成：

```diff
- @import '~@delon/theme/index';
+ @import '~@delon/theme/theme-dark';
```

## 动态主题

如果你正在制作就像现在网站一样，动态切换不同的主题，那么就必须针对不同的主题额外覆盖，例如当开启暗黑时，将 `.title` 换成 `#000` 颜色值：

```less
// 导入 Less 变量参数
@import '~@delon/theme/index';

:host {
  // 组件宿主样式
  display: block;
  font-size: 16px;

  ::ng-deep {
    // 组件内其他样式
    .title {
      color: @text-color;
    }
  }
}

[data-theme='dark'] {
  :host ::ng-deep {
    .title {
      color: #000;
    }
  }
}
```

若紧凑主题：

```less
[data-theme='compact'] {
  :host ::ng-deep {
    // 针对紧凑重新定义
  }
}
```

## 相关链接

- [Angualr Component styles](https://angular.io/guide/component-styles)
- [关于Angular样式封装](https://zhuanlan.zhihu.com/p/31235358)