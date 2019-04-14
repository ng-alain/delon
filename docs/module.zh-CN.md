---
order: 30
title:
  en-US: Module Guidelines
  zh-CN: 模块注册指导原则
type: Other
---

一直以来 `AppModule`、`CoreModule`、`SharedModule` 模块使用没有很明确的规范，很容易让产生乱用。Angular模块目标是为了使组件、指令、服务和管道功能块更内聚，并每一个功能区域形成独立的业务领域或实用工具的集合。

## 1) 分类说明

------------

### AppModule

根模块，用于引导 Angular 启动；它非常适合导入一些需要在整个应用到处需要的模块，例如：主题系统、用户主认证模块、权限模块等模块，以及一些全局性HTTP拦截器、国际化服务等。

### CoreModule

核心模块只会被导入一次，它等同 `AppModule`，但我们更应该把它当成一个**纯服务类模块**，例如：消息、数据访问等。

### SharedModule

我们叫它共享模块；它不应该出现 `providers`，因为 `ShareModule` 会在所有业务模块中被导入，这会导致服务被覆盖。

## 2) 建议

------------

### AppModule

**应** 导入模块：

+ Angular 模块：`BrowserModule`、`BrowserAnimationsModule`、`HttpClientModule`
+ `AlainThemeModule` 主题系统
+ `DelonMockModule` Mock数据
+ `AlainAuthModule` 用户认证模块
+ `AlainACLModule` 权限模块
+ 国际化模块

**应** 包含服务：

+ Angular 国际化
+ HTTP 拦截器
+ Angular 启动服务
+ `ng-zorro-antd` 基础组件服务
+ `@delon/abc` 业务组件服务

**作用：** 贯穿整个应用的定义。

------------

### CoreModule

**应** 仅只留 `providers` 属性。

**作用：**  一些通用服务，例如：用户消息、HTTP数据访问。

------------

### ShareModule

**应** 包含定义：

+ 应用通用自定义业务组件

**应** 导入模块：

+ Angular 通用模块：`CommonModule`、`FormsModule`、`RouterModule`、`ReactiveFormsModule`
+ `ng-zorro-antd` 基础组件模块
+ `@delon/abc` 业务组件模块
+ 第三方通用依赖组件模块

**应** 导出所有包含的模块。

**不应** 有 `providers` 属性。

**作用：**  一些通用自定义、第三方组件定义，减少业务模块的导入。

------------

### 业务模块

业务模块应该包括业务定义模块和路由模块。

**模块**

**应** 导入模块：

+ `SharedModule`
+ 对应的路由模块

**不应**：

+ 导出任何组件
+ 尽可能不要使用 `providers` 属性

**路由模块**

**应** 只包括路由的 `import`、`exports` 模块。
