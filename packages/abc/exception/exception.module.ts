import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { NaExceptionComponent } from './exception.component';

const COMPONENTS = [NaExceptionComponent];

@NgModule({
  imports: [CommonModule, RouterModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NaExceptionModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NaExceptionModule, providers: [] };
  }
}
