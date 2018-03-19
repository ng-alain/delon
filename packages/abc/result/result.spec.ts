import { Component, DebugElement, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AdResultModule } from './result.module';
import { ResultComponent } from './result.component';

describe('abc: result', () => {
    let fixture: ComponentFixture<TestComponent>;
    let dl: DebugElement;
    let context: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ AdResultModule.forRoot() ],
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

    describe('#type', () => {
        it('width success', () => {
            context.type = 'success';
            fixture.detectChanges();
            isExists('.anticon-check-circle');
        });
        it('width error', () => {
            context.type = 'error';
            fixture.detectChanges();
            isExists('.anticon-close-circle');
        });
        it('width custom', () => {
            context.type = 'custom';
            fixture.detectChanges();
            isExists('.anticon-custom');
        });
    });

    describe('#title', () => {
        it('with string', () => {
            isText('.title', context.title);
        });
        it('with template', () => {
            context.title = context.titleTpl;
            fixture.detectChanges();
            isExists('#titleTpl');
        });
    });

    describe('#description', () => {
        it('with string', () => {
            isText('.description', context.description);
        });
        it('with template', () => {
            context.description = context.descriptionTpl;
            fixture.detectChanges();
            isExists('#descriptionTpl');
        });
    });

    describe('#extra', () => {
        it('with string', () => {
            isText('.extra', context.extra);
        });
        it('with template', () => {
            context.extra = context.extraTpl;
            fixture.detectChanges();
            isExists('#extraTpl');
        });
    });
});

@Component({
    template: `
    <result #comp
        [type]="type"
        [title]="title"
        [description]="description"
        [extra]="extra"></result>
    <ng-template #titleTpl><p id="titleTpl">titleTpl</p></ng-template>
    <ng-template #descriptionTpl><p id="descriptionTpl">descriptionTpl</p></ng-template>
    <ng-template #extraTpl><p id="extraTpl">extraTpl</p></ng-template>
    `
})
class TestComponent {
    @ViewChild('comp') comp: ResultComponent;
    type = 'custom';
    @ViewChild('titleTpl') titleTpl: TemplateRef<void>;
    @ViewChild('descriptionTpl') descriptionTpl: TemplateRef<void>;
    @ViewChild('extraTpl') extraTpl: TemplateRef<void>;
    title: string | TemplateRef<void> = 'title';
    description: string | TemplateRef<void> = 'description';
    extra: string | TemplateRef<void> = 'extra';
}
