import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Renderer2,
  SimpleChange,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlainI18NService, ALAIN_I18N_TOKEN } from '@delon/theme';
import { InputBoolean, InputNumber } from '@delon/util';
import { NzTabSetComponent } from 'ng-zorro-antd/tabs';
import { Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { ReuseTabContextService } from './reuse-tab-context.service';
import {
  ReuseContextCloseEvent,
  ReuseContextI18n,
  ReuseCustomContextMenu,
  ReuseItem,
  ReuseTabCached,
  ReuseTabMatchMode,
  ReuseTabNotify,
  ReuseTitle,
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
  },
  providers: [ReuseTabContextService],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ReuseTabComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('tabset') private tabset: NzTabSetComponent;
  private el: HTMLElement;
  private unsubscribe$ = new Subject<void>();
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
  @Input() @InputBoolean() showCurrent = true;
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
  // tslint:disable-next-line:no-output-native
  @Output() readonly change = new EventEmitter<ReuseItem>();
  // tslint:disable-next-line:no-output-native
  @Output() readonly close = new EventEmitter<ReuseItem | null>();

  // #endregion

  constructor(
    el: ElementRef,
    private srv: ReuseTabService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private render: Renderer2,
    @Optional() @Inject(ALAIN_I18N_TOKEN) private i18nSrv: AlainI18NService,
    @Inject(DOCUMENT) private doc: any,
  ) {
    this.el = el.nativeElement;
  }

  private genTit(title: ReuseTitle): string {
    return title.i18n && this.i18nSrv ? this.i18nSrv.fanyi(title.i18n) : title.text!;
  }

  private genList(notify?: ReuseTabNotify): void {
    const ls = this.srv.items.map((item: ReuseTabCached, index: number) => {
      return {
        url: item.url,
        title: this.genTit(item.title),
        closable: this.allowClose && item.closable && this.srv.count > 0,
        index,
        active: false,
        last: false,
      } as ReuseItem;
    });

    const isClosed = notify?.active === 'close';
    let goToPos = this.pos;
    if (this.showCurrent) {
      const notifyUrl = notify?.url;
      const beforeClosePos = isClosed ? this.list.findIndex(w => w.url === notifyUrl) : -1;
      const snapshot = this.route.snapshot;
      const url = this.srv.getUrl(snapshot);
      const idx = ls.findIndex(w => w.url === url);
      // jump directly when the current exists in the list
      // or create a new current item and jump
      if (idx !== -1 || (isClosed && notifyUrl === url)) {
        goToPos = isClosed ? (idx >= beforeClosePos ? goToPos - 1 : goToPos) : idx;
      } else {
        const snapshotTrue = this.srv.getTruthRoute(snapshot);
        ls.push({
          url,
          title: this.genTit(this.srv.getTitle(url, snapshotTrue)),
          closable: this.allowClose && this.srv.count > 0 && this.srv.getClosable(url, snapshotTrue),
          index: ls.length,
          active: false,
          last: false,
        } as ReuseItem);
        goToPos = ls.length - 1;
      }
      // fix unabled close last item
      if (ls.length <= 1) ls[0].closable = false;
    } else {
      this.render.setStyle(this.el, 'display', ls.length === 0 ? 'none' : 'block');
    }

    // Muse be go to a valid page when is close operators
    if (isClosed && goToPos !== null) {
      this.to(goToPos);
      return;
    }

    this.list = ls;
    this.cdr.detectChanges();
    this.updatePos$.next();
  }

  private updateTitle(res: ReuseTabNotify): void {
    const url = res?.url;
    const item = this.list.find(w => w.url === url);
    if (!item) return;
    item.title = this.genTit(res?.title!);
    this.cdr.detectChanges();
  }

  // #region UI

  contextMenuChange(res: ReuseContextCloseEvent) {
    let fn: (() => void) | null = null;
    switch (res.type) {
      case 'close':
        this._close(null, res.item.index, res.includeNonCloseable);
        break;
      case 'closeRight':
        fn = () => {
          this.srv.closeRight(res.item.url, res.includeNonCloseable);
          this.close.emit(null);
        };
        break;
      case 'clear':
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
      this.to(res.item.index, fn);
    } else {
      fn();
    }
  }

  to(index: number, cb?: () => void) {
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

  _close(e: Event | null, idx: number, includeNonCloseable: boolean) {
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

  // #endregion

  ngOnInit(): void {
    this.updatePos$.pipe(takeUntil(this.unsubscribe$), debounceTime(100)).subscribe(() => {
      const ls = this.list;
      const last = ls[ls.length - 1];
      let pos = ls.length - 1;
      const url = this.srv.getUrl(this.route.snapshot);
      const item = ls.find(w => w.url === url);
      if (item == null) {
        pos = last.index;
      } else {
        pos = item.index;
      }
      last.last = true;
      ls.forEach((i, idx) => (i.active = pos === idx));
      this.pos = pos;
      this.cdr.detectChanges();
      // TODO: A very bad way to fix the position force, ~_~, https://github.com/ng-alain/ng-alain/issues/1590
      this.tabset?.nzTabsNavComponent?.scrollToLabel(pos);
    });

    this.srv.change.pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
      switch (res?.active) {
        case 'title':
          this.updateTitle(res);
          return;
        case 'override':
          this.updatePos$.next();
          return;
        case 'refresh':
          // 刷新页面
          return;
      }
      this.genList(res!);
    });

    this.i18nSrv.change
      .pipe(
        filter(() => this.srv.inited),
        takeUntil(this.unsubscribe$),
        debounceTime(100),
      )
      .subscribe(() => this.genList());

    this.genList();
    this.srv.init();
  }

  ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
    if (changes.max) this.srv.max = this.max;
    if (changes.excludes) this.srv.excludes = this.excludes;
    if (changes.mode) this.srv.mode = this.mode;
    if (changes.keepingScroll) {
      this.srv.keepingScroll = this.keepingScroll;
      this.srv.keepingScrollContainer = this._keepingScrollContainer;
    }

    this.srv.debug = this.debug;

    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
