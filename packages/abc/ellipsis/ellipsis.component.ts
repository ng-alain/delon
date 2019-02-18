import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  NgZone,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { InputBoolean, InputNumber } from '@delon/util';
import { take } from 'rxjs/operators';

@Component({
  selector: 'ellipsis',
  templateUrl: './ellipsis.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EllipsisComponent implements AfterViewInit, OnChanges {
  // tslint:disable-next-line:no-string-literal
  private isSupportLineClamp = this.doc.body.style['webkitLineClamp'] !== undefined;
  @ViewChild('orgEl') private orgEl: ElementRef;
  @ViewChild('shadowOrgEl') private shadowOrgEl: ElementRef;
  @ViewChild('shadowTextEl') private shadowTextEl: ElementRef;
  private inited = false;
  orgHtml: SafeHtml;
  type = 'default';
  cls = {};
  text = '';
  targetCount = 0;

  // #region fields

  @Input() @InputBoolean() tooltip = false;
  @Input() @InputNumber(null) length: number;
  @Input() @InputNumber(null) lines: number;
  @Input() @InputBoolean() fullWidthRecognition = false;
  @Input() tail = '...';

  // #endregion

  constructor(
    private el: ElementRef,
    private ngZone: NgZone,
    private dom: DomSanitizer,
    @Inject(DOCUMENT) private doc: Document,
    private cdr: ChangeDetectorRef,
  ) {}

  private getStrFullLength(str: string): number {
    return str.split('').reduce((pre, cur) => {
      const charCode = cur.charCodeAt(0);
      if (charCode >= 0 && charCode <= 128) {
        return pre + 1;
      }
      return pre + 2;
    }, 0);
  }

  private cutStrByFullLength(str: string, maxLength: number) {
    let showLength = 0;
    return str.split('').reduce((pre, cur) => {
      const charCode = cur.charCodeAt(0);
      if (charCode >= 0 && charCode <= 128) {
        showLength += 1;
      } else {
        showLength += 2;
      }
      if (showLength <= maxLength) {
        return pre + cur;
      }
      return pre;
    }, '');
  }

  private bisection(
    th: number,
    m: number,
    b: number,
    e: number,
    text: string,
    shadowNode: HTMLElement,
  ): number {
    const suffix = this.tail;
    let mid = m;
    let end = e;
    let begin = b;
    shadowNode.innerHTML = text.substring(0, mid) + suffix;
    let sh = shadowNode.offsetHeight;

    if (sh <= th) {
      shadowNode.innerHTML = text.substring(0, mid + 1) + suffix;
      sh = shadowNode.offsetHeight;
      if (sh > th || mid === begin) {
        return mid;
      }
      begin = mid;
      if (end - begin === 1) {
        mid = begin + 1;
      } else {
        mid = Math.floor((end - begin) / 2) + begin;
      }
      return this.bisection(th, mid, begin, end, text, shadowNode);
    }
    if (mid - 1 < 0) {
      return mid;
    }
    shadowNode.innerHTML = text.substring(0, mid - 1) + suffix;
    sh = shadowNode.offsetHeight;
    if (sh <= th) {
      return mid - 1;
    }
    end = mid;
    mid = Math.floor((end - begin) / 2) + begin;
    return this.bisection(th, mid, begin, end, text, shadowNode);
  }

  private genType() {
    const { lines, length, isSupportLineClamp, cdr } = this;
    this.cls = {
      ellipsis: true,
      ellipsis__lines: lines && !isSupportLineClamp,
      'ellipsis__line-clamp': lines && isSupportLineClamp,
    };
    if (!lines && !length) {
      this.type = 'default';
    } else if (!lines) {
      this.type = 'length';
    } else if (isSupportLineClamp) {
      this.type = 'line-clamp';
    } else {
      this.type = 'line';
    }
    cdr.detectChanges();
  }

  private gen() {
    const { type, lines, length, fullWidthRecognition, tail, orgEl, cdr } = this;
    if (type === 'length') {
      const el = orgEl.nativeElement as HTMLElement;
      if (el.children.length > 0) {
        throw new Error('Ellipsis content must be string.');
      }
      const text = el.textContent;
      const textLength = fullWidthRecognition ? this.getStrFullLength(text) : text.length;
      if (textLength <= length || length < 0) {
        this.text = text;
      } else {
        let displayText: string;
        if (length - tail.length <= 0) {
          displayText = '';
        } else {
          displayText = fullWidthRecognition
            ? this.cutStrByFullLength(text, length)
            : text.slice(0, length);
        }
        this.text = displayText + tail;
      }
      cdr.detectChanges();
    } else if (type === 'line') {
      const { shadowOrgEl, shadowTextEl } = this;
      const orgNode = shadowOrgEl.nativeElement as HTMLElement;
      const text = orgNode.innerText || orgNode.textContent;
      const lineHeight = parseInt(getComputedStyle(this.getEl('.ellipsis')).lineHeight, 10);
      const targetHeight = lines * lineHeight;
      this.getEl('.ellipsis__handle').style.height = `${targetHeight}px`;

      if (orgNode.offsetHeight <= targetHeight) {
        this.text = text;
        this.targetCount = text.length;
      } else {
        // bisection
        const len = text.length;
        const mid = Math.ceil(len / 2);

        const count = this.bisection(
          targetHeight,
          mid,
          0,
          len,
          text,
          shadowTextEl.nativeElement.firstChild,
        );
        this.text = text;
        this.targetCount = count;
      }
      cdr.detectChanges();
    }
  }

  private getEl(cls: string): HTMLElement {
    return this.el.nativeElement.querySelector(cls);
  }

  private executeOnStable(fn: () => void): void {
    if (this.ngZone.isStable) {
      fn();
    } else {
      this.ngZone.onStable
        .asObservable()
        .pipe(take(1))
        .subscribe(fn);
    }
  }

  refresh(): void {
    this.genType();
    this.executeOnStable(() => {
      const { type, dom, orgEl, cdr } = this;
      const html = orgEl.nativeElement.innerHTML;
      this.orgHtml = dom.bypassSecurityTrustHtml(html);
      cdr.detectChanges();
      this.gen();
      if (type !== 'line') {
        const el = this.getEl('.ellipsis');
        if (el) {
          el.innerHTML = html;
        }
      }
    });
  }

  ngAfterViewInit(): void {
    this.inited = true;
    this.refresh();
  }

  ngOnChanges(): void {
    if (this.inited) {
      this.refresh();
    }
  }
}
