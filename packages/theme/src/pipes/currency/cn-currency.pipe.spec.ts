import { registerLocaleData } from '@angular/common';
import localeZhHans from '@angular/common/locales/zh-Hans';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AlainThemeModule } from '../../theme.module';

registerLocaleData(localeZhHans);

describe('Pipe: _currency', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AlainThemeModule.forRoot()],
      declarations: [TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
  });

  [
    { value: 100, result: `￥100.00` },
    { value: 100.5, result: `￥100.50` },
    { value: 100.534, result: `￥100.53` },
    { value: 100.536, result: `￥100.54` },
    { value: 1000000.536, result: `￥1,000,000.54` },
    { value: 100, result: `RMB100.00`, currencyCode: 'RMB' },
    { value: 100, result: `￥100.00`, display: 'code' },
    { value: 100, result: `￥100.00`, display: 'symbol' },
    { value: 100, result: `￥100.00`, display: 'symbol-narrow' },
    { value: 100, result: `￥100.00`, display: false },
    { value: 100, result: `￥100.00`, display: true },
    { value: 3.14, result: `￥003.14000`, digits: '3.5-5' },
  ].forEach((item: any) => {
    it(`${JSON.stringify(item)} muse be ${item.result}`, () => {
      fixture.componentInstance.value = item.value;
      if (item.currencyCode) fixture.componentInstance.currencyCode = item.currencyCode;
      if (item.display) fixture.componentInstance.display = item.display;
      if (item.digits) fixture.componentInstance.digits = item.digits;
      fixture.detectChanges();
      expect((fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerText).toBe(item.result);
    });
  });
});

@Component({
  template: `
    <p id="result">{{ value | _currency: currencyCode:display:digits }}</p>
  `,
})
class TestComponent {
  value: number;
  currencyCode: string;
  display: 'code' | 'symbol' | 'symbol-narrow' | boolean;
  digits: string;
}
