import { Rule, Tree, SchematicContext, TaskId } from '@angular-devkit/schematics';
import {getWorkspace} from '@schematics/angular/utility/config';

import {TargetVersion} from './index';
import { RunSchematicTask, TslintFixTask } from '@angular-devkit/schematics/tasks';
import { createTslintConfig } from './tslint-update';

export function createUpdateRule(targetVersion: TargetVersion): Rule {
  return (tree: Tree, context: SchematicContext) => {

    const tslintFixTasks: TaskId[] = [];

    const allTsConfigPaths = getTsConfigPaths(tree);
    if (!allTsConfigPaths.length) {
      throw new Error('Could not find any tsconfig file. Please submit an issue on the Angular ' +
        'Material repository that includes the name of your TypeScript configuration.');
    }

    const tslintConfig = createTslintConfig(targetVersion);

    for (const tsconfig of allTsConfigPaths) {
      // Run the update tslint rules.
      tslintFixTasks.push(context.addTask(new TslintFixTask(tslintConfig, {
        silent: false,
        ignoreErrors: true,
        tsConfigPath: tsconfig,
      })));
    }

    context.addTask(new RunSchematicTask('ng-post-update', {}), tslintFixTasks);

  };
}

/**
 * Gets all tsconfig paths from a CLI project by reading the workspace configuration
 * and looking for common tsconfig locations.
 */
function getTsConfigPaths(tree: Tree): string[] {
  // Start with some tsconfig paths that are generally used.
  const tsconfigPaths = [
    './tsconfig.json',
    './src/tsconfig.json',
    './src/tsconfig.app.json',
  ];

  // Add any tsconfig directly referenced in a build or test task of the angular.json workspace.
  const workspace = getWorkspace(tree);

  for (const project of Object.values(workspace.projects)) {
    if (project && (project.targets || project.architect)) {
      for (const taskName of ['build', 'test']) {
        const task = (project.targets || project.architect)[taskName];
        if (task && task.options && task.options.tsConfig) {
          const tsConfigOption = task.options.tsConfig;
          if (typeof tsConfigOption === 'string') {
            tsconfigPaths.push(tsConfigOption);
          } else if (Array.isArray(tsConfigOption)) {
            tsconfigPaths.push(...tsConfigOption);
          }
        }
      }
    }
  }

  // Filter out tsconfig files that don't exist and remove any duplicates.
  return tsconfigPaths
      .filter(p => tree.exists(p))
      .filter((value, index, self) => self.indexOf(value) === index);
}
