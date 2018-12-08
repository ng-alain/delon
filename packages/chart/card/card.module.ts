import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { G2CardComponent } from './card.component';

const COMPONENTS = [G2CardComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2CardModule { }
