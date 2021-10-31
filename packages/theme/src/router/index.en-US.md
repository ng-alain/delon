---
order: 1
title: PreloadOptionalModules
type: Router
---

Optional pre-loading module loading, when it's necessary to load the resource at the first page load for some lazy routes. For example, by default, the `order` module must first access the `/order` route before it will actually start download resource files. When using `PreloadOptionalModules` and specifying `preload: true`, it will automatically download resource files after the Angular project is started.

```ts
@NgModule({
 providers: [PreloadOptionalModules],
 imports: [
   RouterModule.forRoot([
    {
      path: 'order',
      loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
      data: { preload: true }
    },
   ], { 
    preloadingStrategy: PreloadOptionalModules
  })]
})
```
