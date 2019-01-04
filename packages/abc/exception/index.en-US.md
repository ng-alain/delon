---
type: Layout
title: exception
subtitle: Exception
cols: 1
module: ExceptionModule
---

Exceptions page is used to provide feedback on specific abnormal state. Usually, it contains an explanation of the error status, and provides users with suggestions or operations, to prevent users from feeling lost and confused.

## API

### exception

Property | Description | Type | Default
----|------|-----|------
`[type]` | type of exception, the corresponding default `title`, `desc`, `img` will be given if set, which can be overridden by explicit setting of `title`, `desc`, `img` | `'403','404','500'` | -
`[title]` | title | `string` | -
`[desc]` | supplementary description | `string` | -
`[img]` | the url of background image | `string` | -
`ng-content` | suggested operations, a default 'Home' link will show if not set | `TemplateRef<void>` | -
