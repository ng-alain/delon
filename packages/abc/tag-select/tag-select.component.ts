import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { DelonLocaleService, LocaleData } from '@delon/theme';
import { InputBoolean } from '@delon/util';

@Component({
  selector: 'tag-select',
  templateUrl: './tag-select.component.html',
  host: {
    '[class.tag-select]': 'true',
    '[class.tag-select__has-expand]': 'expandable',
    '[class.tag-select__expanded]': 'expand',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagSelectComponent implements OnInit, OnDestroy {
  private i18n$: Subscription;
  locale: LocaleData = {};
  expand = false;

  /** 是否启用 `展开与收进` */
  @Input() @InputBoolean() expandable = true;
  @Output() readonly change = new EventEmitter<boolean>();

  constructor(private i18n: DelonLocaleService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.i18n$ = this.i18n.change.subscribe(() => {
      this.locale = this.i18n.getData('tagSelect');
      this.cdr.detectChanges();
    });
  }

  trigger() {
    this.expand = !this.expand;
    this.change.emit(this.expand);
  }

  ngOnDestroy() {
    this.i18n$.unsubscribe();
  }
}
