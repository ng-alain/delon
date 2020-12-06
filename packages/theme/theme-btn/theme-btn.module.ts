import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { LayoutThemeBtnComponent } from './theme-btn.component';

const COMPONENTS = [LayoutThemeBtnComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule, NzDropDownModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class LayoutThemeBtnModule {}
