---
order: 40
title: sta
subtitle: Swagger API 生成器
type: Documents
---

## 写在前面

若后端API文档是由 Swagger 来描述，将可以通过以下命令来生成一组完整的 API 代码：

```bash
ng g ng-alain:sta --url=https://petstore3.swagger.io/api/v3/openapi.json 
```

## 命令格式

```bash
ng g ng-alain:sta --name=<Swagger name> --url=<远程URL地址> --filePath=<本地Swagger.json文件> --output=<输出路径>
```

| 参数名 | 默认 | 描述 |
|-----|----|----|
| `name` | `sta` | Swagger 项目名称 |
| `url` | - | 远程 Swagger.json 文件，`url` 与 `filePath` 必须二选一 |
| `filePath` | - | 本地 Swagger.json 文件路径，`url` 与 `filePath` 必须二选一 |
| `output` | `src/app/${name}` | 输出目录 |
| `responseDataField` | - | Response 的真实数据字段 |
| `modelTypePrefix` | - | 数据契约名称前缀 |
| `httpClientType` | `delon` | HttpClient 请求方式，1. `delon` 使用 `@delon/theme` 的 `_HttpClient`，2. `angular` 使用 `HttpClient` |
| `generateApiOptions` | - | swagger-typescript-api [options](https://github.com/acacode/swagger-typescript-api#-usage) |

## 常见问题

### 路径与Service的关联

默认会将每个 `path` 第一个 `tags` 合并为一个 Service，请尽可能使用 `[a-zA-Z][-_a-zA-Z]+` 来描述 `tag`。

### 服务内奇怪的方法名？

默认情况下，会根据 `operationId` 项目来处理，否则会自动根据 `path` 与 `method` 组合。

### 全局Response

当所有 `path` 有固定输出格式时，比如成功、异常都有统一格式时都返回时：

```json
{
  "status": 200,
  "error": "Error Message",
  "result": {}
}
```

若是通过拦截器来处理异常消息时，订阅时只需要始终获取 `result` 字段数据时，可以通过指定 `--responseDataField="result"` 来解决。
