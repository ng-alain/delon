import { Directive, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { I18NService } from '@core';

import { NzMessageService } from 'ng-zorro-antd/message';

import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { copy } from '@delon/util';

@Directive({
  selector: '[routeTransfer]'
})
export class RouteTransferDirective {
  constructor(
    private router: Router,
    private msg: NzMessageService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService
  ) {}

  private clickToc(id: string): void {
    const link = `#${id}`;
    const el = document.querySelector(link) as HTMLElement;
    if (el) {
      el.scrollIntoView();
      // window.location.hash = link;
    }
  }

  @HostListener('click', ['$event'])
  _click(e: Event): void {
    const targetEl = e.target as HTMLLinkElement;
    if (!targetEl || !targetEl.dataset || !['a', 'i'].includes(targetEl.tagName.toLowerCase())) {
      return;
    }

    const anchor = targetEl.dataset.anchor;
    if (anchor && anchor.length > 0) {
      copy(`${location.href.split('#')[0]}#${anchor}`).then(() => {
        this.msg.success(this.i18n.fanyi(`app.content.link.copied`));
      });
      return;
    }

    const url = targetEl.dataset.url;

    if (targetEl.dataset.toc || (url && url!.startsWith('#'))) {
      this.clickToc(targetEl.dataset.toc || url!.substr(1).replace(/ /g, '-'));
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    if (url && url.startsWith('/') && !url.startsWith('//')) {
      this.router.navigateByUrl(url);
      return;
    }
  }
}
