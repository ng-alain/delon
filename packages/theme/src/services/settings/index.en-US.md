---
order: 1
title: SettingsService
subtitle: Project configuration
type: Service
---

Project config data, includes [App](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/settings/interface.ts#L1), [Layout](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/settings/interface.ts#L15), [User](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/settings/interface.ts#L8), three data types And store persistence in `localStorage` (Please refer to [#1737](https://github.com/ng-alain/ng-alain/issues/1737) to switch to `sessionStorage`).

**Suggest:** Call the `setApp()`, `setUser()` methods to restore project config data, via Angular startup service ([startup.service.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts)).

## API

### SettingsService

| Name | Type | Return Value | Description |
|------|------|--------------|-------------|
| `layout` | `property` | `Layout` | Data of layout |
| `app` | `property` | `App` | Data of app |
| `user` | `property` | `User` | Data of User |
| `notify` | `property` | `Observable<SettingsNotify>` | Notify when layout, app, user information changes |
| `setLayout(name: string, value: any)` | `method` | `boolean` | Set property value of layout |
| `setApp(value: App)` | `method` | `boolean` | Set app data |
| `setUser(value: User)` | `method` | `boolean` | Set user data |

### App

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[name]` | Name for app | `string` | - |
| `[description]` | Description for app | `string` | - |

### User

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[name]` | Name for current user | `string` | - |
| `[avatar]` | Avatar for current user | `string` | - |
| `[email]` | Email for current user | `string` | - |

### Layout

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[collapsed]` | Whether to fold menu | `boolean` | - |
| `[lang]` | Current language | `string` | - |
| `[colorWeak]` | Color weak | `boolean` | `false` |

## FAQ

**How to change the local storage key name?**

Support add the configuration of `ALAIN_SETTING_KEYS` via the `global-config.module.ts` global configuration file, for example:

```diff
 const alainProvides = [
  { provide: ALAIN_CONFIG, useValue: alainConfig },
+ {
+   provide: ALAIN_SETTING_KEYS,
+   useValue: {
+     layout: 'new-layout',
+     user: 'new-user',
+     app: 'new-app',
+   },
+ },
];
```
