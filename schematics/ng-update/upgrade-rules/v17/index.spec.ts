import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createAlainApp, migrationCollection } from '../../../utils/testing';

describe('Schematic: ng-update: v17Rule', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;
  const logs: string[] = [];
  const jsonSchemaModulePath = '/projects/foo/src/app/shared/json-schema/json-schema.module.ts';

  beforeEach(async () => {
    ({ runner, tree } = await createAlainApp());
    if (!tree.exists(jsonSchemaModulePath)) {
      tree.create(
        jsonSchemaModulePath,
        `import { NgModule } from '@angular/core';
    import { DelonFormModule, WidgetRegistry } from '@delon/form';

    import { TestWidget } from './test/test.widget';
    import { SharedModule } from '../shared.module';

    export const SCHEMA_THIRDS_COMPONENTS = [TestWidget];

    @NgModule({
      declarations: SCHEMA_THIRDS_COMPONENTS,
      imports: [SharedModule, DelonFormModule.forRoot()],
      exports: SCHEMA_THIRDS_COMPONENTS
    })
    export class JsonSchemaModule {
      constructor(widgetRegistry: WidgetRegistry) {
        widgetRegistry.register(TestWidget.KEY, TestWidget);
      }
    }
    `
      );
    }
  });

  async function runMigration(): Promise<void> {
    logs.length = 0;
    runner = new SchematicTestRunner('schematics', migrationCollection);
    runner.logger.subscribe(e => logs.push(e.message));
    await runner.runSchematic('migration-v17', {}, tree);
  }

  it('should be working', async () => {
    await runMigration();
    const content = tree.readContent(jsonSchemaModulePath);
    expect(content).toContain(`import { UploadWidgetModule } from '@delon/form/widgets/upload';`);
    expect(content).toContain(`, UploadWidgetModule`);
  });
});
