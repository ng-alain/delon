import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { DelonACLModule } from '@delon/acl';
import { DelonUtilModule } from '@delon/util';

import { STRowDirective } from './table-row.directive';
import { STComponent } from './table.component';

const COMPONENTS = [STComponent, STRowDirective];

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  imports: [CommonModule, FormsModule, DelonUtilModule, DelonACLModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class STModule {}
