import { join } from 'path';
import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import { Schema as NgAddSchema } from '../ng-add/schema.d';

export const APPNAME = 'foo';

export function createNgRunner() {
  return new SchematicTestRunner(
    'schematics',
    join('./node_modules/@schematics/angular/collection.json'),
  );
}

export function createAlainRunner() {
  return new SchematicTestRunner(
    'schematics',
    join(__dirname, '../collection.json'),
  );
}

export function createAlainApp(
  ngAddOptions?: NgAddSchema,
): {
  runner: SchematicTestRunner;
  tree: UnitTestTree;
} {
  const baseRunner = createNgRunner();
  const workspaceTree = baseRunner.runSchematic('workspace', {
    name: 'workspace',
    newProjectRoot: '',
    version: '6.0.0',
  });
  const appTree = baseRunner.runSchematic(
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
  );
  const alainRunner = createAlainRunner();
  const tree = alainRunner.runSchematic(
    'ng-add',
    Object.assign(
      {
        skipPackageJson: false,
      },
      ngAddOptions,
    ),
    appTree,
  );
  return { runner: alainRunner, tree };
}

export function createAlainAndModuleApp(
  name = 'trade',
  ngAddOptions?: object,
): {
  runner: SchematicTestRunner;
  tree: UnitTestTree;
} {
  const res = createAlainApp(ngAddOptions);
  res.tree = res.runner.runSchematic(
    'module',
    { name, project: APPNAME, routing: true },
    res.tree,
  );
  return res;
}

export function createTestApp(): UnitTestTree {
  return createNgRunner().runSchematic('ng-new', {
    name: APPNAME,
    directory: '',
    version: '6.0.0',
    routing: true,
    style: 'less',
  });
}
