import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SEConfig } from './edit.config';
import { SEContainerComponent } from './edit-container.component';
import { SEComponent } from './edit.component';
import { SEErrorComponent } from './edit-error.component';
import { SETitleComponent } from './edit-title.component';

const COMPONENTS = [
  SEContainerComponent,
  SEComponent,
  SEErrorComponent,
  SETitleComponent,
];

@NgModule({
  imports: [CommonModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SEModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SEModule, providers: [SEConfig] };
  }
}
