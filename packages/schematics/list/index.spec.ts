import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { createAlainAndModuleApp } from '../utils/testing';

describe('Schematic: list', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;
  const modulePath = '/foo/src/app/routes/trade/trade.module.ts';
  const routingPath = '/foo/src/app/routes/trade/trade-routing.module.ts';
  const tsPath = '/foo/src/app/routes/trade/list/list.component.ts';
  const htmlPath = '/foo/src/app/routes/trade/list/list.component.html';

  beforeEach(() => {
    ({ runner, tree } = createAlainAndModuleApp());
    tree = runner.runSchematic('list', { name: 'list', module: 'trade' }, tree);
  });

  it('should be generate list page', () => {
    [modulePath, routingPath, tsPath, htmlPath].forEach(path =>
      expect(tree.exists(path)).toBe(true),
    );
  });

  it('should be has import code', () => {
    expect(tree.readContent(modulePath)).toContain(
      `import { TradeListComponent } from './list/list.component';`,
    );
  });

  it('should be include module name in component name', () => {
    expect(tree.readContent(tsPath)).toContain(`TradeListComponent`);
  });

  it('shuold be exclude style', () => {
    expect(tree.readContent(tsPath)).not.toContain(`styleUrls`);
  });

  it('should be support targets (like: list/edit)', () => {
    tree = runner.runSchematic(
      'list',
      { name: 'list2', module: 'trade', target: 'list/edit' },
      tree,
    );
    expect(tree.exists(`/foo/src/app/routes/trade/list/edit/list2/list2.component.html`)).toBe(
      true,
    );
  });
});
