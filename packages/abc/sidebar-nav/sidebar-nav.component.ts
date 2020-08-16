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
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Menu, MenuService, SettingsService, WINDOW } from '@delon/theme';
import { BooleanInput, InputBoolean, InputNumber, NumberInput } from '@delon/util';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { Nav } from './sidebar-nav.types';

const SHOWCLS = 'sidebar-nav__floating-show';
const FLOATINGCLS = 'sidebar-nav__floating';

@Component({
  selector: 'sidebar-nav',
  exportAs: 'sidebarNav',
  templateUrl: './sidebar-nav.component.html',
  host: {
    '(click)': '_click()',
    '(document:click)': '_docClick()',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SidebarNavComponent implements OnInit, OnDestroy {
  static ngAcceptInputType_disabledAcl: BooleanInput;
  static ngAcceptInputType_autoCloseUnderPad: BooleanInput;
  static ngAcceptInputType_recursivePath: BooleanInput;
  static ngAcceptInputType_openStrictly: BooleanInput;
  static ngAcceptInputType_maxLevelIcon: NumberInput;

  private bodyEl: HTMLBodyElement;
  private unsubscribe$ = new Subject<void>();
  private floatingEl: HTMLDivElement;
  list: Nav[] = [];

  @Input() @InputBoolean() disabledAcl = false;
  @Input() @InputBoolean() autoCloseUnderPad = true;
  @Input() @InputBoolean() recursivePath = true;
  @Input() @InputBoolean() openStrictly = false;
  @Input() @InputNumber() maxLevelIcon = 3;
  // tslint:disable-next-line:no-output-native
  @Output() readonly select = new EventEmitter<Menu>();

  get collapsed(): boolean {
    return this.settings.layout.collapsed;
  }

  constructor(
    private menuSrv: MenuService,
    private settings: SettingsService,
    private router: Router,
    private render: Renderer2,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private doc: any,
    @Inject(WINDOW) private win: Window,
  ) {}

  private getLinkNode(node: HTMLElement): HTMLElement | null {
    node = node.nodeName === 'A' ? node : (node.parentNode as HTMLElement);
    return node.nodeName !== 'A' ? null : node;
  }

  private floatingClickHandle(e: MouseEvent): boolean {
    e.stopPropagation();
    const linkNode = this.getLinkNode(e.target as HTMLElement);
    if (linkNode == null) {
      return false;
    }
    const id = +linkNode.dataset!.id!;
    // Should be ingore children title trigger event
    if (isNaN(id)) {
      return false;
    }

    let item: Nav;
    this.menuSrv.visit(this.list, i => {
      if (!item && i._id === id) {
        item = i;
      }
    });
    this.to(item!);
    this.hideAll();
    e.preventDefault();
    return false;
  }

  private clearFloating(): void {
    if (!this.floatingEl) return;
    this.floatingEl.removeEventListener('click', this.floatingClickHandle.bind(this));
    // fix ie: https://github.com/ng-alain/delon/issues/52
    if (this.floatingEl.hasOwnProperty('remove')) {
      this.floatingEl.remove();
    } else if (this.floatingEl.parentNode) {
      this.floatingEl.parentNode.removeChild(this.floatingEl);
    }
  }

  private genFloating(): void {
    this.clearFloating();
    this.floatingEl = this.render.createElement('div');
    this.floatingEl.classList.add(FLOATINGCLS + '-container');
    this.floatingEl.addEventListener('click', this.floatingClickHandle.bind(this), false);
    this.bodyEl.appendChild(this.floatingEl);
  }

  private genSubNode(linkNode: HTMLLinkElement, item: Nav): HTMLUListElement {
    const id = `_sidebar-nav-${item._id}`;
    const childNode = item.badge ? linkNode.nextElementSibling!.nextElementSibling! : linkNode.nextElementSibling!;
    const node = childNode.cloneNode(true) as HTMLUListElement;
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

  private hideAll(): void {
    const allNode = this.floatingEl.querySelectorAll('.' + FLOATINGCLS);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < allNode.length; i++) {
      allNode[i].classList.remove(SHOWCLS);
    }
  }

  // calculate the node position values.
  private calPos(linkNode: HTMLLinkElement, node: HTMLUListElement): void {
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

  showSubMenu(e: MouseEvent, item: Nav): void {
    if (this.collapsed !== true) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      e.preventDefault();
      const linkNode = e.target as Element;
      this.genFloating();
      const subNode = this.genSubNode(linkNode as HTMLLinkElement, item);
      this.hideAll();
      subNode.classList.add(SHOWCLS);
      this.calPos(linkNode as HTMLLinkElement, subNode);
    });
  }

  to(item: Menu): void {
    this.select.emit(item);
    if (item.disabled) return;

    if (item.externalLink) {
      if (item.target === '_blank') {
        this.win.open(item.externalLink);
      } else {
        this.win.location.href = item.externalLink;
      }
      return;
    }
    this.ngZone.run(() => this.router.navigateByUrl(item.link!));
  }

  toggleOpen(item: Nav): void {
    if (!this.openStrictly) {
      this.menuSrv.visit(this.list, (i: Nav) => {
        if (i !== item) i._open = false;
      });
      let pItem = item._parent as Nav;
      while (pItem) {
        pItem._open = true;
        pItem = pItem._parent!;
      }
    }
    item._open = !item._open;
    this.cdr.markForCheck();
  }

  _click(): void {
    if (this.isPad && this.collapsed) {
      this.openAside(false);
      this.hideAll();
    }
  }

  _docClick(): void {
    if (this.collapsed) {
      this.hideAll();
    }
  }

  private openedByUrl(url: string | null): void {
    const { menuSrv, recursivePath, openStrictly } = this;
    let findItem: Nav | null = menuSrv.getHit(this.menuSrv.menus, url!, recursivePath, (i: Nav) => {
      i._selected = false;
      if (!openStrictly) {
        i._open = false;
      }
    });
    if (findItem == null) return;

    do {
      findItem._selected = true;
      if (!openStrictly) {
        findItem._open = true;
      }
      findItem = findItem._parent!;
    } while (findItem);
  }

  ngOnInit(): void {
    const { doc, router, unsubscribe$, menuSrv, settings, cdr } = this;
    this.bodyEl = doc.querySelector('body');
    this.openedByUrl(router.url);
    this.ngZone.runOutsideAngular(() => this.genFloating());
    menuSrv.change.pipe(takeUntil(unsubscribe$)).subscribe(data => {
      menuSrv.visit(data, (i: Nav, _p, depth) => {
        i._text = this.sanitizer.bypassSecurityTrustHtml(i.text!);
        i._needIcon = depth! <= this.maxLevelIcon && !!i.icon;
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
      this.list = menuSrv.menus.filter(w => w._hidden !== true);
      cdr.detectChanges();
    });
    router.events.pipe(takeUntil(unsubscribe$)).subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.openedByUrl(e.urlAfterRedirects);
        this.underPad();
        this.cdr.detectChanges();
      }
    });
    settings.notify
      .pipe(
        takeUntil(unsubscribe$),
        filter(t => t.type === 'layout' && t.name === 'collapsed'),
      )
      .subscribe(() => this.clearFloating());
    this.underPad();
  }

  ngOnDestroy(): void {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
    this.clearFloating();
  }

  // #region Under pad

  private get isPad(): boolean {
    return window.innerWidth < 768;
  }

  private underPad(): void {
    if (this.autoCloseUnderPad && this.isPad && !this.collapsed) {
      setTimeout(() => this.openAside(true));
    }
  }

  private openAside(status: boolean): void {
    this.settings.setLayout('collapsed', status);
  }

  // #endregion
}
