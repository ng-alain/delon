import { normalize } from '@angular-devkit/core';
import { ProjectDefinition } from '@angular-devkit/core/src/workspace';
import { apply, chain, mergeWith, move, Rule, SchematicsException, Tree, url } from '@angular-devkit/schematics';
import { addImportToModule, addValueToVariable, getProject, overwriteIfExists, readContent } from '../utils';
import { PluginOptions } from './interface';

let project: ProjectDefinition;

function fixImport(): Rule {
  return (tree: Tree) => {
    const basicComponentPath = normalize(`${project.sourceRoot}/app/layout/basic/basic.component.ts`);
    if (tree.exists(basicComponentPath)) {
      const content = readContent(tree, basicComponentPath).replace(
        `<div nz-menu style="width: 200px;">`,
        `<div nz-menu style="width: 200px;"><div nz-menu-item><header-rtl></header-rtl></div>`,
      );
      tree.overwrite(basicComponentPath, content);
    }

    // src/app/layout/layout.module.ts
    const layoutModulePath = normalize(`${project.sourceRoot}/app/layout/layout.module.ts`);
    if (tree.exists(layoutModulePath)) {
      const rtlComponentName = 'HeaderRTLComponent';
      addImportToModule(tree, layoutModulePath, rtlComponentName, './basic/widgets/rtl.component');
      addValueToVariable(tree, layoutModulePath, 'HEADERCOMPONENTS', rtlComponentName);
    }

    // src/app/app.module.ts
    const appModulePath = normalize(`${project.sourceRoot}/app/app.module.ts`);
    if (tree.exists(appModulePath)) {
      const bidiModuleName = 'BidiModule';
      addImportToModule(tree, appModulePath, bidiModuleName, '@angular/cdk/bidi');
      addValueToVariable(tree, appModulePath, 'GLOBAL_THIRD_MODULES', bidiModuleName);
    }

    return tree;
  };
}

export function pluginRTL(options: PluginOptions): Rule {
  return async (tree: Tree) => {
    if (options.type !== 'add') {
      throw new SchematicsException(`Sorry, the plug-in does not support hot swap, if you need to remove it, please handle it manually`);
    }

    project = (await getProject(tree, options.project)).project;

    return chain([mergeWith(apply(url('./files/rtl'), [move(`${project.sourceRoot}/app`), overwriteIfExists(tree)])), fixImport()]);
  };
}
