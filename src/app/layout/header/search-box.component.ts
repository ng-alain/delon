import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { I18NService } from '@core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

declare const docsearch: any;

@Component({
  selector: 'header-search',
  templateUrl: './search-box.component.html',
  host: {
    '[attr.id]': '"search-box"',
  },
})
export class HeaderSearchComponent implements AfterViewInit {
  @ViewChild('searchInput', { static: false })
  searchInput: ElementRef<HTMLInputElement>;

  constructor(private i18n: I18NService, private platform: Platform) {}

  ngAfterViewInit(): void {
    this.initDocSearch();
  }

  private initDocSearch() {
    if (!this.platform.isBrowser) {
      return;
    }

    docsearch({
      // appId: '2WSH9IUML3',
      apiKey: 'abc8efef8b964f6ab0629f0ded98ab29',
      indexName: 'ng-alain',
      inputSelector: '#search-box input',
      algoliaOptions: {
        hitsPerPage: 5,
        facetFilters: [`tags:${this.i18n.zone}`],
      },
      transformData(hits: NzSafeAny[]) {
        hits.forEach(hit => {
          hit.url = hit.url.replace('ng-alain.com', location.host);
          hit.url = hit.url.replace('https:', location.protocol);
        });
        return hits;
      },
      debug: false,
    });
  }
}
