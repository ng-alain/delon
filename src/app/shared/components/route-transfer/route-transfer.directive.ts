import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[routeTransfer]',
})
export class RouteTransferDirective {
  constructor(private router: Router) {}

  @HostListener('click', ['$event'])
  _click(e: Event) {
    const targetEl = e.target as HTMLLinkElement;
    if (!targetEl || targetEl.tagName.toLowerCase() !== 'a') {
      return;
    }

    if (targetEl.dataset && targetEl.dataset.toc) {
      const tocEl = document.querySelector(
        `#toc-${targetEl.dataset.toc}`,
      ) as HTMLElement;
      if (tocEl) {
        tocEl.click();
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }

    if (
      targetEl.dataset &&
      targetEl.dataset.url &&
      targetEl.dataset.url.startsWith('/') &&
      !targetEl.dataset.url.startsWith('//')
    ) {
      this.router.navigateByUrl(targetEl.dataset.url);
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }
}
