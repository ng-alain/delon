import { Rule, SchematicsException, Tree } from '@angular-devkit/schematics';

import { getLangConfig } from '../core/lang.config';
import { getProject } from '../utils';
import { PluginOptions } from './interface';

export function pluginDefaultLanguage(options: PluginOptions): Rule {
  return async (tree: Tree) => {
    if (options.type !== 'add') {
      throw new SchematicsException(`Can't be specified the "type" parameter`);
    }
    if (options.defaultLanguage == null) {
      throw new SchematicsException(`Must be specified the "defaultLanguage" parameter`);
    }
    const project = (await getProject(tree, options.project)).project;
    const modulePath = `${project.sourceRoot}/app/app.module.ts`;
    if (!tree.exists(modulePath)) {
      throw new SchematicsException(`AppModule file (${modulePath}) not found`);
    }
    let content = tree.get(modulePath)!.content.toString('UTF-8');
    const start = content.indexOf(`#region default language`);
    if (start === -1) {
      console.warn(`[#region default language] area not found`);
      return;
    }
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
    content = content.replace(/NZ_I18N, ([^ ]+)/, `NZ_I18N, ${targetLang.zorro}`);
    // delon
    content = content.replace(/DELON_LOCALE, ([^ ]+)/, `DELON_LOCALE, ${targetLang.zorro}`);
    tree.overwrite(modulePath, content);
  };
}
