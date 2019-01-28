import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';

import { FullContentToggleDirective } from './full-content-toggle.directive';
import { FullContentComponent } from './full-content.component';

const COMPONENTS = [FullContentComponent, FullContentToggleDirective];

@NgModule({
  imports: [CommonModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class FullContentModule {}
