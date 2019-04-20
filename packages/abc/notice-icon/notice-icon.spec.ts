import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, DebugElement, Injector, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { configureTestSuite, createTestContext } from '@delon/testing';
import { en_US, zh_CN, DelonLocaleModule, DelonLocaleService } from '@delon/theme';

import { NoticeIconComponent } from './notice-icon.component';
import { NoticeIconModule } from './notice-icon.module';
import { NoticeItem } from './notice-icon.types';

describe('abc: notice-icon', () => {
  let injector: Injector;
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  configureTestSuite(() => {
    injector = TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, NoticeIconModule, HttpClientTestingModule, DelonLocaleModule],
      declarations: [TestComponent],
    });
  });

  beforeEach(() => ({ fixture, dl, context } = createTestContext(TestComponent)));

  afterEach(() => context.comp.ngOnDestroy());

  describe('when not data', () => {
    beforeEach(() => (context.data = []));
    it('should be count', done => {
      context.count = 5;
      fixture.detectChanges();
      const cur = dl.query(By.css('.ant-scroll-number-only .current')).nativeElement as HTMLElement;
      fixture.whenStable().then(() => {
        expect(+cur.textContent.trim()).toBe(context.count);
        done();
      });
    });
  });

  describe('when has data', () => {
    beforeEach(() => fixture.detectChanges());

    describe('should be show dropdown', () => {
      it('via popoverVisible property', done => {
        spyOn(context, 'popupVisibleChange');
        expect(context.comp.popoverVisible).toBe(false);
        context.popoverVisible = true;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(context.comp.popoverVisible).toBe(true);
          done();
        });
      });
      it('via click', done => {
        expect(context.popoverVisible).toBeUndefined();
        (dl.query(By.css('.ant-badge')).nativeElement as HTMLElement).click();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(context.popoverVisible).toBe(true);
          done();
        });
      });
    });
    it('should be control loading in visible popover', () => {
      context.loading = true;
      context.popoverVisible = true;
      fixture.detectChanges();
      const el = dl.query(By.css('.ant-spin-container')).nativeElement as HTMLElement;
      expect(el.style.display).toBe('');
    });
    it('should be select item', () => {
      spyOn(context, 'select');
      context.popoverVisible = true;
      fixture.detectChanges();
      expect(context.select).not.toHaveBeenCalled();
      (dl.query(By.css('nz-list-item')).nativeElement as HTMLElement).click();
      fixture.detectChanges();
      expect(context.select).toHaveBeenCalled();
    });
    it('should be clear', () => {
      spyOn(context, 'clear');
      context.popoverVisible = true;
      fixture.detectChanges();
      expect(context.clear).not.toHaveBeenCalled();
      (dl.query(By.css('.notice-icon__clear')).nativeElement as HTMLElement).click();
      fixture.detectChanges();
      expect(context.clear).toHaveBeenCalled();
    });
  });

  it('#i18n', () => {
    context.popoverVisible = true;
    context.data = [{ title: 'a1', list: [] }];
    fixture.detectChanges();
    const a = dl.query(By.css('.notice-icon__notfound')).nativeElement as HTMLElement;
    expect(a.innerText).toBe(zh_CN.noticeIcon.emptyText);
    injector.get(DelonLocaleService).setLocale(en_US);
    fixture.detectChanges();
    expect(a.innerText).toBe(en_US.noticeIcon.emptyText);
  });
});

@Component({
  template: `
    <notice-icon
      #comp
      [data]="data"
      [count]="count"
      [loading]="loading"
      (select)="select($event)"
      (clear)="clear($event)"
      [(popoverVisible)]="popoverVisible"
      (popoverVisibleChange)="popupVisibleChange($event)"
    ></notice-icon>
  `,
})
class TestComponent {
  @ViewChild('comp')
  comp: NoticeIconComponent;
  data: NoticeItem[] = [
    {
      title: 'test',
      list: [
        {
          id: '000000001',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
          title: '你收到了 14 份新周报',
          datetime: '7 个月前',
          type: '通知',
        },
        {
          id: '000000002',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
          title: '你推荐的 曲妮妮 已通过第三轮面试',
          datetime: '7 个月前',
          type: '通知',
        },
        {
          id: '000000003',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
          title: '这种模板可以区分多种通知类型',
          datetime: '7 个月前',
          read: true,
          type: '通知',
        },
        {
          id: '000000004',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
          title: '左侧图标用于区分不同的类型',
          datetime: '7 个月前',
          type: '通知',
        },
        {
          id: '000000005',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
          title: '内容不要超过两行字，超出时自动截断',
          datetime: '7 个月前',
          type: '通知',
        },
      ],
    },
  ];
  count = 10;
  loading = false;
  popoverVisible: boolean;
  select() {}
  clear() {}
  popupVisibleChange() {}
}
