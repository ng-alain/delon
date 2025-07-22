import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, NgZone, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FooterComponent } from '@shared';
import AOS from 'aos';
import { GithubButtonComponent } from 'ng-github-button';

import { ALAIN_I18N_TOKEN, I18nPipe } from '@delon/theme';
import { ZoneOutside } from '@delon/util/decorator';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

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
  },
  imports: [
    RouterLink,
    I18nPipe,
    NzCarouselModule,
    NzTooltipModule,
    NzButtonModule,
    GithubButtonComponent,
    FooterComponent
  ]
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  readonly i18n = inject(ALAIN_I18N_TOKEN);
  readonly ngZone = inject(NgZone);
  private readonly doc = inject(DOCUMENT);
  private readonly platform = inject(Platform);

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
