---
order: 4
title: TitleService
subtitle: Title Service
type: Service
---

Used to set page title, generally listen for route changed and refresh title, for example: [app.component.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/app.component.ts#L54); The default data from `MenuService`.

**Suggest:** Set the `prefix` or `suffix` value via Angular startup service ([startup.service.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service.ts)).

## Orders

Get the `title` value according to the following order:

1. Routing configuration `{ data: { title: 'page name', titleI18n: 'page-name' } }
2. Parse the menu data based on the current URL
3. Get `h1` content in page `alain-default__content-title` or `page-header__title`
4. Default title

## API

| Name                                           | Type       | Description                     |
| ---------------------------------------------- | ---------- | ------------------------------- |
| `default`                                      | `property` | Default title of document title |
| `separator`                                    | `property` | Separator                       |
| `prefix`                                       | `property` | Prefix of document title        |
| `suffix`                                       | `property` | Suffix of document title        |
| `reverse`                                      | `property` | Whether to reverse              |
| `setTitle(title?: string | string[])`          | `method`   | Set document title              |
| `setTitleByI18n(key: string, params?: Object)` | `method`   | Set i18n document title         |
