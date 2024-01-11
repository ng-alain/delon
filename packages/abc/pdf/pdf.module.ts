import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { PdfComponent } from './pdf.component';

const COMPONENTS = [PdfComponent];

@NgModule({
  imports: [CommonModule, NzSkeletonModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class PdfModule {}
