import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, inject, input } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, TestBed, inject as testingInject } from '@angular/core/testing';

import { dispatchEvent, sleep } from 'ng-zorro-antd/core/testing';
import { NZ_MODAL_DATA, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

import { ModalHelper, ModalHelperOptions } from './modal.helper';

describe('theme: ModalHelper', () => {
  let modal: ModalHelper;
  let overlayContainerElement: HTMLElement;
  let fixture: ComponentFixture<TestComponent>;
  const ANT_TIME = 342;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NzModalService]
    });
    fixture = TestBed.createComponent(TestComponent);
    modal = TestBed.inject<ModalHelper>(ModalHelper);
  });

  beforeEach(
    testingInject([OverlayContainer], (oc: OverlayContainer) => {
      // overlayContainer = oc;
      overlayContainerElement = oc.getContainerElement();
    })
  );

  // mock animationend events
  async function animationDone(): Promise<void> {
    dispatchEvent(
      overlayContainerElement.querySelector('.ant-modal')!,
      new AnimationEvent('animationend', { animationName: 'antZoomIn' })
    );
    await sleep(ANT_TIME);
  }

  afterEach(() => {
    document.querySelector('nz-modal')?.remove();
  });

  describe('#create', () => {
    it('should be open', cb => {
      modal.create(TestModalComponent, { ret: 'true' }, { modalOptions: { nzNoAnimation: true } }).subscribe(() => {
        expect(true).toBeTruthy();
        cb();
      });
    });
    it('should be open a tabset', fakeAsync(() => {
      modal
        .create(TestModalComponent, { ret: 'true' }, { includeTabs: true, modalOptions: { nzNoAnimation: true } })
        .subscribe(() => {
          expect(true).toBeTruthy();
          flush();
        });
      fixture.detectChanges();
      expect(document.querySelector('.modal-include-tabs')).not.toBeNull();
    }));
    it('should be useNzData is true', fakeAsync(() => {
      modal
        .create(TestModalComponent, { ret: 'a' }, { useNzData: true, modalOptions: { nzNoAnimation: true } })
        .subscribe(() => {
          expect(true).toBeTruthy();
          flush();
        });
      fixture.detectChanges();
      expect(document.querySelector<HTMLElement>('.noNzData')?.innerText.trim()).toBe('true');
      expect(document.querySelector<HTMLElement>('.nzData')?.innerText.trim()).toBe('a');
    }));
    it('should be params allow signal', fakeAsync(() => {
      modal.create(TestModalComponent, { input_value: 10 }, { modalOptions: { nzNoAnimation: true } }).subscribe(() => {
        expect(true).toBeTruthy();
        flush();
      });
      fixture.detectChanges();
      expect(document.querySelector<HTMLElement>('.input_value')?.innerText.trim()).toBe('10');
    }));
    describe('#exact width true', () => {
      it('should be not trigger subscript when return a undefined value', fakeAsync(() => {
        modal
          .create(
            TestModalComponent,
            { ret: undefined },
            { includeTabs: true, exact: true, modalOptions: { nzNoAnimation: true } }
          )
          .subscribe({
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
          .create(
            TestModalComponent,
            { ret: 'true' },
            { drag: true, modalOptions: { nzTitle: 'test', nzNoAnimation: true } }
          )
          .subscribe();
        fixture.detectChanges();
        expect(document.querySelectorAll('.MODAL-DRAG').length).toBe(1);
      }));
      it('#handleCls', async () => {
        modal
          .create(
            TestModalComponent,
            { ret: 'true' },
            { drag: { handleCls: '.handle' }, modalOptions: { nzTitle: 'test' } }
          )
          .subscribe();
        await animationDone();
        const handle = document.querySelector<HTMLDivElement>('.MODAL-DRAG-HANDLE');
        expect(handle?.classList).toContain('handle');
      });
    });
    describe('#focus', () => {
      it('should be focus ok button', async () => {
        modal.create('confirm', {}, { focus: 'ok' }).subscribe();
        await animationDone();
        const btn = document.querySelector<HTMLButtonElement>('[data-focused="ok"]');
        expect(btn != null).toBe(true);
        expect(btn?.classList).toContain('ant-btn-primary');
      });
      it('should be focus cancel button', async () => {
        modal.create('confirm', {}, { focus: 'cancel' }).subscribe();
        await animationDone();
        const btn = document.querySelector<HTMLButtonElement>('[data-focused="cancel"]');
        expect(btn != null).toBe(true);
        expect(btn?.classList).not.toContain('ant-btn-primary');
      });
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
        .createStatic(
          TestModalComponent,
          {
            id,
            ret: true
          },
          { modalOptions: { nzNoAnimation: true } }
        )
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
          { size: 'sm', modalOptions: { nzNoAnimation: true } }
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
    <div class="input_value">{{ input_value() }}</div>
  `
})
class TestModalComponent {
  id = '';
  ret = 'true';
  input_value = input<string>('');

  private readonly modal = inject(NzModalRef);
  readonly data = inject<{ ret: string }>(NZ_MODAL_DATA, { optional: true });

  constructor() {
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
