import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SHFWrapDirective } from './wrap.directive';
import { SHFItemComponent } from './item.component';
import { AdSHFConfig } from './config';

const COMPONENTS = [SHFWrapDirective, SHFItemComponent];

@NgModule({
  imports: [CommonModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class AdSHFModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: AdSHFModule, providers: [ AdSHFConfig ] };
  }
}
