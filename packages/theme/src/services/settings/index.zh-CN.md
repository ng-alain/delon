---
order: 1
title: 项目配置项服务
type: Service
---

项目配置项，包含应用[App](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/settings/interface.ts#L1)、布局[Layout](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/settings/interface.ts#L15)、用户信息[User](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/settings/interface.ts#L8)三种数据类型，并且存储持久化在 `localStorage`。

**建议：** 在 Angular 启动服务（[startup.service.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts)）从远程获取到应用、用户数据后，调用 `setApp()`、`setUser()` 方法。

## API

| 名称                                  | 类型       | 返回值                       | 描述           |
| ------------------------------------- | ---------- | ---------------------------- | -------------- |
| `layout`                              | `property` | `Layout`                     | 布局信息       |
| `app`                                 | `property` | `App`                        | 项目信息       |
| `user`                                | `property` | `User`                       | 用户信息       |
| `notify`                              | `property` | `Observable<SettingsNotify>` | 变更通知       |
| `setLayout(name: string, value: any)` | `method`   | `boolean`                    | 设置布局属性值 |
| `setApp(value: App)`                  | `method`   | `boolean`                    | 设置项目信息   |
| `setUser(value: User)`                | `method`   | `boolean`                    | 设置用户信息   |
