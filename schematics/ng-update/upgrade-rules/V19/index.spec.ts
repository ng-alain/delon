import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { tryAddFile } from '../../../utils';
import { createAlainApp, migrationCollection } from '../../../utils/testing';

describe('Schematic: ng-update: v19Rule', () => {
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
    await runner.runSchematic('migration-v19', {}, tree);
  }

  it('add declaration-property-value-no-unknown', async () => {
    const filePath = '/.stylelintrc.js';
    tryAddFile(
      tree,
      filePath,
      `    'media-query-no-invalid': null,
    'order/order': [`
    );
    await runMigration();
    const content = tree.readContent(filePath);
    expect(content).toContain(`declaration-property-value-no-unknown`);
  });
});
