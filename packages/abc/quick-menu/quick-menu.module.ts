import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaQuickMenuComponent } from './quick-menu.component';

const COMPONENTS = [NaQuickMenuComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NaQuickMenuModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NaQuickMenuModule, providers: [] };
  }
}
