import { Rule, Tree } from '@angular-devkit/schematics';

import { readPackage, writePackage } from '../utils';
import { PluginOptions } from './interface';

export function pluginCodeStyle(options: PluginOptions): Rule {
  return (tree: Tree) => {
    const json = readPackage(tree);
    if (json == null) return;

    if (options.type === 'add') {
      json['lint-staged'] = {
        '(src)/**/*.{html,ts}': ['eslint --fix']
      };
    } else {
      delete json['lint-staged'];
    }

    writePackage(tree, json);
  };
}
