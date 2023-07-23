import { chain, Rule } from '@angular-devkit/schematics';

import { Schema } from './schema';
import { buildAlain } from '../utils';

export default function (options: Schema): Rule {
  return chain([buildAlain({ schematicName: 'view', ...options })]);
}
