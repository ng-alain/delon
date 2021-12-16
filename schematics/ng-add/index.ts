import { colors } from '@angular/cli/utilities/color';

import { chain, Rule, schematic, Tree, SchematicContext, SchematicsException } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

import { Schema as ApplicationOptions } from '../application/schema';
import { readPackage } from '../utils';
import { Schema as NgAddOptions } from './schema';

const V = 12;

function genRules(options: NgAddOptions): Rule {
  return () => {
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
          defaultLanguage: options.defaultLanguage
        })
      );
    }

    if (options.npm) {
      rules.push(
        schematic('plugin', {
          name: 'networkEnv',
          type: 'add',
          packageManager: 'npm'
        })
      );
    }

    if (options.yarn) {
      rules.push(
        schematic('plugin', {
          name: 'networkEnv',
          type: 'add',
          packageManager: 'yarn'
        })
      );
    }

    return chain(rules);
  };
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

function finished(): Rule {
  return (_: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());

    context.logger.info(
      colors.green(`
✓  Congratulations, NG-ALAIN scaffold generation complete 🎉.

NG-ALAIN documentation site: https://ng-alain.com
`)
    );
  };
}

export function getNodeMajorVersion(): number {
  return +process.version.match(/^v(\d+)/)[1];
}

export default function (options: NgAddOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    if (isUseCNPM()) {
      throw new SchematicsException(
        `Sorry, Don't use cnpm to install dependencies, pls refer to: https://ng-alain.com/docs/faq#Installation`
      );
    }

    const nodeVersion = getNodeMajorVersion();
    const allowNodeVersions = [12, 14];
    if (!allowNodeVersions.some(v => nodeVersion === v)) {
      const versions = allowNodeVersions.join(', ');
      throw new SchematicsException(
        `Sorry, currently only supports ${versions} major version number of node (Got ${process.version}), pls refer to https://gist.github.com/LayZeeDK/c822cc812f75bb07b7c55d07ba2719b3`
      );
    }

    const pkg = readPackage(tree);

    if (pkg.devDependencies['ng-alain']) {
      throw new SchematicsException(`Already an NG-ALAIN project and can't be executed again: ng add ng-alain`);
    }

    let ngCoreVersion = pkg.dependencies['@angular/core'] as string;
    if (/^[\^|\~]/g.test(ngCoreVersion)) {
      ngCoreVersion = ngCoreVersion.substr(1);
    }
    if (!ngCoreVersion.startsWith(`${V}.`)) {
      throw new SchematicsException(
        `Sorry, the current version only supports angular ${V}.x, pls downgrade the global Anguar-cli version: [yarn global add @angular/cli@${V}] (or via npm: [npm install -g @angular/cli@${V}])`
      );
    }

    return chain([genRules(options), finished()])(tree, context);
  };
}
