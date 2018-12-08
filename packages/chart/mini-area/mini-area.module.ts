import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';

import { G2MiniAreaComponent } from './mini-area.component';

const COMPONENTS = [G2MiniAreaComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2MiniAreaModule { }
