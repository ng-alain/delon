import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { I18NService, MetaService } from '@core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'main-menu, [main-menu]',
  templateUrl: './main-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuComponent implements OnInit {
  count = 0;

  @Output() readonly to = new EventEmitter<string>();

  get menus(): any[] {
    return this.meta.menus!;
  }

  constructor(private meta: MetaService, @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.i18n.change.pipe(untilDestroyed(this)).subscribe(() => this.cdr.markForCheck());
    this.count = this.meta.menus?.reduce((p: number, c: any) => (p += c.list.length), 0);
  }
}
