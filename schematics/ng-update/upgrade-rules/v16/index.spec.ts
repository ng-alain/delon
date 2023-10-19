import { JsonObject } from '@angular-devkit/core';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createAlainApp, migrationCollection } from '../../../utils/testing';

describe('Schematic: ng-update: v16Rule', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;
  const logs: string[] = [];

  beforeEach(async () => {
    ({ runner, tree } = await createAlainApp());
  });

  async function runMigration(): Promise<void> {
    logs.length = 0;
    runner = new SchematicTestRunner('schematics', migrationCollection);
    runner.logger.subscribe(e => logs.push(e.message));
    await runner.runSchematic('migration-v16', {}, tree);
  }

  it('should be remote stylelint-config-prettier', async () => {
    const filePath = 'package.json';
    let json = tree.readJson(filePath) as JsonObject;
    const key = 'stylelint-config-prettier';
    json['devDependencies']!![key] = '*';
    tree.overwrite(filePath, JSON.stringify(json));
    await runMigration();
    const migrationPackageJson = tree.readJson(filePath) as JsonObject;
    expect(migrationPackageJson['devDependencies']!![key]).not.toBeDefined();
  });
});
