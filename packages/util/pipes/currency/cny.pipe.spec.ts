import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CurrencyCNYOptions } from '@delon/util/format';
import { CurrencyPipeModule } from './module';

describe('Pipe: currencyCNY', () => {
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
    expect((fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerText).toBe('壹万元整');
  });
  it('should be return inWords', () => {
    fixture.componentInstance.value = 10000;
    fixture.componentInstance.options = { inWords: false };
    fixture.detectChanges();
    expect((fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerText).toBe('一万');
  });
});

@Component({
  template: ` <p id="result">{{ value | currencyCNY: options }}</p> `,
})
class TestComponent {
  value: number;
  options?: CurrencyCNYOptions;
}
