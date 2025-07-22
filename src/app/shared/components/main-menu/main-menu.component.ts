import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EventEmitter,
  OnInit,
  Output,
  inject
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

import { MetaService } from '@core';

@Component({
  selector: 'main-menu, [main-menu]',
  templateUrl: './main-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, NzTooltipModule, NzBadgeModule, NzTagModule, NzMenuModule]
})
export class MainMenuComponent implements OnInit {
  private readonly meta = inject(MetaService);
  private readonly i18n = inject(ALAIN_I18N_TOKEN);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly destroy$ = inject(DestroyRef);
  count = 0;

  @Output() readonly to = new EventEmitter<string>();

  get menus(): NzSafeAny[] {
    return this.meta.menus!;
  }

  ngOnInit(): void {
    this.i18n.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe(() => this.cdr.markForCheck());
    this.count = this.meta.menus?.reduce((p: number, c: NzSafeAny) => (p += c.list.length), 0);
  }
}
