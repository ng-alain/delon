import { Component, LOCALE_ID } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CurrencyMegaOptions } from '@delon/util/format';

import { CurrencyMegaPipe } from './mega.pipe';

describe('Pipe: mega', () => {
  let fixture: ComponentFixture<TestComponent>;

  describe('default', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);
    });
    it('should working', fakeAsync(() => {
      fixture.componentInstance.value = 10000;
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect((fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerText).toBe('10K');
    }));
    it('should be precision', fakeAsync(() => {
      fixture.componentInstance.value = 10100;
      fixture.componentInstance.options.precision = 1;
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect((fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerText).toBe('10.1K');
    }));
  });

  describe('CN', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [{ provide: LOCALE_ID, useValue: 'zh' }]
      });
      fixture = TestBed.createComponent(TestComponent);
    });
    it('should working', fakeAsync(() => {
      fixture.componentInstance.value = 10000;
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect((fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerText).toBe('10千');
    }));
  });
});

@Component({
  template: ` <p id="result">{{ value | mega: options }}</p> `,
  imports: [CurrencyMegaPipe],
  standalone: true
})
class TestComponent {
  value?: number;
  options: CurrencyMegaOptions = {};
}
