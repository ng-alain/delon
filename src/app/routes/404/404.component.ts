import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ALAIN_I18N_TOKEN } from '@delon/theme';

@Component({
  selector: 'not-found',
  templateUrl: './404.component.html',
  imports: [RouterLink]
})
export class NotFoundComponent {
  readonly i18n = inject(ALAIN_I18N_TOKEN);
}
