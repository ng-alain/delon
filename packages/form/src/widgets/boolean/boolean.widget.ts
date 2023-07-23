import { Component, ViewEncapsulation } from '@angular/core';

import { SFBooleanWidgetSchema } from './schema';
import { ControlUIWidget } from '../../widget';

@Component({
  selector: 'sf-boolean',
  templateUrl: './boolean.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
})
export class BooleanWidget extends ControlUIWidget<SFBooleanWidgetSchema> {}
