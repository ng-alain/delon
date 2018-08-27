import { Injector, Component, NgModule } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { NzModalService, NzModalRef, NgZorroAntdModule } from 'ng-zorro-antd';
import { ModalHelper } from './modal.helper';
import { AlainThemeModule } from '../../theme.module';

describe('theme: ModalHelper', () => {
  let injector: Injector;
  let modal: ModalHelper;
  let srv: NzModalService;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    @NgModule({
      imports: [
        CommonModule,
        NgZorroAntdModule.forRoot(),
        AlainThemeModule.forChild(),
      ],
      declarations: [TestModalComponent, TestComponent],
      entryComponents: [TestModalComponent],
    })
    class TestModule {}

    injector = TestBed.configureTestingModule({ imports: [TestModule] });
    fixture = TestBed.createComponent(TestComponent);
    modal = injector.get(ModalHelper);
    srv = injector.get(NzModalService);
  });

  afterEach(() => {
    const a = document.querySelector('nz-modal');
    if (a) a.remove();
  });

  describe('[default]', () => {
    it('#open', (done: () => void) => {
      modal
        .open(TestModalComponent, {
          ret: 'true',
        })
        .subscribe(res => {
          expect(true).toBeTruthy();
          done();
        });
      fixture.detectChanges();
    });

    it('#open of 100px modal', (done: () => void) => {
      modal
        .open(
          TestModalComponent,
          {
            ret: 'true',
          },
          100,
        )
        .subscribe(res => {
          expect(true).toBeTruthy();
          done();
        });
      fixture.detectChanges();
    });
  });

  describe('#create', () => {
    it('should be open', (done: () => void) => {
      modal
        .create(TestModalComponent, {
          ret: 'true',
        })
        .subscribe(res => {
          expect(true).toBeTruthy();
          done();
        });
      fixture.detectChanges();
    });
    it('should be open a tabset', (done: () => void) => {
      modal
        .create(
          TestModalComponent,
          {
            ret: 'true',
          },
          {
            includeTabs: true,
          },
        )
        .subscribe(res => {
          expect(true).toBeTruthy();
          done();
        });
      fixture.detectChanges();
      expect(document.querySelector('.modal-include-tabs')).not.toBeNull();
    });
    describe('#exact width true', () => {
      it('should be not trigger subscript when return a undefined value', (done: () => void) => {
        modal
          .create(
            TestModalComponent,
            {
              ret: undefined,
            },
            {
              includeTabs: true,
              exact: true,
            },
          )
          .subscribe(
            res => {
              expect(false).toBeTruthy();
              done();
            },
            err => {
              expect(false).toBeTruthy();
              done();
            },
            () => {
              expect(true).toBeTruthy();
              done();
            }
          );
        fixture.detectChanges();
      });
    });
  });

  describe('#static', () => {
    it('should be open', (done: () => void) => {
      const id = '' + +new Date();
      modal
        .static(TestModalComponent, {
          id,
          ret: true,
        })
        .subscribe(res => {
          fixture.detectChanges();
          expect(res).toBe(true);
          done();
        });
      fixture.detectChanges();
    });
    it('should be open sm size', (done: () => void) => {
      const id = '' + +new Date();
      modal
        .static(
          TestModalComponent,
          {
            id,
            ret: 'true',
          },
          'sm',
        )
        .subscribe(res => {
          fixture.detectChanges();
          expect(res).toBe('true');
          done();
        });
      fixture.detectChanges();
    });
    it('should be open default size', (done: () => void) => {
      const id = '' + +new Date();
      modal
        .static(
          TestModalComponent,
          {
            id,
            ret: 'true',
          },
          '',
        )
        .subscribe(res => {
          fixture.detectChanges();
          expect(res).toBe('true');
          done();
        });
      fixture.detectChanges();
    });
    it('should be custom modal options', (done: () => void) => {
      const id = '' + +new Date();
      const zIndex = 980;
      modal
        .static(
          TestModalComponent,
          {
            id,
            ret: 1,
          },
          'sm',
          {
            zIndex,
          },
        )
        .subscribe(res => {
          fixture.detectChanges();
          expect(res).toBe(1);
          done();
        });
      fixture.detectChanges();
    });
  });

  describe('#createStatic', () => {
    it('should be open', (done: () => void) => {
      const id = '' + +new Date();
      modal
        .createStatic(TestModalComponent, {
          id,
          ret: true,
        })
        .subscribe(res => {
          fixture.detectChanges();
          expect(res).toBe(true);
          done();
        });
      fixture.detectChanges();
    });
    it('should be open sm size', (done: () => void) => {
      const id = '' + +new Date();
      modal
        .createStatic(
          TestModalComponent,
          {
            id,
            ret: 'true',
          },
          { size: 'sm' },
        )
        .subscribe(res => {
          fixture.detectChanges();
          expect(res).toBe('true');
          done();
        });
      fixture.detectChanges();
    });
  });
});

@Component({ template: `<div id="modal{{id}}">modal{{id}}</div>` })
class TestModalComponent {
  id: string = '';
  ret: any = 'true';

  constructor(private modal: NzModalRef) {
    setTimeout(() => {
      if (this.ret === 'destroy') this.modal.destroy();
      else this.modal.close(this.ret);
    }, 100);
  }
}

@Component({ template: `` })
class TestComponent {}
