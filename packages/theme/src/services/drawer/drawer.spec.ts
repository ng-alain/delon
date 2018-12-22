import { CommonModule } from '@angular/common';
import { Component, Injector, NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
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
      imports: [
        CommonModule,
        NgZorroAntdModule,
        AlainThemeModule.forChild(),
      ],
      declarations: [TestDrawerComponent, TestComponent],
      entryComponents: [TestDrawerComponent],
    })
    class TestModule { }

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
      .subscribe(res => {
        expect(false).toBeTruthy();
        done();
      }, () => { }, () => {
        expect(true).toBeTruthy();
        done();
      });
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
          '', TestDrawerComponent,
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
    it('with 100 value', () => {
      drawer
        .static(
          '', TestDrawerComponent,
          {
            ret: 'true',
          },
          {
            size: 100,
            drawerOptions: {
              nzWrapClassName: 'bbb',
            },
          },
        )
        .subscribe();
      fixture.detectChanges();
      const els = document.getElementsByClassName('bbb');
      expect(els.length).toBe(1);
      expect((els[0] as HTMLElement).style.width).toBe(`100px`);
    });
  });

  describe('#footer', () => {
    it('with true', () => {
      drawer
        .static(
          '', TestDrawerComponent,
          {
            ret: 'true',
          },
          {
            size: 100,
            footer: true,
            footerHeight: 100,
            drawerOptions: {
              nzWrapClassName: 'ccc',
            },
          },
        )
        .subscribe();
      fixture.detectChanges();
      const els = document.getElementsByClassName('ccc');
      expect(els.length).toBe(1);
      const bodyEl = (els[0] as HTMLElement).querySelector('.ant-drawer-body') as HTMLElement;
      expect(bodyEl.style.height).toBe(`calc(100% - 100px)`);
    });
    it('with false', () => {
      drawer
        .static(
          '', TestDrawerComponent,
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

@Component({ template: `<div id="drawer{{id}}">drawer{{id}}</div>` })
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
class TestComponent { }
