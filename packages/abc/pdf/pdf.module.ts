import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { PdfComponent } from './pdf.component';

const COMPONENTS = [PdfComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule, NzSkeletonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class PdfModule {}
