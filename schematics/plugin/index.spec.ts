import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createAlainApp } from '../utils/testing';

describe('NgAlainSchematic: plugin', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(async () => ({ runner, tree } = await createAlainApp({})));

  it('should be throw error when not find plugin name', async () => {
    try {
      await runner.runSchematic('plugin', { name: 'invalid-name', type: 'remove', packageManager: 'npm' }, tree);
      expect(true).toBe(false);
    } catch {
      expect(true).toBe(true);
    }
  });
});
