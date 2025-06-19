import { Directionality } from '@angular/cdk/bidi';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
  booleanAttribute,
  inject
} from '@angular/core';

import { DelonLocaleService } from '@delon/theme';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'tag-select',
  exportAs: 'tagSelect',
  templateUrl: './tag-select.component.html',
  host: {
    '[class.tag-select]': 'true',
    '[class.tag-select-rtl]': `dir() === 'rtl'`,
    '[class.tag-select-rtl__has-expand]': `dir() === 'rtl' && expandable`,
    '[class.tag-select__has-expand]': 'expandable',
    '[class.tag-select__expanded]': 'expand'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzIconDirective]
})
export class TagSelectComponent {
  locale = inject(DelonLocaleService).valueSignal('tagSelect');
  expand = false;
  dir = inject(Directionality).valueSignal;

  /** 是否启用 `展开与收进` */
  @Input({ transform: booleanAttribute }) expandable = true;
  @Output() readonly change = new EventEmitter<boolean>();

  trigger(): void {
    this.expand = !this.expand;
    this.change.emit(this.expand);
  }
}
