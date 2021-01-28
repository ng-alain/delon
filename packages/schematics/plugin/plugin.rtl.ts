import { normalize } from '@angular-devkit/core';
import { apply, chain, mergeWith, move, Rule, SchematicsException, Tree, url } from '@angular-devkit/schematics';
import { addImportToModule, addValueToVariable, overwriteIfExists, readContent } from '../utils';
import { getProject, Project } from '../utils/project';
import { PluginOptions } from './interface';

let project: Project;

function fixImport(): (host: Tree) => Tree {
  return (host: Tree) => {
    const basicComponentPath = normalize(`${project.sourceRoot}/app/layout/basic/basic.component.ts`);
    if (host.exists(basicComponentPath)) {
      const content = readContent(host, basicComponentPath).replace(
        `<div nz-menu style="width: 200px;">`,
        `<div nz-menu style="width: 200px;"><div nz-menu-item><header-rtl></header-rtl></div>`,
      );
      host.overwrite(basicComponentPath, content);
    }

    // src/app/layout/layout.module.ts
    const layoutModulePath = normalize(`${project.sourceRoot}/app/layout/layout.module.ts`);
    if (host.exists(layoutModulePath)) {
      const rtlComponentName = 'HeaderRTLComponent';
      addImportToModule(host, layoutModulePath, rtlComponentName, './basic/widgets/rtl.component');
      addValueToVariable(host, layoutModulePath, 'HEADERCOMPONENTS', rtlComponentName);
    }

    // src/app/app.module.ts
    const appModulePath = normalize(`${project.sourceRoot}/app/app.module.ts`);
    if (host.exists(appModulePath)) {
      const bidiModuleName = 'BidiModule';
      addImportToModule(host, appModulePath, bidiModuleName, '@angular/cdk/bidi');
      addValueToVariable(host, appModulePath, 'GLOBAL_THIRD_MODULES', bidiModuleName);
    }

    return host;
  };
}

export function pluginRTL(options: PluginOptions): Rule {
  return (host: Tree) => {
    if (options.type !== 'add') {
      throw new SchematicsException(`Sorry, the plug-in does not support hot swap, if you need to remove it, please handle it manually`);
    }

    project = getProject(host, options.project);

    return chain([mergeWith(apply(url('./files/rtl'), [move(`${project.sourceRoot}/app`), overwriteIfExists(host)])), fixImport()]);
  };
}
