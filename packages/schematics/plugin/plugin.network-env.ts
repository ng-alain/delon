import {
  Tree,
  SchematicContext,
  SchematicsException,
} from '@angular-devkit/schematics';
import { PluginOptions } from './interface';

const CONFIG = {
  npm: {
    path: `./.npmrc`,
    content: `sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
phantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs/
electron_mirror=https://npm.taobao.org/mirrors/electron/
registry=https://registry.npm.taobao.org`,
  },
  yarn: {
    path: `./.yarnrc`,
    content: `sass_binary_site "https://npm.taobao.org/mirrors/node-sass/"
phantomjs_cdnurl "https://npm.taobao.org/mirrors/phantomjs/"
electron_mirror "https://npm.taobao.org/mirrors/electron/"
registry "https://registry.npm.taobao.org"`,
  },
};

export function pluginNetworkEnv(options: PluginOptions): any {
  return (host: Tree, context: SchematicContext) => {
    const item = CONFIG[options.packageManager || ''];
    if (item == null) {
      throw new SchematicsException(
        `Must be specified the "packageManager" parameter`,
      );
    }
    if (host.exists(item.path)) {
      host.delete(item.path);
    }

    if (options.type === 'remove') {
      return;
    }

    host.create(item.path, item.content);
  };
}
