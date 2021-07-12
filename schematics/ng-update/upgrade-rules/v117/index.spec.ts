import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createAlainApp, migrationCollection } from '../../../utils/testing';

describe('Schematic: ng-update: v117Rule', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(async () => {
    ({ runner, tree } = await createAlainApp());
  });

  async function runMigration(): Promise<void> {
    runner = new SchematicTestRunner('schematics', migrationCollection);
    await runner.runSchematicAsync('migration-v117', {}, tree).toPromise();
  }

  it(`should be working`, async () => {
    const filePath = `/angular.json`;
    tree.overwrite(
      filePath,
      `{
      "version": 1,
      "newProjectRoot": "projects",
      "projects": {
        "ng-alain": {
          "projectType": "application",
          "root": "",
          "sourceRoot": "src",
          "prefix": "app",
          "schematics": {
            "@schematics/angular:component": {
              "style": "less"
            }
          },
          "architect": {
            "build": {
              "options": {
                "scripts": ["node_modules/ajv/dist/ajv.bundle.js", "node_modules/qrious/dist/qrious.min.js"]
              }
            },
            "test": {
              "options": {
                "scripts": ["node_modules/ajv/dist/ajv.bundle.js", "node_modules/qrious/dist/qrious.min.js"]
              }
            }
          }
        }
      }
    }`
    );
    await runMigration();
    const content = tree.readContent(filePath);
    expect(content).toContain(`allowedCommonJsDependencies`);
    expect(content).not.toContain(`ajv.bundle.js`);
    expect(content).not.toContain(`qrious.min.js`);
  });
});
