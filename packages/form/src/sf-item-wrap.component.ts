import { Component, Input } from '@angular/core';
import { SFSchema } from './schema/index';
import { SFUISchemaItem } from './schema/ui';

@Component({
  selector: 'sf-item-wrap',
  templateUrl: './sf-item-wrap.component.html',
})
export class SFItemWrapComponent {
  @Input() id: string;
  @Input() schema: SFSchema;
  @Input() ui: SFUISchemaItem;
  @Input() showError: boolean;
  @Input() error: string;
  @Input() showTitle: boolean;
  @Input() title: string = null;

  get t() {
    return this.title === null ? this.schema.title : this.title;
  }
}
