import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { createAlainApp } from '../utils/testing';
import { Schema as ModuleOptions } from './schema';

describe('NgAlainSchematic: module', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;
  const defaultOptions: ModuleOptions = {
    project: 'foo',
    name: 'trade',
    routing: true,
    flat: false,
  };
  beforeEach(async () => {
    ({ runner, tree } = await createAlainApp());
  });

  it('should create a module', async () => {
    tree = await runner.runSchematicAsync('module', { ...defaultOptions }, tree).toPromise();
    expect(tree.files.includes('/projects/foo/src/app/routes/trade/trade.module.ts')).toBe(true);
    expect(tree.files.includes('/projects/foo/src/app/routes/trade/trade-routing.module.ts')).toBe(true);
    const routesRoutingModuleContent = tree.readContent(`/projects/foo/src/app/routes/routes-routing.module.ts`);
    expect(routesRoutingModuleContent).toContain(
      `{ path: 'trade', loadChildren: () => import('./trade/trade.module').then((m) => m.TradeModule) }`,
    );
  });

  it('should import into another module', async () => {
    tree = await runner
      .runSchematicAsync('module', { ...defaultOptions, module: 'app.module.ts', path: '/projects/foo/src/app' }, tree)
      .toPromise();
    const content = tree.readContent('/projects/foo/src/app/app.module.ts');
    expect(content).toContain(`import { TradeModule } from './trade/trade.module';`);
  });
});
