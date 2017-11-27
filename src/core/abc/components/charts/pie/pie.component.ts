import { Component, Input, HostBinding, ViewChild, ElementRef, OnDestroy, OnChanges, SimpleChanges, NgZone, TemplateRef, OnInit, HostListener, ViewEncapsulation, Output, EventEmitter, ContentChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { FromEventObservable } from 'rxjs/observable/FromEventObservable';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'pie',
    template: `
    <div class="chart">
        <div #container></div>
        <div *ngIf="subTitle || total" class="total">
            <h4 *ngIf="subTitle" class="pie-sub-title" [innerHTML]="subTitle"></h4>
            <div *ngIf="total" class="pie-stat" [innerHTML]="total"></div>
        </div>
    </div>
    <ul *ngIf="hasLegend && legendData?.length" class="legend">
        <li *ngFor="let item of legendData; let index = index" (click)="handleLegendClick(index)">
            <span class="dot" [ngStyle]="{'background-color': !item.checked ? '#aaa' : item.color}"></span>
            <span class="legend-title">{{item.x}}</span>
            <nz-divider nzType="vertical"></nz-divider>
            <span class="percent">{{item.percent}}%</span>
            <span class="value" [innerHTML]="valueFormat ? valueFormat(item.y) : item.y"></span>
        </li>
    </ul>
    `,
    styleUrls: [ './pie.less' ],
    encapsulation: ViewEncapsulation.Emulated
})
export class G2PieComponent implements OnDestroy, OnChanges, OnInit {

    // region: fields

    @Input() animate = true;
    @Input() color = 'rgba(24, 144, 255, 0.85)';
    @Input() subTitle: string;
    @Input() total: string;
    @Input() height = 0;

    @HostBinding('class.has-legend')
    @Input() hasLegend = false;

    @HostBinding('class.legend-block')
    @Input() legendBlock = false;

    @Input() inner = 0.75;
    @Input() padding: number[] = [12, 0, 12, 0];
    @Input() percent: number;
    @Input() tooltip = true;
    @Input() lineWidth = 0;
    @Input() select = true;
    @Input() data: Array<{ x: number | string, y: number, [key: string]: any }>;
    @Input() valueFormat: Function;
    @Input() colors: any[];

    // endregion

    @ViewChild('container') node: ElementRef;

    chart: any;
    initFlag = false;
    legendData: any[] = [];

    constructor(private el: ElementRef, private zone: NgZone) { }

    install() {
        let formatColor;
        if (typeof this.percent !== 'undefined') {
            this.select = false;
            this.tooltip = false;
            formatColor = (value) => value === '占比' ? this.color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5';

            /* eslint no-param-reassign: */
            this.data = [
                {
                    x: '占比',
                    y: +this.percent
                },
                {
                    x: '反比',
                    y: 100 - +this.percent
                }
            ];
        }

        if (!this.data || (this.data && this.data.length < 1)) return;

        // this.uninstall();

        this.zone.runOutsideAngular(() => {

            this.node.nativeElement.innerHTML = '';

            const chart = new G2.Chart({
                container: this.node.nativeElement,
                forceFit: true,
                height: this.height,
                padding: this.padding,
                animate: this.animate
            });

            if (!this.tooltip) {
                chart.tooltip(false);
            } else {
                chart.tooltip({
                    showTitle: false,
                    itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value} %</li>'
                });
            }

            chart.axis(false);
            chart.legend(false);

            const dv = new DataSet.DataView();
            dv.source(this.data).transform({
                type: 'percent',
                field: 'y',
                dimension: 'x',
                as: 'percent'
            });
            chart.source(dv, {
                x: {
                    type: 'cat',
                    range: [0, 1]
                },
                y: {
                    min: 0
                }
            });

            chart.coord('theta', { innerRadius: this.inner });

            chart
                .intervalStack()
                .position('y')
                .style({ lineWidth: this.lineWidth, stroke: '#fff' })
                .tooltip('x*percent', (item, percent) => {
                    return {
                        name: item,
                        value: percent
                    };
                })
                .color('x', this.percent ? formatColor : this.colors)
                .select(this.select);

            chart.render();

            this.zone.run(() => {
                this.chart = chart;
                if (this.hasLegend) {
                    this.legendData = chart.getAllGeoms()[0]._attrs.dataArray.map((item: any) => {
                        const origin = item[0]._origin;
                        origin.color = item[0].color;
                        origin.checked = true;
                        origin.percent = (origin.percent * 100).toFixed(2);
                        return origin;
                    });
                }
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

    handleLegendClick(i: number) {
        this.legendData[i].checked = !this.legendData[i].checked;

        if (this.chart) {
            this.chart.filter('x', (val: any, item: any) => item.checked);
            this.chart.repaint();
        }
    }

    ngOnInit(): void {
        this.initFlag = true;
        setTimeout(() => this.install(), 100);
        this.installResizeEvent();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.initFlag)
            this.install();
    }

    ngOnDestroy(): void {
        this.uninstallResizeEvent();
        this.uninstall();
    }

    // region: resize

    private autoHideXLabels = false;
    private scroll$: Subscription = null;
    private installResizeEvent() {
        if (!this.hasLegend) return;

        this.scroll$ = FromEventObservable.create(window, 'resize')
                            .pipe(debounceTime(200))
                            .subscribe(() => this.resize());
    }

    private uninstallResizeEvent() {
        if (this.scroll$) this.scroll$.unsubscribe();
    }

    resize() {
        if (this.el.nativeElement.clientWidth <= 380) {
            if (!this.legendBlock) {
                this.legendBlock = true;
            }
        } else if (this.legendBlock) {
            this.legendBlock = false;
        }
        if (!this.chart) this.install();
    }

    // endregion
}
