import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NzDrawerModule, NzDrawerRef } from 'ng-zorro-antd/drawer';
import { AlainThemeModule } from '../../theme.module';
import { DrawerHelper } from './drawer.helper';

describe('theme: DrawerHelper', () => {
  let drawer: DrawerHelper;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    @NgModule({
      imports: [CommonModule, NoopAnimationsModule, AlainThemeModule.forChild(), NzDrawerModule],
      declarations: [TestDrawerComponent, TestComponent],
    })
    class TestModule {}

    TestBed.configureTestingModule({ imports: [TestModule] });
    fixture = TestBed.createComponent(TestComponent);
    drawer = TestBed.inject<DrawerHelper>(DrawerHelper);
  });

  afterEach(() => {
    const a = document.querySelector('nz-drawer');
    if (a) a.remove();
  });

  it('should be subscribing return value', (done: () => void) => {
    drawer
      .create('', TestDrawerComponent, {
        ret: 'true',
      })
      .subscribe(() => {
        expect(true).toBeTruthy();
        done();
      });
    fixture.detectChanges();
  });

  it('should be only close', (done: () => void) => {
    drawer
      .create('', TestDrawerComponent, {
        ret: 'destroy',
      })
      .subscribe(
        () => {
          expect(false).toBeTruthy();
          done();
        },
        () => {},
        () => {
          expect(true).toBeTruthy();
          done();
        },
      );
    fixture.detectChanges();
  });

  it('#static', (done: () => void) => {
    drawer
      .static('', TestDrawerComponent, {
        ret: 'true',
      })
      .subscribe(() => {
        expect(true).toBeTruthy();
        done();
      });
    fixture.detectChanges();
  });

  describe('#size', () => {
    it('with sm', () => {
      drawer
        .static(
          '',
          TestDrawerComponent,
          {
            ret: 'true',
          },
          {
            size: 'sm',
            drawerOptions: {
              nzWrapClassName: 'aaa',
            },
          },
        )
        .subscribe();
      fixture.detectChanges();
      const els = document.getElementsByClassName('aaa');
      expect(els.length).toBe(1);
      expect((els[0] as HTMLElement).classList).toContain('drawer-sm');
    });
    describe('with number value', () => {
      it('muse be set width when nzPlacement is left', () => {
        drawer
          .static(
            '',
            TestDrawerComponent,
            {
              ret: 'true',
            },
            {
              size: 100,
              drawerOptions: {
                nzWrapClassName: 'bbb',
                nzPlacement: 'left',
              },
            },
          )
          .subscribe();
        fixture.detectChanges();
        const els = document.getElementsByClassName('bbb');
        expect(els.length).toBe(1);
        expect((els[0] as HTMLElement).style.width).toBe(`100px`);
      });
      it('muse be set height when nzPlacement is top', () => {
        drawer
          .static(
            '',
            TestDrawerComponent,
            {
              ret: 'true',
            },
            {
              size: 100,
              drawerOptions: {
                nzWrapClassName: 'cccc',
                nzPlacement: 'top',
              },
            },
          )
          .subscribe();
        fixture.detectChanges();
        const els = document.getElementsByClassName('cccc');
        expect(els.length).toBe(1);
        expect((els[0] as HTMLElement).style.height).toBe(`100px`);
      });
    });
    it('should be ingore drawer-sm when nzWidth has set', () => {
      drawer
        .static(
          '',
          TestDrawerComponent,
          {
            ret: 'true',
          },
          {
            size: 'sm',
            drawerOptions: {
              nzWidth: 100,
              nzWrapClassName: 'aaa',
            },
          },
        )
        .subscribe();
      fixture.detectChanges();
      const els = document.getElementsByClassName('aaa');
      expect(els.length).toBe(1);
      expect((els[0] as HTMLElement).classList).not.toContain('drawer-sm');
    });
  });

  describe('#footer', () => {
    it('with true', () => {
      const height = 300;
      const footerHeight = 55;
      drawer
        .static(
          '',
          TestDrawerComponent,
          {
            ret: 'true',
          },
          {
            size: 100,
            footer: true,
            footerHeight,
            drawerOptions: {
              nzHeight: height,
              nzWrapClassName: 'eee',
              nzPlacement: 'top',
            },
          },
        )
        .subscribe();
      fixture.detectChanges();
      const els = document.getElementsByClassName('eee');
      expect(els.length).toBe(1);
      const bodyEl = (els[0] as HTMLElement).querySelector('.ant-drawer-body') as HTMLElement;
      expect(bodyEl.style.paddingBottom).toBe(`${footerHeight + 24}px`);
    });
    it('with false', () => {
      drawer
        .static(
          '',
          TestDrawerComponent,
          {
            ret: 'true',
          },
          {
            size: 100,
            footer: false,
            drawerOptions: {
              nzWrapClassName: 'ddd',
            },
          },
        )
        .subscribe();
      fixture.detectChanges();
      const els = document.getElementsByClassName('ddd');
      expect(els.length).toBe(1);
      const bodyEl = (els[0] as HTMLElement).querySelector('.ant-drawer-body') as HTMLElement;
      expect(bodyEl.style.height).toBe(``);
    });
  });

  describe('#exact', () => {
    it('width true, should be only truth subscript', done => {
      drawer
        .create(
          '',
          TestDrawerComponent,
          {
            ret: undefined,
          },
          {
            exact: true,
          },
        )
        .subscribe(
          () => {
            expect(false).toBe(true);
          },
          () => {
            expect(false).toBe(true);
          },
          () => {
            expect(true).toBe(true);
            done();
          },
        );
      fixture.detectChanges();
    });
    it('width false, should be always subscript', done => {
      drawer
        .create(
          '',
          TestDrawerComponent,
          {
            ret: undefined,
          },
          {
            exact: false,
          },
        )
        .subscribe(
          res => {
            expect(res).toBe(undefined);
            done();
          },
          () => {
            expect(false).toBe(true);
            done();
          },
        );
      fixture.detectChanges();
    });
  });
});

@Component({
  template: ` <div id="drawer{{ id }}">drawer{{ id }}</div> `,
})
class TestDrawerComponent {
  id: string = '';
  ret: any = 'true';

  constructor(private modal: NzDrawerRef) {
    setTimeout(() => {
      if (this.ret === 'destroy') {
        this.modal.close();
      } else {
        this.modal.close(this.ret);
      }
    }, 20);
  }
}

@Component({ template: `` })
class TestComponent {}
