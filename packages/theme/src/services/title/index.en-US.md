---
order: 4
title: Title Service
type: Service
---

Used to set page title, generally listen for route changed and refresh title, for example: [app.component.ts](https://github.com/cipchk/ng-alain/blob/master/src/app/app.component.ts#L54); The default data from `MenuService`.

**Suggest:** Set the `prefix` or `suffix` value via Angular startup service ([startup.service.ts](https://github.com/cipchk/ng-alain/blob/master/src/app/core/startup/startup.service.ts)).

## Orders

Get the `title` value according to the following order:

1. Routing configuration `{ data: { title: 'page name', titleI18n: 'page-name' } }
2. Parse the menu data based on the current URL
3. Get `h1` content in page `alain-default__content-title` or `page-header__title`
4. Default title
