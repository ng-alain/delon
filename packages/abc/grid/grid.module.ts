import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';

import { SGContainerComponent } from './grid-container.component';
import { SGComponent } from './grid.component';

const COMPONENTS = [SGContainerComponent, SGComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SGModule {}
