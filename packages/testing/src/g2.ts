import { DebugElement, isSignal, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import type { Chart, G2Spec } from '@antv/g2';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export const PageG2DataCount = 2;
export const PageG2Height = 100;

export class PageG2<T> {
  constructor(public fixture: ComponentFixture<T> | null = null) {}

  get dl(): DebugElement {
    return this.fixture!.debugElement;
  }

  get context(): T {
    return this.fixture!.componentInstance;
  }

  get comp(): NzSafeAny {
    const c = (this.context as NzSafeAny)['comp'];
    return isSignal(c) ? c() : c;
  }

  get chart(): Chart {
    return this.comp.chart;
  }

  /** 等待首次渲染完成并跑一次变更检测 */
  async ready(): Promise<void> {
    const comp = this.comp as NzSafeAny;
    const isBase = typeof comp?.loaded === 'function' && typeof comp?.ready?.subscribe === 'function';
    if (isBase) {
      if (!comp.loaded()) {
        await new Promise<void>((resolve, reject) => {
          const readyRef = comp.ready.subscribe(() => {
            readyRef?.unsubscribe?.();
            errorRef?.unsubscribe?.();
            resolve();
          });
          const errorRef = comp.error?.subscribe?.((err: unknown) => {
            readyRef?.unsubscribe?.();
            errorRef?.unsubscribe?.();
            reject(err);
          });
        });
      }
    } else {
      // 无 loaded() 信号的组件（如 chart-echarts 自行管理生命周期）退化为冲刷一个宏任务
      await new Promise(resolve => setTimeout(resolve, 0));
    }
    // 再让出一次事件循环：渲染后的副作用仍在后续微任务里，少了它断言会读到旧 spec
    if (isBase) {
      await new Promise(resolve => setTimeout(resolve, 0));
    }
    this.dc();
  }

  genComp(comp: Type<T>, dc: boolean = false): this {
    this.fixture = TestBed.createComponent(comp);
    if (dc) {
      this.dcFirst();
    }
    return this;
  }

  /** 同步版引导：仅创建组件并补一次 CD；随后必须 `await page.ready()` */
  dcFirst(): this {
    this.dc();
    return this;
  }

  async end(): Promise<void> {
    await this.ready();
  }

  dc(): this {
    this.fixture!.changeDetectorRef.markForCheck();
    this.fixture!.detectChanges();
    return this;
  }

  destroy(): void {
    this.comp.ngOnDestroy();
  }

  newData(data: NzSafeAny): this {
    const ctx = this.context as NzSafeAny;
    if (typeof ctx.data === 'function' && typeof ctx.data.set === 'function') {
      ctx.data.set(data);
    } else {
      ctx.data = data;
    }
    this.dc();
    return this;
  }

  getEls(cls: string): NodeListOf<HTMLElement> {
    return (this.dl.nativeElement as HTMLElement).querySelectorAll(cls);
  }

  getEl(cls: string): HTMLElement {
    return (this.dl.nativeElement as HTMLElement).querySelector(cls) as HTMLElement;
  }

  /** 断言当前生效的 v5 spec */
  expectSpec(assert: (spec: G2Spec) => void): this {
    assert(this.chart.options() as G2Spec);
    return this;
  }

  /** 断言 spec 顶层 `data` 的行数 */
  isDataCount(num: number): this {
    this.expectSpec(spec => {
      expect((spec as NzSafeAny).data).toBeDefined();
      expect((spec as NzSafeAny).data.length).toBe(num);
    });
    return this;
  }

  isCanvas(stauts: boolean = true): this {
    this.isExists('canvas', stauts);
    return this;
  }

  isText(cls: string, value: string): this {
    const el = this.getEl(cls);
    expect(el ? el.textContent!.trim() : '').toBe(value);
    return this;
  }

  isExists(cls: string, stauts: boolean = true): this {
    expect(this.getEl(cls) != null).toBe(stauts);
    return this;
  }

  /** 断言 spec 顶层字段 */
  checkSpec(key: string, value: NzSafeAny): this {
    this.expectSpec(spec => expect((spec as NzSafeAny)[key]).toEqual(value));
    return this;
  }
}

export async function checkDelay<T>(comp: Type<T>, page: PageG2<T> | null = null): Promise<void> {
  if (page == null) {
    page = new PageG2<T>().genComp(comp, false);
  }
  const context = page.context as NzSafeAny;
  if (typeof context.delay === 'undefined') {
    console.warn(`You muse be dinfed "delay" property in test component`);
    return;
  }
  if (typeof context.delay === 'function' && typeof context.delay.set === 'function') {
    context.delay.set(100);
  } else {
    context.delay = 100;
  }
  page.dc();

  const instance = page.comp;
  let settled = false;
  // 首帧完成的判据是 `(ready)`；销毁先于 delay 到期时它必须不 emit
  const readyRef = instance.ready?.subscribe?.(() => (settled = true));

  page.fixture!.destroy();
  expect(settled).toBe(false);

  // 跨过 100ms 的 delay，真实等待
  await new Promise(resolve => setTimeout(resolve, 200));
  expect(settled).toBe(false);
  readyRef?.unsubscribe?.();
}
