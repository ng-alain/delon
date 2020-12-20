---
order: 30
title:
  en-US: Module Guidelines
  zh-CN: 模块注册指导原则
type: Other
---

The `AppModule`, `CoreModule`, and `SharedModule` modules have not been used very clearly, and it is easy to use them. The goal of the Angular module is to make components, instructions, services, and pipeline function blocks more cohesive, and each functional area forms a separate set of business domains or utilities.

## 1) Classification description

------------

### AppModule

The root module is used to guide Angular startup. It is very suitable for importing some modules that need to be used everywhere in the application. Such as: theme system, user master authentication module, permission module, global HTTP interceptors, international services, etc..

### CoreModule

The core module will only be imported once. It is equivalent to `AppModule`, but we should treat it as a **pure service class module**. For example: message, data access, etc.

### SharedModule

We call it a shared module. It should not have `providers` because `ShareModule` will be imported in all business modules. Which will cause the service to be overwritten.

NG-ZORRO, @delon/abc, @delon/chart, etc. have changed from all import to on-demand import since version 11. For this reason, NG-ALAIN has refined two files `shared-delon.module.ts` and `shared -zorro.module.ts` merges some modules frequently used throughout the project into a module called `SharedModule`, which is why it is necessary to import it in the business module for the first time. Although this method can reduce unnecessary import code, it will also cause compilation speed. Therefore, it is not recommended to put all components into `SharedModule`, and try to put the modules that need to be used more than three times before putting them here; Otherwise, you must import it yourself in the business module.

## 2) Recommendation

------------

### AppModule

**Should** import module:

+ Angular Module: `BrowserModule`, `BrowserAnimationsModule`, `HttpClientModule`
+ `AlainThemeModule` Theme system
+ `DelonMockModule` Mock data
+ `AlainAuthModule` User authentication module
+ `AlainACLModule` Privilege module
+ Internationalization module

**Should** include services:

+ Angular globalization
+ HTTP interceptor
+ Angular start service
+ `ng-zorro-antd` Basic component service
+ `@delon/abc` Business component service

**Role:** Throughout the definition of the entire application.

------------

### CoreModule

**Should** only leave the `providers` attribute.

**Role:** Some common services. such as: user messages, HTTP data access.

------------

### ShareModule

**Should** contain definitions:

+ Apply generic custom business components

**Should** import module:

+ Angular generic module:`CommonModule`、`FormsModule`、`RouterModule`、`ReactiveFormsModule`
+ `ng-zorro-antd` Basic component module
+ `@delon/abc` Business component module
+ Third-party generic dependency component module

**Should** Export all included modules.

**Should not** have `providers` attribute.

**Function:** Some common custom, third-party component definitions, reducing the import of business modules.

------------

### Business module

The business module should include a business definition module and a routing module.

**Should** import module:

+ `SharedModule`
+ Corresponding routing module

**Should not**:

+ Export any component
+ Try not to use the `providers` attribute

**Route module**

**Should** include only the `import`, `exports` modules of the route.
