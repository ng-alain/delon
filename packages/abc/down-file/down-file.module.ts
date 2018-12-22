import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlainThemeModule } from '@delon/theme';

import { DownFileDirective } from './down-file.directive';

const DIRECTIVES = [DownFileDirective];

@NgModule({
  imports: [CommonModule, AlainThemeModule],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class DownFileModule {
}
