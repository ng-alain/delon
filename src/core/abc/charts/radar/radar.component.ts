import { Component, Input, HostBinding, ViewChild, ElementRef, OnDestroy, OnChanges, SimpleChanges, NgZone, TemplateRef, OnInit, HostListener, Output, EventEmitter, ContentChild, SimpleChange, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { coerceNumberProperty, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
    selector: 'radar',
    template: `
    <h4 *ngIf="_title; else _titleTpl">{{ _title }}</h4>
    <div #container></div>
    <div nz-row class="legend" *ngIf="hasLegend">
        <div nz-col [nzSpan]="24 / legendData.length" *ngFor="let i of legendData; let idx = index" (click)="handleLegendClick(idx)">
            <div class="legend-item">
                <p>
                    <i class="dot" [ngStyle]="{'background-color': !i.checked ? '#aaa' : i.color}"></i>
                    <span>{{i.name}}</span>
                </p>
                <h6>{{i.value}}</h6>
            </div>
        </div>
    </div>`,
    styleUrls: [ './radar.less' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class G2RadarComponent implements OnDestroy, OnChanges, OnInit {

    // region: fields

    _title = '';
    _titleTpl: TemplateRef<any>;
    @Input()
    set title(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._titleTpl = value;
        else
            this._title = value;
    }

    @HostBinding('style.height.px')
    @Input()
    get height() { return this._height; }
    set height(value: any) {
        this._height = coerceNumberProperty(value);
    }
    private _height = 0;

    @Input() padding: number[] = [44, 30, 16, 30];

    @Input()
    get hasLegend() { return this._hasLegend; }
    set hasLegend(value: any) {
        this._hasLegend = coerceBooleanProperty(value);
    }
    private _hasLegend = true;

    @Input()
    get tickCount() { return this._tickCount; }
    set tickCount(value: any) {
        this._tickCount = coerceNumberProperty(value);
    }
    private _tickCount = 4;

    @Input() data: Array<{ name: string, label: string, value: number, [key: string]: any }> = [];

    // endregion

    @ViewChild('container') node: ElementRef;

    chart: any;
    initFlag = false;
    legendData: any[] = [];

    constructor(private el: ElementRef, private cd: ChangeDetectorRef) { }

    handleLegendClick(i: number) {
        this.legendData[i].checked = !this.legendData[i].checked;

        if (this.chart) {
            // const filterItem = this.legendData.filter(l => l.checked).map(l => l.name);
            this.chart.filter('name', (val: any) => this.legendData.find(w => w.name === val).checked);
            this.chart.repaint();
        }
    }

    install() {
        if (!this.data || (this.data && this.data.length < 1)) return;

        this.node.nativeElement.innerHTML = '';

        const colors = [
            '#1890FF', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911',
        ];

        const chart = new G2.Chart({
            container: this.node.nativeElement,
            forceFit: true,
            height: +this.height - (this.hasLegend ? 80 : 22),
            padding: this.padding
        });
        chart.source(this.data, {
            value: {
                min: 0,
                tickCount: this.tickCount
            }
        });

        chart.coord('polar');
        chart.legend(false);

        chart.axis('label', {
            line: null,
            labelOffset: 8,
            labels: {
                label: {
                    fill: 'rgba(0, 0, 0, .65)'
                }
            },
            grid: {
                line: {
                    stroke: '#e9e9e9',
                    lineWidth: 1,
                    lineDash: [0, 0]
                }
            }
        });

        chart.axis('value', {
            grid: {
                type: 'polygon',
                line: {
                    stroke: '#e9e9e9',
                    lineWidth: 1,
                    lineDash: [0, 0]
                }
            },
            labels: {
                label: {
                    fill: 'rgba(0, 0, 0, .65)'
                }
            }
        });

        chart.line().position('label*value').color('name', colors);
        chart.point().position('label*value').color('name', colors).shape('circle').size(3);

        chart.render();

        this.chart = chart;

        if (this.hasLegend) {
            this.legendData = chart.getAllGeoms()[0]._attrs.dataArray.map((item: any) => {
                const origin = item[0]._origin;
                const result = {
                    name: origin.name,
                    color: item[0].color,
                    checked: true,
                    value: item.reduce((p, n) => p + n._origin.value, 0),
                };

                return result;
            });
            this.cd.markForCheck();
        }
    }

    uninstall() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }

    ngOnInit(): void {
        this.initFlag = true;
        setTimeout(() => this.install(), 100);
    }

    ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
        if (this.initFlag)
            this.install();
    }

    ngOnDestroy(): void {
        this.uninstall();
    }
}
