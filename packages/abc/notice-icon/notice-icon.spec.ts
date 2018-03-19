import { Component, DebugElement, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AdNoticeIconModule } from './notice-icon.module';
import { NoticeIconComponent } from './notice-icon.component';
import { NoticeItem } from './interface';

describe('abc: notice-icon', () => {
    let fixture: ComponentFixture<TestComponent>;
    let dl: DebugElement;
    let context: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ NoopAnimationsModule, AdNoticeIconModule.forRoot() ],
            declarations: [ TestComponent ]
        });
        fixture = TestBed.createComponent(TestComponent);
        dl = fixture.debugElement;
        context = fixture.componentInstance;
        fixture.detectChanges();
    });

    function isText(cls: string, value: any) {
        const el = dl.query(By.css(cls)).nativeElement as HTMLElement;
        if (el) return el.innerText.trim();
        return '';
    }

    function isExists(cls: string, stauts: boolean = true) {
        if (stauts)
            expect(dl.query(By.css(cls))).not.toBeNull();
        else
            expect(dl.query(By.css(cls))).toBeNull();
    }

    describe('when not data', () => {
        beforeEach(() => context.data = []);
        it('should be count', () => {
            context.count = 5;
            fixture.detectChanges();
            const cur = dl.query(By.css('.ant-scroll-number-only .current')).nativeElement as HTMLElement;
            expect(+cur.innerText).toBe(context.count);
        });
    });

    describe('when has data', () => {
        it('should be popover list via popoverVisible property', () => {
            spyOn(context, 'popupVisibleChange');
            expect(context.popoverVisible).toBeUndefined();
            context.popoverVisible = true;
            fixture.detectChanges();
            expect(context.popoverVisible).toBe(true);
            expect(context.popupVisibleChange).toHaveBeenCalled();
        });
        it('should be popover list via click', () => {
            expect(context.popoverVisible).toBeUndefined();
            (dl.query(By.css('.item')).nativeElement as HTMLElement).click();
            fixture.detectChanges();
            expect(context.popoverVisible).toBe(true);
        });
        it('should be control loading in visible popover', () => {
            context.loading = true;
            context.popoverVisible = true;
            fixture.detectChanges();
            const el = dl.query(By.css('.ant-spin-container')).nativeElement as HTMLElement;
            expect(el.hidden).toBe(true);
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
            (dl.query(By.css('.clear')).nativeElement as HTMLElement).click();
            fixture.detectChanges();
            expect(context.clear).toHaveBeenCalled();
        });
    });
});

@Component({
    template: `
    <notice-icon #comp
        [data]="data"
        [count]="count"
        [loading]="loading"
        (select)="select($event)"
        (clear)="clear($event)"
        [(popoverVisible)]="popoverVisible"
        (popoverVisibleChange)="popupVisibleChange($event)"></notice-icon>
    `
})
class TestComponent {
    @ViewChild('comp') comp: NoticeIconComponent;
    data: NoticeItem[] = [
        {
            title: 'test',
            list: [ { 'id': '000000001', 'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png', 'title': '你收到了 14 份新周报', 'datetime': '7 个月前', 'type': '通知'}, {'id': '000000002', 'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png', 'title': '你推荐的 曲妮妮 已通过第三轮面试', 'datetime': '7 个月前', 'type': '通知'}, {'id': '000000003', 'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png', 'title': '这种模板可以区分多种通知类型', 'datetime': '7 个月前', 'read': true, 'type': '通知'}, {'id': '000000004', 'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png', 'title': '左侧图标用于区分不同的类型', 'datetime': '7 个月前', 'type': '通知'}, {'id': '000000005', 'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png', 'title': '内容不要超过两行字，超出时自动截断', 'datetime': '7 个月前', 'type': '通知'} ]
        }
    ];
    count = 10;
    loading = false;
    popoverVisible: boolean;
    select() {}
    clear() {}
    popupVisibleChange() {}
}
