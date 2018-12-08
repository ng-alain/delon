import { DOCUMENT, LocationStrategy } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Menu, MenuService, SettingsService } from '@delon/theme';
import { InputBoolean } from '@delon/util';

import { Nav } from './sidebar-nav.types';

const SHOWCLS = 'sidebar-nav__floating-show';
const FLOATINGCLS = 'sidebar-nav__floating';

@Component({
  selector: 'sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarNavComponent implements OnInit, OnDestroy {
  private bodyEl: HTMLBodyElement;
  private change$: Subscription;
  /** @inner */
  floatingEl: HTMLDivElement;
  list: Nav[] = [];

  @Input() @InputBoolean() autoCloseUnderPad = true;
  @Output() readonly select = new EventEmitter<Menu>();

  constructor(
    private menuSrv: MenuService,
    private settings: SettingsService,
    private router: Router,
    private locationStrategy: LocationStrategy,
    private render: Renderer2,
    private cdr: ChangeDetectorRef,
    // tslint:disable-next-line:no-any
    @Inject(DOCUMENT) private doc: any,
  ) { }

  get collapsed() {
    return this.settings.layout.collapsed;
  }

  ngOnInit() {
    this.bodyEl = this.doc.querySelector('body');
    this.menuSrv.openedByUrl(this.router.url);
    this.genFloatingContainer();
    this.change$ = this.menuSrv.change.subscribe(res => {
      this.list = res;
      this.cdr.detectChanges();
    });
    this.installUnderPad();
  }

  private floatingAreaClickHandle(e: MouseEvent) {
    e.stopPropagation();
    const linkNode = e.target as HTMLElement;
    if (linkNode.nodeName !== 'A') {
      return false;
    }
    let url: string = linkNode.getAttribute('href');
    if (url && url.startsWith('#')) {
      url = url.slice(1);
    }
    if (linkNode.dataset!.type === 'external') {
      return true;
    }

    // 如果配置了bashHref 则去掉baseHref
    const baseHerf = this.locationStrategy.getBaseHref();
    if (baseHerf) {
      url = url.slice(baseHerf.length);
    }
    this.router.navigateByUrl(url);
    this.onSelect(this.menuSrv.getPathByUrl(url).pop());
    this.hideAll();
    e.preventDefault();
    return false;
  }

  private clearFloatingContainer() {
    if (!this.floatingEl) return;
    this.floatingEl.removeEventListener(
      'click',
      this.floatingAreaClickHandle.bind(this),
    );
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
    this.floatingEl.addEventListener(
      'click',
      this.floatingAreaClickHandle.bind(this),
      false,
    );
    this.bodyEl.appendChild(this.floatingEl);
  }

  private genSubNode(linkNode: HTMLLinkElement, item: Nav): HTMLUListElement {
    const id = `_sidebar-nav-${item.__id}`;
    const node = linkNode.nextElementSibling.cloneNode(
      true,
    ) as HTMLUListElement;
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
    const scrollTop = Math.max(
      this.doc.documentElement.scrollTop,
      this.bodyEl.scrollTop,
    );
    const docHeight = Math.max(
      this.doc.documentElement.clientHeight,
      this.bodyEl.clientHeight,
    );
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
    e.preventDefault();
    const linkNode = e.target as Element;
    this.genFloatingContainer();
    const subNode = this.genSubNode(linkNode as HTMLLinkElement, item);
    this.hideAll();
    subNode.classList.add(SHOWCLS);
    this.calPos(linkNode as HTMLLinkElement, subNode);
  }

  onSelect(item: Menu) {
    this.select.emit(item);
  }

  toggleOpen(item: Nav) {
    this.menuSrv.visit((i, p) => {
      if (i !== item) i._open = false;
    });
    let pItem = item.__parent;
    while (pItem) {
      pItem._open = true;
      pItem = pItem.__parent;
    }
    item._open = !item._open;
    this.cdr.markForCheck();
  }

  @HostListener('click')
  _click() {
    if (this.isPad && this.collapsed) {
      this.openAside(false);
      this.hideAll();
    }
  }

  @HostListener('document:click')
  _docClick() {
    this.hideAll();
  }

  ngOnDestroy(): void {
    this.change$.unsubscribe();
    if (this.route$) this.route$.unsubscribe();
    this.clearFloatingContainer();
  }

  // #region Under pad

  private get isPad(): boolean {
    return window.innerWidth < 768;
  }

  private route$: Subscription;
  private installUnderPad() {
    if (!this.autoCloseUnderPad) return;
    this.route$ = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(s => this.underPad());

    this.underPad();
  }

  private underPad() {
    if (this.isPad && !this.collapsed) {
      setTimeout(() => this.openAside(true));
    }
  }

  private openAside(status: boolean) {
    this.settings.setLayout('collapsed', status);
  }

  // #endregion
}
