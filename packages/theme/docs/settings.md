---
order: 1
title:
  en-US: Settings Service
  zh-CN: 项目配置项服务
type: Service
---

项目配置项，包含应用[App](https://github.com/cipchk/delon/blob/master/packages/theme/services/settings/interface.ts#L3)、布局[Layout](https://github.com/cipchk/delon/blob/master/packages/theme/services/settings/interface.ts#L19)、用户信息[User](https://github.com/cipchk/delon/blob/master/packages/theme/services/settings/interface.ts#L10)三种类型。

**建议：** 在 Angular 启动服务（[startup.service.ts](https://github.com/cipchk/ng-alain/blob/master/src/app/core/startup/startup.service.ts)）从远程获取到应用、用户数据后，调用 `setApp()`、`setUser()` 方法。
