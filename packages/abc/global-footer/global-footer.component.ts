import { Direction, Directionality } from '@angular/cdk/bidi';
import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  DestroyRef,
  Input,
  OnInit,
  QueryList,
  ViewEncapsulation,
  inject
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { WINDOW } from '@delon/util/token';

import { GlobalFooterItemComponent } from './global-footer-item.component';
import { GlobalFooterLink } from './global-footer.types';

@Component({
  selector: 'global-footer',
  exportAs: 'globalFooter',
  templateUrl: './global-footer.component.html',
  host: {
    '[class.global-footer]': 'true',
    '[class.global-footer-rtl]': `dir === 'rtl'`
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NgTemplateOutlet]
})
export class GlobalFooterComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly win = inject(WINDOW);
  private readonly dom = inject(DomSanitizer);
  private readonly directionality = inject(Directionality, { optional: true });
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly destroy$ = inject(DestroyRef);

  private dir$ = this.directionality?.change?.pipe(takeUntilDestroyed());
  private _links: GlobalFooterLink[] = [];

  dir?: Direction = 'ltr';

  @Input()
  set links(val: GlobalFooterLink[]) {
    val.forEach(i => (i._title = this.dom.bypassSecurityTrustHtml(i.title)));
    this._links = val;
  }
  get links(): GlobalFooterLink[] {
    return this._links;
  }

  @ContentChildren(GlobalFooterItemComponent) readonly items!: QueryList<GlobalFooterItemComponent>;

  to(item: GlobalFooterLink | GlobalFooterItemComponent): void {
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

  ngOnInit(): void {
    this.dir = this.directionality?.value;
    this.dir$?.pipe(takeUntilDestroyed(this.destroy$)).subscribe((direction: Direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
  }
}
