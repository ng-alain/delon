import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

import { ThemeBtnComponent } from './theme-btn.component';

const COMPONENTS = [ThemeBtnComponent];

@NgModule({
  imports: [CommonModule, NzDropDownModule, NzTooltipModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class ThemeBtnModule {}
