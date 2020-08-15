import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createTestContext } from '@delon/testing';
import { DelonLocaleModule, DelonLocaleService, en_US, zh_CN } from '@delon/theme';
import { NoticeIconComponent } from './notice-icon.component';
import { NoticeIconModule } from './notice-icon.module';
import { NoticeItem } from './notice-icon.types';

const CLICKTIME = 151;

describe('abc: notice-icon', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, NoticeIconModule, HttpClientTestingModule, DelonLocaleModule],
      declarations: [TestComponent],
    });
    ({ fixture, dl, context } = createTestContext(TestComponent));
  });

  afterEach(() => {
    context.comp.ngOnDestroy();
    const el = document.querySelector('.cdk-overlay-container');
    if (el) {
      el.innerHTML = ``;
    }
  });

  describe('when not data', () => {
    beforeEach(() => (context.data = []));
    it('should be count', fakeAsync(() => {
      context.count = 5;
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      const cur = dl.query(By.css('.ant-scroll-number-only .current')).nativeElement as HTMLElement;
      expect(+cur.textContent!.trim()).toBe(context.count);
      discardPeriodicTasks();
    }));
  });

  describe('when has data', () => {
    beforeEach(() => fixture.detectChanges());

    describe('should be show dropdown', () => {
      it('via popoverVisible property', () => {
        spyOn(context, 'popupVisibleChange');
        expect(context.comp.popoverVisible).toBe(false);
        context.popoverVisible = true;
        fixture.detectChanges();
        expect(context.comp.popoverVisible).toBe(true);
      });
      it('via click', done => {
        expect(context.popoverVisible).toBeUndefined();
        (dl.query(By.css('.ant-badge')).nativeElement as HTMLElement).click();
        fixture.detectChanges();
        setTimeout(() => {
          expect(context.popoverVisible).toBe(true);
          done();
        }, CLICKTIME);
      });
    });
    it('should be control loading in visible popover', done => {
      context.loading = true;
      context.popoverVisible = true;
      fixture.detectChanges();
      setTimeout(() => {
        const el = document.querySelector('.ant-spin-container') as HTMLElement;
        expect(el.style.display).toBe('');
        done();
      }, CLICKTIME);
    });
    it('should be select item', done => {
      spyOn(context, 'select');
      context.popoverVisible = true;
      fixture.detectChanges();
      setTimeout(() => {
        expect(context.select).not.toHaveBeenCalled();
        (document.querySelector('nz-list-item')! as HTMLElement).click();
        fixture.detectChanges();
        expect(context.select).toHaveBeenCalled();
        done();
      }, CLICKTIME);
    });
    it('should be clear', done => {
      spyOn(context, 'clear');
      context.popoverVisible = true;
      fixture.detectChanges();
      setTimeout(() => {
        expect(context.clear).not.toHaveBeenCalled();
        (document.querySelector('.notice-icon__clear')! as HTMLElement).click();
        fixture.detectChanges();
        expect(context.clear).toHaveBeenCalled();
        done();
      }, CLICKTIME);
    });
  });

  it('#i18n', done => {
    context.popoverVisible = true;
    context.data = [{ title: 'a1', list: [] }];
    fixture.detectChanges();
    setTimeout(() => {
      const a = document.querySelector('.notice-icon__notfound')! as HTMLElement;
      expect(a.innerText).toBe(zh_CN.noticeIcon.emptyText);
      const srv = TestBed.inject<DelonLocaleService>(DelonLocaleService) as DelonLocaleService;
      srv.setLocale(en_US);
      fixture.detectChanges();
      expect(a.innerText).toBe(en_US.noticeIcon.emptyText);
      done();
    }, CLICKTIME);
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
  @ViewChild('comp', { static: true })
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
  select(): void {}
  clear(): void {}
  popupVisibleChange(): void {}
}
