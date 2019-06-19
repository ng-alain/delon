import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { createAlainApp } from '../utils/testing';

describe('Schematic: ng-add', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(async () => ({ runner, tree } = await createAlainApp()));

  it('should dependencies @delon of an application', () => {
    const packageJson = JSON.parse(tree.readContent('package.json'));
    expect(packageJson.dependencies['@delon/theme']).toBeDefined();
    expect(packageJson.dependencies['@antv/g2']).not.toBeDefined();
  });

  it('should dependencies @antv when -g2', async () => {
    tree = await runner.runSchematicAsync('ng-add', { g2: true }, tree).toPromise();
    const packageJson = JSON.parse(tree.readContent('package.json'));
    expect(packageJson.dependencies['@antv/g2']).toBeDefined();
  });
});
