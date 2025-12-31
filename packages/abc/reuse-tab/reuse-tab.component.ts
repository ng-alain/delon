import { Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  TemplateRef,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  input,
  numberAttribute,
  output,
  signal,
  viewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, filter, of } from 'rxjs';

import { ALAIN_I18N_TOKEN } from '@delon/theme';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzTabComponent, NzTabsComponent } from 'ng-zorro-antd/tabs';

import { ReuseTabContextComponent } from './reuse-tab-context.component';
import { ReuseTabContextDirective } from './reuse-tab-context.directive';
import { ReuseTabContextService } from './reuse-tab-context.service';
import {
  ReuseCanClose,
  ReuseContextCloseEvent,
  ReuseContextI18n,
  ReuseCustomContextMenu,
  ReuseItem,
  ReuseTabCached,
  ReuseTabMatchMode,
  ReuseTabNotify,
  ReuseTabRouteParamMatchMode,
  ReuseTitle
} from './reuse-tab.interfaces';
import { ReuseTabService } from './reuse-tab.service';
import { REUSE_TAB_STORAGE_KEY, REUSE_TAB_STORAGE_STATE } from './reuse-tab.state';

@Component({
  selector: 'reuse-tab, [reuse-tab]',
  exportAs: 'reuseTab',
  template: `
    <nz-tabs
      [nzSelectedIndex]="pos()"
      [nzAnimated]="false"
      [nzType]="tabType()"
      [nzTabBarExtraContent]="tabBarExtraContent()"
      [nzTabBarGutter]="tabBarGutter()"
      [nzTabBarStyle]="tabBarStyle()"
    >
      @for (i of list(); track i) {
        <nz-tab [nzTitle]="titleTemplate" (nzClick)="_to($index)">
          <ng-template #titleTemplate>
            <div
              [reuse-tab-context-menu]="i"
              [customContextMenu]="customContextMenu()"
              class="reuse-tab__name"
              [attr.title]="i.title"
            >
              <span [class.reuse-tab__name-width]="tabMaxWidth()" [style.max-width.px]="tabMaxWidth()">
                @if (titleRender()) {
                  <ng-template [ngTemplateOutlet]="titleRender()" [ngTemplateOutletContext]="{ $implicit: i }" />
                } @else {
                  {{ i.title }}
                }
              </span>
            </div>
            @if (i.closable) {
              <nz-icon nzType="close" class="reuse-tab__op" (click)="_close($event, $index, false)" />
            }
          </ng-template>
        </nz-tab>
      }
    </nz-tabs>
    <reuse-tab-context [i18n]="i18n()" (change)="contextMenuChange($event)" />
  `,
  host: {
    class: 'reuse-tab',
    '[class.reuse-tab__line]': `tabType() === 'line'`,
    '[class.reuse-tab__card]': `tabType() === 'card'`,
    '[class.reuse-tab__disabled]': `disabled()`,
    '[class.reuse-tab-rtl]': `dir() === 'rtl'`
  },
  providers: [ReuseTabContextService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgTemplateOutlet,
    NzTabsComponent,
    NzTabComponent,
    ReuseTabContextDirective,
    ReuseTabContextComponent,
    NzIconDirective
  ]
})
export class ReuseTabComponent implements OnInit, OnChanges {
  private readonly srv = inject(ReuseTabService, { optional: true })!;
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly i18nSrv = inject(ALAIN_I18N_TOKEN);
  private readonly doc = inject(DOCUMENT);
  private readonly platform = inject(Platform);
  private readonly stateKey = inject(REUSE_TAB_STORAGE_KEY);
  private readonly stateSrv = inject(REUSE_TAB_STORAGE_STATE);

  private readonly tabset = viewChild.required(NzTabsComponent);
  private destroy$ = inject(DestroyRef);
  protected dir = inject(Directionality).valueSignal;
  list = signal<ReuseItem[]>([]);
  item?: ReuseItem;
  protected pos = signal(0);

  // #region fields

