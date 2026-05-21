import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ALAIN_I18N_TOKEN } from '@delon/theme';

@Component({
  selector: 'not-found',
  template: `
    <div id="page-404">
      <section>
        <h1>404</h1>
        <h4>The page you are looking for does not exist. You may be looking for:</h4>
        <div class="links">
          <a routerLink="/{{ i18n.zone }}">Back to Home</a>
        </div>
      </section>
    </div>
  `,
  imports: [RouterLink]
})
export class NotFoundComponent {
  readonly i18n = inject(ALAIN_I18N_TOKEN);
}
