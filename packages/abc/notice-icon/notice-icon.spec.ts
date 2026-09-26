import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Component, DebugElement, signal, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { cleanCdkOverlayHtml, createTestContext } from '@delon/testing';
import { DelonLocaleModule, DelonLocaleService, en_US, zh_CN } from '@delon/theme';

import { NoticeIconComponent } from './notice-icon.component';
import { NoticeIconSelect, NoticeItem } from './notice-icon.types';

const CLICKTIME = 151;

describe('abc: notice-icon', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DelonLocaleModule],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    ({ fixture, dl, context } = createTestContext(TestComponent));
  });

  afterEach(() => {
    cleanCdkOverlayHtml();
  });

  describe('when not data', () => {
    beforeEach(() => context.data.set([]));
    it('should be count', async () => {
      context.count.set(5);
      fixture.detectChanges();
      await vi.advanceTimersByTimeAsync(0);
      fixture.detectChanges();
      const cur = dl.query(By.css('.ant-scroll-number-only .current')).nativeElement as HTMLElement;
      expect(+cur.textContent!.trim()).toBe(context.count());
      vi.clearAllTimers();
    });
  });

  describe('when has data', () => {
    beforeEach(() => fixture.detectChanges());

    describe('should be show dropdown', () => {
      it('via popoverVisible property', () => {
        vi.spyOn(context, 'popupVisibleChange').mockReturnValue(undefined);
        expect(context.comp.popoverVisible()).toBe(false);
        context.popoverVisible.set(true);
        fixture.detectChanges();
        expect(context.comp.popoverVisible()).toBe(true);
      });
      it('via click', async () => {
        expect(context.popoverVisible()).toBeUndefined();
        (dl.query(By.css('.ant-badge')).nativeElement as HTMLElement).click();
        fixture.detectChanges();
        await vi.advanceTimersByTimeAsync(CLICKTIME);
        expect(context.popoverVisible()).toBe(true);
      });
    });
    it('should be control loading in visible popover', async () => {
      context.loading.set(true);
      context.comp.onVisibleChange(true);
      fixture.detectChanges();
      await vi.advanceTimersByTimeAsync(CLICKTIME);
      const el = document.querySelector('.ant-spin-container') as HTMLElement;
      expect(el.style.display).toBe('');
    });
    it('should be select item', async () => {
      vi.spyOn(context, 'select').mockReturnValue(undefined);
      context.comp.onVisibleChange(true);
      fixture.detectChanges();
      await vi.advanceTimersByTimeAsync(CLICKTIME);
      expect(context.select).not.toHaveBeenCalled();
      (document.querySelector('nz-list-item')! as HTMLElement).click();
      fixture.detectChanges();
      expect(context.select).toHaveBeenCalled();
    });
    it('should be clear', async () => {
      vi.spyOn(context, 'clear').mockReturnValue(undefined);
      context.comp.onVisibleChange(true);
      fixture.detectChanges();
      await vi.advanceTimersByTimeAsync(CLICKTIME);
      expect(context.clear).not.toHaveBeenCalled();
      (document.querySelector('.notice-icon__clear')! as HTMLElement).click();
      fixture.detectChanges();
      expect(context.clear).toHaveBeenCalled();
    });
    it('#centered', async () => {
      context.centered.set(true);
      context.comp.onVisibleChange(true);
      fixture.detectChanges();
      await vi.advanceTimersByTimeAsync(CLICKTIME);
      expect(document.querySelectorAll('.notice-icon__tab-left').length).toBe(0);
    });
  });

  it('#i18n', async () => {
    context.comp.onVisibleChange(true);
    context.data.set([{ title: 'a1', list: [] }]);
    fixture.detectChanges();
    await vi.advanceTimersByTimeAsync(CLICKTIME);
    const a = document.querySelector('.notice-icon__notfound')! as HTMLElement;
    expect(a.innerText).toBe(zh_CN.noticeIcon.emptyText);
    const srv = TestBed.inject<DelonLocaleService>(DelonLocaleService) as DelonLocaleService;
    srv.setLocale(en_US);
    fixture.detectChanges();
    expect(a.innerText).toBe(en_US.noticeIcon.emptyText);
  });
});

@Component({
  template: `
    <notice-icon
      #comp
      [data]="data()"
      [count]="count()"
      [loading]="loading()"
      [centered]="centered()"
      (select)="select($event)"
      (clear)="clear($event)"
      [(popoverVisible)]="popoverVisible"
      (popoverVisibleChange)="popupVisibleChange($event)"
    />
  `,
  imports: [NoticeIconComponent]
})
class TestComponent {
  @ViewChild('comp', { static: true })
  comp!: NoticeIconComponent;
  readonly data = signal<NoticeItem[]>([
    {
      title: 'test',
      list: [
        {
          id: '000000001',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
          title: '你收到了 14 份新周报',
          datetime: '7 个月前',
          type: '通知'
        },
        {
          id: '000000002',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
          title: '你推荐的 曲妮妮 已通过第三轮面试',
          datetime: '7 个月前',
          type: '通知'
        },
        {
          id: '000000003',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
          title: '这种模板可以区分多种通知类型',
          datetime: '7 个月前',
          read: true,
          type: '通知'
        },
        {
          id: '000000004',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
          title: '左侧图标用于区分不同的类型',
          datetime: '7 个月前',
          type: '通知'
        },
        {
          id: '000000005',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
          title: '内容不要超过两行字，超出时自动截断',
          datetime: '7 个月前',
          type: '通知'
        }
      ]
    }
  ]);
  readonly count = signal(10);
  readonly loading = signal(false);
  readonly centered = signal(false);
  readonly popoverVisible = signal<boolean | undefined>(undefined);
  select(_item: NoticeIconSelect): void {}
  clear(_title: string): void {}
  popupVisibleChange(_visible: boolean): void {}
}
