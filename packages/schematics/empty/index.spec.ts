import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { createAlainAndModuleApp } from '../utils/testing';

describe('Schematic: empty', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;
  const modulePath = '/projects/foo/src/app/routes/trade/trade.module.ts';
  const routingPath = '/projects/foo/src/app/routes/trade/trade-routing.module.ts';
  const tsPath = '/projects/foo/src/app/routes/trade/list/list.component.ts';
  const htmlPath = '/projects/foo/src/app/routes/trade/list/list.component.html';

  xdescribe('', () => {
    beforeEach(async () => {
      ({ runner, tree } = await createAlainAndModuleApp());
      tree = await runner.runSchematicAsync('empty', { name: 'list', module: 'trade' }, tree).toPromise();
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

  it('shuold be override the default template page', async () => {
    ({ runner, tree } = await createAlainAndModuleApp());
    const prefix = `/projects/foo/_cli-tpl/_empty/__path__/__name@dasherize@if-flat__`;
    tree.create(`${prefix}/__name@dasherize__.component.html.template`, 'empty.html');
    tree.create(`${prefix}/__name@dasherize__.component.spec.ts.template`, 'empty.spec.ts');
    tree.create(`${prefix}/__name@dasherize__.component.ts.template`, 'empty.ts');
    tree = await runner.runSchematicAsync('empty', { name: 'list', module: 'trade' }, tree).toPromise();
    console.log(tree.readContent(tsPath));
    expect(tree.readContent(tsPath)).not.toContain(`styleUrls`);
  });
});
