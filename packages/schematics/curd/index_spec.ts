import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { createAlainApp } from '../utils/testing';
import { Schema as NgAddOptions } from './schema';

describe('Schematic: curd', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(() => {
    ({ runner, tree } = createAlainApp());
    tree = runner.runSchematic('curd', { skipImport: true }, tree);
  });

  it('should be generate list page', () => {
    expect(tree.exists('/projects/foo/src/app/routes/list/list.component.ts')).toBe(true);
  });

  it('should be generate view page', () => {
    expect(tree.exists('/projects/foo/src/app/routes/view/view.component.ts')).toBe(true);
  });

  it('should be generate edit page', () => {
    expect(tree.exists('/projects/foo/src/app/routes/edit/edit.component.ts')).toBe(true);
  });
});
