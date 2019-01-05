---
type: Basic
order: 1
title: reuse-tab
subtitle: Reuse Route Tab
cols: 1
module: ReuseTabModule
---

Reuse route tab are extremely common for admin interfaces, and the problem of component data is not lost when switching routes.

The newly opened is always the current page, and the route reuse means that when we leave the current page, if the reuse condition is met (ie: matching mode), all component states (including subcomponents) of the current route are saved, wait for the next time you enter the route to restore the component data based on the cache.

## Usage

The default `ReuseTabModule` does not register `RouteReuseStrategy`. If you need route reuse, the first step is to register it:

**Register**

> How to use in ng-alain, pls refer to [delon.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/delon.module.ts#L33).

```ts
providers: [
  {
    provide: RouteReuseStrategy,
    useClass: ReuseTabStrategy,
    deps: [ReuseTabService],
  }
]
```

**Add Component**

> In `src/app/layout/default/default.component.html`

```html
<section class="alain-default__content">
  <reuse-tab></reuse-tab>
  <router-outlet></router-outlet>
</section>
```

## Matching Mode

Inject the `ReuseTabService` class anywhere in the project (recommended: `startup.service.ts`) and set the `mode` property, or pass `<reuse-tab [mode]="0"></reuse-tab> ` Reset values.

**0. Menu (Default)**

Press the ([Menu](/theme/menu#Menu)) to configure.

Reusable:

```
{ text:'Dashboard' }
{ text:'Dashboard', reuse: true }
```

Not reusable:

```
{ text:'Dashboard', reuse: false }
```

**1. MenuForce**

Press the ([Menu](/theme/menu#Menu)) to force the configure.

Reusable:

```
{ text:'Dashboard', reuse: true }
```

Not reusable:

```
{ text:'Dashboard' }
{ text:'Dashboard', reuse: false }
```

**2. URL**

Valid for all routes, can be combined with `excludes` filtering without reusing.

## Tab Text

Get the tab text in the following order:

1. Overwrite text within the component with `ReuseTabService.title = 'new title'
2. The `data` property in the routing configuration
3. `text` property in menu data

Use `ReuseTabService` example:

```ts
export class DemoReuseTabEditComponent implements OnInit {
  id: any;

  constructor(private route: ActivatedRoute, private reuseTabService: ReuseTabService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.reuseTabService.title = `Edit ${this.id}`;
    });
  }
}
```

## Reuse Events

Route reusing does not touch the Angular component lifecycle hooks (eg: `ngOnInit`, etc.), but often requires data to be refreshed during the reuse process, so two new lifecycle hooks are provided to temporarily resolve such problems.

**_onReuseInit()**

Triggered when the current route is in the reusing process.

**_onReuseDestroy()**

Triggered when the current route allows reusing and leave route.

A simple example:

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

## Scroll Position

Turning on `keepingScroll` will restore the previous scrollbar position after reused, pls attention to detail:

> **Make sure** to use the routing option [scrollPositionRestoration](https://angular.io/api/router/ExtraOptions#scrollPositionRestoration) to manage the scrollbar position.

- `true`: Keep the previous scroll bar position
- `false`: Do't operate on the scroll bar
- If all page used route reuse, you can set `scrollPositionRestoration: 'disabled'` to avoid delayed scrolling.
- If part of the page used route reuse, it's limited by `scrollPositionRestoration` **priority value**, there will be a `1ms` delay to restore the scrollbar position.

## API

### ReuseTabService

**Property**

Property | Description | Type | Default
----|------|-----|------
`[max]` | Maximum of reuse | `number` | `10`
`[mode]` | Matching Mode | `ReuseTabMatchMode` | `0`
`[debug]` | Whether Debug mode | `boolean` | `false`
`[keepingScroll]` | Keep the scrollbar position | `boolean` | `false`
`[keepingScrollContainer]` | Keep the scroll bar container | `Element` | `window`
`[excludes]` | Exclusion rules, limited by `mode=URL` | `RegExp[]` | -
`[items]` | Get cached routes | `ReuseTabCached[]` | -
`[count]` | Get the number of cached routes | `number` | -
`[change]` | Cache change callback | `Observable<ReuseTabNotify>` | -
`[title]` | Customize the current title | `string` | -
`[closable]` | Customize the current `closable` state | `boolean` | -

**Method**

Name | Description | Type
----|------|-----
`index(url)` | Returns the index of the first element in the caches, and -1 otherwise | `number`
`exists(url)` | Exists cache by URL | `boolean`
`get(url)` | Get cache data by URL | `ReuseTabCached`
`getTitle(url, route?: ActivatedRouteSnapshot)` | Get title | `string`
`clearTitleCached()` | Clear all title caches | `void`
`getClosable(url, route?: ActivatedRouteSnapshot)` | Get `closable` state | `string`
`clearClosableCached()` | Clear cached of closable | `void`
`remove(url)` | Remove the tag, touch change remove event | `void`
`move(url, position)` | Move of caches, touch change move event | `void`
`clear()` | Clear caches, touch change clear event | `void`
`refresh()` | Just touch change refresh event | `void`
`replace(url)` | Force closed current route (including the non-closable) and navigate back to the `newUrl` route | `void`

### reuse-tab

Property | Description | Type | Default
----|------|-----|------
`[i18n]` | Context Menu internationalization, support HTML | `ReuseContextI18n` | -
`[mode]` | Matching Mode | `ReuseTabMatchMode` | `0`
`[debug]` | Whether Debug mode | `boolean` | `false`
`[max]` | Maximum of reuse | `number` | `10`
`[keepingScroll]` | Keep the scrollbar position | `boolean` | `false`
`[keepingScrollContainer]` | Keep the scroll bar container | `string | Element` | `window`
`[excludes]` | Exclusion rules, limited by `mode=URL` | `RegExp[]` | -
`[allowClose]` | Whether to allow close tab | `boolean` | `true`
`[showCurrent]` | Always show current page | `boolean` | `true`
`[customContextMenu]` | Custom context click menu | `ReuseCustomContextMenu[]` | -
`(close)` | Close callback event | `EventEmitter` | -
`(change)` | Callback when switching | `EventEmitter` | -

**Context Menu**

The non-closeable item is forcibly removed when the keyboard `ctrl` is pressed.

### ReuseTabCached

Property | Description | Type | Default
----|------|-----|------
`[title]` | Title | `string` | -
`[url]` | URL | `string` | -
`[closable]` | Whether to allow close | `boolean` | -

### ReuseTabNotify

Property | Description | Type | Default
----|------|-----|------
`[active]` | Event types | `title,close,closeRight,clear,move,closable,refresh,add` | -

### ReuseContextI18n

Property | Description | Type | Default
----|------|-----|------
`[close]` | Close | `string` | -
`[closeOther]` | Close other tabs | `string` | -
`[closeRight]` | Close tabs to the right  | `string` | -
`[clear]` | Clear tabs | `string` | -

### ReuseCustomContextMenu

Property | Description | Type | Default
----|------|-----|------
`[id]` | Identifier for current context menu | `string` | -
`[title]` | Title for current context menu | `string` | -
`[fn]` | Process method for current context menu | `(item: ReuseItem, menu: ReuseCustomContextMenu) => void` | -
`[disabled]` | Whether to disabled | `(item: ReuseItem) => boolean` | -

### Route data

By routing the `data` property, you can provide partial global configuration for some pages, for example:

```ts
// Specify no route
{ path: 'p1', component: DemoComponent, data: { reuse: false } }
// Specify title
{ path: 'p1', component: DemoComponent, data: { title: 'New Title' } }
```

Property | Description | Type | Default
----|------|-----|------
`[reuse]` | Whether to reuse | `boolean` | -
`[title]` | Title | `string` | -
`[titleI18n]` | Ii18n title key | `string` | -
`[reuseClosable]` | Whether to allow close | `boolean` | -
`[keepingScroll]` | Keep the scrollbar position | `boolean` | -

> **Note:** The above data can also be reflected in the [Menu](/theme/menu#Menu) data.

## FAQ

### How to Debug

Route reuse preserves component data state, which may bring another drawback. The Angular lifecycle hook is not triggered during the reuse process. In most cases, it can run normally. There are several common problems:

- `OnDestroy` may handle the external style in component (eg: `body`), which can be resolved by Reuse Events
- Turn on the `debug` mode to help you analyze

### Max

Limiting the maximum number of reuse can reduce memory growth. There are several issues to be aware of:

- `max` Forces a close and ignores the closable state when value changes
- When it's out of `max` range, it will turn off the first open tab (Only **closable**), ingore close when all pages are **non-closable**
