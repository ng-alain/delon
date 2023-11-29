import { Rule, SchematicsException, Tree } from '@angular-devkit/schematics';

import { PluginOptions } from './interface';
import { getLangConfig } from '../core/lang.config';
import { getProject } from '../utils';

export function pluginDefaultLanguage(options: PluginOptions): Rule {
  return async (tree: Tree) => {
    if (options.type !== 'add') {
      throw new SchematicsException(`Can't be specified the "type" parameter`);
    }
    if (options.defaultLanguage == null) {
      throw new SchematicsException(`Must be specified the "defaultLanguage" parameter`);
    }
    const project = (await getProject(tree, options.project)).project;
    const appConfigPath = `${project.sourceRoot}/app/app.config.ts`;
    if (!tree.exists(appConfigPath)) {
      throw new SchematicsException(`App config file (${appConfigPath}) not found`);
    }
    let content = tree.read(appConfigPath).toString('utf-8');
    const oldMatch = content.match(/@angular\/common\/locales\/([^']+)/);
    const oldLang = oldMatch != null ? oldMatch[1] : 'zh-Hans';
    if (oldLang === options.defaultLanguage) {
      return;
    }
    const targetLang = getLangConfig(options.defaultLanguage);
    if (targetLang == null) {
      console.warn(`Target language not supported, refer to https://ng-alain.com/cli/plugin#defaultLanguage`);
      return;
    }
    console.log(`Changes default languare [${oldLang}] to [${options.defaultLanguage}]`);
    // angular
    content = content
      .replace(/@angular\/common\/locales\/([^']+)/, `@angular/common/locales/${options.defaultLanguage}`)
      .replace(/abbr: '([^']+)/, `abbr: '${options.defaultLanguage}`);
    // zorro
    content = content.replace(/ ([^ ]+) as zorroLang/, ` ${targetLang.zorro} as zorroLang`);
    content = content.replace(/ ([^ ]+) as dateLang/, ` ${targetLang.date} as dateLang`);
    // delon
    content = content.replace(/ ([^ ]+) as delonLang/, ` ${targetLang.delon} as delonLang`);
    tree.overwrite(appConfigPath, content);
  };
}
