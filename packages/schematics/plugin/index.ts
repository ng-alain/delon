import {
  Rule,
  Tree,
  SchematicContext,
  chain,
  SchematicsException,
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

import { Schema as PluginSchema } from './schema';
import { getProject } from '../utils/project';
import { PluginOptions } from './interface';

import { pluginG2 } from './plugin.g2';
import { pluginCodeStyle } from './plugin.code-style';
import { pluginDefaultLanguage } from './plugin.default-language';
import { pluginNetworkEnv } from './plugin.network-env';
import { pluginHmr } from './plugin.hmr';
import { pluginDocker } from './plugin.docker';
import { pluginAsdf } from './plugin.asdf';
import { pluginIcon } from './plugin.icon';

function installPackages() {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

export default function(options: PluginSchema): Rule {
  return (host: Tree, context: SchematicContext) => {
    const project = getProject(host, options.project);
    const pluginOptions: PluginOptions = {
      type: options.type,
      name: project.name,
      projectPrefix: project.prefix,
      root: project.root,
      sourceRoot: project.sourceRoot,
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
      case 'networkEnv':
        rules.push(
          pluginNetworkEnv(
            Object.assign(pluginOptions, {
              packageManager: options.packageManager,
            }),
          ),
        );
        break;
      case 'hmr':
        rules.push(pluginHmr(pluginOptions));
        break;
      case 'docker':
        rules.push(pluginDocker(pluginOptions));
        break;
      case 'defaultLanguage':
        rules.push(
          pluginDefaultLanguage(
            Object.assign(pluginOptions, {
              defaultLanguage: options.defaultLanguage,
            }),
          ),
        );
        break;
      case 'icon':
        rules.push(pluginIcon(pluginOptions));
        break;
      case 'asdf':
        rules.push(pluginAsdf(pluginOptions));
        break;
      default:
        throw new SchematicsException(
          `Could not find plugin name: ${options.name}`,
        );
    }

    rules.push(installPackages());

    return chain(rules)(host, context);
  };
}
