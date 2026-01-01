import { Component } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import { createTestContext } from '@delon/testing';

import { ObserverSize } from './observer-size';

describe('abc: observers', () => {
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;

  beforeEach(() => {
    ({ fixture, context } = createTestContext(TestComponent));
  });

  it('should be working', cb => {
    fixture.detectChanges();

    spyOn(context, 'event');
    context.width = 150;
    fixture.detectChanges();
    // wait for MutationObserver
    setTimeout(() => {
      expect(context.event).toHaveBeenCalled();
      cb();
    }, 25);
  });
});

@Component({
  template: `<div style="height:100px;" [style.width.px]="width" (observeSize)="event($event)"></div>`,
  imports: [ObserverSize]
})
class TestComponent {
  width = 100;
  event(_: MutationRecord[]): void {}
}
