import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { createAlainApp } from '../utils/testing';

describe('NgAlainSchematic: plugin', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(() => ({ runner, tree } = createAlainApp({})));

  it('should be throw error when not find plugin name', () => {
    expect(() => {
      runner.runSchematic('plugin', { name: 'invalid-name', type: 'remove', packageManager: 'npm' }, tree);
    }).toThrow();
  });
});
