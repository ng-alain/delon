import { Platform } from '@angular/cdk/platform';
import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  booleanAttribute,
  inject,
  numberAttribute
} from '@angular/core';
import { Subject, Subscription, filter, takeUntil } from 'rxjs';

import type { Chart, Types } from '@antv/g2';

import { ZoneOutside } from '@delon/util/decorator';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { G2Service } from './g2.servicce';

@Directive()
export abstract class G2BaseComponent implements OnInit, OnChanges, OnDestroy {
  protected readonly srv = inject(G2Service);
  protected readonly el: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);
  protected readonly ngZone = inject(NgZone);
  protected readonly platform = inject(Platform);
  protected readonly cdr = inject(ChangeDetectorRef);

  get chart(): Chart {
    return this._chart;
  }

  get winG2(): NzSafeAny {
    return (window as NzSafeAny).G2;
  }

  constructor() {
    this.theme = this.srv.cog.theme!;
    this.srv.notify
      .pipe(
        takeUntil(this.destroy$),
        filter(() => !this.loaded)
      )
      .subscribe(() => this.load());
  }
  @Input({ transform: booleanAttribute }) repaint = true;

  @ViewChild('container', { static: true }) protected node!: ElementRef;
  protected resize$?: Subscription;
  protected destroy$ = new Subject<void>();
  protected _chart!: Chart;
  loaded = false;

  @Input({ transform: numberAttribute }) delay = 0;
  @Input() theme: string | Types.LooseObject;
  @Output() readonly ready = new EventEmitter<Chart>();

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
    if (this.winG2) {
      this.load();
    } else {
      this.srv.libLoad();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onChanges(changes);

    const isOnlyChangeData = this.onlyChangeData
      ? this.onlyChangeData(changes)
      : Object.keys(changes).length === 1 && !!changes.data;
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
