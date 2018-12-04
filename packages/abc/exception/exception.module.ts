import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DelonLocaleModule } from '@delon/theme';
import { DelonUtilModule } from '@delon/util';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ExceptionComponent } from './exception.component';

const COMPONENTS = [ExceptionComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DelonUtilModule,
    DelonLocaleModule,
    NgZorroAntdModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class ExceptionModule { }
