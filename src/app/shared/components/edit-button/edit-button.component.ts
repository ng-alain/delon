import { Component, computed, inject, input } from '@angular/core';

import { ALAIN_I18N_TOKEN, I18nPipe } from '@delon/theme';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

import { MetaItem, MetaService } from '@core';

@Component({
  selector: 'edit-button',
  template: `
    <a
      [attr.href]="full()"
      target="_blank"
      class="edit-button"
      nz-tooltip
      [nzTooltipTitle]="'app.content.edit-page' | i18n"
    >
      <nz-icon nzType="edit" />
    </a>
  `,
  imports: [I18nPipe, NzIconModule, NzTooltipModule]
})
export class EditButtonComponent {
  private readonly meta = inject(MetaService);
  private readonly i18n = inject(ALAIN_I18N_TOKEN);

  readonly item = input.required<MetaItem>();

  protected readonly full = computed(() => {
    return `${this.meta.cfg()?.github}/edit/master/${this.i18n.get(this.item().urls)}`;
  });
}
