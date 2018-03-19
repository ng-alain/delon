import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AlainThemeModule } from '../../index';

describe('Pipe: yn', () => {

    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ AlainThemeModule.forRoot() ],
            declarations: [ TestComponent ]
        });
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
    });

    [
        { value: true, result: `<span class="badge badge-success">是</span>` },
        { value: false, result: `<span class="badge badge-error">否</span>` },
        { value: true, result: `<span class="badge badge-success">好</span>`, yes: '好', no: '坏' },
        { value: false, result: `<span class="badge badge-error">坏</span>`, yes: '好', no: '坏' }
    ].forEach((item: any) => {
        it(`${item.value.toString()} muse be ${item.result}`, () => {
            fixture.componentInstance.value = item.value;
            fixture.componentInstance.yes = item.yes;
            fixture.componentInstance.no = item.no;
            fixture.detectChanges();
            expect((fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerHTML).toBe(item.result);
        });
    });

});

@Component({
    template: `<div id="result" [innerHTML]="value | yn:yes:no"></div>`
})
class TestComponent {
    value = true;
    yes: string;
    no: string;
}

