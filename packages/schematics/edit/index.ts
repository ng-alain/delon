import { chain, Rule } from '@angular-devkit/schematics';
import { buildAlain } from '../utils/alain';
import { Schema } from './schema';

export default function(options: Schema): Rule {
  return chain([buildAlain({ schematicName: 'edit', ...options })]);
}
