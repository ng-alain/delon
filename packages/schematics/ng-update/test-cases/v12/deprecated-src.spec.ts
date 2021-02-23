import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { writeFile } from '../../../utils/file';
import { createTestApp, FILE_PREFIX, migrationCollection } from '../../../utils/testing';

describe('migration:v12 deprecated _src', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;
  let log: string[];

  beforeEach(async () => {
    ({ runner, tree } = await createTestApp());
  });

  async function runMigration(): Promise<void> {
    runner = new SchematicTestRunner('schematics', migrationCollection);
    log = [];
    runner.logger.subscribe(logEntry => log.push(logEntry.message));
    await runner.runSchematicAsync('migration-v12', {}, tree).toPromise();
  }

  it('should be _src to nz-image', async () => {
    const file = `${FILE_PREFIX}/src/app/app.component.html`;
    writeFile(tree, file, `<img _src="http://1.com/1.png" /><img [_src]="'http://1.com/1.png'" />`);
    await runMigration();
    expect(log).toContain(`${file}@1:6 - Found deprecated "_src" component. Use "nz-image" to instead please.`);
    expect(log).toContain(`${file}@1:40 - Found deprecated "[_src]" component. Use "nz-image" to instead please.`);
  });
});
