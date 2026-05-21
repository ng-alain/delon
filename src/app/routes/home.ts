import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FooterComponent } from '@shared';
import AOS from 'aos';
import { GithubButtonComponent } from 'ng-github-button';

import { ALAIN_I18N_TOKEN, I18nPipe } from '@delon/theme';
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
  template: `
    <div class="page-wrapper page-banner">
      <div class="page-banner__slogan">
        <h1 data-aos="fade-up" data-aos-once="true">NG-ALAIN</h1>
        <p data-aos="fade-up" data-aos-delay="150" data-aos-once="true">{{ 'app.home.slogan' | i18n }}</p>
        <div class="page-banner__slogan-btn">
          <a routerLink="/docs/getting-started/{{ i18n.zone }}">
            <button nz-button [nzType]="'primary'" [nzSize]="'large'">{{ 'app.home.start' | i18n }}</button>
          </a>
          <a
            href="https://ng-alain.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
            nz-tooltip
            [nzTooltipTitle]="previewTpl"
          >
            <button nz-button [nzSize]="'large'">{{ 'app.home.preview' | i18n }}</button>
            <ng-template #previewTpl>
              国内镜像：<a href="https://ng-alain.gitee.io" target="_blank">ng-alain.gitee.io</a>
            </ng-template>
          </a>
          @if (isBrowser) {
            <github-button type="stargazers" size="large" namespace="ng-alain" repo="ng-alain" />
          }
        </div>
      </div>
      <nz-carousel class="page-banner__img" nzAutoPlay>
        @for (i of allThemes; track $index) {
          <div nz-carousel-content>
            <a [attr.href]="i.url" target="_blank">
              <img
                src="./assets/screenshot/{{ i.screenshot }}"
                [attr.alt]="'app.home.theme.' + i.type | i18n"
                [attr.title]="'app.home.theme.' + i.type | i18n"
              />
            </a>
          </div>
        }
      </nz-carousel>
    </div>
    <div class="page-wrapper page-feature">
      <div class="page-feature__bg"></div>
      <div class="page-feature__bg-bottom"></div>
      <div class="page">
        <h2>{{ 'app.home.feature' | i18n }}</h2>
        <div class="ant-row">
          <div class="ant-col-xs-24 ant-col-md-6">
            <div class="page-feature__item" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="0">
              <nz-icon nzType="heart" />
              <div>
                <h3>Ant Design</h3>
                <p>{{ 'app.home.feature.antd' | i18n }}</p>
              </div>
            </div>
          </div>
          <div class="ant-col-xs-24 ant-col-md-6">
            <div class="page-feature__item" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="50">
              <nz-icon nzType="heart" />
              <div>
                <h3>NG-ZORRO</h3>
                <p>{{ 'app.home.feature.zorro' | i18n }}</p>
              </div>
            </div>
          </div>
          <div class="ant-col-xs-24 ant-col-md-6">
            <div class="page-feature__item" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="100">
              <nz-icon nzType="heart" />
              <div>
                <h3>Delon</h3>
                <p>{{ 'app.home.feature.delon' | i18n }}</p>
              </div>
            </div>
          </div>
          <div class="ant-col-xs-24 ant-col-md-6">
            <div class="page-feature__item" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="150">
              <nz-icon nzType="rocket" />
              <div>
                <h3>{{ 'app.home.feature.out-of-box' | i18n }}</h3>
                <p>{{ 'app.home.feature.out-of-box.desc' | i18n }}</p>
              </div>
            </div>
          </div>
          <div class="ant-col-xs-24 ant-col-md-6">
            <div class="page-feature__item" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="200">
              <nz-icon nzType="skin" />
              <div>
                <h3>{{ 'app.home.feature.less' | i18n }}</h3>
                <p>{{ 'app.home.feature.less.desc' | i18n }}</p>
              </div>
            </div>
          </div>
          <div class="ant-col-xs-24 ant-col-md-6">
            <div class="page-feature__item" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="250">
              <nz-icon nzType="heart" />
              <div>
                <h3>{{ 'app.home.feature.rep' | i18n }}</h3>
                <p>{{ 'app.home.feature.rep.desc' | i18n }}</p>
              </div>
            </div>
          </div>
          <div class="ant-col-xs-24 ant-col-md-6">
            <div class="page-feature__item" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="300">
              <nz-icon nzType="tool" />
              <div>
                <h3>{{ 'app.home.feature.tool' | i18n }}</h3>
                <p>{{ 'app.home.feature.tool.desc' | i18n }}</p>
              </div>
            </div>
          </div>
          <div class="ant-col-xs-24 ant-col-md-6">
            <div class="page-feature__item" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="350">
              <nz-icon nzType="layout" />
              <div>
                <h3>{{ 'app.home.feature.demo' | i18n }}</h3>
                <p>{{ 'app.home.feature.demo.desc' | i18n }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-wrapper page-theme">
      <div class="page">
        <h2>{{ 'app.home.theme' | i18n }}</h2>
        <div class="ant-row">
          @for (t of bussionThemes; track $index) {
            <div class="ant-col-xs-24 ant-col-md-12">
              <a
                class="page-theme__item"
                [attr.href]="'https://e.ng-alain.com/theme/' + t"
                data-aos="zoom-in"
                data-aos-delay="0"
                [attr.data-theme]="t"
              >
                <img
                  src="./assets/screenshot/{{ t.screenshot }}"
                  [attr.alt]="'app.home.theme.' + t.type | i18n"
                  [attr.title]="'app.home.theme.' + t.type | i18n"
                />
                <h3>{{ 'app.home.theme.' + t.type | i18n }}</h3>
                <p>{{ 'app.home.theme.' + t.type + '.desc' | i18n }}</p>
              </a>
            </div>
          }
        </div>
      </div>
    </div>
    <app-footer />
  `,
  host: {
    class: 'home-wrapper'
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
