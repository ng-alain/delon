import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { createTestContext } from '@delon/testing';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { G2Service } from '../core';
import { G2CustomComponent } from './custom.component';

describe('chart: custom', () => {
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;

  beforeEach(() => {
    ({ fixture, context } = createTestContext(TestComponent));

    spyOn(context, 'render');
    spyOn(context, 'resize');
  });

  it('should be working', fakeAsync(() => {
    expect(context.render).not.toHaveBeenCalled();
    fixture.detectChanges();
    tick(1);
    expect(context.render).toHaveBeenCalled();
  }));

  it('should be resize', fakeAsync(() => {
    expect(context.resize).not.toHaveBeenCalled();
    context.resizeTime = 1;
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    window.dispatchEvent(new Event('resize'));
    tick(2);
    expect(context.resize).toHaveBeenCalled();
  }));

  it('should be load scripts by cdn', () => {
    const srv = TestBed.inject(G2Service);
    spyOn(srv, 'libLoad');
    spyOnProperty(context.comp, 'winG2').and.returnValue(null as NzSafeAny);
    fixture.detectChanges();
    expect(srv.libLoad).toHaveBeenCalled();
  });
});

@Component({
  template: ` <g2-custom #comp [resizeTime]="resizeTime" (resize)="resize()" (render)="render()" />`,
  imports: [G2CustomComponent]
})
class TestComponent {
  @ViewChild('comp', { static: true }) comp!: G2CustomComponent;
  resizeTime = 0;
  render(): void {}
  resize(): void {}
}
