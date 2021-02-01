import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CurrencyFormatOptions } from '@delon/util/format';
import { CurrencyPipeModule } from './module';

describe('Pipe: price', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CurrencyPipeModule],
      declarations: [TestComponent],
    });
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
})
class TestComponent {
  value: number;
  options: CurrencyFormatOptions = {};
}
