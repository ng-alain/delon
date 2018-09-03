import {getSystemPath, normalize, virtualFs} from '@angular-devkit/core';
import {TempScopedNodeJsSyncHost} from '@angular-devkit/core/node/testing';
import {SchematicTestRunner} from '@angular-devkit/schematics/testing';
import {readFileSync} from 'fs';
import {runPostScheduledTasks} from '../../test-setup/post-scheduled-tasks';
import {createTestApp, migrationCollection} from '../../test-setup/test-app';

describe('NgAlainSchematic: update', () => {

  // Module name suffix for data files of the `jasmine_node_test` Bazel rule.
  // const bazelModuleSuffix = 'angular_material/src/lib/schematics/update/test-cases';
  const bazelModuleSuffix = './';

  const testCases = [
    // 'v5/attribute-selectors',
    // 'v5/class-names',
    // 'v5/css-names',
    'v2/element-selectors',
    // 'v5/input-names',
    // 'v5/output-names',
    // 'v5/property-names',
  ];

  testCases.forEach(testCaseName => {
    const inputPath = require.resolve(`${bazelModuleSuffix}/${testCaseName}_input.ts`);
    const expectedOutputPath = require
        .resolve(`${bazelModuleSuffix}/${testCaseName}_expected_output.ts`);

    it(`should apply update schematics to test case: ${testCaseName}`, () => {
      const runner = new SchematicTestRunner('schematics', migrationCollection);

      runner.runSchematic('migration-01', {}, createTestAppWithTestCase(inputPath));

      // Run the scheduled TSLint fix task from the update schematic. This task is responsible for
      // identifying outdated code parts and performs the fixes. Since tasks won't run automatically
      // within a `SchematicTestRunner`, we manually need to run the scheduled task.
      return runPostScheduledTasks(runner, 'tslint-fix').toPromise().then(() => {
        expect(readFileContent('projects/alain/src/main.ts'))
            .toBe(readFileContent(expectedOutputPath));
      });
    });
  });

  /** Reads the UTF8 content of the specified file. Normalizes the path and ensures that */
  function readFileContent(filePath: string): string {
    return readFileSync(filePath, 'utf8');
  }

  /**
   * Creates a test app schematic tree that includes the specified test case as TypeScript
   * entry point file. Also writes the app tree to a real file system location in order to be
   * able to test the tslint fix rules.
   */
  function createTestAppWithTestCase(testCaseInputPath: string) {
    const tempFileSystemHost = new TempScopedNodeJsSyncHost();
    const appTree = createTestApp();

    appTree.overwrite('/projects/alain/src/main.ts', readFileContent(testCaseInputPath));

    // Since the TSLint fix task expects all files to be present on the real file system, we
    // map every file in the app tree to a temporary location on the file system.
    appTree.files.map(f => normalize(f)).forEach(f => {
      tempFileSystemHost.sync.write(f, virtualFs.stringToFileBuffer(appTree.readContent(f)));
    });

    // Switch to the new temporary directory because otherwise TSLint cannot read the files.
    process.chdir(getSystemPath(tempFileSystemHost.root));

    return appTree;
  }
});


