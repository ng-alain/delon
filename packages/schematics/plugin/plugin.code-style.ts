import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { getJSON, overwritePackage } from '../utils/json';
import { PluginOptions } from './interface';

export function pluginCodeStyle(options: PluginOptions): Rule {
  return (host: Tree, context: SchematicContext) => {
    const json = getJSON(host, 'package.json');
    if (json == null) return;

    if (options.type === 'add') {
      json.husky = {
        hooks: {
          'pre-commit': 'npm run lint-staged',
        },
      };
    } else {
      delete json.husky;
    }

    overwritePackage(host, json);
  };
}
