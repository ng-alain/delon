import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { configureTestSuite, createTestContext, dispatchMouseEvent } from '@delon/testing';
import differenceInDays from 'date-fns/difference_in_days';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DateRangePickerShortcut } from './date-picker.config';
import { DatePickerModule } from './date-picker.module';
import { RangePickerComponent } from './range.component';

registerLocaleData(zh);

describe('abc: date-picker: range', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [DatePickerModule, FormsModule, NoopAnimationsModule],
      declarations: [TestComponent],
    });
  });

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestComponent));
    fixture.detectChanges();
    spyOn(context, '_nzOnOpenChange');
    spyOn(context, '_nzOnPanelChange');
    spyOn(context, '_nzOnOk');
  });

  describe('#ngModel', () => {
    it('should be get values via nz-range-picker', () => {
      context.comp.valueChange([new Date(), new Date()]);
      fixture.detectChanges();
      expect(context.i.start != null).toBe(true);
      expect(context.i.end != null).toBe(true);
    });

    it('should be set values via outside values', done => {
      context.i = {
        start: new Date(),
        end: new Date(),
      };
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(context.comp.value.length).toBe(2);
        done();
      });
    });

    it('should be invalid value when start & end include null value', done => {
      context.i = {
        start: new Date(),
        end: null,
      };
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(context.comp.value.length).toBe(0);
        done();
      });
    });

    it('should be disabled', () => {
      context.comp.setDisabledState(true);
      fixture.detectChanges();
      expect(dl.queryAll(By.css('.ant-input-disabled')).length).toBe(1);
    });
  });

  describe('#events', () => {
    it('#nzOnOpenChange', () => {
      context.comp._nzOnOpenChange(true);
      fixture.detectChanges();
      expect(context._nzOnOpenChange).toHaveBeenCalled();
    });
    it('#nzOnPanelChange', () => {
      context.comp._nzOnPanelChange(true);
      fixture.detectChanges();
      expect(context._nzOnPanelChange).toHaveBeenCalled();
    });
    it('#nzOnOk', () => {
      context.comp._nzOnOk(true);
      fixture.detectChanges();
      expect(context._nzOnOk).toHaveBeenCalled();
    });
  });

  describe('#shortcat', () => {
    it('with true', fakeAsync(() => {
      context.shortcut = true;
      fixture.detectChanges();
      openPicker();
      getPickerFooterExtra().querySelectorAll('a')[0].click();
      timeEnd();
      expect(differenceInDays(context.i.end, context.i.start)).toBe(0);
    }));
    it('with false', fakeAsync(() => {
      context.shortcut = false;
      fixture.detectChanges();
      openPicker();
      expect(dl.query(By.css('.ant-calendar-footer-extra')) == null).toBe(true);
    }));
    it('with null', fakeAsync(() => {
      context.shortcut = null;
      fixture.detectChanges();
      openPicker();
      expect(dl.query(By.css('.ant-calendar-footer-extra')) == null).toBe(true);
    }));
    it('should be keeping open panel when closed is false', fakeAsync(() => {
      context.shortcut = { closed: false, enabled: true };
      fixture.detectChanges();
      openPicker();
      expect(dl.query(By.css('.ant-calendar-footer-extra')) == null).toBe(false);
      getPickerFooterExtra().querySelectorAll('a')[0].click();
      const list = getPickerFooterExtra().querySelectorAll('a');
      const shortcut = context.comp.shortcut as DateRangePickerShortcut;
      expect(list.length).toBe(shortcut.list.length);
      list.forEach(el => {
        el.click();
        timeEnd();
      });
      timeEnd();
      expect(dl.query(By.css('.ant-calendar-footer-extra')) == null).toBe(false);
    }));
  });

  function openPicker(): HTMLInputElement {
    const el = dl.query(By.css('nz-picker .ant-calendar-picker')).nativeElement as HTMLInputElement;
    dispatchMouseEvent(el, 'click');
    timeEnd();
    return el;
  }

  function timeEnd() {
    fixture.detectChanges();
    tick(500);
    fixture.detectChanges();
  }

  function getPickerFooterExtra(): HTMLElement {
    return dl.query(By.css('.ant-calendar-footer-extra')).nativeElement as HTMLElement;
  }
});

@Component({
  template: `
    <range-picker
      #comp
      [(ngModel)]="i.start"
      [(ngModelEnd)]="i.end"
      (nzOnOpenChange)="_nzOnOpenChange()"
      (nzOnPanelChange)="_nzOnPanelChange()"
      (nzOnOk)="_nzOnOk()"
      [shortcut]="shortcut"
    ></range-picker>
  `,
})
class TestComponent {
  @ViewChild('comp')
  comp: RangePickerComponent;
  i: any = {};
  _nzOnOpenChange() {}
  _nzOnPanelChange() {}
  _nzOnOk() {}
  shortcut: boolean | DateRangePickerShortcut = false;
}
