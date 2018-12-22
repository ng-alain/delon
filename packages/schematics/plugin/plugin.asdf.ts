import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { PluginOptions } from './interface';

export function pluginAsdf(options: PluginOptions): Rule {
  return (host: Tree, context: SchematicContext) => {
    console.log(`哈哈……什么都不做的！`);
  };
}
