import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMentionModule } from 'ng-zorro-antd/mention';

import { MentionWidget } from './widget';

export * from './widget';
export * from './schema';

@NgModule({
  imports: [FormsModule, DelonFormModule, NzMentionModule, NzInputModule, CommonModule],
  declarations: [MentionWidget]
})
export class MentionWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(MentionWidget.KEY, MentionWidget);
  }
}
