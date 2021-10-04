import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createAlainAndModuleApp } from '../utils/testing';

describe('Schematic: sta', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  async function run(): Promise<void> {
    tree = await runner.runSchematicAsync('sta', {}, tree).toPromise();
  }

  beforeEach(async () => ({ runner, tree } = await createAlainAndModuleApp()));

  it('should be working', async () => {
    await run();
    [`base.service.ts`, `models.ts`, `index.ts`].forEach(name => {
      expect(tree.exists(`/projects/foo/src/app/proxy/${name}`)).toBe(true);
    });
    const tsConfig = tree.readContent(`tsconfig.json`);
    expect(tsConfig).toContain(`@proxy`);
  });
});
