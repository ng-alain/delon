import { chain, Rule, SchematicContext, SchematicsException, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { getProject } from '../utils/project';
import { PluginOptions } from './interface';
import { pluginAsdf } from './plugin.asdf';
import { pluginCodeStyle } from './plugin.code-style';
import { pluginDefaultLanguage } from './plugin.default-language';
import { pluginDocker } from './plugin.docker';
import { pluginHmr } from './plugin.hmr';
import { pluginIcon } from './plugin.icon';
import { pluginNetworkEnv } from './plugin.network-env';
import { pluginSTS } from './plugin.sts';
import { Schema as PluginSchema } from './schema';

function installPackages() {
  return (_host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

export default function (options: PluginSchema): Rule {
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
      case 'codeStyle':
        rules.push(pluginCodeStyle(pluginOptions), installPackages());
        break;
      case 'networkEnv':
        rules.push(pluginNetworkEnv({ ...pluginOptions, packageManager: options.packageManager }));
        break;
      case 'hmr':
        rules.push(pluginHmr(pluginOptions), installPackages());
        break;
      case 'docker':
        rules.push(pluginDocker(pluginOptions));
        break;
      case 'defaultLanguage':
        rules.push(
          pluginDefaultLanguage({
            ...pluginOptions,
            defaultLanguage: options.defaultLanguage,
          }),
        );
        break;
      case 'icon':
        rules.push(pluginIcon(pluginOptions));
        break;
      case 'sts':
        rules.push(...pluginSTS(pluginOptions));
        break;
      case 'asdf':
        rules.push(pluginAsdf());
        break;
      default:
        throw new SchematicsException(`Could not find plugin name: ${options.name}`);
    }

    return chain(rules)(host, context);
  };
}
