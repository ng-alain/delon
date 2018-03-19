---
title: _src
subtitle: 显示图像
order: 300
cols: 1
type: Directive
module: AdImageModule
---

等同于 `src`，但相比较更多功能：

+ 支持微信、qq头像规则缩略图规则
+ 支持移除http&https协议http
+ 支持增加onerror事件

## API

参数 | 说明 | 类型 | 默认值
----|------|-----|------
size | 图像大小 | `number` | `64`
error | 替代图像无法加载 | `string` | `./assets/img/logo.svg`

### ImageConfig

导入 `AdImageModule` 时，允许指定默认 `size`、`error` 值。例如：

```ts
@NgModule({
    imports: [
        AdImageModule.forRoot()
    ],
    providers: [
        // 重置默认大小为：32
        { provide: ImageConfig, useFactory: ()=> { return Object.assign(new ImageConfig(), { size: 32 }); } }
    ]
})
```
