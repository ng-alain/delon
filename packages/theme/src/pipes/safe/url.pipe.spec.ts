import { Component } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { URLPipe } from './url.pipe';

describe('Pipe: url', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
  });

  [
    { value: '', result: `` },
    { value: 'https://ng-alain.com', result: `https://ng-alain.com` }
  ].forEach((item: { value: string; result: string }) => {
    it(`${item.value.toString()} muse be ${item.result}`, fakeAsync(() => {
      fixture.componentInstance.value = item.value;
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      const el = fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement;
      expect(el.attributes.getNamedItem('href')!.textContent).toBe(item.result);
    }));
  });
});

@Component({
  template: ` <a id="result" [href]="value | url"></a> `,
  imports: [URLPipe],
  standalone: true
})
class TestComponent {
  value = '';
}
