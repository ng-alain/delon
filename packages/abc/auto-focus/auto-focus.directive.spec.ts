import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AutoFocusDirective } from './auto-focus.directive';
import { AutoFocusModule } from './auto-focus.module';

const TICK = 51;

describe('abc: auto-focus', () => {
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, AutoFocusModule],
      declarations: [TestComponent],
    });

    fixture = TestBed.createComponent(TestComponent);
    context = fixture.componentInstance;
    spyOn(context, 'focus');
  });

  function toggle(status: boolean = true): void {
    context.showInput = status;
    fixture.detectChanges();
    tick(TICK);
    fixture.detectChanges();
  }

  it('should be working', fakeAsync(() => {
    toggle();
    expect(context.focus).toHaveBeenCalled();
  }));

  it('should be not when enabled is false', fakeAsync(() => {
    context.enabled = false;
    toggle();
    expect(context.focus).not.toHaveBeenCalled();
  }));
});

@Component({
  template: `
    <div *ngIf="showInput" class="mt-md">
      <input auto-focus (focus)="focus()" [delay]="delay" [enabled]="enabled" />
    </div>
  `,
})
class TestComponent {
  @ViewChild(AutoFocusDirective) comp: AutoFocusDirective;
  showInput = false;
  delay = 50;
  enabled = true;
  focus(): void {}
}
