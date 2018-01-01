import { Component, Directive, OnInit, Input, HostBinding, OnDestroy, ElementRef, Renderer2, HostListener, Inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { coerceNumberProperty } from '@angular/cdk/coercion';

const ANTDERRORCLS = '.has-error';
const HEADERMINHEIGHT = 65 + 8 * 2;

/**
 * 错误消息采集器
 * PS：虽然此法并不好看，但对响应式表单&模板表单有很好的效果。
 */
@Component({
    selector: 'error-collect, [error-collect]',
    template: `<i class="anticon anticon-exclamation-circle"></i> {{count}}`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorCollectComponent implements OnInit, OnDestroy {

    $time = null;
    formEl: HTMLFormElement;

    @Input()
    get tick() { return this._tick; }
    set tick(value: any) {
        this._tick = coerceNumberProperty(value);
    }
    private _tick = 500;

    @HostBinding('class.d-none')
    _hiden = true;

    count = 0;

    constructor(private el: ElementRef, private renderer: Renderer2, private cd: ChangeDetectorRef, @Inject(DOCUMENT) private doc: any) {}

    private update() {
        const count = this.formEl.querySelectorAll(ANTDERRORCLS).length;
        if (count === this.count) return;
        this.count = count;
        this._hiden = count === 0;
        this.cd.markForCheck();
    }

    @HostListener('click')
    _click() {
        if (this.count === 0) return false;
        // nz-form-item
        let formItemEl = this.findParent(this.formEl.querySelector(ANTDERRORCLS), '[nz-form-item]');
        if (!formItemEl) formItemEl = this.formEl.querySelector(ANTDERRORCLS);
        formItemEl.scrollIntoView(true);
        // fix header height
        this.doc.documentElement.scrollTop -= HEADERMINHEIGHT;
    }

    private install() {
        this.uninstall();
        if (this.tick < 300) this.tick = 300;
        this.$time = setInterval(() => this.update(), this.tick);
    }

    private uninstall() {
        if (this.$time) clearInterval(this.$time);
    }

    private findParent(el: any, selector: string) {
        let retEl = null;
        while (el) {
            if (el.querySelector(selector)) {
                retEl = el;
                break;
            }
            el = el.parentElement;
        }
        return retEl;
    }

    ngOnInit() {
        this.formEl = this.findParent(this.el.nativeElement, 'form');
        if (this.formEl === null) throw new Error('未找到有效 form 元素');
        (this.el.nativeElement as HTMLElement).classList.add('error-collect', 'pr-lg', 'text-error', 'point');
        this.install();
    }

    ngOnDestroy() {
        this.uninstall();
    }
}
