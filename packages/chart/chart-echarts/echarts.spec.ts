import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { createTestContext } from '@delon/testing';
import { LazyService } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { ChartEChartsOn } from '.';
import { ChartEChartsComponent } from './echarts.component';
import { ChartEChartsModule } from './echarts.module';
import { ChartEChartsEvent, ChartEChartsOption } from './echarts.types';

// let isClassECharts = false;
class MockLazyService {
  load(): Promise<void> {
    (window as NzSafeAny).echarts = {
      init: () => {
        return {
          setOption: jasmine.createSpy('setOption'),
          dispose: jasmine.createSpy('dispose'),
          on: jasmine.createSpy('on'),
          off: jasmine.createSpy('off')
        };
      }
    };
    return Promise.resolve();
  }
}

describe('chart: chart-echarts', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: LazyService, useClass: MockLazyService }],
      imports: [ChartEChartsModule],
      declarations: [TestComponent]
    });
    ({ fixture, dl, context } = createTestContext(TestComponent));
    spyOn(context, 'handleEvents');
    fixture.detectChanges();
    tick(100);
    fixture.detectChanges();
  }));

  it('should working', () => {
    const container = dl.query(By.css('div')).nativeElement as HTMLDivElement;
    expect(container.style.height).toBe(`${context.height}px`);
    expect(container.style.width).toBe(`${context.width}px`);
    expect(context.handleEvents).toHaveBeenCalled();
  });

  it('should be support percentage of width or height input', () => {
    context.height = '50%';
    context.width = '50%';
    fixture.detectChanges();
    const container = dl.query(By.css('div')).nativeElement as HTMLDivElement;
    expect(container.style.height).toBe(`${context.height}`);
    expect(container.style.width).toBe(`${context.width}`);
    expect(context.handleEvents).toHaveBeenCalled();
  });

  it('should be update option', () => {
    spyOn(context.cmp, 'setOption');
    context.option = {};
    fixture.detectChanges();
    expect(context.cmp.setOption).toHaveBeenCalled();
  });

  it('should be update theme', () => {
    spyOn(context.cmp, 'install');
    context.theme = 'dark';
    fixture.detectChanges();
    expect(context.cmp.install).toHaveBeenCalled();
  });

  it('should be update initOpt', () => {
    spyOn(context.cmp, 'install');
    context.initOpt = {};
    fixture.detectChanges();
    expect(context.cmp.install).toHaveBeenCalled();
  });
});

@Component({
  template: `
    <chart-echarts
      #cmp
      [width]="width"
      [height]="height"
      [option]="option"
      [theme]="theme"
      [initOpt]="initOpt"
      [on]="on"
      (events)="handleEvents($event)"
    />
  `,
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
class TestComponent {
  @ViewChild('cmp') readonly cmp!: ChartEChartsComponent;
  width: string | number = 600;
  height: string | number = 400;
  theme?: string | Record<string, unknown> | null = null;
  option: ChartEChartsOption = {};
  initOpt: NzSafeAny;
  on: ChartEChartsOn[] = [
    {
      eventName: 'click',
      handler: console.log
    },
    {
      eventName: 'click',
      query: 'series',
      handler: console.log
    }
  ];
  handleEvents(_: ChartEChartsEvent): void {}
}
