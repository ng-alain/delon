import { join } from 'path';
import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import {
  readFileContent,
  resolveBazelDataFile,
  runTestCases,
  migrationCollection,
  createFileSystemTestApp,
} from './index.spec';
import { MOCK } from './v2/MOCK';

describe('v2', () => {
  const migrationName = 'migration-v2';

  describe('upgrade test cases', () => {
    /**
     * Name of test cases that will be used to verify that update schematics properly update
     * a developers application.
     */
    const testCases = ['v2/class-names', 'v2/css-selectors'];

    let testCasesOutputPath: string;

    beforeAll(async () => {
      const testCaseInputs = testCases.reduce((inputs, testCaseName) => {
        inputs[testCaseName] = resolveBazelDataFile(`${testCaseName}_input.ts`);
        return inputs;
      }, {});

      const { tempPath } = await runTestCases(migrationName, testCaseInputs);
      testCasesOutputPath = join(tempPath, 'projects/ng-alain/src/test-cases/');
    });

    // Iterates through every test case directory and generates a jasmine test block that will
    // verify that the update schematics properly updated the test input to the expected output.
    testCases.forEach(testCaseName => {
      const expectedOutputPath = resolveBazelDataFile(
        `${testCaseName}_expected_output.ts`,
      );

      it(`should apply update schematics to test case: ${testCaseName}`, () => {
        const output = readFileContent(
          join(testCasesOutputPath, `${testCaseName}.ts`),
        );
        const expected = readFileContent(expectedOutputPath);
        if (output === expected) {
          debugger;
        } else {
          debugger;
        }
        expect(output).toBe(expected);
      });
    });
  });

  describe('layout', () => {
    let tree: UnitTestTree;
    beforeEach(() => {
      const runner = new SchematicTestRunner('schematics', migrationCollection);
      tree = createFileSystemTestApp(runner).appTree;
      Object.keys(MOCK).forEach(path => tree.create(path, MOCK[path]));
      runner.runSchematic(migrationName, {}, tree);
    });

    it('should working', () => {
      const style = tree.readContent('src/styles.less');
      expect(style).toContain(`~@delon/theme/styles/layout/default/index`);
      const defaultCompHTML = tree.readContent(
        'src/app/layout/default/default.component.html',
      );
      expect(defaultCompHTML).toContain(`alain-default__progress-bar`);
      const headerCompHTML = tree.readContent(
        'src/app/layout/default/header/header.component.html',
      );
      expect(headerCompHTML).toContain(`alain-default__header-logo-link`);
      const sidebarCompHTML = tree.readContent(
        'src/app/layout/default/sidebar/sidebar.component.html',
      );
      expect(sidebarCompHTML).toContain(`alain-default__aside-inner`);
    });
  });
});
