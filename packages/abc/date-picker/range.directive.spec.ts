import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createTestContext, dispatchMouseEvent } from '@delon/testing';
import { AlainDateRangePickerShortcut } from '@delon/util/config';
import { differenceInDays } from 'date-fns';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { DatePickerModule } from './date-picker.module';
import { RangePickerDirective } from './range.directive';

registerLocaleData(zh);

describe('abc: date-picker: nz-range-picker[extend]', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  it('should be throw error when not attached to nz-range-picker component', () => {
    expect(() => {
      TestBed.configureTestingModule({
        imports: [DatePickerModule, FormsModule, NoopAnimationsModule, NzDatePickerModule],
        declarations: [TestThrowComponent],
      });
      createTestContext(TestThrowComponent);
      fixture.detectChanges();
    }).toThrow();
  });

  describe('', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [DatePickerModule, FormsModule, NoopAnimationsModule, NzDatePickerModule],
        declarations: [TestComponent],
      });
      ({ fixture, dl, context } = createTestContext(TestComponent));
      fixture.detectChanges();
    });

    describe('#ngModel', () => {
      it('should be working', fakeAsync(() => {
        const NOW = new Date();
        context.i = {
          start: NOW,
          end: NOW,
        };
        cd();
        expect(context.comp.start).not.toBeNull();
        expect(context.comp.end).not.toBeNull();
        expect(differenceInDays(context.comp.start!, context.comp.end!)).toBe(0);
      }));

      it('should be invalid value when start & end include null value', fakeAsync(() => {
        context.i = {
          start: new Date(),
          end: undefined,
        };
        cd();
        expect(context.comp.start).toBeNull();
        expect(context.comp.end).toBeNull();
      }));
    });

    describe('#shortcat', () => {
      it('with true', fakeAsync(() => {
        context.shortcut = true;
        fixture.detectChanges();
        openPicker();
        getPickerFooterExtra().querySelectorAll('a')[0].click();
        cd();
        expect(differenceInDays(context.i.end!, context.i.start!)).toBe(0);
      }));
      it('with false', fakeAsync(() => {
        context.shortcut = false;
        fixture.detectChanges();
        openPicker();
        expect(dl.query(By.css('.ant-picker-footer-extra')) == null).toBe(true);
      }));
      it('with null', fakeAsync(() => {
        context.shortcut = null;
        fixture.detectChanges();
        openPicker();
        expect(dl.query(By.css('.ant-picker-footer-extra')) == null).toBe(true);
      }));
    });
  });

  function openPicker(): HTMLInputElement {
    const el = dl.query(By.css('.ant-picker-input input')).nativeElement as HTMLInputElement;
    dispatchMouseEvent(el, 'click');
    cd();
    return el;
  }

  function cd(time: number = 5000): void {
    fixture.detectChanges();
    tick(time);
    fixture.detectChanges();
  }

  function getPickerFooterExtra(): HTMLElement {
    return dl.query(By.css('.ant-picker-footer-extra')).nativeElement as HTMLElement;
  }
});

@Component({
  template: `
    <nz-range-picker #comp="extendRangePicker" [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end" [shortcut]="shortcut"></nz-range-picker>
  `,
})
class TestComponent {
  @ViewChild('comp', { static: true }) comp: RangePickerDirective;
  i: { start?: Date; end?: Date } = {};
  shortcut: boolean | AlainDateRangePickerShortcut | null = false;
}

@Component({
  template: ` <div [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end"></div> `,
})
class TestThrowComponent {
  i: { start?: Date; end?: Date } = {};
}
