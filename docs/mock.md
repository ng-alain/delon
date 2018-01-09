---
order: 2
title: Mock
type: Advance
---

`@delon/mock` 是一个简单 Mock 功能，包括以下几个特征：

- 任意 Angular 项目
- 开发无侵入
- 超简单用法
- 支持 [mock.js](http://mockjs.com/)

## Mock 数据

首先先来看简单 Mock 数据规则：

```ts
import { MockStatusError } from '@delon/mock';

export const USERS = {
    // 支持值为 Object 和 Array
    'GET /users': { users: [1, 2], total: 2 },
    // GET 可省略
    '/users/1': { users: [1, 2], total: 2 },
    // POST 请求
    'POST /users/1': { uid: 1 },
    // 获取请求参数 queryString、headers、body
    '/qs': (req: MockRequest) => req.queryString.pi,
    // 路由参数
    '/users/:id': (req: MockRequest) => req.params, // /users/100, output: { id: 100 }
    // 发送 Status 错误
    '/404': () => { throw new MockStatusError(404); }
};
```

当通过 `HttpClient` 访问 `/users` 时会直接返回 `{ users: [1, 2] }`，且浏览器网络面板是无法看到发送请求，这一切都在 Angular 内部触发。

一般来说 Mock 都是开发过程中需要，因此建议在项目根目录下创建一个 `_mock` 目录，并创建一个 `index.ts` 文件用于导出所有数据规则。

## 如何使用

**安装**

```bash
npm install --save-dev @delon/mock
```

**注册**

在根模块 `AppModule` 导入 `DelonMockModule`；

```ts
import { DelonMockModule } from '@delon/mock';
import * as MOCKDATA from '../../_mock';
import { environment } from '../environments/environment';
const MOCKMODULE = !environment.production ? [ DelonMockModule.forRoot({ data: MOCKDATA }) ] : [];

@NgModule({
    imports: [
        ...MOCKMODULE
    ]
})
```

这是采用一种限制开发模式下才会加载 `DelonMockModule` 模块的方式是希望仅限开发模式下才会加载，这样对于生产环境将不会包括任何 Mock 有关的数据。

反之，你可能会希望**开发与生产**环境同时有效，则：

```ts
import { DelonMockModule } from '@delon/mock';
import * as MOCKDATA from '../../_mock';
@NgModule({
    imports: [
        DelonMockModule.forRoot({ data: MOCKDATA })
    ]
})
```

## MockOptions 配置

| 参数名 | 类型 | 默认值 | 描述 |
| ----- | --- | --- | --- |
| `data` | `any` | - | Mock 数据规则 |
| `delay` | `number` | `300` | 请求延迟，单位：毫秒 |
| `force` | `boolean` | `false` | 是否强制所有请求都Mock，`true` 表示当请求的URL不存在时直接返回 404 错误，`false` 表示未命中时发送真实HTTP请求 |
| `log` | `boolean` | `true` | 是否打印 Mock 请求信息，弥补浏览器无Network信息  |

## 关于 mock.js

当引入 mock.js 可能会导致 `ng build --prod` 文件变大，目前受限于 Cli，我无法完整的切除它。
