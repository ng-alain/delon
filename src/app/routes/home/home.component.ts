import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, NgZone, OnDestroy, OnInit } from '@angular/core';
import { I18NService } from '@core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  host: {
    '[class.home-wrapper]': 'true',
  },
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  list = [
    { type: 'basic', url: 'https://ng-alain.github.io/ng-alain' },
    { type: 'pro', url: 'https://e.ng-alain.com/theme/pro' },
    { type: 'ms', url: 'https://e.ng-alain.com/theme/ms' },
    { type: 'yun', url: 'https://e.ng-alain.com/theme/yun' },
  ];
  constructor(@Inject(ALAIN_I18N_TOKEN) public i18n: I18NService, private ngZone: NgZone, @Inject(DOCUMENT) private doc: Document) {}

  private get body(): HTMLElement {
    return this.doc.querySelector('body') as HTMLElement;
  }

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => AOS.init());
  }

  ngOnInit() {
    this.body.classList.add(`index-page`);
  }

  ngOnDestroy(): void {
    this.body.classList.remove(`index-page`);
  }
}
