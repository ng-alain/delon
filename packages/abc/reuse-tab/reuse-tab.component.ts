import { Component, Input, Output, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, OnInit, SimpleChanges, SimpleChange, OnDestroy, ElementRef, Renderer2, Inject, Optional } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { filter } from 'rxjs/operators';
import { coerceNumberProperty, coerceBooleanProperty } from '@angular/cdk/coercion';

import { ALAIN_I18N_TOKEN, AlainI18NService } from '@delon/theme';

import { ReuseTabService } from './reuse-tab.service';
import { ReuseTabCached, ReuseTabNotify, ReuseTabMatchMode, ReuseItem, ReuseContextI18n, ReuseContextCloseEvent, ReuseTitle } from './interface';
import { ReuseTabContextService } from './reuse-tab-context.service';

@Component({
    selector: 'reuse-tab',
    templateUrl: './reuse-tab.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
    providers: [ ReuseTabContextService ]
})
export class ReuseTabComponent implements OnInit, OnChanges, OnDestroy {
    private sub$: Subscription;
    private i18n$: Subscription;
    list: ReuseItem[] = [];
    item: ReuseItem;
    pos = 0;

    // region: properties
    /** 设置匹配模式 */
    @Input() mode: ReuseTabMatchMode = ReuseTabMatchMode.Menu;
    /** 选项文本国际化 */
    @Input() i18n: ReuseContextI18n;
    /** 是否Debug模式 */
    @Input()
    get debug() { return this._debug; }
    set debug(value: any) {
        this._debug = coerceBooleanProperty(value);
    }
    private _debug = false;
    /** 允许最多复用多少个页面 */
    @Input()
    get max() { return this._max; }
    set max(value: any) {
        this._max = coerceNumberProperty(value);
    }
    private _max: number;
    /** 排除规则，限 `mode=URL` */
    @Input() excludes: RegExp[];
    /** 允许关闭 */
    @Input()
    get allowClose() { return this._allowClose; }
    set allowClose(value: any) {
        this._allowClose = coerceBooleanProperty(value);
    }
    private _allowClose = true;
    /** 是否固定 */
    @Input()
    get fixed() { return this._fixed; }
    set fixed(value: any) {
        this._fixed = coerceBooleanProperty(value);
    }
    private _fixed = true;
    /** 总是显示当前页 */
    @Input()
    get showCurrent() { return this._showCurrent; }
    set showCurrent(value: any) {
        this._showCurrent = coerceBooleanProperty(value);
    }
    private _showCurrent = true;
    /** 切换时回调 */
    @Output() change: EventEmitter<ReuseItem> = new EventEmitter<ReuseItem>();
    /** 关闭回调 */
    @Output() close: EventEmitter<ReuseItem> = new EventEmitter<ReuseItem>();
    // endregion

    constructor(
        public srv: ReuseTabService,
        private cd: ChangeDetectorRef,
        private router: Router,
        private route: ActivatedRoute,
        private el: ElementRef,
        private render: Renderer2,
        @Inject(DOCUMENT) private doc: any,
        @Optional() @Inject(ALAIN_I18N_TOKEN) private i18nSrv: AlainI18NService
    ) {
        const route$ = this.router.events.pipe(
            filter(evt => evt instanceof NavigationEnd)
        );
        this.sub$ = <any>combineLatest(this.srv.change, route$).subscribe(([ res, e ]) => this.genList(res));
        if (this.i18nSrv) this.i18n$ = this.i18nSrv.change.subscribe(() => this.genList());
    }

    private genTit(title: ReuseTitle): string {
        return title.i18n && this.i18nSrv ? this.i18nSrv.fanyi(title.i18n) : title.text;
    }

    private genList(notify?: ReuseTabNotify) {
        const ls = this.srv.items.map((item: ReuseTabCached, index: number) => {
            return <ReuseItem>{
                url: item.url,
                title: this.genTit(item.title),
                closable: this.allowClose && item.closable && this.srv.count > 0,
                index,
                active: false,
                last: false
            };
        });

        if (notify && notify.active === 'close' && (this.item && this.item.url === notify.url)) {
            this.list = ls;
            this.to(null, this.pos);
            return;
        } else if (this.showCurrent) {
            const snapshot = this.route.snapshot;
            const url = this.srv.getUrl(snapshot);
            const idx = ls.findIndex(w => w.url === url);
            if (idx !== -1) {
                this.pos = idx;
                if (ls.length <= 1) ls[0].closable = false;
            } else {
                const snapshotTrue = this.srv.getTruthRoute(snapshot);
                ls.push(<ReuseItem>{
                    url,
                    title: this.genTit(this.srv.getTitle(url, snapshotTrue)),
                    closable: this.allowClose && this.srv.count > 0 && this.srv.getClosable(url, snapshotTrue),
                    index: ls.length,
                    active: false,
                    last: false
                });
                this.pos = ls.length - 1;
            }
        } else {
            this.pos = ls.length - 1;
        }

        this.list = ls;
        this.refStatus(false);
        this.visibility();
        this.cd.detectChanges();
    }

    private visibility() {
        if (this.showCurrent) return ;
        this.render.setStyle(this.el.nativeElement, 'display', this.list.length === 0 ? 'none' : 'block');
    }

    // region: UI

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
            this.list.forEach((i, idx) => i.active = this.pos === idx);
        }
        if (dc) this.cd.detectChanges();
    }

    to(e: Event, index: number) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        const item = this.list[Math.min(index, this.list.length - 1)];
        this.router.navigateByUrl(item.url).then((res) => {
            if (!res) return;
            this.pos = index;
            this.item = item;
            this.refStatus();
            this.change.emit(item);
        });
    }

    _close(e: Event, idx: number, includeNonCloseable = false) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        const item = this.list[idx];
        if (!this.srv.close(item.url, includeNonCloseable)) {
            // should remove unstored tags if always show current page
            this.list.splice(idx, 1);
            this.to(null, this.list.length - 1);
        }
        this.close.emit(item);
        this.cd.detectChanges();
        return false;
    }

    // endregion

    ngOnInit(): void {
        this.setClass();

        this.genList();
    }

    private setClass() {
        const el = this.el.nativeElement;
        const body = this.doc.querySelector('body');
        const fixedCls = `fixed`;
        const bodyCls = `has-reuse-tab`;
        if (this.fixed) {
            this.render.addClass(el, fixedCls);
            this.render.addClass(body, bodyCls);
        } else {
            this.render.removeClass(el, fixedCls);
            this.render.removeClass(body, bodyCls);
        }
    }

    ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
        if (changes.max) this.srv.max = this.max;
        if (changes.excludes) this.srv.excludes = this.excludes;
        if (changes.mode) this.srv.mode = this.mode;
        this.srv.debug = this.debug;

        this.setClass();
        this.cd.detectChanges();
    }

    ngOnDestroy(): void {
        this.sub$.unsubscribe();
        if (this.i18n$) this.i18n$.unsubscribe();
    }
}
