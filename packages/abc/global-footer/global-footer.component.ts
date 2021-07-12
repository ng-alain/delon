import { Direction, Directionality } from '@angular/cdk/bidi';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
  encapsulation: ViewEncapsulation.None
})
export class GlobalFooterComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private _links: GlobalFooterLink[] = [];

  dir: Direction = 'ltr';

  @Input()
  set links(val: GlobalFooterLink[]) {
    val.forEach(i => (i._title = this.dom.bypassSecurityTrustHtml(i.title)));
    this._links = val;
  }
  get links(): GlobalFooterLink[] {
    return this._links;
  }

  @ContentChildren(GlobalFooterItemComponent) items!: QueryList<GlobalFooterItemComponent>;

  constructor(
    private router: Router,
    @Inject(WINDOW) private win: any,
    private dom: DomSanitizer,
    @Optional() private directionality: Directionality
  ) {}

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
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction: Direction) => {
      this.dir = direction;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
