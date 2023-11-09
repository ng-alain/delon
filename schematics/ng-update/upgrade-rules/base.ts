import { Rule, Tree } from '@angular-devkit/schematics';

import { readJSON, writeJSON } from '../../utils';

export function updateMockPath(): Rule {
  return (tree: Tree) => {
    const json = readJSON(tree, 'tsconfig.json', 'compilerOptions');
    if (json == null) return tree;
    if (!json.compilerOptions) json.compilerOptions = {};
    if (!json.compilerOptions.paths) json.compilerOptions.paths = {};
    const paths = json.compilerOptions.paths;
    paths[`@_mock`] = [`_mock/index`];
    writeJSON(tree, 'tsconfig.json', json);
    return tree;
  };
}
