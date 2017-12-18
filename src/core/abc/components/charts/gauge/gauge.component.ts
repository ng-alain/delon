import { Component, Input, HostBinding, ViewChild, ElementRef, OnInit, OnDestroy, OnChanges, SimpleChanges, NgZone, TemplateRef } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
    selector: 'gauge',
    template: `<div #container></div>`,
    styles: [`:host { display: block; }`]
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

    constructor(private zone: NgZone) { }

    ngOnInit(): void {
        this.initFlag = true;
        setTimeout(() => this.install2(), 100);
    }

    private initChart() {
        const color = this.color;
        G2.Shape.registerShape('point', 'dashBoard', {
            drawShape(cfg, group) {
                const originPoint = cfg.points[0];
                const point = this.parsePoint({ x: originPoint.x, y: 0.4 });

                const center = this.parsePoint({
                    x: 0,
                    y: 0
                });

                const shape = group.addShape('polygon', {
                    attrs: {
                        points: [
                            [center.x, center.y],
                            [point.x + 8, point.y],
                            [point.x + 8, point.y - 2],
                            [center.x, center.y - 2]
                        ],
                        radius: 2,
                        lineWidth: 2,
                        arrow: false,
                        fill: color
                    }
                });

                group.addShape('Marker', {
                    attrs: {
                        symbol: 'circle',
                        lineWidth: 2,
                        fill: color,
                        radius: 8,
                        x: center.x,
                        y: center.y
                    }
                });

                group.addShape('Marker', {
                    attrs: {
                        symbol: 'circle',
                        lineWidth: 2,
                        fill: '#fff',
                        radius: 5,
                        x: center.x,
                        y: center.y
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

                group.addShape('text', {
                    attrs: {
                        x: center.x,
                        y: center.y + 45,
                        text: this.title,
                        textAlign: 'center',
                        fontSize: 14,
                        fill: 'rgba(0, 0, 0, 0.43)'
                    }
                });

                return shape;
            }
        });
    }

    install2() {
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

        const data = [{ name: this.title, value: +this.percent }];
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

        // 绘制仪表盘刻度线
        // todo: 计算不是很准确，待PRO更新
        // new Array(6).fill(1).forEach((v, i) => {
        //     chart.guide().line({
        //       start: [ 0.2 + (i * 20), 0.82 ],
        //       end: [ 0.18 + (i * 20), 1.05 ],
        //       lineStyle: {
        //         stroke: this.color, // 线的颜色
        //         lineDash: null, // 虚线的设置
        //         lineWidth: 2
        //       }
        //     });
        // });

        // 绘制仪表盘背景
        chart.guide().arc({
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
        chart.guide().arc({
            zIndex: 1,
            start: [ 0, 0.95 ],
            end: [ data[0].value, 0.95 ],
            style: {
                stroke: this.color,
                lineWidth: 12,
            }
        });

        chart.render();
    }

    install() {
        this.uninstall();

        this.zone.runOutsideAngular(() => {
            this.node.nativeElement.innerHTML = '';

            const data = [{ name: this.title, value: this.percent }];

            if (this.chart) this.chart.clear();

            this.initChart();

            const chart = new G2.Chart({
                container: this.node.nativeElement,
                forceFit: true,
                height: this.height,
                animate: false,
                padding: [10, 10, 30, 10]
            });

            chart.source(data);

            chart.tooltip(false);

            chart.coord('gauge', {
                startAngle: -1.2 * Math.PI,
                endAngle: 0.20 * Math.PI
            });
            chart.scale('value', {
                type: 'linear',
                nice: true,
                min: 0,
                max: 100,
                tickCount: 6
            });
            chart.axis('value', {
                subTick: false,
                tickLine: {
                    stroke: this.color,
                    lineWidth: 2,
                    value: -14
                },
                labelOffset: -12,
                formatter: this.format
            });

            chart.point({ generatePoints: true }).position('value*1').shape('dashBoard').color(this.color).active(false);

            // region: draw
            const val = data[0].value;
            const lineWidth = 12;
            chart.guide().clear();

            chart.guide().arc(() => {
                return [0, 0.95];
            }, () => {
                return [val, 0.95];
            }, {
                stroke: this.color,
                lineWidth
            });

            chart.guide().arc(() => {
                return [val, 0.95];
            }, (arg) => {
                return [arg.max, 0.95];
            }, {
                stroke: this.bgColor,
                lineWidth
            });

            chart.render();

            // endregion

            this.zone.run(() => {
                this.chart = chart;
            });
        });
    }

    uninstall() {
        this.zone.runOutsideAngular(() => {
            if (this.chart) this.chart.destroy();
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.initFlag)
            this.install2();
    }

    ngOnDestroy(): void {
        this.uninstall();
    }
}
