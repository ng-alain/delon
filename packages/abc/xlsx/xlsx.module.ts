import { NgModule } from '@angular/core';

import { XlsxDirective } from './xlsx.directive';

const COMPONENTS = [XlsxDirective];

@NgModule({
  imports: [COMPONENTS],
  exports: COMPONENTS
})
export class XlsxModule {}
