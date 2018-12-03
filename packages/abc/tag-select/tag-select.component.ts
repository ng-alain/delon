import {
  Component,
  HostBinding,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { InputBoolean } from '@delon/util';
import { DelonLocaleService } from '@delon/theme';

@Component({
  selector: 'tag-select',
  templateUrl: './tag-select.component.html',
  host: { '[class.tag-select]': 'true' },
})
export class TagSelectComponent implements OnDestroy {
  private i18n$: Subscription;
  locale: any = {};

  /** 是否启用 `展开与收进` */
  @Input()
  @InputBoolean()
  @HostBinding('class.tag-select__has-expand')
  expandable = true;

  @HostBinding('class.tag-select__expanded')
  expand = false;

  @Output()
  readonly change = new EventEmitter<boolean>();

  constructor(private i18n: DelonLocaleService) {
    this.i18n$ = this.i18n.change.subscribe(
      () => (this.locale = this.i18n.getData('tagSelect')),
    );
  }

  trigger() {
    this.expand = !this.expand;
    this.change.emit(this.expand);
  }

  ngOnDestroy() {
    this.i18n$.unsubscribe();
  }
}
