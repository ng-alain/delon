import { Tree, SchematicContext } from '@angular-devkit/schematics';
import { PluginOptions } from './interface';

const npmrc = '/.npmrc';

export function pluginNpm(options: PluginOptions): any {
  return (host: Tree, context: SchematicContext) => {
    if (host.exists(npmrc)) {
      host.delete(npmrc);
    }

    if (options.type === 'remove') {
      return ;
    }

    host.create(npmrc, `sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
phantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs/
electron_mirror=https://npm.taobao.org/mirrors/electron/
registry=https://registry.npm.taobao.org`);
  };
}
