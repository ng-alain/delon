---
order: 2
title: 规则数据
type: Documents
---

## 写在前面

Mock 规则数据是一个 `Object` 对象，Key 为请求域声明，Value 为响应内容，例如：

```ts
export const USERS = {
  'GET /users': { users: [1, 2], total: 2 },
}
```

表示当通过 `HttpClient.get('/users')` 访问时，会直接返回 `{ users: [1, 2], total: 2 }`，并且不会发送任何 HTTP 请求，你可以通过 `Network` 面板来确认。

## Key 请求域声明

使用 `' '` 空格来区隔请求方法和URL，请求方法可忽略，默认为 `GET`；URL 支持路由参数和正则表达式。一些有效的 Key：

```ts
export const USERS = {
  'GET /users': null,
  // GET 可省略
  '/users/1': null,
  // POST 请求
  'POST /users/1': null,
  // 路由参数
  '/users/:id': null,
  // 正则表达式需要用 `()` 包裹
  '/data/(.*)': null
};
```

## Value 响应内容

响应内容支持三种类型：`Object`、`Array`、`(req: MockRequest) => any`。

```ts
import { MockStatusError } from '@delon/mock';

export const USERS = {
  // Array
  '/users': [ { uid: 1 }, { uid: 2 } ],
  // Object
  '/users': { uid: 1 },
  // Function
  '/qs': (req: MockRequest) => req.queryString.pi,
  // 支持返回完整的 HttpResponse
  '/http': (req: MockRequest) => new HttpResponse({ body: 'Body', headers: new HttpHeaders({ 'token': '1' }) }),
  // 发送 Status 错误
  '/404': () => { throw new MockStatusError(404); }
};
```

### MockRequest

名称        | 类型               | 描述
------------|--------------------|------------------------------------------------------------------
`[params]`      | `any`              | 路由参数，`/:id` 则 `params.id`
`[queryString]` | `any`              | URL参数，`/users?pi=1&ps=10` 则 `queryString.pi`、`queryString.ps`
`[headers]`     | `any`              | Headers 值
`[body]`        | `any`              | 请求 body
`[original]`    | `HttpRequest<any>` | 原始 `HttpRequest`

### MockStatusError

当你希望响应一个 `404` 异常时。

## 一些示例

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
  '/404': () => { throw new MockStatusError(404); },
  // 使用 () 表示：正则表达式
  '/data/(.*)': (req: MockRequest) => req
};
```

## 存储规则

一般来说 Mock 都是开发过程中需要，因此建议在项目根目录下创建一个 `_mock` 目录，并创建一个 `index.ts` 文件用于导出所有数据规则，参考 [ng-alain/_mock](https://github.com/ng-alain/ng-alain/tree/master/_mock)。
