import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FilterPipeModule } from './module';

describe('Pipe: filter', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FilterPipeModule],
      declarations: [TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
  });
  it('should working', () => {
    fixture.detectChanges();
    expect((fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerText).toBe('2,3');
  });
  it('should be other args', () => {
    const matcherSpy = spyOn(fixture.componentInstance, 'matcher');
    fixture.detectChanges();
    expect((matcherSpy.calls.first().args as unknown[]).length).toBe(2);
  });
});

@Component({
  template: ` <p id="result">{{ list | filter: matcher : other }}</p> `
})
class TestComponent {
  list = [1, 2, 3];
  other = 4;
  matcher = (item: number): boolean => item > 1;
}
