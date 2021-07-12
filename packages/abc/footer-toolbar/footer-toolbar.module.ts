import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

import { ErrorCollectModule } from '@delon/abc/error-collect';

import { FooterToolbarComponent } from './footer-toolbar.component';

const COMPONENTS = [FooterToolbarComponent];

@NgModule({
  imports: [CommonModule, ErrorCollectModule, NzOutletModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class FooterToolbarModule {}
