import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { createAlainAndModuleApp } from '../utils/testing';
import { Schema as NgAddOptions } from './schema';

describe('Schematic: empty', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;
  const modulePath = '/projects/foo/src/app/routes/trade/trade.module.ts';
  const routingPath = '/projects/foo/src/app/routes/trade/trade-routing.module.ts';
  const tsPath = '/projects/foo/src/app/routes/trade/list/list.component.ts';
  const htmlPath = '/projects/foo/src/app/routes/trade/list/list.component.html';

  beforeEach(() => {
    ({ runner, tree } = createAlainAndModuleApp());
    tree = runner.runSchematic('empty', { name: 'list', module: 'trade' }, tree);
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
});
