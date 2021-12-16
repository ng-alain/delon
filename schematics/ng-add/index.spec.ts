import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import * as nodeUtils from '../utils/node';
import { createAlainApp } from '../utils/testing';

describe('Schematic: ng-add', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  it('should dependencies @delon of an application', async () => {
    ({ runner, tree } = await createAlainApp());
    const packageJson = JSON.parse(tree.readContent('package.json'));
    expect(packageJson.dependencies['@delon/theme']).toBeDefined();
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
