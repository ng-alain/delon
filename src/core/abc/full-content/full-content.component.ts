import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange, OnInit, Inject, HostBinding, OnDestroy, AfterViewInit } from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { DOCUMENT } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { FromEventObservable } from 'rxjs/observable/FromEventObservable';
import { debounceTime, filter, distinct } from 'rxjs/operators';
import { FullContentService } from './full-content.service';
import { Router, ActivationStart, ActivationEnd } from '@angular/router';

const cls = `full-content`;
const fsCls = `full-content-fs`;
const hideTitleCls = `full-content-ht`;

@Component({
    selector: 'full-content',
    template: `<ng-content></ng-content>`,
    styleUrls: [ './full-content.less' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullContentComponent implements AfterViewInit, OnInit, OnChanges, OnDestroy {

    private bodyEl: HTMLElement;
    private inited = false;
    private srv$: Subscription;
    private route$: Subscription;

    @HostBinding('attr.id')
    id = `_full-content-${Math.random().toString(36).substring(2)}`;

    @HostBinding('style.height.px')
    _height = 0;

    // region: fields

    @Input()
    get fullscreen() { return this._fullscreen; }
    set fullscreen(value: any) {
        this._fullscreen = coerceBooleanProperty(value);
    }
    private _fullscreen;

    @Input()
    get hideTitle() { return this._hideTitle; }
    set hideTitle(value: any) {
        this._hideTitle = coerceBooleanProperty(value);
    }
    private _hideTitle = true;

    @Input()
    get padding() { return this._padding; }
    set padding(value: any) {
        this._padding = coerceNumberProperty(value);
    }
    private _padding = 24;

    @Output() fullscreenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    // endregion

    constructor(
        private el: ElementRef,
        private router: Router,
        private cd: ChangeDetectorRef,
        private srv: FullContentService,
        @Inject(DOCUMENT) private doc: Document
    ) {}

    ngOnInit(): void {
        this.inited = true;
        this.bodyEl = this.doc.querySelector('body');
        this.bodyEl.classList.add(cls);
        this.update();
        this.installResizeEvent();
        this.srv$ = <any>this.srv.change.subscribe(res => {
            if (res) this.toggle();
        });
        this.route$ = <any>this.router.events.pipe(
            filter((e: any) => e instanceof ActivationStart || e instanceof ActivationEnd)
        ).subscribe(e => {
            if (!!this.doc.querySelector('#' + this.id)) {
                this.bodyEl.classList.add(cls);
                this.updateFsCls();
            } else {
                this.bodyEl.classList.remove(cls, fsCls, hideTitleCls);
            }
        });
    }

    ngAfterViewInit() {
        this.updateHeight(false);
    }

    private updateFsCls() {
        if (this.fullscreen) {
            this.bodyEl.classList.add(fsCls);
            if (this.hideTitle) this.bodyEl.classList.add(hideTitleCls);
        } else {
            this.bodyEl.classList.remove(fsCls);
            if (this.hideTitle) this.bodyEl.classList.remove(hideTitleCls);
        }
    }

    private update() {
        this.updateFsCls();
        this.fullscreenChange.emit(this.fullscreen);
    }

    private updateHeight(needDetectChange = true) {
        this._height = this.bodyEl.getBoundingClientRect().height - (this.el.nativeElement as HTMLElement).getBoundingClientRect().top - this.padding;
        if (needDetectChange) this.cd.detectChanges();
    }

    toggle() {
        this.fullscreen = !this.fullscreen;
        this.update();
        this.updateHeight();
    }

    ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
        if (this.inited) this.update();
    }

    ngOnDestroy(): void {
        this.bodyEl.classList.remove(cls, fsCls, hideTitleCls);
        this.uninstallResizeEvent();
        this.srv$.unsubscribe();
        this.route$.unsubscribe();
    }

    // region: resize

    private scroll$: Subscription = null;
    private installResizeEvent() {
        this.scroll$ = <any>FromEventObservable.create(window, 'resize')
                            .pipe(debounceTime(200))
                            .subscribe(() => this.updateHeight());
        this.updateHeight();
    }

    private uninstallResizeEvent() {
        this.scroll$.unsubscribe();
    }

    // endregion
}
