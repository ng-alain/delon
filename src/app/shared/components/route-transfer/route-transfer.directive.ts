import { Directive, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';

import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { copy } from '@delon/util/browser';
import { NzMessageService } from 'ng-zorro-antd/message';

@Directive({
  selector: '[routeTransfer]',
  standalone: true
})
export class RouteTransferDirective {
  private readonly router = inject(Router);
  private readonly msg = inject(NzMessageService);
  private readonly i18n = inject(ALAIN_I18N_TOKEN);

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
      this.clickToc(targetEl.dataset.toc || url!.substring(1).replace(/ /g, '-'));
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
