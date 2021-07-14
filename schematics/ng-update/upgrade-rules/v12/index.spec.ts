import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createAlainApp, migrationCollection } from '../../../utils/testing';

describe('Schematic: ng-update: v12Rule', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(async () => {
    ({ runner, tree } = await createAlainApp());
  });

  async function runMigration(): Promise<void> {
    runner = new SchematicTestRunner('schematics', migrationCollection);
    await runner.runSchematicAsync('migration-v12', {}, tree).toPromise();
  }

  it(`should be working`, async () => {
    const filePath = `/angular.json`;
    tree.overwrite(
      filePath,
      `{
        "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
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
                "builder": "@angular-devkit/build-angular:browser",
                "options": {
                  "outputPath": "dist",
                  "index": "src/index.html",
                  "main": "src/main.ts",
                  "tsConfig": "tsconfig.app.json",
                  "polyfills": "src/polyfills.ts",
                  "assets": ["src/assets", "src/favicon.ico"],
                  "styles": ["src/styles.less"],
                  "scripts": [],
                  "allowedCommonJsDependencies": ["@antv/g2", "file-saver", "ajv", "ajv-formats", "date-fns"],
                  "aot": false,
                  "vendorChunk": true,
                  "extractLicenses": false,
                  "buildOptimizer": false,
                  "sourceMap": true,
                  "optimization": false,
                  "namedChunks": true
                },
                "configurations": {
                  "production": {
                    "fileReplacements": [
                      {
                        "replace": "src/environments/environment.ts",
                        "with": "src/environments/environment.prod.ts"
                      }
                    ],
                    "optimization": true,
                    "outputHashing": "all",
                    "sourceMap": false,
                    "namedChunks": false,
                    "aot": true,
                    "extractLicenses": true,
                    "vendorChunk": false,
                    "buildOptimizer": true,
                    "budgets": [
                      {
                        "type": "initial",
                        "maximumWarning": "2mb",
                        "maximumError": "6mb"
                      },
                      {
                        "type": "anyComponentStyle",
                        "maximumWarning": "6kb",
                        "maximumError": "10kb"
                      }
                    ]
                  }
                },
                "defaultConfiguration": ""
              },
              "serve": {
                "builder": "@angular-devkit/build-angular:dev-server",
                "options": {
                  "browserTarget": "ng-alain:build",
                  "proxyConfig": "proxy.conf.json"
                },
                "configurations": {
                  "production": {
                    "browserTarget": "ng-alain:build:production"
                  }
                }
              },
              "extract-i18n": {
                "builder": "@angular-devkit/build-angular:extract-i18n",
                "options": {
                  "browserTarget": "ng-alain:build"
                }
              },
              "test": {
                "builder": "@angular-devkit/build-angular:karma",
                "options": {
                  "main": "src/test.ts",
                  "polyfills": "src/polyfills.ts",
                  "karmaConfig": "karma.conf.js",
                  "tsConfig": "tsconfig.spec.json",
                  "scripts": [],
                  "styles": [],
                  "assets": ["src/assets"]
                }
              },
              "lint": {
                "builder": "@angular-eslint/builder:lint",
                "options": {
                  "lintFilePatterns": ["src/**/*.ts", "src/**/*.html"]
                }
              },
              "e2e": {
                "builder": "@angular-devkit/build-angular:protractor",
                "options": {
                  "protractorConfig": "e2e/protractor.conf.js",
                  "devServerTarget": "ng-alain:serve"
                },
                "configurations": {
                  "production": {
                    "devServerTarget": "ng-alain:serve:production"
                  }
                }
              }
            }
          }
        },
        "defaultProject": "ng-alain"
      }
      `
    );
    await runMigration();
    const content = tree.readContent(filePath);
    expect(content).toContain(`@angular-eslint/builder:lint`);
  });
});
