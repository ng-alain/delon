import { Component, OnInit, ElementRef, Input, OnDestroy, EventEmitter, Output, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { debounceTime } from 'rxjs/operators';
import { FromEventObservable } from 'rxjs/observable/FromEventObservable';

@Component({
    selector: 'chart',
    template: ``,
    styles: [ `:host{display:block} `]
})
export class ChartComponent implements OnInit, OnDestroy {

    // region: fields

    @HostBinding('style.height.px')
    @Input() height;

    @Input() resizeTime = 0;

    @Output() render: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();

    @Output() resize: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();

    @Output() destroy: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();

    // endregion

    constructor(private el: ElementRef) {}

    private renderChart() {
        this.el.nativeElement.innerHTML = '';
        this.render.emit(this.el);
    }

    ngOnInit(): void {
        setTimeout(() => this.renderChart(), 200);
    }

    ngOnDestroy(): void {
        this.destroy.emit(this.el);
        this.uninstallResizeEvent();
    }

    // region: resize

    private resize$: Subscription = null;

    private installResizeEvent() {
        if (this.resizeTime <= 0 || !this.resize$) return;

        if (this.resizeTime <= 200) this.resizeTime = 200;

        this.resize$ = FromEventObservable.create(window, 'resize')
                            .pipe(debounceTime(this.resizeTime))
                            .subscribe(() => this.resize.emit(this.el));
    }

    private uninstallResizeEvent() {
        if (this.resize$) this.resize$.unsubscribe();
    }

    // endregion
}
