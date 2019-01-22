import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import AOS from 'aos';
import { I18NService } from '../../core/i18n/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  host: {
    '[class.home-wrapper]': 'true',
  },
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(
    @Inject(ALAIN_I18N_TOKEN) public i18n: I18NService,
    private ngZone: NgZone,
    @Inject(DOCUMENT) private doc: Document,
  ) {}

  private get body(): HTMLElement {
    return this.doc.querySelector('body');
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
