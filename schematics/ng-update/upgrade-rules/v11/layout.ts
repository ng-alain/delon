import { normalize } from '@angular-devkit/core';
import { ProjectDefinition } from '@angular-devkit/core/src/workspace';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { logInfo, logStart, readContent } from '../../../utils';

let project: ProjectDefinition;
let tree: Tree;
let context: SchematicContext;

function upgradeStylePath(): void {
  const stylesLessPath = normalize(`${project.sourceRoot}/styles.less`);
  if (!tree.exists(stylesLessPath)) {
    return;
  }

  // 更新样式引入路径
  const stylesLessContent = readContent(tree, stylesLessPath)
    .replace(`~@delon/theme/layout/default/index`, `~@delon/theme/layout-default/style/index`)
    .replace(`~@delon/theme/layout/fullscreen/index`, `~@delon/theme/layout-blank/style/index`);
  tree.overwrite(stylesLessPath, stylesLessContent);
  logInfo(context, `Update style import path`);

  // 修改 fullscreen 的样式
  const fullscreenComponentPath = normalize(`${project.sourceRoot}/app/layout/fullscreen/fullscreen.component.ts`);
  if (!tree.exists(fullscreenComponentPath)) {
    return;
  }
  const fullscreenComponentContent = readContent(tree, fullscreenComponentPath).replace(
    `alain-fullscreen`,
    `alain-blank`
  );
  tree.overwrite(fullscreenComponentPath, fullscreenComponentContent);
  logInfo(context, `Update alain-fullscreen to alain-blank`);
}

export function fixLayout(p: ProjectDefinition): Rule {
  return (t: Tree, c: SchematicContext) => {
    project = p;
    tree = t;
    context = c;

    logStart(context, `Use @delon/theme/layout instead`);

    upgradeStylePath();
  };
}
