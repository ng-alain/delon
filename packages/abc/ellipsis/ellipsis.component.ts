import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  Renderer2,
  SimpleChange,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util';

@Component({
  selector: 'ellipsis',
  templateUrl: './ellipsis.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EllipsisComponent implements AfterViewInit, OnChanges {

  // tslint:disable-next-line:no-string-literal
  private isSupportLineClamp = this.doc.body.style['webkitLineClamp'] !== undefined;
  @ViewChild('contentEl') contentEl: TemplateRef<void>;
  @ViewChild('titleEl') titleEl: TemplateRef<void>;
  @ViewChild('shadowEl') shadowEl: ElementRef;
  type = 'default';
  cls = {};
  text = '';
  targetCount = 0;

  // #region fields

  @Input() @InputBoolean() tooltip = false;
  @Input() @InputNumber() length: number;
  @Input() @InputNumber() lines: number;
  @Input() @InputBoolean() fullWidthRecognition = false;
  @Input() tail = '...';

  // #endregion

  constructor(private el: ElementRef, @Inject(DOCUMENT) private doc: Document, private cdr: ChangeDetectorRef) {
  }

  private getStrFullLength(str = ''): number {
    return str.split('').reduce((pre, cur) => {
      const charCode = cur.charCodeAt(0);
      if (charCode >= 0 && charCode <= 128) {
        return pre + 1;
      }
      return pre + 2;
    }, 0);
  }

  private cutStrByFullLength(str = '', maxLength: number) {
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

  private computeLine(): void {
    const { lines, isSupportLineClamp } = this;
    if (!lines || isSupportLineClamp) return;
  }

  // private bisection(th, m, b, e, text, shadowNode): void {
  //   const suffix = '...';
  //   let mid = m;
  //   let end = e;
  //   let begin = b;
  //   shadowNode.innerHTML = text.substring(0, mid) + suffix;
  //   let sh = shadowNode.offsetHeight;

  //   if (sh <= th) {
  //     shadowNode.innerHTML = text.substring(0, mid + 1) + suffix;
  //     sh = shadowNode.offsetHeight;
  //     if (sh > th || mid === begin) {
  //       return mid;
  //     }
  //     begin = mid;
  //     if (end - begin === 1) {
  //       mid = 1 + begin;
  //     } else {
  //       mid = Math.floor((end - begin) / 2) + begin;
  //     }
  //     return this.bisection(th, mid, begin, end, text, shadowNode);
  //   }
  //   if (mid - 1 < 0) {
  //     return mid;
  //   }
  //   shadowNode.innerHTML = text.substring(0, mid - 1) + suffix;
  //   sh = shadowNode.offsetHeight;
  //   if (sh <= th) {
  //     return mid - 1;
  //   }
  //   end = mid;
  //   mid = Math.floor((end - begin) / 2) + begin;
  //   return this.bisection(th, mid, begin, end, text, shadowNode);
  // }

  private genType() {
    const { lines, length, isSupportLineClamp, fullWidthRecognition, tail, shadowEl } = this;
    this.cls = {
      'ellipsis': true,
      'ellipsis__lines': lines && !isSupportLineClamp,
      'ellipsis__line-clamp': lines && isSupportLineClamp,
    };
    if (!lines && !length) {
      this.type = 'default';
    } else if (!lines) {
      const el = shadowEl.nativeElement as HTMLElement;
      if (el.children.length > 0) {
        throw new Error('Ellipsis content must be string.');
      }
      this.type = 'length';
      const text = el.textContent;
      const textLength = fullWidthRecognition ? this.getStrFullLength(text) : text.length;
      if (textLength <= length || length < 0) {
        this.text = text;
        return ;
      }
      let displayText: string;
      if (length - tail.length <= 0) {
        displayText = '';
      } else {
        displayText = fullWidthRecognition ? this.cutStrByFullLength(text, length) : text.slice(0, length);
      }
      this.text = displayText + tail;
    } else if (isSupportLineClamp) {
      // const coloneNode = (this.shadowEl.nativeElement as HTMLElement).cloneNode();
      // const titleTplEl = titleTpl.nativeElement as HTMLElement;
      // titleTplEl.innerHTML = '';
      // titleTplEl.appendChild(coloneNode);
      this.type = 'line-clamp';
    } else {
      this.type = 'line';
    }
  }

  private cloneNode() {
    const { shadowEl } = this;
    const el = this.el.nativeElement.querySelector('.ellipsis');
    if (el) {
      el.innerHTML = shadowEl.nativeElement.innerHTML;
    }
  }

  ngAfterViewInit(): void {
    this.computeLine();
    this.genType();
    this.cdr.detectChanges();
    this.cloneNode();
  }

  ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
    // if (!changes.lines.firstChange) {
    //   this.computeLine();
    //   this.genType();
    //   this.cdr.detectChanges();
    // }
  }
}
