import { chain, Rule, SchematicContext, SchematicsException, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

import { PluginOptions } from './interface';
import { pluginAsdf } from './plugin.asdf';
import { pluginCodeStyle } from './plugin.code-style';
import { pluginDefaultLanguage } from './plugin.default-language';
import { pluginDocker } from './plugin.docker';
import { pluginIcon } from './plugin.icon';
import { pluginNetworkEnv } from './plugin.network-env';
import { pluginRTL } from './plugin.rtl';
import { pluginSTS } from './plugin.sts';
import { Schema as PluginSchema } from './schema';
import { getProject } from '../utils';

function installPackages(): (_host: Tree, context: SchematicContext) => void {
  return (_host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

export default function (options: PluginSchema): Rule {
  return async (tree: Tree) => {
    const res = await getProject(tree, options.project);
    const project = res.project;
    const pluginOptions: PluginOptions = {
      type: options.type,
      name: res.name,
      projectPrefix: project.prefix,
      root: project.root,
      sourceRoot: project.sourceRoot,
      project: options.project
    };

    const rules: Rule[] = [];
    switch (options.name) {
      case 'codeStyle':
        rules.push(pluginCodeStyle(pluginOptions), installPackages());
        break;
      case 'networkEnv':
        rules.push(pluginNetworkEnv({ ...pluginOptions, packageManager: options.packageManager }));
        break;
      case 'docker':
        rules.push(pluginDocker(pluginOptions));
        break;
      case 'defaultLanguage':
        rules.push(
          pluginDefaultLanguage({
            ...pluginOptions,
            defaultLanguage: options.defaultLanguage
          })
        );
        break;
      case 'icon':
        rules.push(pluginIcon(pluginOptions));
        break;
      case 'sts':
        rules.push(...pluginSTS(pluginOptions));
        break;
      case 'rtl':
        rules.push(pluginRTL(pluginOptions));
        break;
      case 'asdf':
        rules.push(pluginAsdf());
        break;
      default:
        throw new SchematicsException(`Could not find plugin name: ${options.name}`);
    }

    return chain(rules);
  };
}
