import { Component, viewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G2BaseComponent } from '@delon/chart/core';
import { createTestContext } from '@delon/testing';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { G2Service } from '../core';
import { G2CustomComponent } from './custom.component';

describe('chart: custom', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;

  beforeEach(() => {
    ({ fixture, context } = createTestContext(TestComponent));

    vi.spyOn(context, 'render').mockReturnValue(undefined);
    vi.spyOn(context, 'resize').mockReturnValue(undefined);
  });

  it('should be working', async () => {
    expect(context.render).not.toHaveBeenCalled();
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(1);
    expect(context.render).toHaveBeenCalled();
  });

  it('should be resize', async () => {
    expect(context.resize).not.toHaveBeenCalled();
    context.resizeTime = 1;
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(0);
    fixture.detectChanges();
    window.dispatchEvent(new Event('resize'));
    await vi.advanceTimersByTimeAsync(2);
    expect(context.resize).toHaveBeenCalled();
    // 销毁 fixture 解除 window 级 resize 订阅
    fixture.destroy();
  });

  it('should be load scripts by cdn', () => {
    const srv = TestBed.inject(G2Service);
    vi.spyOn(srv, 'libLoad').mockReturnValue(undefined as NzSafeAny);
    vi.spyOn(G2BaseComponent.prototype, 'winG2', 'get').mockReturnValue(null as NzSafeAny);
    fixture.detectChanges();
    expect(srv.libLoad).toHaveBeenCalled();
  });
});

@Component({
  template: ` <g2-custom #comp [resizeTime]="resizeTime" (resize)="resize()" (render)="render()" />`,
  imports: [G2CustomComponent]
})
class TestComponent {
  readonly comp = viewChild.required<G2CustomComponent>('comp');
  resizeTime = 0;
  render(): void {}
  resize(): void {}
}
