import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createAlainAndModuleApp } from '../utils/testing';

describe('Schematic: view', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;
  const modulePath = '/projects/foo/src/app/routes/trade/trade.module.ts';
  const routingPath = '/projects/foo/src/app/routes/trade/trade-routing.module.ts';
  const tsPath = '/projects/foo/src/app/routes/trade/view/view.component.ts';
  const htmlPath = '/projects/foo/src/app/routes/trade/view/view.component.html';

  beforeEach(async () => {
    ({ runner, tree } = await createAlainAndModuleApp());
    tree = await runner.runSchematicAsync('view', { name: 'view', module: 'trade' }, tree).toPromise();
  });

  it('should be generate list page', () => {
    [modulePath, routingPath, tsPath, htmlPath].forEach(path => expect(tree.exists(path)).toBe(true));
  });

  it('should be has import code', () => {
    expect(tree.readContent(modulePath)).toContain(`import { TradeViewComponent } from './view/view.component';`);
  });

  it('should support a.b.c module name', async () => {
    tree = await runner.runSchematicAsync('view', { name: 'view', module: 'trade', target: 'list' }, tree).toPromise();
    expect(tree.exists('/projects/foo/src/app/routes/trade/list/view/view.component.ts')).toBe(true);
  });
});
