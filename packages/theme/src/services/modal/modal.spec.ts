import { Component, Inject } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { NZ_MODAL_DATA, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

import { ModalHelper, ModalHelperOptions } from './modal.helper';

describe('theme: ModalHelper', () => {
  let modal: ModalHelper;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideNoopAnimations(), NzModalService]
    });
    fixture = TestBed.createComponent(TestComponent);
    modal = TestBed.inject<ModalHelper>(ModalHelper);
  });

  afterEach(() => {
    document.querySelector('nz-modal')?.remove();
  });

  describe('#create', () => {
    it('should be open', fakeAsync(() => {
      modal.create(TestModalComponent, { ret: 'true' }).subscribe(() => {
        expect(true).toBeTruthy();
        flush();
      });
      fixture.detectChanges();
    }));
    it('should be open a tabset', fakeAsync(() => {
      modal.create(TestModalComponent, { ret: 'true' }, { includeTabs: true }).subscribe(() => {
        expect(true).toBeTruthy();
        flush();
      });
      fixture.detectChanges();
      expect(document.querySelector('.modal-include-tabs')).not.toBeNull();
    }));
    it('should be useNzData is true', fakeAsync(() => {
      modal.create(TestModalComponent, { ret: 'a' }, { useNzData: true }).subscribe(() => {
        expect(true).toBeTruthy();
        flush();
      });
      fixture.detectChanges();
      expect(document.querySelector<HTMLElement>('.noNzData')?.innerText.trim()).toBe('true');
      expect(document.querySelector<HTMLElement>('.nzData')?.innerText.trim()).toBe('a');
    }));
    describe('#exact width true', () => {
      it('should be not trigger subscript when return a undefined value', fakeAsync(() => {
        modal.create(TestModalComponent, { ret: undefined }, { includeTabs: true, exact: true }).subscribe({
          next: () => {
            expect(false).toBeTruthy();
            flush();
          },
          error: () => {
            expect(false).toBeTruthy();
            flush();
          },
          complete: () => {
            expect(true).toBeTruthy();
            flush();
          }
        });
        fixture.detectChanges();
      }));
    });
    describe('#drag', () => {
      it('should be working', fakeAsync(() => {
        modal
          .create(TestModalComponent, { ret: 'true' }, { drag: true, modalOptions: { nzTitle: 'test' } })
          .subscribe();
        fixture.detectChanges();
        expect(document.querySelectorAll('.MODAL-DRAG').length).toBe(1);
      }));
      it('#handleCls', fakeAsync(() => {
        modal
          .create(
            TestModalComponent,
            { ret: 'true' },
            { drag: { handleCls: '.handle' }, modalOptions: { nzTitle: 'test' } }
          )
          .subscribe();
        fixture.detectChanges();
        tick(10);
        const handle = document.querySelector<HTMLDivElement>('.MODAL-DRAG-HANDLE');
        expect(handle?.classList).toContain('handle');
      }));
    });
    describe('#focus', () => {
      it('should be focus ok button', fakeAsync(() => {
        modal.create('confirm', {}, { focus: 'ok', modalOptions: { nzNoAnimation: true } }).subscribe();
        fixture.detectChanges();
        tick(10);
        const btn = document.querySelector<HTMLButtonElement>('[data-focused="ok"]');
        expect(btn != null).toBe(true);
        expect(btn?.classList).toContain('ant-btn-primary');
      }));
      it('should be focus cancel button', fakeAsync(() => {
        modal.create('confirm', {}, { focus: 'cancel', modalOptions: { nzNoAnimation: true } }).subscribe();
        fixture.detectChanges();
        tick(10);
        const btn = document.querySelector<HTMLButtonElement>('[data-focused="cancel"]');
        expect(btn != null).toBe(true);
        expect(btn?.classList).not.toContain('ant-btn-primary');
      }));
    });
    it('should argument length is 2', fakeAsync(() => {
      modal.create('info', { size: '23%' } as ModalHelperOptions).subscribe();
      fixture.detectChanges();
      const width = document.querySelector<HTMLElement>('.ant-modal')?.style.width;
      expect(width).toBe('23%');
    }));
  });

  describe('#createStatic', () => {
    it('should be open', fakeAsync(() => {
      const id = `${+new Date()}`;
      modal
        .createStatic(TestModalComponent, {
          id,
          ret: true
        })
        .subscribe(res => {
          fixture.detectChanges();
          expect(res).toBe(true);
          flush();
        });
      fixture.detectChanges();
    }));
    it('should be open sm size', fakeAsync(() => {
      const id = `${+new Date()}`;
      modal
        .createStatic(
          TestModalComponent,
          {
            id,
            ret: 'true'
          },
          { size: 'sm' }
        )
        .subscribe(res => {
          fixture.detectChanges();
          expect(res).toBe('true');
          flush();
        });
      fixture.detectChanges();
    }));
    it('should be 80% size', fakeAsync(() => {
      modal.createStatic(TestModalComponent, { ret: 'true' }, { size: '10%' }).subscribe();
      fixture.detectChanges();
      const width = document.querySelector<HTMLElement>('.ant-modal')?.style.width;
      expect(width).toBe('10%');
    }));
  });
});

@Component({
  template: `
    <div id="modal{{ id }}" class="handle noNzData">{{ ret }}</div>
    <div class="nzData">{{ data.ret }}</div>
  `
})
class TestModalComponent {
  id = '';
  ret = 'true';

  constructor(
    private modal: NzModalRef,
    @Inject(NZ_MODAL_DATA) public data: { ret: string }
  ) {
    setTimeout(() => {
      if (this.ret === 'destroy') {
        this.modal.destroy();
      } else {
        this.modal.close(this.ret);
      }
    }, 100);
  }
}

@Component({
  template: ``
})
class TestComponent {}
