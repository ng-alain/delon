import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { LoadingDefaultComponent } from './loading.component';

@NgModule({
  imports: [CommonModule, OverlayModule, PortalModule, NzIconModule, NzSpinModule],
  declarations: [LoadingDefaultComponent],
  entryComponents: [LoadingDefaultComponent],
  exports: [LoadingDefaultComponent],
})
export class LoadingModule {}
