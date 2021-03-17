import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { createTestContext } from '@delon/testing';
import { addSeconds } from 'date-fns';
import { CountdownConfig } from 'ngx-countdown';
import { CountDownModule } from './count-down.module';

describe('abc: count-down', () => {
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CountDownModule],
      declarations: [TestComponent],
    });
    ({ fixture, context } = createTestContext(TestComponent));
  });

  it('should be create an instance via [config]', fakeAsync(() => {
    spyOn(context, 'handleEvent');
    context.config = {
      leftTime: 2,
      notify: [1.5],
    };
    fixture.detectChanges();
    tick(2001);
    expect(context.handleEvent).toHaveBeenCalled();
  }));

  it('should be create an instance via [target]', fakeAsync(() => {
    spyOn(context, 'handleEvent');
    context.target = 1;
    fixture.detectChanges();
    tick(1001);
    expect(context.handleEvent).toHaveBeenCalled();
  }));

  it('should be create an instance when target is date', fakeAsync(() => {
    spyOn(context, 'handleEvent');
    context.target = addSeconds(new Date(), 1);
    fixture.detectChanges();
    tick(1001);
    expect(context.handleEvent).toHaveBeenCalled();
  }));
});

@Component({
  template: `
    <div *ngIf="config">
      <count-down [config]="config" (event)="handleEvent()" style="font-size: 20px"></count-down>
    </div>
    <div *ngIf="target">
      <count-down [target]="target" (event)="handleEvent()" style="font-size: 20px"></count-down>
    </div>
  `,
})
class TestComponent {
  config: CountdownConfig;
  target: number | Date;
  handleEvent(): void {}
}
