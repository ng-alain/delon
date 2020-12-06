import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { ThemeBtnComponent } from './theme-btn.component';

const COMPONENTS = [ThemeBtnComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule, NzDropDownModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class ThemeBtnModule {}
