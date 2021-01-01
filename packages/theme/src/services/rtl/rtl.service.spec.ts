import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AlainThemeModule } from '../../theme.module';
import { LTR, RTL, RTLService } from './rtl.service';

describe('Service: RTL', () => {
  let srv: RTLService;

  function getHtmlDir(): string | null {
    return (document.querySelector('html') as HTMLElement).getAttribute('dir');
  }

  beforeEach(() => {
    @NgModule({
      imports: [CommonModule, AlainThemeModule.forChild()],
    })
    class TestModule {}
    const injector = TestBed.configureTestingModule({ imports: [TestModule] });
    srv = injector.inject<RTLService>(RTLService);
    srv.dir = LTR;
  });

  afterEach(() => (srv.dir = LTR));

  describe('#dir', () => {
    it('should be get', () => {
      expect(srv.dir).toBe(LTR);
    });
    it('should be set', () => {
      expect(srv.dir).toBe(LTR);
      srv.dir = RTL;
      expect(srv.dir).toBe(RTL);
    });
    it('should be nextDir', () => {
      expect(srv.dir).toBe(LTR);
      expect(srv.nextDir).toBe(RTL);
    });
    it('should be update dir attribute of html element', () => {
      expect(srv.dir).toBe(LTR);
      srv.toggle();
      expect(srv.dir).toBe(RTL);
      expect(getHtmlDir()).toBe(RTL);
    });
  });
});
