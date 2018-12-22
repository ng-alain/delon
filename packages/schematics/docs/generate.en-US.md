---
order: 20
title: ng g
subtitle: Business page
type: Documents
---

## Foreword

`ng generate` (shorthand: `ng g`) is used to generate business pages. The default Angular Cli template is different from the ng-alain specification. For example, we want to include a `SharedModule` when generating a module.

ng-alain adds cool operations based on this.

## Command format

```bash
ng g ng-alain:[command name] [name] [options]
```

> ng-alain has own file structure specification, which can cause exceptions when you break this file structure.

## Module

Generate a `trade` module:

```bash
ng g ng-alain:module trade
```

Will be generated `trade.module.ts`, `trade-routing.module.ts` in the `routes/trade` directory.

The module imports `SharedModule` and some import and export specifications, and you can't destroy these variable names (like this: `COMPONENTS`, `COMPONENTS_NOROUNT`, `routes`).

## Business page

- `empty` Blank page
- `list` List page
- `edit` Edit page
- `view` View page
- `curd` List, edit, view pages

Generate a `list` list page in the `trade` directory:

```bash
ng g ng-alain:list list -m=trade
```

**Note:** `-m` must be specified because ng-alain thinks the page should be in a specific module, not a ghost.


### Cool

In general, a module might includes the same type of business page, and its file structure might like this:

```
sys
  log
    view
      view.component.ts
    edit
      edit.component.ts
    log.component.ts
  sys.module.ts
```

So when you want to generate a view page that should be under the `log` directory (could be set like `log/list`):

```bash
ng g ng-alain:view view -m=sys -t=log
```

### edit & view page

For `edit`, `view`, the default is modal render, you can use the page render:

```bash
ng g ng-alain:edit [page name] --modal=false
```

> If you receive `No provider for NzModalRef!` error, because of modal component must be opened with `nzModalService`, and does not need to register into route.

## Custom template page

In addition to the default, you can also customize the project-level business page.

For example, to create a custom edit page template, you only need to create the following directory structure in the project's root directory:

```
└── _cli-tpl
│   └── edit                                              // Your template name
│       └── __path__                                      // (name fixed value)
│           └── __name@dasherize@if-flat__                // (name fixed value)
│               ├── __name@dasherize__.component.ts       // Component class file (name fixed value)
│               ├── __name@dasherize__.component.html     // Component html file (name fixed value)
│               └── __name@dasherize__.component.spec.ts  // Component spec file (name fixed value)
└── src
```

After that, just run:

```bash
ng g ng-alain:tpl [your template name] [name] -m=trade
```

### How to write a template file

In the directory structure of the custom page, the file name begins with the `__` prefix is a variable placeholder, Cli passes some parameters and methods:

| Type     | Name            | Default   | Description                                  |
| -------- | --------------- | --------- | -------------------------------------------- |
| Variable | project         | -         | Project name                                 |
| Variable | name            | -         | Name, equivalent command line `<name>`       |
| Variable | path            | -         | Target path                                  |
| Variable | flat            | `false`   | Whether file is flat                         |
| Variable | inlineTemplate  | `false`   | Whether inline template(Fixed value `false`) |
| Variable | selector        | -         | Component `selector`                         |
| Variable | componentName   | -         | Component name                               |
| Variable | changeDetection | `Default` | Component `changeDetection` value            |
| Variable | modal           | -         | Whether to use Modal to render               |
| Method   | decamelize      | -         | Converts a camelized string into all lower case separated by underscores     |
| Method   | dasherize       | -         | Replaces underscores, spaces, or camelCase with dashes                   |
| Method   | camelize        | -         | Returns the lowerCamelCase form of a string                 |
| Method   | classify        | -         | Returns the UpperCamelCase form of a string                 |
| Method   | underscore      | -         | More general than decamelize. Returns the lower_case_and_underscored
 form of a string.     |
| Method   | capitalize      | -         | Returns the Capitalized form of a string                         |

These variables or methods can be used in templates, for example: `<%=componentName%>` for component names, `<% %>` for JavaScript code. You can refer to:

- [delon](https://github.com/ng-alain/delon/blob/master/packages/schematics/edit/files/__path__/__name%40dasherize%40if-flat__/__name%40dasherize__.component.html)
- [material2](https://github.com/angular/material2/blob/master/src/lib/schematics/dashboard/files/__path__/__name%40dasherize%40if-flat__/__name%40dasherize__.component.html)
