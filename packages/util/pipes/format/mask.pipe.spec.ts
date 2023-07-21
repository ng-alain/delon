import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FormatPipeModule } from './module';

describe('Pipe: mask', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormatPipeModule],
      declarations: [TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
  });
  it('should working', () => {
    fixture.detectChanges();
    expect((fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerText).toBe('(123)');
  });
});

@Component({
  template: ` <p id="result">{{ value | mask: maskStr }}</p> `
})
class TestComponent {
  value = '123';
  maskStr = '(###)';
}
