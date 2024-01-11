import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { G2MiniAreaComponent } from './mini-area.component';

const COMPONENTS = [G2MiniAreaComponent];

@NgModule({
  imports: [CommonModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class G2MiniAreaModule {}
