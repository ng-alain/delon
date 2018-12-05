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
} from '@angular/core';
import { InputNumber } from '@delon/util';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'g2-water-wave',
  templateUrl: './water-wave.component.html',
  host: { '[class.g2-water-wave]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class G2WaterWaveComponent implements OnDestroy, OnChanges, OnInit {
  // #region fields

  _title = '';
  _titleTpl: TemplateRef<void>;
  @Input()
  set title(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this._title = null;
      this._titleTpl = value;
    } else {
      this._title = value;
    }
  }

  @Input()
  color = '#1890FF';

  @Input() @InputNumber() height = 160;

  @Input() @InputNumber() percent: number;

  // #endregion

  private resize$: Subscription = null;
  @ViewChild('container')
  private node: ElementRef;

  private initFlag = false;
  private timer;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
    private zone: NgZone,
  ) { }

  private renderChart() {
    const data = this.percent / 100;
    if (!data) return;

    this.node.nativeElement.innerHTML = '';
    const self = this;

    const canvas = this.node.nativeElement as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const radius = canvasWidth / 2;
    const lineWidth = 2;
    const cR = radius - lineWidth;

    ctx.beginPath();
    ctx.lineWidth = lineWidth * 2;

    const axisLength = canvasWidth - lineWidth;
    const unit = axisLength / 8;
    const range = 0.2; // 振幅
    let currRange = range;
    const xOffset = lineWidth;
    let sp = 0; // 周期偏移量
    let currData = 0;
    const waveupsp = 0.005; // 水波上涨速度

    let arcStack = [];
    const bR = radius - lineWidth;
    const circleOffset = -(Math.PI / 2);
    let circleLock = true;

    for (
      let i = circleOffset;
      i < circleOffset + (Math.PI * 2);
      i += 1 / (Math.PI * 8)
    ) {
      arcStack.push([radius + bR * Math.cos(i), radius + bR * Math.sin(i)]);
    }

    const cStartPoint = arcStack.shift();
    ctx.strokeStyle = this.color;
    ctx.moveTo(cStartPoint[0], cStartPoint[1]);

    function drawSin() {
      ctx.beginPath();
      ctx.save();

      const sinStack = [];
      for (let i = xOffset; i <= xOffset + axisLength; i += 20 / axisLength) {
        const x = sp + (xOffset + i) / unit;
        const y = Math.sin(x) * currRange;
        const dx = i;
        const dy = cR * 2 * (1 - currData) + (radius - cR) - unit * y;

        ctx.lineTo(dx, dy);
        sinStack.push([dx, dy]);
      }

      const startPoint = sinStack.shift();

      ctx.lineTo(xOffset + axisLength, canvasHeight);
      ctx.lineTo(xOffset, canvasHeight);
      ctx.lineTo(startPoint[0], startPoint[1]);

      const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
      gradient.addColorStop(0, '#ffffff');
      gradient.addColorStop(1, '#1890FF');
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();
    }

    function render() {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      if (circleLock) {
        if (arcStack.length) {
          const temp = arcStack.shift();
          ctx.lineTo(temp[0], temp[1]);
          ctx.stroke();
        } else {
          circleLock = false;
          ctx.lineTo(cStartPoint[0], cStartPoint[1]);
          ctx.stroke();
          arcStack = null;

          ctx.globalCompositeOperation = 'destination-over';
          ctx.beginPath();
          ctx.lineWidth = lineWidth;
          ctx.arc(radius, radius, bR, 0, Math.PI * 2, true);

          ctx.beginPath();
          ctx.save();
          ctx.arc(radius, radius, (radius - lineWidth) * 3, 0, Math.PI * 2, true);

          ctx.restore();
          ctx.clip();
          ctx.fillStyle = '#1890FF';
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
  }

  private updateRadio(radio: number) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `scale(${radio})`,
    );
  }

  private installResizeEvent() {
    if (this.resize$) return;

    this.resize$ = fromEvent(window, 'resize')
      .pipe(debounceTime(500))
      .subscribe(() => this.resize());
  }

  private resize() {
    const { offsetWidth } = this.el.nativeElement.parentNode;
    this.updateRadio(offsetWidth < this.height ? offsetWidth / this.height : 1);
    this.renderChart();
  }

  ngOnInit(): void {
    this.initFlag = true;
    this.cdr.detectChanges();
    this.zone.runOutsideAngular(() => {
      this.updateRadio(1);
      this.installResizeEvent();
      setTimeout(() => this.resize(), 130);
    });
  }

  ngOnChanges(): void {
    if (this.initFlag) {
      this.cdr.detectChanges();
      this.zone.runOutsideAngular(() => this.renderChart());
    }
  }

  ngOnDestroy(): void {
    if (this.timer) cancelAnimationFrame(this.timer);
    if (this.resize$) this.resize$.unsubscribe();
  }
}
