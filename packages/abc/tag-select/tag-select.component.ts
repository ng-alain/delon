import { Direction, Directionality } from '@angular/cdk/bidi';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Optional,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { DelonLocaleService, LocaleData } from '@delon/theme';
import { BooleanInput, InputBoolean } from '@delon/util/decorator';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'tag-select',
  exportAs: 'tagSelect',
  templateUrl: './tag-select.component.html',
  host: {
    '[class.tag-select]': 'true',
    '[class.tag-select-rtl]': `dir === 'rtl'`,
    '[class.tag-select-rtl__has-expand]': `dir === 'rtl' && expandable`,
    '[class.tag-select__has-expand]': 'expandable',
    '[class.tag-select__expanded]': 'expand',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TagSelectComponent implements OnInit {
  static ngAcceptInputType_expandable: BooleanInput;

  locale: LocaleData = {};
  expand = false;
  dir: Direction = 'ltr';

  /** 是否启用 `展开与收进` */
  @Input() @InputBoolean() expandable = true;
  @Output() readonly change = new EventEmitter<boolean>();

  constructor(private i18n: DelonLocaleService, @Optional() private directionality: Directionality, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(untilDestroyed(this)).subscribe((direction: Direction) => {
      this.dir = direction;
    });
    this.i18n.change.pipe(untilDestroyed(this)).subscribe(() => {
      this.locale = this.i18n.getData('tagSelect');
      this.cdr.detectChanges();
    });
  }

  trigger(): void {
    this.expand = !this.expand;
    this.change.emit(this.expand);
  }
}
