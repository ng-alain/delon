---
order: 60
title: Use a third-party lib
type: Dev
---

In addition to the NG-ALAIN base component and the @delon business component, sometimes we need to reference other external class libraries, the following is how to use the rich text component [ngx-tinymce](https://github.com/cipchk/ngx-tinymce):

## Angular Component

### Installing dependencies

```bash
yarn add ngx-tinymce
```

### Import module

You may need to use rich editor in all submodules, as it's recommended to import and export them in the `SharedModule` module.

```ts
// #region third libs
import { NgxTinymceModule } from 'ngx-tinymce';
const THIRDMODULES = [ NgxTinymceModule ];
// #endregion
```

> The `region: third libs` region is a coding convention for NG-ALAIN, register all third-party components into the `THIRDMODULES` variable, for more coding conventions, refer to [Style Guide](/docs/style-guide).

For some third-party components, may be required global configuration. It's recommended to register in the root module, for example:

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

Next you can use `ngx-tinymce` in any submodule:

```html
<tinymce [(ngModel)]="html"></tinymce>
```

## Non-Angular Component

Referencing a non-Angular component is actually loading a JavaScript class library file, such as the QR code library [qrious](https://neocotic.com/qrious/):

### Installing dependencies

```bash
yarn add qrious
```

### Import Scripts

Add `qrious.min.js` to the `scripts` node in `angular.json`:

```json
"scripts": [
  "node_modules/qrious/dist/qrious.min.js"
]
```

If the third-party library requires additional styles, you also need to add a path to `styles`.

> Note: You need to re-run `ng s`.

**Lazy loading script**

The above import script method will package the code directly into `scripts.js`, which will cause the `scripts.js` to become larger. NG-ALAIN provides another delayed loading CDN library script solution for low-usage services. (Example: [zip](https://cdn.bootcss.com/jszip/3.1.5/jszip.min.js) compression), you can use [LazyService](/util/lazy) to delay loading remote CDN scripts.

### How to use

Angular is using TypeScript language, and all types must be clearly defined to be used. For details, please refer to [Angular How to use third-party libraries](https://zhuanlan.zhihu.com/p/35796451).

A sample code for the call:

```ts
declare var QRious: any;

@Component()
export class DEMOComponent {
  constructor(cog: QRConfig) {
    const qr = new QRious();
  }
}
```
