import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private _getDocument(): Document {
    return this._doc || document;
  }

  private _getWindow(): Window {
    const doc = this._getDocument();
    return doc.defaultView || window;
  }

  constructor(@Inject(DOCUMENT) private _doc: any, private platform: Platform) {}

  /**
   * 获取滚动条位置
   * @param element 指定元素，默认 `window`
   */
  getScrollPosition(element?: Element | Window): [number, number] {
    if (!this.platform.isBrowser) {
      return [0, 0];
    }
    const win = this._getWindow();
    if (element && element !== win) {
      return [(element as Element).scrollLeft, (element as Element).scrollTop];
    } else {
      return [win.pageXOffset, win.pageYOffset];
    }
  }

  /**
   * 设置滚动条位置
   * @param element 指定元素
   */
  scrollToPosition(element: Element | Window | null | undefined, position: [number, number]): void {
    if (!this.platform.isBrowser) {
      return;
    }
    (element || this._getWindow()).scrollTo(position[0], position[1]);
  }

  /**
   * 设置滚动条至指定元素
   * @param element 指定元素，默认 `document.body`
   * @param topOffset 偏移值，默认 `0`
   */
  scrollToElement(element?: Element | null, topOffset = 0) {
    if (!this.platform.isBrowser) {
      return;
    }
    if (!element) element = this._getDocument().body;

    element!.scrollIntoView();

    const w = this._getWindow();
    if (w && w.scrollBy) {
      w.scrollBy(0, element!.getBoundingClientRect().top - topOffset);

      if (w.pageYOffset < 20) {
        w.scrollBy(0, -w.pageYOffset);
      }
    }
  }

  /**
   * 滚动至顶部
   * @param topOffset 偏移值，默认 `0`
   */
  scrollToTop(topOffset = 0) {
    if (!this.platform.isBrowser) {
      return;
    }
    this.scrollToElement(this._getDocument().body, topOffset);
  }
}
