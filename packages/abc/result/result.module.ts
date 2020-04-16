import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ResultComponent } from './result.component';

const COMPONENTS = [ResultComponent];

@NgModule({
  imports: [CommonModule, NzIconModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class ResultModule {}
