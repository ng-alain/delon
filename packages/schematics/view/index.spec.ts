import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { createAlainAndModuleApp } from '../utils/testing';
import { Schema as NgAddOptions } from './schema';

describe('Schematic: view', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;
  const modulePath = '/foo/src/app/routes/trade/trade.module.ts';
  const routingPath = '/foo/src/app/routes/trade/trade-routing.module.ts';
  const tsPath = '/foo/src/app/routes/trade/view/view.component.ts';
  const htmlPath = '/foo/src/app/routes/trade/view/view.component.html';

  beforeEach(() => {
    ({ runner, tree } = createAlainAndModuleApp());
    tree = runner.runSchematic('view', { name: 'view', module: 'trade' }, tree);
  });

  it('should be generate list page', () => {
    [modulePath, routingPath, tsPath, htmlPath].forEach(path =>
      expect(tree.exists(path)).toBe(true),
    );
  });

  it('should be has import code', () => {
    expect(tree.readContent(modulePath)).toContain(
      `import { TradeViewComponent } from './view/view.component';`,
    );
  });

  it('should not be imported into COMPONENTS', () => {
    expect(tree.readContent(modulePath)).toContain(`const COMPONENTS = []`);
  });

  it('should support a.b.c module name', () => {
    tree = runner.runSchematic('view', { name: 'view', module: 'trade', target: 'list' }, tree);
    expect(tree.exists('/foo/src/app/routes/trade/list/view/view.component.ts')).toBe(true);
  });
});
