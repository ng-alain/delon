import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { DEFAULT_WORKSPACE_PATH, logInfo, readJSON } from '../../../utils';

export function updatePreloader(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    addESLintIgnore(tree);

    const angularJson = readJSON(tree, DEFAULT_WORKSPACE_PATH);
    const projectNames = Object.keys(angularJson.projects);
    for (const name of projectNames) {
      const sourceRoot = angularJson.projects[name].sourceRoot;
      fixIndexHtml(tree, name, sourceRoot, context);
      run(tree, name, sourceRoot, context);
    }
  };
}

function addESLintIgnore(tree: Tree): void {
  const filePath = '/.eslintignore';
  if (!tree.exists(filePath)) return;
  const content = tree.readText(filePath);
  if (!content.includes('**/src/index.html')) {
    tree.overwrite(filePath, `${content}\n**/src/index.html`);
  }
}

function fixIndexHtml(tree: Tree, _: string, sourceRoot: string, __: SchematicContext): void {
  const indexPath = `${sourceRoot}/index.html`;
  if (!tree.exists(indexPath)) return;

  let indexContent = tree.readText(indexPath);

  const selfClose = '<app-root />';
  if (!indexContent.includes(selfClose)) return;

  tree.overwrite(indexPath, indexContent.replace(selfClose, '<app-root></app-root>'));
}

function run(tree: Tree, name: string, sourceRoot: string, context: SchematicContext): void {
  // main.ts
  const mainPath = `${sourceRoot}/main.ts`;
  if (!tree.exists(mainPath)) return;

  let mainContent = tree.readText(mainPath);
  [`import { preloaderFinished } from '@delon/theme';`, 'preloaderFinished();'].forEach(item => {
    if (mainContent.includes(item)) mainContent = mainContent.replace(item, '');
  });
  tree.overwrite(mainPath, mainContent);

  // app
  const appPath = `${sourceRoot}/app/app.component.ts`;
  if (!tree.exists(appPath)) return;
  const appContent = tree.readText(appPath);
  if (appContent.includes(', stepPreloader')) return;

  const appContentLines = appContent.split('\n');
  const importIndex = appContentLines.findIndex(line => line.includes(', VERSION as VERSION_ALAIN'));
  const addIndex = appContentLines.findIndex(line => line.includes('export class AppComponent'));
  const callDoneIndex = appContentLines.findIndex(line => line.includes('if (ev instanceof NavigationEnd) {'));
  if (importIndex === -1 || addIndex === -1 || callDoneIndex === -1) return;

  appContentLines[importIndex] = appContentLines[importIndex].replace(
    ', VERSION as VERSION_ALAIN',
    ', VERSION as VERSION_ALAIN, stepPreloader'
  );
  appContentLines.splice(addIndex + 1, 0, 'private donePreloader = stepPreloader();');
  appContentLines.splice(callDoneIndex + 2, 0, 'this.donePreloader();');

  tree.overwrite(appPath, appContentLines.join('\n'));

  logInfo(context, `Upgrade preloader in ${name} project`);
}
