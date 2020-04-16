import { Component, Input, ViewEncapsulation } from '@angular/core';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import { SFSchema } from './schema/index';
import { SFOptionalHelp, SFUISchemaItem } from './schema/ui';

@Component({
  selector: 'sf-item-wrap',
  templateUrl: './sf-item-wrap.component.html',
  animations: [helpMotion],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class SFItemWrapComponent {
  @Input() id: string;
  @Input() schema: SFSchema;
  @Input() ui: SFUISchemaItem;
  @Input() showError: boolean;
  @Input() error: string;
  @Input() showTitle: boolean;
  @Input() title: string | null = null;

  get t() {
    return this.title === null ? this.schema.title : this.title;
  }

  get oh() {
    return this.ui.optionalHelp as SFOptionalHelp;
  }
}
