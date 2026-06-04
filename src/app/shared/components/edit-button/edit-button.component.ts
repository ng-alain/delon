import { Component, computed, inject, input } from '@angular/core';

import { I18nPipe } from '@delon/theme';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

import { MenuService } from '@core';

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
  private readonly menu = inject(MenuService);

  readonly path = input.required<string>();

  protected readonly full = computed(() => {
    const group = this.menu.group();
    return `${group?.github}/edit/master/${this.path()}`;
  });
}
