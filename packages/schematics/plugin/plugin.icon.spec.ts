import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { createAlainApp } from '../utils/testing';

const testCases = {
  'style-icons.ts': `
  import { NzFilterOutline, StepBackwardFill } from '@ant-design/icons-angular/icons';
  export const ICONS = [ NzFilterOutline, StepBackwardFill ];
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
    <i nz-icon nzType="align-{{type ? 'left' : 'right'}}"></i>
    <i nz-icon nzType="align-{{type ? centerVar : topVar}}"></i>
    <i nz-icon nzType="nz-align-{{type ? 'left' : 'right'}}"></i>
    <i nz-icon nzType="nz-align-{{type ? centerVar : topVar}}"></i>
    <i nz-icon [type]="type ? 'menu-fold' : 'menu-unfold'" [theme]="theme ? 'outline' : 'fill'"></i>
    <i nz-icon [type]="type ? 'fullscreen' : 'fullscreen-exit'"></i>
    <i nz-icon [nzType]="type ? 'nz-menu-fold' : 'nz-menu-unfold'" [theme]="theme ? 'outline' : 'fill'"></i>
    <i nz-icon [nzType]="type ? 'nz-fullscreen' : 'nz-fullscreen-exit'"></i>
    <i nz-icon nzType="{{ type ? 'arrow-left' : 'arrow-right' }}"></i>
    <i nz-icon nzType="{{ type ? 'nz-arrow-left' : 'nz-arrow-right' }}"></i>
    <i nz-icon [nzType]="d.status === 'NORMAL' ? 'close1' : 'close2'"></i>
    <i nz-icon nzType="filter" theme="outline"></i>
    <i nz-icon nzType="nz-filter" nzTheme="outline"></i>
    <i nz-icon nzType="step-backward" theme="outline"></i>
    <i nz-icon nzType="step-backward" theme="fill"></i>
    <i nz-icon nzType="nz-step-a" nzTheme="fill"></i>
    <i nz-icon nzType="up-circle" theme="twotone"></i>
    <nz-input-group [nzAddOnBeforeIcon]="focus ? 'anticon anticon-arrow-down' : 'anticon anticon-search'"></nz-input-group>
    \`
  })
  export class TestComponent {}
  `,
};

describe('NgAlainSchematic: plugin: icon', () => {
  let runner: SchematicTestRunner;
  let tree: UnitTestTree;

  beforeEach(async () => {
    ({ runner, tree } = await createAlainApp());
    Object.keys(testCases).forEach(name => tree.create(`/projects/foo/src/${name}`, testCases[name]));
    tree = await runner.runSchematicAsync('plugin', { name: 'icon', type: 'add' }, tree).toPromise();
  });

  it(`should working`, () => {
    const path = `/projects/foo/src/style-icons-auto.ts`;
    expect(tree.exists(path)).toBe(true);
    const content = tree.readContent(path);
    // ingore custom icons
    expect(content).not.toContain(`NzFilterOutline`);
    expect(content).not.toContain(`StepBackwardFill`);
    // white icons
    expect(content).not.toContain(`LoadingOutline`);
    // type="{{value ? 'icon' : 'icon' }}"
    expect(content).toContain(`ArrowLeftOutline`);
    expect(content).toContain(`ArrowRightOutline`);
    // type="align-{{type ? 'left' : 'right'}}"
    expect(content).toContain(`AlignLeftOutline`);
    expect(content).toContain(`AlignRightOutline`);
    // nzType="align-{{type ? 'left' : 'right'}}"
    expect(content).toContain(`NzAlignLeftOutline`);
    expect(content).toContain(`NzAlignRightOutline`);
    // [type]="value ? 'icon' : 'icon'"
    expect(content).toContain(`FullscreenExitOutline`);
    expect(content).toContain(`FullscreenOutline`);
    // condition: type & theme
    expect(content).toContain(`MenuFoldFill`);
    expect(content).toContain(`MenuFoldOutline`);
    expect(content).toContain(`MenuUnfoldFill`);
    expect(content).toContain(`MenuUnfoldOutline`);
    // <i nz-icon nzType="nz-step-a" nzTheme="fill"></i>
    expect(content).toContain(`NzStepA`);
    // attributes
    expect(content).toContain(`ArrowDownOutline`);
    // expect(content).toContain(`SearchOutline`);
    // <i nz-icon [nzType]="d.status === 'NORMAL' ? 'close1' : 'close2'"></i>
    expect(content).toContain(`Close1Outline`);
    expect(content).toContain(`Close2Outline`);
  });
});
