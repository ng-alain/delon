import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { join } from 'path';
import { Schema as NgAddSchema } from '../ng-add/schema';

export const APPNAME = 'foo';

export interface AppResult {
  runner: SchematicTestRunner;
  tree: UnitTestTree;
}

export function createNgRunner() {
  return new SchematicTestRunner('schematics', join('./node_modules/@schematics/angular/collection.json'));
}

export function createAlainRunner() {
  return new SchematicTestRunner('schematics', join(__dirname, '../collection.json'));
}

export async function createAlainApp(ngAddOptions?: NgAddSchema): Promise<AppResult> {
  const baseRunner = createNgRunner();
  const workspaceTree = await baseRunner
    .runSchematicAsync('workspace', {
      name: 'workspace',
      newProjectRoot: 'projects',
      version: '6.0.0',
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
        skipPackageJson: false,
      },
      workspaceTree,
    )
    .toPromise();
  const alainRunner = createAlainRunner();
  const tree = await alainRunner
    .runSchematicAsync(
      'ng-add',
      {
        skipPackageJson: false,
        ...ngAddOptions,
      },
      appTree,
    )
    .toPromise();
  return { runner: alainRunner, tree };
}

export async function createAlainAndModuleApp(name = 'trade', ngAddOptions?: object): Promise<AppResult> {
  const res = await createAlainApp(ngAddOptions);
  res.tree = await res.runner.runSchematicAsync('module', { name, project: APPNAME, routing: true }, res.tree).toPromise();
  return res;
}

export async function createTestApp(): Promise<UnitTestTree> {
  const res = await createNgRunner()
    .runSchematicAsync('ng-new', {
      name: APPNAME,
      directory: '',
      version: '6.0.0',
      routing: true,
      style: 'less',
    })
    .toPromise();
  return res;
}
