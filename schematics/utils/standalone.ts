import { isStandaloneSchematic } from '@angular/cdk/schematics';

import { Tree } from '@angular-devkit/schematics';

export async function isStandalone(tree: Tree, schemaStandalone: boolean, projectName: string): Promise<boolean> {
  if (schemaStandalone != null) return schemaStandalone;
  return await isStandaloneSchematic(tree, { project: projectName, name: projectName });
}
