import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';

import { ALAIN_I18N_TOKEN, I18nPipe } from '@delon/theme';
import { LazyService } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

declare const docsearch: NzSafeAny;

@Component({
  selector: 'header-search',
  template: `
    <nz-icon nzType="search" />
    <input nz-input #searchInput [placeholder]="'app.header.search' | i18n" />
  `,
  host: {
    '[attr.id]': '"search-box"'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NzIconModule, NzInputModule, I18nPipe]
})
export class HeaderSearchComponent implements AfterViewInit {
  private readonly i18n = inject(ALAIN_I18N_TOKEN);
  private readonly platform = inject(Platform);
  private readonly router = inject(Router);
  private readonly lazySrv = inject(LazyService);

  @ViewChild('searchInput', { static: false })
  searchInput!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    this.initDocSearch();
  }

  private initDocSearch(): void {
    if (!this.platform.isBrowser) {
      return;
    }

    // Admin panel: https://crawler.algolia.com/admin/
    const start = `https://cdnjs.cloudflare.com/ajax/libs/docsearch.js/2.6.3/docsearch.min`;
    this.lazySrv.load([`${start}.js`, `${start}.css`]).then(() => {
      const curHost = location.hostname;
      const isLocal = curHost.includes('localhost');
      docsearch({
        appId: 'KNI4PDQPLT',
        apiKey: 'f77b841e2a1f87742bef959fe09cc80e',
        indexName: `ng-alain`,
        inputSelector: '#search-box input',
        algoliaOptions: {
          hitsPerPage: 5,
          // queryLanguages: [this.i18n.zone]
          facetFilters: [`lang:${this.i18n.zone}`]
        },
        handleSelected: (_input: NzSafeAny, _event: NzSafeAny, suggestion: { url: string }) => {
          const url = suggestion?.url || '';
          if (isLocal || curHost === this.getHost(url)) {
            const pathName = url.replace(/.*\/\/[^\/]*/, '');
            this.router.navigateByUrl(pathName);
            return;
          }
          window.open(url);
        },
        debug: false
      });
    });
  }

  private getHost(url: string): string {
    const m = url.match(/^https?\:\/\/([^\/:?#]+)(?:[\/:?#]|$)/i);
    return m ? m[1] : '';
  }
}
