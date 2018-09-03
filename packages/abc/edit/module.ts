import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { NaEditConfig } from './config';
import { SEContainerComponent } from './edit-container.component';
import { SEItemComponent } from './edit.component';
import { SEErrorComponent } from './edit-error.component';
import { SETitleComponent } from './edit-title.component';

const COMPONENTS = [
  SEContainerComponent,
  SEItemComponent,
  SEErrorComponent,
  SETitleComponent,
];

@NgModule({
  imports: [CommonModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NaEditModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NaEditModule, providers: [NaEditConfig] };
  }
}
