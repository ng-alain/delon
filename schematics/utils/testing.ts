import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { join } from 'path';

import { Schema as NgAddSchema } from '../ng-add/schema';

/** Path to the collection file for the Material schematics */
export const collectionPath = join(__dirname, '..', 'collection.json');

/** Path to the migration file for the Material update schematics */
export const migrationCollection = join(__dirname, '..', 'migration.json');

export const APPNAME = 'foo';
export const FILE_PREFIX = `/projects/${APPNAME}`;

export interface AppResult {
  runner: SchematicTestRunner;
  tree: UnitTestTree;
}

export function createNgRunner(): SchematicTestRunner {
  return new SchematicTestRunner('schematics', join('./node_modules/@schematics/angular/collection.json'));
}

export function createAlainRunner(): SchematicTestRunner {
  return new SchematicTestRunner('schematics', collectionPath);
}

export async function createAlainApp(ngAddOptions?: NgAddSchema): Promise<AppResult> {
  const baseRunner = createNgRunner();
  const workspaceTree = await baseRunner
    .runSchematicAsync('workspace', {
      name: 'workspace',
      newProjectRoot: 'projects',
      version: '8.0.0'
    })
    .toPromise();
  const appTree = await baseRunner
    .runSchematicAsync(
      'application',
      {
        name: APPNAME,
        inlineStyle: false,
        inlineTemplate: false,
        routing: false,
        style: 'css',
        skipTests: false,
        skipPackageJson: false
      },
      workspaceTree
    )
    .toPromise();
  const alainRunner = createAlainRunner();
  const tree = await alainRunner
    .runSchematicAsync(
      'ng-add',
      {
        skipPackageJson: false,
        ...ngAddOptions
      },
      appTree
    )
    .toPromise();
  return { runner: alainRunner, tree };
}

export async function createAlainAndModuleApp(
  name: string = 'trade',
  ngAddOptions?: object,
  alainData?: unknown
): Promise<AppResult> {
  const res = await createAlainApp(ngAddOptions);
  if (alainData != null) {
    res.tree.create('ng-alain.json', JSON.stringify(alainData));
  }
  res.tree = await res.runner
    .runSchematicAsync('module', { name, project: APPNAME, routing: true }, res.tree)
    .toPromise();
  return res;
}

export async function createTestApp(): Promise<{ runner: SchematicTestRunner; tree: UnitTestTree }> {
  const runner = await createNgRunner();
  const workspaceTree = await runner
    .runSchematicAsync('workspace', {
      name: 'workspace',
      newProjectRoot: 'projects',
      version: '8.0.0'
    })
    .toPromise();
  const appTree = await runner
    .runSchematicAsync(
      'application',
      {
        name: APPNAME,
        inlineStyle: false,
        inlineTemplate: false,
        routing: false,
        style: 'css',
        skipTests: false,
        skipPackageJson: false
      },
      workspaceTree
    )
    .toPromise();
  return { runner, tree: appTree };
}
