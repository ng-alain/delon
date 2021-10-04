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
| `name` | `proxy` | Swagger 项目名称 |
| `url` | - | 远程 Swagger.json 文件，`url` 与 `filePath` 必须二选一 |
| `filePath` | - | 本地 Swagger.json 文件路径，`url` 与 `filePath` 必须二选一 |
| `output` | `src/app/${name}` | 输出目录 |
