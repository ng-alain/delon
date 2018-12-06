import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonLocaleModule } from '@delon/theme';
import { DelonUtilModule } from '@delon/util';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { G2MiniProgressComponent } from './mini-progress.component';

const COMPONENTS = [G2MiniProgressComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule, DelonLocaleModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2MiniProgressModule { }
