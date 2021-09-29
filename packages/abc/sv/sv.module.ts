import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { SVContainerComponent } from './sv-container.component';
import { SVTitleComponent } from './sv-title.component';
import { SVValueComponent } from './sv-value.component';
import { SVComponent } from './sv.component';

const COMPONENTS = [SVContainerComponent, SVComponent, SVTitleComponent, SVValueComponent];

@NgModule({
  imports: [CommonModule, ObserversModule, NzToolTipModule, NzIconModule, NzOutletModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class SVModule {}
