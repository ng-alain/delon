import { Rule, chain, schematic } from '@angular-devkit/schematics';
import { Schema as CURDOptions } from './schema';

export default function(options: CURDOptions): Rule {
  const rules: Rule[] = [];

  ['list', 'edit', 'view'].forEach(name =>
    rules.push(schematic(name, Object.assign({}, options, { name }))),
  );

  return chain(rules);
}
