import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as fs from 'fs';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { createAlainAndModuleApp } from '../utils/testing';

describe('Schematic: tpl', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  async function run() {
    tree = await runner.runSchematicAsync('tpl', { name: 'edit', module: 'trade', modal: true }, tree).toPromise();
  }

  beforeEach(async () => ({ runner, tree } = await createAlainAndModuleApp()));

  it('should be throw error when not found _cli-tpl', async () => {
    try {
      await run();
      expect(true).toBe(false);
    } catch {
      expect(true).toBe(true);
    }
  });

  it('should be throw error when not found name', async () => {
    spyOn(fs, 'accessSync');
    spyOn(fs, 'readdirSync').and.returnValue(['invalid-name'] as NzSafeAny);
    try {
      await run();
      expect(true).toBe(false);
    } catch {
      expect(true).toBe(true);
    }
  });
});
