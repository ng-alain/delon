import { DOCUMENT } from '@angular/common';
import { Injector, StaticProvider } from '@angular/core';

import { WINDOW } from '../../win_tokens';
import { ScrollService } from './scroll.service';

describe('Service: Scroll', () => {
  const topOfPageElem = {} as Element;
  let injector: Injector;
  let window: any;
  let scrollService: ScrollService;

  class MockElement {
    getBoundingClientRect = jasmine.createSpy('Element getBoundingClientRect').and.returnValue({ top: 0 });
    scrollIntoView = jasmine.createSpy('Element scrollIntoView');
    scrollTo = jasmine.createSpy('Element scrollTo');
  }

  class MockDocument {
    body = new MockElement();
    getElementById = jasmine.createSpy('Document getElementById').and.returnValue(topOfPageElem);
    querySelector = jasmine.createSpy('Document querySelector');
  }

  describe('[default]', () => {
    class MockWindow {
      scrollBy() {}
      scrollTo() {}
    }
    beforeEach(() => {
      const providers = [
        { provide: ScrollService, useClass: ScrollService, deps: [WINDOW, DOCUMENT] },
        { provide: WINDOW, useClass: MockWindow, deps: [] },
        { provide: DOCUMENT, useClass: MockDocument, deps: [] },
      ] as StaticProvider[];
      injector = Injector.create({ providers });
      window = injector.get(WINDOW);
      scrollService = injector.get(ScrollService);

      spyOn(window, 'scrollBy');
      spyOn(window, 'scrollTo');
    });

    describe('#getScrollPosition', () => {
      it('with HTMLElement', () => {
        const element: Element = new MockElement() as any;
        element.scrollLeft = 10;
        element.scrollTop = 11;
        const position = scrollService.getScrollPosition(element);
        expect(position[0]).toBe(10);
        expect(position[1]).toBe(11);
      });
      it('with Window', () => {
        window.pageXOffset = 10;
        window.pageYOffset = 11;
        const position = scrollService.getScrollPosition();
        expect(position[0]).toBe(10);
        expect(position[1]).toBe(11);
      });
    });

    describe('#scrollToPosition', () => {
      it('with HTMLElement', () => {
        const element: Element = new MockElement() as any;
        scrollService.scrollToPosition(element, [10, 11]);
        expect(element.scrollTo).toHaveBeenCalledWith(10, 11);
      });
      it('with Window', () => {
        scrollService.scrollToPosition(null, [10, 11]);
        expect(window.scrollTo).toHaveBeenCalledWith(10, 11);
      });
    });

    describe('#scrollToElement', () => {
      it('should scroll to element', () => {
        const element: Element = new MockElement() as any;
        scrollService.scrollToElement(element);
        expect(element.scrollIntoView).toHaveBeenCalled();
        expect(window.scrollBy).toHaveBeenCalledWith(0, 0);
      });

      it('should not scroll more than necessary (e.g. for elements close to the bottom)', () => {
        const element: Element = new MockElement() as any;
        const getBoundingClientRect = element.getBoundingClientRect as jasmine.Spy;
        const topOffset = 0;

        getBoundingClientRect.and.returnValue({ top: topOffset + 100 });
        scrollService.scrollToElement(element);
        expect(element.scrollIntoView).toHaveBeenCalledTimes(1);
        expect(window.scrollBy).toHaveBeenCalledWith(0, 100);

        getBoundingClientRect.and.returnValue({ top: topOffset - 10 });
        scrollService.scrollToElement(element);
        expect(element.scrollIntoView).toHaveBeenCalledTimes(2);
        expect(window.scrollBy).toHaveBeenCalledWith(0, -10);
      });

      it('should scroll all the way to the top if close enough', () => {
        const element: Element = new MockElement() as any;

        (window as any).pageYOffset = 25;
        scrollService.scrollToElement(element);

        expect(element.scrollIntoView).toHaveBeenCalled();
        expect(window.scrollBy).toHaveBeenCalledWith(0, 0);
        (window.scrollBy as jasmine.Spy).calls.reset();

        (window as any).pageYOffset = 15;
        scrollService.scrollToElement(element);

        expect(element.scrollIntoView).toHaveBeenCalled();
        expect(window.scrollBy).toHaveBeenCalledWith(0, 0);
        expect(window.scrollBy).toHaveBeenCalledWith(0, -15);
      });

      it('should scroll to top if no element', () => {
        scrollService.scrollToElement(null);
        expect(window.scrollBy).toHaveBeenCalledWith(0, 0);
      });
    });

    describe('#scrollToTop', () => {
      it('should scroll to top', () => {
        scrollService.scrollToTop();
        expect(window.scrollBy).toHaveBeenCalledWith(0, 0);
      });
      it('should scroll to top of offset 10 pixels', () => {
        scrollService.scrollToTop(10);
        expect(window.scrollBy).toHaveBeenCalledWith(0, -10);
      });
    });
  });

  describe('[edge]', () => {
    class MockWindow {
      scrollBy = null;
    }
    beforeEach(() => {
      const providers = [
        { provide: ScrollService, useClass: ScrollService, deps: [WINDOW, DOCUMENT] },
        { provide: WINDOW, useClass: MockWindow, deps: [] },
        { provide: DOCUMENT, useClass: MockDocument, deps: [] },
      ] as StaticProvider[];
      injector = Injector.create({ providers });
      window = injector.get(WINDOW);
      scrollService = injector.get(ScrollService);
    });
    it('should only use scrollIntoView', () => {
      const element: Element = new MockElement() as any;
      scrollService.scrollToElement(element);
      expect(element.scrollIntoView).toHaveBeenCalled();
      expect(element.getBoundingClientRect).not.toHaveBeenCalled();
    });
  });
});
