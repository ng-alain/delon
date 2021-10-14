---
order: 40
title: sta
subtitle: Swagger API generator
type: Documents
---

## Foreword

If the back-end API documentation is described by Swagger, a complete set of API codes can be generated through the following commands:

```bash
ng g ng-alain:sta --url=https://petstore3.swagger.io/api/v3/openapi.json 
```

## Command format

```bash
ng g ng-alain:sta --name=<Swagger name> --url=<Remote URL> --filePath=<Local Swagger.json> --output=<Path to folder>
```

| Name | Default | Description |
|------|---------|-------------|
| `name` | `sta` | Name for swagger project name |
| `url` | - | URL to swagger schema, Choose one of filePath and url. |
| `filePath` | - | Path to swagger schema, Choose one of filePath and url. |
| `output` | `src/app/${name}` | Path to folder where will been located the created api module |
| `responseDataField` | - | The real data field of Response |
| `httpClientType` | `delon` | HttpClient request method, 1. `delon` use `_HttpClient` of `@delon/theme`, 2. `angular` use `HttpClient` |

## FAQ

### Path and Service Association

By default, the first `tags` of each `path` will be merged into one Service. Please use `[a-zA-Z][-_a-zA-Z]+` to describe `tag` as much as possible.

### Strange method name in the service?

By default, it will be processed according to the `operationId` item, otherwise it will be automatically combined according to the `path` and `method`.

### Global Response

When all `path`s have a fixed output format, such as success and exceptions have a unified format, they all return:

```json
{
   "status": 200,
   "error": "Error Message",
   "result": {}
}
```

If an interceptor is used to handle exception messages, when subscribing only needs to always get the data of the `result` field, it can be solved by specifying `--responseDataField="result"`.
