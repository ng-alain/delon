import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { SVContainerComponent, SVTitleComponent } from './sv-container.component';
import { SVValueComponent } from './sv-value.component';
import { SVComponent } from './sv.component';

const COMPONENTS = [SVContainerComponent, SVComponent, SVTitleComponent, SVValueComponent];

@NgModule({
  imports: [CommonModule, ObserversModule, NzToolTipModule, NzIconModule, NzOutletModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class SVModule {}
