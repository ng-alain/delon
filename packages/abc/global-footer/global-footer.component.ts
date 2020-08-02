import { ChangeDetectionStrategy, Component, ContentChildren, Inject, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  private _links: GlobalFooterLink[] = [];

  @Input()
  set links(val: GlobalFooterLink[]) {
    val.forEach(i => (i._title = this.dom.bypassSecurityTrustHtml(i.title)));
    this._links = val;
  }
  get links(): GlobalFooterLink[] {
    return this._links;
  }

  @ContentChildren(GlobalFooterItemComponent) items!: QueryList<GlobalFooterItemComponent>;

  constructor(private router: Router, @Inject(WINDOW) private win: Window, private dom: DomSanitizer) {}

  to(item: GlobalFooterLink): void {
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
