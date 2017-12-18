import { Component, Input, Output, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, OnInit, SimpleChanges, SimpleChange, OnDestroy, ElementRef, Renderer2, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { zip } from 'rxjs/observable/zip';
import { filter, map } from 'rxjs/operators';
import { coerceNumberProperty } from '@angular/cdk/coercion';
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
    _pos = 1;

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
    @Input() allowClose = true;
    /** 总是显示当前页 */
    @Input() showCurrent = true;
    /** 是否固定 */
    @Input() fixed = true;
    /** 切换时回调 */
    @Output() change: EventEmitter<any> = new EventEmitter<any>();
    /** 关闭回调 */
    @Output() close: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        public srv: ReuseTabService,
        private cd: ChangeDetectorRef,
        private router: Router,
        private el: ElementRef,
        private render: Renderer2,
        @Inject(DOCUMENT) private doc: any
    ) { }

    private gen(url: string) {
        const now = this._list.findIndex(w => w.url === url);
        if (now !== -1) {
            this._pos = now;
            this.cd.markForCheck();
            return ;
        }
        const ls = this.srv.items.map(item => {
            return { url: item.url, title: item.title };
        });
        if (this.showCurrent) {
            const idx = ls.findIndex(w => w.url === url);
            if (idx !== -1) {
                this._pos = idx;
            } else {
                ls.push({
                    url,
                    title: this.srv.getTitle(url)
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

    to(ret: any) {
        const item = this._list[ret.index];
        if (item && !item.url) return ;
        this.router.navigateByUrl(item.url);
        this.change.emit(ret);
    }

    remove(item: any, idx: number) {
        if (this.showCurrent && this._list.length === 1) return false;

        this.srv.remove(item.url);
        this._list.splice(idx, 1);
        // Adjust position
        if (this._pos === idx) {
            this._pos = idx >= this._list.length ? idx - 1 : idx;
        } else if (this._pos > idx) {
            --this._pos;
        } else {
            ++this._pos;
        }
        this.visibility();
        this.cd.markForCheck();
        this.close.emit(item);
    }

    clear() {
        this._list = [ this._list.find(w => w.url === this.router.url) ];
        this.srv.clear();
        this.close.emit(null);
    }

    ngOnInit(): void {
        this.setClass();
        this.sub$ = <any>zip(
            <any>this.router.events.pipe(
                filter(evt => evt instanceof NavigationEnd),
                map(() => this.router.url)
            ),
            this.srv.change
        ).subscribe(([ url, data ]) => {
            console.log('sub event', url, data);
            if (url) this.gen('' + url);
        });
        this.gen(this.router.url);
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
