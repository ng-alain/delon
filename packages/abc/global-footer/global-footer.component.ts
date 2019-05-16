import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Inject,
  Input,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { WINDOW } from '@delon/theme';

import { GlobalFooterItemComponent } from './global-footer-item.component';
import { GlobalFooterLink } from './global-footer.types';

@Component({
  selector: 'global-footer',
  exportAs: 'globalFooter',
  templateUrl: './global-footer.component.html',
  host: { '[class.global-footer]': 'true' },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class GlobalFooterComponent {
  @Input()
  links: GlobalFooterLink[] = [];

  @ContentChildren(GlobalFooterItemComponent)
  items!: QueryList<GlobalFooterItemComponent>;

  constructor(private router: Router, @Inject(WINDOW) private win: Window) {}

  to(item: GlobalFooterLink) {
    if (!item.href) {
      return;
    }
    if (item.blankTarget) {
      this.win.open(item.href);
      return;
    }
    if (/^https?:\/\//.test(item.href)) {
      this.win.location.href = item.href;
    } else {
      this.router.navigateByUrl(item.href);
    }
  }
}
