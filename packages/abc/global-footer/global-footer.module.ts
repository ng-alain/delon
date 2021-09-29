import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GlobalFooterItemComponent } from './global-footer-item.component';
import { GlobalFooterComponent } from './global-footer.component';

const COMPONENTS = [GlobalFooterComponent, GlobalFooterItemComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class GlobalFooterModule {}
