import { Platform } from '@angular/cdk/platform';
import { NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  numberAttribute
} from '@angular/core';
import { fromEvent, Subscription, debounceTime } from 'rxjs';

import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';

@Component({
  selector: 'g2-water-wave',
  exportAs: 'g2WaterWave',
  templateUrl: './water-wave.component.html',
  host: { '[class.g2-water-wave]': 'true' },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NgStyle, NzStringTemplateOutletDirective]
})
export class G2WaterWaveComponent implements OnDestroy, OnChanges, OnInit {
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly renderer = inject(Renderer2);
  private readonly ngZone = inject(NgZone);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly platform = inject(Platform);

  private resize$: Subscription | null = null;
  @ViewChild('container', { static: true }) private node!: ElementRef;
  private timer!: number;

  // #region fields

  @Input({ transform: booleanAttribute }) animate = true;
  @Input({ transform: numberAttribute }) delay = 0;
  @Input() title?: string | TemplateRef<void> | null;
  @Input() color = '#1890FF';
  @Input({ transform: numberAttribute }) height = 160;
  @Input({ transform: numberAttribute }) percent?: number;

  // #endregion

  private renderChart(isUpdate: boolean): void {
    if (!this.resize$) return;

    this.updateRadio();

    const { percent, color, node, animate } = this;

    const data = Math.min(Math.max(percent! / 100, 0), 100);
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    cancelAnimationFrame(this.timer);

    const canvas = node.nativeElement as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const radius = canvasWidth / 2;
    const lineWidth = 2;
    const cR = radius - lineWidth;

    ctx.beginPath();
    ctx.lineWidth = lineWidth * 2;

    const axisLength = canvasWidth - lineWidth;
    const unit = axisLength / 8;
    const xOffset = lineWidth;
    let sp = 0; // 周期偏移量
    const range = 0.2; // 振幅
    let currRange = range;
    let currData = 0;
    const waveupsp = animate ? 0.005 : 0.015; // 水波上涨速度

    let arcStack: [[number, number]?] | null = [];
    const bR = radius - lineWidth;
    const circleOffset = -(Math.PI / 2);
    let circleLock = true;

    for (let i = circleOffset; i < circleOffset + 2 * Math.PI; i += 1 / (8 * Math.PI)) {
      arcStack.push([radius + bR * Math.cos(i), radius + bR * Math.sin(i)]);
    }

    const cStartPoint = arcStack.shift() as [number, number];
    ctx.strokeStyle = color;
    ctx.moveTo(cStartPoint[0], cStartPoint[1]);

    function drawSin(): void {
      ctx.beginPath();
      ctx.save();

      const sinStack: [[number, number]?] = [];
      for (let i = xOffset; i <= xOffset + axisLength; i += 20 / axisLength) {
        const x = sp + (xOffset + i) / unit;
        const y = Math.sin(x) * currRange;
        const dx = i;
        const dy = 2 * cR * (1 - currData) + (radius - cR) - unit * y;

        ctx.lineTo(dx, dy);
        sinStack.push([dx, dy]);
      }

      const startPoint = sinStack.shift() as [number, number];

      ctx.lineTo(xOffset + axisLength, canvasHeight);
      ctx.lineTo(xOffset, canvasHeight);
      ctx.lineTo(startPoint[0], startPoint[1]);

      const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
      gradient.addColorStop(0, '#ffffff');
      gradient.addColorStop(1, color);
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();
    }

    function render(): void {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      if (circleLock && !isUpdate) {
        if (arcStack!.length) {
          if (animate) {
            const temp = arcStack!.shift() as [number, number];
            ctx.lineTo(temp[0], temp[1]);
            ctx.stroke();
          } else {
            for (const temp of arcStack!) {
              ctx.lineTo(temp![0], temp![1]);
              ctx.stroke();
            }
            arcStack = [];
          }
        } else {
          circleLock = false;
          ctx.lineTo(cStartPoint[0], cStartPoint[1]);
          ctx.stroke();
          arcStack = null;

          ctx.globalCompositeOperation = 'destination-over';
          ctx.beginPath();
          ctx.lineWidth = lineWidth;
          ctx.arc(radius, radius, bR, 0, 2 * Math.PI, true);

          ctx.beginPath();
          ctx.save();
          ctx.arc(radius, radius, radius - 3 * lineWidth, 0, 2 * Math.PI, true);

          ctx.restore();
          ctx.clip();
          ctx.fillStyle = color;
        }
      } else {
        if (data >= 0.85) {
          if (currRange > range / 4) {
            const t = range * 0.01;
            currRange -= t;
          }
        } else if (data <= 0.1) {
          if (currRange < range * 1.5) {
            const t = range * 0.01;
            currRange += t;
          }
        } else {
          if (currRange <= range) {
            const t = range * 0.01;
            currRange += t;
          }
          if (currRange >= range) {
            const t = range * 0.01;
            currRange -= t;
          }
        }
        if (data - currData > 0) {
          currData += waveupsp;
        }
        if (data - currData < 0) {
          currData -= waveupsp;
        }

        sp += 0.07;
        drawSin();
      }
      self.timer = requestAnimationFrame(render);
    }

    render();
    // drawSin();
  }

  private updateRadio(): void {
    const { offsetWidth } = this.el.parentNode! as HTMLElement;
    const radio = offsetWidth < this.height ? offsetWidth / this.height : 1;
    this.renderer.setStyle(this.el, 'transform', `scale(${radio})`);
  }

  render(): void {
    this.renderChart(false);
  }

  private installResizeEvent(): void {
    this.resize$ = fromEvent(window, 'resize')
      .pipe(debounceTime(200))
      .subscribe(() => this.updateRadio());
  }

  ngOnInit(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.installResizeEvent();
    this.ngZone.runOutsideAngular(() => setTimeout(() => this.render(), this.delay));
  }

  ngOnChanges(): void {
    this.ngZone.runOutsideAngular(() => this.renderChart(true));
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.timer) {
      cancelAnimationFrame(this.timer);
    }
    if (this.resize$) {
      this.resize$.unsubscribe();
    }
  }
}
