import { Rule, chain } from '@angular-devkit/schematics';
import { Schema } from './schema';
import { buildComponent } from '../utils/component';

export default function(options: Schema): Rule {
  return chain([
    buildComponent({...options})
  ]);
}
