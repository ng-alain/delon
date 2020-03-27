import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { createAlainAndModuleApp } from '../utils/testing';

describe('Schematic: edit', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;
  const modulePath = '/projects/foo/src/app/routes/trade/trade.module.ts';
  const routingPath = '/projects/foo/src/app/routes/trade/trade-routing.module.ts';
  const tsPath = '/projects/foo/src/app/routes/trade/edit/edit.component.ts';
  const htmlPath = '/projects/foo/src/app/routes/trade/edit/edit.component.html';

  beforeEach(async () => {
    ({ runner, tree } = await createAlainAndModuleApp());
    tree = await runner.runSchematicAsync('edit', { name: 'edit', module: 'trade' }, tree).toPromise();
  });

  it('should be generate list page', () => {
    [modulePath, routingPath, tsPath, htmlPath].forEach(path => expect(tree.exists(path)).toBe(true));
  });

  it('should be has import code', () => {
    expect(tree.readContent(modulePath)).toContain(`import { TradeEditComponent } from './edit/edit.component';`);
  });

  it('Should not be imported into COMPONENTS', () => {
    expect(tree.readContent(modulePath)).toContain(`const COMPONENTS = []`);
  });
});
