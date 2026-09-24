import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  OnDestroy,
  Renderer2,
  TemplateRef,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  inject,
  input,
  numberAttribute,
  viewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent, debounceTime } from 'rxjs';

import { watchInputs } from '@delon/chart/core';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';

@Component({
  selector: 'g2-water-wave',
  exportAs: 'g2WaterWave',
  templateUrl: './water-wave.component.html',
  host: { '[class.g2-water-wave]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzStringTemplateOutletDirective]
})
export class G2WaterWaveComponent implements OnDestroy {
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly renderer = inject(Renderer2);
  private readonly destroyRef = inject(DestroyRef);

  private readonly node = viewChild.required<ElementRef>('container');
  private timer = 0;
  private started = false;
  private destroyed = false;

  readonly animate = input(true, { transform: booleanAttribute });
  readonly delay = input(0, { transform: numberAttribute });
  readonly title = input<string | TemplateRef<void> | null>(null);
  readonly color = input('#1890FF');
  readonly height = input(160, { transform: numberAttribute });
  readonly percent = input<number>();

  constructor() {
    // 输入变更 → 重绘（isUpdate = true）
    watchInputs(this, () => {
      if (this.started) {
        this.renderChart(true);
      }
    });

    afterNextRender(() => {
      fromEvent(window, 'resize')
        .pipe(takeUntilDestroyed(this.destroyRef), debounceTime(200))
        .subscribe(() => this.updateRadio());

      // 同基类 `load()`：这里必须用 setTimeout，不能用 rxjs 一次性 `timer()`
      // （后者底层是 setInterval，`flush()` 不驱动它）。
      setTimeout(() => {
        if (!this.destroyed) {
          this.started = true;
          this.render();
        }
      }, this.delay());
    });
  }

  private renderChart(isUpdate: boolean): void {
    this.updateRadio();

    const percent = this.percent();
    const color = this.color();
    const animate = this.animate();

    const data = Math.min(Math.max(percent! / 100, 0), 100);
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    cancelAnimationFrame(this.timer);

    const canvas = this.node().nativeElement as HTMLCanvasElement;
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
    const radio = offsetWidth < this.height() ? offsetWidth / this.height() : 1;
    this.renderer.setStyle(this.el, 'transform', `scale(${radio})`);
  }

  render(): void {
    this.renderChart(false);
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    if (this.timer) {
      cancelAnimationFrame(this.timer);
    }
  }
}
