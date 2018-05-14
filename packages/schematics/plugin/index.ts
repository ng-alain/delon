import {
  Rule,
  Tree,
  SchematicContext,
  chain,
  SchematicsException,
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

import { Schema as PluginOptions } from './schema';
import {
  addPackageToPackageJson,
  removePackageFromPackageJson,
  getJSON,
  scriptsToAngularJson,
} from '../utils/json';
import { Project, getWorkspace, getProjectFromWorkspace } from '../utils/devkit-utils/config';
import { getSourceFile } from '../utils/ast';

let project: Project;
let projectPrefix = 'app';
let sourceRoot = 'src';

function pluginG2(options: PluginOptions) {
  return (host: Tree, context: SchematicContext) => {
    // package
    (options.type === 'add'
      ? addPackageToPackageJson
      : removePackageFromPackageJson)(host, [
      '@antv/data-set@^0.8.8',
      '@antv/g2@^3.0.11',
      '@antv/g2-plugin-slider@^2.0.2',
    ]);
    // angular
    scriptsToAngularJson(
      host,
      [
        'node_modules/@antv/g2/dist/g2.min.js',
        'node_modules/@antv/data-set/dist/data-set.min.js',
        'node_modules/@antv/g2-plugin-slider/dist/g2-plugin-slider.min.js',
      ],
      options.type,
      ['build', 'test'],
      options.project
    );
  };
}

function installPackages() {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

export default function(options: PluginOptions): Rule {
  return (host: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(host);
    project = getProjectFromWorkspace(workspace);
    projectPrefix = (project as any).prefix || 'app';
    sourceRoot = (project as any).sourceRoot || 'src';

    const rules: Rule[] = [];
    switch (options.name) {
      case 'g2':
        rules.push(pluginG2(options));
        break;
      default:
        throw new SchematicsException('Could not find angular.json');
    }

    rules.push(installPackages());

    return chain(rules)(host, context);
  };
}
