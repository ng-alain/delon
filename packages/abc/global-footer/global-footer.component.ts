import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { WINDOW } from '@delon/theme';
import { Router } from '@angular/router';

import { GlobalFooterLink } from './global-footer.types';
import { GlobalFooterItemComponent } from './global-footer-item.component';

@Component({
  selector: 'global-footer',
  templateUrl: './global-footer.component.html',
  host: { '[class.global-footer]': 'true' },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
