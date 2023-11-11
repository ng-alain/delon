import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { insertImport, addSymbolToNgModuleMetadata } from '@schematics/angular/utility/ast-utils';
import { Change, InsertChange } from '@schematics/angular/utility/change';

import { DEFAULT_WORKSPACE_PATH, getSourceFile, readJSON, applyChanges, logWarn, logEx } from '../../../utils';

export function autoRegisterFormWidgets(): Rule {
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
  try {
    const source = getSourceFile(tree, modulePath);
    const changes: Change[] = [];
    for (const item of list) {
      changes.push(insertImport(source, modulePath, item.symbolName, item.fileName) as InsertChange);
      changes.push(...addSymbolToNgModuleMetadata(source, modulePath, 'imports', item.symbolName));
    }
    applyChanges(tree, modulePath, changes);

    logWarn(
      context,
      `[@delon/form] Register all widgets in ${name} project, you can reduce package size by removing unnecessary parts in ${modulePath}`
    );
  } catch (ex) {
    logEx(
      context,
      `Import all @delon/form/widgets/* errors, need to manually import the required modules. ERROR: ${ex.message}`
    );
  }
}
