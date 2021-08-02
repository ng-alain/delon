import { Rule } from '@angular-devkit/schematics';

export function pluginAsdf(): Rule {
  return () => {
    console.log(`哈哈……什么都不做的！`);
  };
}
