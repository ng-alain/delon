import { CommonModule } from '@angular/common';
import { Component, Injector, NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NzDrawerRef, NzDrawerService } from 'ng-zorro-antd';
import { AlainThemeModule } from '../../theme.module';
import { DrawerHelper } from './drawer.helper';

describe('theme: DrawerHelper', () => {
  let injector: Injector;
  let drawer: DrawerHelper;
  let srv: NzDrawerService;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    @NgModule({
      imports: [CommonModule, NgZorroAntdModule, NoopAnimationsModule, AlainThemeModule.forChild()],
      declarations: [TestDrawerComponent, TestComponent],
      entryComponents: [TestDrawerComponent],
    })
    class TestModule {}

    injector = TestBed.configureTestingModule({ imports: [TestModule] });
    fixture = TestBed.createComponent(TestComponent);
    drawer = injector.get(DrawerHelper);
    srv = injector.get(NzDrawerService);
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
      .subscribe(res => {
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
        res => {
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
      .subscribe(res => {
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
  });

  describe('#footer', () => {
    describe('with true', () => {
      it('when nzPlacement is right', () => {
        const footerHeight = 100;
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
                nzWrapClassName: 'ccc',
                nzPlacement: 'right',
              },
            },
          )
          .subscribe();
        fixture.detectChanges();
        const els = document.getElementsByClassName('ccc');
        expect(els.length).toBe(1);
        const bodyEl = (els[0] as HTMLElement).querySelector('.ant-drawer-body') as HTMLElement;
        expect(bodyEl.style.height).toBe(`calc(100% - ${(footerHeight * 2) - 2}px)`);
      });
      it('when nzPlacement is top', () => {
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
        expect(bodyEl.style.height).toBe(`${height - ((footerHeight * 2) - 2)}px`);
      });
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
});

@Component({
  template: `
    <div id="drawer{{ id }}">drawer{{ id }}</div>
  `,
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
