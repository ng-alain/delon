import { Tree, SchematicContext } from '@angular-devkit/schematics';
import { PluginOptions } from './interface';
import {
  addPackageToPackageJson,
  removePackageFromPackageJson,
  scriptsToAngularJson,
} from '../utils/json';

export function pluginYarn(options: PluginOptions): any {
  return (host: Tree, context: SchematicContext) => {
    // package
    (options.type === 'add'
      ? addPackageToPackageJson
      : removePackageFromPackageJson)(
      host,
      ['less@~2.7.0', 'less-loader@~4.0.0'],
      'devDependencies',
    );
  };
}
