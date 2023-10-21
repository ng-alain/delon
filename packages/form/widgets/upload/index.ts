import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadModule } from 'ng-zorro-antd/upload';

import { UploadWidget } from './widget';

export * from './widget';
export * from './schema';

@NgModule({
  imports: [FormsModule, CommonModule, DelonFormModule, NzUploadModule, NzIconModule, NzButtonModule],
  declarations: [UploadWidget]
})
export class UploadWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(UploadWidget.KEY, UploadWidget);
  }
}
