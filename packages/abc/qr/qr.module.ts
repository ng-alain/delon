import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QRComponent } from './qr.component';

const COMPONENTS = [QRComponent];

@NgModule({
  imports: [CommonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class QRModule {}
