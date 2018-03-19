import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '../../win_tokens';

@Injectable()
export class ScrollService {

  constructor(
    @Inject(WINDOW) private win: any,
    @Inject(DOCUMENT) private doc: any
  ) { }

  /**
   * 设置滚动条至指定元素
   * @param element 指定元素，默认 `document.body`
   * @param topOffset 偏移值，默认 `0`
   */
  scrollToElement(element?: Element, topOffset = 0) {
    if (!element) element = this.doc.body;

    element.scrollIntoView();

    const w = this.win;
    if (w && w.scrollBy) {
        w.scrollBy(0, element.getBoundingClientRect().top - topOffset);

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
