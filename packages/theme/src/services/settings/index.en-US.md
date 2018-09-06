---
order: 1
title: Settings Service
type: Service
---

Project config data, includes [App](https://github.com/cipchk/delon/blob/master/packages/theme/src/services/settings/interface.ts#L1), [Layout](https://github.com/cipchk/delon/blob/master/packages/theme/src/services/settings/interface.ts#L15), [User](https://github.com/cipchk/delon/blob/master/packages/theme/src/services/settings/interface.ts#L8), three data types.

**Suggest:** Call the `setApp()`, `setUser()` methods to restore project config data, via Angular startup service ([startup.service.ts](https://github.com/cipchk/ng-alain/blob/master/src/app/core/startup/startup.service.ts)).
