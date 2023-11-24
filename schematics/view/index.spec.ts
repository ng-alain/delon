import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createAlainAndModuleApp } from '../utils/testing';

describe('Schematic: view', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  describe('[with module]', () => {
    const modulePath = '/projects/foo/src/app/routes/trade/trade.module.ts';
    const routingPath = '/projects/foo/src/app/routes/trade/trade-routing.module.ts';
    const tsPath = '/projects/foo/src/app/routes/trade/view/view.component.ts';
    const htmlPath = '/projects/foo/src/app/routes/trade/view/view.component.html';

    beforeEach(async () => {
      ({ runner, tree } = await createAlainAndModuleApp({ moduleSchema: { standalone: false } }));
      tree = await runner.runSchematic('view', { name: 'view', module: 'trade', standalone: false }, tree);
    });

    it('should be generate list page', () => {
      [modulePath, routingPath, tsPath, htmlPath].forEach(path => expect(tree.exists(path)).toBe(true));
      expect(tree.readContent(modulePath)).toContain(`import { TradeViewComponent } from './view/view.component';`);
    });

    it('should support a.b.c module name', async () => {
      tree = await runner.runSchematic(
        'view',
        { name: 'view', module: 'trade', target: 'list', standalone: false },
        tree
      );
      expect(tree.exists('/projects/foo/src/app/routes/trade/list/view/view.component.ts')).toBe(true);
    });
  });

  describe('[with standalone]', () => {
    const routingPath = '/projects/foo/src/app/routes/trade/routes.ts';
    const tsPath = '/projects/foo/src/app/routes/trade/view/view.component.ts';
    const htmlPath = '/projects/foo/src/app/routes/trade/view/view.component.html';

    beforeEach(async () => {
      ({ runner, tree } = await createAlainAndModuleApp({ moduleSchema: { standalone: true } }));
      tree = await runner.runSchematic('view', { name: 'view', module: 'trade', standalone: true }, tree);
    });

    it('should be generate list page', () => {
      [routingPath, tsPath, htmlPath].forEach(path => expect(tree.exists(path)).toBe(true));
      expect(tree.readContent(routingPath)).not.toContain(
        `import { TradeViewComponent } from './view/view.component';`
      );
    });

    it('should support a.b.c module name', async () => {
      tree = await runner.runSchematic(
        'view',
        { name: 'view', module: 'trade', target: 'list', standalone: true },
        tree
      );
      expect(tree.exists('/projects/foo/src/app/routes/trade/list/view/view.component.ts')).toBe(true);
    });
  });
});
