import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonLocaleModule } from '@delon/theme';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TagSelectComponent } from './tag-select.component';

const COMPONENTS = [TagSelectComponent];

@NgModule({
  imports: [CommonModule, NzIconModule, DelonLocaleModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class TagSelectModule {}
