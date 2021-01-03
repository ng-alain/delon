import { Platform } from '@angular/cdk/platform';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Types } from '@antv/g2';
import { G2Service } from '@delon/chart/core';
import { InputNumber, NumberInput } from '@delon/util';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'g2,g2-custom',
  exportAs: 'g2Custom',
  template: ` <ng-content></ng-content> `,
  host: {
    '[style.height.px]': 'height',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class G2CustomComponent implements AfterViewInit, OnDestroy {
  static ngAcceptInputType_delay: NumberInput;
  static ngAcceptInputType_height: NumberInput;
  static ngAcceptInputType_resizeTime: NumberInput;

  private destroy$ = new Subject<void>();
  private _install = false;

  // #region fields

  @Input() @InputNumber() delay = 0;
  @Input() @InputNumber() height: number;
  @Input() @InputNumber() resizeTime = 0;
  @Input() theme: string | Types.LooseObject;
  @Output() readonly render = new EventEmitter<ElementRef>();
  @Output() readonly resize = new EventEmitter<ElementRef>();
  @Output() readonly destroy = new EventEmitter<ElementRef>();

  // #endregion

  constructor(private el: ElementRef, private srv: G2Service, private platform: Platform) {
    this.theme = srv.cog.theme!;
    this.srv.notify
      .pipe(
        takeUntil(this.destroy$),
        filter(() => !this._install),
      )
      .subscribe(() => this.load());
  }

  private load(): void {
    this._install = true;
    setTimeout(() => this.renderChart(), this.delay);
  }

  private renderChart(): void {
    this.el.nativeElement.innerHTML = '';
    this.render.emit(this.el);
    this.installResizeEvent();
  }

  private installResizeEvent(): void {
    if (this.resizeTime <= 0) return;

    fromEvent(window, 'resize')
      .pipe(takeUntil(this.destroy$), debounceTime(Math.min(200, this.resizeTime)))
      .subscribe(() => this.resize.emit(this.el));
  }

  ngAfterViewInit(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    if ((window as any).G2.Chart) {
      this.load();
    } else {
      this.srv.libLoad();
    }
  }

  ngOnDestroy(): void {
    this.destroy.emit(this.el);
    this.destroy$.next();
    this.destroy$.complete();
  }
}
