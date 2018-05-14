import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { createAlainApp } from '../utils/testing';
import { Schema as NgAddOptions } from './schema';

describe('Schematic: edit', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(() => {
    ({ runner, tree } = createAlainApp());
    tree = runner.runSchematic('edit', { name: 'edit', skipImport: true }, tree);
  });

  it('should be generate edit page', () => {
    expect(tree.exists('/projects/foo/src/app/routes/edit/edit.component.ts')).toBe(true);
  });
});
