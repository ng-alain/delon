import { Component, Input, HostBinding, ViewChild, ElementRef, OnDestroy, OnChanges, SimpleChanges, NgZone, OnInit } from '@angular/core';

@Component({
    selector: 'mini-bar',
    template: `
    <div class="g2-chart__desc"><div #container></div></div>
    `,
    host: {
        '[class.g2-chart]': 'true',
        '[class.min-chart]': 'true'
    },
    styles: [`:host { display: block; }`]
})
export class MiniBarComponent implements OnDestroy, OnChanges, OnInit {

    // region: fields

    @Input() color = '#1890FF';

    @HostBinding('style.height.px')
    @Input() height = 0;

    @Input() borderWidth = 5;

    @Input() padding: number[] = [36, 5, 30, 5];

    @Input() data: Array<{ x: number, y: number, [key: string]: any }>;

    // endregion

    @ViewChild('container') node: ElementRef;

    chart: any;
    initFlag = false;

    constructor(private zone: NgZone) { }

    ngOnInit(): void {
        this.initFlag = true;
        setTimeout(() => this.install(), 100);
    }

    install() {
        if (!this.data || (this.data && this.data.length < 1)) return;
        this.uninstall();

        this.zone.runOutsideAngular(() => {

            this.node.nativeElement.innerHTML = '';

            const chart = new G2.Chart({
                container: this.node.nativeElement,
                forceFit: true,
                height: +this.height + 54,
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

            this.zone.run(() => this.chart = chart);
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

    ngOnChanges(changes: SimpleChanges): void {
        if (this.initFlag)
            this.install();
    }

    ngOnDestroy(): void {
        this.uninstall();
    }
}
