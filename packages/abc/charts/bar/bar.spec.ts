import { Component, DebugElement, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AdG2BarModule } from './bar.module';
import { G2BarComponent } from './bar.component';

xdescribe('abc: bar', () => {
    let fixture: ComponentFixture<TestComponent>;
    let dl: DebugElement;
    let context: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ AdG2BarModule.forRoot() ],
            declarations: [ TestComponent ]
        });
        fixture = TestBed.createComponent(TestComponent);
        dl = fixture.debugElement;
        context = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => context.comp.ngOnDestroy());

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

    describe('#title', () => {
        it('with string', () => {
            isText('h4', context.title);
        });
        it('with template', () => {
            context.title = context.titleTpl;
            fixture.detectChanges();
            isExists('#titleTpl');
        });
    });

    it(`won't render when invalid data`, () => {
        spyOn(G2, 'Chart');
        context.data = null;
        fixture.detectChanges();
        expect(G2.Chart).not.toHaveBeenCalled();
    });
});

@Component({
    template: `
    <bar #comp
        [height]="height"
        [title]="title"
        [padding]="padding"
        [data]="data"
        [autoLabel]="autoLabel"></bar>
    <ng-template #titleTpl><p id="titleTpl">titleTpl</p></ng-template>
    `
})
class TestComponent implements OnInit {
    @ViewChild('comp') comp: G2BarComponent;
    data: any[] = [];
    ngOnInit(): void {
        for (let i = 0; i < 12; i += 1) {
            this.data.push({
                x: `${i + 1}月`,
                y: Math.floor(Math.random() * 1000) + 200
            });
        }
    }
    @ViewChild('titleTpl') titleTpl: TemplateRef<void>;
    title: string | TemplateRef<void> = 'title';
    height = 0;
    padding: number[];
    autoLabel = true;
}
