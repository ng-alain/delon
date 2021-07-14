import { Rule, Tree } from '@angular-devkit/schematics';

import { readPackage, writePackage } from '../utils';
import { LINT_STAGED } from '../utils/code-style';
import { PluginOptions } from './interface';

export function pluginCodeStyle(options: PluginOptions): Rule {
  return (tree: Tree) => {
    const json = readPackage(tree);
    if (json == null) return;

    if (options.type === 'add') {
      json['lint-staged'] = LINT_STAGED;
    } else {
      delete json['lint-staged'];
    }

    writePackage(tree, json);
  };
}
