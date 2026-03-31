import { Component } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FormatMaskPipe } from './mask.pipe';

describe('Pipe: mask', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
  });
  it('should working', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect((fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerText).toBe('(123)');
  }));
});

@Component({
  template: ` <p id="result">{{ value | mask: maskStr }}</p> `,
  imports: [FormatMaskPipe],
  standalone: true
})
class TestComponent {
  value = '123';
  maskStr = '(###)';
}
