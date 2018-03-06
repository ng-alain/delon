import { Component, DebugElement, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AdTrendModule } from './trend.module';
import { TrendComponent } from './trend.component';

describe('abc: trend', () => {
    let fixture: ComponentFixture<TestComponent>;
    let dl: DebugElement;
    let context: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ AdTrendModule.forRoot() ],
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

    describe('#flag', () => {
        it('width up', () => {
            context.flag = 'up';
            fixture.detectChanges();
            isExists('.anticon-caret-up');
        });
        it('width down', () => {
            context.flag = 'down';
            fixture.detectChanges();
            isExists('.anticon-caret-down');
        });
    });

    describe('#colorful', () => {
        it('width true', () => {
            context.colorful = true;
            fixture.detectChanges();
            isExists('.grey', false);
        });
        it('width false', () => {
            context.colorful = false;
            fixture.detectChanges();
            isExists('.grey', true);
        });
    });
});

@Component({
    template: `
    <trend #comp
        [flag]="flag"
        [colorful]="colorful"></trend>`
})
class TestComponent {
    @ViewChild('comp') comp: TrendComponent;
    flag: 'up' | 'down';
    colorful: boolean;
}
