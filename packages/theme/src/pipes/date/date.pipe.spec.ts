import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localeZhHans from '@angular/common/locales/zh-Hans';
registerLocaleData(localeZhHans);

import { distanceInWordsToNow } from 'date-fns';
import * as zh_cn from 'date-fns/locale/zh_cn';

import { AlainThemeModule } from '../../theme.module';

describe('Pipe: _date', () => {
  let fixture: ComponentFixture<TestComponent>;
  const date = new Date(2017, 9, 17, 15, 35, 59);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AlainThemeModule.forRoot()],
      declarations: [TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    (window as any).__locale__ = zh_cn;
  });

  [
    { date, result: `2017-10-17 15:35` },
    { date: +date, result: `2017-10-17 15:35` },
    { date: (+date).toString(), result: `2017-10-17 15:35` },
    { date, result: `2017年10月17日`, format: 'YYYY年MM月DD日' },
    { date: null, result: `` },
    { date: undefined, result: `` },
    { date, result: ``, format: 'fn' },
  ].forEach((item: any) => {
    it(`${typeof item.date}:${'' + item.date} muse be ${item.result}${
      item.format ? `(format: ${item.format})` : ''
    }`, () => {
      fixture.componentInstance.value = item.date;
      if (item.format) {
        fixture.componentInstance.format = item.format;
        if (item.format === 'fn')
          item.result = distanceInWordsToNow(item.date, {
            locale: (window as any).__locale__,
          });
      }
      fixture.detectChanges();
      expect((fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerText).toBe(item.result);
    });
  });
});

@Component({
  template: `
    <p id="result">{{ value | _date: format }}</p>
  `,
})
class TestComponent {
  value: Date | string | number;
  format: string;
}
