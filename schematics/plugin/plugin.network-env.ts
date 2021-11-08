import { Rule, SchematicsException, Tree } from '@angular-devkit/schematics';

import { PluginOptions } from './interface';

const CONFIG = {
  npm: {
    path: `./.npmrc`,
    content: `sass_binary_site=https://npmmirror.com/mirrors/node-sass/
phantomjs_cdnurl=https://npmmirror.com/mirrors/phantomjs/
electron_mirror=https://npmmirror.com/mirrors/electron/
registry=https://registry.npmmirror.com`
  },
  yarn: {
    path: `./.yarnrc`,
    content: `sass_binary_site "https://npmmirror.com/mirrors/node-sass/"
phantomjs_cdnurl "https://npmmirror.com/mirrors/phantomjs/"
electron_mirror "https://npmmirror.com/mirrors/electron/"
registry "https://registry.npmmirror.com"`
  }
};

export function pluginNetworkEnv(options: PluginOptions): Rule {
  return (tree: Tree) => {
    const item = CONFIG[options.packageManager || ''];
    if (item == null) {
      throw new SchematicsException(`Must be specified the "packageManager" parameter`);
    }
    if (tree.exists(item.path)) {
      tree.delete(item.path);
    }

    if (options.type === 'remove') {
      return;
    }

    tree.create(item.path, item.content);
  };
}
