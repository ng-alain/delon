import { Component, signal, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { config } from 'rxjs';

import type * as Plyr from 'plyr';

import { createTestContext } from '@delon/testing';
import { LazyService } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { MediaComponent, MediaType } from './media.component';

class MockPlyr {
  source: NzSafeAny = {};
  on(_key: string, fn: () => void): void {
    fn();
  }
  destroy(): void {}
}

describe('abc: media', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    config.onUnhandledError = null;
  });
  let fixture: ComponentFixture<TestComponent>;
  // let dl: DebugElement;
  let context: TestComponent;
  let page: PageObject;
  let lazySrv: LazyService;
  const win: NzSafeAny = window;

  beforeEach(() => {
    ({ fixture, context } = createTestContext(TestComponent));
    page = new PageObject();
    lazySrv = TestBed.inject(LazyService);
    vi.spyOn(lazySrv, 'load').mockResolvedValue([]);
  });

  it('should be throw error when not found Plyr in window', async () => {
    let err: Error | undefined;
    // 组件在内部订阅回调里抛错，只能从 RxJS 未处理错误钩子取回
    config.onUnhandledError = e => (err = e as Error);
    await page.cd();
    await vi.advanceTimersByTimeAsync(1);
    expect(err?.message).toContain('No window.Plyr found');
  });

  describe('', () => {
    beforeEach(() => {
      win.Plyr = MockPlyr;
    });
    afterEach(() => {
      delete win.Plyr;
    });

    it('should be working', async () => {
      await page.cd();
      expect(page.player != null).toBe(true);
    });

    it('should be load once libs', async () => {
      await page.cd();
      expect(lazySrv.load).toHaveBeenCalledTimes(1);
      const fixture2 = TestBed.createComponent(TestComponent);
      fixture2.detectChanges();
      await vi.advanceTimersByTimeAsync(0);
      fixture2.detectChanges();
      expect(lazySrv.load).toHaveBeenCalledTimes(1);
    });

    it('should be used full source argument', async () => {
      await page.cd();
      expect(page.player.source.type).toBe('video');
      context.source.set({ type: 'audio', sources: [] });
      await page.cd();
      expect(page.player.source.type).toBe('audio');
    });

    it('#ready', async () => {
      vi.spyOn(context, 'ready').mockReturnValue(undefined);
      await page.cd();
      expect(context.ready).toHaveBeenCalled();
    });

    it('should be custom vedio dom', async () => {
      const fixture2 = TestBed.createComponent(TestCustomVideoComponent);
      fixture2.detectChanges();
      await vi.advanceTimersByTimeAsync(0);
      fixture2.detectChanges();
      expect(fixture2.componentInstance.comp['videoEl']!.dataset.type).toBe(`custom`);
    });
  });

  class PageObject {
    /** 组件初始化挂在 Promise 链上，只有异步推进定时器才会排空微任务 */
    async cd(time: number = 0): Promise<this> {
      fixture.detectChanges();
      await vi.advanceTimersByTimeAsync(time);
      fixture.detectChanges();
      return this;
    }

    get player(): NzSafeAny {
      return context.comp.player;
    }
  }
});

// NOTE: <span></span> 当前不管是否有禁用eslint标签都会导致强制自关闭
@Component({
  template: ` <media #comp [type]="type" [source]="source()" [options]="options" [delay]="delay" (ready)="ready()">
    <span></span>
  </media>`,
  imports: [MediaComponent]
})
class TestComponent {
  @ViewChild('comp') comp!: MediaComponent;
  type: MediaType = 'video';
  readonly source = signal<string | Plyr.SourceInfo>('1.mp4');
  options: NzSafeAny;
  delay = 0;
  ready(): void {}
}
@Component({
  template: `<media #comp [source]="source()"><video data-type="custom"></video></media>`,
  imports: [MediaComponent]
})
class TestCustomVideoComponent extends TestComponent {}
