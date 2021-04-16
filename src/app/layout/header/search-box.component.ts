import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { I18NService } from '@core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

declare const docsearch: any;

@Component({
  selector: 'header-search',
  templateUrl: './search-box.component.html',
  host: {
    '[attr.id]': '"search-box"',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSearchComponent implements AfterViewInit {
  @ViewChild('searchInput', { static: false })
  searchInput: ElementRef<HTMLInputElement>;

  constructor(@Inject(ALAIN_I18N_TOKEN) private i18n: I18NService, private platform: Platform, private router: Router) {}

  ngAfterViewInit(): void {
    this.initDocSearch();
  }

  private initDocSearch(): void {
    if (!this.platform.isBrowser) {
      return;
    }

    const curHost = location.hostname;
    const isLocal = curHost.includes('localhost');
    docsearch({
      // appId: '2WSH9IUML3',
      apiKey: 'abc8efef8b964f6ab0629f0ded98ab29',
      indexName: 'ng-alain',
      inputSelector: '#search-box input',
      algoliaOptions: {
        hitsPerPage: 5,
        facetFilters: [`tags:${this.i18n.zone}`],
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
      debug: false,
    });
  }

  private getHost(url: string): string {
    const m = url.match(/^https?\:\/\/([^\/:?#]+)(?:[\/:?#]|$)/i);
    return m ? m[1] : '';
  }
}
