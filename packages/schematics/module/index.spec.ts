import { UnitTestTree } from '@angular-devkit/schematics/testing';
import { Schema as ApplicationOptions, Style } from '@schematics/angular/application/schema';
import { Schema as WorkspaceOptions } from '@schematics/angular/workspace/schema';
import { createNgRunner } from '../utils/testing';
import { Schema as ModuleOptions } from './schema';

// tslint:disable:max-line-length
describe('NgAlainSchematic: module', () => {
  const defaultOptions: ModuleOptions = {
    name: 'foo',
    module: undefined,
    flat: false,
    project: 'bar',
  };

  const schematicRunner = createNgRunner();
  const workspaceOptions: WorkspaceOptions = {
    name: 'workspace',
    newProjectRoot: 'projects',
    version: '6.0.0',
  };
  const appOptions: ApplicationOptions = {
    name: 'bar',
    inlineStyle: false,
    inlineTemplate: false,
    routing: false,
    style: Style.Css,
    skipTests: false,
    skipPackageJson: false,
  };
  let appTree: UnitTestTree;
  beforeEach(async () => {
    appTree = await schematicRunner.runSchematicAsync('workspace', workspaceOptions).toPromise();
    appTree = await schematicRunner
      .runSchematicAsync('application', appOptions, appTree)
      .toPromise();
  });

  it('should create a module', async () => {
    const options = { ...defaultOptions };

    const tree = await schematicRunner.runSchematicAsync('module', options, appTree).toPromise();
    const files = tree.files;
    expect(files.indexOf('/projects/bar/src/app/foo/foo.module.ts')).toBeGreaterThanOrEqual(0);
  });

  it('should import into another module', async () => {
    const options = { ...defaultOptions, module: 'app.module.ts' };

    const tree = await schematicRunner.runSchematicAsync('module', options, appTree).toPromise();
    const content = tree.readContent('/projects/bar/src/app/app.module.ts');
    expect(content).toMatch(/import { FooModule } from '.\/foo\/foo.module'/);
    expect(content).toMatch(/imports: \[[^\]]*FooModule[^\]]*\]/m);
  });

  it('should import into another module (deep)', async () => {
    let tree = appTree;

    tree = await schematicRunner
      .runSchematicAsync(
        'module',
        {
          ...defaultOptions,
          path: 'projects/bar/src/app/sub1',
          name: 'test1',
        },
        tree,
      )
      .toPromise();
    tree = await schematicRunner
      .runSchematicAsync(
        'module',
        {
          ...defaultOptions,
          path: 'projects/bar/src/app/sub2',
          name: 'test2',
          module: '../sub1/test1',
        },
        tree,
      )
      .toPromise();

    const content = tree.readContent('/projects/bar/src/app/sub1/test1/test1.module.ts');
    expect(content).toMatch(/import { Test2Module } from '..\/..\/sub2\/test2\/test2.module'/);
  });

  it('should create a routing module', async () => {
    const options = { ...defaultOptions, routing: true };

    const tree = await schematicRunner.runSchematicAsync('module', options, appTree).toPromise();
    const files = tree.files;
    expect(files.indexOf('/projects/bar/src/app/foo/foo.module.ts')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/projects/bar/src/app/foo/foo-routing.module.ts')).toBeGreaterThanOrEqual(
      0,
    );
    const moduleContent = tree.readContent('/projects/bar/src/app/foo/foo.module.ts');
    expect(moduleContent).toMatch(/import { FooRoutingModule } from '.\/foo-routing.module'/);
    const routingModuleContent = tree.readContent(
      '/projects/bar/src/app/foo/foo-routing.module.ts',
    );
    expect(routingModuleContent).toMatch(/RouterModule.forChild\(routes\)/);
  });

  it('should respect the spec flag', async () => {
    const options = { ...defaultOptions, spec: false };

    const tree = await schematicRunner.runSchematicAsync('module', options, appTree).toPromise();
    const files = tree.files;
    expect(files.indexOf('/projects/bar/src/app/foo/foo.module.ts')).toBeGreaterThanOrEqual(0);
    expect(files.indexOf('/projects/bar/src/app/foo/foo.module.spec.ts')).toEqual(-1);
  });

  it('should dasherize a name', async () => {
    const options = { ...defaultOptions, name: 'TwoWord' };

    const tree = await schematicRunner.runSchematicAsync('module', options, appTree).toPromise();
    const files = tree.files;
    expect(
      files.indexOf('/projects/bar/src/app/two-word/two-word.module.ts'),
    ).toBeGreaterThanOrEqual(0);
  });
});
