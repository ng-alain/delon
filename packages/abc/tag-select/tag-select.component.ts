import { Direction, Directionality } from '@angular/cdk/bidi';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
  booleanAttribute,
  inject
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { DelonLocaleService, LocaleData } from '@delon/theme';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'tag-select',
  exportAs: 'tagSelect',
  templateUrl: './tag-select.component.html',
  host: {
    '[class.tag-select]': 'true',
    '[class.tag-select-rtl]': `dir === 'rtl'`,
    '[class.tag-select-rtl__has-expand]': `dir === 'rtl' && expandable`,
    '[class.tag-select__has-expand]': 'expandable',
    '[class.tag-select__expanded]': 'expand'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzIconDirective]
})
export class TagSelectComponent implements OnInit {
  private readonly i18n = inject(DelonLocaleService);
  private readonly directionality = inject(Directionality);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly destroy$ = inject(DestroyRef);
  locale: LocaleData = {};
  expand = false;
  dir?: Direction = 'ltr';

  /** 是否启用 `展开与收进` */
  @Input({ transform: booleanAttribute }) expandable = true;
  @Output() readonly change = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.dir = this.directionality.value;
    this.directionality.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.i18n.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getData('tagSelect');
      this.cdr.detectChanges();
    });
  }

  trigger(): void {
    this.expand = !this.expand;
    this.change.emit(this.expand);
  }
}
