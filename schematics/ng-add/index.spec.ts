import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import { createAlainApp } from '../utils/testing';
import * as index from './index';

describe('Schematic: ng-add', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  it('should dependencies @delon of an application', async () => {
    ({ runner, tree } = await createAlainApp());
    const packageJson = JSON.parse(tree.readContent('package.json'));
    expect(packageJson.dependencies['@delon/theme']).toBeDefined();
  });

  it('should throw errr when node version is not valid range', () => {
    spyOn(index, 'getNodeMajorVersion').and.returnValue(10);
    expect(async () => await createAlainApp()).toThrowError();
  });
});
