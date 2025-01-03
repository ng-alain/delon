import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AutoFocusDirective } from './auto-focus.directive';

describe('abc: auto-focus', () => {
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    context = fixture.componentInstance;
    spyOn(context, 'focus');
  });

  it('should be working', fakeAsync(() => {
    context.showInput = true;
    fixture.detectChanges();
    tick(301);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(context.focus).toHaveBeenCalled();
    });
  }));

  it('should be not when enabled is false', fakeAsync(() => {
    context.enabled = false;
    context.showInput = true;
    fixture.detectChanges();
    tick(2);
    fixture.whenStable().then(() => {
      expect(context.focus).not.toHaveBeenCalled();
    });
  }));
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
  @ViewChild(AutoFocusDirective) comp!: AutoFocusDirective;
  showInput = false;
  enabled = true;
  focus(): void {}
}
