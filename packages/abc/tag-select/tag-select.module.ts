import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonLocaleModule } from '@delon/theme';
import { DelonUtilModule } from '@delon/util';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TagSelectComponent } from './tag-select.component';

const COMPONENTS = [TagSelectComponent];

@NgModule({
  imports: [CommonModule, NzIconModule, DelonLocaleModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class TagSelectModule {}
