import { Component, DebugElement, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AdStandardFormRowModule } from './standard-form-row.module';
import { StandardFormRowComponent } from './standard-form-row.component';

describe('abc: standard-form-row', () => {
    let fixture: ComponentFixture<TestComponent>;
    let dl: DebugElement;
    let context: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ AdStandardFormRowModule.forRoot() ],
            declarations: [ TestComponent ]
        });
        fixture = TestBed.createComponent(TestComponent);
        dl = fixture.debugElement;
        context = fixture.componentInstance;
        fixture.detectChanges();
    });

    function isExists(cls: string, stauts: boolean = true) {
        if (stauts)
            expect(dl.query(By.css(cls))).not.toBeNull();
        else
            expect(dl.query(By.css(cls))).toBeNull();
    }

    describe('#title', () => {
        it('with string', () => {
            isExists('.label');
        });
        it('with null', () => {
            context.title = null;
            fixture.detectChanges();
            isExists('.label', false);
        });
    });

    describe('#block', () => {
        it('with true', () => {
            context.block = true;
            fixture.detectChanges();
            isExists('.block');
        });
        it('with false', () => {
            context.block = false;
            fixture.detectChanges();
            isExists('.block', false);
        });
    });

    describe('#last', () => {
        it('with true', () => {
            context.last = true;
            fixture.detectChanges();
            isExists('.last');
        });
        it('with false', () => {
            context.last = false;
            fixture.detectChanges();
            isExists('.last', false);
        });
    });

    describe('#grid', () => {
        it('with true', () => {
            context.grid = true;
            fixture.detectChanges();
            isExists('.grid');
        });
        it('with false', () => {
            context.grid = false;
            fixture.detectChanges();
            isExists('.grid', false);
        });
    });
});

@Component({
    template: `
    <standard-form-row
        [title]="title"
        [block]="block"
        [last]="last"
        [grid]="grid">
    头像
    </standard-form-row>
    `
})
class TestComponent {
    @ViewChild('comp') comp: StandardFormRowComponent;
    title = '所属类目';
    block: boolean;
    last: boolean;
    grid: boolean;
}
