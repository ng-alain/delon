import { Component, ViewChild, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { deepGet } from '@delon/abc';

import { SFSchema } from '../src/schema';
import { SFUISchema } from '../src/schema/ui';
import { SFButton } from '../src/interface';
import { ErrorData } from '../src/errors';
import { DelonFormModule } from '../src/module';
import { SFComponent } from '../src/sf.component';

export const SCHEMA = {
    user: <SFSchema>{
        properties: {
            name: {
                type: 'string'
            },
            pwd: {
                type: 'string'
            }
        },
        required: [ 'name', 'pwd' ]
    }
};

let fixture: ComponentFixture<TestFormComponent>;
let dl: DebugElement;
let context: TestFormComponent;
export function builder() {
    TestBed.configureTestingModule({
        imports: [ NoopAnimationsModule, DelonFormModule.forRoot() ],
        declarations: [ TestFormComponent ]
    });
    fixture = TestBed.createComponent(TestFormComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    spyOn(context, 'formChange');
    spyOn(context, 'formSubmit');
    spyOn(context, 'formReset');
    spyOn(context, 'formError');
    fixture.detectChanges();
    const page = new SFPage(context.comp);
    return {
        fixture,
        dl,
        context,
        page
    };
}

export class SFPage {
    constructor(private comp: SFComponent) {}

    getDl(cls: string): DebugElement {
        return dl.query(By.css(cls));
    }

    getEl(cls: string): HTMLElement {
        const el = this.getDl(cls);
        expect(el).not.toBeNull();
        return el.nativeElement as HTMLElement;
    }

    setValue(path: string, value: any): this {
        this.comp.rootProperty.searchProperty(path).widget.setValue(value);
        return this;
    }

    submit(result = true): this {
        this.getEl('.ant-btn-primary').click();
        if (result)
            expect(context.formSubmit).toHaveBeenCalled();
        else
            expect(context.formSubmit).not.toHaveBeenCalled();
        return this;
    }

    reset(result = true): this {
        this.getEl('.ant-btn-default').click();
        if (result)
            expect(context.formReset).toHaveBeenCalled();
        else
            expect(context.formReset).not.toHaveBeenCalled();
        return this;
    }

    isValid(result = true): this {
        this.submit(result);
        expect(this.comp.valid).toBe(result);
        return this;
    }

    add(): this {
        this.getEl('.add button').click();
        return this;
    }

    newSchema(schema: SFSchema, ui?: SFUISchema): this {
        context.schema = schema;
        if (typeof ui !== 'undefined') context.ui = ui;
        fixture.detectChanges();
        return this;
    }

    checkUI(path: string, propertyName: string, value: any): this {
        const property = this.comp.rootProperty.searchProperty(path);
        expect(property != null).toBe(true);
        const item = property.ui;
        const res = deepGet(item, propertyName.split('.'), undefined);
        expect(res).toBe(value);
        return this;
    }

    checkValue(path: string, value: any, propertyName?: string): this {
        const property = this.comp.rootProperty.searchProperty(path);
        expect(property != null).toBe(true);
        if (typeof propertyName !== 'undefined') {
            const res = deepGet(property, propertyName.split('.'), undefined);
            expect(res).toBe(value);
        } else {
            expect(property.value).toBe(value);
        }
        return this;
    }

    checkCls(cls: string, value: string) {
        const el = this.getEl(cls);
        expect(el).not.toBe(null);
        expect(el.classList).toContain(value);
    }

    checkStyle(cls: string, key: string, value: string) {
        const el = this.getEl(cls);
        expect(el).not.toBe(null);
        expect(el.style[key]).toBe(value);
    }

    checkAttr(cls: string, key: string, value: any, required = true) {
        const el = this.getEl(cls);
        expect(el).not.toBe(null);
        const attr = el.attributes.getNamedItem(key);
        if (required)
            expect(attr.textContent).toBe(value);
        else
            expect(attr).toBe(value);
    }

    checkCount(cls: string, count: number) {
        expect(dl.queryAll(By.css(cls)).length).toBe(count);
    }
}

@Component({
    template: `
    <sf [layout]="layout" #comp
        [schema]="schema"
        [ui]="ui"
        [formData]="formData"
        [button]="button"
        [liveValidate]="liveValidate"
        [autocomplete]="autocomplete"
        [firstVisual]="firstVisual"
        (formChange)="formChange($event)"
        (formSubmit)="formSubmit($event)"
        (formReset)="formReset($event)"
        (formError)="formError($event)"></sf>
    `
})
export class TestFormComponent {
    @ViewChild('comp') comp: SFComponent;
    layout = 'horizontal';
    schema: SFSchema = SCHEMA.user;
    ui: SFUISchema = {};
    formData: any;
    button: SFButton = {};
    liveValidate = true;
    autocomplete: 'on' | 'off';
    firstVisual = true;

    formChange(value: {}) {}
    formSubmit(value: {}) {}
    formReset(value: {}) {}
    formError(value: ErrorData[]) {}
}
