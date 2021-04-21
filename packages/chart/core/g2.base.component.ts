import { Platform } from '@angular/cdk/platform';
import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Chart, Types } from '@antv/g2';
import { BooleanInput, InputBoolean, InputNumber, NumberInput, ZoneOutside } from '@delon/util/decorator';
import { Subject, Subscription } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { G2Service } from './g2.servicce';

@Directive()
export abstract class G2BaseComponent implements OnInit, OnChanges, OnDestroy {
  get chart(): Chart {
    return this._chart;
  }

  constructor(
    protected srv: G2Service,
    protected el: ElementRef<HTMLElement>,
    protected ngZone: NgZone,
    protected platform: Platform,
    protected cdr: ChangeDetectorRef,
  ) {
    this.theme = srv.cog.theme!;
    this.srv.notify
      .pipe(
        takeUntil(this.destroy$),
        filter(() => !this.loaded),
      )
      .subscribe(() => this.load());
  }
  static ngAcceptInputType_repaint: BooleanInput;
  static ngAcceptInputType_delay: NumberInput;
  @Input() @InputBoolean() repaint = true;

  @ViewChild('container', { static: true }) protected node: ElementRef;
  protected resize$: Subscription;
  protected destroy$ = new Subject<void>();
  protected _chart: Chart;
  loaded = false;

  @Input() @InputNumber() delay = 0;
  @Input() theme: string | Types.LooseObject;

  /** 检查是否只变更数据 */
  onlyChangeData?: (changes: SimpleChanges) => boolean;

  abstract install(): void;

  /** G2数据变更 */
  changeData(): void {}

  /** 等同 `ngOnInit` */
  onInit(): void {}

  /** 等同 `ngOnChanges` */
  onChanges(_: SimpleChanges): void {}

  @ZoneOutside()
  private load(): void {
    this.ngZone.run(() => {
      this.loaded = true;
      this.cdr.detectChanges();
    });
    setTimeout(() => this.install(), this.delay);
  }

  ngOnInit(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.onInit();
    if ((window as any).G2) {
      this.load();
    } else {
      this.srv.libLoad();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onChanges(changes);

    const isOnlyChangeData = this.onlyChangeData ? this.onlyChangeData(changes) : Object.keys(changes).length === 1 && !!changes.data;
    if (isOnlyChangeData) {
      this.changeData();
      return;
    }
    if (!this.chart || !this.repaint) return;
    this.ngZone.runOutsideAngular(() => {
      this.destroyChart().install();
    });
  }

  @ZoneOutside()
  protected destroyChart(): this {
    if (this._chart) {
      this._chart.destroy();
    }
    return this;
  }

  ngOnDestroy(): void {
    if (this.resize$) {
      this.resize$.unsubscribe();
    }
    this.destroy$.next();
    this.destroy$.complete();
    this.destroyChart();
  }
}
