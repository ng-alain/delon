import { chain, Rule, schematic, Tree } from '@angular-devkit/schematics';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';
import { Schema as ApplicationOptions } from '../application/schema';
import { readPackage } from '../utils';
import { Schema as NgAddOptions } from './schema';

const V = 11;

function genRules(options: NgAddOptions): Rule {
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

  return chain(rules);
}

function getFiles(): string[] {
  const nodeModulesPath = join(process.cwd(), 'node_modules');
  if (!statSync(nodeModulesPath).isDirectory()) return [];
  return readdirSync(nodeModulesPath) || [];
}

function isUseCNPM(): boolean {
  const names = getFiles();
  const res = ['_@angular', '_ng-zorro-antd'].every(prefix => names.findIndex(w => w.startsWith(prefix)) !== -1);
  return res;
}

export default function (options: NgAddOptions): Rule {
  return (tree: Tree) => {
    if (isUseCNPM()) {
      throw new Error(`Sorry, Don't use cnpm to install dependencies, pls refer to: https://ng-alain.com/docs/faq#Installation`);
    }

    const pkg = readPackage(tree);

    if (pkg.devDependencies['ng-alain']) {
      throw new Error(`Already an NG-ALAIN project and can't be executed again: ng add ng-alain`);
    }

    let ngCoreVersion = pkg.dependencies['@angular/core'] as string;
    if (/^[\^|\~]/g.test(ngCoreVersion)) {
      ngCoreVersion = ngCoreVersion.substr(1);
    }
    if (!ngCoreVersion.startsWith(V + '.')) {
      throw new Error(
        `Sorry, the current version only supports angular ${V}.x, pls downgrade the global Anguar-cli version: [yarn global add @angular/cli@${V}] (or via npm: [npm install -g @angular/cli@${V}])`,
      );
    }

    return genRules(options);
  };
}
