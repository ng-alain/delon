import { Component, signal } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import { createTestContext } from '@delon/testing';

import { ObserverSize } from './observer-size';

describe('abc: observers', () => {
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;

  beforeEach(() => {
    ({ fixture, context } = createTestContext(TestComponent));
  });

  it('should be working', async () => {
    fixture.detectChanges();

    vi.spyOn(context, 'event').mockReturnValue(undefined);
    context.width.set(150);
    fixture.detectChanges();
    // wait for MutationObserver
    await vi.waitFor(() => expect(context.event).toHaveBeenCalled());
  });
});

@Component({
  template: `<div style="height:100px;" [style.width.px]="width()" (observeSize)="event($event)"></div>`,
  imports: [ObserverSize]
})
class TestComponent {
  readonly width = signal(100);
  event(_: MutationRecord[]): void {}
}
