import { Component, Input, HostBinding, ViewChild, ElementRef, OnDestroy, OnChanges, SimpleChanges, NgZone, TemplateRef, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { debounceTime } from 'rxjs/operators';
import { FromEventObservable } from 'rxjs/observable/FromEventObservable';

@Component({
    selector: 'tag-cloud',
    template: `<div #container [ngStyle]="{'height.px': height}"></div>`,
    styleUrls: [ './tag-cloud.less' ]
})
export class TagCloudComponent implements OnDestroy, OnChanges, OnInit {

    // region: fields

    @Input() color = 'rgba(24, 144, 255, 0.85)';
    @Input() height = 0;
    @Input() padding: number = 0;
    @Input() data: Array<{ name: string, value: number, [key: string]: any }>;
    @Input() autoLabel = true;

    // endregion

    @ViewChild('container') node: ElementRef;

    chart: any;
    initFlag = false;

    constructor(private el: ElementRef, private zone: NgZone) { }

    private initTagCloud() {
        // 给point注册一个词云的shape
        G2.Shape.registerShape('point', 'cloud', {
            drawShape(cfg, container) {
                const attrs = Object.assign({}, {
                    fillOpacity: cfg.opacity,
                    fontSize: cfg.size,
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

        this.zone.runOutsideAngular(() => {

            this.node.nativeElement.innerHTML = '';

            const ds = new DataSet();
            const dv = ds.createView('g2pv').source(this.data);

            const height = +this.height;
            const width = +this.el.nativeElement.offsetWidth;
            this.data.sort((a, b) => b.value - a.value);
            const max = this.data[0].value;
            const min = this.data[this.data.length - 1].value;

            dv.transform({
                type: 'tag-cloud',
                fields: [ 'name', 'value' ],
                size: [ width, height ],
                padding: this.padding,
                text: words => words.name
            });
            const chart = new G2.Chart({
                container: this.node.nativeElement,
                width: width,
                height: height,
                padding: this.padding
            });
            chart.source(dv);
            chart.legend(false);
            chart.axis(false);
            chart.tooltip({
                showTitle: false
            });
            chart.coord().reflect();
            chart.point()
                .position('x*y')
                .color('text')
                .size('size', size => size)
                .shape('cloud');

            chart.render();

            this.zone.run(() => {
                this.chart = chart;
            });
        });
    }

    uninstall() {
        if (this.chart) {
            this.zone.runOutsideAngular(() => {
                this.chart.destroy();
            });
            this.chart = null;
        }
    }

    ngOnInit(): void {
        this.initFlag = true;
        setTimeout(() => this.resize(), 100);
        this.initTagCloud();
        this.installResizeEvent();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.initFlag)
            this.renderChart();
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

        this.scroll$ = FromEventObservable.create(window, 'resize')
                            .pipe(debounceTime(200))
                            .subscribe(() => this.resize());
    }

    private uninstallResizeEvent() {
        if (this.scroll$) this.scroll$.unsubscribe();
    }

    resize() {
        this.renderChart();
    }

    // endregion
}
