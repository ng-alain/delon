import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestSuite, createTestContext } from '@delon/testing';
import addSeconds from 'date-fns/add_seconds';

import { CountDownModule } from './count-down.module';

describe('abc: count-down', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [CountDownModule],
      declarations: [TestComponent],
    });
  });

  beforeEach(() => ({ fixture, dl, context } = createTestContext(TestComponent)));

  it('should be create an instance via [config]', (done: () => void) => {
    spyOn(context, 'begin');
    spyOn(context, 'notify');
    spyOn(context, 'end');
    context.config = {
      leftTime: 2,
      notify: [1.5],
    };
    fixture.detectChanges();
    setTimeout(() => {
      expect(context.begin).toHaveBeenCalled();
      expect(context.notify).toHaveBeenCalled();
      expect(context.end).toHaveBeenCalled();
      done();
    }, 2000 + 20);
  });

  it('should be create an instance via [target]', (done: () => void) => {
    spyOn(context, 'end');
    context.target = 1;
    fixture.detectChanges();
    setTimeout(() => {
      expect(context.end).toHaveBeenCalled();
      done();
    }, 1000 + 20);
  });

  it('should be create an instance when target is date', (done: () => void) => {
    spyOn(context, 'end');
    context.target = addSeconds(new Date(), 1);
    fixture.detectChanges();
    setTimeout(() => {
      expect(context.end).toHaveBeenCalled();
      done();
    }, 1000 + 20);
  });
});

@Component({
  template: `
    <div *ngIf="config">
        <count-down
            [config]="config"
            (begin)="begin()"
            (end)="end()"
            (notify)="notify($event)" style="font-size: 20px"></count-down>
    </div>
    <div *ngIf="target">
        <count-down
            [target]="target"
            (begin)="begin()"
            (end)="end()"
            (notify)="notify($event)" style="font-size: 20px"></count-down>
    </div>`,
})
class TestComponent {
  config: any;
  target: number | Date;
  notify(val: number) {
  }
  begin() {
  }
  end() {
  }
}
