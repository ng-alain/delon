import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly _doc = inject(DOCUMENT);
  private readonly platform = inject(Platform);
  private _getDoc(): Document {
    return this._doc || document;
  }

  private _getWin(): Window {
    const doc = this._getDoc();
    return doc.defaultView || window;
  }

  /**
   * 获取滚动条位置
   *
   * @param element 指定元素，默认 `window`
   */
  getScrollPosition(element?: Element | Window | null): [number, number] {
    if (!this.platform.isBrowser) {
      return [0, 0];
    }

    const win = this._getWin();
    if (element && element !== win) {
      return [(element as Element).scrollLeft, (element as Element).scrollTop];
    } else {
      return [win.scrollX, win.scrollY];
    }
  }

  /**
   * 设置滚动条位置
   *
   * @param element 指定元素
   */
  scrollToPosition(element: Element | Window | null | undefined, position: [number, number]): void {
    if (!this.platform.isBrowser) {
      return;
    }
    (element || this._getWin()).scrollTo(position[0], position[1]);
  }

  /**
   * 设置滚动条至指定元素
   *
   * @param element 指定元素，默认 `document.body`
   * @param topOffset 偏移值，默认 `0`
   */
  scrollToElement(element?: Element | null, topOffset: number = 0): void {
    if (!this.platform.isBrowser) {
      return;
    }
    if (!element) {
      element = this._getDoc().body;
    }

    element.scrollIntoView();

    const win = this._getWin();
    if (win && win.scrollBy) {
      win.scrollBy(0, element!.getBoundingClientRect().top - topOffset);

      if (win.scrollY < 20) {
        win.scrollBy(0, -win.scrollY);
      }
    }
  }

  /**
   * 滚动至顶部
   *
   * @param topOffset 偏移值，默认 `0`
   */
  scrollToTop(topOffset: number = 0): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.scrollToElement(this._getDoc().body, topOffset);
  }
}
