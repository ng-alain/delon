/* eslint-disable @typescript-eslint/no-require-imports */
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
// 注：不能用 `import * as fs`——TS6 会编译成只读 getter 的命名空间，jasmine `spyOn` 无法覆写；`import = require` 拿到真实可写的 fs 模块。
import fs = require('fs');

import { createAlainAndModuleApp } from '../utils/testing';

describe('Schematic: tpl', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  async function run(): Promise<void> {
    tree = await runner.runSchematic('tpl', { name: 'edit', module: 'trade', modal: true }, tree);
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
    spyOn(fs, 'readdirSync').and.returnValue(['invalid-name'] as unknown as never);
    try {
      await run();
      expect(true).toBe(false);
    } catch {
      expect(true).toBe(true);
    }
  });
});
