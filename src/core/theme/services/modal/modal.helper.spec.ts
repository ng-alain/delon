import { Injector, Component, OnInit, NgModule } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { CommonModule } from '@angular/common';
import { ModalHelper } from './modal.helper';
import { NzModalService, NzModalModule, NzModalSubject } from 'ng-zorro-antd';

describe('theme: modal.heper', () => {
    let injector: Injector;
    let modal: ModalHelper;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
        @NgModule({
            imports: [CommonModule, NzModalModule],
            declarations: [TestModalComponent, TestComponent],
            providers: [ ModalHelper ],
            entryComponents: [TestModalComponent]
        })
        class TestModule { }

        injector = TestBed.configureTestingModule({imports: [TestModule]});
        fixture = TestBed.createComponent(TestComponent);
        modal = injector.get(ModalHelper);
    });

    it('#open', (done: () => void) => {
        modal.open(TestModalComponent, {
            ret: 'true'
        }).subscribe(res => {
            expect(true).toBeTruthy();
            done();
        });
    });

    it('#open of 100px modal', (done: () => void) => {
        modal.open(TestModalComponent, {
            ret: 'true'
        }, 100).subscribe(res => {
            expect(true).toBeTruthy();
            done();
        });
    });

    it('#static', (done: () => void) => {
        modal.static(TestModalComponent, {
            ret: 'true'
        }).subscribe(res => {
            expect(true).toBeTruthy();
            done();
        });
    });
});

@Component({ template: `` })
class TestModalComponent {

    ret: any = 'true';

    constructor(private subject: NzModalSubject) {
        setTimeout(() => {
            if (this.ret === 'destroy')
                this.subject.destroy();
            else
                this.subject.destroy(this.ret);
        }, 100);
    }
}

@Component({ template: `` })
class TestComponent {}
