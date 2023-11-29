import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createAlainAndModuleApp } from '../utils/testing';

describe('Schematic: edit', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  describe('[with module]', () => {
    const modulePath = '/projects/foo/src/app/routes/trade/trade.module.ts';
    const routingPath = '/projects/foo/src/app/routes/trade/trade-routing.module.ts';
    const tsPath = '/projects/foo/src/app/routes/trade/edit/edit.component.ts';
    const htmlPath = '/projects/foo/src/app/routes/trade/edit/edit.component.html';

    beforeEach(async () => {
      ({ runner, tree } = await createAlainAndModuleApp({ moduleSchema: { standalone: false } }));
    });

    it('should be working', async () => {
      tree = await runner.runSchematic('edit', { name: 'edit', module: 'trade', standalone: false }, tree);
      [modulePath, routingPath, tsPath, htmlPath].forEach(path => expect(tree.exists(path)).toBe(true));
      expect(tree.readContent(modulePath)).toContain(`import { TradeEditComponent } from './edit/edit.component';`);
      expect(tree.readContent(routingPath)).not.toContain(
        `import { TradeEditComponent } from './edit/edit.component';`
      );
    });

    it('when modal is false', async () => {
      tree = await runner.runSchematic(
        'edit',
        { name: 'edit', module: 'trade', standalone: false, modal: false },
        tree
      );
      const cont = tree.readContent(routingPath);
      expect(cont).toContain(`{ path: 'edit', component: TradeEditComponent }`);
    });
  });

  describe('[with standalone]', () => {
    const routingPath = '/projects/foo/src/app/routes/trade/routes.ts';
    const tsPath = '/projects/foo/src/app/routes/trade/edit/edit.component.ts';
    const htmlPath = '/projects/foo/src/app/routes/trade/edit/edit.component.html';

    beforeEach(async () => {
      ({ runner, tree } = await createAlainAndModuleApp({ moduleSchema: { standalone: true } }));
    });

    it('should be working', async () => {
      tree = await runner.runSchematic('edit', { name: 'edit', module: 'trade', standalone: true }, tree);
      [routingPath, tsPath, htmlPath].forEach(path => expect(tree.exists(path)).toBe(true));
      const cont = tree.readContent(routingPath);
      expect(cont).not.toContain(`import { TradeEditComponent } from './edit/edit.component';`);
    });

    it('when modal is false', async () => {
      tree = await runner.runSchematic('edit', { name: 'edit', module: 'trade', standalone: true, modal: false }, tree);
      const cont = tree.readContent(routingPath);
      expect(cont).toContain(`{ path: 'edit', component: TradeEditComponent }`);
    });
  });
});
