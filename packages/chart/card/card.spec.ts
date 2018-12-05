import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { G2CardModule } from './card.module';

describe('chart: card', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [G2CardModule],
      declarations: [TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should working', () => {
    const el = dl.nativeElement as HTMLElement;
    expect(el.querySelector('.g2-card__top') != null).toBeTruthy();
  });

  it('should be string content height', () => {
    context.contentHeight = '10%';
    fixture.detectChanges();
    const el = (dl.nativeElement as HTMLElement).querySelector('.g2-card__desc') as HTMLElement;
    expect(el.style.height).toBe('10%');
  });

});

@Component({
  template: `
  <g2-card [title]="'销售额'"
  [bordered]="true" [total]="126560" footer="日访问量 12,423" [contentHeight]="contentHeight">
  </g2-card>`,
})
class TestComponent {
  contentHeight: number | string = 46;
}
