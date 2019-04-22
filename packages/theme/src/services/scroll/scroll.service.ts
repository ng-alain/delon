import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { WINDOW } from '../../win_tokens';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  constructor(@Inject(WINDOW) private win: any, @Inject(DOCUMENT) private doc: any) {}

  /**
   * 获取滚动条位置
   * @param element 指定元素，默认 `window`
   */
  getScrollPosition(element?: Element): [number, number] {
    if (element && element !== this.win) {
      return [element.scrollLeft, element.scrollTop];
    } else {
      return [this.win.pageXOffset, this.win.pageYOffset];
    }
  }

  /**
   * 设置滚动条位置
   * @param element 指定元素
   */
  scrollToPosition(element: Element | Window | null | undefined, position: [number, number]): void {
    (element || this.win).scrollTo(position[0], position[1]);
  }

  /**
   * 设置滚动条至指定元素
   * @param element 指定元素，默认 `document.body`
   * @param topOffset 偏移值，默认 `0`
   */
  scrollToElement(element?: Element | null, topOffset = 0) {
    if (!element) element = this.doc.body;

    element!.scrollIntoView();

    const w = this.win;
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
    this.scrollToElement(this.doc.body, topOffset);
  }
}
