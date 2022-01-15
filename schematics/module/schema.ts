import { Schema as ModuleSchema } from '@schematics/angular/module/schema';

export interface Schema extends ModuleSchema {
  service?: 'ignore' | 'none' | 'root';
}
