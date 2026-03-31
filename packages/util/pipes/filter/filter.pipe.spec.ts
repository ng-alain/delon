import { Component } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FilterPipe } from './filter.pipe';

describe('Pipe: filter', () => {
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
    expect((fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerText).toBe('2,3');
  }));
  it('should be other args', fakeAsync(() => {
    const matcherSpy = vi.spyOn(fixture.componentInstance, 'matcher');
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect((matcherSpy.mock.calls[0] as unknown[]).length).toBe(2);
  }));
});

@Component({
  template: ` <p id="result">{{ list | filter: matcher : other }}</p> `,
  imports: [FilterPipe],
  standalone: true
})
class TestComponent {
  list = [1, 2, 3];
  other = 4;
  matcher = (item: number): boolean => item > 1;
}
