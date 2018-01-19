---
title: reuse-tab
subtitle: 路由复用标签
order: 30
cols: 1
module: AdReuseTabModule
---

复用标签在中台系统非常常见，本质是解决不同路由页切换时组件数据不丢失问题。

最新打开的永远是当前页，而路由复用是指当我们离开当前页时若符合复用条件（即：匹配模式）则保存当前路由所有组件状态（包括子组件），待下一次进入相同路由（即：匹配模式）时再从中缓存中获取到。

## 匹配模式

在项目的任何位置（建议：`startup.service.ts`）注入 `ReuseTabService` 类，并设置 `mode` 属性，或通过 `<reuse-tab [mode]="0"></reuse-tab>` 重新设置值，包括：

**0、（推荐，默认值）Menu**

按菜单 `Menu` 配置。

可复用：

```
{ text:'Dashboard' }
{ text:'Dashboard', reuse: true }
```

不可复用：

```
{ text:'Dashboard', reuse: false }
```

**1、（推荐）MenuForce**

按菜单 `Menu` 强制配置。

可复用：

```
{ text:'Dashboard', reuse: true }
```

不可复用：

```
{ text:'Dashboard' }
{ text:'Dashboard', reuse: false }
```

**2、URL**

对所有路由有效，可以配合 `excludes` 过滤无须复用路由。

> 除以上规则以外，路由配置中 `data` 属性若设置 `reuse` 值时优先级高于上述规则。

## 标签文本

根据以下顺序获取标签文本：

1. 组件内使用 `ReuseTabService.title = 'new title'` 重新指定文本，
2. 路由配置中 `data` 属性中包含 `reuseTitle` > `title`
3. 菜单数据中 `text` 属性

`ReuseTabService` 代码示例：

```ts
export class DemoReuseTabEditComponent implements OnInit {
    id: any;

    constructor(private route: ActivatedRoute, private reuseTabService: ReuseTabService) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.reuseTabService.title = `编辑 ${this.id}`;
        });
    }
}
```

## 生命周期

路由复用过程中不会触发现有任何生命周期钩子（例如：`ngOnInit` 等），但是往往需要在复用过程中刷新数据，因此 `reuse-tab` 提供了两种新生命周期钩子用于临时解决这类问题。

**_onReuseInit()**

当目前路由在复用过程中时触发。

**_onReuseDestroy()**

当目前路由允许复用且进入新路由时触发。

以 `_` 开头希望未来 Angular 会有相应的钩子用于快速替换。

## 常见问题

路由复用会保留组件状态，这可能会带来另一个弊端；复用过程中组件的生命周期勾子不会重复触发，大部分情况下都能正常运行，但可能需要注意：

- `OnDestroy` 可能会处理一些组件外部（例如：`body`）的样式等，可以参考生命周期解决。
- 开启 `debug` 模式后会在 `console` 很多信息这有助于分析路由复用的过程。

## API

### reuse-tab

参数 | 说明 | 类型 | 默认值
----|------|-----|------
mode | 设置匹配模式 | `ReuseTabMatchMode` | `0`
debug | 是否Debug模式 | `boolean` | `false`
max | 允许最多复用多少个页面 | `number` | `10`
excludes | 排除规则，限 `mode=URL` | `RegExp[]` | -
allowClose | 允许关闭 | `boolean` | `true`
showCurrent | 总是显示当前页 | `boolean` | `true`
fixed | 是否固定 | `boolean` | `true`
change | 切换时回调 | `EventEmitter` | -
close | 关闭回调 | `EventEmitter` | -
