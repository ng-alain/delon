import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorCollectModule } from '@delon/abc/error-collect';
import { DelonUtilModule } from '@delon/util';

import { FooterToolbarComponent } from './footer-toolbar.component';

const COMPONENTS = [FooterToolbarComponent];

@NgModule({
  imports: [CommonModule, ErrorCollectModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class FooterToolbarModule { }
