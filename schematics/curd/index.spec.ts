import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createAlainAndModuleApp } from '../utils/testing';

describe('Schematic: curd', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(async () => {
    ({ runner, tree } = await createAlainAndModuleApp({ moduleSchema: { standalone: false } }));
    tree = await runner.runSchematic('curd', { name: 'list', module: 'trade', standalone: false }, tree);
  });

  it('should be generate list page', () => {
    expect(tree.exists('/projects/foo/src/app/routes/trade/list/list.component.ts')).toBe(true);
    expect(tree.exists('/projects/foo/src/app/routes/trade/list/view/view.component.ts')).toBe(true);
    expect(tree.exists('/projects/foo/src/app/routes/trade/list/edit/edit.component.ts')).toBe(true);
  });
});
