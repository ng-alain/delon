import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, NgZone, OnDestroy, OnInit } from '@angular/core';

import AOS from 'aos';

import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { ZoneOutside } from '@delon/util/decorator';

import { I18NService } from '@core';

interface ThemeItem {
  type: string;
  url: string;
  screenshot: string;
  buession: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  host: {
    '[class.home-wrapper]': 'true'
  }
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  allThemes: ThemeItem[] = [
    { type: 'data', url: 'https://e.ng-alain.com/theme/data', screenshot: 'data.webp', buession: true },
    { type: 'basic', url: 'https://ng-alain.github.io/ng-alain', screenshot: 'basic.png', buession: false },
    { type: 'pro', url: 'https://e.ng-alain.com/theme/pro', screenshot: 'pro.png', buession: true },
    { type: 'ms', url: 'https://e.ng-alain.com/theme/ms', screenshot: 'ms.png', buession: true },
    { type: 'yun', url: 'https://e.ng-alain.com/theme/yun', screenshot: 'yun.png', buession: true }
  ];
  get bussionThemes(): ThemeItem[] {
    return this.allThemes.filter(w => w.buession);
  }
  get isBrowser(): boolean {
    return this.platform.isBrowser;
  }
  constructor(
    @Inject(ALAIN_I18N_TOKEN) public i18n: I18NService,
    public ngZone: NgZone,
    @Inject(DOCUMENT) private doc: Document,
    private platform: Platform
  ) {}

  private get body(): HTMLElement {
    return this.doc.querySelector('body') as HTMLElement;
  }

  @ZoneOutside()
  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    AOS.init();
  }

  ngOnInit(): void {
    this.body.classList.add(`index-page`);
  }

  ngOnDestroy(): void {
    this.body.classList.remove(`index-page`);
  }
}
