import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createAlainAndModuleApp } from '../utils/testing';

describe('Schematic: empty', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  describe('[with module]', () => {
    const modulePath = '/projects/foo/src/app/routes/trade/trade.module.ts';
    const routingPath = '/projects/foo/src/app/routes/trade/trade-routing.module.ts';
    const tsPath = '/projects/foo/src/app/routes/trade/list/list.component.ts';
    const servicePath = '/projects/foo/src/app/routes/trade/list/list.service.ts';
    const htmlPath = '/projects/foo/src/app/routes/trade/list/list.component.html';

    describe('', () => {
      beforeEach(async () => {
        ({ runner, tree } = await createAlainAndModuleApp({ moduleSchema: { standalone: false } }));
      });

      it('should be generate list page', async () => {
        tree = await runner.runSchematic('empty', { name: 'list', module: 'trade', standalone: false }, tree);
        [modulePath, routingPath, tsPath, htmlPath].forEach(path => expect(tree.exists(path)).toBe(true));
        expect(tree.exists(servicePath)).toBe(false);
        expect(tree.readContent(modulePath)).toContain(`import { TradeListComponent } from './list/list.component';`);
        expect(tree.readContent(tsPath)).toContain(`TradeListComponent`);
        expect(tree.readContent(tsPath)).not.toContain(`styleUrls`);
      });

      it('shuold be include service', async () => {
        tree = await runner.runSchematic(
          'empty',
          { name: 'list', module: 'trade', service: 'none', standalone: false },
          tree
        );
        expect(tree.readContent(servicePath)).toContain(`@Injectable()`);
        expect(tree.readContent(modulePath)).toContain(`TradeService`);
      });

      it('shuold be include root service', async () => {
        tree = await runner.runSchematic(
          'empty',
          { name: 'list', module: 'trade', service: 'root', standalone: false },
          tree
        );
        expect(tree.readContent(servicePath)).toContain(`@Injectable({ providedIn: 'root' })`);
      });
    });

    it('should be specify routesRoot in ng-alain.json', async () => {
      const alainJson = { projects: { foo: { routesRoot: 'app/pages' } } };
      ({ runner, tree } = await createAlainAndModuleApp({
        alainData: alainJson,
        moduleSchema: { standalone: false }
      }));
      tree = await runner.runSchematic('empty', { name: 'list', module: 'trade', standalone: false }, tree);
      expect(tree.exists('/projects/foo/src/app/pages/trade/trade.module.ts')).toBe(true);
    });
  });

  describe('[with standalone]', () => {
    const routingPath = '/projects/foo/src/app/routes/trade/routes.ts';
    const tsPath = '/projects/foo/src/app/routes/trade/list/list.component.ts';
    const servicePath = '/projects/foo/src/app/routes/trade/list/list.service.ts';
    const htmlPath = '/projects/foo/src/app/routes/trade/list/list.component.html';

    describe('', () => {
      beforeEach(async () => {
        ({ runner, tree } = await createAlainAndModuleApp({ moduleSchema: { standalone: true } }));
      });

      it('should be working', async () => {
        tree = await runner.runSchematic('empty', { name: 'list', module: 'trade', standalone: true }, tree);
        [routingPath, tsPath, htmlPath].forEach(path => expect(tree.exists(path)).toBe(true));
        expect(tree.exists(servicePath)).toBe(false);
        expect(tree.readContent(tsPath)).toContain(`standalone: true,`);
        expect(tree.readContent(tsPath)).toContain(`SHARED_IMPORTS`);
        expect(tree.readContent(tsPath)).toContain(`TradeListComponent`);
        expect(tree.readContent(tsPath)).not.toContain(`styleUrls`);
      });

      it('shuold be include service', async () => {
        tree = await runner.runSchematic(
          'empty',
          { name: 'list', module: 'trade', service: 'none', standalone: true },
          tree
        );
        expect(tree.readContent(servicePath)).toContain(`@Injectable()`);
      });

      it('shuold be include root service', async () => {
        tree = await runner.runSchematic(
          'empty',
          { name: 'list', module: 'trade', service: 'root', standalone: true },
          tree
        );
        expect(tree.readContent(servicePath)).toContain(`@Injectable({ providedIn: 'root' })`);
      });
    });

    it('should be specify routesRoot in ng-alain.json', async () => {
      const alainJson = { projects: { foo: { routesRoot: 'app/pages' } } };
      ({ runner, tree } = await createAlainAndModuleApp({
        alainData: alainJson,
        moduleSchema: { standalone: true }
      }));
      tree = await runner.runSchematic('empty', { name: 'list', module: 'trade', standalone: true }, tree);
      expect(tree.exists('/projects/foo/src/app/pages/trade/routes.ts')).toBe(true);
    });
  });
});
