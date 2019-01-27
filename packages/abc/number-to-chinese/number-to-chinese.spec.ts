import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { numberToChinese } from './number-to-chinese';
import { NumberToChineseModule } from './number-to-chinese.module';

describe('abc: number-to-chinese', () => {
  describe('[service]', () => {
    [
      { rmb: false, num: 0.123456789, value: '零点一二三四五六七八九' },
      { rmb: true, num: 0.123456789, value: '零元壹角贰分叁厘肆毫' },
      { rmb: false, num: 20000000000000000, value: '两兆' },
      { rmb: true, num: 20000000000000000, value: '贰兆元整' },
      { rmb: false, num: 0, value: '零' },
      { rmb: true, num: 0, value: '零元整' },
      { rmb: false, num: '1.0', value: '一点零' },
      { rmb: true, num: '1.0', value: '壹元整' },
      { rmb: false, num: '1.0001', value: '一点零零零一' },
      { rmb: true, num: '1.0001', value: '壹元零角零分零厘壹毫' },
      { rmb: false, num: 10.34, value: '十点三四' },
      { rmb: false, num: 1.34, value: '一点三四' },
      { rmb: true, num: 1.34, value: '壹元叁角肆分' },
      { rmb: false, num: 1000.34, value: '一千点三四' },
      { rmb: true, num: 1000.34, value: '壹仟元叁角肆分' },
      { rmb: false, num: -1202030, value: '负一百二十万零两千零三十' },
      { rmb: true, num: -1202030, value: '负壹佰贰拾万零贰仟零叁拾元整' },
      {
        rmb: false,
        num: -1202030,
        value: '欠一百二十万零两千零三十',
        options: { minusSymbol: '欠' },
      },
      {
        rmb: true,
        num: -1202030,
        value: '欠壹佰贰拾万零贰仟零叁拾元整',
        options: { minusSymbol: '欠' },
      },
    ].forEach((item: any) => {
      it(`${typeof item.num === 'string' ? '[string]' : ''}${item.rmb ? 'RMB:' : ''}${
        item.num
      } muse be ${item.value}`, () => {
        expect(numberToChinese(item.num, item.rmb, item.options || null)).toBe(item.value);
      });
    });

    it('should be throw when validThrow: true', () => {
      expect(() => {
        numberToChinese('asdf', true, {
          validThrow: true,
        });
      }).toThrow();
    });

    it('should be simple', () => {
      expect(numberToChinese('1')).toBe('壹元整');
    });
  });

  describe('[pipe]', () => {
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NumberToChineseModule],
        declarations: [TestComponent],
      });
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
    });

    [
      { value: 1, result: `壹元整` },
      { value: 1, result: `一`, rmb: false },
      { value: -1, result: `负壹元整`, rmb: true, minusSymbol: '负' },
    ].forEach((item: any) => {
      it(`${item.value.toString()} muse be ${item.result}`, () => {
        fixture.componentInstance.value = item.value;
        fixture.componentInstance.rmb = item.rmb;
        fixture.componentInstance.minusSymbol = item.minusSymbol;
        fixture.detectChanges();
        expect(
          (fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerHTML,
        ).toBe(item.result);
      });
    });
  });
});

@Component({
  template: `
    <div id="result" [innerHTML]="value | n2c: rmb:minusSymbol"></div>
  `,
})
class TestComponent {
  value: number | string = 1;
  rmb: boolean;
  minusSymbol: string;
}
