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

import type { Chart, Types } from '@antv/g2';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { G2Service } from './g2.servicce';
import { G2Input, watchInputs } from './input';

@Directive()
export abstract class G2BaseComponent implements OnDestroy {
  protected readonly srv = inject(G2Service);
  protected readonly el: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);
  protected readonly destroyRef = inject(DestroyRef);

  /** 图表容器 */
  protected readonly node = viewChild.required<ElementRef<HTMLElement>>('container');

  readonly delay = input(0, { transform: numberAttribute });
  readonly repaint = input(true, { transform: booleanAttribute });
  readonly theme = input<string | Types.LooseObject>(this.srv.cog.theme!);
  readonly ready = output<Chart>();

  private readonly _loaded = signal(false);
  /** 是否已进入安装流程（模板据此切换骨架屏） */
  readonly loaded = this._loaded.asReadonly();

  protected _chart?: Chart;
  get chart(): Chart {
    return this._chart!;
  }
  get winG2(): NzSafeAny {
    return (window as NzSafeAny).G2;
  }

  /** 约定：名为 `data` 的输入即数据输入（全包唯一一处字符串） */
  private dataInput?: G2Input;
  private destroyed = false;

  constructor() {
    // ① 输入变更分发：等价旧 ngOnChanges + onlyChangeData
    watchInputs(this, (changed, inputs) => {
      this.dataInput ??= inputs.find(i => i.name === 'data');
      this.dispatchInputChanges(changed);
    });

    // ② G2 类库就绪后启动（常驻订阅；load() 幂等，故无需 filter 双保险）
    this.srv.notify.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.load());

    // ③ 首次渲染后引导；SSR 下不执行，故无需 platform.isBrowser 判断
    afterNextRender(() => {
      this.onInit();
      if (this.winG2) {
        this.load();
      } else {
        this.srv.libLoad();
      }
    });
  }

  private dispatchInputChanges(changed: ReadonlyArray<Signal<unknown>>): void {
    this.onInputChanges(changed);
    // 首次安装由 load() 负责；install() 末尾的 changeData() 会兜住此前的变更
    if (!this._chart) {
      return;
    }
    if (this.isDataOnly(changed)) {
      this.changeData();
      return;
    }
    if (!this.repaint()) {
      return;
    }
    this.destroyChart().install();
  }

  /** 输入变更前置钩子；等价旧 `onChanges(changes)` */
  protected onInputChanges(_changed: ReadonlyArray<Signal<unknown>>): void {}

  /**
   * 本次变更是否可以只调用 `changeData()` 而不重建图表。
   * 默认：变更集里只有名为 `data` 的输入 —— 等价旧 `onlyChangeData` 的默认实现。
   *
   * `Object.is` 与 `===` 对信号对象按引用比较完全等价；写成 `===` 会被
   * `@angular-eslint/no-uncalled-signals` 误判为「忘记调用信号」。
   */
  protected isDataOnly(changed: ReadonlyArray<Signal<unknown>>): boolean {
    const dataInput = this.dataInput?.signal;
    return !!dataInput && changed.length > 0 && changed.every(s => Object.is(s, dataInput));
  }

  /** 创建并渲染图表 */
  abstract install(): void;
  /** 仅数据变更时调用（G2 平滑过渡） */
  changeData(): void {}
  /** 等同旧 `ngOnInit`，但在首次渲染后调用 */
  onInit(): void {}

  /** 安装入口：幂等；delay 未到时组件已销毁则不会安装 */
  private load(): void {
    if (this._loaded()) {
      return;
    }
    this._loaded.set(true);
    // 此处用 zone 补丁的 setTimeout 而非 rxjs timer：afterNextRender 回调可能落在测试的
    // fakeAsync 区之外，rxjs 的 asyncScheduler 不经过 zone 补丁，flush() 便不会触发安装
    setTimeout(() => {
      if (this.destroyed) {
        return;
      }
      this.install();
    }, this.delay());
  }

  protected destroyChart(): this {
    this._chart?.destroy();
    return this;
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    this.destroyChart();
  }
}
