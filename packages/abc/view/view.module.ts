import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { SVContainerComponent } from './view-container.component';
import { SVTitleComponent } from './view-title.component';
import { SVComponent } from './view.component';

const COMPONENTS = [SVContainerComponent, SVComponent, SVTitleComponent];

@NgModule({
  imports: [CommonModule, ObserversModule, DelonUtilModule, NzToolTipModule, NzIconModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SVModule {}
