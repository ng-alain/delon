import { Tree, SchematicContext } from '@angular-devkit/schematics';
import { PluginOptions } from './interface';
import {
  addPackageToPackageJson,
  removePackageFromPackageJson,
  scriptsToAngularJson,
} from '../utils/json';

export function pluginG2(options: PluginOptions): any {
  return (host: Tree, context: SchematicContext) => {
    // package
    (options.type === 'add'
      ? addPackageToPackageJson
      : removePackageFromPackageJson)(host, [
      '@antv/data-set@^0.8.8',
      '@antv/g2@^3.0.11',
      '@antv/g2-plugin-slider@^2.0.2',
    ]);
    // angular
    scriptsToAngularJson(
      host,
      [
        'node_modules/@antv/g2/dist/g2.min.js',
        'node_modules/@antv/data-set/dist/data-set.min.js',
        'node_modules/@antv/g2-plugin-slider/dist/g2-plugin-slider.min.js',
      ],
      options.type,
      ['build', 'test'],
      options.project,
    );
  };
}
