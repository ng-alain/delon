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

The CLI will automatically create `sys.module.ts` and `sys-routing.module.ts` files under `src/app/routes/sys`, the former is the system setup module component definition file; the latter is the system setup module routing Configuration file. 

```ts
// sys.module.ts
import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { SysRoutingModule } from './sys-routing.module';

const COMPONENTS: Type<void>[] = [];
const COMPONENTS_NOROUNT: Type<void>[] = [];

@NgModule({
  imports: [SharedModule, SysRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
})
export class SysModule {}
```

The function of the module is to import the modules we need. All NG-ZORRO, @delon/abc, @delon/chart, etc. are loaded on demand. The external components are imported wherever the current business page needs. In order to reduce these import actions, NG -ALAIN has refined two files `shared-delon.module.ts` and `shared-zorro.module.ts` to merge some modules frequently used throughout the project into a module called `SharedModule`, which is why it is necessary Import it in the business module for the first time. Note: It is not recommended to put all the components in `SharedModule`, as far as possible, put the modules that need to be used two or three times or more.

And the routing configuration module:

```ts
// sys-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SysRoutingModule {}
```

Of course, in order to make the module contact with the main module, you need to register the new business module in the `src/app/routes/routes-routing.module.ts` file:

```ts
{
  path: '',
  component: LayoutDefaultComponent,
  children: [
    { path: 'sys', loadChildren: () => import('./sys/sys.module').then(m => m.SysModule) }
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

### Class style smart reminder

ng-alain has a lot of built-in toolkit styles ([API](/theme/tools)), and the following plugins can be installed directly into the HTML template.

- [NG-ALAIN Snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)
