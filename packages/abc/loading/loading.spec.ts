import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LoadingModule } from './loading.module';
import { LoadingService } from './loading.service';

describe('abc: loading', () => {
  let srv: LoadingService;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoadingModule],
      declarations: [TestComponent],
    });
    srv = TestBed.inject(LoadingService);
    fixture = TestBed.createComponent(TestComponent);
  });

  afterEach(() => {
    srv.ngOnDestroy();
    const el = document.querySelector('.cdk-overlay-container') as HTMLElement;
    if (el != null) {
      el.innerHTML = '';
    }
  });

  function check(cls: string, count: number) {
    tick();
    fixture.detectChanges();
    expect(srv.instance != null).toBe(true);
    const els = document.querySelectorAll(cls);
    expect(els.length).toBe(count);
    tick(1000);
  }

  it('should be working', fakeAsync(() => {
    srv.close();
    srv.open();
    tick(1);
    expect(srv.instance != null).toBe(true);
    fixture.detectChanges();
    srv.close();
    tick(1);
    expect(srv.instance == null).toBe(true);
    tick(1000);
  }));

  describe('#dealy', () => {
    it(`should be can appear when close without delay`, fakeAsync(() => {
      srv.open({ delay: 1000 });
      tick(500);
      expect(srv.instance == null).toBe(true);
      tick(1001);
      expect(srv.instance != null).toBe(true);
    }));
    it(`should be won't appear when close within delay`, fakeAsync(() => {
      srv.open({ delay: 1000 });
      tick(500);
      expect(srv.instance == null).toBe(true);
      srv.close();
      tick(1001);
      expect(srv.instance == null).toBe(true);
    }));
  });

  describe('#type', () => {
    it('with text', fakeAsync(() => {
      srv.open({ type: 'text' });
      check('.loading-default__icon', 0);
    }));
    it('with icon', fakeAsync(() => {
      srv.open({ type: 'icon', icon: { type: 'loading' } });
      check('.anticon-loading', 1);
    }));
    it('with spin', fakeAsync(() => {
      srv.open({ type: 'spin' });
      check('.ant-spin', 1);
    }));
    it('with custom', fakeAsync(() => {
      srv.open({ type: 'custom', custom: { html: '<div class="custom-cls"></div>' } });
      check('.custom-cls', 1);
    }));
  });
});

@Component({ template: `` })
class TestComponent {}
