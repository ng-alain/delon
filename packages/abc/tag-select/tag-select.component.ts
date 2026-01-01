import { Directionality } from '@angular/cdk/bidi';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  input,
  output,
  signal
} from '@angular/core';

import { DelonLocaleService } from '@delon/theme';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'tag-select',
  exportAs: 'tagSelect',
  template: `
    <ng-content />
    @if (expandable()) {
      <a class="ant-tag ant-tag-checkable tag-select__trigger" (click)="trigger()">
        {{ expand() ? locale().collapse : locale().expand }}
        <nz-icon nzType="down" [style.transform]="expand() ? 'rotate(-180deg)' : null" />
      </a>
    }
  `,
  host: {
    class: 'tag-select',
    '[class.tag-select-rtl]': `dir() === 'rtl'`,
    '[class.tag-select-rtl__has-expand]': `dir() === 'rtl' && expandable()`,
    '[class.tag-select__has-expand]': 'expandable()',
    '[class.tag-select__expanded]': 'expand()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzIconDirective]
})
export class TagSelectComponent {
  protected locale = inject(DelonLocaleService).valueSignal('tagSelect');
  protected dir = inject(Directionality).valueSignal;
  expand = signal(false);

  /** 是否启用 `展开与收进` */
  readonly expandable = input(true, { transform: booleanAttribute });
  readonly change = output<boolean>();

  trigger(): void {
    this.expand.set(!this.expand());
    this.change.emit(this.expand());
  }
}
