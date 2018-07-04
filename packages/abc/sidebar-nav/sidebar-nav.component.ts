import {
  Component,
  ElementRef,
  Renderer2,
  Inject,
  OnInit,
  OnDestroy,
  HostListener,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT, LocationStrategy } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MenuService, SettingsService, Menu } from '@delon/theme';

import { Nav } from './interface';

const SHOWCLS = 'nav-floating-show';
const FLOATINGCLS = 'nav-floating';

@Component({
  selector: 'sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class SidebarNavComponent implements OnInit, OnDestroy {
  private rootEl: HTMLDivElement;
  /** @inner */
  floatingEl: HTMLDivElement;
  private bodyEl: HTMLBodyElement;
  list: Nav[] = [];
  private change$: Subscription;

  @Input() autoCloseUnderPad = true;

  @Output() select = new EventEmitter<Menu>();

  constructor(
    private menuSrv: MenuService,
    public settings: SettingsService,
    private router: Router,
    private locationStrategy: LocationStrategy,
    private render: Renderer2,
    private cd: ChangeDetectorRef,
    @Inject(DOCUMENT) private doc: any,
    el: ElementRef,
  ) {
    this.rootEl = el.nativeElement as HTMLDivElement;
  }

  ngOnInit() {
    this.bodyEl = this.doc.querySelector('body');
    this.menuSrv.openedByUrl(this.router.url);
    this.genFloatingContainer();
    this.change$ = <any>this.menuSrv.change.subscribe(res => {
      this.list = res;
      this.cd.detectChanges();
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
    } else {
      // 如果配置了bashHref 则去掉baseHref
      const baseHerf = this.locationStrategy.getBaseHref();
      if (baseHerf) {
        url = url.slice(baseHerf.length);
      }
      this.router.navigateByUrl(url);
    }
    this.onSelect(this.menuSrv.getPathByUrl(url).pop());
    this.hideAll();
    e.preventDefault();
    return false;
  }

  clearFloatingContainer() {
    if (!this.floatingEl) return;
    this.floatingEl.removeEventListener(
      'click',
      this.floatingAreaClickHandle.bind(this),
    );
    // fix ie: https://github.com/cipchk/delon/issues/52
    if (this.floatingEl.hasOwnProperty('remove')) {
      this.floatingEl.remove();
    } else if (this.floatingEl.parentNode) {
      this.floatingEl.parentNode.removeChild(this.floatingEl);
    }
  }

  genFloatingContainer() {
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
    if (this.settings.layout.collapsed !== true) {
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
    this.cd.markForCheck();
  }

  @HostListener('document:click', ['$event.target'])
  onClick() {
    this.hideAll();
  }

  ngOnDestroy(): void {
    this.change$.unsubscribe();
    if (this.route$) this.route$.unsubscribe();
    this.clearFloatingContainer();
  }

  // region: Under pad

  private route$: Subscription;
  private installUnderPad() {
    if (!this.autoCloseUnderPad) return;
    this.route$ = <any>(
      this.router.events
        .pipe(filter(e => e instanceof NavigationEnd))
        .subscribe(s => this.underPad())
    );
    this.underPad();
  }

  private underPad() {
    if (window.innerWidth < 992 && !this.settings.layout.collapsed) {
      this.settings.setLayout('collapsed', true);
    }
  }

  // endregion
}
