import { Component, ViewChild } from '@angular/core';

import { HotkeyDirective } from './hotkey.directive';
import { createTestContext } from '../../testing';

describe('abc: hotkey', () => {
  let context: TestComponent;

  function genModule(): void {
    ({ context } = createTestContext(TestComponent));
    spyOn(context, 'focus');
  }

  afterEach(() => {
    context.comp.ngOnDestroy();
  });

  it('should be working', done => {
    genModule();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'q' }));
    setTimeout(() => {
      expect(context.focus).toHaveBeenCalled();
      done();
    }, 60);
  });
});

@Component({
  template: `<input #el hotkey="q" class="ipt" (focus)="focus()" />`,
  imports: [HotkeyDirective]
})
class TestComponent {
  @ViewChild(HotkeyDirective, { static: true }) readonly comp!: HotkeyDirective;
  hotkey = 'q';

  focus(): void {}
}
