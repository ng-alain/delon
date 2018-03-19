---
order: 70
title:
  en-US: Cache
  zh-CN: 缓存
type: Advance
---

## 写在前面

通常把一些远程数据缓存在内存或 `localStorage` 持久化，目的是为了减少 Http 请求的成本；这样的数据通常是字典、城市数据等。

缓存的获取应该是非常简单的，我们不应该把时间浪费在如何保证加载这件事情上，因此 `@delon/cache` 更多是以**约定**为前提。`key` 作为缓存的唯一键值，它不应该只是单纯的一个标识符，如果遵守某种约定它的存在会更有价值。`@delon/cache` 默认情况下不光把 `key` 当作唯一标识符，同时它还是一个用于获取远程数据的有效HTTP，例如：

```ts
cacheService.get('/data/unit');
```

在以往我们会认为，在它之前应该需要加一个：

```ts
cacheService.set('/data/unit', [ '个', '件' ]);
```

才能够确保获取到缓存数据。

而对于 `@delon/cache` 而言，你无须 `set` 方法，直接使用 `get` 获取到单位字典，因为我们有一种**约定**，当缓存不存在透过 `key` 作为HTTP请求数据缓存后再返回。

## 如何使用？

RxJS 和 `async` 管道二者的配合可以帮助我们非常友好的使用缓存数据，例如：

```ts
@Component({
    template: `<li *ngFor="let unit of units | async">{{unit}}</li>`
})
export class Component {
    units: this.srv.get('/data/unit')
}
```

有时需要依赖字典获取远程数据时：

```ts
this.srv
    .get('/data/unit')
    .pipe(
        map(units => this.http.get(`/trade?unit=${units}`))
    );
```

## 如何使用

**安装**

```bash
npm install --save @delon/cache
```

**注册**

在根模块 `AppModule` 导入 `DelonCacheModule`；

```ts
import { DelonCacheModule } from '@delon/mock';

@NgModule({
    imports: [
        DelonCacheModule.forRoot()
    ]
})
```

**注** 建议在根模块中导入，因为它只有 Service 为了防止重复被导入。

## API

### CacheOptions

`DelonCacheModule.forRoot({})` 唯一参数是 `CacheOptions`：

| 参数名 | 类型 | 默认值 | 描述 |
| ----- | --- | --- | --- |
| `mode` | `promise,none` | `promise` | 缓存模式；`promise` 约定模式，允许 `key` 作为 http 获取数据；`none` 正常模式 |
| `reName` | `string` | - | 重命名返回参数，例如：<br> `null` 返回体为内容<br>`list` 返回体应 `{ list: [] }`<br>`result.list` 返回体应 `{ result: { list: [] } }` |
| `prefix` | `string` | - | 持久化数据键值前缀 |
| `meta_key` | `string` | `__cache_meta` | 持久化数据元数据存储键名 |

### CacheService

**set()**

| 参数名 | 类型 | 描述 |
| ----- | --- | --- |
| `key` | `string` | 缓存唯一标识符 |
| `data` | `any | Observable<any>` | 缓存数据源，数据源为 `Observable` 时，依然返回 `Observable`，否则返回 `void` |
| `options` | `{ type?: 'm' | 's', expire?: number }` | `type` 存储类型，'m' 表示内存，'s' 表示持久<br>`expire` 过期时间，单位 `秒` |

**get()**

| 参数名 | 类型 | 描述 |
| ----- | --- | --- |
| `key` | `string` | 缓存唯一标识符 |
| `options` | `{ mode?: 'promise' | 'none', type?: 'm' | 's', expire?: number }` | `mode` 指定获取缓存的模式：<br>1、`promise` 表示若不存 `key` 则把 `key` 当URL发起请求并缓存且返回 Observable<br>2、`none` 表示直接返回数据若KEY不存在则直接返回 `null`<br><br>`type` 存储类型，'m' 表示内存，'s' 表示持久<br>`expire` 过期时间，单位 `秒` |

**getNone()**

获取缓存数据，若 `key` 不存在或已过期则返回 null。

**tryGet()**

获取缓存，若不存在则设置缓存对象，参数等同 `set()`。

**has()**

是否缓存 `key`。

**remove()**

移除缓存 `key`。

**clear()**

清空所有缓存。

## 常见问题

### `get` 和 `tryGet` 的区别

本质都是获取并返回缓存数据，`get` 相比 `tryGet` 更简化，前者按KEY即是URL约定的风格，后者需指定数据源对象。
