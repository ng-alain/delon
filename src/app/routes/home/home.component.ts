import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../../core/i18n/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  host: {
    '[class.home-wrapper]': 'true',
  },
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(ALAIN_I18N_TOKEN) public i18n: I18NService,
  ) {}

  ngOnInit() {
    document.querySelector('body').classList.add(`index-page`);
  }

  ngOnDestroy(): void {
    document.querySelector('body').classList.remove(`index-page`);
  }
}
