import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzButtonModule } from 'ng-zorro-antd/button';

import { DelonLocaleModule } from '@delon/theme';

import { ExceptionComponent } from './exception.component';

const COMPONENTS = [ExceptionComponent];

@NgModule({
  imports: [CommonModule, RouterModule, DelonLocaleModule, NzButtonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ExceptionModule {}
