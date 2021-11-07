import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  SimpleChange,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';

import { AlainI18NService, ALAIN_I18N_TOKEN } from '@delon/theme';
import { BooleanInput, InputBoolean, InputNumber, NumberInput } from '@delon/util/decorator';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzTabSetComponent } from 'ng-zorro-antd/tabs';

import { ReuseTabContextService } from './reuse-tab-context.service';
import {
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

@Component({
  selector: 'reuse-tab, [reuse-tab]',
  exportAs: 'reuseTab',
  templateUrl: './reuse-tab.component.html',
  host: {
    '[class.reuse-tab]': 'true',
    '[class.reuse-tab__line]': `tabType === 'line'`,
    '[class.reuse-tab__card]': `tabType === 'card'`,
    '[class.reuse-tab__disabled]': `disabled`
  },
  providers: [ReuseTabContextService],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ReuseTabComponent implements OnInit, OnChanges, OnDestroy {
  static ngAcceptInputType_debug: BooleanInput;
  static ngAcceptInputType_max: NumberInput;
  static ngAcceptInputType_tabMaxWidth: NumberInput;
  static ngAcceptInputType_allowClose: BooleanInput;
  static ngAcceptInputType_keepingScroll: BooleanInput;
  static ngAcceptInputType_disabled: BooleanInput;

  @ViewChild('tabset') private tabset: NzTabSetComponent;
  private destroy$ = new Subject<void>();
  private updatePos$ = new Subject<void>();
  private _keepingScrollContainer: Element;
  list: ReuseItem[] = [];
  item: ReuseItem;
  pos = 0;

  // #region fields

  @Input() mode: ReuseTabMatchMode = ReuseTabMatchMode.Menu;
  @Input() i18n: ReuseContextI18n;
  @Input() @InputBoolean() debug = false;
  @Input() @InputNumber() max: number;
  @Input() @InputNumber() tabMaxWidth: number;
  @Input() excludes: RegExp[];
  @Input() @InputBoolean() allowClose = true;
  @Input() @InputBoolean() keepingScroll = false;
  @Input()
  set keepingScrollContainer(value: string | Element) {
    this._keepingScrollContainer = typeof value === 'string' ? this.doc.querySelector(value) : value;
  }
  @Input() customContextMenu: ReuseCustomContextMenu[] = [];
  @Input() tabBarExtraContent: TemplateRef<void>;
  @Input() tabBarGutter: number;
  @Input() tabBarStyle: { [key: string]: string };
  @Input() tabType: 'line' | 'card' = 'line';
  @Input() routeParamMatchMode: ReuseTabRouteParamMatchMode = 'strict';
  @Input() @InputBoolean() disabled = false;
  @Input() titleRender?: TemplateRef<{ $implicit: ReuseItem }>;
  @Output() readonly change = new EventEmitter<ReuseItem>();
  @Output() readonly close = new EventEmitter<ReuseItem | null>();

  // #endregion

  constructor(
    private srv: ReuseTabService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    @Optional() @Inject(ALAIN_I18N_TOKEN) private i18nSrv: AlainI18NService,
    @Inject(DOCUMENT) private doc: NzSafeAny,
    private platform: Platform
  ) {}

  private genTit(title: ReuseTitle): string {
    return title.i18n && this.i18nSrv ? this.i18nSrv.fanyi(title.i18n) : title.text!;
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
      closable: this.allowClose && this.srv.count > 0 && this.srv.getClosable(url, snapshotTrue),
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
          closable: this.allowClose && item.closable && this.srv.count > 0,
          index,
          active: false,
          last: false
        } as ReuseItem)
    );

    const url = this.curUrl;
    let addCurrent = ls.findIndex(w => w.url === url) === -1;
    if (notify && notify.active === 'close' && notify.url === url) {
      addCurrent = false;
      let toPos = 0;
      const curItem = this.list.find(w => w.url === url)!;
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
      ls.splice(this.pos + 1, 0, this.genCurItem());
    }

    ls.forEach((item, index) => (item.index = index));
    if (ls.length === 1) {
      ls[0].closable = false;
    }
    this.list = ls;
    this.cdr.detectChanges();
    this.updatePos$.next();
  }

  private updateTitle(res: ReuseTabNotify): void {
    const item = this.list.find(w => w.url === res!.url);
    if (!item) return;
    item.title = this.genTit(res!.title!);
    this.cdr.detectChanges();
  }

  private refresh(item: ReuseItem): void {
    this.srv.runHook('_onReuseInit', this.pos === item.index ? this.srv.componentRef : item.index, 'refresh');
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
    if (!res.item.active && res.item.index <= this.list.find(w => w.active)!.index) {
      this._to(res.item.index, fn);
    } else {
      fn();
    }
  }

  _to(index: number, cb?: () => void): void {
    index = Math.max(0, Math.min(index, this.list.length - 1));
    const item = this.list[index];
    this.router.navigateByUrl(item.url).then(res => {
      if (!res) return;
      this.item = item;
      this.change.emit(item);
      if (cb) {
        cb();
      }
    });
  }

  _close(e: Event | null, idx: number, includeNonCloseable: boolean): boolean {
    if (e != null) {
      e.preventDefault();
      e.stopPropagation();
    }
    const item = this.list[idx];
    this.srv.close(item.url, includeNonCloseable);
    this.close.emit(item);
    this.cdr.detectChanges();
    return false;
  }

  activate(instance: NzSafeAny): void {
    this.srv.componentRef = { instance };
  }

  // #endregion

  ngOnInit(): void {
    if (!this.platform.isBrowser) {
      return;
    }

    this.updatePos$.pipe(takeUntil(this.destroy$), debounceTime(50)).subscribe(() => {
      const url = this.srv.getUrl(this.route.snapshot);
      const ls = this.list.filter(w => w.url === url || !this.srv.isExclude(w.url));
      if (ls.length === 0) {
        return;
      }

      const last = ls[ls.length - 1];
      const item = ls.find(w => w.url === url);
      last.last = true;
      const pos = item == null ? last.index : item.index;
      ls.forEach((i, idx) => (i.active = pos === idx));
      this.pos = pos;
      // TODO: 目前无法知道为什么 `pos` 无法通过 `nzSelectedIndex` 生效，因此强制使用组件实例的方式来修改，这种方式是安全的
      // https://github.com/ng-alain/ng-alain/issues/1736
      this.tabset.nzSelectedIndex = pos;
      this.list = ls;
      this.cdr.detectChanges();
    });

    this.srv.change.pipe(takeUntil(this.destroy$)).subscribe(res => {
      switch (res?.active) {
        case 'title':
          this.updateTitle(res);
          return;
        case 'override':
          if (res?.list?.length === this.list.length) {
            this.updatePos$.next();
            return;
          }
          break;
      }
      this.genList(res);
    });

    this.i18nSrv.change
      .pipe(
        filter(() => this.srv.inited),
        takeUntil(this.destroy$),
        debounceTime(100)
      )
      .subscribe(() => this.genList({ active: 'title' }));

    this.srv.init();
  }

  ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
    if (!this.platform.isBrowser) {
      return;
    }

    if (changes.max) this.srv.max = this.max;
    if (changes.excludes) this.srv.excludes = this.excludes;
    if (changes.mode) this.srv.mode = this.mode;
    if (changes.routeParamMatchMode) this.srv.routeParamMatchMode = this.routeParamMatchMode;
    if (changes.keepingScroll) {
      this.srv.keepingScroll = this.keepingScroll;
      this.srv.keepingScrollContainer = this._keepingScrollContainer;
    }

    this.srv.debug = this.debug;

    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    const { destroy$: unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
