import { Component, Input, Output, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, OnInit, SimpleChanges, SimpleChange, OnDestroy, ElementRef, Renderer2, Inject } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { filter, debounceTime, take, first } from 'rxjs/operators';
import { coerceNumberProperty, coerceBooleanProperty } from '@angular/cdk/coercion';
import { ReuseTabService } from './reuse-tab.service';
import { ReuseTabCached, ReuseTabNotify } from './interface';

@Component({
    selector: 'reuse-tab',
    templateUrl: './reuse-tab.component.html',
    styleUrls: ['./reuse-tab.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReuseTabComponent implements OnInit, OnChanges, OnDestroy {
    private sub$: Subscription;
    _list: { url: string, title: string, [key: string]: any }[] = [];
    _pos = 0;

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
    /** 总是显示当前页 */
    @Input()
    get showCurrent() { return this._showCurrent; }
    set showCurrent(value: any) {
        this._showCurrent = coerceBooleanProperty(value);
    }
    private _showCurrent = true;
    /** 是否固定 */
    @Input()
    get fixed() { return this._fixed; }
    set fixed(value: any) {
        this._fixed = coerceBooleanProperty(value);
    }
    private _fixed = true;
    /** 切换时回调 */
    @Output() change: EventEmitter<any> = new EventEmitter<any>();
    /** 关闭回调 */
    @Output() close: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        public srv: ReuseTabService,
        private cd: ChangeDetectorRef,
        private router: Router,
        private route: ActivatedRoute,
        private el: ElementRef,
        private render: Renderer2,
        @Inject(DOCUMENT) private doc: any
    ) { }

    private gen(url?: string, reload = false) {
        if (!url) url = this.srv.getUrl(this.route.snapshot);
        const nowPos = this._list.findIndex(w => w.url === url);
        if (!reload && nowPos !== -1) {
            this._pos = nowPos;
            this.cd.markForCheck();
            return ;
        }
        const ls = [...this.srv.items].map((item: ReuseTabCached, index: number) => {
            return {
                url: item.url,
                // closabled: this.allowClose && item.closable,
                title: item.customTitle || item.title,
                index
            };
        });
        if (this.showCurrent) {
            const idx = ls.findIndex(w => w.url === this.srv.getUrl(this.route.snapshot));
            if (idx !== -1) {
                this._pos = idx;
            } else {
                ls.push({
                    url,
                    title: this.srv.getTitle(this.srv.getUrl(this.route.snapshot), this.srv.getTruthRoute(this.route.snapshot)),
                    // closabled: this.allowClose && this.srv.getClosable(url, next.snapshot),
                    index: -1
                });
                this._pos = ls.length;
            }
        } else {
            this._pos = ls.length;
        }
        this._list = ls;
        this.visibility();
        this.cd.markForCheck();
    }

    private visibility() {
        if (this.showCurrent) return ;
        this.render.setStyle(this.el.nativeElement, 'display', this._list.length === 0 ? 'none' : 'block');
    }

    to(index: number) {
        const item = this._list[index];
        if (!item || !item.url) return ;
        this.router.navigateByUrl(item.url);
        this.change.emit(item);
    }

    remove(item: any, idx: number) {
        if (this.showCurrent && this._list.length === 1) return false;

        if (!this.srv.remove(item)) return false;

        this._list.splice(idx, 1);
        this.visibility();
        this.cd.markForCheck();
        this.close.emit(item);

        if (this._pos === idx) {
            this.to(this._pos);
        }
    }

    clear() {
        this._list = [ this._list.find(w => w.url === this.router.url) ];
        this.srv.clear();
        this.close.emit(null);
    }

    ngOnInit(): void {
        this.setClass();

        const route$ = this.router.events.pipe(
            filter(evt => evt instanceof NavigationEnd)
        );
        this.sub$ = <any>combineLatest(this.srv.change, route$).pipe(
            debounceTime(300)
        ).subscribe(([res, url]) => {
            this.gen(this.router.url, res && res.active === 'title');
        });

        const title$ = this.srv.change.pipe(
            filter(w => w && w.active === 'title'),
            first()
        ).subscribe(res => {
            this.gen(this.router.url, true);
            title$.unsubscribe();
        });

        this.gen();
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
        this.setClass();
        this.cd.markForCheck();
    }

    ngOnDestroy(): void {
        if (this.sub$) this.sub$.unsubscribe();
    }
}
