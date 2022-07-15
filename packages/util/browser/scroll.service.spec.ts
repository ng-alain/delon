import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Injector, StaticProvider } from '@angular/core';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { ScrollService } from './scroll.service';

describe('Util: ScrollService', () => {
  const topOfPageElem = {} as Element;
  let injector: Injector;
  let doc: NzSafeAny;
  let window: NzSafeAny;
  let srv: ScrollService;

  class MockElement {
    getBoundingClientRect = jasmine.createSpy('Element getBoundingClientRect').and.returnValue({ top: 0 });
    scrollIntoView = jasmine.createSpy('Element scrollIntoView');
    scrollTo = jasmine.createSpy('Element scrollTo');
  }

  class MockDocument {
    body = new MockElement();
    getElementById = jasmine.createSpy('Document getElementById').and.returnValue(topOfPageElem);
    querySelector = jasmine.createSpy('Document querySelector');
    defaultView: NzSafeAny = null;
  }

  describe('[default]', () => {
    class MockWindow {
      scrollBy(): void {}
      scrollTo(): void {}
    }
    beforeEach(() => {
      const providers = [
        { provide: ScrollService, useClass: ScrollService, deps: [DOCUMENT, Platform] },
        { provide: Platform, useValue: { isBrowser: true } },
        { provide: DOCUMENT, useClass: MockDocument, deps: [] }
      ] as StaticProvider[];
      injector = Injector.create({ providers });
      doc = injector.get(DOCUMENT) as NzSafeAny;
      doc.defaultView = new MockWindow();
      window = doc.defaultView;
      srv = injector.get(ScrollService);

      spyOn(window, 'scrollBy');
      spyOn(window, 'scrollTo');
    });

    describe('#getScrollPosition', () => {
      it('with HTMLElement', () => {
        const element: Element = new MockElement() as NzSafeAny;
        element.scrollLeft = 10;
        element.scrollTop = 11;
        const position = srv.getScrollPosition(element);
        expect(position[0]).toBe(10);
        expect(position[1]).toBe(11);
      });
      it('with Window', () => {
        window.scrollX = 10;
        window.scrollY = 11;
        const position = srv.getScrollPosition();
        expect(position[0]).toBe(10);
        expect(position[1]).toBe(11);
      });
    });

    describe('#scrollToPosition', () => {
      it('with HTMLElement', () => {
        const element: Element = new MockElement() as NzSafeAny;
        srv.scrollToPosition(element, [10, 11]);
        expect(element.scrollTo).toHaveBeenCalledWith(10, 11);
      });
      it('with Window', () => {
        srv.scrollToPosition(null, [10, 11]);
        expect(window.scrollTo).toHaveBeenCalledWith(10, 11);
      });
    });

    describe('#scrollToElement', () => {
      it('should scroll to element', () => {
        const element: Element = new MockElement() as NzSafeAny;
        srv.scrollToElement(element);
        expect(element.scrollIntoView).toHaveBeenCalled();
        expect(window.scrollBy).toHaveBeenCalledWith(0, 0);
      });

      it('should not scroll more than necessary (e.g. for elements close to the bottom)', () => {
        const element: Element = new MockElement() as NzSafeAny;
        const getBoundingClientRect = element.getBoundingClientRect as jasmine.Spy;
        const topOffset = 0;

        getBoundingClientRect.and.returnValue({ top: topOffset + 100 });
        srv.scrollToElement(element);
        expect(element.scrollIntoView).toHaveBeenCalledTimes(1);
        expect(window.scrollBy).toHaveBeenCalledWith(0, 100);

        getBoundingClientRect.and.returnValue({ top: topOffset - 10 });
        srv.scrollToElement(element);
        expect(element.scrollIntoView).toHaveBeenCalledTimes(2);
        expect(window.scrollBy).toHaveBeenCalledWith(0, -10);
      });

      it('should scroll all the way to the top if close enough', () => {
        const element: Element = new MockElement() as NzSafeAny;

        (window as NzSafeAny).scrollY = 25;
        srv.scrollToElement(element);

        expect(element.scrollIntoView).toHaveBeenCalled();
        expect(window.scrollBy).toHaveBeenCalledWith(0, 0);
        (window.scrollBy as jasmine.Spy).calls.reset();

        (window as NzSafeAny).scrollY = 15;
        srv.scrollToElement(element);

        expect(element.scrollIntoView).toHaveBeenCalled();
        expect(window.scrollBy).toHaveBeenCalledWith(0, 0);
        expect(window.scrollBy).toHaveBeenCalledWith(0, -15);
      });

      it('should scroll to top if no element', () => {
        srv.scrollToElement(null);
        expect(window.scrollBy).toHaveBeenCalledWith(0, 0);
      });

      it('should only use scrollIntoView', () => {
        doc.defaultView.scrollBy = null;
        const element: Element = new MockElement() as NzSafeAny;
        srv.scrollToElement(element);
        expect(element.scrollIntoView).toHaveBeenCalled();
        expect(element.getBoundingClientRect).not.toHaveBeenCalled();
      });
    });

    describe('#scrollToTop', () => {
      it('should scroll to top', () => {
        srv.scrollToTop();
        expect(window.scrollBy).toHaveBeenCalledWith(0, 0);
      });
      it('should scroll to top of offset 10 pixels', () => {
        srv.scrollToTop(10);
        expect(window.scrollBy).toHaveBeenCalledWith(0, -10);
      });
    });
  });
});
