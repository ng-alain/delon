import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { logInfo, readPackage, writePackage } from '../../../utils';

const PACKAGE_NAME = 'ng-less-javascript-enabled-patch';
export function removeNljep(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const json = readPackage(tree);
    if (json == null) return;
    if (!json.devDependencies[PACKAGE_NAME]) return;
    const postinstall = json.scripts.postinstall;
    if (typeof postinstall !== 'string') return;
    if (!postinstall.includes(PACKAGE_NAME)) return;

    json.scripts.postinstall = postinstall.replace(`${PACKAGE_NAME}`, '');
    delete json.devDependencies[PACKAGE_NAME];

    writePackage(tree, json);

    logInfo(context, `Remove [https://github.com/cipchk/${PACKAGE_NAME}] for devDependencies`);
  };
}
