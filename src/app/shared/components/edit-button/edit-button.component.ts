import { Component, Inject, Input } from '@angular/core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../../../core/i18n/service';
import { MetaService } from './../../../core/meta.service';

@Component({
  selector: 'edit-button',
  template: `
    <nz-tooltip nzTitle="{{'app.content.edit-page' | translate}}">
      <a href="{{_full}}" target="_blank" class="edit-button" nz-tooltip>
        <i nz-icon type="edit"></i>
      </a>
    </nz-tooltip>
    `,
})
export class EditButtonComponent {
  _full: string;

  @Input()
  set item(data: any) {
    this._full = `${this.meta.github}/edit/master/${this.i18n.get(data.urls)}`;
  }

  constructor(
    private meta: MetaService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
  ) {}
}
