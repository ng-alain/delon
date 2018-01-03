import { Component, Input, HostBinding, ViewChild, ElementRef, OnDestroy, OnChanges, SimpleChanges, NgZone, TemplateRef, OnInit, HostListener, ViewEncapsulation, SimpleChange, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { debounceTime } from 'rxjs/operators';
import { FromEventObservable } from 'rxjs/observable/FromEventObservable';
import { coerceNumberProperty, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
    selector: 'tag-cloud',
    template: `<div #container [ngStyle]="{'height.px': height}"></div>`,
    styleUrls: [ './tag-cloud.less' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagCloudComponent implements OnDestroy, OnChanges, OnInit {

    // region: fields

    @Input() color = 'rgba(24, 144, 255, 0.85)';

    @Input()
    get height() { return this._height; }
    set height(value: any) {
        this._height = coerceNumberProperty(value);
    }
    private _height = 0;

    @Input() padding = 0;
    @Input() data: { name: string, value: number, [key: string]: any }[];

    @Input()
    get autoLabel() { return this._autoLabel; }
    set autoLabel(value: any) {
        this._autoLabel = coerceBooleanProperty(value);
    }
    private _autoLabel = true;

    // endregion

    @ViewChild('container') node: ElementRef;

    chart: any;
    initFlag = false;

    constructor(private el: ElementRef, private cd: ChangeDetectorRef) { }

    private initTagCloud() {
        // 给point注册一个词云的shape
        G2.Shape.registerShape('point', 'cloud', {
            drawShape(cfg, container) {
                const attrs = Object.assign({}, {
                    fillOpacity: cfg.opacity,
                    fontSize: cfg.origin._origin.size,
                    rotate: cfg.origin._origin.rotate,
                    text: cfg.origin._origin.text,
                    textAlign: 'center',
                    fontFamily: cfg.origin._origin.font,
                    fill: cfg.color,
                    textBaseline: 'Alphabetic'
                  }, cfg.style);
                return container.addShape('text', {
                    attrs: Object.assign(attrs, {
                        x: cfg.x,
                        y: cfg.y
                    })
                });
            }
        });
    }

    renderChart() {
        if (!this.data || (this.data && this.data.length < 1)) return;

        this.node.nativeElement.innerHTML = '';
        const dv = new DataSet.View().source(this.data);
        const range = dv.range('value');
        const min = range[0];
        const max = range[1];
        const height = +this.height;
        const width = +this.el.nativeElement.offsetWidth;

        dv.transform({
            type: 'tag-cloud',
            fields: [ 'name', 'value' ],
            size: [ width, height ],
            padding: this.padding,
            timeInterval: 5000, // max execute time
            rotate() {
                let random = ~~(Math.random() * 4) % 4;
                if (random === 2) {
                    random = 0;
                }
                return random * 90; // 0, 90, 270
            },
            fontSize(d) {
                if (d.value) {
                    return ((d.value - min) / (max - min)) * (80 - 24) + 24;
                }
                return 0;
            }
        });
        const chart = new G2.Chart({
            container: this.node.nativeElement,
            width: width,
            height: height,
            padding: this.padding,
            forceFit: true
        });
        chart.source(dv, {
            x: { nice: false },
            y: { nice: false }
        });
        chart.legend(false);
        chart.axis(false);
        chart.tooltip({
            showTitle: false
        });
        chart.coord().reflect();
        chart.point()
            .position('x*y')
            .color('text')
            .shape('cloud')
            .tooltip('value*category');

        chart.render();

        this.chart = chart;
    }

    uninstall() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }

    ngOnInit(): void {
        this.initFlag = true;
        this.initTagCloud();
        setTimeout(() => this.renderChart(), 100);
    }

    ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
        if (this.initFlag)
            this.renderChart();
    }

    ngOnDestroy(): void {
        this.uninstall();
    }
}
