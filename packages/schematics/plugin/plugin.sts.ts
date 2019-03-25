import { apply, chain, mergeWith, move, url, MergeStrategy, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import {
  addPackageToPackageJson,
  removePackageFromPackageJson,
} from '../utils/json';
import { PluginOptions } from './interface';

function fixPackage(options: PluginOptions) {
  return (host: Tree, context: SchematicContext) => {
    (options.type === 'add' ? addPackageToPackageJson : removePackageFromPackageJson)(
      host,
      ['ng-alain-sts@DEP-0.0.0-PLACEHOLDER'],
      'devDependencies',
    );
  };
}

function fixFiles(options: PluginOptions) {
  return chain([
    mergeWith(
      apply(url('./files/sts'), [ move('/_cli-tpl') ]),
      MergeStrategy.Overwrite,
    ),
  ]);
}

function installPackages() {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

export function pluginSTS(options: PluginOptions): Rule[] {
  return [
    fixPackage(options),
    fixFiles(options),
    installPackages(),
  ];
}
