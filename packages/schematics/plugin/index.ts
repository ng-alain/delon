import {
  Rule,
  Tree,
  SchematicContext,
  chain,
  SchematicsException,
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

import { Schema as PluginSchema } from './schema';
import {
  Project,
  getWorkspace,
  getProjectFromWorkspace,
} from '../utils/devkit-utils/config';
import { PluginOptions } from './interface';

import { pluginG2 } from './plugin.g2';
import { pluginCodeStyle } from './plugin.code-style';
import { pluginNpm } from './plugin.npm';
import { pluginYarn } from './plugin.yarn';

function installPackages() {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

export default function(options: PluginSchema): Rule {
  return (host: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace);
    const projectPrefix = (project as any).prefix || 'app';
    const sourceRoot = (project as any).sourceRoot || 'src';
    const pluginOptions: PluginOptions = {
      type: options.type,
      projectPrefix,
      sourceRoot,
      project: options.project,
    };

    const rules: Rule[] = [];
    switch (options.name) {
      case 'g2':
        rules.push(pluginG2(pluginOptions));
        break;
      case 'codeStyle':
        rules.push(pluginCodeStyle(pluginOptions));
        break;
      case 'npm':
        rules.push(pluginNpm(pluginOptions));
        break;
      case 'yarn':
        rules.push(pluginYarn(pluginOptions));
        break;
      default:
        throw new SchematicsException(`Could not find '${options.name}' name`);
    }

    rules.push(installPackages());

    return chain(rules)(host, context);
  };
}
