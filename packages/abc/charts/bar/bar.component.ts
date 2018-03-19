import { Component, Input, HostBinding, ViewChild, ElementRef, OnDestroy, OnChanges, SimpleChanges, NgZone, TemplateRef, OnInit, HostListener, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { debounceTime } from 'rxjs/operators';
import { FromEventObservable } from 'rxjs/observable/FromEventObservable';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
    selector: 'g2-bar',
    template: `
    <ng-container *ngIf="_title; else _titleTpl"><h4>{{_title}}</h4></ng-container>
    <div #container></div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false
})
export class G2BarComponent implements OnDestroy, OnChanges, OnInit {

    // region: fields
    _title = '';
    _titleTpl: TemplateRef<any>;
    @Input()
    set title(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef) {
            this._title = null;
            this._titleTpl = value;
        } else
            this._title = value;
        this.cd.detectChanges();
    }

    @Input() color = 'rgba(24, 144, 255, 0.85)';

    @HostBinding('style.height.px')
    @Input()
    get height() { return this._height; }
    set height(value: any) {
        this._height = coerceNumberProperty(value);
    }
    private _height = 0;

    @Input() padding: number[];
    @Input() data: Array<{ x: any, y: any, [key: string]: any }>;

    @Input()
    get autoLabel() { return this._autoLabel; }
    set autoLabel(value: any) {
        this._autoLabel = coerceBooleanProperty(value);
    }
    private _autoLabel = true;

    // endregion

    @HostBinding('class.g2-chart') private _cls = true;

    @ViewChild('container') private node: ElementRef;

    chart: any;

    constructor(private el: ElementRef, private cd: ChangeDetectorRef) {
        this.cd.detach();
    }

    install() {
        if (!this.data || (this.data && this.data.length < 1)) return;
        // this.uninstall();
        this.node.nativeElement.innerHTML = '';

        let padding = Object.assign([], this.padding);
        if (padding.length <= 0) padding = [32, 0, this.autoHideXLabels ? 8 : 32, 40];

        const chart = new G2.Chart({
            container: this.node.nativeElement,
            forceFit: true,
            height: +this.height - 22,
            legend: null,
            padding: padding
        });

        chart.axis('x', !this.autoHideXLabels);
        chart.axis('y', {
            title: false,
            line: false,
            tickLine: false
        });

        chart.source(this.data, {
            x: {
                type: 'cat'
            },
            y: {
                min: 0
            }
        });

        chart.tooltip({
            showTitle: false
        });
        chart
            .interval()
            .position('x*y')
            .color(this.color)
            .tooltip('x*y', (x, y) => {
                return {
                  name: x,
                  value: y
                };
            });
        chart.render();
        setTimeout(() => {
            chart.forceFit();
            chart.repaint();
        }, 30);
        this.chart = chart;
    }

    uninstall() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }

    ngOnInit(): void {
        this.installResizeEvent();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.resize();
    }

    ngOnDestroy(): void {
        this.uninstallResizeEvent();
        this.uninstall();
    }

    // region: resize

    private autoHideXLabels = false;
    private scroll$: Subscription = null;
    private installResizeEvent() {
        if (!this.autoLabel || this.scroll$) return;

        this.scroll$ = <any>FromEventObservable.create(window, 'resize')
                            .pipe(debounceTime(200))
                            .subscribe(() => this.resize());
    }

    private uninstallResizeEvent() {
        if (this.scroll$) this.scroll$.unsubscribe();
    }

    resize() {
        const canvasWidth = this.el.nativeElement.clientWidth;
        const minWidth = this.data.length * 30;

        if (canvasWidth <= minWidth) {
            if (!this.autoHideXLabels) {
                this.autoHideXLabels = true;
                this.install();
                return;
            }
        } else if (this.autoHideXLabels) {
            this.autoHideXLabels = false;
            this.install();
            return;
        }
        if (!this.chart) this.install();
    }

    // endregion
}
