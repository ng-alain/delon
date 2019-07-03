// tslint:disable: member-ordering
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { copy, LazyService } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd';
import { filter } from 'rxjs/operators';

import { I18NService } from '../../core/i18n/service';
import { MetaService } from '../../core/meta.service';
import { MobileService } from '../../core/mobile.service';
import { MetaSearchGroup, MetaSearchGroupItem } from '../../interfaces';

declare const docsearch: any;
// declare const algoliasearch: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  host: {
    '[attr.id]': '"header"',
  },
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isMobile: boolean;
  useDocsearch = false;
  oldVersionList = [`1.x`];
  currentVersion = 'stable';
  delon = ['theme', 'auth', 'acl', 'form', 'cache', 'chart', 'mock', 'util', 'cli'];

  @ViewChild('searchInput', { static: false })
  searchInput: ElementRef<HTMLInputElement>;

  constructor(
    public i18n: I18NService,
    private router: Router,
    private msg: NzMessageService,
    private mobileSrv: MobileService,
    private meta: MetaService,
    private lazy: LazyService,
  ) {
    router.events.pipe(filter(evt => evt instanceof NavigationEnd)).subscribe(() => (this.menuVisible = false));
    this.mobileSrv.change.subscribe(res => (this.isMobile = res));
  }

  ngOnInit(): void {
    if (!this.useDocsearch) this.changeQ('');
  }

  ngAfterViewInit() {
    this.loadDocsearch();
  }

  toVersion(version: string) {
    if (version !== this.currentVersion) {
      window.location.href = `https://ng-alain.github.io/${version}-doc/`;
    }
  }

  private loadDocsearch() {
    if (!this.useDocsearch) return;
    this.lazy
      .load([
        `https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css`,
        `https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js`,
        `https://cdn.jsdelivr.net/algoliasearch/3/algoliasearchLite.min.js`,
      ])
      .then(() => this.initDocSearch());
  }

  @HostListener('document:keyup.s', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    if (this.useDocsearch && this.searchInput && this.searchInput.nativeElement && event.target === document.body) {
      this.searchInput.nativeElement.focus();
    }
  }

  private initDocSearch() {
    docsearch({
      appId: '2WSH9IUML3',
      apiKey: '6356fe022dba23c6bfc63427b2042bf8',
      indexName: 'ng-alain',
      inputSelector: '#search-box input',
      algoliaOptions: {
        hitsPerPage: 5,
        facetFilters: [`tags:${this.i18n.zone}`],
      },
      transformData(hits) {
        hits.forEach(hit => {
          hit.url = hit.url.replace('ng.ant.design', location.host);
          hit.url = hit.url.replace('https:', location.protocol);
        });
        return hits;
      },
      debug: false,
    });
  }

  langChange(language: 'en' | 'zh') {
    this.router.navigateByUrl(`${this.i18n.getRealUrl(this.router.url)}/${language}`);
  }

  onCopy(value: string) {
    copy(value).then(() => this.msg.success(this.i18n.fanyi('app.demo.copied')));
  }

  menuVisible = false;

  q: string;
  list: MetaSearchGroup[] = [];
  changeQ(value: any) {
    this.list = this.meta.search(value);
  }

  to(item: MetaSearchGroupItem) {
    if (item.url) {
      this.router.navigateByUrl(item.url);
    }
  }

  toViaMobile(url: string) {
    if (url.indexOf('/') === -1) {
      url = `/${url}/getting-started`;
    }
    this.router.navigateByUrl(`${url}/${this.i18n.zone}`).then(() => {
      this.menuVisible = false;
    });
  }
}
