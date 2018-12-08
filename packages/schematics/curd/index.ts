import { chain, schematic, Rule } from '@angular-devkit/schematics';
import { Schema as CURDOptions } from './schema';

export default function (options: CURDOptions): Rule {
  const rules: Rule[] = [];

  const name = options.name || 'list';
  delete options.name;

  [
    { name: 'list', options: { name, modal: false } },
    { name: 'edit', options: { name: 'edit', modal: true, target: name } },
    { name: 'view', options: { name: 'view', modal: true, target: name } },
  ].forEach(item =>
    rules.push(schematic(item.name, {...options, ...item.options})),
  );

  return chain(rules);
}
