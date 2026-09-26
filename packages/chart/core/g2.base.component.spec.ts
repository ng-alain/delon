import { Component, input } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import type { Chart, G2Spec } from '@antv/g2';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { G2BaseComponent } from './g2.base.component';

@Component({
  selector: 'g2-probe',
  template: `<div #container></div>`,
  standalone: true
})
class ProbeComponent extends G2BaseComponent {
  readonly data = input<number[]>([1]);
  protected buildSpec(): G2Spec {
    return { type: 'view', data: this.data() } as G2Spec;
  }
  override onRendered(): void {
    this.renderedCount++;
  }
  renderedCount = 0;
  protected override dataOf(): unknown {
    return this.data();
  }
  /** 测试入口：`repaintSpec()` 是 `protected`，子类公开转发以驱动连续两帧场景 */
  async repaintForTest(): Promise<void> {
    await this.repaintSpec();
  }
}

interface FakeG2 {
  created: number;
  renders: number;
  optionsCalls: number;
  changeDatas: unknown[];
  destroys: number;
  lastSpec?: G2Spec;
  fail: boolean;
  /** 接下来多少次 `render()` 挂起，直到 `releases` 里的回调被手动调用 */
  gates: number;
  releases: Array<() => void>;
}

function installFakeG2(): FakeG2 {
  const state: FakeG2 = {
    created: 0,
    renders: 0,
    optionsCalls: 0,
    changeDatas: [],
    destroys: 0,
    fail: false,
    gates: 0,
    releases: []
  };
  (window as NzSafeAny).G2 = {
    Chart: class {
      private readonly handlers = new Map<string, Array<() => void>>();

      constructor() {
        state.created++;
      }
      options(spec: G2Spec): void {
        state.optionsCalls++;
        state.lastSpec = spec;
      }
      on(event: string, cb: () => void): void {
        const list = this.handlers.get(event) ?? [];
        list.push(cb);
        this.handlers.set(event, list);
      }
      async render(): Promise<void> {
        state.renders++;
        if (state.fail) {
          throw new Error('boom');
        }
        if (state.gates > 0) {
          state.gates--;
          await new Promise<void>(resolve => {
            state.releases.push(resolve);
          });
        }
        // 与真实 G2 一致：AFTER_RENDER 与 `render()` 的 resolve 同一刻发出
        for (const cb of this.handlers.get('afterrender') ?? []) {
          cb();
        }
      }
      async changeData(data: unknown): Promise<void> {
        state.changeDatas.push(data);
      }
      destroy(): void {
        state.destroys++;
      }
    }
  };
  return state;
}

/** 等待串行链推进到目标状态（v5 渲染是异步的，本 spec 只能靠真实 Promise 推进） */
async function waitFor(predicate: () => boolean, timeoutMs = 200): Promise<void> {
  await vi.waitFor(() => expect(predicate()).toBe(true), { timeout: timeoutMs, interval: 1 });
}

function releaseOneRender(fake: FakeG2): void {
  const release = fake.releases.shift();
  if (release) {
    release();
  }
}

/** 测试侧的「等待首帧」助手：以 `(ready)` / `(error)` 两个 output 重建等待语义 */
function waitReady(comp: NzSafeAny, timeoutMs = 500): Promise<Chart> {
  return new Promise<Chart>((resolve, reject) => {
    if (comp.loaded()) {
      resolve(comp.chart);
      return;
    }
    let readyRef: { unsubscribe(): void } | null = null;
    let errorRef: { unsubscribe(): void } | null = null;
    const cleanup = (): void => {
      clearTimeout(timer);
      readyRef?.unsubscribe();
      errorRef?.unsubscribe();
    };
    const timer = setTimeout(() => {
      cleanup();
      reject(new Error('[spec] waitReady timeout'));
    }, timeoutMs);
    readyRef = comp.ready.subscribe((chart: Chart) => {
      cleanup();
      // `ready` 先于渲染后的微任务发出；让出一个宏任务，避免断言抢在 epoch 推进之前
      setTimeout(() => resolve(chart), 0);
    });
    errorRef = comp.error.subscribe((err: unknown) => {
      cleanup();
      reject(err);
    });
  });
}

