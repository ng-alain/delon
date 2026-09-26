import { Component } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import { addSeconds } from 'date-fns';
import { CountdownConfig } from 'ngx-countdown';

import { createTestContext } from '@delon/testing';

import { CountDownComponent } from './count-down.component';

describe('abc: count-down', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;

  beforeEach(() => {
    ({ fixture, context } = createTestContext(TestComponent));
  });

  it('should be create an instance via [config]', async () => {
    vi.spyOn(context, 'handleEvent').mockReturnValue(undefined);
    context.config = {
      leftTime: 2,
      notify: [1.5]
    };
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(2001);
    expect(context.handleEvent).toHaveBeenCalled();
  });

  it('should be create an instance via [target]', async () => {
    vi.spyOn(context, 'handleEvent').mockReturnValue(undefined);
    context.target = 1;
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(1001);
    expect(context.handleEvent).toHaveBeenCalled();
  });

  it('should be create an instance when target is date', async () => {
    vi.spyOn(context, 'handleEvent').mockReturnValue(undefined);
    context.target = addSeconds(new Date(), 1);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(1001);
    expect(context.handleEvent).toHaveBeenCalled();
  });
});

@Component({
  template: `
    @if (config) {
      <div>
        <count-down [config]="config" (event)="handleEvent()" style="font-size: 20px" />
      </div>
    }
    @if (target) {
      <div>
        <count-down [target]="target" (event)="handleEvent()" style="font-size: 20px" />
      </div>
    }
  `,
  imports: [CountDownComponent]
})
class TestComponent {
  config?: CountdownConfig;
  target?: number | Date;
  handleEvent(): void {}
}
