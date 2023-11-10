import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { DEFAULT_WORKSPACE_PATH, logInfo, readJSON } from '../../../utils';

export function replaceProvideAlainConfig(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const angularJson = readJSON(tree, DEFAULT_WORKSPACE_PATH);
    const projectNames = Object.keys(angularJson.projects);
    for (const name of projectNames) {
      run(tree, name, angularJson.projects[name].sourceRoot, context);
    }
  };
}

function run(tree: Tree, name: string, sourceRoot: string, context: SchematicContext): void {
  const filePath = `${sourceRoot}/app/global-config.module.ts`;
  if (!tree.exists(filePath)) return;

  const text = '{ provide: ALAIN_CONFIG, useValue: alainConfig }';
  const content = tree.readText(filePath).replace(text, 'provideAlainConfig(alainConfig)');
  tree.overwrite(filePath, content);

  logInfo(context, `Use provideAlainConfig instead of ALAIN_CONFIG in ${name} project`);
}
