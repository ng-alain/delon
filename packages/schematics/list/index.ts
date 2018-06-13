import { Rule, chain } from '@angular-devkit/schematics';
import { Schema } from './schema';
import { buildAlain } from '../utils/alain';

export default function(options: Schema): Rule {
  return chain([buildAlain(options)]);
}
