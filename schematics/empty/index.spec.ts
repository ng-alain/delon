import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createAlainAndModuleApp } from '../utils/testing';

describe('Schematic: empty', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;
  const modulePath = '/projects/foo/src/app/routes/trade/trade.module.ts';
  const routingPath = '/projects/foo/src/app/routes/trade/trade-routing.module.ts';
  const tsPath = '/projects/foo/src/app/routes/trade/list/list.component.ts';
  const servicePath = '/projects/foo/src/app/routes/trade/list/list.service.ts';
  const htmlPath = '/projects/foo/src/app/routes/trade/list/list.component.html';

  describe('', () => {
    beforeEach(async () => {
      ({ runner, tree } = await createAlainAndModuleApp());
    });

    it('should be generate list page', async () => {
      tree = await runner.runSchematicAsync('empty', { name: 'list', module: 'trade' }, tree).toPromise();
      [modulePath, routingPath, tsPath, htmlPath].forEach(path => expect(tree.exists(path)).toBe(true));
      expect(tree.exists(servicePath)).toBe(false);
    });

    it('should be has import code', async () => {
      tree = await runner.runSchematicAsync('empty', { name: 'list', module: 'trade' }, tree).toPromise();
      expect(tree.readContent(modulePath)).toContain(`import { TradeListComponent } from './list/list.component';`);
    });

    it('should be include module name in component name', async () => {
      tree = await runner.runSchematicAsync('empty', { name: 'list', module: 'trade' }, tree).toPromise();
      expect(tree.readContent(tsPath)).toContain(`TradeListComponent`);
    });

    it('shuold be exclude style', async () => {
      tree = await runner.runSchematicAsync('empty', { name: 'list', module: 'trade' }, tree).toPromise();
      expect(tree.readContent(tsPath)).not.toContain(`styleUrls`);
    });

    it('shuold be include service', async () => {
      tree = await runner
        .runSchematicAsync('empty', { name: 'list', module: 'trade', service: 'None' }, tree)
        .toPromise();
      expect(tree.readContent(servicePath)).toContain(`@Injectable()`);
      expect(tree.readContent(modulePath)).toContain(`TradeListService`);
    });

    it('shuold be include root service', async () => {
      tree = await runner
        .runSchematicAsync('empty', { name: 'list', module: 'trade', service: 'Root' }, tree)
        .toPromise();
      expect(tree.readContent(servicePath)).toContain(`@Injectable({ providedIn: 'root' })`);
    });
  });

  describe('ng-alain.json', () => {
    it('should be specify routesRoot', async () => {
      const alainJson = { projects: { foo: { routesRoot: 'app/pages' } } };
      ({ runner, tree } = await createAlainAndModuleApp('trade', null, alainJson));
      tree = await runner.runSchematicAsync('empty', { name: 'list', module: 'trade' }, tree).toPromise();
      expect(tree.exists('/projects/foo/src/app/pages/trade/trade.module.ts')).toBe(true);
    });
  });
});
