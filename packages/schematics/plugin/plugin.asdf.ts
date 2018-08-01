import { Tree, SchematicContext, Rule } from '@angular-devkit/schematics';
import { PluginOptions } from './interface';

export function pluginAsdf(options: PluginOptions): Rule {
  return (host: Tree, context: SchematicContext) => {
    console.log(`哈哈……什么都不做的！`);
  };
}
