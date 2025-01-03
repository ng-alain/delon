import { Rule, Tree } from '@angular-devkit/schematics';

import { readPackage, writePackage } from '../utils';
import { PluginOptions } from './interface';
import { LINT_STAGED, LINT_STAGED_CONFIG } from '../utils/code-style';

export function pluginCodeStyle(options: PluginOptions): Rule {
  return (tree: Tree) => {
    const json = readPackage(tree);
    if (json == null) return;

    if (options.type === 'add') {
      json[LINT_STAGED] = LINT_STAGED_CONFIG;
    } else {
      delete json[LINT_STAGED];
    }

    writePackage(tree, json);
  };
}
