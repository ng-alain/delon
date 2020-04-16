import { chain, Rule, schematic } from '@angular-devkit/schematics';
import { Schema as ApplicationOptions } from '../application/schema';
import { Schema as NgAddOptions } from './schema';

export default function (options: NgAddOptions): Rule {
  const rules: Rule[] = [];

  const applicationOptions: ApplicationOptions = { ...options };
  rules.push(schematic('application', applicationOptions));

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
