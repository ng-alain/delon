import { Component, Input, inject } from '@angular/core';

import { ALAIN_I18N_TOKEN, I18nPipe } from '@delon/theme';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { MetaService } from '@core';

@Component({
  selector: 'edit-button',
  template: `
    <a
      href="{{ _full }}"
      target="_blank"
      class="edit-button"
      nz-tooltip
      nzTooltipTitle="{{ 'app.content.edit-page' | i18n }}"
    >
      <i nz-icon nzType="edit"></i>
    </a>
  `,
  imports: [I18nPipe, NzIconModule, NzToolTipModule]
})
export class EditButtonComponent {
  private readonly meta = inject(MetaService);
  private readonly i18n = inject(ALAIN_I18N_TOKEN);

  _full!: string;

  @Input()
  set item(data: { urls: string }) {
    this._full = `${this.meta.github}/edit/master/${this.i18n.get(data.urls)}`;
  }
}
