import { NgModule } from '@angular/core';

import { HotkeyDirective } from './hotkey.directive';

const DIRECTIVES = [HotkeyDirective];

@NgModule({
  imports: DIRECTIVES,
  exports: DIRECTIVES
})
export class HotkeyModule {}
