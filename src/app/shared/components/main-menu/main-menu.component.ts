import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  inject
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ALAIN_I18N_TOKEN } from '@delon/theme';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { I18NService, MetaService } from '@core';

@Component({
  selector: 'main-menu, [main-menu]',
  templateUrl: './main-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent implements OnInit {
  private destroy$ = inject(DestroyRef);
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
    this.i18n.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe(() => this.cdr.markForCheck());
    this.count = this.meta.menus?.reduce((p: number, c: NzSafeAny) => (p += c.list.length), 0);
  }
}
