import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { G2SingleBarComponent } from './single-bar.component';

const COMPONENTS = [G2SingleBarComponent];

@NgModule({
  imports: [CommonModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class G2SingleBarModule {}
