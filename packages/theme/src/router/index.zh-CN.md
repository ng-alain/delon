---
order: 1
title: PreloadOptionalModules
type: Router
---

可选预加载模块，当需要对某些懒加载在第一次页面加载时也一并加载该资源时。例如 `order` 模块默认情况下必须第一次访问 `/order` 路由时才会真正的开始下载资源文件，当通过使用 `PreloadOptionalModules` 并指定 `preload: true` 时，会在 Angular 项目启动后自动下载资源文件。

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
