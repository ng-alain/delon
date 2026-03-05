import { isStandaloneSchematic } from '@angular/cdk/schematics';

import { normalize } from '@angular-devkit/core';
import { ProjectDefinition } from '@angular-devkit/core/src/workspace';
import { apply, chain, mergeWith, move, Rule, SchematicsException, Tree, url } from '@angular-devkit/schematics';

import {
  addImportToModule,
  addValueToVariable,
  getProject,
  importInStandalone,
  overwriteIfExists,
  readContent
} from '../utils';
import { PluginOptions } from './interface';

let project: ProjectDefinition;

function fixImport(options: PluginOptions): Rule {
  return async (tree: Tree): Promise<void> => {
    const basicComponentPath = normalize(`${project.sourceRoot}/app/layout/basic/basic.ts`);
    if (tree.exists(basicComponentPath)) {
      const content = readContent(tree, basicComponentPath).replace(
        `<div nz-menu style="width: 200px;">`,
        `<div nz-menu style="width: 200px;"><div nz-menu-item><header-rtl /></div>`
      );
      tree.overwrite(basicComponentPath, content);
    }

    const isStandalone = await isStandaloneSchematic(tree, options as any);
    if (isStandalone) {
      // import HeaderRTL
      importInStandalone(tree, basicComponentPath, 'HeaderRTL', './widgets/rtl');
    } else {
      // src/app/layout/layout.module.ts
      const layoutModulePath = normalize(`${project.sourceRoot}/app/layout/layout.module.ts`);
      if (tree.exists(layoutModulePath)) {
        const rtlComponentName = 'HeaderRTL';
        addImportToModule(tree, layoutModulePath, rtlComponentName, './basic/widgets/rtl');
        addValueToVariable(tree, layoutModulePath, 'HEADERCOMPONENTS', rtlComponentName);
      }
    }
  };
}

export function pluginRTL(options: PluginOptions): Rule {
  return async (tree: Tree) => {
    if (options.type !== 'add') {
      throw new SchematicsException(
        `Sorry, the plug-in does not support hot swap, if you need to remove it, please handle it manually`
      );
    }

    const res = await getProject(tree, options.project);
    project = res.project;
    if (options.project == null) options.project = res.name;

    return chain([
      mergeWith(apply(url('./files/rtl'), [move(`${project.sourceRoot}/app`), overwriteIfExists(tree)])),
      fixImport(options)
    ]);
  };
}
