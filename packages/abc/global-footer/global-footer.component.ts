import { Direction, Directionality } from '@angular/cdk/bidi';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Inject,
  Input,
  OnInit,
  Optional,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { WINDOW } from '@delon/util/token';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

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
  standalone: true
})
export class GlobalFooterComponent implements OnInit {
  private dir$ = this.directionality.change?.pipe(takeUntilDestroyed());
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

  @ContentChildren(GlobalFooterItemComponent) readonly items!: QueryList<GlobalFooterItemComponent>;

  constructor(
    private router: Router,
    @Inject(WINDOW) private win: NzSafeAny,
    private dom: DomSanitizer,
    @Optional() private directionality: Directionality,
    private cdr: ChangeDetectorRef
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
    this.dir$.subscribe((direction: Direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
  }
}
