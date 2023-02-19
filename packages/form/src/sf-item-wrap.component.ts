import { Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';

import { helpMotion } from 'ng-zorro-antd/core/animation';
import { NzFormStatusService } from 'ng-zorro-antd/core/form';

import type { SFSchema } from './schema/index';
import type { SFOptionalHelp, SFUISchemaItem } from './schema/ui';

@Component({
  selector: 'sf-item-wrap',
  templateUrl: './sf-item-wrap.component.html',
  animations: [helpMotion],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
})
export class SFItemWrapComponent implements OnChanges {
  _showTitle: boolean = false;
  @Input() id?: string;
  @Input() schema!: SFSchema;
  @Input() ui!: SFUISchemaItem;
  @Input() showError?: boolean;
  @Input() error?: string;
  @Input()
  set showTitle(val: boolean | string | null | undefined) {
    this._showTitle = !!val;
  }
  @Input() title: string | null = null;

  get t(): string {
    return this.title === null ? this.schema.title! : this.title;
  }

  get oh(): SFOptionalHelp {
    return this.ui.optionalHelp as SFOptionalHelp;
  }

  constructor(private statusSrv: NzFormStatusService) {}

  ngOnChanges(): void {
    const hasError = !!this.error;
    this.statusSrv.formStatusChanges.next({ status: hasError ? 'error' : '', hasFeedback: !!this.ui.feedback });
  }
}
