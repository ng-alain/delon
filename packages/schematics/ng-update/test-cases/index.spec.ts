// tslint:disable:no-string-literal
import { getSystemPath, normalize } from '@angular-devkit/core';
import { TempScopedNodeJsSyncHost } from '@angular-devkit/core/node/testing';
import * as virtualFs from '@angular-devkit/core/src/virtual-fs/host';
import {
  EngineHost,
  TaskExecutor,
  TaskScheduler,
} from '@angular-devkit/schematics';
import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import { mkdirpSync, readFileSync, writeFileSync } from 'fs-extra';
import { dirname, join } from 'path';
import { from as observableFrom, Observable } from 'rxjs';
import { concatMap, filter, last } from 'rxjs/operators';

/** Path to the schematic collection that includes the delon migrations. */
export const migrationCollection = require.resolve('../../migration.json');

/** Module name suffix for data files of the `jasmine_node_test` Bazel rule. */
const bazelModuleSuffix =
  'delon/packages/schematics/ng-update/test-cases';

/**
 * Due to the fact that the Angular devkit does not support running scheduled tasks from a
 * schematic that has been launched through the TestRunner, we need to manually find the task
 * executor for the given task name and run all scheduled instances.
 *
 * Note that this means that there can be multiple tasks with the same name. The observable emits
 * only when all tasks finished executing.
 */
export function runPostScheduledTasks(
  runner: SchematicTestRunner,
  taskName: string,
): Observable<any> {
  // Workaround until there is a public API to run scheduled tasks in the @angular-devkit.
  // See: https://github.com/angular/angular-cli/issues/11739
  const host = runner.engine['_host'] as EngineHost<{}, {}>;
  const tasks = runner.engine['_taskSchedulers'] as TaskScheduler[];
  const createTaskExecutor = (name: string) =>
    (host.createTaskExecutor(name) as any) as Observable<TaskExecutor<any>>;

  return observableFrom(tasks).pipe(
    concatMap(scheduler => scheduler.finalize()),
    filter(task => task.configuration.name === taskName),
    concatMap(task => {
      return createTaskExecutor(task.configuration.name).pipe(
        concatMap(executor =>
          executor(task.configuration.options, task.context),
        ),
      );
    }),
    // Only emit the last emitted value because there can be multiple tasks with the same name.
    // The observable should only emit a value if all tasks completed.
    last(),
  );
}

export function createTestApp(
  runner: SchematicTestRunner,
  appOptions = {},
): UnitTestTree {
  const workspaceTree = runner.runExternalSchematic(
    '@schematics/angular',
    'workspace',
    {
      name: 'workspace',
      version: '6.0.0',
      newProjectRoot: 'projects',
    },
  );

  return runner.runExternalSchematic(
    '@schematics/angular',
    'application',
    { ...appOptions, name: 'ng-alain' },
    workspaceTree,
  );
}

/** Reads the UTF8 content of the specified file. Normalizes the path and ensures that */
export function readFileContent(filePath: string): string {
  return readFileSync(filePath, 'utf8');
}

/**
 * Resolves the original file path of the specified file that has been to the `data` of the
 * jasmine_node_test Bazel rule.
 *
 * Adding the test case files to the data of the `jasmine_node_test` Bazel rule does not mean
 * that the files are being copied over to the Bazel bin output. Bazel just patches the NodeJS
 * resolve function and maps the module paths to the original file location.
 */
export function resolveBazelDataFile(filePath: string) {
  return require.resolve(`./${filePath}`);
  // Only for bazel
  return require.resolve(`${bazelModuleSuffix}/${filePath}`);
}

/**
 * Creates a test app schematic tree that will be copied over to a real filesystem location.
 * This is necessary because TSLint is not able to read from the virtual filesystem tree.
 */
export function createFileSystemTestApp(runner: SchematicTestRunner) {
  const tempFileSystemHost = new TempScopedNodeJsSyncHost();
  const appTree = createTestApp(runner);
  const tempPath = getSystemPath(tempFileSystemHost.root);

  // Since the TSLint fix task expects all files to be present on the real file system, we
  // map every file in the app tree to a temporary location on the file system.
  appTree.files.map(f => normalize(f)).forEach(f => {
    tempFileSystemHost.sync.write(
      f,
      virtualFs.stringToFileBuffer(appTree.readContent(f)),
    );
  });

  return { appTree, tempPath };
}

export async function runTestCases(
  migrationName: string,
  inputs: { [name: string]: string },
) {
  const runner = new SchematicTestRunner('schematics', migrationCollection);
  const inputNames = Object.keys(inputs);
  const initialWorkingDir = process.cwd();

  let logOutput = '';
  runner.logger.subscribe(entry => (logOutput += entry.message));

  const { appTree, tempPath } = createFileSystemTestApp(runner);

  // Write each test-case input to the file-system. This is necessary because otherwise
  // TSLint won't be able to pick up the test cases.
  inputNames.forEach(inputName => {
    const inputFullName = `projects/ng-alain/src/test-cases/${inputName}.ts`;
    const tempInputPath = join(
      tempPath,
      inputFullName,
    );

    mkdirpSync(dirname(tempInputPath));
    writeFileSync(tempInputPath, readFileContent(inputs[inputName]));

    // TODO: add to tree
    appTree.create(inputFullName, readFileContent(inputs[inputName]));
  });

  runner.runSchematic(migrationName, {}, appTree);

  // Switch to the new temporary directory because otherwise TSLint cannot read the files.
  process.chdir(tempPath);

  // Run the scheduled TSLint fix task from the update schematic. This task is responsible for
  // identifying outdated code parts and performs the fixes. Since tasks won't run automatically
  // within a `SchematicTestRunner`, we manually need to run the scheduled task.
  await runPostScheduledTasks(runner, 'tslint-fix').toPromise();

  // Switch back to the initial working directory.
  process.chdir(initialWorkingDir);

  return { tempPath, logOutput, appTree };
}
