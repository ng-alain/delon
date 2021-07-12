import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NzModalModule, NzModalRef } from 'ng-zorro-antd/modal';

import { AlainThemeModule } from '../../theme.module';
import { ModalHelper } from './modal.helper';

describe('theme: ModalHelper', () => {
  let modal: ModalHelper;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    @NgModule({
      imports: [CommonModule, NoopAnimationsModule, AlainThemeModule.forChild(), NzModalModule],
      declarations: [TestModalComponent, TestComponent]
    })
    class TestModule {}

    TestBed.configureTestingModule({ imports: [TestModule] });
    fixture = TestBed.createComponent(TestComponent);
    modal = TestBed.inject<ModalHelper>(ModalHelper);
  });

  afterEach(() => {
    const a = document.querySelector('nz-modal');
    if (a) a.remove();
  });

  describe('[default]', () => {
    it('#open', fakeAsync(() => {
      modal.open(TestModalComponent, { ret: 'true' }).subscribe(() => {
        expect(true).toBeTruthy();
        flush();
      });
      fixture.detectChanges();
      tick(1000);
      fixture.detectChanges();
    }));

    it('shoudl be size & nzWrapClassName toggle', fakeAsync(() => {
      modal.open(TestModalComponent, { ret: 'true' }, 'sm', { nzWrapClassName: 'aaa' }).subscribe(() => {
        expect(true).toBeTruthy();
        flush();
      });
      fixture.detectChanges();
      tick(1000);
      fixture.detectChanges();
    }));

    it('#open of 100px modal', fakeAsync(() => {
      modal.open(TestModalComponent, { ret: 'true' }, 100).subscribe(() => {
        expect(true).toBeTruthy();
        flush();
      });
      fixture.detectChanges();
      tick(1000);
      fixture.detectChanges();
    }));
  });

  describe('#create', () => {
    it('should be open', fakeAsync(() => {
      modal.create(TestModalComponent, { ret: 'true' }).subscribe(() => {
        expect(true).toBeTruthy();
        flush();
      });
      fixture.detectChanges();
      tick(1000);
      fixture.detectChanges();
    }));
    it('should be open a tabset', fakeAsync(() => {
      modal.create(TestModalComponent, { ret: 'true' }, { includeTabs: true }).subscribe(() => {
        expect(true).toBeTruthy();
        flush();
      });
      fixture.detectChanges();
      tick(1000);
      fixture.detectChanges();
      expect(document.querySelector('.modal-include-tabs')).not.toBeNull();
    }));
    describe('#exact width true', () => {
      it('should be not trigger subscript when return a undefined value', fakeAsync(() => {
        modal.create(TestModalComponent, { ret: undefined }, { includeTabs: true, exact: true }).subscribe(
          () => {
            expect(false).toBeTruthy();
            flush();
          },
          () => {
            expect(false).toBeTruthy();
            flush();
          },
          () => {
            expect(true).toBeTruthy();
            flush();
          }
        );
        fixture.detectChanges();
        tick(1000);
        fixture.detectChanges();
      }));
    });
  });

  describe('#static', () => {
    it('should be open', fakeAsync(() => {
      const id = `${+new Date()}`;
      modal
        .static(TestModalComponent, {
          id,
          ret: true
        })
        .subscribe(res => {
          fixture.detectChanges();
          expect(res).toBe(true);
          flush();
        });
      fixture.detectChanges();
      tick(1000);
      fixture.detectChanges();
    }));
    it('should be open sm size', fakeAsync(() => {
      const id = `${+new Date()}`;
      modal
        .static(
          TestModalComponent,
          {
            id,
            ret: 'true'
          },
          'sm'
        )
        .subscribe(res => {
          fixture.detectChanges();
          expect(res).toBe('true');
          flush();
        });
      fixture.detectChanges();
      tick(1000);
      fixture.detectChanges();
    }));
    it('should be open default size', fakeAsync(() => {
      const id = `${+new Date()}`;
      modal
        .static(
          TestModalComponent,
          {
            id,
            ret: 'true'
          },
          ''
        )
        .subscribe(res => {
          fixture.detectChanges();
          expect(res).toBe('true');
          flush();
        });
      fixture.detectChanges();
      tick(1000);
      fixture.detectChanges();
    }));
    it('should be custom modal options', fakeAsync(() => {
      const id = `${+new Date()}`;
      const nzZIndex = 980;
      modal
        .static(
          TestModalComponent,
          {
            id,
            ret: 1
          },
          'sm',
          {
            nzZIndex
          }
        )
        .subscribe(res => {
          fixture.detectChanges();
          expect(res).toBe(1);
          flush();
        });
      fixture.detectChanges();
      tick(1000);
      fixture.detectChanges();
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
      tick(1000);
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
      tick(1000);
      fixture.detectChanges();
    }));
  });
});

@Component({
  template: ` <div id="modal{{ id }}">modal{{ id }}</div> `
})
class TestModalComponent {
  id = '';
  ret: any = 'true';

  constructor(private modal: NzModalRef) {
    setTimeout(() => {
      if (this.ret === 'destroy') {
        this.modal.destroy();
      } else {
        this.modal.close(this.ret);
      }
    }, 100);
  }
}

@Component({ template: `` })
class TestComponent {}
