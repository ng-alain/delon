import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import * as nodeUtils from '../utils/node';
import { createAlainApp } from '../utils/testing';
import { DEFAULT_WORKSPACE_PATH } from '../utils/workspace';

describe('Schematic: ng-add', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  it('should dependencies @delon of an application', async () => {
    ({ runner, tree } = await createAlainApp());
    const packageJson = JSON.parse(tree.readContent('package.json'));
    expect(packageJson.dependencies['@delon/theme']).toBeDefined();
  });

  it('#issues-https://github.com/ng-alain/ng-alain/issues/2359', async () => {
    ({ runner, tree } = await createAlainApp());
    const json = JSON.parse(tree.readContent(DEFAULT_WORKSPACE_PATH));
    const budgets = json.projects['foo'].architect.build.configurations.production.budgets;
    expect(budgets[0].maximumWarning).toBe('2mb');
    expect(budgets[0].maximumError).toBe('3mb');
  });

  it('should throw errr when node version is not valid range', async () => {
    spyOn(nodeUtils, 'getNodeMajorVersion').and.returnValue(10);
    try {
      await createAlainApp();
      expect(true).toBe(false);
    } catch (ex) {
      expect(true).toBe(true);
    }
  });
});
