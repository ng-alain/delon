import { Platform } from '@angular/cdk/platform';
import { Component, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { HotkeyDirective } from './hotkey.directive';
import { createTestContext } from '../../testing';

describe('abc: hotkey', () => {
  let context: TestComponent;

  function genModule(isBrowser: boolean): void {
    TestBed.configureTestingModule({
      providers: [{ provide: Platform, useValue: { isBrowser } }]
    });
    ({ context } = createTestContext(TestComponent));
    vi.spyOn(context, 'focus').mockReturnValue(undefined);
  }

  afterEach(() => {
    context.comp.ngOnDestroy();
  });

  it('should be working', async () => {
    genModule(true);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'q' }));
    await vi.waitFor(() => expect(context.focus).toHaveBeenCalled());
  });

  it('when in ssr', async () => {
    genModule(false);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'q' }));
    await vi.waitFor(() => expect(context.focus).not.toHaveBeenCalled());
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
