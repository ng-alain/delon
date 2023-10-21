import { NgModule } from '@angular/core';

import { DelonFormModule } from '@delon/form';
import { AutoCompleteWidgetModule } from '@delon/form/widgets/autocomplete';
import { CascaderWidgetModule } from '@delon/form/widgets/cascader';
import { ColorWidgetModule } from '@delon/form/widgets/color';
import { MentionWidgetModule } from '@delon/form/widgets/mention';
import { RateWidgetModule } from '@delon/form/widgets/rate';
import { SliderWidgetModule } from '@delon/form/widgets/slider';
import { TagWidgetModule } from '@delon/form/widgets/tag';
import { TimeWidgetModule } from '@delon/form/widgets/time';
import { TransferWidgetModule } from '@delon/form/widgets/transfer';
import { TreeSelectWidgetModule } from '@delon/form/widgets/tree-select';
import { UploadWidgetModule } from '@delon/form/widgets/upload';
import { MonacoEditorWidgetModule } from '@delon/form/widgets-third/monaco-editor';
import { TinymceWidgetModule } from '@delon/form/widgets-third/tinymce';

import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    SharedModule,
    DelonFormModule.forRoot(),
    AutoCompleteWidgetModule,
    CascaderWidgetModule,
    TransferWidgetModule,
    MentionWidgetModule,
    RateWidgetModule,
    SliderWidgetModule,
    TreeSelectWidgetModule,
    TagWidgetModule,
    TimeWidgetModule,
    UploadWidgetModule,
    ColorWidgetModule,
    MonacoEditorWidgetModule,
    TinymceWidgetModule
  ]
})
export class JsonSchemaModule {}