describe('chart: G2BaseComponent async lifecycle', () => {
  let state: FakeG2;
  /** 进入本文件前的真实 `window.G2`；afterEach 必须恢复而非 delete，否则后续 spec 无法引导 */
  let savedG2: unknown;

  beforeEach(() => {
    savedG2 = (window as NzSafeAny).G2;
    state = installFakeG2();
    TestBed.configureTestingModule({ imports: [ProbeComponent] });
  });

  afterEach(() => {
    if (savedG2 === undefined) {
      delete (window as NzSafeAny).G2;
    } else {
      (window as NzSafeAny).G2 = savedG2;
    }
    TestBed.resetTestingModule();
  });

  it('should emit ready after the first render and flip loaded', async () => {
    const fixture = TestBed.createComponent(ProbeComponent);
    fixture.detectChanges();
    const chart = await waitReady(fixture.componentInstance);
    expect(state.renders).toBe(1);
    expect(chart).toBeDefined();
    expect(fixture.componentInstance.loaded()).toBe(true);
    expect(fixture.componentInstance.renderedCount).toBe(1);
    fixture.destroy();
  });

  it('should not emit ready/error when destroyed before the first render', async () => {
    vi.useFakeTimers();
    const fixture = TestBed.createComponent(ProbeComponent);
    fixture.detectChanges();
    let emitted = 0;
    fixture.componentInstance.ready.subscribe(() => (emitted += 1));
    fixture.componentInstance.error.subscribe(() => (emitted += 1));
    fixture.destroy();
    await vi.advanceTimersByTimeAsync(50);
    expect(state.created).toBe(0);
    expect(emitted).toBe(0);
    expect(fixture.componentInstance.loaded()).toBe(false);
    vi.useRealTimers();
  });

  it('should route data-only changes to changeData', async () => {
    const fixture = TestBed.createComponent(ProbeComponent);
    fixture.detectChanges();
    await waitReady(fixture.componentInstance);
    fixture.componentRef.setInput('data', [2, 3]);
    fixture.detectChanges();
    await vi.waitFor(() => expect(state.changeDatas).toEqual([[2, 3]]));
    fixture.destroy();
  });

  it('should not leave unhandled rejection when render fails', async () => {
    state.fail = true;
    const errorSpy = vi.spyOn(console, 'error').mockReturnValue(undefined);
    const fixture = TestBed.createComponent(ProbeComponent);
    fixture.detectChanges();
    await vi.waitFor(() => expect(errorSpy).toHaveBeenCalled());
    expect(fixture.componentInstance.loaded()).toBe(false);
    fixture.destroy();
  });

  it('should emit ready exactly once, after the first render resolves', async () => {
    const fixture = TestBed.createComponent(ProbeComponent);
    fixture.detectChanges();
    const emitted: Chart[] = [];
    fixture.componentInstance.ready.subscribe(chart => emitted.push(chart));

    const first = await waitReady(fixture.componentInstance);
    expect(emitted.length).toBe(1);
    expect(emitted[0]).toBe(first);
    expect(fixture.componentInstance.chart).toBe(first);
    expect(state.created).toBe(1);
    expect(state.optionsCalls).toBe(1);
    expect(state.lastSpec).toEqual({ type: 'view', data: [1] } as G2Spec);
    expect(fixture.componentInstance.renderedCount).toBe(1);

    // 每次成功应用 spec 都会走渲染后副作用，但 `ready` 只在首次结算时 emit 一次
    await fixture.componentInstance.repaintForTest();
    expect(fixture.componentInstance.renderedCount).toBe(2);
    expect(state.optionsCalls).toBe(2);
    expect(emitted.length).toBe(1);
    fixture.destroy();
  });

  it('should emit error when the first render fails', async () => {
    state.fail = true;
    const errorSpy = vi.spyOn(console, 'error').mockReturnValue(undefined);
    const fixture = TestBed.createComponent(ProbeComponent);
    const received: unknown[] = [];
    fixture.componentInstance.error.subscribe((err: unknown) => received.push(err));
    let readyEmitted = 0;
    fixture.componentInstance.ready.subscribe(() => (readyEmitted += 1));
    fixture.detectChanges();

    await vi.waitFor(() => expect(received.length).toBe(1));
    expect(received[0]).toBeInstanceOf(Error);
    expect(readyEmitted).toBe(0);
    expect(fixture.componentInstance.loaded()).toBe(false);
    expect(errorSpy).toHaveBeenCalled();
    fixture.destroy();
  });

  it('should defer destroy() until the in-flight render settles', async () => {
    state.gates = 1;
    const fixture = TestBed.createComponent(ProbeComponent);
    let readyEmitted = 0;
    fixture.componentInstance.ready.subscribe(() => (readyEmitted += 1));
    fixture.detectChanges();
    await waitFor(() => state.releases.length === 1);

    expect(state.created).toBe(1);
    expect(state.renders).toBe(1);
    expect(state.destroys).toBe(0);

    fixture.destroy();
    vi.useFakeTimers();
    await vi.advanceTimersByTimeAsync(0);
    vi.useRealTimers();
    expect(state.destroys).toBe(0);
    expect(readyEmitted).toBe(0);

    releaseOneRender(state);
    await waitFor(() => state.destroys === 1);
    expect(state.destroys).toBe(1);
    expect(readyEmitted).toBe(0);
  });

  it('should discard a stale frame when two spec applications are in flight', async () => {
    const fixture = TestBed.createComponent(ProbeComponent);
    fixture.detectChanges();
    const emitted: Chart[] = [];
    fixture.componentInstance.ready.subscribe(chart => emitted.push(chart));
    await waitReady(fixture.componentInstance);
    expect(emitted.length).toBe(1);
    const optionsBefore = state.optionsCalls;

    state.gates = 1;
    const first = fixture.componentInstance.repaintForTest();
    const second = fixture.componentInstance.repaintForTest();
    await waitFor(() => state.releases.length === 1);
    expect(state.optionsCalls).toBe(optionsBefore + 1);

    releaseOneRender(state);
    await Promise.all([first, second]);

    expect(state.optionsCalls).toBe(optionsBefore + 2);
    expect(state.renders).toBe(3);
    expect(fixture.componentInstance.loaded()).toBe(true);
    expect(emitted.length).toBe(1);
    // 过期帧不得触发渲染后副作用：首次渲染 1 次 + 覆盖它的第二帧 1 次 = 2
    expect(fixture.componentInstance.renderedCount).toBe(2);
    fixture.destroy();
  });

  it('should not re-apply the spec when repaint is false', async () => {
    const fixture = TestBed.createComponent(ProbeComponent);
    fixture.detectChanges();
    await waitReady(fixture.componentInstance);
    expect(state.optionsCalls).toBe(1);

    fixture.componentRef.setInput('repaint', false);
    fixture.detectChanges();
    fixture.componentRef.setInput('theme', 'dark');
    fixture.detectChanges();
    vi.useFakeTimers();
    await vi.advanceTimersByTimeAsync(10);
    vi.useRealTimers();
    expect(state.optionsCalls).toBe(1);
    expect(state.renders).toBe(1);
    fixture.destroy();
  });
});
