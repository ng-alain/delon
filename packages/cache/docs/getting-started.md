---
order: 1
title: 开始使用
type: Documents
module: DelonCacheModule
config: DelonCacheConfig
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

缓存的获取与设置都是通过 [CacheService](/cache/service) 来操作，你只需要将 `CacheService` 导入对应的类当中即可。

## 如何使用

**安装**

```bash
yarn add @delon/cache
```

**注册**

在根模块 `AppModule` 导入 `DelonCacheModule`；

```ts
import { DelonCacheModule } from '@delon/cache';

@NgModule({
  imports: [
    DelonCacheModule
  ]
})
```

**注** 建议在根模块中导入，因为它只有 Service 为了防止重复被导入。

### DelonCacheConfig

| 参数名 | 类型 | 默认值 | 描述 |
| ----- | --- | --- | --- |
| `[mode]` | `promise,none` | `promise` | 缓存模式；`promise` 约定模式，允许 `key` 作为 http 获取数据；`none` 正常模式 |
| `[reName]` | `string` | - | 重命名返回参数，例如：<br> `null` 返回体为内容<br>`list` 返回体应 `{ list: [] }`<br>`result.list` 返回体应 `{ result: { list: [] } }` |
| `[prefix]` | `string` | - | 持久化数据键值前缀 |
| `[meta_key]` | `string` | `__cache_meta` | 持久化数据元数据存储键名 |
