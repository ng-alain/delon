import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { ResultComponent } from './result.component';

const COMPONENTS = [ResultComponent];

/**
 * @deprecated Will be removed in v20, Please use `nz-result` instead.
 */
@NgModule({
  imports: [CommonModule, NzIconModule, NzOutletModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class ResultModule {}
