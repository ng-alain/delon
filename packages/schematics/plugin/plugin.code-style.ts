import { Rule, Tree } from '@angular-devkit/schematics';
import { readPackage, writePackage } from '../utils';
import { PluginOptions } from './interface';

export function pluginCodeStyle(options: PluginOptions): Rule {
  return (host: Tree) => {
    const json = readPackage(host);
    if (json == null) return;

    if (options.type === 'add') {
      json.husky = {
        hooks: {
          'pre-commit': 'pretty-quick --staged',
        },
      };
    } else {
      delete json.husky;
    }

    writePackage(host, json);
  };
}
