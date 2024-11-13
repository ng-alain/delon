import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CellModule } from '@delon/abc/cell';
import { DelonACLModule } from '@delon/acl';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { STFilterComponent } from './st-filter.component';
import { STRowDirective } from './st-row.directive';
import { STWidgetHostDirective } from './st-widget-host.directive';
import { STComponent, STTdComponent } from './st.component';

const COMPONENTS = [STComponent, STRowDirective, STWidgetHostDirective];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DelonACLModule,
    CellModule,
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
    NzResizableModule,
    NzInputNumberModule,
    NzDatePickerModule
  ],
  declarations: [...COMPONENTS, STFilterComponent, STTdComponent],
  exports: COMPONENTS
})
export class STModule {}