  readonly mode = input<ReuseTabMatchMode>(ReuseTabMatchMode.Menu);
  readonly i18n = input<ReuseContextI18n>();
  readonly debug = input(false, { transform: booleanAttribute });
  readonly max = input(undefined, { transform: numberAttribute });
  readonly tabMaxWidth = input(undefined, { transform: numberAttribute });
  readonly excludes = input<RegExp[]>();
  readonly allowClose = input(true, { transform: booleanAttribute });
  readonly keepingScroll = input(false, { transform: booleanAttribute });
  readonly storageState = input(false, { transform: booleanAttribute });
  readonly keepingScrollContainer = input<string | Element>();
  readonly customContextMenu = input<ReuseCustomContextMenu[]>([]);
  readonly tabBarExtraContent = input<TemplateRef<void>>();
  readonly tabBarGutter = input<number>();
  readonly tabBarStyle = input<Record<string, string> | null>(null);
  readonly tabType = input<'line' | 'card'>('line');
  readonly routeParamMatchMode = input<ReuseTabRouteParamMatchMode>('strict');
  readonly disabled = input(false, { transform: booleanAttribute });
  readonly titleRender = input<TemplateRef<{ $implicit: ReuseItem }>>();
  readonly canClose = input<ReuseCanClose>();
  readonly change = output<ReuseItem>();
  readonly close = output<ReuseItem | null>();

  // #endregion

  constructor() {}

  private genTit(title: ReuseTitle): string {
    return title.i18n ? this.i18nSrv.fanyi(title.i18n) : title.text!;
  }

  private get curUrl(): string {
    return this.srv.getUrl(this.route.snapshot);
  }

  private genCurItem(): ReuseItem {
    const url = this.curUrl;
    const snapshotTrue = this.srv.getTruthRoute(this.route.snapshot);
    return {
      url,
      title: this.genTit(this.srv.getTitle(url, snapshotTrue)),
      closable: this.allowClose() && this.srv.count > 0 && this.srv.getClosable(url, snapshotTrue),
      active: false,
      last: false,
      index: 0
    };
  }

  private genList(notify: ReuseTabNotify | null): void {
    const ls = this.srv.items.map(
      (item: ReuseTabCached, index: number) =>
        ({
          url: item.url,
          title: this.genTit(item.title),
          closable: this.allowClose() && this.srv.count > 0 && this.srv.getClosable(item.url, item._snapshot),
          position: item.position,
          index,
          active: false,
          last: false
        }) as ReuseItem
    );

    const url = this.curUrl;
    let addCurrent = ls.findIndex(w => w.url === url) === -1;
    if (notify && notify.active === 'close' && notify.url === url) {
      addCurrent = false;
      let toPos = 0;
      const curItem = this.list().find(w => w.url === url)!;
      if (curItem.index === ls.length) {
        // When closed is last
        toPos = ls.length - 1;
      } else if (curItem.index < ls.length) {
        // Should be actived next tab when closed is middle
        toPos = Math.max(0, curItem.index);
      }
      this.router.navigateByUrl(ls[toPos].url);
    }

    if (addCurrent) {
      const addPos = this.pos() + 1;
      ls.splice(addPos, 0, this.genCurItem());
      // Attach to cache
      this.srv.saveCache(this.route.snapshot, null, addPos);
    }

    ls.forEach((item, index) => (item.index = index));
    if (ls.length === 1) {
      ls[0].closable = false;
    }
    this.list.set(ls);
    this.updatePos();
  }

  private updateTitle(res: ReuseTabNotify): void {
    this.list.update(ls => {
      const item = ls.find(w => w.url === res!.url);
      if (!item) return ls;
      item.title = this.genTit(res!.title!);
      return [...ls];
    });
  }

  private refresh(item: ReuseItem): void {
    this.srv.runHook('_onReuseInit', this.pos() === item.index ? this.srv.componentRef : item.index, 'refresh');
  }

  private saveState(): void {
    if (!this.srv.inited || !this.storageState()) return;

    this.stateSrv?.update(this.stateKey!, this.list());
  }

  // #region UI

