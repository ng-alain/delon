import { Component, DebugElement, signal, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { differenceInDays } from 'date-fns';

import { createTestContext } from '@delon/testing';
import { DelonLocaleModule } from '@delon/theme';
import { AlainDateRangePickerShortcut } from '@delon/util/config';
import { NzDatePickerComponent, NzRangePickerComponent } from 'ng-zorro-antd/date-picker';

import { RangePickerDirective } from './range.directive';

describe('abc: date-picker: nz-range-picker[extend]', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  it('should be throw error when not attached to nz-range-picker component', () => {
    expect(() => {
      createTestContext(TestThrowComponent);
      fixture.detectChanges();
    }).toThrow();
  });

  describe('', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [DelonLocaleModule]
      });
      ({ fixture, dl, context } = createTestContext(TestComponent));
      fixture.detectChanges();
    });

    describe('#ngModel', () => {
      it('should be working', async () => {
        const NOW = new Date();
        context.i.set({
          start: NOW,
          end: NOW
        });
        await cd();
        expect(context.comp.start).not.toBeNull();
        expect(context.comp.end).not.toBeNull();
        expect(differenceInDays(context.comp.start!, context.comp.end!)).toBe(0);
      });

      it('should be invalid value when start & end include null value', async () => {
        context.i.set({
          start: new Date(),
          end: undefined
        });
        await cd();
        expect(context.comp.start).toBeNull();
        expect(context.comp.end).toBeNull();
      });
    });

    describe('#shortcat', () => {
      it('with true', async () => {
        context.shortcut.set('true');
        fixture.detectChanges();
        await openPicker();
        getPickerFooterExtra().querySelectorAll('a')[0].click();
        await cd();
        expect(differenceInDays(context.i().end!, context.i().start!)).toBe(0);
      });
      it('with false', async () => {
        context.shortcut.set('false');
        fixture.detectChanges();
        await openPicker();
        expect(dl.query(By.css('.ant-picker-footer-extra')) == null).toBe(true);
      });
      it('with null', async () => {
        context.shortcut.set(null);
        fixture.detectChanges();
        await openPicker();
        expect(dl.query(By.css('.ant-picker-footer-extra')) == null).toBe(true);
      });
      it('with custom function', async () => {
        const start = new Date(2025, 12, 30);
        const end = new Date(2025, 12, 31);
        context.shortcut.set({
          enabled: true,
          list: ['today', { text: 'test', fn: () => [start, end] }]
        });
        fixture.detectChanges();
        await openPicker();
        console.log(getPickerFooterExtra().querySelectorAll('a'));
        getPickerFooterExtra().querySelectorAll('a')[1].click();
        await cd();
        expect(context.i().start?.toLocaleDateString()).toBe(start.toLocaleDateString());
        expect(context.i().end?.toLocaleDateString()).toBe(end.toLocaleDateString());
      });
    });
  });

  async function openPicker(): Promise<HTMLInputElement> {
    const el = dl.query(By.css('.ant-picker-input input')).nativeElement as HTMLInputElement;
    el.click();
    await cd();
    return el;
  }

  async function cd(time: number = 5000): Promise<void> {
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(time);
    fixture.detectChanges();
  }

  function getPickerFooterExtra(): HTMLElement {
    return dl.query(By.css('.ant-picker-footer-extra')).nativeElement as HTMLElement;
  }
});

@Component({
  template: `
    <nz-range-picker
      #comp="extendRangePicker"
      [(ngModel)]="i().start"
      extend
      [(ngModelEnd)]="i().end"
      [shortcut]="shortcut()"
    />
  `,
  imports: [FormsModule, NzRangePickerComponent, NzDatePickerComponent, RangePickerDirective]
})
class TestComponent {
  @ViewChild('comp', { static: true }) comp!: RangePickerDirective;
  readonly i = signal<{ start?: Date; end?: Date }>({});
  readonly shortcut = signal<string | AlainDateRangePickerShortcut | null>('false');
}

@Component({
  template: ` <nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end" /> `,
  imports: [FormsModule, RangePickerDirective]
})
class TestThrowComponent {
  i: { start?: Date; end?: Date } = {};
}
