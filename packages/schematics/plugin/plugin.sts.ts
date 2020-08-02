import { apply, chain, MergeStrategy, mergeWith, move, Rule, SchematicContext, Tree, url } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { addPackageToPackageJson, removePackageFromPackageJson } from '../utils/json';
import { PluginOptions } from './interface';

function fixPackage(options: PluginOptions): (host: Tree) => void {
  return (host: Tree) => {
    (options.type === 'add' ? addPackageToPackageJson : removePackageFromPackageJson)(
      host,
      ['ng-alain-sts@DEP-0.0.0-PLACEHOLDER'],
      'devDependencies',
    );
  };
}

function fixFiles(): Rule {
  return chain([mergeWith(apply(url('./files/sts'), [move('/_cli-tpl')]), MergeStrategy.Overwrite)]);
}

function installPackages(): (_host: Tree, context: SchematicContext) => void {
  return (_host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

export function pluginSTS(options: PluginOptions): Rule[] {
  return [fixPackage(options), fixFiles(), installPackages()];
}
