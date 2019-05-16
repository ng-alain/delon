import { Component, ViewEncapsulation } from '@angular/core';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-boolean',
  templateUrl: './boolean.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class BooleanWidget extends ControlWidget {}
