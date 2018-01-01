import { Component, Input, HostBinding, ViewChild, ElementRef, OnInit, OnDestroy, OnChanges, SimpleChanges, NgZone, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef, SimpleChange } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
    selector: 'gauge',
    template: `<div #container></div>`,
    styles: [`:host { display: block; }`],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GaugeComponent implements OnInit, OnDestroy, OnChanges {

    // region: fields

    @Input() title: string;
    @Input()
    get height() { return this._height; }
    set height(value: any) {
        this._height = coerceNumberProperty(value);
    }
    private _height;
    @Input() color = '#2F9CFF';
    @Input() bgColor = '#F0F2F5';
    @Input() format: Function;

    @Input()
    get percent() { return this._percent; }
    set percent(value: any) {
        this._percent = coerceNumberProperty(value);
    }
    private _percent: number;

    // endregion

    @ViewChild('container') node: ElementRef;

    chart: any;
    initFlag = false;

    constructor(private cd: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.initFlag = true;
        setTimeout(() => this.install(), 100);
    }

    private createData() {
        return [{ name: this.title, value: +this.percent }];
    }

    private draw() {
        if (!this.chart) return;
        this.chart.guide().clear();
        const data = this.createData();
        // 绘制仪表盘背景
        this.chart.guide().arc({
            zIndex: 0,
            top: false,
            start: [ 0, 0.95 ],
            end: [ 100, 0.95 ],
            style: { // 底灰色
                stroke: this.bgColor,
                lineWidth: 12
            }
        });
        // 绘制指标
        this.chart.guide().arc({
            zIndex: 1,
            start: [ 0, 0.95 ],
            end: [ data[0].value, 0.95 ],
            style: {
                stroke: this.color,
                lineWidth: 12,
            }
        });
        this.chart.changeData(data);
    }

    install() {
        this.node.nativeElement.innerHTML = '';
        const Shape = G2.Shape;
        // 自定义Shape 部分
        Shape.registerShape('point', 'pointer', {
            drawShape(cfg, group) {
            let point = cfg.points[0]; // 获取第一个标记点
            point = this.parsePoint(point);
            const center = this.parsePoint({ // 获取极坐标系下画布中心点
                x: 0,
                y: 0
            });
            // 绘制指针
            group.addShape('line', {
                attrs:  {
                    x1: center.x,
                    y1: center.y,
                    x2: point.x,
                    y2: point.y,
                    stroke: cfg.color,
                    lineWidth: 2,
                    lineCap: 'round'
                }
            });

            const { origin } = cfg;
            group.addShape('text', {
                attrs: {
                    x: center.x,
                    y: center.y + 80,
                    text: `${origin._origin.value}%`,
                    textAlign: 'center',
                    fontSize: 24,
                    fill: 'rgba(0, 0, 0, 0.85)'
                }
            });
            return group.addShape('circle', {
                attrs: {
                    x: center.x,
                    y: center.y,
                    r: 9.75,
                    stroke: cfg.color,
                    lineWidth: 2,
                    fill: '#fff'
                }
            });
            }
        });

        const data = this.createData();
        const chart = new G2.Chart({
            container: this.node.nativeElement,
            forceFit: true,
            height: this.height,
            padding: [10, 10, 30, 10]
        });
        chart.source(data);

        chart.coord('polar', {
            startAngle: -1.2 * Math.PI,
            endAngle: 0.2 * Math.PI
        });
        chart.scale('value', {
            min: 0,
            max: 100,
            nice: true,
            tickCount: 6
        });

        chart.axis('1', false);
        // 刻度值
        chart.axis('value', {
            zIndex: 2,
            line: null,
            label: {
                offset: -12,
                formatter: this.format
            },
            tickLine: null,
            grid: null
        });
        chart.legend(false);
        chart.point({
            generatePoints: true
        }).position('value*1')
            .shape('pointer')
            .color(this.color)
            .active(false);

        this.chart = chart;
        this.draw();
    }

    uninstall() {
        if (this.chart) this.chart.destroy();
    }

    ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
        if (this.initFlag)
            this.draw();
    }

    ngOnDestroy(): void {
        this.uninstall();
    }
}
