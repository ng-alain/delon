import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestSuite, createTestContext, PageG2 } from '@delon/testing';

import { G2MiniProgressComponent } from './mini-progress.component';
import { G2MiniProgressModule } from './mini-progress.module';

describe('chart: mini-progress', () => {
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;
  let page: PageG2<TestComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [G2MiniProgressModule],
      declarations: [TestComponent],
    });
  });

  beforeEach(() => {
    ({ fixture, context } = createTestContext(TestComponent));
    fixture.detectChanges();
    page = new PageG2(fixture);
  });

  it('should be working', () => {
    const el = page.getEl('.g2-mini-progress__value');
    expect(el.style.width).toBe(`${context.percent}%`);
    expect(el.style.height).toBe(`${context.strokeWidth}px`);
  });

  it('should be percent minimum value is 0', () => {
    context.percent = -1;
    page.dc();
    const el = page.getEl('.g2-mini-progress__value');
    expect(el.style.width).toBe(`0%`);
  });

  it('should be percent maximum value is 100', () => {
    context.percent = 101;
    page.dc();
    const el = page.getEl('.g2-mini-progress__value');
    expect(el.style.width).toBe(`100%`);
  });
});

@Component({
  template: `
    <g2-mini-progress #comp [color]="color" [target]="target" [percent]="percent" [strokeWidth]="strokeWidth">
    </g2-mini-progress>
  `,
})
class TestComponent {
  @ViewChild('comp') comp: G2MiniProgressComponent;
  color = '#1890FF';
  target: number = 1;
  percent: number = 10;
  strokeWidth: number = 1;
}
