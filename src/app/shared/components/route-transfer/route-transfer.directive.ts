import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[routeTransfer]',
})
export class RouteTransferDirective {
  constructor(private router: Router) {}

  private clickToc(id: string) {
    const link = `#${id}`;
    const el = document.querySelector(link) as HTMLElement;
    if (el) {
      el.scrollIntoView();
      // window.location.hash = link;
    }
  }

  @HostListener('click', ['$event'])
  _click(e: Event) {
    const targetEl = e.target as HTMLLinkElement;
    if (!targetEl || targetEl.tagName.toLowerCase() !== 'a') {
      return;
    }
    if (!targetEl.dataset) return;

    const url = targetEl.dataset.url;

    if (targetEl.dataset.toc || url!.startsWith('#')) {
      this.clickToc(targetEl.dataset.toc || url!.substr(1).replace(/ /g, '-'));
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    if (url && url.startsWith('/') && !url.startsWith('//')) {
      this.router.navigateByUrl(url);
      return false;
    }

    return true;
  }
}
