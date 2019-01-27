import {
  chain,
  Rule,
  SchematicsException,
  SchematicContext,
  Tree,
} from '@angular-devkit/schematics';
import * as fs from 'fs';
import * as path from 'path';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { buildAlain } from '../utils/alain';
import { Schema } from './schema';

const REFER =
  ', please refer to: https://ng-alain.com/cli/generate#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A1%B5';

function genFiles(options: Schema) {
  return (host: Tree, context: SchematicContext) => {
    options._tplDir = path.join(process.cwd(), './_cli-tpl');
    try {
      fs.accessSync(options._tplDir);
    } catch {
      throw new SchematicsException(`Invalid path [${options._tplDir}]${REFER}`);
    }
    const names = fs.readdirSync(options._tplDir);
    if (names.indexOf(options.tplName) === -1) {
      throw new SchematicsException(`Could not find name [${options.tplName}] templates${REFER}`);
    }

    options._filesPath = path.relative(__dirname, path.join(options._tplDir, options.tplName));
  };
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
  return (host: Tree, context: SchematicContext) => {
    return of(host).pipe(
      mergeMap(val => {
        const fixScriptPath = path.join(options._tplDir, '_fix.js');
        if (fs.existsSync(fixScriptPath)) {
          return import(path.relative(__dirname, fixScriptPath)).then(a => {
            if (a.fix) {
              return a.fix(options).then(() => val);
            }
            return val;
          });
        }
        return Promise.resolve(val);
      }),
    );
  };
}

export default function(options: Schema): Rule {
  return chain([genFiles(options), runFixJS(options), buildAlain(options)]);
}
