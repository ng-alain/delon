---
order: 10
title: ng-add
subtitle: Create scaffold
type: Documents
---

## Overview

```bash
ng add ng-alain@next <project name>
```

## Options

| Name          | Default | Description                                                             |
| ------------- | ------- | ----------------------------------------------------------------------- |
| `--form`      | `true`  | Whether include dynamic form                                            |
| `--mock`      | `true`  | Whether include mock                                                    |
| `--hmr`       | `true`  | Whether include HMR                                                     |
| `--codeStyle` | `false` | Whether include code style                                              |
| `--i18n`      | `false` | Whether include i18n                                                    |
| `--g2`        | `false` | Whether include g2                                                      |
| `--npm`       | `false` | Whether include `npm` taobao mirror configuration file (Chinese users)  |
| `--yarn`      | `false` | Whether include `yarn` taobao mirror configuration file (Chinese users) |

For example, generate a project with i18n:

```bash
ng add ng-alain@next demo --i18n
```

See more [plugins](/cli/plugin).
