---
order: 60
title:
  en-US: Import Module
  zh-CN: 引入外部模块
type: Dev
---

除了 ng-zorro-antd 基础组件以及脚手架内置的 @delon 业务组件，有时我们还需要引入其他外部模块，这里以引入富文本组件 [ngx-tinymce](https://github.com/cipchk/ngx-tinymce) 为例进行介绍。

## Angular组件

### 安装依赖包

在终端输入下面的命令完成安装：

```bash
yarn add ngx-tinymce
```

### 注册

像富文本框你可能需要在所有子模块中都会可能会用到，因为建议在 `SharedModule` 模块中导入和导出他。

```ts
// #region third libs
import { NgxTinymceModule } from 'ngx-tinymce';
const THIRDMODULES = [ NgxTinymceModule ];
// #endregion
```

> `region: third libs` 区域是ng-alain的一个编码约定，将所有第三方组件注册至 `THIRDMODULES` 变量中即可，而无须关心 `@NgModule` 内在的写法，有关更多编码约定可以参考[编码规范建议](/docs/style-guide)。

对于部分第三方组件，可能会需要一些配置项，建议在根模块中注册，例如：

```ts
import { NgxTinymceModule } from 'ngx-tinymce';
@NgModule({
  imports: [
    BrowserModule,
    NgxTinymceModule.forRoot({
      baseURL: '//cdn.bootcss.com/tinymce/4.7.13/'
    })
  ]
})
export class AppModule { }
```

### 使用

接下来你可以在任何子模块中使用 `ngx-tinymce`：

```html
<tinymce [(ngModel)]="html"></tinymce>
```

## 非Angular组件

引用一个非 Angular 组件实际上是一个 JavaScript 类库，例如二维码类库 [qrious](https://neocotic.com/qrious/)，这是一个纯洁的 JavaScript 类库（建议尽可能使用纯洁类库而非带有依赖其他）。

### 安装依赖包

在终端输入下面的命令完成安装：

```bash
yarn add qrious
```

### 导入脚本

在 `angular.json` 找到 `scripts` 节点并增加：

```json
"scripts": [
  "node_modules/qrious/dist/qrious.min.js"
]
```

> 注意：需要重新运行 `ng serve` 才会生效。

**延迟加载脚本**

上述导入脚本方式会把代码直接打包进 `scripts.js`，这会导致核心类库体积变大，ng-alain 提供另一种延迟加载CDN类库脚本方案，特别适合**非**常用性功能，但又需要额外依赖一个比较大的类库时（例如：[zip](https://cdn.bootcss.com/jszip/3.1.5/jszip.min.js) 压缩），可以利用 [LazyService](/util/lazy) 来解决延迟加载远程CDN脚本。

### 使用

Angular 是采用 TypeScript 语言，所有类型都必须明确定义才能使用，细节请参考 [Angular 如何使用第三方库](https://zhuanlan.zhihu.com/p/35796451)。

一个调用的示例代码：

```ts
declare var QRious: any;

@Component()
export class DEMOComponent {
  constructor(cog: QRConfig) {
    const qr = new QRious();
  }
}
```
