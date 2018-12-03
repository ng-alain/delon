import {
  Component,
  HostBinding,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { InputBoolean } from '@delon/util';
import { DelonLocaleService } from '@delon/theme';

@Component({
  selector: 'tag-select',
  templateUrl: './tag-select.component.html',
  host: { '[class.tag-select]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagSelectComponent implements OnInit, OnDestroy {
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

  constructor(
    private i18n: DelonLocaleService,
    private cdr: ChangeDetectorRef,
  ) {}

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
