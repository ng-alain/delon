import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { DEFAULT_WORKSPACE_PATH, logInfo, readJSON } from '../../../utils';

export function removeForRoot(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const angularJson = readJSON(tree, DEFAULT_WORKSPACE_PATH);
    const projectNames = Object.keys(angularJson.projects);
    for (const name of projectNames) {
      const sourceRoot = angularJson.projects[name].sourceRoot;
      removeAlainThemeForRoot(tree, name, sourceRoot, context);
      removeAlainThemeForChild(tree, name, sourceRoot, context);
      removeDelonACLModuleForRoot(tree, name, sourceRoot, context);
    }
  };
}

function removeAlainThemeForRoot(tree: Tree, name: string, sourceRoot: string, context: SchematicContext): void {
  const modulePath = `${sourceRoot}/app/global-config.module.ts`;
  if (!tree.exists(modulePath)) return;

  const forRoot = 'AlainThemeModule.forRoot()';
  const content = tree.readText(modulePath);
  tree.overwrite(modulePath, content.replace(/AlainThemeModule\.forRoot\(\),?/g, ''));

  logInfo(context, `Remove ${forRoot} in ${name} project`);
}

function removeAlainThemeForChild(tree: Tree, name: string, _: string, context: SchematicContext): void {
  const forChild = 'AlainThemeModule.forChild()';

  tree.visit((path, entry) => {
    if (!entry || !path.endsWith('.ts')) return;

    const content = tree.readText(path);
    if (!content.includes(forChild)) return;

    tree.overwrite(path, content.replace(forChild, 'AlainThemeModule'));
  });

  logInfo(context, `Remove ${forChild} in ${name} project`);
}

function removeDelonACLModuleForRoot(tree: Tree, name: string, sourceRoot: string, context: SchematicContext): void {
  const modulePath = `${sourceRoot}/app/global-config.module.ts`;
  if (!tree.exists(modulePath)) return;

  const forRoot = 'DelonACLModule.forRoot()';
  const content = tree.readText(modulePath);
  tree.overwrite(modulePath, content.replace(/DelonACLModule\.forRoot\(\),?/g, ''));

  logInfo(context, `Remove ${forRoot} in ${name} project`);
}