  contextMenuChange(res: ReuseContextCloseEvent): void {
    let fn: (() => void) | null = null;
    switch (res.type) {
      case 'refresh':
        this.refresh(res.item);
        break;
      case 'close':
        this._close(null, res.item.index, res.includeNonCloseable);
        break;
      case 'closeRight':
        fn = () => {
          this.srv.closeRight(res.item.url, res.includeNonCloseable);
          this.close.emit(null);
        };
        break;
      case 'closeOther':
        fn = () => {
          this.srv.clear(res.includeNonCloseable);
          this.close.emit(null);
        };
        break;
    }
    if (!fn) {
      return;
    }
    if (!res.item.active && res.item.index <= this.list().find(w => w.active)!.index) {
      this._to(res.item.index, fn);
    } else {
      fn();
    }
  }

  _to(index: number, cb?: () => void): void {
    index = Math.max(0, Math.min(index, this.list().length - 1));
    const item = this.list()[index];
    this.router.navigateByUrl(item.url).then(res => {
      if (!res) return;
      this.item = item;
      this.change.emit(item);
      cb?.();
    });
  }

  _close(e: Event | null, idx: number, includeNonCloseable: boolean): boolean {
    if (e != null) {
      e.preventDefault();
      e.stopPropagation();
    }
    const item = this.list()[idx];
    const canClose = this.canClose();
    (canClose ? canClose({ item, includeNonCloseable }) : of(true)).pipe(filter(v => v)).subscribe(() => {
      this.srv.close(item.url, includeNonCloseable);
      this.close.emit(item);
    });
    return false;
  }

  /**
   * 设置激活路由的实例，在 `src/app/layout/basic/basic.component.ts` 修改：
   *
   * @example
   * <reuse-tab #reuseTab></reuse-tab>
   * <router-outlet (activate)="reuseTab.activate($event)" (attach)="reuseTab.activate($event)"></router-outlet>
   */
  activate(instance: NzSafeAny): void {
    if (this.srv == null) return;
    this.srv.componentRef = { instance };
  }

  private updatePos(): void {
    const url = this.srv.getUrl(this.route.snapshot);
    const ls = this.list().filter(w => w.url === url || !this.srv.isExclude(w.url));
    if (ls.length === 0) {
      return;
    }

    const last = ls[ls.length - 1];
    const item = ls.find(w => w.url === url);
    last.last = true;
    const pos = item == null ? last.index : item.index;
    ls.forEach((i, idx) => (i.active = pos === idx));
    this.pos.set(pos);
    // TODO: 目前无法知道为什么 `pos` 无法通过 `nzSelectedIndex` 生效，因此强制使用组件实例的方式来修改，这种方式是安全的
    // https://github.com/ng-alain/ng-alain/issues/1736
    this.tabset().nzSelectedIndex = pos;
    this.list.set(ls);
    this.saveState();
  }

  // #endregion

  ngOnInit(): void {
    if (!this.platform.isBrowser || this.srv == null) {
      return;
    }

    this.srv.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe(res => {
      switch (res?.active) {
        case 'title':
          this.updateTitle(res);
          return;
        case 'override':
          if (res?.list?.length === this.list.length) {
            this.updatePos();
            return;
          }
          break;
      }
      this.genList(res);
    });

    this.i18nSrv.change
      .pipe(
        filter(() => this.srv.inited),
        takeUntilDestroyed(this.destroy$),
        debounceTime(100)
      )
      .subscribe(() => this.genList({ active: 'title' }));

    this.srv.init();
  }

  ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
    if (!this.platform.isBrowser || this.srv == null) {
      return;
    }

    if (changes.max) this.srv.max = this.max()!;
    if (changes.excludes) this.srv.excludes = this.excludes()!;
    if (changes.mode) this.srv.mode = this.mode();
    if (changes.routeParamMatchMode) this.srv.routeParamMatchMode = this.routeParamMatchMode();
    if (changes.keepingScroll) {
      this.srv.keepingScroll = this.keepingScroll();
      const keepingScrollContainer = this.keepingScrollContainer();
      this.srv.keepingScrollContainer =
        typeof keepingScrollContainer === 'string'
          ? this.doc.querySelector(keepingScrollContainer)
          : keepingScrollContainer;
    }
    if (changes.storageState) this.srv.storageState = this.storageState();
    ``;
    this.srv.debug = this.debug();
  }
}
