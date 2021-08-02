import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { XlsxDirective } from './xlsx.directive';

const COMPONENTS = [XlsxDirective];

@NgModule({
  imports: [CommonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class XlsxModule {}
