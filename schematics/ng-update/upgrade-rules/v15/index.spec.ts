import { JsonObject } from '@angular-devkit/core';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { findFile } from '../../../utils/file';
import { createAlainApp, migrationCollection } from '../../../utils/testing';

describe('Schematic: ng-update: v15Rule', () => {
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
    await runner.runSchematicAsync('migration-v14', {}, tree).toPromise();
  }

  it(`should be working`, async () => {
    tree.overwrite(
      '/angular.json',
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
            },
            "@schematics/angular:application": {
              "strict": true
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
                "allowedCommonJsDependencies": ["@antv/g2", "ajv", "ajv-formats", "date-fns", "file-saver"],
                "stylePreprocessorOptions": {
                  "includePaths": [
                    "node_modules/"
                  ]
                }
              },
              "configurations": {
                "production": {
                  "fileReplacements": [
                    {
                      "replace": "src/environments/environment.ts",
                      "with": "src/environments/environment.prod.ts"
                    }
                  ],
                  "outputHashing": "all",
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
                },
                "development": {
                  "buildOptimizer": false,
                  "optimization": false,
                  "vendorChunk": true,
                  "extractLicenses": false,
                  "sourceMap": true,
                  "namedChunks": true
                }
              },
              "defaultConfiguration": "production"
            },
            "serve": {
              "builder": "@angular-devkit/build-angular:dev-server",
              "options": {
                "browserTarget": "ng-alain:build",
                "proxyConfig": "proxy.conf.js"
              },
              "configurations": {
                "production": {
                  "browserTarget": "ng-alain:build:production"
                },
                "development": {
                  "browserTarget": "ng-alain:build:development"
                }
              },
              "defaultConfiguration": "development"
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
      "defaultProject": "ng-alain",
      "cli": {
        "packageManager": "yarn"
      }
    }`
    );
    tree.create(
      `.eslintrc.js`,
      `
      const prettierConfig = require('./.prettierrc.js');

      module.exports = {
        root: true,
        parserOptions: { ecmaVersion: 2021 },
        overrides: [
          {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
              tsconfigRootDir: __dirname,
              project: ['tsconfig.json'],
              createDefaultProgram: true
            },
            plugins: ['@typescript-eslint', 'jsdoc', 'import'],
            extends: [
              'plugin:@angular-eslint/recommended',
              'plugin:@angular-eslint/template/process-inline-templates',
              'plugin:prettier/recommended'
            ],
            rules: {
              'prettier/prettier': ['error', prettierConfig],
              'jsdoc/newline-after-description': 1,
              '@angular-eslint/component-class-suffix': [
                'error',
                {
                  suffixes: ['Directive', 'Component', 'Base', 'Widget']
                }
              ],
              '@angular-eslint/directive-class-suffix': [
                'error',
                {
                  suffixes: ['Directive', 'Component', 'Base', 'Widget']
                }
              ],
              '@angular-eslint/component-selector': [
                'off',
                {
                  type: ['element', 'attribute'],
                  prefix: ['app', 'test'],
                  style: 'kebab-case'
                }
              ],
              '@angular-eslint/directive-selector': [
                'off',
                {
                  type: 'attribute',
                  prefix: ['app']
                }
              ],
              '@angular-eslint/no-attribute-decorator': 'error',
              '@angular-eslint/no-conflicting-lifecycle': 'off',
              '@angular-eslint/no-forward-ref': 'off',
              '@angular-eslint/no-host-metadata-property': 'off',
              '@angular-eslint/no-lifecycle-call': 'off',
              '@angular-eslint/no-pipe-impure': 'error',
              '@angular-eslint/prefer-output-readonly': 'error',
              '@angular-eslint/use-component-selector': 'off',
              '@angular-eslint/use-component-view-encapsulation': 'off',
              '@angular-eslint/no-input-rename': 'off',
              '@angular-eslint/no-output-native': 'off',
              '@typescript-eslint/array-type': [
                'error',
                {
                  default: 'array-simple'
                }
              ],
              '@typescript-eslint/ban-types': [
                'off',
                {
                  types: {
                    String: {
                      message: 'Use string instead.'
                    },
                    Number: {
                      message: 'Use number instead.'
                    },
                    Boolean: {
                      message: 'Use boolean instead.'
                    },
                    Function: {
                      message: 'Use specific callable interface instead.'
                    }
                  }
                }
              ],
              'import/no-duplicates': 'error',
              'import/no-unused-modules': 'error',
              'import/no-unassigned-import': 'error',
              'import/order': [
                'error',
                {
                  alphabetize: { order: 'asc', caseInsensitive: false },
                  'newlines-between': 'always',
                  groups: ['external', 'internal', ['parent', 'sibling', 'index']],
                  pathGroups: [],
                  pathGroupsExcludedImportTypes: []
                }
              ],
              '@typescript-eslint/no-this-alias': 'error',
              '@typescript-eslint/member-ordering': 'off',
              'no-irregular-whitespace': 'error',
              'no-multiple-empty-lines': 'error',
              'no-sparse-arrays': 'error',
              'prefer-object-spread': 'error',
              'prefer-template': 'error',
              'prefer-const': 'off',
              'max-len': 'off'
            }
          },
          {
            files: ['*.html'],
            extends: ['plugin:@angular-eslint/template/recommended'],
            rules: {}
          },
          {
            files: ['*.html'],
            excludedFiles: ['*inline-template-*.component.html'],
            extends: ['plugin:prettier/recommended'],
            rules: {
              'prettier/prettier': ['error', { parser: 'angular' }],
              '@angular-eslint/template/eqeqeq': 'off'
            }
          }
        ]
      };
      `
    );
    await runMigration();
    const content = tree.readJson('angular.json') as JsonObject;
    expect((content.cli as { schematicCollections: string[] }).schematicCollections).toContain(`ng-alain`);
  });

  it('#fixReuseTabActiviteInHtml', async () => {
    const layoutPath = findFile(tree, 'basic/basic.component.ts')!;
    tree.overwrite(
      layoutPath,
      `
    <router-outlet (activate)="reuseTab.activate($event)"></router-outlet>
    `
    );
    await runMigration();
    const content = tree.get(layoutPath)!.content.toString('utf8');
    expect(content).toContain(`(attach)`);
  });
});
