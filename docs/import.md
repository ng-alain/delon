---
order: 60
title:
  en-US: Import Module
  zh-CN: 引入外部模块
type: Dev
---

除了 ng-zorro-antd 基础组件以及脚手架内置的 @delon 业务组件，有时我们还需要引入其他外部模块，这里以引入富文本组件 [ngx-ueditor](https://github.com/cipchk/ngx-ueditor) 为例进行介绍。

## 引入依赖

在终端输入下面的命令完成安装：

```bash
$ npm install ngx-ueditor --save
```

> 加上 `--save` 参数会自动添加依赖到 package.json 中去。

## 注册

像富文本框你可能需要在所有子模块中都会可能会用到，因为建议在 `SharedModule` 模块中导入和导出他。

```ts
// shared.module.ts
// region: third libs
import { UEditorModule } from 'ngx-ueditor';
const THIRDMODULES = [ UEditorModule ];
// endregion
```

> `region: third libs` 区域是ng-alain的一个编码约定，将所有第三方组件注册至 `THIRDMODULES` 变量中即可，而无须关心 `@NgModule` 内在的写法，有关更多编码约定可以参考[编码规范建议](/docs/style-guide)。

对于部分第三方组件，可能会需要一些配置项，建议在根模块中注册，例如：

```ts
import { UEditorModule } from 'ngx-ueditor';
@NgModule({
    imports: [
        BrowserModule,
        UEditorModule.forRoot({
            // 指定ueditor.js路径目录
            path: 'assets/ueditor/',
            // 默认全局配置项
            options: {
                themePath: '/assets/ueditor/themes/'
            }
        })
    ]
})
export class AppModule { }
```

## 使用

接下来你可以在任何子模块中使用 `ngx-ueditor`：

```html
<ueditor [(ngModel)]="html"></ueditor>
```
