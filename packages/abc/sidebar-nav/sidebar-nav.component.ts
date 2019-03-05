import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { Menu, MenuService, SettingsService, WINDOW } from '@delon/theme';
import { InputBoolean } from '@delon/util';

import { Nav } from './sidebar-nav.types';

const SHOWCLS = 'sidebar-nav__floating-show';
const FLOATINGCLS = 'sidebar-nav__floating';

@Component({
  selector: 'sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  host: {
    '(click)': '_click()',
    '(document:click)': '_docClick()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarNavComponent implements OnInit, OnDestroy {
  private bodyEl: HTMLBodyElement;
  private unsubscribe$ = new Subject<void>();
  private floatingEl: HTMLDivElement;
  list: Nav[] = [];

  @Input() @InputBoolean() disabledAcl = false;
  @Input() @InputBoolean() autoCloseUnderPad = true;
  @Input() @InputBoolean() recursivePath = true;
  @Input() @InputBoolean() openStrictly = false;
  @Output() readonly select = new EventEmitter<Menu>();

  get collapsed() {
    return this.settings.layout.collapsed;
  }

  private get _d() {
    return this.menuSrv.menus;
  }

  constructor(
    private menuSrv: MenuService,
    private settings: SettingsService,
    private router: Router,
    private render: Renderer2,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    @Inject(DOCUMENT) private doc: any,
    @Inject(WINDOW) private win: Window,
  ) {}

  private floatingAreaClickHandle(e: MouseEvent) {
    e.stopPropagation();
    const linkNode = e.target as HTMLElement;
    if (linkNode.nodeName !== 'A') {
      return false;
    }
    const id = +linkNode.dataset!.id;
    let item: Nav;
    this.menuSrv.visit(this._d, i => {
      if (!item && i.__id === id) {
        item = i;
      }
    });
    this.to(item);
    this.hideAll();
    e.preventDefault();
    return false;
  }

  private clearFloatingContainer() {
    if (!this.floatingEl) return;
    this.floatingEl.removeEventListener('click', this.floatingAreaClickHandle.bind(this));
    // fix ie: https://github.com/ng-alain/delon/issues/52
    if (this.floatingEl.hasOwnProperty('remove')) {
      this.floatingEl.remove();
    } else if (this.floatingEl.parentNode) {
      this.floatingEl.parentNode.removeChild(this.floatingEl);
    }
  }

  private genFloatingContainer() {
    this.clearFloatingContainer();
    this.floatingEl = this.render.createElement('div');
    this.floatingEl.classList.add(FLOATINGCLS + '-container');
    this.floatingEl.addEventListener('click', this.floatingAreaClickHandle.bind(this), false);
    this.bodyEl.appendChild(this.floatingEl);
  }

  private genSubNode(linkNode: HTMLLinkElement, item: Nav): HTMLUListElement {
    const id = `_sidebar-nav-${item.__id}`;
    const node = linkNode.nextElementSibling.cloneNode(true) as HTMLUListElement;
    node.id = id;
    node.classList.add(FLOATINGCLS);
    node.addEventListener(
      'mouseleave',
      () => {
        node.classList.remove(SHOWCLS);
      },
      false,
    );
    this.floatingEl.appendChild(node);
    return node;
  }

  private hideAll() {
    const allNode = this.floatingEl.querySelectorAll('.' + FLOATINGCLS);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < allNode.length; i++) {
      allNode[i].classList.remove(SHOWCLS);
    }
  }

  // calculate the node position values.
  private calPos(linkNode: HTMLLinkElement, node: HTMLUListElement) {
    const rect = linkNode.getBoundingClientRect();
    // bug: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/14721015/
    const scrollTop = Math.max(this.doc.documentElement.scrollTop, this.bodyEl.scrollTop);
    const docHeight = Math.max(this.doc.documentElement.clientHeight, this.bodyEl.clientHeight);
    let offsetHeight = 0;
    if (docHeight < rect.top + node.clientHeight) {
      offsetHeight = rect.top + node.clientHeight - docHeight;
    }
    node.style.top = `${rect.top + scrollTop - offsetHeight}px`;
    node.style.left = `${rect.right + 5}px`;
  }

  showSubMenu(e: MouseEvent, item: Nav) {
    if (this.collapsed !== true) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      e.preventDefault();
      const linkNode = e.target as Element;
      this.genFloatingContainer();
      const subNode = this.genSubNode(linkNode as HTMLLinkElement, item);
      this.hideAll();
      subNode.classList.add(SHOWCLS);
      this.calPos(linkNode as HTMLLinkElement, subNode);
    });
  }

  to(item: Menu) {
    this.select.emit(item);
    if (item.disabled) return;

    if (item.externalLink) {
      if (item.target === '_blank') {
        this.win.open(item.externalLink);
      } else {
        this.win.location.href = item.externalLink;
      }
      return false;
    }
    this.ngZone.run(() => this.router.navigateByUrl(item.link));
  }

  toggleOpen(item: Nav) {
    if (!this.openStrictly) {
      this.menuSrv.visit(this._d, (i, p) => {
        if (i !== item) i._open = false;
      });
      let pItem = item.__parent;
      while (pItem) {
        pItem._open = true;
        pItem = pItem.__parent;
      }
    }
    item._open = !item._open;
    this.cdr.markForCheck();
  }

  _click() {
    if (this.isPad && this.collapsed) {
      this.openAside(false);
      this.hideAll();
    }
  }

  _docClick() {
    this.hideAll();
  }

  ngOnInit() {
    const { doc, router, unsubscribe$, menuSrv, cdr } = this;
    this.bodyEl = doc.querySelector('body');
    menuSrv.openedByUrl(router.url, this.recursivePath);
    this.ngZone.runOutsideAngular(() => this.genFloatingContainer());
    menuSrv.change.pipe(takeUntil(unsubscribe$)).subscribe(data => {
      menuSrv.visit(data, (i: Nav) => {
        if (!i._aclResult) {
          if (this.disabledAcl) {
            i.disabled = true;
          } else {
            i._hidden = true;
          }
        }
        if (this.openStrictly) {
          i._open = i.open != null ? i.open : false;
        }
      });
      this.list = menuSrv.menus;
      cdr.detectChanges();
    });
    router.events
      .pipe(
        takeUntil(unsubscribe$),
        filter(e => e instanceof NavigationEnd),
      )
      .subscribe((e: NavigationEnd) => {
        this.menuSrv.openedByUrl(e.urlAfterRedirects, this.recursivePath);
        this.underPad();
        this.cdr.detectChanges();
      });
    this.underPad();
  }

  ngOnDestroy(): void {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
    this.clearFloatingContainer();
  }

  // #region Under pad

  private get isPad(): boolean {
    return window.innerWidth < 768;
  }

  private underPad() {
    if (this.autoCloseUnderPad && this.isPad && !this.collapsed) {
      setTimeout(() => this.openAside(true));
    }
  }

  private openAside(status: boolean) {
    this.settings.setLayout('collapsed', status);
  }

  // #endregion
}
