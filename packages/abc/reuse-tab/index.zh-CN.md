---
type: Basic
order: 1
title: reuse-tab
subtitle: 路由复用标签
cols: 1
module: ReuseTabModule
---

复用标签在中台系统非常常见，本质是解决不同路由页切换时组件数据不丢失问题。

最新打开的永远是当前页，而路由复用是指当我们离开当前页时若符合复用条件（即：匹配模式）则保存当前路由所有组件状态（包括子组件），待下一次进入相同路由（即：匹配模式）时再从中缓存中获取到。

## 如何使用

默认 `ReuseTabModule` 并不会注册 `RouteReuseStrategy`，这是因为若默认在模块内注册会导致所有引入 `@delon/abc` 模块都会强制使用路由复用（不管是否模板是否包括 `<reuse-tab>`）。因此：

**注册RouteReuseStrategy**

> ng-alain 使用方式参考：[delon.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/delon.module.ts#L33)。

```ts
// delon.module.ts or app.module.ts
providers: [
  {
    provide: RouteReuseStrategy,
    useClass: ReuseTabStrategy,
    deps: [ReuseTabService],
  }
]
```

**添加组件**

> 位置 `src/app/layout/default/default.component.html`

```html
<section class="alain-default__content">
  <reuse-tab></reuse-tab>
  <router-outlet></router-outlet>
</section>
```

## 匹配模式

在项目的任何位置（建议：`startup.service.ts`）注入 `ReuseTabService` 类，并设置 `mode` 属性，或通过 `<reuse-tab [mode]="0"></reuse-tab>` 重新设置值，包括：

**0、Menu（推荐，默认值）**

按菜单 ([Menu](/theme/menu#Menu)) 配置。

可复用：

```
{ text:'Dashboard' }
{ text:'Dashboard', reuse: true }
```

不可复用：

```
{ text:'Dashboard', reuse: false }
```

**1、MenuForce**

按菜单 ([Menu](/theme/menu#Menu)) 强制配置。

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

## 标签文本

根据以下顺序获取标签文本：

1. 使用 `ReuseTabService.title = 'new title'` 在组件内覆盖文本
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

路由复用不会触发现Angular组件生命周期钩子（例如：`ngOnInit` 等），但是往往需要在复用过程中刷新数据，因此提供了两种新生命周期钩子用于临时解决这类问题。

**_onReuseInit()**

当目前路由在复用过程中时触发。

**_onReuseDestroy()**

当目前路由允许复用且进入新路由时触发。

> 以 `_` 开头希望未来 Angular 会有相应的钩子用于快速替换，一个简单的示例：

```ts
@Component()
export class DemoComponent {
  _onReuseInit() {
    console.log('_onReuseInit');
  }
  _onReuseDestroy() {
    console.log('_onReuseDestroy');
  }
}
```

## 滚动条位置

开启 `keepingScroll` 会在复用后恢复之前的滚动条位置，有几项注意细节：

> **务必**使用路由选项 [scrollPositionRestoration](https://angular.io/api/router/ExtraOptions#scrollPositionRestoration) 来管理滚动条位置

- `true`：表示保持之前滚动条位置
- `false`：表示不对滚动条任何操作
- 若全站使用路由复用时，则设置 `scrollPositionRestoration: 'disabled'`，避免延迟滚动
- 若部分页面路由复用时，则受限于 `scrollPositionRestoration` **优先值** ，会有 `1ms` 延迟恢复滚动条位置

## API

### ReuseTabService

**属性**

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[max]` | 允许最多复用多少个页面，值发生变更时会强制关闭且忽略可关闭条件 | `number` | `10`
`[mode]` | 设置匹配模式 | `ReuseTabMatchMode` | `0`
`[debug]` | 是否Debug模式 | `boolean` | `false`
`[keepingScroll]` | 保持滚动条位置 | `boolean` | `false`
`[keepingScrollContainer]` | 保持滚动条容器 | `Element` | `window`
`[excludes]` | 排除规则，限 `mode=URL` | `RegExp[]` | -
`[items]` | 获取已缓存的路由 | `ReuseTabCached[]` | -
`[count]` | 获取当前缓存的路由总数 | `number` | -
`[change]` | 订阅缓存变更通知 | `Observable<ReuseTabNotify>` | -
`[title]` | 自定义当前标题 | `string` | -
`[closable]` | 自定义当前 `closable` 状态 | `boolean` | -

**方法**

方法名 | 说明 | 返回类型
----|------|-----
`index(url)` | 获取指定路径缓存所在位置，`-1` 表示无缓存 | `number`
`exists(url)` | 获取指定路径缓存是否存在 | `boolean`
`get(url)` | 获取指定路径缓存 | `ReuseTabCached`
`getTitle(url, route?: ActivatedRouteSnapshot)` | 获取标题 | `string`
`clearTitleCached()` | 清空自定义标题数据 | `void`
`getClosable(url, route?: ActivatedRouteSnapshot)` | 获取 `closable` 状态 | `string`
`clearClosableCached()` | 清空 `closable` 缓存 | `void`
`remove(url)` | 根据URL移除标签，同时触 `change` remove事件 | `void`
`move(url, position)` | 移动缓存数据，同时触 `change` move事件 | `void`
`clear()` | 清除所有缓存，同时触 `change` clear事件 | `void`
`refresh()` | 无任何动作，但会触 `change` refresh事件 | `void`
`replace(url)` | 强制关闭当前路由（包含不可关闭状态），并重新导航至 `newUrl` 路由 | `void`

### reuse-tab

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[i18n]` | 右击菜单国际化，支持HTML | `ReuseContextI18n` | -
`[mode]` | 设置匹配模式 | `ReuseTabMatchMode` | `0`
`[debug]` | 是否Debug模式 | `boolean` | `false`
`[max]` | 允许最多复用多少个页面 | `number` | `10`
`[keepingScroll]` | 保持滚动条位置 | `boolean` | `false`
`[keepingScrollContainer]` | 保持滚动条容器 | `string | Element` | `window`
`[excludes]` | 排除规则，限 `mode=URL` | `RegExp[]` | -
`[allowClose]` | 允许关闭 | `boolean` | `true`
`[showCurrent]` | 总是显示当前页 | `boolean` | `true`
`[customContextMenu]` | 自定义右键菜单 | `ReuseCustomContextMenu[]` | -
`[tabBarExtraContent]` | tab bar 上额外的元素 | `TemplateRef<void>` | -
`[tabBarStyle]` | tab bar 的样式对象 | `object` | -
`[tabBarGutter]` | tabs 之间的间隙 | `number` | -
`(close)` | 关闭回调 | `EventEmitter` | -
`(change)` | 切换时回调，接收的参数至少包含：`active`、`list` 两个参数 | `EventEmitter` | -

**右击菜单**

当按下键盘 `ctrl` 时会强制移除不可关闭项。

### ReuseTabCached

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[title]` | 标题 | `string` | -
`[url]` | URL地址 | `string` | -
`[closable]` | 是否允许关闭 | `boolean` | -

### ReuseTabNotify

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[active]` | 事件类型 | `title,close,closeRight,clear,move,closable,refresh,add` | -

### ReuseContextI18n

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[close]` | 关闭 | `string` | -
`[closeOther]` | 关闭其它 | `string` | -
`[closeRight]` | 关闭右边 | `string` | -
`[clear]` | 清空 | `string` | -

### ReuseCustomContextMenu

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[id]` | 唯一标识符 | `string` | -
`[title]` | 标题 | `string` | -
`[fn]` | 处理方法 | `(item: ReuseItem, menu: ReuseCustomContextMenu) => void` | -
`[disabled]` | 是否禁用 | `(item: ReuseItem) => boolean` | -

### 路由data

透过路由 `data` 附加数据，可以对部分页面提供覆盖全局配置，例如：

```ts
// 指定不复路由
{ path: 'p1', component: DemoComponent, data: { reuse: false } }
// 指定标签标题
{ path: 'p1', component: DemoComponent, data: { title: 'New Title' } }
```

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[reuse]` | 是否复用 | `boolean` | -
`[title]` | 标题 | `string` | -
`[titleI18n]` | I18n标题Key | `string` | -
`[reuseClosable]` | 是否允许关闭 | `boolean` | -
`[keepingScroll]` | 是否保持滚动条 | `boolean` | -

> **注：** 以上数据也可在 [Menu](/theme/menu#Menu) 数据中体现。

## 常见问题

### 如何Debug？

路由复用会保留组件状态，这可能会带来另一个弊端；复用过程中不会触发Angular生命周期勾子，大部分情况下都能正常运行，有几个常见问题：

- `OnDestroy` 可能会处理一些组件外部（例如：`body`）的样式等，可以参考生命周期解决。
- 开启 `debug` 模式后会在 `console` 很多信息这有助于分析路由复用的过程。

### Max参数

限定最大复用数据可以减少内存的增长，有几个问题需要注意：

- `max` 参数值发生变更时会强制关闭且忽略可关闭条件
- 超出 `max` 值时，会关掉最先打开 **可关闭** 的页面，若所有页面都为 **不可关闭** 则忽略关闭
