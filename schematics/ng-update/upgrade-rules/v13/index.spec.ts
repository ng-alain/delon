import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createAlainApp, migrationCollection } from '../../../utils/testing';

describe('Schematic: ng-update: v13Rule', () => {
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
    await runner.runSchematicAsync('migration-v13', {}, tree).toPromise();
  }

  it(`should be working`, async () => {
    tree.create(
      `1.less`,
      `@import '~@delon/theme/index';
@import '~ng-zorro-antd/';`
    );
    await runMigration();
    const content = tree.readContent('angular.json');
    expect(content).toContain(`stylePreprocessorOptions`);
    expect(content).toContain(`"packageManager": "yarn"`);
    expect(tree.readContent('1.less')).not.toContain(`@import '~@delon`);
  });

  it(`should be tips not support ie`, async () => {
    tree.overwrite(`package.json`, JSON.stringify({ scripts: { 'ie:start': 'npm' } }));
    await runMigration();
    expect(logs.join('')).toContain(`TIPS: Starting from NG-ALAIN 13 will no longer support IE`);
  });
});
