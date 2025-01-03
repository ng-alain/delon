import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CurrencyFormatOptions } from '@delon/util/format';

import { CurrencyPricePipe } from './price.pipe';

describe('Pipe: price', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
  });
  it('should working', () => {
    fixture.componentInstance.value = 10000;
    fixture.detectChanges();
    expect((fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerText).toBe('10,000');
  });
  it('should be thousands separators', () => {
    fixture.componentInstance.value = 10000.16;
    fixture.componentInstance.options.precision = 1;
    fixture.detectChanges();
    expect((fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerText).toBe('10,000.2');
  });
});

@Component({
  template: ` <p id="result">{{ value | price: options }}</p> `,
  imports: [CurrencyPricePipe]
})
class TestComponent {
  value?: number;
  options: CurrencyFormatOptions = {};
}
