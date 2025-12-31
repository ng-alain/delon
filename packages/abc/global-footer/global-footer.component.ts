import { Directionality } from '@angular/cdk/bidi';
import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  contentChildren,
  inject,
  input
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { WINDOW } from '@delon/util/token';

import { GlobalFooterItemComponent } from './global-footer-item.component';
import { GlobalFooterLink } from './global-footer.types';

@Component({
  selector: 'global-footer',
  exportAs: 'globalFooter',
  template: `
    @if (linkHtmls().length > 0 || items().length > 0) {
      <div class="global-footer__links">
        @for (i of linkHtmls(); track $index) {
          <a class="global-footer__links-item" (click)="to(i)" [innerHTML]="i.title"></a>
        }
        @for (i of items(); track $index) {
          <a class="global-footer__links-item" (click)="to(i)">
            <ng-container *ngTemplateOutlet="i.host()" />
          </a>
        }
      </div>
    }
    <div class="global-footer__copyright">
      <ng-content />
    </div>
  `,
  host: {
    class: 'global-footer',
    '[class.global-footer-rtl]': `dir() === 'rtl'`
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NgTemplateOutlet]
})
export class GlobalFooterComponent {
  private readonly router = inject(Router);
  private readonly win = inject(WINDOW);
  private readonly dom = inject(DomSanitizer);

  protected dir = inject(Directionality).valueSignal;

  readonly links = input<GlobalFooterLink[]>([]);
  readonly items = contentChildren(GlobalFooterItemComponent);

  protected linkHtmls = computed(() => {
    return this.links().map(item => {
      if (typeof item.title === 'string') {
        item.title = this.dom.bypassSecurityTrustHtml(item.title);
      }
      return item;
    });
  });

  protected to(item: GlobalFooterLink | GlobalFooterItemComponent): void {
    const href = typeof item.href === 'string' ? item.href : item.href();
    if (!href) {
      return;
    }
    const blankTarget = typeof item.blankTarget === 'boolean' ? item.blankTarget : item.blankTarget?.();
    if (blankTarget) {
      this.win.open(href);
      return;
    }
    if (/^https?:\/\//.test(href)) {
      this.win.location.href = href;
    } else {
      this.router.navigateByUrl(href);
    }
  }
}
