import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { createAlainApp } from '../utils/testing';
import { Schema as NgAddOptions } from './schema';

describe('Schematic: list', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(() => {
    ({ runner, tree } = createAlainApp());
    tree = runner.runSchematic('list', { name: 'list', skipImport: true }, tree);
  });

  it('should be generate list page', () => {
    expect(tree.exists('/projects/foo/src/app/routes/list/list.component.ts')).toBe(true);
  });
});
