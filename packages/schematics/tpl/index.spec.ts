import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { createAlainAndModuleApp } from '../utils/testing';
import { Schema as NgAddOptions } from './schema';
import * as fs from 'fs';

describe('Schematic: tpl', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  function run() {
    tree = runner.runSchematic('tpl', { name: 'edit', module: 'trade' }, tree);
  }

  beforeEach(() => ({ runner, tree } = createAlainAndModuleApp()));

  it('should be throw error when not found _cli-tpl', () => {
    expect(() => run()).toThrow();
  });

  it('should be throw error when not found name', () => {
    spyOn(fs, 'accessSync');
    spyOn(fs, 'readdirSync').and.returnValue([ 'invalid-name' ]);
    expect(() => run()).toThrow();
  });

});
