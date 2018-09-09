import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { G2TagCloudComponent } from './tag-cloud.component';

const COMPONENTS = [G2TagCloudComponent];

@NgModule({
  imports: [CommonModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2TagCloudModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: G2TagCloudModule, providers: [] };
  }
}
