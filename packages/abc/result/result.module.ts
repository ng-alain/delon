import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ResultComponent } from './result.component';

const COMPONENTS = [ResultComponent];

@NgModule({
  imports: [CommonModule, NgZorroAntdModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class ResultModule {}
