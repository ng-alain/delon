import { Rule, chain, Tree, SchematicContext, SchematicsException } from '@angular-devkit/schematics';
import * as path from 'path';
import * as fs from 'fs';
import { Schema } from './schema';
import { buildAlain } from '../utils/alain';
import { getProject } from '../utils/project';
import { buildRelativePath } from '../utils/devkit-utils/find-module';

const REFER = ', please refer to: https://ng-alain.com/cli/generate#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A1%B5';

function genFiles(options: Schema) {
  return (host: Tree, context: SchematicContext) => {
    const project = getProject(host, options.project);
    const tplDir = path.join(process.cwd(), './_cli-tpl');
    try {
      fs.accessSync(tplDir);
    } catch {
      throw new SchematicsException(
        `Invalid path [${tplDir}]${REFER}`,
      );
    }
    const names = fs.readdirSync(tplDir);
    if (names.indexOf(options.tplName) === -1) {
      throw new SchematicsException(
        `Could not find name [${options.tplName}] templates${REFER}`,
      );
    }

    (options as any)._filesPath = path.relative(__dirname, path.join(tplDir, options.tplName));
  };
}

export default function(options: Schema): Rule {
  return chain([genFiles(options), buildAlain(options)]);
}
