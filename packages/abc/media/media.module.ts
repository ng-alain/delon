import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MediaComponent } from './media.component';

const COMPONENTS = [MediaComponent];

@NgModule({
  imports: [CommonModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class MediaModule {}
