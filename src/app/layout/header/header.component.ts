import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';
import { copy } from '@delon/util';

import { I18NService } from '../../core/i18n/service';
import { MobileService } from '../../core/mobile.service';
import { MetaService } from '../../core/meta.service';
import { MetaSearchGroup, MetaSearchGroupItem } from '../../interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  host: {
    '[attr.id]': '"header"',
  },
})
export class HeaderComponent implements OnInit {
  isMobile: boolean;

  constructor(
    public i18n: I18NService,
    private router: Router,
    private msg: NzMessageService,
    private mobileSrv: MobileService,
    private meta: MetaService
  ) {
    router.events
      .pipe(filter(evt => evt instanceof NavigationEnd))
      .subscribe(() => this.hideMenu());
    this.mobileSrv.change.subscribe(res => (this.isMobile = res));
  }

  ngOnInit(): void {
    // this.initDocSearch();
    this.changeQ('');
  }

  @ViewChild('searchIpt') searchIpt: HTMLInputElement;

  initDocSearch() {
    const lang = this.i18n.isZh ? 'cn' : 'en';
    docsearch({
      apiKey: '6356fe022dba23c6bfc63427b2042bf8',
      indexName: 'ng_alain',
      inputSelector: '#search-box input',
      algoliaOptions: { facetFilters: [`tags:${lang}`] },
      transformData(hits) {
        hits.forEach(hit => {
          hit.url = hit.url.replace('ant.design', location.host);
          hit.url = hit.url.replace('https:', location.protocol);
        });
        return hits;
      },
      debug: false, // Set debug to true if you want to inspect the dropdown
    });
  }

  langChange() {
    let url = this.router.url.split('#')[0].split('?')[0];
    url += `?lang=${this.i18n.isZh ? 'en-US' : 'zh-CN'}`;

    this.router.navigateByUrl(url);
  }

  onCopy(value: string) {
    copy(value).then(() =>
      this.msg.success(this.i18n.fanyi('app.demo.copied')),
    );
  }

  menuVisible = false;

  showMenu() {
    this.menuVisible = true;
  }

  hideMenu() {
    this.menuVisible = false;
  }

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
}
