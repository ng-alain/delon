import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFocusDirective } from './auto-focus.directive';

describe('abc: auto-focus', () => {
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    context = fixture.componentInstance;
    vi.useFakeTimers();
    vi.spyOn(context, 'focus');
  });

  it('should be working', () => {
    context.showInput = true;
    fixture.detectChanges();
    vi.advanceTimersByTime(2);
    expect(context.focus).toHaveBeenCalled();
  });

  it('should be not when enabled is false', () => {
    context.enabled = false;
    context.showInput = true;
    fixture.detectChanges();
    vi.advanceTimersByTime(2);
    expect(context.focus).not.toHaveBeenCalled();
  });
});

@Component({
  template: `
    @if (showInput) {
      <div class="mt-md">
        <input auto-focus (focus)="focus()" delay="1" [enabled]="enabled" />
      </div>
    }
  `,
  imports: [AutoFocusDirective]
})
class TestComponent {
  showInput = false;
  enabled = true;
  focus(): void {}
}
