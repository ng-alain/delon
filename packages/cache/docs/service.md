---
order: 2
title: CacheService
type: Documents
---

## API

### set()

| 参数名 | 类型 | 描述 |
| ----- | --- | --- |
| `key` | `string` | 缓存唯一标识符 |
| `data` | `any | Observable<any>` | 缓存数据源，数据源为 `Observable` 时，依然返回 `Observable`，否则返回 `void` |
| `options` | `{ type?: 'm' | 's', expire?: number }` | `type` 存储类型，'m' 表示内存，'s' 表示持久<br>`expire` 过期时间，单位 `秒` |

### get()

| 参数名 | 类型 | 描述 |
| ----- | --- | --- |
| `key` | `string` | 缓存唯一标识符 |
| `options` | `{ mode?: 'promise' | 'none', type?: 'm' | 's', expire?: number }` | `mode` 指定获取缓存的模式：<br>1、`promise` 表示若不存 `key` 则把 `key` 当URL发起请求并缓存且返回 Observable<br>2、`none` 表示直接返回数据若KEY不存在则直接返回 `null`<br><br>`type` 存储类型，'m' 表示内存，'s' 表示持久<br>`expire` 过期时间，单位 `秒` |

### getNone()

获取缓存数据，若 `key` 不存在或已过期则返回 null。

### tryGet()

获取缓存，若不存在则设置缓存对象，参数等同 `set()`。

### has()

是否缓存 `key`。

### remove()

移除缓存 `key`。

### clear()

清空所有缓存。

### notify()

`key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：

- 调用后除再次调用 `cancelNotify` 否则永远不过期
- 监听器每 `freq` (默认：3秒) 执行一次过期检查

### cancelNotify()

取消 `key` 监听

### hasNotify()

`key` 是否已经监听

### clearNotify()

清空所有 `key` 的监听

### freq()

设置监听频率，单位：毫秒且最低 `20ms`，默认：`3000ms`。

## `get` 和 `tryGet` 的区别

本质都是获取并返回缓存数据，`get` 相比 `tryGet` 更简化，前者按KEY即是URL约定的风格，后者需指定数据源对象。

## 酷操作

### async 管道

RxJS 和 `async` 管道二者的配合可以帮助我们非常友好的使用缓存数据，例如：

```ts
@Component({
  template: `<li *ngFor="let unit of units | async">{{unit}}</li>`
})
export class Component {
  units: this.srv.get('/data/unit')
}
```

### 缓存与请求

有时需要依赖字典获取远程数据时：

```ts
this.srv
  .get('/data/unit')
  .pipe(
    map(units => this.http.get(`/trade?unit=${units}`))
  );
```
