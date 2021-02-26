import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
import { SFBooleanWidgetSchema } from './schema';

@Component({
  selector: 'sf-boolean',
  templateUrl: './boolean.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class BooleanWidget extends ControlUIWidget<SFBooleanWidgetSchema> {}
