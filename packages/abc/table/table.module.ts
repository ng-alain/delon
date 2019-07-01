import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { DelonACLModule } from '@delon/acl';
import { DelonUtilModule } from '@delon/util';

import { STRowDirective } from './table-row.directive';
import { STComponent } from './table.component';

const COMPONENTS = [STComponent, STRowDirective];

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    DelonUtilModule,
    DelonACLModule,
    NzPopconfirmModule,
    NzTableModule,
    NzIconModule,
    NzBadgeModule,
    NzCheckboxModule,
    NzDividerModule,
    NzDropDownModule,
    NzMenuModule,
    NzRadioModule,
    NzTagModule,
    NzInputModule,
    NzToolTipModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class STModule {}
