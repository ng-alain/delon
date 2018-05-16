import {
  Rule,
  chain,
  mergeWith,
  Tree,
  SchematicContext,
  apply,
  schematic,
  empty,
} from '@angular-devkit/schematics';
import { Schema as ApplicationOptions } from '../application/schema';
import { Schema as NgAddOptions } from './schema';

export default function(options: NgAddOptions): Rule {
  const rules: Rule[] = [];

  const applicationOptions: ApplicationOptions = Object.assign({}, options);
  rules.push(schematic('application', applicationOptions));

  if (options.g2) rules.push(schematic('plugin', { name: 'g2', type: 'add' }));

  return chain(rules);
}
