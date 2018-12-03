import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DelonUtilModule } from '@delon/util';

import { GlobalFooterItemComponent } from './global-footer-item.component';
import { GlobalFooterComponent } from './global-footer.component';

const COMPONENTS = [GlobalFooterComponent, GlobalFooterItemComponent];

@NgModule({
  imports: [CommonModule, RouterModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class GlobalFooterModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: GlobalFooterModule, providers: [] };
  }
}
