import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import { createAlainApp } from '../utils/testing';

const testCases = {
  'style-icons.ts': `
  import { FilterOutline, StepBackwardFill } from '@ant-design/icons-angular/icons';
  export const ICONS = [ FilterOutline, StepBackwardFill ];
  `,
  'test-icon.ts': `
  import { Component } from '@angular/core';
  @Component({
    selector: 'test-comp',
    template: \`
    <i class="anticon anticon-user"></i>
    <i class="anticon anticon-step-backward"></i>
    <i class="anticon anticon-taobao-circle"></i>
    <i class="anticon anticon-question-circle-o"></i>
    <i class="anticon anticon-spin anticon-loading"></i>
    <i nz-icon class="anticon anticon-user"></i>
    <i nz-icon type="align-{{type ? 'left' : 'right'}}"></i>
    <i nz-icon type="align-{{type ? centerVar : topVar}}"></i>
    <i nz-icon [type]="type ? 'menu-fold' : 'menu-unfold'" [theme]="theme ? 'outline' : 'fill'"></i>
    <i nz-icon [type]="type ? 'fullscreen' : 'fullscreen-exit'"></i>
    <i nz-icon type="{{ type ? 'arrow-left' : 'arrow-right' }}"></i>
    <i nz-icon type="filter" theme="outline"></i>
    <i nz-icon type="step-backward" theme="outline"></i>
    <i nz-icon type="step-backward" theme="fill"></i>
    <i nz-icon type="up-circle" theme="twotone"></i>
    <nz-input-group [nzAddOnBeforeIcon]="focus ? 'anticon anticon-arrow-down' : 'anticon anticon-search'"></nz-input-group>
    \`
  })
  export class TestComponent {}
  `,
};

describe('NgAlainSchematic: plugin: icon', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(() => {
    ({ runner, tree } = createAlainApp());
    Object.keys(testCases).forEach(name =>
      tree.create(`/foo/src/${name}`, testCases[name]),
    );
    tree = runner.runSchematic('plugin', { name: 'icon', type: 'add' }, tree);
  });

  it(`should working`, () => {
    const path = `/foo/src/style-icons-auto.ts`;
    expect(tree.exists(path)).toBe(true);
    const content = tree.readContent(path);
    // ingore custom icons
    expect(content).not.toContain(`FilterOutline`);
    expect(content).not.toContain(`StepBackwardFill`);
    // white icons
    expect(content).not.toContain(`LoadingOutline`);
    // type="{{value ? 'icon' : 'icon' }}"
    expect(content).toContain(`ArrowLeftOutline`);
    expect(content).toContain(`ArrowRightOutline`);
    // type="align-{{type ? 'left' : 'right'}}"
    expect(content).toContain(`AlignLeftOutline`);
    expect(content).toContain(`AlignRightOutline`);
    // [type]="value ? 'icon' : 'icon'"
    expect(content).toContain(`FullscreenExitOutline`);
    expect(content).toContain(`FullscreenOutline`);
    // condition: type & theme
    expect(content).toContain(`MenuFoldFill`);
    expect(content).toContain(`MenuFoldOutline`);
    expect(content).toContain(`MenuUnfoldFill`);
    expect(content).toContain(`MenuUnfoldOutline`);
    // attributes
    expect(content).toContain(`ArrowDownOutline`);
    expect(content).toContain(`SearchOutline`);
  });
});
