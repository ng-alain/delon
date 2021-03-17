import { registerLocaleData } from '@angular/common';
import localeZhHans from '@angular/common/locales/zh-Hans';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NzI18nService, NZ_DATE_LOCALE } from 'ng-zorro-antd/i18n';
registerLocaleData(localeZhHans);
import { formatDistanceToNow } from 'date-fns';
import { zhCN as dateFnsLang } from 'date-fns/locale';
import { AlainThemeModule } from '../../theme.module';

describe('Pipe: _date', () => {
  let fixture: ComponentFixture<TestComponent>;
  const date = new Date(2017, 9, 17, 15, 35, 59);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AlainThemeModule.forRoot()],
      declarations: [TestComponent],
      providers: [{ provide: NZ_DATE_LOCALE, useValue: dateFnsLang }],
    });
    fixture = TestBed.createComponent(TestComponent);
  });

  [
    { date, result: `2017-10-17 15:35` },
    { date: +date, result: `2017-10-17 15:35` },
    { date: (+date).toString(), result: `2017-10-17 15:35` },
    { date, result: `2017年10月17日`, format: 'yyyy年MM月dd日' },
    { date, result: `15:35`, format: 'HH:mm' },
    { date: `2017-10-17 15:35:59`, result: `2017-10-17 15:35` },
    { date: `17-10-2017`, result: `` },
    { date: null, result: `` },
    { date: undefined, result: `` },
    { date, result: ``, format: 'fn' },
  ].forEach((item: any) => {
    it(`${typeof item.date}:${'' + item.date} muse be ${item.result}${item.format ? `(format: ${item.format})` : ''}`, () => {
      fixture.componentInstance.value = item.date;
      if (item.format) {
        fixture.componentInstance.format = item.format;
        if (item.format === 'fn') {
          const nzI18n = TestBed.inject(NzI18nService);
          item.result = formatDistanceToNow(item.date, {
            locale: nzI18n.getDateLocale(),
          });
        }
      }
      fixture.detectChanges();
      expect((fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerText).toBe(item.result);
    });
  });
});

@Component({
  template: ` <p id="result">{{ value | _date: format }}</p> `,
})
class TestComponent {
  value: Date | string | number;
  format: string;
}
