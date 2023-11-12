import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ALAIN_I18N_TOKEN } from '@delon/theme';

import { I18NService } from '@core';

@Component({
  selector: 'not-found',
  templateUrl: './404.component.html',
  standalone: true,
  imports: [RouterLink]
})
export class NotFoundComponent {
  constructor(@Inject(ALAIN_I18N_TOKEN) public i18n: I18NService) {}
}
