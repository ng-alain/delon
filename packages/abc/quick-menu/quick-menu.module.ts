import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuickMenuComponent } from './quick-menu.component';

const COMPONENTS = [QuickMenuComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class QuickMenuModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QuickMenuModule, providers: [] };
  }
}
