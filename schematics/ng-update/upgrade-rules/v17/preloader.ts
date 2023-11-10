import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { DEFAULT_WORKSPACE_PATH, logWarn, readJSON } from '../../../utils';

export function updatePreloader(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    addESLintIgnore(tree);

    const angularJson = readJSON(tree, DEFAULT_WORKSPACE_PATH);
    const projectNames = Object.keys(angularJson.projects);
    for (const name of projectNames) {
      run(tree, name, angularJson.projects[name].sourceRoot, context);
    }
  };
}

function addESLintIgnore(tree: Tree): void {
  const filePath = '/.eslintignore';
  if (!tree.exists(filePath)) return;
  const content = tree.readText(filePath);
  tree.overwrite(filePath, `${content}\n**/src/index.html`);
}

function run(tree: Tree, name: string, sourceRoot: string, context: SchematicContext): void {
  // main.ts
  const mainPath = `${sourceRoot}/main.ts`;
  if (!tree.exists(mainPath)) return;

  let mainContent = tree.readText(mainPath);
  ['preloaderFinished();'].forEach(item => {
    if (mainContent.includes(item)) mainContent = mainContent.replace(item, '');
  });
  tree.overwrite(mainPath, mainContent);

  // app
  const appPath = `${sourceRoot}/app/app.component.ts`;
  if (!tree.exists(appPath)) return;
  const appContent = tree.readText(appPath);
  const appContentLines = appContent.split('\n');
  const importIndex = appContentLines.findIndex(line => line.includes(', VERSION as VERSION_ALAIN'));
  const eventIndex = appContentLines.findIndex(line => line.includes('this.router.events.subscribe('));
  const eventEndIndex = appContentLines.findIndex(line => line.includes('if (ev instanceof NavigationEnd) {'));
  if (importIndex === -1 || eventIndex === -1 || eventEndIndex === -1) return;

  appContentLines[importIndex] = appContentLines[importIndex].replace(
    ', VERSION as VERSION_ALAIN',
    ', VERSION as VERSION_ALAIN, stepPreloader'
  );
  appContentLines.splice(eventIndex, 0, 'const done = stepPreloader();');
  appContentLines.splice(eventEndIndex + 2, 0, 'done();');

  tree.overwrite(appPath, appContentLines.join('\n'));

  logWarn(context, `Upgrade preloader in ${name} project`);
}
