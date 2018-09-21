import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GlobalFooterComponent } from './global-footer.component';
import { GlobalFooterItemComponent } from './global-footer-item.component';

const COMPONENTS = [GlobalFooterComponent, GlobalFooterItemComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class GlobalFooterModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: GlobalFooterModule, providers: [] };
  }
}
