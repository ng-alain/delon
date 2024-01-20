import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { logInfo, readPackage, writePackage } from '../../../utils';

const PACKAGE_NAME = 'ng-less-javascript-enabled-patch';
export function addNljep(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const json = readPackage(tree);
    if (json == null) return;
    if (json.devDependencies[PACKAGE_NAME]) return;

    if (typeof json.scripts.postinstall !== 'string') json.scripts.postinstall = '';
    if (json.scripts.postinstall.length > 0) json.scripts.postinstall += ' && ';
    json.scripts.postinstall += PACKAGE_NAME;

    json.devDependencies[PACKAGE_NAME] = '^17.0.0';
    writePackage(tree, json);

    logInfo(context, `Add [https://github.com/cipchk/${PACKAGE_NAME}] for devDependencies`);
  };
}
