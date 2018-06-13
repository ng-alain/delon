import { Tree, SchematicContext } from '@angular-devkit/schematics';
import { PluginOptions } from './interface';
import {
  addPackageToPackageJson,
  removePackageFromPackageJson,
} from '../utils/json';

export function pluginCodeStyle(options: PluginOptions): any {
  return (host: Tree, context: SchematicContext) => {
    // package
    (options.type === 'add'
      ? addPackageToPackageJson
      : removePackageFromPackageJson)(
      host,
      ['precommit@npm run lint-staged'],
      'scripts',
    );
  };
}
