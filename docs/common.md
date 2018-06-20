---
order: 50
title:
  en-US: Common services & pipes
  zh-CN: 通用服务和Pipe管道
type: Dev
---

ng-alain 提供若干常见的服务与Pipe管道，以便减少基础建设代码。

## 服务

### MenuService

菜单服务的数据格式是一个 [Menu](https://github.com/cipchk/delon/blob/master/packages/theme/services/menu/interface.ts) 数组，其中 `text` 属性表示菜单文本为必填项，而且本身并不受外部组件的影响（例如[sidebar-nav](/components/sidebar-nav)组件），这是因为菜单是贯穿整个项目必不可少的组成部分，而将其独立成一个服务可以更有效被使用，例如：动态生成导航、标题等。

**建议：** 在 Angular 启动服务（[startup.service.ts](//github.com/cipchk/ng-alain/blob/master/src/app/core/startup/startup.service.ts)）从远程获取到菜单数据后，调用 `add()` 方法。

**API 接口**

| 接口名 | 参数 | 描述 |
| ----- | --- | ---- |
| `add` | `items: Menu[]` | 设置菜单数据 |
| `clear` | - | 清空菜单数据 |
| `resume` | `callback: Funection` | 重置菜单，可能I18N、用户权限变动时需要调用刷新 |
| `openedByUrl` | `url: string` | 根据URL设置菜单 `_open` 属性（`_open`用于是否展开菜单的条件值） |
| `getPathByUrl` | `url: string` | 根据url获取菜单列表 |

### ScrollService

滚动条控制，允许滚动至指定元素所处位置。

| 接口名 | 参数 | 描述 |
| ----- | --- | ---- |
| `scrollToElement` | `element?: Element, topOffset = 0` | 设置滚动条至指定元素 |
| `scrollToTop` | `topOffset = 0` | 滚动至顶部 |

### SettingsService

项目配置项，包含应用[App](https://github.com/cipchk/delon/blob/master/packages/theme/services/settings/interface.ts#L3)、布局[Layout](https://github.com/cipchk/delon/blob/master/packages/theme/services/settings/interface.ts#L19)、用户信息[User](https://github.com/cipchk/delon/blob/master/packages/theme/services/settings/interface.ts#L10)三种类型。

**建议：** 在 Angular 启动服务（[startup.service.ts](//github.com/cipchk/ng-alain/blob/master/src/app/core/services/startup.service.ts)）从远程获取到应用、用户数据后，调用 `setApp()`、`setUser()` 方法。

### TitleService

用于设置页面标题，一般需要配置路由变化一起使用，例如：[app.component.ts](//github.com/cipchk/ng-alain/blob/master/src/app/app.component.ts#L26)；而标题的数据来源于 `MenuService`。

**建议：** 在 Angular 启动服务（[startup.service.ts](//github.com/cipchk/ng-alain/blob/master/src/app/core/startup/startup.service.ts)）从远程获取到应用数据后，设置 `prefix` 或 `suffix` 值来调整统一的标题前后缀。

**获取顺序**

按以下顺序指定文档 `title` 值：

- 路由配置 `{ data: { title: 'page name', titleI18n: 'page-name' } }`
- 根据当前 URL 解析菜单数据
- 页面 `content__title` 或 `pro-header` 中获取 `h1` 内容
- 默认标题名

### ThemesService

用于设置当前 ng-alain 主题颜色，默认提供 A-J 共十种颜色，除了调用 `setTheme()` 方法改变颜色系外，还要确保 [_alain-custom-variables.less](//github.com/cipchk/ng-alain/blob/master/src/styles/_alain-custom-variables.less) 中注册相应的颜色系样式。

与之相对应的还有 `ColorsService` 用于获取这些颜色系。

### ModalHelper

这是对 `NzModalService` 进一步封装，它解决一些已知问题：

- 更友好的处理回调
- 自动管理 `z-index` 值

打开一个对话框，默认会过滤一些事件的回调，因此更容易处理回调：

**create精准**

```ts
this.modalHelper.create(FormEditComponent, { i }).subscribe(res => this.load());

// 成功范例
// 1. 精准必须指定 `close(result)` 参数
this.subject.close(true);
// 2. 精准无指定时视为错误
this.subject.close();

// 关闭：
this.subject.destroy();
```

包括两个方法体 `create` & `createStatic` 分别打开普通&静态对话框。在 `NzModalService` 基础上新增若干参数。

**参数**

| 名称 | 类型 | 默认值 | 功能 |
| --- | --- | --- | --- |
| `size` | `sm,md,lg,xl,数字` | `lg` | 指定对话框大小 |
| `exact` | `boolean` | `true` | 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误 |
| `includeTabs` | `boolean` | `false` | 是否包裹标签页 |
| `modalOptions` | `ModalOptionsForService` | - | nz-modal 对话框原始参数 |

**open非精准**

```ts
this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());

// 成功范例：以下都视为成功
this.subject.close(true);
this.subject.close();

// 关闭：
this.subject.destroy();
```

包括两个方法体 `open` & `static` 分别打开普通&静态对话框。在 `NzModalService` 基础上新增若干参数，在 `NzModalService` 基础上新增了 `size` 参数，其值包括：`sm`、`lg`、`空字符串` 表示三种不同尺寸的对话框。

> 建议：尽可能采用 `create` 精准模式，非精准未来可能会逐步被替代。

## Pipe

包含了若干符合本地化且日常常用的数据渲染 Pipe，利用它们可以极大的简化一些不必要的数据渲染的问题。

### 货币 _currenty

`_currency` 货币格式化，简化原 `currency` 针对中文货币格式化问题，使用方式同 `currenty` 一样。

```html
{{data.price | _currency}}
```

输出：

```
￥4,035,173.71
```

**别忘记在根模块中注册语言环境：**

```typescript
import { registerLocaleData } from '@angular/common';
import localeZhHans from '@angular/common/locales/zh-Hans';
registerLocaleData(localeZhHans);


{ provide: LOCALE_ID, useValue: 'zh-Hans' }
```

### 日期 _date

基于 moment 日期格式化，显示更多细节参考 [momentjs](//momentjs.com/docs/#/displaying)

最大好处是 moment 支持不同种类的时间格式，例如：

+ 2017-08-24 18:08:20
+ 2017-08-24
+ 20170824
+ 1503571962333

等等。

```html
{{data.registered | _date: 'YYYY年MM月DD日'}}
```

输出：

```
2017年08月24日
```

### 可迭代 keys

`keys` 将对象数组化。

例如：

```typescript
const data = { name: 'cipchk', address: { city: 'shanghai', district: 'changning' } };
```

变成可迭代对象：

```html
<div *ngFor="let item of data | keys">{{item.key}} {{item.value | json}}</div>
```

**字典可迭代**

```typescript
const data = { 1: '正常', 2: '删除' };
```

若希望保持键名为 `number` 数字型：

```
<div *ngFor="let item of data | keys: true">{{item.key}} {{item.value | json}}</div>
```

### 徽章 yn

`yn` 将boolean类型徽章化

```html
<td [innerHTML]="enabled | yn"></td>
Output:
<td><span class="badge badge-success">是</span></td>
```
