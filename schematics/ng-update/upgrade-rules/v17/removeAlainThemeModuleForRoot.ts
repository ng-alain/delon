import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { DEFAULT_WORKSPACE_PATH, logInfo, readJSON } from '../../../utils';

export function removeAlainThemeModuleForRoot(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const angularJson = readJSON(tree, DEFAULT_WORKSPACE_PATH);
    const projectNames = Object.keys(angularJson.projects);
    for (const name of projectNames) {
      removeForRoot(tree, name, angularJson.projects[name].sourceRoot, context);
      removeForChild(tree, name, angularJson.projects[name].sourceRoot, context);
    }
  };
}

function removeForRoot(tree: Tree, name: string, sourceRoot: string, context: SchematicContext): void {
  const modulePath = `${sourceRoot}/app/global-config.module.ts`;
  if (!tree.exists(modulePath)) return;

  const forRoot = 'AlainThemeModule.forRoot()';
  const content = tree.readText(modulePath).replace(`${forRoot},`, '');
  tree.overwrite(modulePath, content);

  logInfo(context, `Remove ${forRoot} in ${name} project`);
}

function removeForChild(tree: Tree, name: string, _: string, context: SchematicContext): void {
  const forChild = 'AlainThemeModule.forChild()';

  tree.visit((path, entry) => {
    if (!entry || !path.endsWith('.ts')) return;

    const content = tree.readText(path);
    if (!content.includes(forChild)) return;

    tree.overwrite(path, content.replace(forChild, 'AlainThemeModule'));
  });

  logInfo(context, `Remove ${forChild} in ${name} project`);
}
