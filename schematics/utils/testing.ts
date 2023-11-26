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
  const workspaceTree = await baseRunner.runSchematic('workspace', {
    name: 'workspace',
    newProjectRoot: 'projects',
    version: '8.0.0'
  });
  const appTree = await baseRunner.runSchematic(
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
  );
  const alainRunner = createAlainRunner();
  const tree = await alainRunner.runSchematic(
    'ng-add',
    {
      skipPackageJson: false,
      ...ngAddOptions
    },
    appTree
  );
  return { runner: alainRunner, tree };
}

export interface CreateAlainBaseSchema {
  standalone?: boolean;
}

export async function createAlainAndModuleApp(options?: {
  name?: string;
  ngAddSchema?: NgAddSchema;
  moduleSchema?: CreateAlainBaseSchema;
  alainData?: unknown;
}): Promise<AppResult> {
  const res = await createAlainApp(options?.ngAddSchema);
  if (options?.alainData != null) {
    res.tree.create('ng-alain.json', JSON.stringify(options?.alainData));
  }
  const moduleOptions = { name: options?.name ?? 'trade', project: APPNAME, routing: true, ...options?.moduleSchema };
  res.tree = await res.runner.runSchematic('module', moduleOptions, res.tree);
  return res;
}

export async function createTestApp(): Promise<{ runner: SchematicTestRunner; tree: UnitTestTree }> {
  const runner = await createNgRunner();
  const workspaceTree = await runner.runSchematic('workspace', {
    name: 'workspace',
    newProjectRoot: 'projects',
    version: '8.0.0'
  });
  const appTree = await runner.runSchematic(
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
  );
  return { runner, tree: appTree };
}
