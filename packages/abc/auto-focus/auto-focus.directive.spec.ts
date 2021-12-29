import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFocusDirective } from './auto-focus.directive';
import { AutoFocusModule } from './auto-focus.module';

const TIME = 50;

describe('abc: auto-focus', () => {
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, AutoFocusModule],
      declarations: [TestComponent]
    });

    fixture = TestBed.createComponent(TestComponent);
    context = fixture.componentInstance;
    spyOn(context, 'focus');
  });

  it('should be working', done => {
    context.showInput = true;
    fixture.detectChanges();
    setTimeout(() => {
      expect(context.focus).toHaveBeenCalled();
      done();
    }, TIME);
  });

  it('should be not when enabled is false', done => {
    context.enabled = false;
    context.showInput = true;
    fixture.detectChanges();
    setTimeout(() => {
      expect(context.focus).not.toHaveBeenCalled();
      done();
    }, TIME);
  });
});

@Component({
  template: `
    <div *ngIf="showInput" class="mt-md">
      <input auto-focus (focus)="focus()" delay="1" [enabled]="enabled" />
    </div>
  `
})
class TestComponent {
  @ViewChild(AutoFocusDirective) comp!: AutoFocusDirective;
  showInput = false;
  enabled = true;
  focus(): void {}
}
