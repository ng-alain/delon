import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { SEContainerComponent } from './se-container.component';
import { SETitleComponent } from './se-title.component';
import { SEComponent } from './se.component';

const COMPONENTS = [SEContainerComponent, SEComponent, SETitleComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule, NzToolTipModule, NzIconModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SEModule {}
