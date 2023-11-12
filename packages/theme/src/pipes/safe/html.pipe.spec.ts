import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AlainThemeModule } from '../../theme.module';

describe('Pipe: html', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AlainThemeModule],
      declarations: [TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  [
    { value: '', result: `` },
    { value: '<i>asdf</i>', result: `asdf` }
  ].forEach((item: { value: string; result: string }) => {
    it(`${item.value.toString()} muse be ${item.result}`, () => {
      fixture.componentInstance.value = item.value;
      fixture.detectChanges();
      expect((fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).textContent).toBe(
        item.result
      );
    });
  });
});

@Component({
  template: ` <div id="result" [innerHTML]="value | html"></div> `
})
class TestComponent {
  value = '';
}
