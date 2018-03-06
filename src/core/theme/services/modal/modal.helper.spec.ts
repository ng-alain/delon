import { Injector, Component, OnInit, NgModule } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { CommonModule } from '@angular/common';
import { NzModalService, NzModalModule, NzModalSubject } from 'ng-zorro-antd';
import { ModalHelper } from './modal.helper';
import { AlainThemeModule } from '../../index';

describe('theme: modal.heper', () => {
    let injector: Injector;
    let modal: ModalHelper;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
        @NgModule({
            imports: [CommonModule, NzModalModule, AlainThemeModule.forChild() ],
            declarations: [TestModalComponent, TestComponent],
            entryComponents: [TestModalComponent],
            exports: [AlainThemeModule]
        })
        class TestModule { }

        injector = TestBed.configureTestingModule({imports: [TestModule]});
        fixture = TestBed.createComponent(TestComponent);
        modal = injector.get(ModalHelper);
    });

    afterEach(() => {
        modal.removeAll();
        const a = document.querySelector('nz-modal');
        if (a) a.remove();
    });

    function getParentByClassName(el: Element, cls: string): Element {
        while (el.parentElement) {
            el = el.parentElement;
            if (el.classList.contains(cls)) return el;
        }
        return null;
    }

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

    describe('#static', () => {
        it('should be open', (done: () => void) => {
            const id = '' + (+new Date);
            modal.static(TestModalComponent, {
                id,
                ret: 'true'
            }).subscribe(res => {
                fixture.detectChanges();
                expect(document.querySelectorAll('#modal' + id).length).toBe(1);
                done();
            });
        });
        it('should be open sm size', (done: () => void) => {
            const id = '' + (+new Date);
            modal.static(TestModalComponent, {
                id,
                ret: 'true'
            }, 'sm').subscribe(res => {
                fixture.detectChanges();
                const modalEl = document.querySelector('#modal' + id);
                expect(modalEl).not.toBeNull();
                expect(getParentByClassName(modalEl, 'modal-sm')).not.toBeNull();
                done();
            });
        });
        it('should be open default size', (done: () => void) => {
            const id = '' + (+new Date);
            modal.static(TestModalComponent, {
                id,
                ret: 'true'
            }, '').subscribe(res => {
                fixture.detectChanges();
                const modalEl = document.querySelector('#modal' + id);
                expect(modalEl).not.toBeNull();
                expect(getParentByClassName(modalEl, 'modal-sm')).toBeNull();
                done();
            });
        });
        it('should be custom modal options', (done: () => void) => {
            const id = '' + (+new Date);
            const zIndex = 980;
            modal.static(TestModalComponent, {
                id,
                ret: 1
            }, 'sm', {
                zIndex
            }).subscribe(res => {
                fixture.detectChanges();
                const modalEl = document.querySelector('#modal' + id);
                expect(modalEl).not.toBeNull();
                const wrapEl = getParentByClassName(modalEl, 'ant-modal-wrap') as HTMLDivElement;
                expect(wrapEl).not.toBeNull();
                expect(+wrapEl.style.zIndex).toBe(zIndex);
                done();
            });
        });
    });

    it('#removeAll', () => {
        modal.open(TestModalComponent, {
            ret: 'true'
        }).subscribe();
        modal.removeAll();
    });

});

@Component({ template: `<div id="modal{{id}}">modal{{id}}</div>` })
class TestModalComponent {

    id: string = '';
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
