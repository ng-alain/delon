import { Rule, Tree } from '@angular-devkit/schematics';

import { readJSON, writeJSON } from './json';

export function addImportNotation(): Rule {
  return (tree: Tree) => {
    const filePath = '.stylelintrc';
    const json = readJSON(tree, filePath);
    if (json == null) return tree;
    if (!json.rules) json.rules = {};
    json.rules['import-notation'] = 'string';
    writeJSON(tree, filePath, json);
    return tree;
  };
}
