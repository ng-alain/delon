import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { NaEditConfig } from './edit.config';
import { NaEditWrapComponent } from './edit-wrap.component';
import { NaEditComponent } from './edit.component';
import { NaEditErrorComponent } from './edit-error.component';
import { NaEditTitleComponent } from './edit-title.component';

const COMPONENTS = [
  NaEditWrapComponent,
  NaEditComponent,
  NaEditErrorComponent,
  NaEditTitleComponent,
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
