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
import { InputNumber, NumberInput, ZoneOutside } from '@delon/util/decorator';
import { Subject, Subscription } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { G2Service } from './g2.servicce';

@Directive()
export abstract class G2BaseComponent implements OnInit, OnChanges, OnDestroy {
  static ngAcceptInputType_delay: NumberInput;

  @ViewChild('container', { static: true }) protected node: ElementRef;
  protected resize$: Subscription;
  protected destroy$ = new Subject<void>();
  protected _chart: Chart;
  loaded = false;

  @Input() @InputNumber() delay = 0;
  @Input() theme: string | Types.LooseObject;

  get chart(): Chart {
    return this._chart;
  }

  abstract install(): void;

  abstract attachChart(): void;

  onInit(): void {}

  onChanges(_changes: SimpleChanges): void {}

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
    this.ngZone.runOutsideAngular(() => this.attachChart());
  }

  @ZoneOutside()
  protected destroyChart(): void {
    if (this._chart) {
      this._chart.destroy();
    }
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
