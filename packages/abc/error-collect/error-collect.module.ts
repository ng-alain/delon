import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ErrorCollectComponent } from './error-collect.component';

const COMPONENTS = [ErrorCollectComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule, NzIconModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class ErrorCollectModule {}
