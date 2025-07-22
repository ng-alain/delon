import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

import { SEContainerComponent, SETitleComponent } from './se-container.component';
import { SEComponent } from './se.component';

const COMPONENTS = [SEContainerComponent, SEComponent, SETitleComponent];

@NgModule({
  imports: [CommonModule, NzTooltipModule, NzIconModule, NzOutletModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class SEModule {}
