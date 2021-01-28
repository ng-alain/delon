import { normalize } from '@angular-devkit/core';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { findNode } from '@schematics/angular/utility/ast-utils';
import * as ts from 'typescript';
import {
  getSourceFile,
  logInfo,
  logStart,
  logWarn,
  readContent,
  readPackage,
  removeAllowedCommonJsDependencies,
  writePackage,
} from '../../../utils';
import { getAngular, overwriteAngular } from '../../../utils/json';
import mainContent from './files-tpl/main';

function removeHmrInEnt(sourceRoot: string, tree: Tree, name: string): void {
  const src = normalize(`${sourceRoot}/environments/${name}`);
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

export function fixHmr(sourceRoot: string): Rule {
  return (tree: Tree, context: SchematicContext) => {
    logStart(context, `Using built-in hmr instead of '@angularclass/hmr'`);

    // 检查是否存在 `hmr.ts` 文件作为是否已经安装 hmr 的前提条件
    const hmrTsPath = normalize(`${sourceRoot}/hmr.ts`);
    if (!tree.exists(hmrTsPath)) {
      logWarn(context, `Ingored the part migration when not found '${hmrTsPath}'`);
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
    logInfo(context, `Remove '@angularclass/hmr'`);

    // 2、移除 angular.json 里面的 hmr 配置项，以及 environments 下相关的 hmr 配置
    removeAllowedCommonJsDependencies('@angularclass/hmr');
    // 移除 `environments.ts` 的 `hmr: false`
    removeHmrInEnt(sourceRoot, tree, 'environment.prod.ts');
    removeHmrInEnt(sourceRoot, tree, 'environment.ts');
    // 删除 `environment.hmr.ts`
    const environmentHmrTsPath = normalize(`${sourceRoot}/environments/environment.hmr.ts`);
    if (tree.exists(environmentHmrTsPath)) {
      tree.delete(environmentHmrTsPath);
    }
    logInfo(context, `Removed 'environments.hmr.ts' file`);

    // 3、修改 package.json 命令行 `-c=hmr` 为 `--hmr`
    const packageJson = readPackage(tree);
    delete packageJson.devDependencies['@angularclass/hmr'];
    if (packageJson.scripts.hmr) {
      packageJson.scripts.hmr = (packageJson.scripts.hmr as string).replace(`-c=hmr`, `--hmr`);
    }
    writePackage(tree, packageJson);
    logInfo(context, `'-c=hmr' instead of '--hmr' in package.json`);

    // 4、修改 `main.ts` 并移除 `hmr.ts` 文件
    tree.delete(hmrTsPath);
    tree.overwrite(normalize(`${sourceRoot}/main.ts`), mainContent);
    logInfo(context, `Modify 'main.ts' and remove 'hmr.ts' file`);
  };
}
