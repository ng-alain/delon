import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { ALAIN_I18N_TOKEN } from '@delon/theme';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { I18NService, MetaService } from '@core';

@Component({
  selector: 'main-menu, [main-menu]',
  templateUrl: './main-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  count = 0;

  @Output() readonly to = new EventEmitter<string>();

  get menus(): NzSafeAny[] {
    return this.meta.menus!;
  }

  constructor(
    private meta: MetaService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.i18n.change.pipe(takeUntil(this.destroy$)).subscribe(() => this.cdr.markForCheck());
    this.count = this.meta.menus?.reduce((p: number, c: NzSafeAny) => (p += c.list.length), 0);
  }

  ngOnDestroy(): void {
    const { destroy$ } = this;
    destroy$.next();
    destroy$.complete();
  }
}
