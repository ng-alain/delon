import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AdExceptionModule } from './exception.module';

describe('abc: exception', () => {
    let fixture: ComponentFixture<TestComponent>;
    let dl: DebugElement;
    let context: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ AdExceptionModule.forRoot() ],
            declarations: [ TestComponent ]
        });
        fixture = TestBed.createComponent(TestComponent);
        dl = fixture.debugElement;
        context = fixture.componentInstance;
        fixture.detectChanges();
    });

    [ 403, 404, 500 ].forEach((type: any) => {
        it(`#type=${type}`, () => {
            context.type = type;
            fixture.detectChanges();
            expect((dl.query(By.css('h1')).nativeElement as HTMLElement).innerText).toBe('' + type);
        });
    });

    it('should be custom actions', () => {
        expect(dl.queryAll(By.css('#action-edit')).length).toBe(1);
    });

    it('should be custom img&title&desc', () => {
        context.img = '1.svg';
        context.title = 'custom title';
        context.desc = 'custom desc';
        fixture.detectChanges();
        expect((dl.query(By.css('.img')).nativeElement as HTMLElement).style['background-image']).toContain(context.img);
        expect((dl.query(By.css('h1')).nativeElement as HTMLElement).innerText).toBe(context.title);
        expect((dl.query(By.css('.desc')).nativeElement as HTMLElement).innerText).toBe(context.desc);
    });
});

@Component({
    template: `
    <exception [type]="type" [img]="img" [title]="title" [desc]="desc">
        <button id="btn">查看详情</button>
        <ng-template #actions>
            <div id="action-edit">action-edit</div>
        </ng-template>
    </exception>
    `
})
class TestComponent {
    type: 403 | 404 | 500;
    img: string;
    title: string;
    desc: string;
}
