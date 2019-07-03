import { Rule, SchematicsException, Tree, SchematicContext } from '@angular-devkit/schematics';
import * as fs from 'fs';
import * as path from 'path';
import { buildAlain } from '../utils/alain';
import { Schema } from './schema';

const REFER = `, please refer to: https://ng-alain.com/cli/generate/en#Custom-template-page`;

function genFiles(options: Schema) {
  options._tplDir = path.join(process.cwd(), './_cli-tpl');
  try {
    fs.accessSync(options._tplDir);
  } catch {
    throw new SchematicsException(`Invalid path [${options._tplDir}]${REFER}`);
  }
  const names = fs.readdirSync(options._tplDir);
  if (names.indexOf(options.tplName!) === -1) {
    throw new SchematicsException(`Could not find name [${options.tplName}] templates${REFER}`);
  }

  options._filesPath = path.relative(__dirname, path.join(options._tplDir, options.tplName!));
}

function parseExtraArgs(options: Schema) {
  const org = options['--'] as string[];
  if (!org || !Array.isArray(org)) {
    return;
  }
  options.extraArgs = {};
  org.forEach(val => {
    const argArr = val.substr(2).split('=');
    if (argArr.length === 2) {
      options.extraArgs[argArr[0]] = argArr[1];
    }
  });
}

function runFixJS(options: Schema) {
  parseExtraArgs(options);
  const fixScriptPath = path.join(options._tplDir, '_fix.js');
  if (fs.existsSync(fixScriptPath)) {
    return import(path.relative(__dirname, fixScriptPath)).then(a => {
      if (a.fix) {
        return a.fix(options);
      }
      return Promise.resolve();
    });
  }
  return Promise.resolve();
}

export default function(options: Schema): Rule {
  genFiles(options);
  return (): Promise<Rule> => {
    return runFixJS(options).then(() => buildAlain({ schematicName: 'tpl', ...options }));
  };
}
