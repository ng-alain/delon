import { TestBed } from '@angular/core/testing';

import { resolveInputs } from './input';
import { G2BarComponent } from '../bar/bar.component';

describe('chart: core/input metadata guard', () => {
  it('应能采集到 g2-bar 的全部 signal input（元数据形状守卫）', () => {
    // reflectComponentType 依赖框架 inputs 元数据的形状；
    // Angular 一旦改变形状，这条会立刻红灯，而不是线上静默失效
    const fixture = TestBed.createComponent(G2BarComponent);
    expect(
      resolveInputs(fixture.componentInstance)
        .map(i => i.name)
        .sort()
    ).toEqual(['autoLabel', 'color', 'data', 'delay', 'height', 'interaction', 'padding', 'repaint', 'theme', 'title']);
  });
});
