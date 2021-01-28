import { apply, chain, MergeStrategy, mergeWith, move, Rule, SchematicContext, Tree, url } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { addPackage, removePackage } from '../utils';
import { PluginOptions } from './interface';

function fixPackage(options: PluginOptions): (host: Tree) => void {
  return (tree: Tree) => {
    (options.type === 'add' ? addPackage : removePackage)(tree, ['ng-alain-sts@DEP-0.0.0-PLACEHOLDER'], 'devDependencies');
  };
}

function fixFiles(): Rule {
  return chain([mergeWith(apply(url('./files/sts'), [move('/_cli-tpl')]), MergeStrategy.Overwrite)]);
}

function installPackages(): (_tree: Tree, context: SchematicContext) => void {
  return (_tree: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

export function pluginSTS(options: PluginOptions): Rule[] {
  return [fixPackage(options), fixFiles(), installPackages()];
}
