import { Platform } from '@angular/cdk/platform';
import { Component, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { HotkeyDirective } from './hotkey.directive';
import { HotkeyModule } from './hotkey.module';
import { createTestContext } from '../../testing';

describe('abc: hotkey', () => {
  let context: TestComponent;

  function genModule(isBrowser: boolean): void {
    TestBed.configureTestingModule({
      imports: [HotkeyModule],
      providers: [{ provide: Platform, useValue: { isBrowser } }],
      declarations: [TestComponent]
    });
    ({ context } = createTestContext(TestComponent));
    spyOn(context, 'focus');
  }

  afterEach(() => {
    context.comp.ngOnDestroy();
  });

  it('should be working', done => {
    genModule(true);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'q' }));
    setTimeout(() => {
      expect(context.focus).toHaveBeenCalled();
      done();
    }, 60);
  });

  it('when in ssr', done => {
    genModule(false);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'q' }));
    setTimeout(() => {
      expect(context.focus).not.toHaveBeenCalled();
      done();
    }, 60);
  });
});

@Component({ template: `<input #el hotkey="q" class="ipt" (focus)="focus()" />` })
class TestComponent {
  @ViewChild(HotkeyDirective, { static: true }) readonly comp!: HotkeyDirective;
  hotkey = 'q';

  focus(): void {}
}
