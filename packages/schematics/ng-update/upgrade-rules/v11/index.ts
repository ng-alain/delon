import { normalize } from '@angular-devkit/core';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { colors } from '@angular/cli/utilities/color';
import { findNode } from '@schematics/angular/utility/ast-utils';
import ts = require('typescript');
import { getSourceFile } from '../../../utils/ast';
import { readContent } from '../../../utils/file';
import {
  addPackageToPackageJson,
  getAngular,
  getPackage,
  overwriteAngular,
  overwritePackage,
  removeAllowedCommonJsDependencies,
} from '../../../utils/json';
import { VERSION } from '../../../utils/lib-versions';
import { getProjectFromWorkspace, getWorkspace, Project } from '../../../utils/project';
import mainContent from './files-tpl/main';

let project: Project;

function fixVersion(tree: Tree, context: SchematicContext): void {
  addPackageToPackageJson(
    tree,
    ['abc', 'acl', 'auth', 'cache', 'form', 'mock', 'theme', 'util', 'chart'].map(name => `@delon/${name}@${VERSION}`),
  );
  context.logger.info(`    ${colors.green('✓')} Upgrade @delon/* version number`);
}

function fixThirdVersion(tree: Tree, context: SchematicContext): void {
  // dependencies
  addPackageToPackageJson(
    tree,
    [
      // `ng-zorro-antd@^10.0.0-beta.4`,
      // `ngx-ueditor@^11.0.0`,
      `ngx-tinymce@^11.0.0`,
      `ngx-ueditor@^11.0.0`,
    ],
    'dependencies',
  );
  // dependencies
  addPackageToPackageJson(tree, [`webpack-bundle-analyzer@^4.1.0`], 'devDependencies');
  context.logger.info(`    ${colors.green('✓')} Upgrade third libs version number`);
}

function removeHmrInEnt(tree: Tree, name: string): void {
  const src = normalize(`${project.sourceRoot}/environments/${name}`);
  if (!tree.exists(src)) return;

  const source = getSourceFile(tree, src);
  const hmrNode = findNode(source, ts.SyntaxKind.Identifier, 'hmr');
  if (hmrNode == null || hmrNode.parent == null || hmrNode.parent.kind !== ts.SyntaxKind.PropertyAssignment) {
    return;
  }

  const content = readContent(tree, src);
  const prefix = content.substring(0, hmrNode.pos);
  const suffix = content.substring(hmrNode.parent.end);
  tree.overwrite(src, `${prefix}${suffix}`.replace(/,,/g, ','));
}

function fixHmr(tree: Tree, context: SchematicContext): void {
  context.logger.info(`    ${colors.green('✓')} Using built-in hmr instead of '@angularclass/hmr'`);

  // 检查是否存在 `hmr.ts` 文件作为是否已经安装 hmr 的前提条件
  const hmrTsPath = normalize(`${project.sourceRoot}/hmr.ts`);
  if (!tree.exists(hmrTsPath)) {
    context.logger.info(`      ${colors.yellow('✓')} Ingored the part migration when not found '${hmrTsPath}'`);
    return;
  }
  // 1、移除所有 `@angularclass/hmr` 的引用
  const angularJson = getAngular(tree);
  Object.keys(angularJson.projects).forEach(projectName => {
    const projectItem = angularJson.projects[projectName];
    ['build', 'serve'].forEach(typeKey => {
      delete projectItem.architect[typeKey].configurations.hmr;
    });
  });
  overwriteAngular(tree, angularJson);
  context.logger.info(`      ${colors.green('✓')} Remove '@angularclass/hmr'`);

  // 2、移除 angular.json 里面的 hmr 配置项，以及 environments 下相关的 hmr 配置
  removeAllowedCommonJsDependencies(tree, '@angularclass/hmr');
  // 移除 `environments.ts` 的 `hmr: false`
  removeHmrInEnt(tree, 'environment.prod.ts');
  removeHmrInEnt(tree, 'environment.ts');
  // 删除 `environment.hmr.ts`
  const environmentHmrTsPath = normalize(`${project.sourceRoot}/environments/environment.hmr.ts`);
  if (tree.exists(environmentHmrTsPath)) {
    tree.delete(environmentHmrTsPath);
  }
  context.logger.info(`    ${colors.green('✓')} Removed 'environments.hmr.ts' file`);

  // 3、修改 package.json 命令行 `-c=hmr` 为 `--hmr`
  const packageJson = getPackage(tree);
  delete packageJson.devDependencies['@angularclass/hmr'];
  packageJson.scripts.hmr = (packageJson.scripts.hmr as string).replace(`-c=hmr`, `--hmr`);
  overwritePackage(tree, packageJson);
  context.logger.info(`      ${colors.green('✓')} '-c=hmr' instead of '--hmr' in package.json`);

  // 4、修改 `main.ts` 并移除 `hmr.ts` 文件
  tree.delete(hmrTsPath);
  tree.overwrite(normalize(`${project.sourceRoot}/main.ts`), mainContent);
  context.logger.info(`      ${colors.green('✓')} Modify 'main.ts' and remove 'hmr.ts' file`);
}

export function v11Rule(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    project = getProjectFromWorkspace(getWorkspace(tree));

    fixVersion(tree, context);
    fixThirdVersion(tree, context);
    fixHmr(tree, context);

    context.logger.info(
      colors.green(
        `  ✓  Congratulations, Abort more detail please refer to upgrade guide https://github.com/ng-alain/ng-alain/issues/1863`,
      ),
    );
  };
}
