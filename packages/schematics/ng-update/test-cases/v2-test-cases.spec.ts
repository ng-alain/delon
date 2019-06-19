import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { join } from 'path';
import {
  createFileSystemTestApp,
  migrationCollection,
  readFileContent,
  resolveBazelDataFile,
  runTestCases,
} from './index.spec';
import { MOCK_LAYOUT } from './v2/MOCK_LAYOUT';

describe('v2', () => {
  const migrationName = 'migration-v2';
  let tree: UnitTestTree;

  describe('upgrade test cases', () => {
    /**
     * Name of test cases that will be used to verify that update schematics properly update
     * a developers application.
     */
    const testCases = ['v2/css-selectors'];

    let testCasesOutputPath: string;

    beforeAll(async () => {
      const testCaseInputs = testCases.reduce((inputs, testCaseName) => {
        inputs[testCaseName] = resolveBazelDataFile(`${testCaseName}_input.ts`);
        return inputs;
      }, {});

      const { tempPath, appTree } = await runTestCases(migrationName, testCaseInputs);
      testCasesOutputPath = join(tempPath, 'projects/ng-alain/src/test-cases/');
      tree = appTree;
    });

    // Iterates through every test case directory and generates a jasmine test block that will
    // verify that the update schematics properly updated the test input to the expected output.
    testCases.forEach(testCaseName => {
      const expectedOutputPath = resolveBazelDataFile(`${testCaseName}_expected_output.ts`);

      it(`should apply update schematics to test case: ${testCaseName}`, () => {
        const output = readFileContent(join(testCasesOutputPath, `${testCaseName}.ts`));
        const expected = readFileContent(expectedOutputPath);
        expect(output).toBe(expected);
      });
    });
  });

  describe('layout', () => {
    beforeEach(async() => {
      const runner = new SchematicTestRunner('schematics', migrationCollection);
      const a = await createFileSystemTestApp(runner);
      tree = a.tree;
      Object.keys(MOCK_LAYOUT).forEach(path => tree.create(path, MOCK_LAYOUT[path]));
      await runner.runSchematicAsync(migrationName, {}, tree).toPromise();
    });

    it('should working', () => {
      const style = tree.readContent('src/styles.less');
      expect(style).toContain(`~@delon/theme/styles/layout/default/index`);
      const defaultCompHTML = tree.readContent('src/app/layout/default/default.component.html');
      expect(defaultCompHTML).toContain(`alain-default__progress-bar`);

      const headerCompHTML = tree.readContent('src/app/layout/default/header/header.component.html');
      expect(headerCompHTML).toContain(`alain-default__header-logo-link`);

      const headerSearchCompHTML = tree.readContent('src/app/layout/default/header/components/search.component.ts');
      expect(headerSearchCompHTML).toContain(`alain-default__search-focus`);

      const sidebarCompHTML = tree.readContent('src/app/layout/default/sidebar/sidebar.component.html');
      expect(sidebarCompHTML).toContain(`alain-default__aside-inner`);
    });
  });

  describe('dom', () => {
    const testCases = ['v2/dom'];

    beforeEach(async () => {
      const runner = new SchematicTestRunner('schematics', migrationCollection);
      const a = await createFileSystemTestApp(runner);
      tree = a.tree;
      testCases.forEach(testCaseName => {
        tree.create(`src/app/${testCaseName}.ts`, readFileContent(resolveBazelDataFile(`${testCaseName}_input.ts`)));
      });
      await runner.runSchematicAsync(migrationName, {}, tree).toPromise();
    });

    testCases.forEach(testCaseName => {
      const expectedOutputPath = resolveBazelDataFile(`${testCaseName}_expected_output.ts`);

      it(`should apply update schematics to test case: ${testCaseName}`, () => {
        const output = tree.readContent(`src/app/${testCaseName}.ts`);
        const expected = readFileContent(expectedOutputPath);
        expect(output).toBe(expected);
      });
    });
  });
});
