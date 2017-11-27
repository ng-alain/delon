import { Component, Input, OnInit, OnDestroy, Inject, TemplateRef, ContentChild } from '@angular/core';
import { ElementRef, Renderer2, HostBinding } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { isTruth } from '../utils/utils';

const CLS = 'footer-toolbar';

@Component({
    selector: 'footer-toolbar',
    template: `
    <div class="left"><ng-container *ngIf="extra" [ngTemplateOutlet]="extra"></ng-container></div>
    <div class="right">
        <error-collect *ngIf="_errorCollect"></error-collect>
        <ng-content></ng-content>
    </div>
    `,
    host: {
        '[class.footer-toolbar]': 'true'
    }
})
export class FooterToolbarComponent implements OnInit, OnDestroy {

    _errorCollect = false;
    @Input()
    set errorCollect(value: any) {
        this._errorCollect = isTruth(value);
    }

    @ContentChild('extra') extra: TemplateRef<any>;

    constructor(private el: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private doc: any) {}

    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, CLS);
        this.doc.querySelector('body').classList.add(`has-${CLS}`);
    }

    ngOnDestroy() {
        this.doc.querySelector('body').classList.remove(`has-${CLS}`);
    }

}
