---
order: 1
title: Settings Service
type: Service
---

Project config data, includes [App](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/settings/interface.ts#L1), [Layout](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/settings/interface.ts#L15), [User](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/settings/interface.ts#L8), three data types And store persistence in `localStorage`.

**Suggest:** Call the `setApp()`, `setUser()` methods to restore project config data, via Angular startup service ([startup.service.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts)).

## API

| Name                                  | Type       | Return Value                 | Description           |
| ------------------------------------- | ---------- | ---------------------------- | -------------- |
| `layout`                              | `property` | `Layout`                     | Data of layout       |
| `app`                                 | `property` | `App`                        | Data of app       |
| `user`                                | `property` | `User`                       | Data of User       |
| `notify`                              | `property` | `Observable<SettingsNotify>` | Changed notification       |
| `setLayout(name: string, value: any)` | `method`   | `boolean`                    | Set property value of layout |
| `setApp(value: App)`                  | `method`   | `boolean`                    | Set app data   |
| `setUser(value: User)`                | `method`   | `boolean`                    | Set user data   |

