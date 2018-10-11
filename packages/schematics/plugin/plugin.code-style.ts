import { Tree, SchematicContext } from '@angular-devkit/schematics';
import { PluginOptions } from './interface';
import {
  addPackageToPackageJson,
  removePackageFromPackageJson,
  getJSON,
  overwritePackage,
} from '../utils/json';

export function pluginCodeStyle(options: PluginOptions): any {
  return (host: Tree, context: SchematicContext) => {
    const json = getJSON(host, 'package.json');
    if (json == null) return;

    if (options.type === 'add') {
      json.husky = {
        hooks: {
          'pre-commit': 'npm run lint-staged',
        },
      };
    } else {
      delete json.husky;
    }

    overwritePackage(host, json);
  };
}
