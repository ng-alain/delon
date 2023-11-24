import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as fs from 'fs';

import { createAlainAndModuleApp } from '../utils/testing';

describe('Schematic: list', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  describe('[with module]', () => {
    const modulePath = '/projects/foo/src/app/routes/trade/trade.module.ts';
    const routingPath = '/projects/foo/src/app/routes/trade/trade-routing.module.ts';
    const tsPath = '/projects/foo/src/app/routes/trade/list/list.component.ts';
    const htmlPath = '/projects/foo/src/app/routes/trade/list/list.component.html';

    beforeEach(async () => {
      ({ runner, tree } = await createAlainAndModuleApp({ moduleSchema: { standalone: false } }));

      tree = await runner.runSchematic('list', { name: 'list', module: 'trade', standalone: false }, tree);
    });

    it('should be generate list page', () => {
      [modulePath, routingPath, tsPath, htmlPath].forEach(path => expect(tree.exists(path)).toBe(true));
    });

    it('should be has import code', () => {
      expect(tree.readContent(modulePath)).toContain(`import { TradeListComponent } from './list/list.component';`);
    });

    it('should be include module name in component name', () => {
      expect(tree.readContent(tsPath)).toContain(`TradeListComponent`);
    });

    it('shuold be exclude style', () => {
      expect(tree.readContent(tsPath)).not.toContain(`styleUrls`);
    });

    it('should be support targets (like: list/edit)', async () => {
      tree = await runner.runSchematic(
        'list',
        { name: 'list2', module: 'trade', target: 'list/edit', standalone: false },
        tree
      );
      expect(tree.exists(`/projects/foo/src/app/routes/trade/list/edit/list2/list2.component.html`)).toBe(true);
    });

    it('should be throw error when directory already exists', async () => {
      spyOn(fs, 'existsSync').and.returnValue(true);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      spyOn(fs, 'readdirSync').and.returnValue({ length: 1 } as any);
      try {
        tree = await runner.runSchematic('list', { name: 'list', module: 'trade', standalone: false }, tree);
        expect(true).toBe(false);
      } catch (e) {
        expect(e.message).toContain(`already exists`);
      }
    });

    it('shuold be include service', async () => {
      tree = await runner.runSchematic(
        'list',
        { name: 'list', module: 'trade', service: 'none', standalone: false },
        tree
      );
      const servicePath = '/projects/foo/src/app/routes/trade/list/list.service.ts';
      expect(tree.readContent(servicePath)).toContain(`@Injectable()`);
      expect(tree.readContent(modulePath)).toContain(`TradeService`);
    });
  });
});
