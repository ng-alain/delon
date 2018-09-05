import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement, Injector, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DatePickerModule } from './date-picker.module';
import { RangePickerComponent } from './range.component';
import { By } from '@angular/platform-browser';

describe('abc: date-picker: range', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [DatePickerModule.forRoot(), FormsModule],
      declarations: [TestComponent],
    }).createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(context, '_nzOnOpenChange');
    spyOn(context, '_nzOnPanelChange');
    spyOn(context, '_nzOnOk');
  });

  it('should working', () => {
    expect(context).not.toBeNull();
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
});

@Component({
  template: `
    <range-picker #comp [(ngModel)]="i.start" [(ngModelEnd)]="i.end"
      (nzOnOpenChange)="_nzOnOpenChange()"
      (nzOnPanelChange)="_nzOnPanelChange()"
      (nzOnOk)="_nzOnOk()"
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
}
