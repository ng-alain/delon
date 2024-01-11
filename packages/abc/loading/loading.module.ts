import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { LoadingDefaultComponent } from './loading.component';

const COMPONENTS = [LoadingDefaultComponent];

@NgModule({
  imports: [CommonModule, OverlayModule, PortalModule, NzIconModule, NzSpinModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class LoadingModule {}
