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
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AlainI18NService, ALAIN_I18N_TOKEN } from '@delon/theme';
import { InputBoolean, InputNumber } from '@delon/util';
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
  selector: 'reuse-tab',
  templateUrl: './reuse-tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ReuseTabContextService],
  host: {
    '[class.reuse-tab]': 'true',
  },
})
export class ReuseTabComponent implements OnInit, OnChanges, OnDestroy {
  private el: HTMLElement;
  private unsubscribe$ = new Subject<void>();
  private _keepingScrollContainer: Element;
  list: ReuseItem[] = [];
  item: ReuseItem;
  pos = 0;

  // #region fields

  @Input() mode: ReuseTabMatchMode = ReuseTabMatchMode.Menu;
  @Input() i18n: ReuseContextI18n;
  @Input() @InputBoolean() debug = false;
  @Input() @InputNumber() max: number;
  @Input() excludes: RegExp[];
  @Input() @InputBoolean() allowClose = true;
  @Input() @InputBoolean() showCurrent = true;
  @Input() @InputBoolean() keepingScroll = false;
  @Input()
  set keepingScrollContainer(value: string | Element) {
    this._keepingScrollContainer = typeof value === 'string' ? this.doc.querySelector(value) : value;
  }
  @Input() customContextMenu: ReuseCustomContextMenu[] = [];
  @Output() readonly change = new EventEmitter<ReuseItem>();
  @Output() readonly close = new EventEmitter<ReuseItem>();

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
    return title.i18n && this.i18nSrv
      ? this.i18nSrv.fanyi(title.i18n)
      : title.text;
  }

  private genList(notify?: ReuseTabNotify) {
    const isClosed = notify && notify.active === 'close';
    const beforeClosePos = isClosed
      ? this.list.findIndex(w => w.url === notify.url)
      : -1;
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
    if (this.showCurrent) {
      const snapshot = this.route.snapshot;
      const url = this.srv.getUrl(snapshot);
      const idx = ls.findIndex(w => w.url === url);
      // jump directly when the current exists in the list
      // or create a new current item and jump
      if (idx !== -1 || (isClosed && notify.url === url)) {
        this.pos = isClosed ? idx >= beforeClosePos ? this.pos - 1 : this.pos : idx;
      } else {
        const snapshotTrue = this.srv.getTruthRoute(snapshot);
        ls.push({
          url,
          title: this.genTit(this.srv.getTitle(url, snapshotTrue)),
          closable:
            this.allowClose &&
            this.srv.count > 0 &&
            this.srv.getClosable(url, snapshotTrue),
          index: ls.length,
          active: false,
          last: false,
        } as ReuseItem);
        this.pos = ls.length - 1;
      }
      // fix unabled close last item
      if (ls.length <= 1) ls[0].closable = false;
    }

    this.list = ls;

    if (ls.length && isClosed) {
      this.to(null, this.pos);
    }

    this.refStatus(false);
    this.visibility();
    this.cdr.detectChanges();
  }

  private visibility() {
    if (this.showCurrent) return;
    this.render.setStyle(
      this.el,
      'display',
      this.list.length === 0 ? 'none' : 'block',
    );
  }

  // #region UI

  cmChange(res: ReuseContextCloseEvent) {
    switch (res.type) {
      case 'close':
        this._close(null, res.item.index, res.includeNonCloseable);
        break;
      case 'closeRight':
        this.srv.closeRight(res.item.url, res.includeNonCloseable);
        this.close.emit(null);
        break;
      case 'clear':
      case 'closeOther':
        this.srv.clear(res.includeNonCloseable);
        this.close.emit(null);
        break;
    }
  }

  refStatus(dc = true) {
    if (this.list.length) {
      this.list[this.list.length - 1].last = true;
      this.list.forEach((i, idx) => (i.active = this.pos === idx));
    }
    if (dc) this.cdr.detectChanges();
  }

  to(e: Event, index: number) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    index = Math.max(0, Math.min(index, this.list.length - 1));
    const item = this.list[index];
    this.router.navigateByUrl(item.url).then(res => {
      if (!res) return;
      this.pos = index;
      this.item = item;
      this.refStatus();
      this.change.emit(item);
    });
  }

  _close(e: Event, idx: number, includeNonCloseable: boolean) {
    if (e) {
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
    this.router.events.pipe(
      takeUntil(this.unsubscribe$),
      filter(evt => evt instanceof NavigationEnd),
    ).subscribe(() => this.genList());

    this.srv.change.pipe(takeUntil(this.unsubscribe$)).subscribe(res => this.genList(res));

    if (this.i18nSrv) {
      this.i18nSrv.change
        .pipe(takeUntil(this.unsubscribe$), debounceTime(100))
        .subscribe(() => this.genList());
    }
    this.genList();
    this.srv.init();
  }

  ngOnChanges(
    changes: { [P in keyof this]?: SimpleChange } & SimpleChanges,
  ): void {
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
