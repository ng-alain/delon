import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { DelonLocaleService, LocaleData } from '@delon/theme';
import { BooleanInput, InputBoolean } from '@delon/util';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tag-select',
  exportAs: 'tagSelect',
  templateUrl: './tag-select.component.html',
  host: {
    '[class.tag-select]': 'true',
    '[class.tag-select__has-expand]': 'expandable',
    '[class.tag-select__expanded]': 'expand',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TagSelectComponent implements OnInit, OnDestroy {
  static ngAcceptInputType_expandable: BooleanInput;

  private i18n$: Subscription;
  locale: LocaleData = {};
  expand = false;

  /** 是否启用 `展开与收进` */
  @Input() @InputBoolean() expandable = true;
  @Output() readonly change = new EventEmitter<boolean>();

  constructor(private i18n: DelonLocaleService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.i18n$ = this.i18n.change.subscribe(() => {
      this.locale = this.i18n.getData('tagSelect');
      this.cdr.detectChanges();
    });
  }

  trigger(): void {
    this.expand = !this.expand;
    this.change.emit(this.expand);
  }

  ngOnDestroy(): void {
    this.i18n$.unsubscribe();
  }
}
