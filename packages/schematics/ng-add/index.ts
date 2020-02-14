import { chain, schematic, Rule, Tree } from '@angular-devkit/schematics';
import { Schema as ApplicationOptions } from '../application/schema';
import { Schema as NgAddOptions } from './schema';
import { getJSON } from '../utils/json';

function genRules(options: NgAddOptions): Rule {
  const rules: Rule[] = [];

  const applicationOptions: ApplicationOptions = { ...options };
  rules.push(schematic('application', applicationOptions));

  if (options.g2) {
    rules.push(schematic('plugin', { name: 'g2', type: 'add' }));
  }

  if (options.codeStyle) {
    rules.push(schematic('plugin', { name: 'codeStyle', type: 'add' }));
  }

  if (options.defaultLanguage) {
    rules.push(
      schematic('plugin', {
        name: 'defaultLanguage',
        type: 'add',
        defaultLanguage: options.defaultLanguage,
      }),
    );
  }

  if (options.npm) {
    rules.push(
      schematic('plugin', {
        name: 'networkEnv',
        type: 'add',
        packageManager: 'npm',
      }),
    );
  }

  if (options.yarn) {
    rules.push(
      schematic('plugin', {
        name: 'networkEnv',
        type: 'add',
        packageManager: 'yarn',
      }),
    );
  }

  if (options.hmr) {
    rules.push(schematic('plugin', { name: 'hmr', type: 'add' }));
  }

  return chain(rules);
}

export default function(options: NgAddOptions) {
  return (host: Tree) => {
    const pkg = getJSON(host, `package.json`);
    let ngCoreVersion = pkg.dependencies['@angular/core'] as string;
    if (/^[\^|\~]/g.test(ngCoreVersion)) {
      ngCoreVersion = ngCoreVersion.substr(1);
    }
    if (!ngCoreVersion.startsWith('8.')) {
      throw new Error(
        `Sorry, the current version only supports angular 8.x, pls downgrade the global Anguar-cli version: yarn global add @angular/cli@8.x`,
      );
    }

    return genRules(options);
  };
}
