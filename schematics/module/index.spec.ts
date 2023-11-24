import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { Schema as ModuleOptions } from './schema';
import { createAlainApp } from '../utils/testing';

describe('NgAlainSchematic: module', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;
  const defaultOptions: ModuleOptions = {
    project: 'foo',
    name: 'trade',
    routing: true,
    flat: false
  };
  beforeEach(async () => {
    ({ runner, tree } = await createAlainApp());
  });

  describe('[when is module]', () => {
    it('should create a module', async () => {
      tree = await runner.runSchematic('module', { ...defaultOptions, standalone: false }, tree);
      expect(tree.files.includes('/projects/foo/src/app/routes/trade/trade.module.ts')).toBe(true);
      expect(tree.files.includes('/projects/foo/src/app/routes/trade/trade-routing.module.ts')).toBe(true);
    });

    it('should import into another module', async () => {
      tree = await runner.runSchematic('module', { ...defaultOptions, standalone: false }, tree);
      tree = await runner.runSchematic(
        'module',
        {
          ...defaultOptions,
          name: 'sys',
          module: 'trade.module.ts',
          path: '/projects/foo/src/app/routes/trade',
          standalone: false
        },
        tree
      );
      const content = tree.readContent('/projects/foo/src/app/routes/trade/trade.module.ts');
      expect(content).toContain(`import { SysModule } from './sys/sys.module';`);
    });

    it('shuold be include service', async () => {
      tree = await runner.runSchematic('module', { ...defaultOptions, service: 'none', standalone: false }, tree);
      const content = tree.readContent('/projects/foo/src/app/routes/trade/trade.service.ts');
      const contentModule = tree.readContent('/projects/foo/src/app/routes/trade/trade.module.ts');
      expect(content).toContain(`@Injectable()`);
      expect(content).toContain(`TradeService`);
      expect(contentModule).toContain(`import { TradeService } from './trade.service';`);
    });

    it('shuold be include root service', async () => {
      tree = await runner.runSchematic('module', { ...defaultOptions, service: 'root', standalone: false }, tree);
      const content = tree.readContent('/projects/foo/src/app/routes/trade/trade.service.ts');
      expect(content).toContain(`@Injectable({ providedIn: 'root' })`);
      expect(content).toContain(`TradeService`);
    });
  });

  describe('when is standalone', () => {
    it('should be working', async () => {
      tree = await runner.runSchematic('module', { ...defaultOptions, standalone: true }, tree);
      const path = '/projects/foo/src/app/routes/trade/routes.ts';
      expect(tree.files.includes(path)).toBe(true);
      const pathContent = tree.readContent(path);
      expect(pathContent).toContain(`export const routes: Routes = [`);

      const rootPath = '/projects/foo/src/app/routes/routes.ts';
      expect(tree.files.includes(rootPath)).toBe(true);
      const rootContent = tree.readContent(rootPath);
      expect(rootContent).toContain(`import('./trade/routes').then((m) => m.routes)`);
    });
  });
});
