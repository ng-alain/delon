import { chain, Rule } from '@angular-devkit/schematics';

import { buildAlain } from '../utils';
import { Schema } from './schema';

export default function (options: Schema): Rule {
  return chain([buildAlain({ schematicName: 'empty', ...options })]);
}
