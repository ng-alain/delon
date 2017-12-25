import { Component, Input, HostBinding, ViewChild, ElementRef, OnDestroy, OnChanges, SimpleChanges, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
    selector: 'mini-bar',
    template: `<div #container></div>`,
    styles: [`:host { display: block; }`],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiniBarComponent implements OnDestroy, OnChanges, OnInit {

    // region: fields

    @Input() color = '#1890FF';

    @HostBinding('style.height.px')
    @Input()
    get height() { return this._height; }
    set height(value: any) {
        this._height = coerceNumberProperty(value);
    }
    private _height = 0;

    @Input()
    get borderWidth() { return this._borderWidth; }
    set borderWidth(value: any) {
        this._borderWidth = coerceNumberProperty(value);
    }
    private _borderWidth = 5;

    @Input() padding: number[] = [ 8, 8, 8, 8 ];

    @Input() data: Array<{ x: number, y: number, [key: string]: any }>;

    // endregion

    @ViewChild('container') node: ElementRef;

    chart: any;
    initFlag = false;

    constructor(private cd: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.initFlag = true;
        setTimeout(() => this.install(), 100);
    }

    install() {
        if (!this.data || (this.data && this.data.length < 1)) return;

        this.node.nativeElement.innerHTML = '';

        const chart = new G2.Chart({
            container: this.node.nativeElement,
            forceFit: true,
            height: +this.height,
            padding: this.padding,
            legend: null
        });

        chart.axis(false);

        chart.source(this.data, {
            x: {
                type: 'cat'
            },
            y: {
                min: 0
            }
        });

        chart.tooltip({
            showTitle: false,
            hideMarkders: false,
            crosshairs: false,
            'g2-tooltip': { padding: 4 },
            'g2-tooltip-list-item': { margin: `0px 4px` }
        });
        chart
            .interval()
            .position('x*y')
            .size(this.borderWidth)
            .color(this.color)
            .tooltip('x*y', (x, y) => {
                return {
                    name: x,
                    value: y
                };
            });

        chart.render();

        this.chart = chart;
    }

    uninstall() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.initFlag)
            this.install();
    }

    ngOnDestroy(): void {
        this.uninstall();
    }
}
