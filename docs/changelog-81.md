---
order: 1000
title: 1.0.x升级指引
type: Other
---

## 写在前面

`1.0.x` 主要是对 ng-zorro-antd 0.7.0 的同步升级，由于 zorro 基础组件的api有比较大的变动，因此本文不会叙述关于 zorro 如果升级的问题。

`1.0.x` 主要的变化是 `@delon/*` 系列业务组件的升级，其中这一部分并没有太多组件API的变动。反而尽可能在做一些减法，其主要包括：

- 移除十种主题色，改由动态[自定义主题](/theme)
- 移除 `forRoot()` 参数配置项，由 `provider` 统一配置，更易交付
- `@delon/abc` 部分组件名的修改，这一部分可以直接搜索替换完成
- `ng-zorro-antd-extra` 不再维护，指引后面有变动细节
- `ng-tree-antd` 不再维护，使用 `nz-tree`
- `ng-clipboard-antd` 不再维护，使用 `@delon/util` 的 `copy` 方法

**HTML模板升级工具**

一个简化升级成本的小[工具](/6to7)，以下所有结尾带有【_6to7_】表示在[HTML模板升级工具](/6to7)可被直接替换。同时支持 zorro 一些基础组件，包括：按钮、表单、布局、表格。

**nz-schema-form**

使用 `@delon/form` 替代。

## 脚手架

- Module
  - 改变 delon.module.ts、shared.module.ts 的使用方式，不再单独导入模块因为cli 在进行 Tree Shaking 时可以自动排除未使用过的模块
- 样式
  - 改变 styles.less 的使用方式
  - 移除 `font-awesome`、`simple-line-icons` 样式
- 其它
  - [路由复用](/components/reuse-tab)需要额外注册 `RouteReuseStrategy`

### reuse-tab

- 右击菜单：当按下键盘 `ctrl` 时会强制移除不可关闭项

### pro-header

- `pro-header` 组件名变更为 `page-header` _6to7_
- 内容无须指定 `&lt;ng-tempatel #content>` _6to7_

### global-footer

- `copyright` 无须指定 `&lt;ng-tempatel #copyright>` _6to7_

### Chart

- 所有组件名增加 `g2-` 开头 _6to7_
- `chart-card` 替换成 `g2-card` _6to7_

### notice-icon

- 移除 `dot` 属性
- 增加 `NoticeItem.clearText` 清空文本
- 增加 `NoticeIconList.read` 表示项是否已读状态

### simple-table

- 移除已过期 `url`
- 修改 `pageSizeSelectorValues` 为 `pageSizeOptions`
- 增加 `showTotal` 支持string，默认为：`共 {{total}} 条`，支持三个参数模块 total、range[0]、range[1]
- 增加 `showPagination` 是否显示分页器
- 增加 `noResult` 无数据时显示内容
- 增加 `loadingDelay` 延迟显示加载效果的时间（防止闪烁）
- 增加 `header` 表格标题
- 增加 `load(pi = 1, extraParams?: any)` 方法允许直接传递 `extraParams` 值
- 增加 `reset(extraParams?: any)` 方法允许直接传递 `extraParams` 值
- 增加 `expand` 可展开，当数据源中包括 `expand` 表示展开状态
- 列描述
	- 增加 `type: link`、`click` 链接
	- 增加 `default` 当不存在数据时以默认值替代
	- 增加 `fixed: left | right` 固定左右列
	- 增加 `renderTitle` 自定义渲染标题
    - 按钮组 `SimpleTableButton`
        - 增加 `if` 自定义条件表达式
        - 修改 `click` 中 `type=modal` 只会在当有传回值时才会触发回调

## @delon/auth

- 不再支持 `forRoot()` 参数变更，细节见 [用户认证](/docs/auth)
- `AuthOptions` 换成 `DelonAuthConfig`
    - `ignores` 只支持正则表达式，无须受限于cli的BUG而使用字符串替代

## @delon/cache

- `expire` 统一单位为秒，并修改为 `number` 类型

## ng-zorro-antd-extra 指引

### nz-list

- `&lt;ng-template #item>` 需指定 `[nzRenderItem]="item"` _6to7_
- `&lt;ng-template #loadMore>` 需指定 `[nzLoadMore]="loadMore"` _6to7_
- `&lt;ng-template #pagination>` 需指定 `[nzPagination]="pagination"` _6to7_
- `nz-list-item`
    - `nz-list-item-action` 替换成 `&lt;ng-template #op1>` 并指定 `[nzActions]="[op1]"` 属性**数组**值

### nz-cart

- `&lt;ng-template #extra>` 需指定 `[nzExtra]="extra"` _6to7_
- `&lt;ng-template #cover>` 需指定 `[nzCover]="cover"` _6to7_
- 移除 `&lt;ng-template #body>` 无须指定 _6to7_
- 无 `nz-card-tab` 须自行完整 `nz-tabset` 见官网
- `nzNoPadding` 替换 `class="ant-card__body-nopadding"`

### nz-icon

- 移除，使用 `&lt;i class="anticon anticon-step-backward"></i>` 替代 _6to7_

### nz-divider

- `nzTitle` 替换 `nzText` _6to7_
