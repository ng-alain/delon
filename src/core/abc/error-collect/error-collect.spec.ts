import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { Component, DebugElement, Injector, OnInit, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NzFormModule, NzInputModule } from 'ng-zorro-antd';

import { AdErrorCollectModule } from './error-collect.module';
import { ErrorCollectComponent } from './error-collect.component';

describe('abc: error-collect', () => {
    let fixture: ComponentFixture<TestComponent>;
    let dl: DebugElement;
    let context: TestComponent;
    let injector: Injector;

    beforeEach(() => {
        injector = TestBed.configureTestingModule({
            imports: [ AdErrorCollectModule.forRoot(), ReactiveFormsModule, NzFormModule, NzInputModule ],
            declarations: [ TestComponent ]
        });
    });

    function getPropertiesAndCreate() {
        fixture = TestBed.createComponent(TestComponent);
        dl = fixture.debugElement;
        context = fixture.componentInstance;
        fixture.detectChanges();
    }

    afterEach(() => {
        if (context) context.comp.ngOnDestroy();
    });

    describe('[default]', () => {
        beforeEach(() => getPropertiesAndCreate());
        it('should be collect error', (done: () => void) => {
            setTimeout(() => {
                expect(context.comp.count).toBe(1);
                done();
            }, 21);
        });

        it('should be click go to first error element', (done: () => void) => {
            setTimeout(() => {
                expect(context.comp.count).toBe(1);
                const el = dl.query(By.css('.has-error')).nativeElement as HTMLElement;
                spyOn(el, 'scrollIntoView');
                expect(el.scrollIntoView).not.toHaveBeenCalled();
                (dl.query(By.css('error-collect')).nativeElement as HTMLElement).click();
                expect(el.scrollIntoView).toHaveBeenCalled();
                done();
            }, 21);
        });
    });

    it('should be not to error element when not errores', () => {
        TestBed.overrideTemplate(TestComponent, `<form [formGroup]="form"><error-collect #ec [freq]="freq"></error-collect></form>`);
        getPropertiesAndCreate();
        let count = 0;
        spyOnProperty(context.comp, 'offsetTop').and.callFake(() => {
            ++count;
            return 0;
        });
        expect(count).toBe(0);
        (dl.query(By.css('error-collect')).nativeElement as HTMLElement).click();
        expect(count).toBe(0);
    });

    it('should be throw [未找到有效 form 元素] if no form element', () => {
        expect(() => {
            TestBed.overrideTemplate(TestComponent, `<error-collect #ec [freq]="freq"></error-collect>`)
                   .createComponent(TestComponent)
                   .detectChanges();
        }).toThrowError('未找到有效 form 元素');
    });
});

@Component({
    template: `
    <form [formGroup]="form">
        <div nz-form-control [nzValidateStatus]="name">
            <nz-input formControlName="name"></nz-input>
        </div>
        <error-collect #ec [freq]="freq" [offsetTop]="offsetTop"></error-collect>
    </form>
    `
})
class TestComponent implements OnInit {
    freq = 20;
    offsetTop = 65 + 8 * 2;
    @ViewChild('ec') comp: ErrorCollectComponent;
    form: FormGroup;
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            name: [ null, Validators.required ]
        });
    }

    get name() { return this.form.controls.name; }

    ngOnInit(): void {
        this.name.markAsDirty();
    }
}
