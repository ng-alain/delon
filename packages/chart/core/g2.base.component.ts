import {
  DestroyRef,
  Directive,
  ElementRef,
  OnDestroy,
  Signal,
  afterNextRender,
  booleanAttribute,
  inject,
  input,
  numberAttribute,
  output,
  signal,
  viewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { timer } from 'rxjs';

import { type Chart, type G2Spec, ChartEvent } from '@antv/g2';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { G2Service } from './g2.servicce';
import { G2Input, watchInputs } from './input';

@Directive()
export abstract class G2BaseComponent implements OnDestroy {
  protected readonly srv = inject(G2Service);
  protected readonly el = inject(ElementRef<HTMLElement>);
  protected readonly destroyRef = inject(DestroyRef);

  protected readonly node = viewChild.required<ElementRef<HTMLElement>>('container');

  readonly delay = input(0, { transform: numberAttribute });
  readonly repaint = input(true, { transform: booleanAttribute });
  readonly theme = input<string | Record<string, unknown>>(this.srv.cog.theme ?? {});
  /** 首帧渲染完成后 emit 一次 */
  readonly ready = output<Chart>();
  /** 渲染失败（含未加载 G2、`buildSpec()` 抛错） */
  readonly error = output<unknown>();

  private readonly _loaded = signal(false);
  readonly loaded = this._loaded.asReadonly();

  protected _chart?: Chart;
  get chart(): Chart {
    return this._chart!;
  }
  get winG2(): NzSafeAny {
    return (window as NzSafeAny).G2;
  }

  /** 约定：名为 `data` 的输入即数据输入 */
  private dataInput?: G2Input;
  private destroyed = false;
  private installed = false;

  private readySettled = false;

  /** 串行链：所有 v5 调用串行执行，保证不交错 */
  private pending: Promise<void> = Promise.resolve();
  /** 帧序号：超过当前值的帧一律丢弃 */
  private epoch = 0;

  constructor() {
    watchInputs(this, (changed, inputs) => {
      this.dataInput ??= inputs.find(i => i.name === 'data');
      this.dispatchInputChanges(changed);
    });

    this.srv.notify.pipe(takeUntilDestroyed()).subscribe(() => this.load());

    afterNextRender(() => {
      if (this.winG2) {
        this.load();
      } else {
        this.srv.libLoad();
      }
    });
  }

  changeData(): void {
    if (!this._chart) {
      return;
    }
    void this.applyData();
  }

  /** 组件声明的 v5 spec */
  protected buildSpec(): G2Spec {
    return {};
  }

  protected chartOptions(): G2Spec {
    return { container: this.containerOf(), autoFit: true };
  }

  protected containerOf(): HTMLElement {
    return this.el.nativeElement;
  }

  protected dataOf(): unknown {
    return this.dataInput?.signal();
  }

  protected afterCreate(_chart: Chart): void {}

  protected onRendered(): void {}

  protected onDataChange(): void {}

  protected onInputChanges(_changed: ReadonlyArray<Signal<unknown>>): void {}

  /** 本次变更是否可以只调用 `changeData()` 而不重下 spec；默认仅名为 `data` 的输入 */
  protected isDataOnly(changed: ReadonlyArray<Signal<unknown>>): boolean {
    const dataInput = this.dataInput?.signal;
    return !!dataInput && changed.length > 0 && changed.every(s => Object.is(s, dataInput));
  }

  protected repaintSpec(): Promise<void> {
    return this.applySpec(this.buildSpec());
  }

  private dispatchInputChanges(changed: ReadonlyArray<Signal<unknown>>): void {
    this.onInputChanges(changed);
    if (!this._chart) {
      return;
    }
    if (this.isDataOnly(changed)) {
      void this.applyData();
      return;
    }
    if (!this.repaint()) {
      return;
    }
    void this.repaintSpec();
  }

  /** 安装入口：幂等；delay 未到时组件已销毁则不会安装 */
  private load(): void {
    if (this.installed) {
      return;
    }
    this.installed = true;
    timer(this.delay())
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        if (this.destroyed) {
          return;
        }
        if (!this.winG2) {
          this.error.emit(new Error('[chart] G2 is not loaded'));
          return;
        }
        this.install();
      });
  }

  /** 安装入口：默认创建 v5 Chart 并应用 spec；自行管理图表的组件可覆盖本方法 */
  protected install(): void {
    const spec = this.buildSpec();
    const chart: Chart = (this._chart = new this.winG2.Chart(this.chartOptions()));
    chart.on(ChartEvent.AFTER_RENDER, () => this.settleReady(chart));
    this.afterCreate(chart);
    void this.applySpec(spec);
  }

  /** 标记首次渲染完成（收起骨架屏）；覆盖 `install()` 的组件需自行调用 */
  protected markLoaded(): void {
    this._loaded.set(true);
  }

  private settleReady(chart: Chart): void {
    if (this.readySettled || this.destroyed) {
      return;
    }
    this.readySettled = true;
    this.markLoaded();
    this.ready.emit(chart);
  }

  private applySpec(spec: G2Spec): Promise<void> {
    const epoch = ++this.epoch;
    const chart = this._chart!;
    return this.enqueue(async () => {
      chart.options(spec);
      await chart.render();
    })
      .then(() => {
        if (this.destroyed || epoch !== this.epoch) {
          return;
        }
        this.onRendered();
      })
      .catch((err: unknown) => {
        if (this.destroyed) {
          return;
        }
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          console.error('[chart] render failed', err);
        }
        this.error.emit(err);
      });
  }

  private async applyData(): Promise<void> {
    const data = this.dataOf();
    if (data == null) {
      return;
    }
    try {
      await this.enqueue(async () => {
        await this._chart!.changeData(data);
      });
    } catch (err) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this.destroyed) {
          console.error('[chart] changeData failed', err);
        }
      }
      // 失败时不执行副作用（图例重建等）
      return;
    }
    if (this.destroyed) {
      return;
    }
    this.onDataChange();
  }

  private enqueue(task: () => Promise<void>): Promise<void> {
    const next = this.pending.then(() => {
      if (this.destroyed) {
        return;
      }
      return task();
    });
    this.pending = next.catch(() => undefined);
    return next;
  }

  ngOnDestroy(): void {
    if (this.destroyed) {
      return;
    }
    this.destroyed = true;
    this.epoch++;
    this.readySettled = true;
    void this.pending.then(() => {
      this._chart?.destroy();
      this._chart = undefined;
    });
  }
}
