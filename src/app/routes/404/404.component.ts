import { Component, Inject } from '@angular/core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../../core/i18n/service';

@Component({
    selector: 'not-found',
    templateUrl: './404.component.html',
})
export class NotFoundComponent {
  constructor(
    @Inject(ALAIN_I18N_TOKEN) public i18n: I18NService,
  ) {}
}
