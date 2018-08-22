import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NaGlobalFooterComponent } from './global-footer.component';

const COMPONENTS = [NaGlobalFooterComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NaGlobalFooterModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NaGlobalFooterModule, providers: [] };
  }
}
