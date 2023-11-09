import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { insertImport, addSymbolToNgModuleMetadata } from '@schematics/angular/utility/ast-utils';
import { Change, InsertChange } from '@schematics/angular/utility/change';
import * as colors from 'ansi-colors';

import { DEFAULT_WORKSPACE_PATH, getSourceFile, logStart, readJSON, applyChanges } from '../../../utils';
import { UpgradeMainVersions } from '../../../utils/versions';

function qr(): Rule {
  return (_: Tree, context: SchematicContext) => {
    context.logger.info(
      colors.yellow(
        ` [qr] Will be removed in 18.0.0, please use [nz-qrcode](https://ng.ant.design/components/qr-code) instead.`
      )
    );
  };
}

function autoRegisterFormWidgets(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const angularJson = readJSON(tree, DEFAULT_WORKSPACE_PATH);
    const projectNames = Object.keys(angularJson.projects);
    for (const name of projectNames) {
      autoRegisterFormWidgetsRun(tree, name, angularJson.projects[name].sourceRoot, context);
    }
  };
}

function autoRegisterFormWidgetsRun(tree: Tree, name: string, sourceRoot: string, context: SchematicContext): void {
  const modulePath = `${sourceRoot}/app/shared/json-schema/json-schema.module.ts`;
  if (!tree.exists(modulePath)) return;

  const list = [
    { symbolName: 'AutoCompleteWidgetModule', fileName: '@delon/form/widgets/autocomplete' },
    { symbolName: 'CascaderWidgetModule', fileName: '@delon/form/widgets/cascader' },
    { symbolName: 'MentionWidgetModule', fileName: '@delon/form/widgets/mention' },
    { symbolName: 'RateWidgetModule', fileName: '@delon/form/widgets/rate' },
    { symbolName: 'SliderWidgetModule', fileName: '@delon/form/widgets/slider' },
    { symbolName: 'TagWidgetModule', fileName: '@delon/form/widgets/tag' },
    { symbolName: 'TimeWidgetModule', fileName: '@delon/form/widgets/time' },
    { symbolName: 'TransferWidgetModule', fileName: '@delon/form/widgets/transfer' },
    { symbolName: 'TreeSelectWidgetModule', fileName: '@delon/form/widgets/tree-select' },
    { symbolName: 'UploadWidgetModule', fileName: '@delon/form/widgets/upload' }
  ];
  const source = getSourceFile(tree, modulePath);
  const changes: Change[] = [];
  for (const item of list) {
    changes.push(insertImport(source, modulePath, item.symbolName, item.fileName) as InsertChange);
    changes.push(...addSymbolToNgModuleMetadata(source, modulePath, 'imports', item.symbolName));
  }
  applyChanges(tree, modulePath, changes);

  context.logger.info(
    colors.yellow(
      ` [@delon/form] Register all widgets in ${name} project, you can reduce package size by removing unnecessary parts`
    )
  );
}

function finished(): Rule {
  return (_tree: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());

    context.logger.info(
      colors.green(
        `  ✓ Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/2390`
      )
    );
  };
}

export function v17Rule(): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    logStart(context, `Upgrade @delon/* version number`);
    UpgradeMainVersions(tree);
    return chain([autoRegisterFormWidgets(), qr(), finished()]);
  };
}
