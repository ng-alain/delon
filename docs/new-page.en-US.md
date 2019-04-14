---
order: 10
title:
  en-US: New Page
  zh-CN: 新增页面
type: Dev
---

Angular renders a page in a component tree, the actual development is to organize the code in a module tree to make it better to resuse code. For **module granularity** depends on the requirements, ng-alain is positioned in the middle of the front-end. Therefore, it is recommended to organize your code structure from a business perspective.

NG-ALAIN provides a very rich set of Schematics templates to quickly create templates and pages that match NG-ALAIN features, as well as a variety of pluggable [plugins](/cli/plugin).

> Additionally: NG-ALAIN is a standard Angular CLI project, you can still use the default command line.

## First, the module

To create a page, you need to create a module first. If you need a system to set the relevant module, execute the command:

```bash
ng g ng-alain:module sys
```

The CLI will automatically create `sys.module.ts` and `sys-routing.module.ts` files under `src/app/routes/sys`, the former is the system setup module component definition file; the latter is the system setup module routing Configuration file. Of course, in order to make the module contact with the main module, you need to register the new business module in the `src/app/routes/routes-routing.module.ts` file:

```ts
{
  path: '',
  component: LayoutDefaultComponent,
  children: [
    { path: 'sys', loadChildren: './sys/sys.module#SysModule' }
  ]
}
```

This way, you can safely start developing business pages like menu management, logging, system configuration, etc. in the `sys` directory.

## Second, the page

Use the `ng generate` (abbreviated as: `ng g`) command to create a log list page in the `sys` directory:

```bash
ng g ng-alain:list log -m=sys
```

> See [Command Line Tools](/cli) for more information.

Finally, you can access the [Log](//localhost:4200/#/sys/log) page.

Of course, the log may be a very rich piece of information, you can add a view page opened in a modal box to display more details.

```bash
ng g ng-alain:view view -m=sys -t=log
```

`-t=log` indicates that you want to put the created file under `sys/log/view`.

## Third, IDE

In addition to the cli command line provided by ng-alain, it is recommended to use the [Visual Studio Code](https://code.visualstudio.com/) IDE, because ng-alain adds some extra features to VSCode to better help you. Development.

> Or use the [NG-ALAIN Extension Pack](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-extension-pack) suite directly.

### Code fragment

- [NG-ALAIN Snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)

### Code style

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

### Code comment

- [Document This](https://marketplace.visualstudio.com/items?itemName=joelday.docthis)

### Class style smart reminder

ng-alain has a lot of built-in toolkit styles ([API](/theme/tools)), and the following plugins can be installed directly into the HTML template.

- [NG-ALAIN Snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)

### Other

- [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
