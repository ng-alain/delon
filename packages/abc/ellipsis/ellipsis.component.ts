import { CdkObserveContent } from '@angular/cdk/observers';
import { DOCUMENT, NgClass, NgStyle, NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  numberAttribute
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { take } from 'rxjs';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'ellipsis',
  exportAs: 'ellipsis',
  templateUrl: './ellipsis.component.html',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CdkObserveContent, NzTooltipDirective, NgTemplateOutlet, NgClass, NgStyle]
})
export class EllipsisComponent implements AfterViewInit, OnChanges {
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly ngZone = inject(NgZone);
  private readonly dom = inject(DomSanitizer);
  private readonly doc = inject(DOCUMENT);
  private readonly cdr = inject(ChangeDetectorRef);
  private isSupportLineClamp = this.doc.body.style['webkitLineClamp'] !== undefined;
  @ViewChild('orgEl', { static: false }) private orgEl!: ElementRef;
  @ViewChild('shadowOrgEl', { static: false }) private shadowOrgEl!: ElementRef;
  @ViewChild('shadowTextEl', { static: false }) private shadowTextEl!: ElementRef;
  private inited = false;
  orgHtml!: SafeHtml;
  type = 'default';
  cls = {};
  text = '';
  targetCount = 0;

  @Input({ transform: booleanAttribute }) tooltip = false;
  @Input({ transform: (v: unknown) => (v == null ? null : numberAttribute(v)) }) length?: number;
  @Input({ transform: (v: unknown) => (v == null ? null : numberAttribute(v)) }) lines?: number;
  @Input({ transform: booleanAttribute }) fullWidthRecognition = false;
  @Input() tail = '...';

  get linsWord(): string {
    const { targetCount, text, tail } = this;
    return (
      (targetCount > 0 ? text.substring(0, targetCount) : '') +
      (targetCount > 0 && targetCount < text.length ? tail : '')
    );
  }

  private get win(): NzSafeAny {
    return this.doc.defaultView || window;
  }

  private getStrFullLength(str: string): number {
    return str.split('').reduce((pre, cur) => {
      const charCode = cur.charCodeAt(0);
      if (charCode >= 0 && charCode <= 128) {
        return pre + 1;
      }
      return pre + 2;
    }, 0);
  }

  private cutStrByFullLength(str: string, maxLength: number): string {
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
    targetHeight: number,
    mid: number,
    begin: number,
    end: number,
    text: string,
    node: HTMLElement
  ): number {
    const suffix = this.tail;
    node.innerHTML = text.substring(0, mid) + suffix;
    let sh = node.offsetHeight;

    if (sh <= targetHeight) {
      node.innerHTML = text.substring(0, mid + 1) + suffix;
      sh = node.offsetHeight;
      if (sh > targetHeight || mid === begin) {
        return mid;
      }
      begin = mid;
      mid = end - begin === 1 ? begin + 1 : Math.floor((end - begin) / 2) + begin;
      return this.bisection(targetHeight, mid, begin, end, text, node);
    }
    if (mid - 1 < 0) {
      return mid;
    }
    node.innerHTML = text.substring(0, mid - 1) + suffix;
    sh = node.offsetHeight;
    if (sh <= targetHeight) {
      return mid - 1;
    }
    end = mid;
    mid = Math.floor((end - begin) / 2) + begin;
    return this.bisection(targetHeight, mid, begin, end, text, node);
  }

  private genType(): void {
    const { lines, length, isSupportLineClamp } = this;
    this.cls = {
      ellipsis: true,
      ellipsis__lines: lines && !isSupportLineClamp,
      'ellipsis__line-clamp': lines && isSupportLineClamp
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
  }

  private gen(): void {
    const { type, lines, length, fullWidthRecognition, tail, orgEl, cdr, ngZone } = this;
    if (type === 'length') {
      const el = orgEl.nativeElement as HTMLElement;
      if (el.children.length > 0) {
        throw new Error('Ellipsis content must be string.');
      }
      const lengthText = el.textContent!;
      const textLength = fullWidthRecognition ? this.getStrFullLength(lengthText) : lengthText.length;
      if (textLength <= length! || length! < 0) {
        this.text = lengthText;
      } else {
        let displayText: string;
        if (length! - tail.length <= 0) {
          displayText = '';
        } else {
          displayText = fullWidthRecognition
            ? this.cutStrByFullLength(lengthText, length!)
            : lengthText.slice(0, length);
        }
        this.text = displayText + tail;
      }
      ngZone.run(() => cdr.detectChanges());
    } else if (type === 'line') {
      const { shadowOrgEl, shadowTextEl } = this;
      const orgNode = shadowOrgEl.nativeElement as HTMLElement;
      const lineText = orgNode.innerText || orgNode.textContent!;
      const lineHeight = parseInt(this.win.getComputedStyle(this.getEl('.ellipsis')).lineHeight!, 10);
      const targetHeight = lines! * lineHeight;
      const handleEl = this.getEl('.ellipsis__handle');
      handleEl!.style.height = `${targetHeight}px`;

      if (orgNode.offsetHeight <= targetHeight) {
        this.text = lineText;
        this.targetCount = lineText.length;
      } else {
        // bisection
        const len = lineText.length;
        const mid = Math.ceil(len / 2);

        const count = this.bisection(targetHeight, mid, 0, len, lineText, shadowTextEl.nativeElement.firstChild);
        this.text = lineText;
        this.targetCount = count;
      }
      ngZone.run(() => cdr.detectChanges());
    }
  }

  private getEl(cls: string): HTMLElement | null {
    return this.el.querySelector<HTMLElement>(cls);
  }

  private executeOnStable(fn: () => void): void {
    if (this.ngZone.isStable) {
      fn();
    } else {
      this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(fn);
    }
  }

  refresh(): void {
    this.genType();
    const { type, dom, orgEl, cdr } = this;
    const html = orgEl.nativeElement.innerHTML;
    this.orgHtml = dom.bypassSecurityTrustHtml(html);
    cdr.detectChanges();
    this.executeOnStable(() => {
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
