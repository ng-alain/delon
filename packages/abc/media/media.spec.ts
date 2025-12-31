import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';

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
    spyOn(lazySrv, 'load').and.returnValue(Promise.resolve([]));
  });

  xit('should be throw error when not found Plyr in window', fakeAsync(() => {
    expect(() => page.cd().end()).toThrow();
  }));

  describe('', () => {
    beforeEach(() => (win.Plyr = MockPlyr));
    afterEach(() => delete win.Plyr);

    xit('should be working', fakeAsync(() => {
      page.cd();
      expect(page.player != null).toBe(true);
    }));

    xit('should be load once libs', fakeAsync(() => {
      page.cd();
      expect(lazySrv.load).toHaveBeenCalledTimes(1);
      const fixture2 = TestBed.createComponent(TestComponent);
      fixture2.detectChanges();
      tick();
      fixture2.detectChanges();
      expect(lazySrv.load).toHaveBeenCalledTimes(1);
    }));

    it('should be used full source argument', fakeAsync(() => {
      page.cd();
      expect(page.player.source.type).toBe('video');
      context.source = { type: 'audio', sources: [] };
      console.log('change', context.source);
      page.cd();
      expect(page.player.source.type).toBe('audio');
    }));

    xit('#ready', fakeAsync(() => {
      spyOn(context, 'ready');
      page.cd();
      expect(context.ready).toHaveBeenCalled();
    }));

    xit('should be custom vedio dom', fakeAsync(() => {
      const fixture2 = TestBed.createComponent(TestCustomVideoComponent);
      fixture2.detectChanges();
      tick();
      fixture2.detectChanges();
      expect(fixture2.componentInstance.comp['videoEl']!.dataset.type).toBe(`custom`);
    }));
  });

  class PageObject {
    cd(time: number = 0): this {
      fixture.detectChanges();
      tick(time);
      fixture.detectChanges();
      return this;
    }

    get player(): NzSafeAny {
      return context.comp.player;
    }

    end(): void {
      discardPeriodicTasks();
      flush();
    }
  }
});

// NOTE: <span></span> 当前不管是否有禁用eslint标签都会导致强制自关闭
@Component({
  template: ` <media #comp [type]="type" [source]="source" [options]="options" [delay]="delay" (ready)="ready()">
    <span></span>
  </media>`,
  imports: [MediaComponent]
})
class TestComponent {
  @ViewChild('comp') comp!: MediaComponent;
  type: MediaType = 'video';
  source: string | Plyr.SourceInfo = '1.mp4';
  options: NzSafeAny;
  delay = 0;
  ready(): void {}
}
@Component({
  template: `<media #comp [source]="source"><video data-type="custom"></video></media>`,
  imports: [MediaComponent]
})
class TestCustomVideoComponent extends TestComponent {}
