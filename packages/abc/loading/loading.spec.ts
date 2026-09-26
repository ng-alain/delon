import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cleanCdkOverlayHtml } from '@delon/testing';
import { DelonLocaleModule } from '@delon/theme';

import { LoadingService } from './loading.service';

describe('abc: loading', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  let srv: LoadingService;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DelonLocaleModule]
    });
    srv = TestBed.inject(LoadingService);
    fixture = TestBed.createComponent(TestComponent);
  });

  afterEach(() => {
    srv.ngOnDestroy();
    cleanCdkOverlayHtml();
  });

  async function check(cls: string, count: number): Promise<void> {
    await vi.advanceTimersByTimeAsync(0);
    fixture.detectChanges();
    expect(srv.instance != null).toBe(true);
    const els = document.querySelectorAll(cls);
    expect(els.length).toBe(count);
    await vi.advanceTimersByTimeAsync(1000);
  }

  it('should be working', async () => {
    srv.close();
    srv.open();
    await vi.advanceTimersByTimeAsync(1);
    expect(srv.instance != null).toBe(true);
    fixture.detectChanges();
    srv.close();
    await vi.advanceTimersByTimeAsync(1);
    expect(srv.instance == null).toBe(true);
    await vi.advanceTimersByTimeAsync(1000);
  });

  describe('#delay', () => {
    it(`should be can appear when close without delay`, async () => {
      srv.open({ delay: 1000 });
      await vi.advanceTimersByTimeAsync(500);
      expect(srv.instance == null).toBe(true);
      await vi.advanceTimersByTimeAsync(1001);
      expect(srv.instance != null).toBe(true);
    });
    it(`should be won't appear when close within delay`, async () => {
      srv.open({ delay: 1000 });
      await vi.advanceTimersByTimeAsync(500);
      expect(srv.instance == null).toBe(true);
      srv.close();
      await vi.advanceTimersByTimeAsync(1001);
      expect(srv.instance == null).toBe(true);
    });
  });

  describe('#type', () => {
    it('with text', async () => {
      srv.open({ type: 'text' });
      await check('.loading-default__icon', 0);
    });
    it('with icon', async () => {
      srv.open({ type: 'icon', icon: { type: 'loading' } });
      await check('.anticon-loading', 1);
    });
    it('with spin', async () => {
      srv.open({ type: 'spin' });
      await check('.ant-spin', 1);
    });
    it('with custom', async () => {
      srv.open({ type: 'custom', custom: { html: '<div class="custom-cls"></div>' } });
      await check('.custom-cls', 1);
    });
  });
});

@Component({
  template: ``
})
class TestComponent {}
