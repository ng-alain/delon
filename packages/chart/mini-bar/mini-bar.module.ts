import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { G2MiniBarComponent } from './mini-bar.component';

const COMPONENTS = [G2MiniBarComponent];

@NgModule({
  imports: [CommonModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class G2MiniBarModule {}
