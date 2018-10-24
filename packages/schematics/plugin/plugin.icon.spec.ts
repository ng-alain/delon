import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import { createAlainApp } from '../utils/testing';

const testCases = {
  'test.html': `
  <div>
    <i class="anticon anticon-user"></i>
    <i class="anticon anticon-step-backward"></i>
    <i class="anticon anticon-taobao-circle"></i>
    <i class="anticon anticon-question-circle-o"></i>
    <i class="anticon anticon-spin anticon-loading"></i>
    <i nz-icon class="anticon anticon-user"></i>
    <i nz-icon type="user"></i>
    <i nz-icon type="filter" theme="outline"></i>
    <i nz-icon type="step-backward" [theme]="'outline'"></i>
    <i nz-icon [type]="'step-backward'" theme="fill"></i>
    <i nz-icon type="up-circle" theme="twotone"></i>
  </div>
  `,
  'test.ts': `
  @Component({
    selector: 'test-comp',
    template: \`
    <i class="anticon anticon-user"></i>
    <i class="anticon anticon-step-backward"></i>
    <i class="anticon anticon-taobao-circle"></i>
    <i class="anticon anticon-question-circle-o"></i>
    <i class="anticon anticon-spin anticon-loading"></i>
    <i nz-icon class="anticon anticon-user"></i>
    <i nz-icon type="user"></i>
    <i nz-icon type="filter" theme="outline"></i>
    <i nz-icon type="step-backward" theme="outline"></i>
    <i nz-icon type="step-backward" theme="fill"></i>
    <i nz-icon type="up-circle" theme="twotone"></i>
    \`
  })
  export class AvatarListComponent {}
  `
};

describe('NgAlainSchematic: plugin: icon', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(() => {
    try {
    ({ runner, tree } = createAlainApp());
    Object.keys(testCases).forEach(name =>
      tree.create(`src/app/${name}`, testCases[name]),
    );
    tree = runner.runSchematic('plugin', { name: 'icon', type: 'add' }, tree);
    } catch (err) {
      console.log(err);
      debugger;
    }
  });

  it(`should working`, () => {
    console.log(tree);
  });
});
